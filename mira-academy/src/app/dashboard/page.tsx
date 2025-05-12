'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useLanguage } from '../../components/LanguageContext';
import SEOMetadata from '../../components/SEOMetadata';

// Multilingual content
const content = {
  dashboard: {
    en: "Student Dashboard",
    fr: "Tableau de bord de l'étudiant",
    ar: "لوحة تحكم الطالب",
  },
  welcome: {
    en: "Welcome back",
    fr: "Bon retour",
    ar: "مرحبًا بعودتك",
  },
  overview: {
    en: "Overview",
    fr: "Vue d'ensemble",
    ar: "نظرة عامة",
  },
  myCourses: {
    en: "My Courses",
    fr: "Mes cours",
    ar: "دوراتي",
  },
  inProgress: {
    en: "In Progress",
    fr: "En cours",
    ar: "قيد التقدم",
  },
  completed: {
    en: "Completed",
    fr: "Terminé",
    ar: "مكتمل",
  },
  upcoming: {
    en: "Upcoming",
    fr: "À venir",
    ar: "قادم",
  },
  nextLesson: {
    en: "Next Lesson",
    fr: "Prochaine leçon",
    ar: "الدرس التالي",
  },
  continueButton: {
    en: "Continue Learning",
    fr: "Continuer à apprendre",
    ar: "مواصلة التعلم",
  },
  coursesButton: {
    en: "View All Courses",
    fr: "Voir tous les cours",
    ar: "عرض جميع الدورات",
  },
  todayClasses: {
    en: "Today's Classes",
    fr: "Cours d'aujourd'hui",
    ar: "دروس اليوم",
  },
  noClasses: {
    en: "No classes scheduled for today",
    fr: "Aucun cours prévu pour aujourd'hui",
    ar: "لا توجد دروس مجدولة لهذا اليوم",
  },
  progress: {
    en: "Progress",
    fr: "Progrès",
    ar: "التقدم",
  },
  assignments: {
    en: "Pending Assignments",
    fr: "Devoirs en attente",
    ar: "المهام المعلقة",
  },
  noAssignments: {
    en: "No pending assignments",
    fr: "Aucun devoir en attente",
    ar: "لا توجد مهام معلقة",
  },
  announcements: {
    en: "Announcements",
    fr: "Annonces",
    ar: "الإعلانات",
  },
  viewAll: {
    en: "View All",
    fr: "Voir tout",
    ar: "عرض الكل",
  },
};

// Mock data
const studentCourses = [
  {
    id: 1,
    title: {
      en: "Full Stack Web Development",
      fr: "Développement Web Full Stack",
      ar: "تطوير الويب المتكامل",
    },
    progress: 35,
    nextLesson: {
      en: "JavaScript Promises and Async/Await",
      fr: "Promises JavaScript et Async/Await",
      ar: "الوعود في جافاسكريبت وأسينك/أويت",
    },
    nextLessonTime: "Today, 3:00 PM",
    image: "🖥️",
    status: "in-progress",
  },
  {
    id: 2,
    title: {
      en: "UX/UI Design Fundamentals",
      fr: "Fondamentaux du Design UX/UI",
      ar: "أساسيات تصميم تجربة المستخدم/واجهة المستخدم",
    },
    progress: 85,
    nextLesson: {
      en: "User Testing and Iteration",
      fr: "Tests utilisateurs et itération",
      ar: "اختبار المستخدم والتكرار",
    },
    nextLessonTime: "Tomorrow, 10:00 AM",
    image: "🎨",
    status: "in-progress",
  },
  {
    id: 3,
    title: {
      en: "Python Programming for Beginners",
      fr: "Programmation Python pour Débutants",
      ar: "برمجة Python للمبتدئين",
    },
    progress: 100,
    completedDate: "May 15, 2023",
    image: "🐍",
    status: "completed",
  }
];

const upcomingCourses = [
  {
    id: 4,
    title: {
      en: "Data Science and Machine Learning",
      fr: "Science des Données et Apprentissage Automatique",
      ar: "علوم البيانات والتعلم الآلي",
    },
    startDate: "June 10, 2023",
    image: "📊",
    status: "upcoming",
  }
];

const announcements = [
  {
    id: 1,
    title: {
      en: "New Advanced Courses Coming Soon",
      fr: "Nouveaux cours avancés à venir",
      ar: "دورات متقدمة جديدة قادمة قريبًا",
    },
    date: "May 20, 2023",
  },
  {
    id: 2,
    title: {
      en: "Platform Maintenance - May 25",
      fr: "Maintenance de la plateforme - 25 mai",
      ar: "صيانة المنصة - 25 مايو",
    },
    date: "May 18, 2023",
  }
];

const assignments = [
  {
    id: 1,
    title: {
      en: "Create a Responsive Landing Page",
      fr: "Créer une page d'atterrissage responsive",
      ar: "إنشاء صفحة هبوط متجاوبة",
    },
    course: {
      en: "Full Stack Web Development",
      fr: "Développement Web Full Stack",
      ar: "تطوير الويب المتكامل",
    },
    dueDate: "May 23, 2023",
  },
  {
    id: 2,
    title: {
      en: "Design a Mobile App Interface",
      fr: "Concevoir une interface d'application mobile",
      ar: "تصميم واجهة تطبيق جوال",
    },
    course: {
      en: "UX/UI Design Fundamentals",
      fr: "Fondamentaux du Design UX/UI",
      ar: "أساسيات تصميم تجربة المستخدم/واجهة المستخدم",
    },
    dueDate: "May 25, 2023",
  }
];

export default function DashboardPage() {
  const { language } = useLanguage();
  const [activeTab, setActiveTab] = useState('in-progress');
  
  // Filter courses based on active tab
  const filteredCourses = [...studentCourses, ...upcomingCourses].filter(course => {
    if (activeTab === 'in-progress') return course.status === 'in-progress';
    if (activeTab === 'completed') return course.status === 'completed';
    if (activeTab === 'upcoming') return course.status === 'upcoming';
    return true;
  });

  return (
    <>
      <SEOMetadata 
        title={content.dashboard[language as keyof typeof content.dashboard]}
        description={`${content.dashboard[language as keyof typeof content.dashboard]} - Mira Academy`}
      />
      
      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <div className="bg-gradient-to-br from-primary-900 via-primary-800 to-accent-900 text-white">
          <div className="container mx-auto px-4 py-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className={`${language === 'ar' ? 'font-arabic text-right' : ''}`}
            >
              <h1 className="text-4xl font-bold mb-2">
                {content.dashboard[language as keyof typeof content.dashboard]}
              </h1>
              <p className="text-xl text-primary-100">
                {content.welcome[language as keyof typeof content.welcome]}, Sarah!
              </p>
            </motion.div>
          </div>
        </div>
        
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main content - Course list */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-8">
                <div className="p-6 border-b border-gray-200">
                  <h2 className={`text-2xl font-bold text-gray-900 ${language === 'ar' ? 'font-arabic text-right' : ''}`}>
                    {content.myCourses[language as keyof typeof content.myCourses]}
                  </h2>
                </div>
                
                <div className="border-b border-gray-200">
                  <nav className="flex -mb-px">
                    <button
                      onClick={() => setActiveTab('in-progress')}
                      className={`py-4 px-6 font-medium text-sm border-b-2 ${
                        activeTab === 'in-progress'
                          ? 'border-primary-500 text-primary-600'
                          : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                      } ${language === 'ar' ? 'font-arabic' : ''}`}
                    >
                      {content.inProgress[language as keyof typeof content.inProgress]}
                    </button>
                    <button
                      onClick={() => setActiveTab('completed')}
                      className={`py-4 px-6 font-medium text-sm border-b-2 ${
                        activeTab === 'completed'
                          ? 'border-primary-500 text-primary-600'
                          : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                      } ${language === 'ar' ? 'font-arabic' : ''}`}
                    >
                      {content.completed[language as keyof typeof content.completed]}
                    </button>
                    <button
                      onClick={() => setActiveTab('upcoming')}
                      className={`py-4 px-6 font-medium text-sm border-b-2 ${
                        activeTab === 'upcoming'
                          ? 'border-primary-500 text-primary-600'
                          : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                      } ${language === 'ar' ? 'font-arabic' : ''}`}
                    >
                      {content.upcoming[language as keyof typeof content.upcoming]}
                    </button>
                  </nav>
                </div>
                
                <div className="p-6">
                  {filteredCourses.length > 0 ? (
                    <div className="space-y-6">
                      {filteredCourses.map((course) => (
                        <div key={course.id} className="flex border rounded-lg overflow-hidden hover:shadow-md transition-shadow">
                          <div className="bg-primary-50 p-6 flex items-center justify-center">
                            <span className="text-4xl">{course.image}</span>
                          </div>
                          <div className="flex-1 p-4">
                            <h3 className={`font-bold text-gray-900 mb-1 ${language === 'ar' ? 'font-arabic text-right' : ''}`}>
                              {course.title[language as keyof typeof course.title]}
                            </h3>
                            
                            {course.status === 'in-progress' && (
                              <>
                                <div className="mb-3">
                                  <div className="flex items-center justify-between text-sm mb-1">
                                    <span className="text-gray-600">{content.progress[language as keyof typeof content.progress]}</span>
                                    <span className="font-medium">{course.progress}%</span>
                                  </div>
                                  <div className="h-2 bg-gray-200 rounded-full">
                                    <div 
                                      className="h-full bg-primary-500 rounded-full"
                                      style={{ width: `${course.progress}%` }}
                                    ></div>
                                  </div>
                                </div>
                                
                                <div className={`flex ${language === 'ar' ? 'flex-row-reverse' : 'flex-row'} justify-between items-center`}>
                                  <div>
                                    <p className={`text-sm text-gray-600 ${language === 'ar' ? 'font-arabic text-right' : ''}`}>
                                      <span className="font-medium">{content.nextLesson[language as keyof typeof content.nextLesson]}:</span> {course.nextLesson[language as keyof typeof course.nextLesson]}
                                    </p>
                                    <p className="text-xs text-gray-500">{course.nextLessonTime}</p>
                                  </div>
                                  
                                  <Link 
                                    href={`/dashboard/courses/${course.id}`}
                                    className="px-4 py-2 text-sm font-medium text-white bg-primary-500 rounded-md hover:bg-primary-600 transition-colors"
                                  >
                                    {content.continueButton[language as keyof typeof content.continueButton]}
                                  </Link>
                                </div>
                              </>
                            )}
                            
                            {course.status === 'completed' && (
                              <div className={`flex ${language === 'ar' ? 'flex-row-reverse' : 'flex-row'} justify-between items-center`}>
                                <div>
                                  <p className={`text-sm text-gray-600 ${language === 'ar' ? 'font-arabic text-right' : ''}`}>
                                    <span className="font-medium">{content.completed[language as keyof typeof content.completed]}</span>
                                  </p>
                                  <div className="flex items-center text-green-500">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>
                                    <span className="text-sm">{course.completedDate}</span>
                                  </div>
                                </div>
                                
                                <Link 
                                  href={`/dashboard/courses/${course.id}`}
                                  className="px-4 py-2 text-sm font-medium text-primary-600 border border-primary-500 rounded-md hover:bg-primary-50 transition-colors"
                                >
                                  {content.viewAll[language as keyof typeof content.viewAll]}
                                </Link>
                              </div>
                            )}
                            
                            {course.status === 'upcoming' && (
                              <div className={`flex ${language === 'ar' ? 'flex-row-reverse' : 'flex-row'} justify-between items-center`}>
                                <div>
                                  <p className={`text-sm text-gray-600 ${language === 'ar' ? 'font-arabic text-right' : ''}`}>
                                    <span className="font-medium">{content.upcoming[language as keyof typeof content.upcoming]}</span>
                                  </p>
                                  <div className="flex items-center text-blue-500">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                                    </svg>
                                    <span className="text-sm">{course.startDate}</span>
                                  </div>
                                </div>
                              </div>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-12 text-gray-500">
                      <p className={language === 'ar' ? 'font-arabic' : ''}>
                        {activeTab === 'in-progress' && 'You have no courses in progress.'}
                        {activeTab === 'completed' && 'You have not completed any courses yet.'}
                        {activeTab === 'upcoming' && 'You have no upcoming courses.'}
                      </p>
                      <Link 
                        href="/courses" 
                        className="mt-4 inline-block px-4 py-2 text-sm font-medium text-primary-600 border border-primary-500 rounded-md hover:bg-primary-50 transition-colors"
                      >
                        {content.coursesButton[language as keyof typeof content.coursesButton]}
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            </div>
            
            {/* Sidebar */}
            <div className="space-y-8">
              {/* Today's Classes */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="p-6 border-b border-gray-200">
                  <h2 className={`text-xl font-bold text-gray-900 ${language === 'ar' ? 'font-arabic text-right' : ''}`}>
                    {content.todayClasses[language as keyof typeof content.todayClasses]}
                  </h2>
                </div>
                <div className="p-6">
                  {studentCourses.filter(c => c.status === 'in-progress' && c.nextLessonTime.includes('Today')).length > 0 ? (
                    <div className="space-y-4">
                      {studentCourses
                        .filter(c => c.status === 'in-progress' && c.nextLessonTime.includes('Today'))
                        .map(course => (
                          <div key={course.id} className="flex items-center p-3 border rounded-lg">
                            <div className="bg-primary-100 p-2 rounded-full mr-3">
                              <span className="text-xl">{course.image}</span>
                            </div>
                            <div>
                              <h4 className={`font-medium text-gray-900 text-sm ${language === 'ar' ? 'font-arabic text-right' : ''}`}>
                                {course.nextLesson[language as keyof typeof course.nextLesson]}
                              </h4>
                              <p className="text-sm text-gray-500">{course.nextLessonTime}</p>
                            </div>
                          </div>
                        ))
                      }
                    </div>
                  ) : (
                    <p className={`text-center py-6 text-gray-500 ${language === 'ar' ? 'font-arabic text-right' : ''}`}>
                      {content.noClasses[language as keyof typeof content.noClasses]}
                    </p>
                  )}
                </div>
              </div>
              
              {/* Assignments */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="p-6 border-b border-gray-200">
                  <h2 className={`text-xl font-bold text-gray-900 ${language === 'ar' ? 'font-arabic text-right' : ''}`}>
                    {content.assignments[language as keyof typeof content.assignments]}
                  </h2>
                </div>
                <div className="p-6">
                  {assignments.length > 0 ? (
                    <div className="space-y-4">
                      {assignments.map(assignment => (
                        <div key={assignment.id} className="p-3 border rounded-lg">
                          <h4 className={`font-medium text-gray-900 mb-1 ${language === 'ar' ? 'font-arabic text-right' : ''}`}>
                            {assignment.title[language as keyof typeof assignment.title]}
                          </h4>
                          <p className={`text-sm text-gray-600 mb-1 ${language === 'ar' ? 'font-arabic text-right' : ''}`}>
                            {assignment.course[language as keyof typeof assignment.course]}
                          </p>
                          <div className="flex items-center text-sm text-gray-500">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                            </svg>
                            <span>Due: {assignment.dueDate}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className={`text-center py-6 text-gray-500 ${language === 'ar' ? 'font-arabic text-right' : ''}`}>
                      {content.noAssignments[language as keyof typeof content.noAssignments]}
                    </p>
                  )}
                </div>
              </div>
              
              {/* Announcements */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="p-6 border-b border-gray-200 flex justify-between items-center">
                  <h2 className={`text-xl font-bold text-gray-900 ${language === 'ar' ? 'font-arabic text-right' : ''}`}>
                    {content.announcements[language as keyof typeof content.announcements]}
                  </h2>
                  <Link href="/dashboard/announcements" className="text-sm text-primary-600 hover:text-primary-800">
                    {content.viewAll[language as keyof typeof content.viewAll]}
                  </Link>
                </div>
                <div className="p-6">
                  <div className="space-y-4">
                    {announcements.map(announcement => (
                      <div key={announcement.id} className="p-3 border rounded-lg">
                        <h4 className={`font-medium text-gray-900 mb-1 ${language === 'ar' ? 'font-arabic text-right' : ''}`}>
                          {announcement.title[language as keyof typeof announcement.title]}
                        </h4>
                        <p className="text-sm text-gray-500">{announcement.date}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}