import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ArrowRight } from 'lucide-react';
import './Blog.css';

const posts = [
  {
    id: 1,
    title: '5 Best Types of Facials for Glowing Skin',
    category: 'Skin & Beauty Care',
    img: 'https://toniandguysalon.in/wp-content/uploads/2023/06/Best-types-of-facials-for-glowing-skin.jpg',
    excerpt: 'Discover which facial treatment suits your skin type to get that perfect, natural glow.'
  },
  {
    id: 2,
    title: '11 Skincare Mistakes to Avoid for a Perfect Wedding',
    category: 'Hair Care & Treatments',
    img: 'https://toniandguysalon.in/wp-content/uploads/2023/11/skincare-mistakes-to-avoid-for-perfect-wedding.jpg',
    excerpt: 'Planning for the big day? Make sure you avoid these common pitfalls to keep your skin flawless.'
  },
  {
    id: 3,
    title: 'How Often Should You Get A Cleanup Or Facial?',
    category: 'Skin & Beauty Care',
    img: 'https://toniandguysalon.in/wp-content/uploads/2025/09/TG-BLOG-SEP-22-09-25-01.png',
    excerpt: 'Understand the timeline for skin maintenance to ensure long-lasting health and radiance.'
  },
  {
    id: 4,
    title: 'Top 5 Benefits of Getting Professional Blowdry',
    category: 'Hair Care & Treatments',
    img: 'https://toniandguysalon.in/wp-content/uploads/2025/11/proffesional-blowdry-500x500xct.png',
    excerpt: 'Why a salon blowdry is more than just styling—it is essential hair care.'
  },
  {
    id: 5,
    title: '9 Tips for Haircare During Pregnancy',
    category: 'Hair Care & Treatments',
    img: 'https://toniandguysalon.in/wp-content/uploads/2024/08/Tips-for-haircare-during-pregnancy-500x500xct.jpg',
    excerpt: 'Safe, effective ways to maintain luscious locks during your pregnancy journey.'
  }
];

const Blog = () => {
  useGSAP(() => {
    window.scrollTo(0, 0);

    gsap.from('.page-transition-enter', {
      opacity: 0,
      y: 20,
      duration: 0.6,
      ease: 'power2.out'
    });

    gsap.from('.blog-card', {
      y: 40,
      opacity: 0,
      duration: 0.8,
      stagger: 0.15,
      ease: 'power2.out'
    });
  });

  return (
    <div className="blog-page page-transition-enter pt-0">
      <div className="section text-center pb-0" style={{ marginTop: '80px', marginBottom: '3rem' }}>
        <span className="section-subtitle">Journal</span>
        <h1 className="section-title">The Toni & Guy Edit</h1>
        <p className="text-secondary" style={{ maxWidth: '600px', margin: '0 auto' }}>
          Expert advice, styling tips, and the latest trends from our London-trained professionals.
        </p>
      </div>

      <section className="section pt-0">
        <div className="blog-grid">
          {posts.map((post, index) => (
            <article className={`blog-card ${index === 0 ? 'featured' : ''}`} key={post.id}>
              <div className="blog-img-wrapper">
                <img src={post.img} alt={post.title} />
                <span className="blog-category">{post.category}</span>
              </div>
              <div className="blog-content">
                <h2>{post.title}</h2>
                <p>{post.excerpt}</p>
                <div className="btn-text">
                  Read Article <ArrowRight size={16} className="ml-2" style={{marginLeft: '6px'}} />
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Blog;
