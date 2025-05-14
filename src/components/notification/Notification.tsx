'use client';

// import React from 'react';

// type NotificationProps = {
//     // Define your props here
// };

// export default function Notification(props: NotificationProps) {
//     return (
//         <div>
//             Notification
//         </div>
//     );
// }

import React, { useEffect, useRef, useState } from 'react';
import { Bell, Check } from 'lucide-react';
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from '@/components/ui/popover';
import { Button } from '@/components/ui/button';
import { formatDateTime } from '@/lib/utils';
import { fetchNotifications } from '@/services/notificationService';
import { Client } from '@stomp/stompjs';
import SockJS from 'sockjs-client';
import { webSocketService } from '@/lib/webSocketService';

type Notification = {
  id: string;
  title: string;
  message: string;
  read: boolean;
  link: string;
  createdAt: string;
};

export default function NotificationDropdown() {
  const [notifications, setNotifications] = useState<Notification[]>([]);

  const stompClientRef = useRef<Client | null>(null);

  useEffect(() => {
    // Simulate fetching notifications from an API or local storage
    const fetchUserNotifications = async () => {
      const data = await fetchNotifications().then((res) => res.data);

      setNotifications(data);
    };

    fetchUserNotifications();
  }, []);

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
  //           process.env.NEXT_PUBLIC_PRIVATE_QUEUE_NOTIFICATION || '',
  //           (message) => {
  //             console.log('Received message:', JSON.parse(message.body));
  //             const receivedMessage: Notification = JSON.parse(message.body);
  //             const newNotification: Notification = {
  //               id: receivedMessage.id,
  //               title: receivedMessage.title,
  //               message: receivedMessage.message,
  //               read: false,
  //               link: receivedMessage.link,
  //               createdAt: receivedMessage.createdAt,
  //             };

  //             setNotifications((prev) => [...prev, newNotification]);
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

    // Subscribe to notification queue
    const unsubscribe = webSocketService.subscribe<Notification>(
      process.env.NEXT_PUBLIC_PRIVATE_QUEUE_NOTIFICATION || '',
      (receivedMessage) => {
        console.log('Received notification:', receivedMessage);
        const newNotification: Notification = {
          id: receivedMessage.id,
          title: receivedMessage.title,
          message: receivedMessage.message,
          read: false,
          link: receivedMessage.link,
          createdAt: receivedMessage.createdAt,
        };
        setNotifications((prev) => [...prev, newNotification]);
      },
    );

    // Cleanup on unmount
    return () => {
      unsubscribe();
    };
  }, []);

  const markAsRead = (id: string) => {
    setNotifications((prev) =>
      prev.map((n) => (n.id === id ? { ...n, read: true } : n)),
    );
  };

  const unreadCount = notifications.filter((n) => !n.read).length;

  return (
    <Popover>
      <PopoverTrigger asChild>
        <div className="relative p-1 flex justify-center items-center w-12 h-12 rounded-full bg-green-200 cursor-pointer hover:bg-green-300 transition duration-200 ease-in-out">
          <Bell className="w-7 h-7 text-green-500" />
          {unreadCount > 0 && (
            <span className="absolute top-1 right-1 inline-flex items-center justify-center px-1.5 py-0.5 text-xs font-bold leading-none text-white bg-red-500 rounded-full">
              {unreadCount}
            </span>
          )}
        </div>
      </PopoverTrigger>
      <PopoverContent className="w-110 px-0">
        <h4 className="font-semibold text-base border-b-1 pb-3 px-4 border-gray-200">
          Thông báo
        </h4>
        <div className="max-h-70 overflow-y-auto ">
          {notifications.length === 0 && (
            <p className="text-base text-muted-foreground flex justify-center">
              Không có thông báo mới
            </p>
          )}
          {notifications.map((n) => (
            <div
              key={n.id}
              className={`py-3 px-4 border-b-1 hover:bg-accent cursor-pointer flex items-start justify-between ${
                !n.read ? 'bg-accent' : ''
              }`}
              onClick={() => markAsRead(n.id)}
            >
              <div>
                <p className="font-medium text-black">{n.title}</p>
                <p className="text-sm text-muted-foreground">{n.message}</p>
                <p className="text-xs text-muted-foreground">
                  {formatDateTime(n.createdAt)}{' '}
                </p>
              </div>
              {!n.read && <Check className="w-4 h-4 text-green-500" />}
            </div>
          ))}
        </div>
      </PopoverContent>
    </Popover>
  );
}
