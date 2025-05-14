import { Client } from '@stomp/stompjs';
import SockJS from 'sockjs-client';

class WebSocketService {
  private static instance: WebSocketService;
  private client: Client | null = null;
  private subscribers: Map<string, (message: any) => void> = new Map();
  private isConnecting: boolean = false;

  private constructor() {
    // Private constructor to enforce singleton
  }

  public static getInstance(): WebSocketService {
    if (!WebSocketService.instance) {
      WebSocketService.instance = new WebSocketService();
    }
    return WebSocketService.instance;
  }

  public connect(): void {
    if (this.client?.connected || this.isConnecting) {
      console.log('WebSocket already connected or connecting');
      return;
    }

    this.isConnecting = true;
    const socket = new SockJS(process.env.NEXT_PUBLIC_WEBSOCKET_URL || '');
    this.client = new Client({
      webSocketFactory: () => socket,
      connectHeaders: {
        Authorization: `Bearer ${JSON.parse(localStorage.getItem('accessToken') || '""')}`,
      },
      debug: (str) => {
        console.log('STOMP Debug:', str);
      },
      onConnect: (frame) => {
        console.log('Connected to WebSocket, headers:', frame.headers);
        this.isConnecting = false;
        // Re-subscribe to all existing subscriptions
        this.subscribers.forEach((callback, destination) => {
          this.client?.subscribe(destination, (message) => {
            callback(JSON.parse(message.body));
          });
        });
      },
      onDisconnect: () => {
        console.log('Disconnected from WebSocket');
        this.isConnecting = false;
      },
      onStompError: (frame) => {
        console.error('Broker reported error: ' + frame.headers['message']);
        console.error('Additional details: ' + frame.body);
        this.isConnecting = false;
      },
    });

    this.client.activate();
  }

  public subscribe<T>(
    destination: string,
    callback: (message: T) => void,
  ): () => void {
    // Store the callback for the destination
    this.subscribers.set(destination, callback);

    // If connected, subscribe immediately
    if (this.client?.connected) {
      const subscription = this.client.subscribe(destination, (message) => {
        callback(JSON.parse(message.body));
      });
      // Return unsubscribe function
      return () => {
        subscription.unsubscribe();
        this.subscribers.delete(destination);
      };
    }

    // Return unsubscribe function even if not connected yet
    return () => {
      this.subscribers.delete(destination);
    };
  }

  public publish(destination: string, message: any): void {
    if (!this.client?.connected) {
      console.warn('Cannot publish: WebSocket not connected');
      return;
    }
    this.client.publish({
      destination,
      body: JSON.stringify(message),
    });
  }

  public disconnect(): void {
    if (this.client) {
      this.client.deactivate();
      this.client = null;
      this.subscribers.clear();
      console.log('Disconnected from WebSocket');
    }
  }

  public isConnected(): boolean {
    return !!this.client?.connected;
  }
}

export const webSocketService = WebSocketService.getInstance();