import Link from 'next/link';

// Generate static paths for all events
export async function generateStaticParams() {
  // In a real application, this would fetch from an API
  return [
    { id: '1' },
    { id: '2' },
    { id: '3' },
    { id: '4' },
    { id: '5' }
  ];
}

// Sample events data (in a real app, this would come from an API)
const eventsData = [
  {
    id: 1,
    title: "Web Development Masterclass",
    description: "A comprehensive workshop covering modern web development techniques, best practices, and advanced frameworks.",
    type: "workshop",
    date: "2023-04-15",
    time: "10:00 AM - 4:00 PM",
    location: "Tech Hub, 123 Innovation Street",
    isVirtual: false,
    image: "🖥️",
  },
  {
    id: 2,
    title: "Data Science Virtual Conference",
    description: "Join leading data scientists and analysts for a day of insights, case studies, and networking opportunities.",
    type: "conference",
    date: "2023-04-22",
    time: "9:00 AM - 5:00 PM",
    location: "Online",
    isVirtual: true,
    image: "📊",
  }
];

// Static page component
export default function EventDetail({ params }: { params: { id: string } }) {
  const { id } = params;
  const event = eventsData.find(e => e.id === parseInt(id));

  return (
    <div className="bg-gray-50 min-h-screen py-16">
      <div className="container mx-auto px-4">
        <Link
          href="/events"
          className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-8"
        >
          ← Back to Events
        </Link>
        
        {event ? (
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h1 className="text-3xl font-bold mb-4">{event.title}</h1>
            <div className="flex items-center mb-6">
              <span className="text-6xl mr-6">{event.image}</span>
              <div>
                <p className="text-gray-600">{event.description}</p>
                <div className="mt-3 text-sm text-gray-500">
                  <p>{event.date} • {event.time}</p>
                  <p>{event.location} • {event.isVirtual ? 'Virtual Event' : 'In Person'}</p>
                </div>
              </div>
            </div>
            
            <div className="prose max-w-none">
              <p>View the complete event details using our interactive site.</p>
              <p>Use the development server with <code>npm run dev</code> to see the full interactive version.</p>
            </div>
          </div>
        ) : (
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h1 className="text-3xl font-bold mb-4">Event Not Found</h1>
            <p>Sorry, we couldn't find the event you're looking for.</p>
          </div>
        )}
      </div>
    </div>
  );
} 