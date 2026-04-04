import { useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, Star, Scissors, MapPin, Clock, Phone } from 'lucide-react';
import { useGSAP } from '@gsap/react';
import './Home.css';

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Page entrance
    gsap.from('.page-transition-enter', {
      opacity: 0, y: 20, duration: 0.6, ease: 'power2.out'
    });

    // Hero (immediate, no scroll trigger — these are fine with gsap.from)
    gsap.from('.hero-content h1', { y: 40, opacity: 0, duration: 1.2, ease: 'power3.out', delay: 0.3 });
    gsap.from('.hero-content p', { y: 20, opacity: 0, duration: 1, ease: 'power3.out', delay: 0.6 });
    gsap.from('.hero-content .btn-primary', { y: 20, opacity: 0, duration: 0.8, ease: 'power3.out', delay: 0.9 });
    gsap.from('.hero-scroll-indicator', { opacity: 0, y: -10, duration: 0.8, delay: 1.4 });

    // Helper for reliable scroll-triggered animations
    const scrollReveal = (targets: string, trigger: string, vars: gsap.TweenVars = {}) => {
      const els = gsap.utils.toArray(targets);
      if (!els.length) return;
      gsap.set(els, { opacity: 0, y: vars.y ?? 30, x: vars.x ?? 0 });
      gsap.to(els, {
        opacity: 1, y: 0, x: 0,
        duration: vars.duration ?? 0.8,
        stagger: vars.stagger ?? 0,
        ease: (vars.ease as string) ?? 'power2.out',
        scrollTrigger: {
          trigger,
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
      });
    };

    // Marquee
    scrollReveal('.marquee-band', '.marquee-band', { y: 0 });

    // Stats
    scrollReveal('.stat-item', '.stats-section', { y: 30, stagger: 0.15 });

    // About
    scrollReveal('.about-text > *', '.about-section', { y: 30, stagger: 0.2 });
    scrollReveal('.about-image-wrapper', '.about-section', { x: 50, y: 0 });

    // Services
    scrollReveal('.service-card', '.services-section', { y: 40, stagger: 0.2 });

    // Gallery
    scrollReveal('.gallery-home-item', '.gallery-home-section', { y: 30, stagger: 0.1, duration: 0.7 });

    // Process
    scrollReveal('.process-step', '.process-section', { y: 40, stagger: 0.2 });

    // Reviews
    scrollReveal('.review-card', '.reviews-section', { y: 30, stagger: 0.15, duration: 0.7 });

    // CTA
    scrollReveal('.cta-inner > *', '.cta-section', { y: 20, stagger: 0.15 });

    // Location
    scrollReveal('.location-info > *', '.location-strip', { y: 20, stagger: 0.1 });
    scrollReveal('.location-map-wrapper', '.location-strip', { x: 30, y: 0 });

  }, { scope: heroRef.current?.parentElement || undefined });

  return (
    <div className="home-page page-transition-enter">

      {/* ========== HERO ========== */}
      <section className="hero-section" ref={heroRef}>
        <div className="hero-bg">
          <img src="https://toniandguysalon.in/wp-content/uploads/2024/03/toni-guy-banner-1.webp" alt="Toni and Guy Salon" />
          <div className="hero-overlay"></div>
        </div>
        <div className="hero-content">
          <span className="section-subtitle">Est. 1963 · London</span>
          <h1>Welcome To<br/>The Best Beauty<br/>Parlour in Chennai</h1>
          <p>London-trained stylists delivering premium, luxurious salon experiences.</p>
          <Link to="/contact" className="btn-primary mt-4">
            Book Appointment <ArrowRight size={18} style={{ marginLeft: '10px' }} />
          </Link>
        </div>
        <div className="hero-scroll-indicator">
          <span>Scroll</span>
          <div className="scroll-line"></div>
        </div>
      </section>

      {/* ========== MARQUEE BAND ========== */}
      <div className="marquee-band">
        <div className="marquee-track">
          {[...Array(3)].map((_, i) => (
            <div className="marquee-content" key={i}>
              <span>PRECISION CUTS</span>
              <Scissors size={16} />
              <span>BESPOKE COLOUR</span>
              <Scissors size={16} />
              <span>BRIDAL MASTERY</span>
              <Scissors size={16} />
              <span>HAIR TREATMENTS</span>
              <Scissors size={16} />
              <span>LONDON TRAINED</span>
              <Scissors size={16} />
            </div>
          ))}
        </div>
      </div>

      {/* ========== STATS ========== */}
      <section className="stats-section">
        <div className="stats-grid">
          <div className="stat-item">
            <span className="stat-number">60+</span>
            <span className="stat-label">Years of Excellence</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">400+</span>
            <span className="stat-label">Branches in India</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">4.9</span>
            <span className="stat-label">Google Rating</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">10K+</span>
            <span className="stat-label">Happy Clients</span>
          </div>
        </div>
      </section>

      {/* ========== ABOUT TEASER ========== */}
      <section className="about-section section">
        <div className="about-grid">
          <div className="about-text">
            <span className="section-subtitle">Our Heritage</span>
            <h2 className="section-title">A Legacy of Artistry</h2>
            <p>From our humble beginnings in Clapham, London to over 400 branches across India, TONI&GUY has been at the forefront of the salon industry. We believe that everyone deserves to feel beautiful, confident, and pampered in a chic, luxurious ambiance.</p>
            <p>You will be in the hands of our expert stylists, who have been specialized and trained in London.</p>
            <Link to="/about" className="btn-text">
              Discover Our Story <ArrowRight size={16} style={{ marginLeft: '5px' }}/>
            </Link>
          </div>
          <div className="about-image-wrapper">
             <img src="https://toniandguysalon.in/wp-content/uploads/2023/10/toni-abt.webp" alt="Salon Heritage" className="about-image" />
          </div>
        </div>
      </section>

      {/* ========== SERVICES TEASER ========== */}
      <section className="services-section section">
        <div className="text-center" style={{ marginBottom: '2.5rem' }}>
          <span className="section-subtitle">Our Portfolio</span>
          <h2 className="section-title">Signature Services</h2>
        </div>
        
        <div className="services-grid">
          <div className="service-card">
            <div className="service-img-wrapper">
              <img src="https://toniandguysalon.in/wp-content/uploads/2023/11/Haircut.webp" alt="Haircut" />
            </div>
            <div className="service-content">
              <h3>Precision Cutting</h3>
              <p>Customized to your face shape, lifestyle, and hair texture.</p>
            </div>
          </div>
          
          <div className="service-card">
            <div className="service-img-wrapper">
              <img src="https://toniandguysalon.in/wp-content/uploads/2023/11/haircolour.webp" alt="Hair Colour" />
            </div>
            <div className="service-content">
              <h3>Bespoke Colour</h3>
              <p>From balayage to global colour, matched perfectly to your skin tone.</p>
            </div>
          </div>

          <div className="service-card">
            <div className="service-img-wrapper">
              <img src="https://toniandguysalon.in/wp-content/uploads/2023/11/bridal.webp" alt="Bridal Makeup" />
            </div>
            <div className="service-content">
              <h3>Bridal Mastery</h3>
              <p>HD &amp; Airbrush makeup ensuring you look flawless on your big day.</p>
            </div>
          </div>

          <div className="service-card">
            <div className="service-img-wrapper">
              <img src="https://toniandguysalon.in/wp-content/uploads/2024/04/kertain-home.webp" alt="Keratin" />
            </div>
            <div className="service-content">
              <h3>Keratin Treatment</h3>
              <p>Smooth, frizz-free hair with incredible shine that lasts months.</p>
            </div>
          </div>
        </div>

        <div style={{ marginTop: '2.5rem', textAlign: 'center' }}>
           <Link to="/catalog" className="btn-primary">View Full Catalog</Link>
        </div>
      </section>

      {/* ========== OUR SALON ========== */}
      <section className="gallery-home-section">
        <div className="section text-center pb-0" style={{ paddingBottom: '2rem' }}>
          <span className="section-subtitle">Our Space</span>
          <h2 className="section-title">Inside Our Salon</h2>
        </div>
        <div className="gallery-home-grid">
          <div className="gallery-home-item gallery-wide">
            <img src="https://toniandguysalon.in/wp-content/uploads/2023/11/tg1-min.webp" alt="Salon Interior - Styling Chairs" loading="lazy" />
          </div>
          <div className="gallery-home-item">
            <img src="https://toniandguysalon.in/wp-content/uploads/2023/11/tg2.webp" alt="Styling Stations" loading="lazy" />
          </div>
          <div className="gallery-home-item">
            <img src="https://toniandguysalon.in/wp-content/uploads/2023/11/tg3.webp" alt="Modern Salon Layout" loading="lazy" />
          </div>
          <div className="gallery-home-item">
            <img src="https://toniandguysalon.in/wp-content/uploads/2023/11/tg5.webp" alt="Wash Stations" loading="lazy" />
          </div>
          <div className="gallery-home-item">
            <img src="https://toniandguysalon.in/wp-content/uploads/2023/11/tg6.webp" alt="Storefront Entrance" loading="lazy" />
          </div>
          <div className="gallery-home-item gallery-wide">
            <img src="https://toniandguysalon.in/wp-content/uploads/2023/11/tg4.webp" alt="Premium Salon Seating" loading="lazy" />
          </div>
        </div>
      </section>

      {/* ========== PROCESS / HOW IT WORKS ========== */}
      <section className="process-section section" style={{ background: '#fafafa' }}>
        <div className="text-center" style={{ marginBottom: '2.5rem' }}>
          <span className="section-subtitle">The Experience</span>
          <h2 className="section-title">Your Visit, Perfected</h2>
        </div>
        <div className="process-grid">
          <div className="process-step">
            <div className="process-number">01</div>
            <h3>Consultation</h3>
            <p>Your stylist carefully analyzes your face shape, hair texture, lifestyle, and personal style preferences.</p>
          </div>
          <div className="process-step">
            <div className="process-number">02</div>
            <h3>Personalized Plan</h3>
            <p>Together, you'll co-create a detailed plan covering cut, colour, and any treatments needed.</p>
          </div>
          <div className="process-step">
            <div className="process-number">03</div>
            <h3>Expert Execution</h3>
            <p>London-trained stylists bring the vision to life using premium products and precision techniques.</p>
          </div>
          <div className="process-step">
            <div className="process-number">04</div>
            <h3>Aftercare Guidance</h3>
            <p>Leave with a bespoke home-care plan to maintain your look between salon visits.</p>
          </div>
        </div>
      </section>

      {/* ========== REVIEWS ========== */}
      <section className="reviews-section section">
        <div className="text-center" style={{ marginBottom: '2.5rem' }}>
          <span className="section-subtitle">Testimonials</span>
          <h2 className="section-title">What Our Clients Say</h2>
        </div>
        <div className="reviews-grid">
          <div className="review-card">
            <div className="stars">
              {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="var(--accent-gold)" color="var(--accent-gold)" />)}
            </div>
            <p className="review-card-text">"Rahul did an excellent job with my global hair colouring. The transformation was incredible — a truly premium experience from start to finish."</p>
            <div className="review-card-author">
              <div className="review-avatar">AN</div>
              <div>
                <span className="review-name">Akshaya N.</span>
                <span className="review-source">Google Reviews</span>
              </div>
            </div>
          </div>

          <div className="review-card">
            <div className="stars">
              {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="var(--accent-gold)" color="var(--accent-gold)" />)}
            </div>
            <p className="review-card-text">"Had a wonderful haircut today. The stylist understood exactly what I wanted. Definitely the best salon experience I've had in Chennai."</p>
            <div className="review-card-author">
              <div className="review-avatar">RM</div>
              <div>
                <span className="review-name">Rahul M.</span>
                <span className="review-source">Google Reviews</span>
              </div>
            </div>
          </div>

          <div className="review-card">
            <div className="stars">
              {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="var(--accent-gold)" color="var(--accent-gold)" />)}
            </div>
            <p className="review-card-text">"The keratin treatment was amazing. My hair feels so smooth and healthy now. The attention to detail is what sets Toni & Guy apart from the rest."</p>
            <div className="review-card-author">
              <div className="review-avatar">AK</div>
              <div>
                <span className="review-name">Ananya K.</span>
                <span className="review-source">Google Reviews</span>
              </div>
            </div>
          </div>

          <div className="review-card">
            <div className="stars">
              {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="var(--accent-gold)" color="var(--accent-gold)" />)}
            </div>
            <p className="review-card-text">"Friendly staff and an extremely clean environment. Worth every penny for the quality and expertise they provide. Will definitely be a regular!"</p>
            <div className="review-card-author">
              <div className="review-avatar">VR</div>
              <div>
                <span className="review-name">Vikram R.</span>
                <span className="review-source">Google Reviews</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== LOCATION QUICK STRIP ========== */}
      <section className="location-strip">
        <div className="location-strip-inner section" style={{ padding: '5rem 5%' }}>
          <div className="location-info">
            <span className="section-subtitle">Find Us</span>
            <h2 className="section-title" style={{ fontSize: '2.5rem' }}>Visit Our Flagship Salon</h2>
            <div className="location-details">
              <div className="location-detail-item">
                <MapPin size={20} className="text-gold" />
                <span>142, Halls Rd, Kilpauk, Chennai 600010</span>
              </div>
              <div className="location-detail-item">
                <Clock size={20} className="text-gold" />
                <span>Open Daily · 10 AM – 9 PM</span>
              </div>
              <div className="location-detail-item">
                <Phone size={20} className="text-gold" />
                <span>+91 91500 21654</span>
              </div>
            </div>
            <Link to="/locations" className="btn-primary" style={{ marginTop: '2rem' }}>Get Directions</Link>
          </div>
          <div className="location-map-wrapper">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.2905201198547!2d80.2393393!3d13.0807663!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5265ded8cd4851%3A0xe4d830b501de7aa0!2sTONI%26GUY%20Kilpauk%20-%20Hair%20Salon!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              title="Toni and Guy Location"
            ></iframe>
          </div>
        </div>
      </section>

      {/* ========== CTA BAND ========== */}
      <section className="cta-section">
        <div className="cta-inner">
          <h2>Ready for a<br/>Transformation?</h2>
          <p>Book your appointment today and experience<br/>the art of London styling in Chennai.</p>
          <Link to="/contact" className="btn-primary cta-btn">
            Book Now <ArrowRight size={18} style={{ marginLeft: '8px' }} />
          </Link>
        </div>
      </section>

    </div>
  );
};

export default Home;
