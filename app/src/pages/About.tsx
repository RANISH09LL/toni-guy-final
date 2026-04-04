import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import './About.css';

const About = () => {
  useGSAP(() => {
    window.scrollTo(0, 0);
    
    gsap.from('.page-transition-enter', {
      opacity: 0,
      y: 20,
      duration: 0.6,
      ease: 'power2.out'
    });

    gsap.from('.about-hero-content > *', {
      y: 30,
      opacity: 0,
      duration: 0.8,
      stagger: 0.15,
      delay: 0.2,
      ease: 'power3.out'
    });
  });

  return (
    <div className="about-page page-transition-enter">
      <div className="about-header section pt-0 pb-0" style={{ marginTop: '120px' }}>
        <div className="about-hero-content text-center max-w-3xl mx-auto">
          <span className="section-subtitle">Since 1963</span>
          <h1 className="section-title">The Masterclass of Hairdressing</h1>
        </div>
      </div>

      <section className="section">
        <div className="story-grid">
          <div className="story-text">
            <h2 className="mb-4" style={{ fontFamily: 'var(--font-heading)', fontSize: '2.5rem', marginBottom: '1.5rem' }}>Our Genesis</h2>
            <p>
              Co-founder Toni Mascolo and his brother Guy started TONI&GUY back in 1963 with a single salon in Clapham, London. 
              Over the decades, it has gracefully grown into an Iconic International Fashion and Style leader in the hairdressing industry.
            </p>
            <p>
              Today, Paulsons owns the master franchise for Toni&GUY in 9 Indian states/territories. Presently, over 400 branches 
              of our high-end salons function across these locations, bringing international standards to the domestic market.
            </p>
          </div>
          <div className="story-img">
            <img src="https://toniandguysalon.in/wp-content/uploads/2023/11/tg1-min.webp" alt="Toni & Guy Legacy" />
          </div>
        </div>
      </section>

      <section className="section bg-glass" style={{ background: 'var(--glass-bg)' }}>
        <div className="story-grid reverse">
          <div className="story-img">
            <img src="https://toniandguysalon.in/wp-content/uploads/2024/03/TONIGUY-EDUCATION-mobile.gif" alt="London Trained Styling" style={{ objectFit: 'cover' }} />
          </div>
          <div className="story-text">
            <h2 className="mb-4" style={{ fontFamily: 'var(--font-heading)', fontSize: '2.5rem', marginBottom: '1.5rem' }}>Luxury & Precision</h2>
            <p>
              We are a beauty salon that offers luxury and premium services. We believe that everyone deserves to feel beautiful, 
              confident and pampered. Our expert stylist team are highly skilled professionals who offer a wide range of hair care 
              services from haircuts to botox treatment.
            </p>
            <p>
              Our team of stylists are professionally trained from London to provide you with excellent hairdressing and hair 
              treatments. When you step into our exquisitely designed salons, we give you a place to truly unwind.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
