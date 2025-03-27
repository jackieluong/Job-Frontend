export type MessageReceived = {
  senderRole?: string;
  senderId: string;
  senderName?: string;
  recipientId?: string; // Replace with the target user ID
  content: string;
  timeStamp?: string;
  messageStatus?: string;
  conversationId?: number;
};

export type MessageSend = {
  senderRole?: string;
  senderId: string;
  senderName?: string;
  recipientId: string; // Replace with the target user ID
  content: string;
  timeStamp?: string;
  conversationId: number;
}