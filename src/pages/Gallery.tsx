import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import './Gallery.css';

const galleryImages = [
  { src: "https://toniandguysalon.in/wp-content/uploads/2024/03/Unisex-Beauty.webp", alt: "Salon Setup", span: "row-span-2 col-span-2" },
  { src: "https://toniandguysalon.in/wp-content/uploads/2023/11/Haircut.webp", alt: "Precision Haircut", span: "col-span-1" },
  { src: "https://toniandguysalon.in/wp-content/uploads/2023/11/haircolour.webp", alt: "Bespoke Hair Colour", span: "col-span-1" },
  { src: "https://toniandguysalon.in/wp-content/uploads/2023/11/bridal.webp", alt: "Bridal Makeup", span: "row-span-2 col-span-1" },
  { src: "https://toniandguysalon.in/wp-content/uploads/2024/04/kertain-home.webp", alt: "Keratin Treatment", span: "col-span-1" },
  { src: "https://toniandguysalon.in/wp-content/uploads/2023/11/hairspa.webp", alt: "Hair Spa", span: "col-span-1" },
  { src: "https://toniandguysalon.in/wp-content/uploads/2023/11/hair-smoothing.webp", alt: "Hair Smoothening", span: "col-span-2" },
  { src: "https://toniandguysalon.in/wp-content/uploads/2024/03/hair-cut.webp", alt: "Men's Grooming", span: "col-span-1" }
];

const Gallery = () => {
  useGSAP(() => {
    window.scrollTo(0, 0);

    gsap.from('.page-transition-enter', {
      opacity: 0,
      y: 20,
      duration: 0.6,
      ease: 'power2.out'
    });

    gsap.from('.gallery-item', {
      y: 30,
      opacity: 0,
      duration: 0.8,
      stagger: 0.1,
      ease: 'power2.out',
      delay: 0.2
    });
  });

  return (
    <div className="gallery-page page-transition-enter pt-0">
      <div className="section text-center" style={{ marginTop: '80px', paddingBottom: '2rem' }}>
        <span className="section-subtitle">Our Work</span>
        <h1 className="section-title">The Gallery</h1>
        <p className="text-secondary" style={{ maxWidth: '600px', margin: '0 auto' }}>
          Explore our portfolio of precision cuts, bespoke colour, and stunning bridal transformations created by our talented team.
        </p>
      </div>

      <div className="section pt-0">
        <div className="gallery-grid">
          {galleryImages.map((img, idx) => (
            <div key={idx} className={`gallery-item ${img.span}`}>
              <img src={img.src} alt={img.alt} loading="lazy" />
              <div className="gallery-overlay">
                <span className="gallery-caption">{img.alt}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
