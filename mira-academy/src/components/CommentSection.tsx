import { useState } from 'react';
import { motion } from 'framer-motion';

type Comment = {
  id: string;
  author: string;
  content: string;
  date: string;
  avatar?: string;
  replies?: Comment[];
};

type CommentSectionProps = {
  postId: string;
  language: 'fr' | 'ar' | 'en';
  comments?: Comment[];
};

export default function CommentSection({ postId, language, comments: initialComments = [] }: CommentSectionProps) {
  const [comments, setComments] = useState<Comment[]>(initialComments);
  const [newComment, setNewComment] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const content = {
    title: {
      fr: 'Commentaires',
      ar: 'التعليقات',
      en: 'Comments',
    },
    noComments: {
      fr: 'Aucun commentaire pour le moment. Soyez le premier à commenter !',
      ar: 'لا توجد تعليقات حتى الآن. كن أول من يعلق!',
      en: 'No comments yet. Be the first to comment!',
    },
    leaveComment: {
      fr: 'Laisser un commentaire',
      ar: 'اترك تعليقًا',
      en: 'Leave a comment',
    },
    yourName: {
      fr: 'Votre nom',
      ar: 'اسمك',
      en: 'Your name',
    },
    yourEmail: {
      fr: 'Votre email',
      ar: 'بريدك الإلكتروني',
      en: 'Your email',
    },
    yourComment: {
      fr: 'Votre commentaire',
      ar: 'تعليقك',
      en: 'Your comment',
    },
    submit: {
      fr: 'Soumettre',
      ar: 'إرسال',
      en: 'Submit',
    },
    submitting: {
      fr: 'Envoi en cours...',
      ar: 'جار الإرسال...',
      en: 'Submitting...',
    },
    requiredFields: {
      fr: 'Tous les champs sont obligatoires',
      ar: 'جميع الحقول مطلوبة',
      en: 'All fields are required',
    },
    reply: {
      fr: 'Répondre',
      ar: 'الرد',
      en: 'Reply',
    },
    on: {
      fr: 'le',
      ar: 'في',
      en: 'on',
    },
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    
    if (language === 'fr') {
      return new Intl.DateTimeFormat('fr-FR', { 
        day: 'numeric', 
        month: 'long', 
        year: 'numeric' 
      }).format(date);
    } else if (language === 'ar') {
      return new Intl.DateTimeFormat('ar-SA', { 
        day: 'numeric', 
        month: 'long', 
        year: 'numeric' 
      }).format(date);
    } else {
      return new Intl.DateTimeFormat('en-US', { 
        day: 'numeric', 
        month: 'long', 
        year: 'numeric' 
      }).format(date);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!name.trim() || !email.trim() || !newComment.trim()) {
      alert(content.requiredFields[language]);
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      const newCommentObj: Comment = {
        id: `comment-${Date.now()}`,
        author: name,
        content: newComment,
        date: new Date().toISOString(),
        replies: [],
      };
      
      setComments([...comments, newCommentObj]);
      setNewComment('');
      setName('');
      setEmail('');
      setIsSubmitting(false);
    }, 1000);
  };

  // Comment component
  const CommentItem = ({ comment }: { comment: Comment }) => (
    <div className="mb-6">
      <div className={`flex ${language === 'ar' ? 'flex-row-reverse' : ''}`}>
        <div className={`flex-shrink-0 ${language === 'ar' ? 'ml-3' : 'mr-3'}`}>
          <div className="h-10 w-10 rounded-full bg-neutral-200 overflow-hidden">
            {comment.avatar && (
              <img 
                src={comment.avatar} 
                alt={comment.author} 
                className="h-full w-full object-cover"
              />
            )}
          </div>
        </div>
        <div className="flex-1 min-w-0">
          <div className={`${language === 'ar' ? 'text-right' : ''}`}>
            <h4 className="text-sm font-medium text-neutral-900">{comment.author}</h4>
            <p className={`text-xs text-neutral-500 ${
              language === 'ar' ? 'font-arabic' : ''
            }`}>
              {content.on[language]} {formatDate(comment.date)}
            </p>
          </div>
          <div className={`mt-2 text-sm text-neutral-700 ${
            language === 'ar' ? 'text-right font-arabic' : ''
          }`}>
            <p>{comment.content}</p>
          </div>
          <div className={`mt-2 ${language === 'ar' ? 'text-right' : ''}`}>
            <button className={`text-xs font-medium text-primary-600 hover:text-primary-500 ${
              language === 'ar' ? 'font-arabic' : ''
            }`}>
              {content.reply[language]}
            </button>
          </div>
          
          {/* Replies */}
          {comment.replies && comment.replies.length > 0 && (
            <div className={`mt-4 pl-6 ${language === 'ar' ? 'pr-6 pl-0' : ''}`}>
              {comment.replies.map((reply) => (
                <CommentItem key={reply.id} comment={reply} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );

  return (
    <div className="mt-16">
      <h3 className={`text-2xl font-bold text-neutral-900 mb-8 ${
        language === 'ar' ? 'text-right font-arabic' : ''
      }`}>
        {content.title[language]} ({comments.length})
      </h3>
      
      {comments.length > 0 ? (
        <div className="mb-12">
          {comments.map((comment) => (
            <motion.div
              key={comment.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <CommentItem comment={comment} />
            </motion.div>
          ))}
        </div>
      ) : (
        <div className={`text-center my-12 ${
          language === 'ar' ? 'font-arabic' : ''
        }`}>
          <p className="text-neutral-600">{content.noComments[language]}</p>
        </div>
      )}
      
      {/* Comment form */}
      <div className={`bg-neutral-50 rounded-xl p-6 ${
        language === 'ar' ? 'text-right' : ''
      }`}>
        <h4 className={`text-lg font-bold text-neutral-900 mb-4 ${
          language === 'ar' ? 'font-arabic' : ''
        }`}>
          {content.leaveComment[language]}
        </h4>
        
        <form onSubmit={handleSubmit}>
          <div className={`grid grid-cols-1 md:grid-cols-2 gap-4 mb-4 ${
            language === 'ar' ? 'flex-row-reverse' : ''
          }`}>
            <div>
              <label 
                htmlFor="name" 
                className={`block text-sm font-medium text-neutral-700 mb-1 ${
                  language === 'ar' ? 'font-arabic' : ''
                }`}
              >
                {content.yourName[language]} *
              </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className={`block w-full rounded-md border-neutral-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 ${
                  language === 'ar' ? 'text-right font-arabic' : ''
                }`}
                required
              />
            </div>
            <div>
              <label 
                htmlFor="email" 
                className={`block text-sm font-medium text-neutral-700 mb-1 ${
                  language === 'ar' ? 'font-arabic' : ''
                }`}
              >
                {content.yourEmail[language]} *
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={`block w-full rounded-md border-neutral-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 ${
                  language === 'ar' ? 'text-right font-arabic' : ''
                }`}
                required
              />
            </div>
          </div>
          
          <div className="mb-4">
            <label 
              htmlFor="comment" 
              className={`block text-sm font-medium text-neutral-700 mb-1 ${
                language === 'ar' ? 'font-arabic' : ''
              }`}
            >
              {content.yourComment[language]} *
            </label>
            <textarea
              id="comment"
              rows={5}
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              className={`block w-full rounded-md border-neutral-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 ${
                language === 'ar' ? 'text-right font-arabic' : ''
              }`}
              required
            ></textarea>
          </div>
          
          <div className={`${language === 'ar' ? 'text-right' : ''}`}>
            <button
              type="submit"
              disabled={isSubmitting}
              className={`px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 disabled:bg-primary-400 disabled:cursor-not-allowed ${
                language === 'ar' ? 'font-arabic' : ''
              }`}
            >
              {isSubmitting ? content.submitting[language] : content.submit[language]}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
} 