export type Message = {
  senderRole?: string;
  senderId: string;
  senderName?: string;
  recipientId: string; // Replace with the target user ID
  content: string;
  timeStamp?: string;
};
