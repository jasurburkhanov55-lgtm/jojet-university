import { useState } from 'react';
import { Calendar, ArrowRight, User, Tag } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function News() {
  const { t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'All News' },
    { id: 'academic', label: 'Academic' },
    { id: 'events', label: 'Events' },
    { id: 'research', label: 'Research' },
    { id: 'campus', label: 'Campus' },
  ];

  const newsArticles = [
    {
      id: 1,
      title: 'JIU Hosts International Academic Conference 2024',
      excerpt: 'Leading researchers from around the world gathered at JIU to discuss the latest developments in science and technology.',
      image: 'news-1.jpg',
      date: 'January 15, 2024',
      author: 'University Communications',
      category: 'academic',
    },
    {
      id: 2,
      title: 'Scholarship Awards Ceremony Celebrates Excellence',
      excerpt: 'Over 200 students received merit-based scholarships recognizing their outstanding academic achievements.',
      image: 'news-2.jpg',
      date: 'January 10, 2024',
      author: 'Financial Aid Office',
      category: 'events',
    },
    {
      id: 3,
      title: 'New Student Housing Complex Opens',
      excerpt: 'State-of-the-art residence hall provides modern amenities for 1,000 students.',
      image: 'news-3.jpg',
      date: 'January 5, 2024',
      author: 'Facilities Management',
      category: 'campus',
    },
    {
      id: 4,
      title: 'Cultural Festival Brings Global Community Together',
      excerpt: 'Students from 50 countries showcased their traditions at the annual International Culture Day.',
      image: 'news-4.jpg',
      date: 'January 1, 2024',
      author: 'Student Affairs',
      category: 'events',
    },
    {
      id: 5,
      title: 'Breakthrough Research in Renewable Energy',
      excerpt: 'JIU researchers develop new solar panel technology with 30% increased efficiency.',
      image: '/campus-3.jpg',
      date: 'December 28, 2023',
      author: 'Research Office',
      category: 'research',
    },
    {
      id: 6,
      title: 'Partnership with Leading Tech Companies',
      excerpt: 'New industry collaborations create internship opportunities for engineering students.',
      image: '/campus-2.jpg',
      date: 'December 20, 2023',
      author: 'Career Services',
      category: 'academic',
    },
  ];

  const upcomingEvents = [
    {
      title: 'Spring Semester Orientation',
      date: 'February 1, 2024',
      time: '9:00 AM - 4:00 PM',
      location: 'Main Auditorium',
    },
    {
      title: 'Career Fair 2024',
      date: 'February 15, 2024',
      time: '10:00 AM - 5:00 PM',
      location: 'Student Center',
    },
    {
      title: 'Research Symposium',
      date: 'March 5, 2024',
      time: '1:00 PM - 6:00 PM',
      location: 'Science Building',
    },
    {
      title: 'Alumni Networking Night',
      date: 'March 20, 2024',
      time: '6:00 PM - 9:00 PM',
      location: 'University Hall',
    },
  ];

  const filteredNews = activeCategory === 'all' 
    ? newsArticles 
    : newsArticles.filter(article => article.category === activeCategory);

  return (
    <div className="pt-24">
      {/* Page Header */}
      <div className="page-header">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="breadcrumb mb-4">
            <span>Home</span>
            <span>/</span>
            <span className="text-white">{t('header.nav.news') as string}</span>
          </div>
          <h1 className="page-header-title">{t('pages.news.title') as string}</h1>
          <p className="text-white/80 mt-4 max-w-2xl">
            {t('pages.news.subtitle') as string}
          </p>
        </div>
      </div>

      {/* News Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Filter */}
          <div className="flex flex-wrap gap-2 mb-8">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeCategory === category.id
                    ? 'bg-jojet-blue text-white'
                    : 'bg-jojet-gray text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>

          {/* News Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredNews.map((article) => (
              <article key={article.id} className="bg-white rounded-xl shadow-sm overflow-hidden group hover:shadow-md transition-shadow">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={article.image} 
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 mb-3">
                    <span className="inline-flex items-center gap-1 text-xs text-jojet-gold">
                      <Tag className="w-3 h-3" />
                      {article.category.charAt(0).toUpperCase() + article.category.slice(1)}
                    </span>
                    <span className="flex items-center gap-1 text-xs text-gray-500">
                      <Calendar className="w-3 h-3" />
                      {article.date}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-jojet-blue transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-1 text-xs text-gray-500">
                      <User className="w-3 h-3" />
                      {article.author}
                    </span>
                    <button className="text-jojet-blue text-sm font-medium flex items-center gap-1 hover:gap-2 transition-all">
                      Read More <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events Section */}
      <section className="py-16 bg-jojet-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="section-subtitle">Mark Your Calendar</p>
            <h2 className="section-title">{t('pages.news.upcomingEvents') as string}</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {upcomingEvents.map((event, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm flex items-start gap-4">
                <div className="w-16 h-16 bg-jojet-blue rounded-lg flex flex-col items-center justify-center text-white flex-shrink-0">
                  <span className="text-xs uppercase">{event.date.split(' ')[0]}</span>
                  <span className="text-xl font-bold">{event.date.split(' ')[1].replace(',', '')}</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-800 mb-1">{event.title}</h3>
                  <p className="text-jojet-gold text-sm mb-1">{event.time}</p>
                  <p className="text-gray-600 text-sm">{event.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-jojet-blue rounded-2xl p-8 md:p-12 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Stay Updated
            </h2>
            <p className="text-white/80 max-w-2xl mx-auto mb-8">
              Subscribe to our newsletter to receive the latest news, events, and updates from JIU.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-jojet-gold"
              />
              <button className="btn-accent whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
