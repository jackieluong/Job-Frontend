'use client';

import React, { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';
import { roleColorMap } from '@/data/map';
import { Conversation, useChat, User } from '@/store/chatStore';
import { Client } from '@stomp/stompjs';
import SockJS from 'sockjs-client';
import { MessageReceived, MessageSend } from '@/lib/type';
import { useAuth } from '@/store/userStore';
import { formatDateTime } from '@/lib/utils';
import ChatService from '@/services/chatService';
import { webSocketService } from '@/lib/webSocketService';

// Dummy data for users and messages
// const users = [
//     { id: 1, name: 'Nguyen Van A', role: "APPLICANT" },
//     { id: 2, name: 'Tran Thi B',  role: "APPLICANT" },
//     { id: 3, name: 'Le Van C',  role: "COMPANY" },
// ];

// const messagesData: Record<number, { sender: string; text: string }[]> = {
//     1: [
//         // { sender: 'Nguyen Van A', text: 'Chào bạn!' },
//         // { sender: 'Bạn', text: 'Chào bạn, bạn khỏe không?' },
//     ],
//     2: [
//         { sender: 'Tran Thi B', text: 'Bạn có rảnh không?' },
//         { sender: 'Bạn', text: 'Tôi đang làm việc, có chuyện gì không?' },
//     ],
//     3: [
//         { sender: 'Le Van C', text: 'Xin chào, có gì mới không?' },
//         { sender: 'Bạn', text: 'Không có gì mới, còn bạn?' },
//     ],
// };

//map with element have key is conversation id and value is a message array
type MessageMap = Record<number, MessageReceived[]>;

export default function ChatPage() {
  const [conversation, setConversation] = useState<Conversation | null>(null);
  const [messages, setMessages] = useState<MessageMap>({});
  const newMessage = useRef<HTMLInputElement>(null);

  const [searchUsers, setSearchUsers] = useState<User[] | null>(null);

  const { conversations, fetchConversations } = useChat();

  const { user } = useAuth();

  // const [stompClient, setStompClient] = useState<Client | null>(null);
  const stompClientRef = useRef<Client | null>(null);

  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  const searchKeyword = useRef<string>('');

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, conversation]);

  useEffect(() => {
    if (user.id == null) return;

    fetchConversations(Number(user.id));
  }, [user.id, messages]);

  // useEffect(() => {
  //     const lastMessage = messages[messages.length -1];

  //     // const conversationExist = conversations.some((conversation) => conversation.id === lastMessage.);

  // }, [messages]);
  // useEffect(() => {
  //   const connect = () => {

  //     if (stompClientRef.current !== null) return;

  //     const socket = new SockJS(process.env.NEXT_PUBLIC_WEBSOCKET_URL || '');
  //     const client = new Client({
  //       webSocketFactory: () => socket,
  //       connectHeaders: {
  //         Authorization: `Bearer ${JSON.parse(localStorage.getItem('accessToken'))}`, // Assuming token is stored in localStorage
  //       },
  //       debug: (str) => {
  //         console.log('STOMP Debug:', str);
  //       },

  //       onConnect: (frame) => {
  //         // console.log("Connected to WebSocket, session ID:", frame.headers);
  //         console.log('Connected to WebSocket, headers:', frame.headers);
  //         client.subscribe(
  //           process.env.NEXT_PUBLIC_PRIVATE_QUEUE_SUB_URL || '',
  //           (message) => {
  //             console.log('Received message:', JSON.parse(message.body));
  //             const receivedMessage: MessageReceived = JSON.parse(message.body);
  //             //   const newMessage: Message = {
  //             //     senderId: receivedMessage.senderId,
  //             //     senderName: receivedMessage.senderName,
  //             //     senderRole: receivedMessage.senderRole,
  //             //     content:receivedMessage.content,
  //             //     timeStamp: receivedMessage.timeStamp
  //             //   }
  //             const conId: number = receivedMessage.conversationId;
  //             if (!conId) return;
  //             // const messagesMap: MessageMap = {
  //             //     ...messages,
  //             //     [conId] : [...(messages[conId] || []), receivedMessage]
  //             // }

  //             setMessages((prev) => {
  //               return {
  //                 ...prev,
  //                 [conId]: [...(prev[conId] || []), receivedMessage],
  //               };
  //             });
  //           },
  //         );
  //       },

  //       onDisconnect: () => {
  //         console.log('Disconnected from WebSocket on ondisconnect func');
  //       },
  //       onStompError: (frame) => {
  //         console.error('Broker reported error: ' + frame.headers['message']);
  //         console.error('Additional details: ' + frame.body);
  //       },
  //     });
  //     client.activate();
  //     // setStompClient(client);
  //     stompClientRef.current = client;
  //   };

  //   connect();

  //   return () => {
  //     // Cleanup function
  //     if (stompClientRef.current) {
  //       stompClientRef.current?.deactivate();
  //       stompClientRef.current = null;
  //       console.log('Disconnected from WebSocket');
  //     }
  //   };
  // }, []);

  useEffect(() => {
    // Connect to WebSocket
    webSocketService.connect();

    // Subscribe to private message queue
    const unsubscribe = webSocketService.subscribe<MessageReceived>(
      process.env.NEXT_PUBLIC_PRIVATE_QUEUE_SUB_URL || '',
      (receivedMessage) => {
        console.log('Received message:', receivedMessage);
        const conId = receivedMessage.conversationId;
        if (!conId) return;
        setMessages((prev) => ({
          ...prev,
          [conId]: [...(prev[conId] || []), receivedMessage],
        }));
      },
    );

    // Cleanup on unmount
    return () => {
      unsubscribe();
    };
  }, []);

  const handleConversationClick = async (clickedConversation: Conversation) => {
    setConversation(clickedConversation);
    // setMessages(messagesData[userId] || []);
    // fetch messages API
    console.log('conversationId: ', clickedConversation.id);
    if (messages[clickedConversation.id]) return;

    const chatData = await ChatService.fetchChatHistory(
      clickedConversation.id,
    ).then((response) => response.data);

    const newMsg: MessageReceived[] = chatData.map(
      (message): MessageReceived => {
        return {
          senderId: message.senderId,
          // recipientId: message.receiverId,
          content: message.content,
          timeStamp: message.time,
          messageStatus: message.messageStatus,
          conversationId: message.conversationId,
        };
      },
    );

    setMessages((prevMessages) => ({
      ...prevMessages,
      [clickedConversation.id]: newMsg,
    }));
  };

  const handleSendMessage = (conversationId: number) => {
    if (!newMessage.current?.value.trim() || conversation === null) return;

    const message: MessageSend = {
      senderId: user.id?.toString() || '',
      senderName: user.name || '',
      senderRole: user.role || '',
      recipientId: conversation.user.id.toString(),
      content: newMessage.current.value,
      timeStamp: new Date().toISOString(),
      conversationId,
    };

    // send message

    // stompClientRef.current?.publish({
    //   destination: process.env.NEXT_PUBLIC_PRIVATE_QUEUE_PUB_URL || '',
    //   body: JSON.stringify(message),
    // });

    // Publish message
    webSocketService.publish(
      process.env.NEXT_PUBLIC_PRIVATE_QUEUE_PUB_URL || '',
      message,
    );
    // const updatedMessages = [...messages, { sender: 'Bạn', text: newMessage }];

    // const updatedMessages: MessageReceived[] = [
    //     ...messages, message
    // ];

    // setMessages(updatedMessages);

    // Update message state for the correct conversation
    setMessages((prevMessages) => ({
      ...prevMessages,
      [conversationId]: [...(prevMessages[conversationId] || []), message],
    }));
    newMessage.current.value = '';
  };

  const handleSearchClick = async (keyword: string) => {
    keyword = keyword.trim();

    const searchedUsers = await ChatService.fetchUsersByKeyword(keyword).then(
      (response) => response.data,
    );
    console.log(searchedUsers);

    setSearchUsers(searchedUsers);
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar for Users */}
      <div className="w-2/6 bg-white shadow-md p-4 overflow-auto">
        <div className="mb-8 relative">
          <Input
            onChange={(e) => (searchKeyword.current = e.target.value)}
            placeholder="Nhập tên người dùng..."
            className="rounded-2xl h-[45px] pl-10 "
          ></Input>
          <Button
            onClick={() => handleSearchClick(searchKeyword.current)}
            variant="ghost"
            className="py-0 px-1 absolute hover:bg-green-200  top-1/2 -translate-y-1/2 w-10 h-10 text-gray-400"
          >
            <Search></Search>
          </Button>

          {/* {searchUsers &&
                    <SearchDropDown searchUsers={searchUsers}/>
                } */}
        </div>

        <h2 className="text-base font-semibold mb-4">
          Danh sách cuộc trò chuyện
        </h2>
        <ul>
          {conversations.map((curConversation) => (
            <li
              key={curConversation.id}
              onClick={() => handleConversationClick(curConversation)}
              className={`p-3 cursor-pointer rounded-md transition flex flex-col gap-1 ${
                conversation?.id === curConversation.id
                  ? 'bg-green-200 '
                  : 'hover:bg-gray-200'
              }`}
            >
              <div className="flex items-center justify-between">
                {curConversation.user.name}
                <div className={roleColorMap[curConversation.user.role]}>
                  {curConversation.user.role}
                </div>
              </div>
              {curConversation.lastMessage &&
                curConversation.lastMessage !== '' && (
                  <div className="text-sm text-gray-500 flex gap-2">
                    <p>Last message:</p>
                    <p className="truncate">{curConversation.lastMessage}</p>
                  </div>
                )}
            </li>
          ))}
        </ul>
      </div>

      {/* Chat Window */}
      <div className="w-3/4 flex flex-col h-screen">
        {/* Chat Header */}
        <div className="p-4 bg-gray-200 border-1 text-lg font-semibold">
          {conversation
            ? conversations.find((c) => c.id === conversation.id)?.user.name
            : 'Chọn một người để nhắn tin'}
        </div>

        {/* Chat Messages */}

        <div className="flex-1 p-4 overflow-auto bg-white">
          {(messages[conversation?.id] || []).map((msg, index) => (
            <div
              key={index}
              className={`mb-2 pl-4 p-2 rounded-3xl max-w-1/2 font-medium ${msg.senderId == user.id?.toString() ? 'ml-auto bg-green-500 text-white' : 'bg-gray-200'}`}
            >
              <div className="flex flex-col gap-1">
                <div className="flex gap-1 ">
                  <strong>
                    {msg.senderId == user.id?.toString()
                      ? 'Bạn'
                      : conversation?.user.name || msg.senderName}
                    :{' '}
                  </strong>
                  <p className="">{msg.content}</p>
                </div>
                <p className="text-sm">{formatDateTime(msg.timeStamp || '')}</p>
              </div>
            </div>
          ))}
          <div ref={messagesEndRef}></div>
        </div>

        {/* Message Input */}
        <div className="p-6 bg-white flex border-1 ">
          <Input
            className="flex-1 border-gray-300 rounded-md p-2 "
            placeholder="Nhập tin nhắn..."
            ref={newMessage}
            // onChange={(e) => newMessage.current?.value = e.target.value}
            onKeyDown={(e) =>
              e.key === 'Enter' && handleSendMessage(conversation?.id || -1)
            }
          />
          <Button
            className="ml-2 bg-green-500 text-white px-20 py-2 rounded-md"
            onClick={() => handleSendMessage(conversation?.id || -1)}
          >
            Gửi
          </Button>
        </div>
      </div>
    </div>
  );
}
