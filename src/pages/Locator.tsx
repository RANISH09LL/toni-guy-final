import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { MapPin, Phone, Clock, Mail } from 'lucide-react';
import './Locator.css';

const Locator = () => {
  useGSAP(() => {
    window.scrollTo(0, 0);

    gsap.from('.page-transition-enter', {
      opacity: 0,
      y: 20,
      duration: 0.6,
      ease: 'power2.out'
    });

    gsap.from('.locator-animate', {
      y: 30,
      opacity: 0,
      duration: 0.8,
      stagger: 0.15,
      ease: 'power2.out',
      delay: 0.2
    });
  });

  return (
    <div className="locator-page page-transition-enter pt-0">
      <div className="section text-center" style={{ marginTop: '80px', paddingBottom: '3rem' }}>
        <span className="section-subtitle">Our Salons</span>
        <h1 className="section-title">Store Locator</h1>
        <p className="text-secondary" style={{ maxWidth: '600px', margin: '0 auto' }}>
          Find your nearest Toni & Guy salon and experience world-class styling. 
          Currently featuring our flagship Kilpauk studio.
        </p>
      </div>

      <div className="section pt-0">
        <div className="locator-grid">
          {/* Map Column */}
          <div className="map-col locator-animate">
            <div className="map-wrapper glass">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.2905201198547!2d80.2393393!3d13.0807663!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5265ded8cd4851%3A0xe4d830b501de7aa0!2sTONI%26GUY%20Kilpauk%20-%20Hair%20Salon!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={false} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Toni and Guy Kilpauk Location Map"
              ></iframe>
            </div>
          </div>

          {/* Details Column */}
          <div className="details-col locator-animate">
            <div className="glass" style={{ padding: '3rem 2.5rem', height: '100%' }}>
              <div className="flex items-center gap-3 mb-4" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                 <MapPin className="text-gold" size={28} />
                 <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '2rem', margin: 0 }}>Kilpauk Flagship</h2>
              </div>
              
              <p className="text-secondary mb-5" style={{ marginBottom: '2.5rem', lineHeight: 1.6 }}>
                Our flagship salon situated in the heart of Kilpauk offers a completely premium, relaxing atmosphere equipped with the latest styling technology.
              </p>

              <div className="locator-info-list" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <div className="info-item" style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                  <MapPin size={20} className="text-gold" style={{ marginTop: '0.2rem', flexShrink: 0 }} />
                  <div>
                    <h4 style={{ margin: '0 0 0.25rem', fontSize: '1.05rem' }}>Address</h4>
                    <p className="text-secondary" style={{ margin: 0 }}>142, Halls Rd, Kilpauk,<br/>Chennai, Tamil Nadu 600010</p>
                  </div>
                </div>

                <div className="info-item" style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                  <Clock size={20} className="text-gold" style={{ marginTop: '0.2rem', flexShrink: 0 }} />
                  <div>
                    <h4 style={{ margin: '0 0 0.25rem', fontSize: '1.05rem' }}>Operating Hours</h4>
                    <p className="text-secondary" style={{ margin: 0 }}>Monday – Sunday<br/>10:00 AM – 9:00 PM</p>
                  </div>
                </div>

                <div className="info-item" style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                  <Phone size={20} className="text-gold" style={{ marginTop: '0.2rem', flexShrink: 0 }} />
                  <div>
                    <h4 style={{ margin: '0 0 0.25rem', fontSize: '1.05rem' }}>Contact</h4>
                    <p className="text-secondary" style={{ margin: 0 }}>+91 91500 21654</p>
                  </div>
                </div>

                 <div className="info-item" style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                  <Mail size={20} className="text-gold" style={{ marginTop: '0.2rem', flexShrink: 0 }} />
                  <div>
                    <h4 style={{ margin: '0 0 0.25rem', fontSize: '1.05rem' }}>Email</h4>
                    <p className="text-secondary" style={{ margin: 0 }}>booking@toniandguysalon.in</p>
                  </div>
                </div>
              </div>

              <div style={{ marginTop: '3rem' }}>
                <a href="https://g.page/toniandguykilpauk?share" target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ width: '100%', display: 'block', textAlign: 'center' }}>
                  Get Directions
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Locator;
