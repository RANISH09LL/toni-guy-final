import { useParams, Navigate, Link } from 'react-router-dom';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { CheckCircle2, AlertCircle } from 'lucide-react';
import { servicesData } from '../data/servicesData';
import './ServiceDetail.css';

const ServiceDetail = () => {
  const { id } = useParams<{ id: string }>();
  const service = id ? servicesData[id] : null;

  useGSAP(() => {
    window.scrollTo(0, 0);

    gsap.from('.page-transition-enter', {
      opacity: 0,
      y: 20,
      duration: 0.6,
      ease: 'power2.out'
    });

    gsap.from('.animate-up', {
      y: 40,
      opacity: 0,
      duration: 0.8,
      stagger: 0.15,
      ease: 'power2.out',
      delay: 0.2
    });
  }, [id]); // Re-animate if ID changes!

  if (!service) {
    return <Navigate to="/catalog" replace />;
  }

  return (
    <div className="service-detail-page page-transition-enter pt-0">
      {/* Hero Section */}
      <div className="service-hero" style={{ marginTop: '80px' }}>
        <div className="service-hero-img animate-up">
          <img src={service.heroImage} alt={service.title} />
        </div>
        <div className="service-hero-content text-center section pb-0 animate-up">
          <span className="section-subtitle">Luxury Service</span>
          <h1 className="section-title" style={{ fontSize: '3rem', margin: '0 auto 1.5rem' }}>{service.title}</h1>
          <p className="text-secondary" style={{ maxWidth: '800px', margin: '0 auto', fontSize: '1.1rem' }}>
            {service.metaDesc}
          </p>
        </div>
      </div>

      <div className="section service-content-grid">
        {/* Left Column: Overview and Aftercare */}
        <div className="service-main-col">
          <div className="overview-section animate-up">
            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '2rem', marginBottom: '1.5rem' }}>What to Expect</h2>
            <ul className="overview-list">
              {service.overview.map((item, idx) => (
                <li key={idx}>
                  <CheckCircle2 className="text-gold" size={24} style={{ flexShrink: 0, marginTop: '2px' }} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="aftercare-section animate-up mt-5" style={{ marginTop: '4rem' }}>
            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '2rem', marginBottom: '1.5rem' }}>Professional Aftercare</h2>
            <div className="aftercare-banner glass mb-4" style={{ padding: '1.5rem', display: 'flex', gap: '1rem', alignItems: 'center' }}>
               <AlertCircle className="text-gold" size={32} />
               <p style={{ margin: 0, fontSize: '0.95rem' }}>Following these expert guidelines ensures your {service.title.toLowerCase()} results last as long as possible.</p>
            </div>
            <ul className="aftercare-list">
              {service.afterCare.map((step, idx) => (
                <li key={idx}>
                  <span className="step-number">0{idx + 1}</span>
                  <span>{step}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Right Column: FAQs and Booking CTA */}
        <div className="service-side-col animate-up">
          <div className="booking-card glass text-center">
            <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.5em', marginBottom: '1rem' }}>Ready for a Transformation?</h3>
            <p className="text-secondary mb-4" style={{ marginBottom: '1.5rem', fontSize: '0.9rem' }}>
              Book your {service.title.toLowerCase()} appointment today with our London-trained experts.
            </p>
            <Link to="/contact" className="btn-primary" style={{ width: '100%' }}>Book Appointment</Link>
          </div>

          <div className="faq-section mt-5" style={{ marginTop: '3rem' }}>
            <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.5rem', marginBottom: '1.5rem' }}>Frequently Asked Questions</h3>
            <div className="faq-list">
              {service.faqs.map((faq, idx) => (
                <div className="faq-item" key={idx}>
                  <h4>{faq.q}</h4>
                  <p className="text-secondary">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;
