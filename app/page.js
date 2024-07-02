import Image from 'next/image';
import Hero from './components/Hero';
import Project from './components/Project';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function Home() {
  return (
    <main>
      {/* Landing Page */}
      <section className="mt-3 min-h-[90vh] relative w-full">
        <Hero />
      </section>
      {/* Landing Page */}
      {/* Project Page */}
      <section className="mt-12" id="project">
        <Project />
      </section>
      {/* Project Page */}

      {/* Contact Page */}
      <section className="mt-12">
        <Contact />
      </section>
      {/* Contact Page */}
      {/* Footer Page */}
      <section className="mt-12">
        <Footer />
      </section>
      {/* Footer Page */}
    </main>
  );
}
