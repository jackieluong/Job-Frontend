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

export type JobSearchInfo = {
  id: number;
  name: string;
  city: string[];
  skills?: string[];
  salaryFrom: number;
  salaryTo: number;
  yearOfExperience: number;
  companyName: string;
  companyId: number;
  companyImg: string;
  createdAt: string;
  updatedAt: string | null;
  industry: string
}