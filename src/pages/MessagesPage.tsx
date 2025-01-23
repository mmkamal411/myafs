import React from 'react';
import { MessageSquare, User } from 'lucide-react';

const messages = [
  {
    id: 1,
    sender: 'Alice Johnson',
    content: 'Hey, can you review the latest PR?',
    time: '10:30 AM',
    unread: true
  },
  {
    id: 2,
    sender: 'Bob Smith',
    content: 'The deployment was successful!',
    time: '9:45 AM',
    unread: false
  },
  {
    id: 3,
    sender: 'Carol White',
    content: 'Team meeting at 2 PM today',
    time: 'Yesterday',
    unread: false
  }
];

const MessagesPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center gap-3 mb-8">
        <div className="p-2 bg-yellow-100 rounded-lg">
          <MessageSquare className="w-6 h-6 text-yellow-600" />
        </div>
        <h1 className="text-2xl font-bold">Messages</h1>
      </div>

      <div className="grid gap-4">
        {messages.map((message) => (
          <div 
            key={message.id} 
            className={`bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-all duration-300 ${
              message.unread ? 'border-l-4 border-accent-500' : ''
            }`}
          >
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-accent-gradient flex items-center justify-center flex-shrink-0">
                <User className="w-5 h-5 text-white" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between mb-1">
                  <h3 className="font-semibold truncate">{message.sender}</h3>
                  <span className="text-sm text-gray-500">{message.time}</span>
                </div>
                <p className="text-gray-600">{message.content}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MessagesPage;