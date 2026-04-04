import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { Briefcase, TrendingUp, ShieldCheck } from 'lucide-react';
import './Contact.css'; // Reuse form UI

const Franchise = () => {
  useGSAP(() => {
    window.scrollTo(0, 0);

    gsap.from('.page-transition-enter', {
      opacity: 0,
      y: 20,
      duration: 0.6,
      ease: 'power2.out'
    });

    gsap.from('.franchise-perk', {
      y: 40,
      opacity: 0,
      duration: 0.8,
      stagger: 0.2,
      ease: 'power2.out',
      delay: 0.2
    });
  });

  return (
    <div className="franchise-page page-transition-enter pt-0">
      <div className="section text-center" style={{ marginTop: '80px', paddingBottom: '3rem' }}>
        <span className="section-subtitle">Partner With Us</span>
        <h1 className="section-title">Franchise Opportunities</h1>
        <p className="text-secondary" style={{ maxWidth: '700px', margin: '0 auto', fontSize: '1.1rem' }}>
          Join the UK's most iconic salon chain. With over 400 branches in India, Toni & Guy is rapidly expanding. We are looking for passionate entrepreneurs to carry forward our legacy of styling excellence.
        </p>
      </div>

      <div className="section pt-0" style={{ maxWidth: '1000px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem', marginBottom: '4rem' }}>
          <div className="franchise-perk glass" style={{ padding: '2rem', textAlign: 'center' }}>
            <Briefcase size={36} className="text-gold" style={{ margin: '0 auto 1.5rem' }} />
            <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.25rem', marginBottom: '0.75rem' }}>Proven Model</h3>
            <p className="text-secondary" style={{ fontSize: '0.95rem' }}>Access our globally successful blueprint for salon operations, staff training, and high-end marketing.</p>
          </div>
          <div className="franchise-perk glass" style={{ padding: '2rem', textAlign: 'center' }}>
            <TrendingUp size={36} className="text-gold" style={{ margin: '0 auto 1.5rem' }} />
            <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.25rem', marginBottom: '0.75rem' }}>Rapid ROI</h3>
            <p className="text-secondary" style={{ fontSize: '0.95rem' }}>Leverage our exceptional brand recall to acquire premium clients and achieve a faster return on investment.</p>
          </div>
          <div className="franchise-perk glass" style={{ padding: '2rem', textAlign: 'center' }}>
            <ShieldCheck size={36} className="text-gold" style={{ margin: '0 auto 1.5rem' }} />
            <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.25rem', marginBottom: '0.75rem' }}>Full Support</h3>
            <p className="text-secondary" style={{ fontSize: '0.95rem' }}>From interior design to ongoing academy training for your stylists, we provide A-Z operational support.</p>
          </div>
        </div>

        <div className="contact-form glass" style={{ padding: '3rem' }}>
           <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '2rem', marginBottom: '2rem', textAlign: 'center' }}>Apply for a Franchise</h2>
           <form id="franchise-form" onSubmit={(e) => e.preventDefault()}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="f-name">Full Name *</label>
                  <input type="text" id="f-name" required />
                </div>
                <div className="form-group">
                  <label htmlFor="f-email">Email Address *</label>
                  <input type="email" id="f-email" required />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="f-phone">Phone Number *</label>
                  <input type="tel" id="f-phone" required />
                </div>
                <div className="form-group">
                  <label htmlFor="f-city">City for Franchise *</label>
                  <input type="text" id="f-city" required />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="f-capital">Available Investment Capital *</label>
                <select id="f-capital" style={{ width: '100%', padding: '12px', background: 'transparent', border: '1px solid var(--glass-border)', color: 'var(--text-primary)', outline: 'none' }} required>
                  <option value="" disabled selected>Select an option</option>
                  <option value="50L-1Cr">₹50 Lakhs - ₹1 Crore</option>
                  <option value="1Cr-2Cr">₹1 Crore - ₹2 Crores</option>
                  <option value="2Cr+">₹2 Crores +</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="f-message">Current Business Background</label>
                <textarea id="f-message" rows={4}></textarea>
              </div>

              <button type="submit" className="btn-primary" style={{ width: '100%', padding: '1rem' }}>
                Submit Application
              </button>
           </form>
        </div>
      </div>
    </div>
  );
};

export default Franchise;
