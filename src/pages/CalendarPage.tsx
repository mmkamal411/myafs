import React from 'react';
import { Calendar as CalendarIcon, Clock } from 'lucide-react';

const events = [
  {
    id: 1,
    title: 'Team Standup',
    time: '10:00 AM',
    duration: '30min',
    attendees: 8,
    type: 'Daily'
  },
  {
    id: 2,
    title: 'Project Review',
    time: '2:00 PM',
    duration: '1h',
    attendees: 12,
    type: 'Weekly'
  },
  {
    id: 3,
    title: 'Client Meeting',
    time: '4:30 PM',
    duration: '45min',
    attendees: 5,
    type: 'One-time'
  }
];

const CalendarPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center gap-3 mb-8">
        <div className="p-2 bg-green-100 rounded-lg">
          <CalendarIcon className="w-6 h-6 text-green-600" />
        </div>
        <h1 className="text-2xl font-bold">Calendar</h1>
      </div>

      <div className="grid gap-4">
        {events.map((event) => (
          <div key={event.id} className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-all duration-300">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-lg font-semibold mb-2">{event.title}</h3>
                <div className="flex items-center gap-4 text-sm text-gray-600">
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>{event.time}</span>
                  </div>
                  <span>({event.duration})</span>
                  <span>{event.attendees} attendees</span>
                </div>
              </div>
              <span className="px-3 py-1 bg-green-100 text-green-600 rounded-full text-sm font-medium">
                {event.type}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CalendarPage;