"use client"

import React, { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';
import { roleColorMap } from '@/data/map';
import { useChat, useChatStore, User } from '@/store/chatStore';
import { Client, Stomp } from "@stomp/stompjs";
import SockJS from 'sockjs-client';
import { Message } from '@/lib/type';
import { useAuth } from '@/store/userStore';
import { formatDateTime } from '@/lib/utils';
import ChatService from '@/services/chatService';
import DropdownMenu from '@/components/ui/dropmenu';
import SearchDropDown from './userdropDown';

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

export default function ChatPage() {
    const [selectedUser, setSelectedUser] = useState<User | null>(null);
    const [messages, setMessages] = useState<Message[]>([]);
    const [newMessage, setNewMessage] = useState('');

    const [searchUsers, setSearchUsers] = useState<User[] | null>(null);

    const { users, fetchUsersHaveChat } = useChat();

    const {user} = useAuth();

    const [stompClient, setStompClient] = useState<Client | null>(null);

    const messagesEndRef = useRef<HTMLDivElement | null>(null);

    const searchKeyword = useRef<string>('');

    useEffect(() => {
        if (messagesEndRef.current) {
          messagesEndRef.current.scrollIntoView({behavior: "smooth"});
        }
      }, [messages, selectedUser]);

    useEffect(() => {
        if(user.id == null) return;
        const usersWithChat = fetchUsersHaveChat(Number(user.id));
        console.log(usersWithChat);

    }, [user.id])

    useEffect(() => {
        const connect = () => {
            const socket = new SockJS(process.env.NEXT_PUBLIC_WEBSOCKET_URL || "");
            const client = new Client({
              webSocketFactory: () => socket,
              connectHeaders: {
                Authorization: `Bearer ${JSON.parse(localStorage.getItem('accessToken'))}`, // Assuming token is stored in localStorage
              },
              debug: (str) => {
                console.log("STOMP Debug:", str);
              },
             
              onConnect: (frame) => {
                // console.log("Connected to WebSocket, session ID:", frame.headers);
                console.log("Connected to WebSocket, headers:", frame.headers);
                client.subscribe(process.env.NEXT_PUBLIC_PRIVATE_QUEUE_SUB_URL || "", (message) => {
                  console.log("Received message:", JSON.parse(message.body));
                  const receivedMessage: Message = JSON.parse(message.body);
                //   const newMessage: Message = {
                //     senderId: receivedMessage.senderId,
                //     senderName: receivedMessage.senderName,
                //     senderRole: receivedMessage.senderRole,
                //     content:receivedMessage.content,
                //     timeStamp: receivedMessage.timeStamp
                //   }
                  setMessages((prev) => [...prev, receivedMessage]);
                  console.log("Messages:", messages);
                });
              },
              onStompError: (frame) => {
                console.error("Broker reported error: " + frame.headers["message"]);
                console.error("Additional details: " + frame.body);
              },
            });
            client.activate();
            setStompClient(client);
          };
        
        connect();
        return () => {
          // Cleanup function
          if (stompClient) {
            stompClient.deactivate();
            
          }
        };
      }, []);
    
    
    
    
    const handleUserClick = async(clickedUser: User) => {
        setSelectedUser(clickedUser);
        // setMessages(messagesData[userId] || []);
        // fetch messages API
        const chatData = await ChatService.fetchChatHistory(Number(user.id), Number(clickedUser.id)).then((response) => response.data);
        
        const messages: Message[] = chatData.map((message) : Message => {
            return {
                senderId: message.senderId,
                recipientId: message.receiverId,
                content: message.content,
                timeStamp: message.time,
            }       
        })

        
        setMessages(messages);
    };

    const handleSendMessage = () => {
        if (!newMessage.trim() || selectedUser === null) return;

        
        const message: Message = {
            senderId: user.id?.toString() || "",
            senderName: user.name || "",
            senderRole: user.role || "",
            recipientId: selectedUser.id.toString(),
            content: newMessage,
            timeStamp: new Date().toISOString(),
        };
        

        // send message

        stompClient?.publish({
            destination: process.env.NEXT_PUBLIC_PRIVATE_QUEUE_PUB_URL || "",
            body: JSON.stringify(message),
        })
        // const updatedMessages = [...messages, { sender: 'Bạn', text: newMessage }];

        const updatedMessages: Message[] = [
            ...messages, message
        ];

        setMessages(updatedMessages);
        setNewMessage('');
    };

    const handleSearchClick = async(keyword: string) => {
        keyword = keyword.trim();
        
        const searchedUsers = await ChatService.fetchUsersByKeyword(keyword).then((response) => response.data);
        console.log(searchedUsers);

        setSearchUsers(searchedUsers);
    }
    
    return (
        <div className="flex h-screen bg-gray-100">
            {/* Sidebar for Users */}
            <div className="w-2/6 bg-white shadow-md p-4 overflow-auto">
                <div className='mb-8 relative'>
                    <Input onChange={(e) => searchKeyword.current = e.target.value} placeholder='Nhập tên người dùng...' className='rounded-2xl h-[45px] pl-10 '>
                    
                    </Input>
                    <Button onClick={() => handleSearchClick(searchKeyword.current)} variant="ghost" className="py-0 px-1 absolute hover:bg-blue-200  top-1/2 -translate-y-1/2 w-10 h-10 text-gray-400" ><Search></Search></Button>

                    {/* {searchUsers &&
                    <SearchDropDown searchUsers={searchUsers}/>
                } */}
                </div>

               
                <h2 className="text-base font-semibold mb-4">Danh sách cuộc trò chuyện</h2>
                <ul>
                    {users.map((user) => (
                        
                        <li
                            key={user.id}
                            onClick={() => handleUserClick(user)}
                            className={`p-3 cursor-pointer rounded-md transition flex items-center justify-between ${
                                selectedUser?.id === user.id ? 'bg-blue-200 ' : 'hover:bg-gray-200'
                            }`}
                        >
                            {user.name}
                            <div className={ roleColorMap[user.role]} >{user.role}</div>
                        </li>
                        
                    ))}
                </ul>
            </div>

            {/* Chat Window */}
            <div className="w-3/4 flex flex-col h-screen">
                {/* Chat Header */}
                <div className="p-4 bg-gray-200 border-1 text-lg font-semibold">
                    {selectedUser ? users.find((u) => u.id === selectedUser.id)?.name : 'Chọn một người để nhắn tin'}
                </div>

                {/* Chat Messages */}
                <div className="flex-1 p-4 overflow-auto bg-white">
                    {messages.map((msg, index) => (
                        <div key={index} className={`mb-2 pl-4 p-2 rounded-3xl max-w-1/2 font-medium ${msg.senderId == user.id?.toString() ? 'ml-auto bg-blue-500 text-white' : 'bg-gray-200'}`}>
                            <div className='flex flex-col gap-1'> 
                            <div className='flex gap-1'>
                                <strong>{msg.senderId == user.id?.toString() ? "Bạn" : selectedUser?.name }: </strong>
                                <p className=''>{msg.content}</p> 
                            </div>
                            <p className="text-sm">{formatDateTime( msg.timeStamp || "")}</p>
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
                        value={newMessage}
                        onChange={(e) => setNewMessage(e.target.value)}
                        onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
                    />
                    <Button className="ml-2 bg-blue-500 text-white px-20 py-2 rounded-md" onClick={handleSendMessage}>
                        Gửi
                    </Button>
                </div>
            </div>
        </div>
    );
}
