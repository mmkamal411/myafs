import React from 'react';
import { 
  Clock, Zap, Shield, Calendar, 
  ListTodo, BarChart2, Cloud, Activity 
} from 'lucide-react';

const MetricCard = ({ title, value, icon: Icon, trend, color }: {
  title: string;
  value: string;
  icon: React.ElementType;
  trend?: string;
  color: string;
}) => (
  <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-all duration-300 hover:scale-[1.02]">
    <div className="flex items-start justify-between">
      <div>
        <p className="text-sm text-gray-600">{title}</p>
        <h3 className="text-2xl font-bold mt-1">{value}</h3>
        {trend && (
          <p className={`text-sm mt-2 ${trend.startsWith('+') ? 'text-green-600' : 'text-red-600'}`}>
            {trend} vs last week
          </p>
        )}
      </div>
      <div className={`p-3 rounded-lg ${color}`}>
        <Icon className="w-6 h-6" />
      </div>
    </div>
  </div>
);

const DashboardMetrics = () => {
  const doraMetrics = [
    {
      title: "Deployment Frequency",
      value: "4.2/day",
      icon: Zap,
      trend: "+12%",
      color: "bg-blue-100 text-blue-600"
    },
    {
      title: "Lead Time",
      value: "2.5 days",
      icon: Clock,
      trend: "-8%",
      color: "bg-purple-100 text-purple-600"
    },
    {
      title: "Change Failure Rate",
      value: "1.8%",
      icon: Activity,
      trend: "-5%",
      color: "bg-green-100 text-green-600"
    }
  ];

  const agileMetrics = [
    {
      title: "Sprint Velocity",
      value: "42 points",
      icon: BarChart2,
      trend: "+15%",
      color: "bg-indigo-100 text-indigo-600"
    },
    {
      title: "Open Stories",
      value: "24",
      icon: ListTodo,
      color: "bg-yellow-100 text-yellow-600"
    }
  ];

  const securityMetrics = [
    {
      title: "Security Score",
      value: "94%",
      icon: Shield,
      color: "bg-red-100 text-red-600"
    },
    {
      title: "Cloud Resources",
      value: "156",
      icon: Cloud,
      color: "bg-cyan-100 text-cyan-600"
    }
  ];

  return (
    <div className="space-y-8">
      {/* DORA Metrics */}
      <section>
        <h2 className="text-lg font-semibold text-gray-900 mb-4">DORA Metrics</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {doraMetrics.map((metric, i) => (
            <MetricCard key={i} {...metric} />
          ))}
        </div>
      </section>

      {/* Agile Metrics */}
      <section>
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Agile Metrics</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {agileMetrics.map((metric, i) => (
            <MetricCard key={i} {...metric} />
          ))}
        </div>
      </section>

      {/* Security & Infrastructure */}
      <section>
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Security & Infrastructure</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {securityMetrics.map((metric, i) => (
            <MetricCard key={i} {...metric} />
          ))}
        </div>
      </section>

      {/* Calendar & Tasks */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <section className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
            <Calendar className="w-5 h-5" />
            Upcoming Events
          </h2>
          <div className="space-y-4">
            {[
              { time: "10:00 AM", event: "Sprint Planning" },
              { time: "2:00 PM", event: "Architecture Review" },
              { time: "4:30 PM", event: "Team Standup" }
            ].map((item, i) => (
              <div key={i} className="flex items-center justify-between py-2 border-b border-gray-100">
                <span className="text-sm text-gray-600">{item.time}</span>
                <span className="font-medium">{item.event}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
            <ListTodo className="w-5 h-5" />
            Active Tickets
          </h2>
          <div className="space-y-4">
            {[
              { id: "PROJ-123", title: "Update API Documentation", priority: "High" },
              { id: "PROJ-124", title: "Fix Authentication Bug", priority: "Critical" },
              { id: "PROJ-125", title: "Implement New Feature", priority: "Medium" }
            ].map((ticket, i) => (
              <div key={i} className="flex items-center justify-between py-2 border-b border-gray-100">
                <div>
                  <span className="text-sm text-gray-500">{ticket.id}</span>
                  <p className="font-medium">{ticket.title}</p>
                </div>
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                  ticket.priority === 'Critical' ? 'bg-red-100 text-red-700' :
                  ticket.priority === 'High' ? 'bg-orange-100 text-orange-700' :
                  'bg-blue-100 text-blue-700'
                }`}>
                  {ticket.priority}
                </span>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default DashboardMetrics;