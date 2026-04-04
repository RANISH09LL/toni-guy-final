import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const Terms = () => {
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
        <h1 className="section-title mb-4" style={{ fontSize: '2.5rem' }}>Terms of Service</h1>
        <p className="text-secondary mb-5">Last updated: {new Date().toLocaleDateString()}</p>
        
        <div className="legal-content text-secondary" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', lineHeight: '1.8' }}>
          <h3 style={{ color: 'var(--text-primary)', marginTop: '1rem', fontFamily: 'var(--font-heading)' }}>1. Terms</h3>
          <p>
            By accessing the website at toniandguysalon.in, you are agreeing to be bound by these terms of service, all applicable laws and regulations, and agree that you are responsible for compliance with any applicable local laws. If you do not agree with any of these terms, you are prohibited from using or accessing this site.
          </p>

          <h3 style={{ color: 'var(--text-primary)', marginTop: '1rem', fontFamily: 'var(--font-heading)' }}>2. Booking & Cancellation</h3>
          <p>
            Appointments booked through our website or via phone require timely arrival. We recommend arriving 10 minutes prior to your scheduled service. 
            Cancellations should be made at least 24 hours in advance to allow us to accommodate other clients.
          </p>

          <h3 style={{ color: 'var(--text-primary)', marginTop: '1rem', fontFamily: 'var(--font-heading)' }}>3. Disclaimer</h3>
          <p>
            The materials on Toni & Guy's website are provided on an 'as is' basis. Toni & Guy makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
          </p>

          <h3 style={{ color: 'var(--text-primary)', marginTop: '1rem', fontFamily: 'var(--font-heading)' }}>4. Limitations</h3>
          <p>
            In no event shall Toni & Guy or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Toni & Guy's website.
          </p>

          <h3 style={{ color: 'var(--text-primary)', marginTop: '1rem', fontFamily: 'var(--font-heading)' }}>5. Revisions and Errata</h3>
          <p>
            The materials appearing on the website could include technical, typographical, or photographic errors. We do not warrant that any of the materials on its website are accurate, complete or current. We may make changes to the materials contained on its website at any time without notice.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Terms;
