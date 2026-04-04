import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, ArrowRight } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link to="/" className="nav-logo">TONI<span className="text-gold">&amp;</span>GUY</Link>
            <p className="footer-tagline">Best Unisex Salon in Chennai. London-trained stylists delivering premium, luxurious salon experiences.</p>
            <div className="social-links">
              <a href="#" target="_blank" rel="noopener noreferrer">
                <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                 <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </a>
            </div>
          </div>

          <div className="footer-links-col">
            <h4>Explore</h4>
            <ul>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/catalog">Our Services</Link></li>
              <li><Link to="/gallery">Gallery</Link></li>
              <li><Link to="/blog">Blog & News</Link></li>
            </ul>
          </div>

          <div className="footer-links">
            <h4>Support</h4>
            <ul>
              <li><Link to="/contact">Contact Us</Link></li>
              <li><Link to="/locations">Store Locator</Link></li>
              <li><Link to="/franchise">Franchise</Link></li>
              <li><Link to="/privacy">Privacy Policy</Link></li>
              <li><Link to="/terms">Terms of Service</Link></li>
            </ul>
          </div>

          <div className="footer-contact">
            <h4>Reach Us</h4>
            <ul>
              <li><MapPin size={18} className="text-gold flex-shrink-0 mt-1" /> <span>#18/70, Halls Road, Kilpauk, Chennai – 600 010</span></li>
              <li><Phone size={18} className="text-gold flex-shrink-0" /> <span>+91 70944 79145</span></li>
              <li><Mail size={18} className="text-gold flex-shrink-0" /> <span>info@toniandguysalon.in</span></li>
            </ul>
          </div>
          
          <div className="footer-newsletter">
            <h4>Exclusive Updates</h4>
            <p>Get offers and styling tips directly to your inbox.</p>
            <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
              <input type="email" placeholder="Email Address" required />
              <button type="submit"><ArrowRight size={20} /></button>
            </form>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Toni & Guy Salon Chennai.</p>
          <div className="footer-legal">
            <Link to="/privacy">Privacy Policy</Link>
            <Link to="/terms">Terms of Service</Link>
            <Link to="/franchise">Franchise</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
