'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import SEOMetadata from '../../../components/SEOMetadata';

interface Event {
  id: number;
  title: string;
  description: string;
  longDescription?: string;
  type: 'webinar' | 'workshop' | 'conference' | 'hackathon' | 'meetup';
  date: string;
  time: string;
  location: string;
  isVirtual: boolean;
  speakers: {
    name: string;
    role: string;
    avatar: string;
    bio?: string;
  }[];
  price: number | 'Free';
  registrationUrl: string;
  image: string;
  tags: string[];
  slots?: number;
  remainingSlots?: number;
  agenda?: {
    time: string;
    title: string;
    description?: string;
  }[];
  faq?: {
    question: string;
    answer: string;
  }[];
}

// Sample events data (in a real app, this would come from an API)
const eventsData: Event[] = [
  {
    id: 1,
    title: "Web Development Masterclass",
    description: "A comprehensive workshop covering modern web development techniques, best practices, and advanced frameworks.",
    longDescription: "Join us for an intensive, hands-on workshop where you'll learn the latest web development techniques from industry experts. This masterclass is designed for developers who want to take their skills to the next level, covering everything from modern JavaScript frameworks to responsive design principles and performance optimization.",
    type: "workshop",
    date: "2023-04-15",
    time: "10:00 AM - 4:00 PM",
    location: "Tech Hub, 123 Innovation Street",
    isVirtual: false,
    speakers: [
      {
        name: "Sarah Johnson",
        role: "Senior Web Developer",
        avatar: "👩‍💻",
        bio: "Sarah has over 10 years of experience in web development and has worked with companies like Google and Amazon. She specializes in front-end technologies and user experience design."
      },
      {
        name: "Michael Chen",
        role: "Back-end Engineer",
        avatar: "👨‍💻",
        bio: "Michael is a back-end specialist with extensive experience in building scalable APIs and database systems. He previously worked at Microsoft and several successful startups."
      }
    ],
    price: 149,
    registrationUrl: "/events/1",
    image: "🖥️",
    tags: ["Web Development", "JavaScript", "React", "Node.js"],
    slots: 30,
    remainingSlots: 8,
    agenda: [
      {
        time: "10:00 AM - 10:30 AM",
        title: "Introduction and Overview",
        description: "Welcome, introduction to the day's agenda, and setting up the development environment."
      },
      {
        time: "10:30 AM - 12:00 PM",
        title: "Modern JavaScript Fundamentals",
        description: "Deep dive into ES6+ features, async/await, and functional programming patterns."
      },
      {
        time: "12:00 PM - 1:00 PM",
        title: "Lunch Break",
        description: "Networking lunch provided for all attendees."
      },
      {
        time: "1:00 PM - 2:30 PM",
        title: "Building React Applications",
        description: "Hands-on session on component architecture, state management, and hooks."
      },
      {
        time: "2:30 PM - 3:30 PM",
        title: "Back-end Integration with Node.js",
        description: "Creating RESTful APIs and connecting them to your front-end application."
      },
      {
        time: "3:30 PM - 4:00 PM",
        title: "Q&A and Closing",
        description: "Open discussion, next steps, and additional resources."
      }
    ],
    faq: [
      {
        question: "What should I bring to the workshop?",
        answer: "Please bring your laptop with Node.js and npm installed. We'll send detailed setup instructions before the event."
      },
      {
        question: "Is this workshop suitable for beginners?",
        answer: "This workshop is designed for intermediate developers who already have some experience with JavaScript. We recommend having basic knowledge of HTML, CSS, and JavaScript fundamentals."
      },
      {
        question: "Will there be recordings available?",
        answer: "Yes, all attendees will receive access to the workshop recordings and materials for 3 months after the event."
      },
      {
        question: "What's the cancellation policy?",
        answer: "Full refunds are available up to 7 days before the event. Within 7 days, we offer a 50% refund or the option to transfer your ticket to a future workshop."
      }
    ]
  },
  {
    id: 2,
    title: "Data Science Virtual Conference",
    description: "Join leading data scientists and analysts for a day of insights, case studies, and networking opportunities.",
    longDescription: "Our annual Data Science Conference brings together experts and practitioners from around the world to share cutting-edge research, practical applications, and future trends in the field of data science and machine learning. Whether you're a seasoned data professional or just starting your journey, this virtual conference offers valuable insights and networking opportunities.",
    type: "conference",
    date: "2023-04-22",
    time: "9:00 AM - 5:00 PM",
    location: "Online",
    isVirtual: true,
    speakers: [
      {
        name: "Dr. Emma Watson",
        role: "AI Researcher",
        avatar: "👩‍🔬",
        bio: "Dr. Watson leads AI research at a major tech company and has published numerous papers on deep learning and natural language processing. Her work has been featured in major AI conferences worldwide."
      },
      {
        name: "David Miller",
        role: "Data Scientist",
        avatar: "👨‍🔬",
        bio: "David has implemented data science solutions across finance, healthcare, and retail sectors. He specializes in predictive analytics and time series forecasting."
      },
      {
        name: "Sophia Lee",
        role: "ML Engineer",
        avatar: "👩‍💻",
        bio: "Sophia builds machine learning infrastructure at scale. She's passionate about making ML accessible to all developers and has contributed to several open-source projects."
      }
    ],
    price: 99,
    registrationUrl: "/events/2",
    image: "📊",
    tags: ["Data Science", "Machine Learning", "AI", "Big Data"],
    agenda: [
      {
        time: "9:00 AM - 9:30 AM",
        title: "Opening Keynote: The Future of AI",
        description: "Dr. Emma Watson explores emerging trends and predictions for the next decade of artificial intelligence."
      },
      {
        time: "9:30 AM - 10:30 AM",
        title: "Panel: Responsible AI Development",
        description: "Industry experts discuss ethical considerations and best practices in AI development."
      },
      {
        time: "10:45 AM - 11:45 AM",
        title: "Workshop: Practical ML Pipeline Design",
        description: "David Miller demonstrates how to build robust, scalable machine learning pipelines."
      },
      {
        time: "12:00 PM - 1:00 PM",
        title: "Networking Break",
        description: "Virtual networking rooms organized by topic interest."
      },
      {
        time: "1:00 PM - 5:00 PM",
        title: "Parallel Sessions",
        description: "Multiple tracks covering NLP, Computer Vision, MLOps, and Business Applications."
      }
    ],
    faq: [
      {
        question: "How do I access the virtual conference?",
        answer: "After registration, you'll receive a link to our conference platform where all sessions will be hosted. You can access it from any modern web browser."
      },
      {
        question: "Will I be able to ask questions during sessions?",
        answer: "Yes, each session includes a moderated Q&A component where you can submit questions for the speakers."
      },
      {
        question: "Will presentations be available after the conference?",
        answer: "All attendees will receive access to recordings and slides from the presentations, subject to speaker approval."
      }
    ]
  }
];

export default function EventDetail() {
  const { id } = useParams();
  const [event, setEvent] = useState<Event | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [activeTab, setActiveTab] = useState<'overview' | 'agenda' | 'speakers' | 'faq'>('overview');
  const [registrationOpen, setRegistrationOpen] = useState(true);

  useEffect(() => {
    // Simulate API fetch
    const fetchEvent = () => {
      setTimeout(() => {
        const foundEvent = eventsData.find(e => e.id === Number(id));
        setEvent(foundEvent || null);
        setIsLoading(false);
      }, 500);
    };

    fetchEvent();
  }, [id]);

  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (!event) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">Event Not Found</h1>
        <p className="text-gray-600 mb-6">The event you're looking for doesn't exist or has been removed.</p>
        <Link
          href="/events"
          className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
        >
          Browse All Events
        </Link>
      </div>
    );
  }

  return (
    <>
      <SEOMetadata 
        title={event.title}
        description={event.description}
      />
      
      <div className="min-h-screen bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <Link
            href="/events"
            className="inline-flex items-center text-blue-600 font-medium mb-8 hover:text-blue-800"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z" clipRule="evenodd" />
            </svg>
            Back to Events
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden mb-8"
              >
                <div className="bg-blue-50 p-16 flex items-center justify-center">
                  <span className="text-9xl">{event.image}</span>
                </div>
                
                <div className="p-8">
                  <div className="flex flex-wrap gap-2 mb-4">
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
                  
                  <h1 className="text-3xl font-bold text-gray-900 mb-4">{event.title}</h1>
                  <p className="text-xl text-gray-600 mb-6">{event.description}</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    <div className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-500 mr-3 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <div>
                        <p className="font-medium text-gray-900">Date & Time</p>
                        <p className="text-gray-700">{formatDate(event.date)}</p>
                        <p className="text-gray-700">{event.time}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-500 mr-3 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <div>
                        <p className="font-medium text-gray-900">Location</p>
                        <p className="text-gray-700">{event.location}</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="border-t border-gray-100">
                  <div className="flex border-b">
                    <button
                      onClick={() => setActiveTab('overview')}
                      className={`flex-1 py-4 px-6 text-center font-medium ${
                        activeTab === 'overview' 
                          ? 'text-blue-600 border-b-2 border-blue-600' 
                          : 'text-gray-600 hover:text-blue-600'
                      }`}
                    >
                      Overview
                    </button>
                    {event.agenda && event.agenda.length > 0 && (
                      <button
                        onClick={() => setActiveTab('agenda')}
                        className={`flex-1 py-4 px-6 text-center font-medium ${
                          activeTab === 'agenda' 
                            ? 'text-blue-600 border-b-2 border-blue-600' 
                            : 'text-gray-600 hover:text-blue-600'
                        }`}
                      >
                        Agenda
                      </button>
                    )}
                    <button
                      onClick={() => setActiveTab('speakers')}
                      className={`flex-1 py-4 px-6 text-center font-medium ${
                        activeTab === 'speakers' 
                          ? 'text-blue-600 border-b-2 border-blue-600' 
                          : 'text-gray-600 hover:text-blue-600'
                      }`}
                    >
                      Speakers
                    </button>
                    {event.faq && event.faq.length > 0 && (
                      <button
                        onClick={() => setActiveTab('faq')}
                        className={`flex-1 py-4 px-6 text-center font-medium ${
                          activeTab === 'faq' 
                            ? 'text-blue-600 border-b-2 border-blue-600' 
                            : 'text-gray-600 hover:text-blue-600'
                        }`}
                      >
                        FAQ
                      </button>
                    )}
                  </div>
                  
                  <div className="p-8">
                    {activeTab === 'overview' && (
                      <div>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">About This Event</h2>
                        <p className="text-gray-700 mb-6 leading-relaxed">
                          {event.longDescription || event.description}
                        </p>
                        
                        <div className="flex flex-wrap gap-2 mb-6">
                          {event.tags.map((tag, index) => (
                            <span key={index} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                              {tag}
                            </span>
                          ))}
                        </div>
                        
                        {event.remainingSlots !== undefined && (
                          <div className="bg-blue-50 rounded-lg p-4 mb-6">
                            <div className={`text-sm font-medium ${
                              event.remainingSlots < 10 ? 'text-red-600' : 'text-blue-800'
                            } mb-2`}>
                              {event.remainingSlots} spots remaining out of {event.slots}
                            </div>
                            <div className="w-full bg-white rounded-full h-2">
                              <div 
                                className="bg-blue-600 h-2 rounded-full" 
                                style={{ width: `${(event.remainingSlots / event.slots!) * 100}%` }}
                              ></div>
                            </div>
                          </div>
                        )}
                      </div>
                    )}
                    
                    {activeTab === 'agenda' && event.agenda && (
                      <div>
                        <h2 className="text-2xl font-bold text-gray-900 mb-6">Event Agenda</h2>
                        <div className="space-y-6">
                          {event.agenda.map((item, index) => (
                            <div key={index} className="relative pl-8 pb-6 border-l-2 border-blue-200 last:border-l-0 last:pb-0">
                              <div className="absolute -left-2 top-0 h-4 w-4 rounded-full bg-blue-500"></div>
                              <div className="mb-1 text-sm text-blue-700 font-medium">{item.time}</div>
                              <h3 className="text-lg font-bold text-gray-900 mb-1">{item.title}</h3>
                              {item.description && <p className="text-gray-700">{item.description}</p>}
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                    
                    {activeTab === 'speakers' && (
                      <div>
                        <h2 className="text-2xl font-bold text-gray-900 mb-6">Event Speakers</h2>
                        <div className="space-y-8">
                          {event.speakers.map((speaker, index) => (
                            <div key={index} className="flex flex-col md:flex-row gap-6">
                              <div className="w-32 h-32 flex-shrink-0 bg-blue-100 rounded-full flex items-center justify-center mx-auto md:mx-0">
                                <span className="text-6xl">{speaker.avatar}</span>
                              </div>
                              <div>
                                <h3 className="text-xl font-bold text-gray-900 mb-1">{speaker.name}</h3>
                                <p className="text-blue-600 mb-3">{speaker.role}</p>
                                {speaker.bio && <p className="text-gray-700">{speaker.bio}</p>}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                    
                    {activeTab === 'faq' && event.faq && (
                      <div>
                        <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
                        <div className="space-y-6">
                          {event.faq.map((item, index) => (
                            <div key={index} className="bg-gray-50 rounded-lg p-6">
                              <h3 className="text-lg font-bold text-gray-900 mb-2">{item.question}</h3>
                              <p className="text-gray-700">{item.answer}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            </div>
            
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden sticky top-6"
              >
                <div className="p-6">
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {event.price === "Free" ? "Free Registration" : `$${event.price}`}
                    </h3>
                    {event.remainingSlots !== undefined && event.remainingSlots < 10 && (
                      <p className="text-red-600 text-sm font-medium">
                        Only {event.remainingSlots} spots left!
                      </p>
                    )}
                  </div>
                  
                  {registrationOpen ? (
                    <button 
                      onClick={() => setRegistrationOpen(false)}
                      className="w-full py-3 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition-colors mb-4"
                    >
                      {event.price === "Free" ? "Register Now" : "Get Tickets"}
                    </button>
                  ) : (
                    <div className="bg-green-50 p-4 rounded-lg mb-4">
                      <div className="flex items-center text-green-700 font-medium mb-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        Registration Successful!
                      </div>
                      <p className="text-green-600 text-sm">
                        Thank you for registering. We've sent confirmation details to your email.
                      </p>
                    </div>
                  )}
                  
                  <button className="w-full py-3 bg-white border border-blue-600 text-blue-600 font-bold rounded-lg hover:bg-blue-50 transition-colors mb-6">
                    Add to Calendar
                  </button>
                  
                  <div className="space-y-4 mb-6">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-medium text-gray-900 mb-2">Share This Event</h4>
                      <div className="flex space-x-4">
                        <button className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center hover:bg-blue-700">
                          <span>f</span>
                        </button>
                        <button className="w-8 h-8 bg-blue-400 text-white rounded-full flex items-center justify-center hover:bg-blue-500">
                          <span>t</span>
                        </button>
                        <button className="w-8 h-8 bg-blue-800 text-white rounded-full flex items-center justify-center hover:bg-blue-900">
                          <span>in</span>
                        </button>
                        <button className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center hover:bg-green-700">
                          <span>w</span>
                        </button>
                      </div>
                    </div>
                    
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-medium text-gray-900 mb-2">Contact Organizer</h4>
                      <p className="text-gray-700 text-sm mb-3">
                        Have questions about this event? Contact the organizer directly.
                      </p>
                      <button className="text-blue-600 text-sm font-medium hover:text-blue-800">
                        Send Message
                      </button>
                    </div>
                  </div>
                  
                  <div className="border-t border-gray-100 pt-6">
                    <h4 className="font-medium text-gray-900 mb-3">Event Tags</h4>
                    <div className="flex flex-wrap gap-2">
                      {event.tags.map((tag, index) => (
                        <span key={index} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
} 