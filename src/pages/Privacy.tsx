import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const Privacy = () => {
  useGSAP(() => {
    window.scrollTo(0, 0);

    gsap.from('.page-transition-enter', {
      opacity: 0,
      y: 20,
      duration: 0.6,
      ease: 'power2.out'
    });
  });

  return (
    <div className="legal-page page-transition-enter pt-0">
      <div className="section" style={{ marginTop: '80px', maxWidth: '800px', margin: '80px auto 0' }}>
        <h1 className="section-title mb-4" style={{ fontSize: '2.5rem' }}>Privacy Policy</h1>
        <p className="text-secondary mb-5">Last updated: {new Date().toLocaleDateString()}</p>
        
        <div className="legal-content text-secondary" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', lineHeight: '1.8' }}>
          <p>
            At Toni & Guy Salon Chennai, accessible from toniandguysalon.in, one of our main priorities is the privacy of our visitors. 
            This Privacy Policy document contains types of information that is collected and recorded by Toni & Guy and how we use it.
          </p>

          <h3 style={{ color: 'var(--text-primary)', marginTop: '1rem', fontFamily: 'var(--font-heading)' }}>1. Information We Collect</h3>
          <p>
            The personal information that you are asked to provide, and the reasons why you are asked to provide it, will be made clear to you at the point we ask you to provide your personal information.
            If you contact us directly, we may receive additional information about you such as your name, email address, phone number, the contents of the message and/or attachments you may send us, and any other information you may choose to provide.
          </p>

          <h3 style={{ color: 'var(--text-primary)', marginTop: '1rem', fontFamily: 'var(--font-heading)' }}>2. How We Use Your Information</h3>
          <p>
            We use the information we collect in various ways, including to:
          </p>
          <ul style={{ paddingLeft: '1.5rem' }}>
            <li>Provide, operate, and maintain our webiste</li>
            <li>Improve, personalize, and expand our webiste</li>
            <li>Understand and analyze how you use our webiste</li>
            <li>Communicate with you for customer service, to provide you with updates and other information</li>
            <li>Process your salon appointments and bookings</li>
          </ul>

          <h3 style={{ color: 'var(--text-primary)', marginTop: '1rem', fontFamily: 'var(--font-heading)' }}>3. Log Files</h3>
          <p>
            Toni & Guy follows a standard procedure of using log files. These files log visitors when they visit websites. All hosting companies do this and a part of hosting services' analytics. The information collected by log files include internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and possibly the number of clicks.
          </p>

          <h3 style={{ color: 'var(--text-primary)', marginTop: '1rem', fontFamily: 'var(--font-heading)' }}>4. Consent</h3>
          <p>
            By using our website, you hereby consent to our Privacy Policy and agree to its terms.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
