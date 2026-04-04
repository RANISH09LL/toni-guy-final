import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { MapPin, Phone, Mail, MessageCircle } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  useGSAP(() => {
    window.scrollTo(0, 0);

    gsap.from('.page-transition-enter', {
      opacity: 0,
      y: 20,
      duration: 0.6,
      ease: 'power2.out'
    });

    gsap.from('.contact-animate', {
      x: -30,
      opacity: 0,
      duration: 0.8,
      stagger: 0.2,
      ease: 'power2.out'
    });
  });

  return (
    <div className="contact-page page-transition-enter pt-0">
      <div className="section text-center pb-0" style={{ marginTop: '80px', marginBottom: '3rem' }}>
        <span className="section-subtitle">Reach Us</span>
        <h1 className="section-title">Book an Appointment</h1>
        <p className="text-secondary" style={{ maxWidth: '600px', margin: '0 auto' }}>
          Schedule your premium salon experience or reach out to us with any queries.
        </p>
      </div>

      <section className="section pt-0">
        <div className="contact-grid">
          {/* Contact Details */}
          <div className="contact-details">
            <h2 className="mb-4" style={{ fontFamily: 'var(--font-heading)', fontSize: '2rem', marginBottom: '2rem' }}>Get in Touch</h2>
            
            <div className="contact-item contact-animate">
              <div className="contact-icon">
                <MapPin size={24} />
              </div>
              <div className="contact-text">
                <h3>Our Location</h3>
                <p>#18/70, Halls Road, Kilpauk, Chennai – 600 010</p>
                <p className="text-secondary" style={{fontSize: '0.85rem', marginTop: '0.5rem'}}>Landmark: Same building as Slam Gym</p>
                <p className="text-secondary" style={{fontSize: '0.85rem'}}>Valet service available</p>
              </div>
            </div>

            <div className="contact-item contact-animate">
              <div className="contact-icon">
                <Phone size={24} />
              </div>
              <div className="contact-text">
                <h3>Call Us</h3>
                <p>+91 70944 79145</p>
                <p>+91 72005 19522</p>
                <p>+91 90030 43257</p>
              </div>
            </div>

            <div className="contact-item contact-animate">
              <div className="contact-icon">
                <Mail size={24} />
              </div>
              <div className="contact-text">
                <h3>Email Us</h3>
                <p>info@toniandguysalon.in</p>
                <p>aneesh@paulsons.in</p>
              </div>
            </div>

            <div className="contact-socials contact-animate">
              <h3>Connect Socially</h3>
              <div className="social-links-large">
                <a href="https://wa.me/917094479145" target="_blank" rel="noopener noreferrer" className="social-btn whatsapp">
                  <MessageCircle size={20} /> <span>WhatsApp</span>
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer" className="social-btn instagram">
                  <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg> <span>Instagram</span>
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer" className="social-btn facebook">
                  <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg> <span>Facebook</span>
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="contact-form-wrapper glass contact-animate">
            <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.8rem', marginBottom: '1.5rem' }}>Send a Request</h3>
            <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
              <div className="form-group">
                <label>Your Name</label>
                <input type="text" placeholder="John Doe" required />
              </div>
              <div className="form-group">
                <label>Phone Number</label>
                <input type="tel" placeholder="+91 98765 43210" required />
              </div>
              <div className="form-group">
                <label>Service Interested In</label>
                <select required>
                  <option value="" disabled selected>Select a Service...</option>
                  <option value="haircut">Precision Haircut</option>
                  <option value="colour">Hair Colour</option>
                  <option value="bridal">Bridal Makeup</option>
                  <option value="keratin">Keratin Treatment</option>
                  <option value="other">Other / Consultation</option>
                </select>
              </div>
              <div className="form-group">
                <label>Message / Preferred Time</label>
                <textarea rows={4} placeholder="How can we help you?"></textarea>
              </div>
              <button type="submit" className="btn-primary" style={{ width: '100%', marginTop: '1rem' }}>Submit Request</button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
