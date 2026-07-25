import './globals.css';
import { LanguageProvider } from '../LanguageContext';
import Header from '../components/Header';
import Footer from '../components/Footer';

export const metadata = {
  title: 'Hesteka Payment',
  description: 'Complete your donation to Hesteka',
};

export const dynamic = 'force-dynamic';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@400;500;600;700;800&family=Lilita+One&family=Inter:wght@400;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body>
        <LanguageProvider>
          <div className="min-h-screen flex flex-col" style={{ backgroundColor: '#fff9f0', color: '#3a2a1a' }}>
            <Header />
            <main className="flex-1 flex flex-col p-4 md:p-6 w-full max-w-7xl mx-auto relative min-h-0">
              {children}
            </main>
            <Footer />
          </div>
        </LanguageProvider>
      </body>
    </html>
  );
}
