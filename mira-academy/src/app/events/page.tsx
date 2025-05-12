'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import SEOMetadata from '../../components/SEOMetadata';

interface Event {
  id: number;
  title: string;
  description: string;
  type: 'webinar' | 'workshop' | 'conference' | 'hackathon' | 'meetup';
  date: string;
  time: string;
  location: string;
  isVirtual: boolean;
  speakers: {
    name: string;
    role: string;
    avatar: string;
  }[];
  price: number | 'Free';
  registrationUrl: string;
  image: string;
  tags: string[];
  slots?: number;
  remainingSlots?: number;
}

// Sample events data (in a real app, this would come from an API)
const eventsData: Event[] = [
  {
    id: 1,
    title: "Web Development Masterclass",
    description: "A comprehensive workshop covering modern web development techniques, best practices, and advanced frameworks.",
    type: "workshop",
    date: "2023-04-15",
    time: "10:00 AM - 4:00 PM",
    location: "Tech Hub, 123 Innovation Street",
    isVirtual: false,
    speakers: [
      {
        name: "Sarah Johnson",
        role: "Senior Web Developer",
        avatar: "👩‍💻"
      },
      {
        name: "Michael Chen",
        role: "Back-end Engineer",
        avatar: "👨‍💻"
      }
    ],
    price: 149,
    registrationUrl: "/events/1",
    image: "🖥️",
    tags: ["Web Development", "JavaScript", "React", "Node.js"],
    slots: 30,
    remainingSlots: 8
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
    speakers: [
      {
        name: "Dr. Emma Watson",
        role: "AI Researcher",
        avatar: "👩‍🔬"
      },
      {
        name: "David Miller",
        role: "Data Scientist",
        avatar: "👨‍🔬"
      },
      {
        name: "Sophia Lee",
        role: "ML Engineer",
        avatar: "👩‍💻"
      }
    ],
    price: 99,
    registrationUrl: "/events/2",
    image: "📊",
    tags: ["Data Science", "Machine Learning", "AI", "Big Data"]
  },
  {
    id: 3,
    title: "UX Design Principles Webinar",
    description: "Learn the fundamental principles of user experience design and how to apply them to your projects.",
    type: "webinar",
    date: "2023-04-10",
    time: "1:00 PM - 3:00 PM",
    location: "Online",
    isVirtual: true,
    speakers: [
      {
        name: "Lisa Park",
        role: "UX Designer",
        avatar: "👩‍🎨"
      }
    ],
    price: "Free",
    registrationUrl: "/events/3",
    image: "🎨",
    tags: ["UX Design", "UI", "Design Thinking", "Usability"]
  },
  {
    id: 4,
    title: "Startup Networking Meetup",
    description: "Connect with fellow entrepreneurs, investors, and tech enthusiasts in this informal networking event.",
    type: "meetup",
    date: "2023-04-20",
    time: "6:30 PM - 9:00 PM",
    location: "Innovation Lounge, 45 Startup Avenue",
    isVirtual: false,
    speakers: [
      {
        name: "Jonathan Taylor",
        role: "Startup Founder",
        avatar: "👨‍💼"
      }
    ],
    price: 10,
    registrationUrl: "/events/4",
    image: "🤝",
    tags: ["Networking", "Startups", "Entrepreneurship", "Business"],
    slots: 50,
    remainingSlots: 23
  },
  {
    id: 5,
    title: "Coding Hackathon: Build for Good",
    description: "A weekend-long coding event where teams collaborate to build solutions for non-profit organizations.",
    type: "hackathon",
    date: "2023-05-05",
    time: "9:00 AM (Friday) - 5:00 PM (Sunday)",
    location: "Tech Campus, 78 Innovation Park",
    isVirtual: false,
    speakers: [
      {
        name: "Alex Rodriguez",
        role: "Software Engineer",
        avatar: "👨‍💻"
      },
      {
        name: "Priya Patel",
        role: "Project Manager",
        avatar: "👩‍💼"
      }
    ],
    price: "Free",
    registrationUrl: "/events/5",
    image: "💻",
    tags: ["Hackathon", "Coding", "Social Impact", "Teamwork"],
    slots: 100,
    remainingSlots: 42
  },
  {
    id: 6,
    title: "Cloud Computing Essentials Workshop",
    description: "Master the fundamentals of cloud infrastructure, deployment models, and best practices for cloud migration.",
    type: "workshop",
    date: "2023-04-28",
    time: "10:00 AM - 3:00 PM",
    location: "Online",
    isVirtual: true,
    speakers: [
      {
        name: "Robert Chen",
        role: "Cloud Solutions Architect",
        avatar: "👨‍💻"
      }
    ],
    price: 79,
    registrationUrl: "/events/6",
    image: "☁️",
    tags: ["Cloud Computing", "AWS", "Azure", "DevOps"]
  }
];

// Get all unique event types
const eventTypes = Array.from(new Set(eventsData.map(event => event.type)));

// Get all unique tags
const allTags = Array.from(
  new Set(eventsData.flatMap(event => event.tags))
).sort();

const EventCard = ({ event }: { event: Event }) => {
  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="bg-white rounded-xl shadow-lg overflow-hidden h-full flex flex-col"
    >
      <div className="p-6 bg-blue-50 flex items-center justify-center h-48">
        <span className="text-7xl">{event.image}</span>
      </div>
      
      <div className="p-6 flex-grow flex flex-col">
        <div className="mb-1">
          <div className="flex flex-wrap gap-2">
            <span className={`inline-block px-3 py-1 text-xs font-medium rounded-full ${
              event.type === 'webinar' ? 'bg-blue-100 text-blue-800' :
              event.type === 'workshop' ? 'bg-purple-100 text-purple-800' :
              event.type === 'conference' ? 'bg-green-100 text-green-800' :
              event.type === 'hackathon' ? 'bg-orange-100 text-orange-800' :
              'bg-gray-100 text-gray-800'
            }`}>
              {event.type.charAt(0).toUpperCase() + event.type.slice(1)}
            </span>
            
            <span className={`inline-block px-3 py-1 text-xs font-medium rounded-full ${
              event.isVirtual 
                ? 'bg-teal-100 text-teal-800' 
                : 'bg-amber-100 text-amber-800'
            }`}>
              {event.isVirtual ? 'Virtual' : 'In-Person'}
            </span>
          </div>
        </div>
        
        <h3 className="text-xl font-bold text-gray-900 mt-2 mb-2">{event.title}</h3>
        
        <div className="flex items-start mb-3">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          <div>
            <p className="text-gray-700 font-medium">{formatDate(event.date)}</p>
            <p className="text-gray-600 text-sm">{event.time}</p>
          </div>
        </div>
        
        <div className="flex items-start mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          <p className="text-gray-600">{event.location}</p>
        </div>
        
        <p className="text-gray-700 mb-4 flex-grow">{event.description}</p>
        
        <div className="mb-4">
          <p className="text-sm font-medium text-gray-700 mb-2">Event Speakers:</p>
          <div className="flex flex-wrap items-center gap-3">
            {event.speakers.map((speaker, index) => (
              <div key={index} className="flex items-center">
                <span className="text-2xl mr-2">{speaker.avatar}</span>
                <div>
                  <p className="text-sm font-medium text-gray-900">{speaker.name}</p>
                  <p className="text-xs text-gray-600">{speaker.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {event.remainingSlots !== undefined && (
          <div className="mb-4">
            <div className={`text-sm font-medium ${
              event.remainingSlots < 10 ? 'text-red-600' : 'text-gray-700'
            }`}>
              {event.remainingSlots} spots remaining
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2 mt-1">
              <div 
                className="bg-blue-600 h-2 rounded-full" 
                style={{ width: `${(event.remainingSlots / event.slots!) * 100}%` }}
              ></div>
            </div>
          </div>
        )}
        
        <div className="mt-auto">
          <div className="flex justify-between items-center mb-4">
            <span className="text-2xl font-bold text-gray-900">
              {event.price === "Free" ? "Free" : `$${event.price}`}
            </span>
            <Link 
              href={event.registrationUrl}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              {event.price === "Free" ? "Register" : "Get Tickets"}
            </Link>
          </div>
          
          <div className="flex flex-wrap gap-2">
            {event.tags.slice(0, 3).map((tag, index) => (
              <span key={index} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">
                {tag}
              </span>
            ))}
            {event.tags.length > 3 && (
              <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">
                +{event.tags.length - 3} more
              </span>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default function EventsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedType, setSelectedType] = useState<string | null>(null);
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [showVirtualOnly, setShowVirtualOnly] = useState(false);
  const [showFreeOnly, setShowFreeOnly] = useState(false);
  const [filteredEvents, setFilteredEvents] = useState<Event[]>(eventsData);
  
  // Filter events whenever filter criteria change
  useEffect(() => {
    let filtered = [...eventsData];
    
    // Apply event type filter
    if (selectedType) {
      filtered = filtered.filter(event => event.type === selectedType);
    }
    
    // Apply tag filter
    if (selectedTag) {
      filtered = filtered.filter(event => event.tags.includes(selectedTag));
    }
    
    // Apply virtual-only filter
    if (showVirtualOnly) {
      filtered = filtered.filter(event => event.isVirtual);
    }
    
    // Apply free-only filter
    if (showFreeOnly) {
      filtered = filtered.filter(event => event.price === "Free");
    }
    
    // Apply search filter
    if (searchTerm.trim()) {
      const query = searchTerm.toLowerCase();
      filtered = filtered.filter(event => 
        event.title.toLowerCase().includes(query) || 
        event.description.toLowerCase().includes(query) ||
        event.tags.some(tag => tag.toLowerCase().includes(query)) ||
        event.speakers.some(speaker => speaker.name.toLowerCase().includes(query))
      );
    }
    
    // Sort events by date (soonest first)
    filtered.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
    
    setFilteredEvents(filtered);
  }, [selectedType, selectedTag, showVirtualOnly, showFreeOnly, searchTerm]);
  
  const resetFilters = () => {
    setSearchTerm('');
    setSelectedType(null);
    setSelectedTag(null);
    setShowVirtualOnly(false);
    setShowFreeOnly(false);
  };

  return (
    <>
      <SEOMetadata 
        title="Events"
        description="Join our upcoming webinars, workshops, conferences, and other events to enhance your skills and connect with industry experts."
      />
      
      <div className="min-h-screen bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Upcoming Events
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Expand your knowledge and network with our workshops, webinars, and conferences
            </p>
          </motion.div>
          
          {/* Filters */}
          <div className="mb-10 bg-white rounded-xl shadow-md p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
              {/* Search input */}
              <div className="lg:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-1">Search</label>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search events, topics, or speakers..."
                    className="w-full p-3 pl-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                  <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </div>
                </div>
              </div>
              
              {/* Event type filter */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Event Type</label>
                <select
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  value={selectedType || ''}
                  onChange={(e) => setSelectedType(e.target.value || null)}
                >
                  <option value="">All Types</option>
                  {eventTypes.map((type) => (
                    <option key={type} value={type}>
                      {type.charAt(0).toUpperCase() + type.slice(1)}
                    </option>
                  ))}
                </select>
              </div>
              
              {/* Tag filter */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Topic</label>
                <select
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  value={selectedTag || ''}
                  onChange={(e) => setSelectedTag(e.target.value || null)}
                >
                  <option value="">All Topics</option>
                  {allTags.map((tag) => (
                    <option key={tag} value={tag}>{tag}</option>
                  ))}
                </select>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
              <div className="flex items-center space-x-4 mb-4 md:mb-0">
                <label className="flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={showVirtualOnly}
                    onChange={() => setShowVirtualOnly(!showVirtualOnly)}
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  />
                  <span className="ml-2 text-sm text-gray-700">Virtual events only</span>
                </label>
                
                <label className="flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={showFreeOnly}
                    onChange={() => setShowFreeOnly(!showFreeOnly)}
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  />
                  <span className="ml-2 text-sm text-gray-700">Free events only</span>
                </label>
              </div>
              
              <button
                onClick={resetFilters}
                className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
              >
                Reset Filters
              </button>
            </div>
          </div>
          
          {/* Events Grid */}
          {filteredEvents.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredEvents.map(event => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16 bg-white rounded-xl shadow-md">
              <div className="text-5xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">No Events Found</h3>
              <p className="text-gray-600 mb-6">We couldn't find any events matching your criteria.</p>
              <button 
                onClick={resetFilters}
                className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                Reset Filters
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
} 