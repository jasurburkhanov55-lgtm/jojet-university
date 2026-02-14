import { useState } from 'react';
import { LanguageProvider } from './context/LanguageContext';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Academics from './pages/Academics';
import Admissions from './pages/Admissions';
import StudentLife from './pages/StudentLife';
import News from './pages/News';
import Contact from './pages/Contact';
import './App.css';

type Page = 'home' | 'about' | 'vision' | 'history' | 'academics' | 'graduate' | 'faculties' | 'admissions' | 'how-to-apply' | 'scholarships' | 'student-life' | 'news' | 'contact';

function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');

  const handlePageChange = (page: Page) => {
    setCurrentPage(page);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home onPageChange={handlePageChange} />;
      case 'about':
      case 'vision':
      case 'history':
        return <About />;
      case 'academics':
      case 'graduate':
      case 'faculties':
        return <Academics />;
      case 'admissions':
      case 'how-to-apply':
      case 'scholarships':
        return <Admissions />;
      case 'student-life':
        return <StudentLife />;
      case 'news':
        return <News />;
      case 'contact':
        return <Contact />;
      default:
        return <Home onPageChange={handlePageChange} />;
    }
  };

  return (
    <LanguageProvider>
      <div className="min-h-screen flex flex-col">
        <Header currentPage={currentPage} onPageChange={handlePageChange} />
        <main className="flex-1">
          {renderPage()}
        </main>
        <Footer onPageChange={handlePageChange} />
      </div>
    </LanguageProvider>
  );
}

export default App;
