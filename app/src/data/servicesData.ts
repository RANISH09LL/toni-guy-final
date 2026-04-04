export interface ServiceFAQ {
  q: string;
  a: string;
}

export interface ServiceData {
  id: string;
  title: string;
  heroImage: string;
  metaDesc: string;
  overview: string[];
  afterCare: string[];
  faqs: ServiceFAQ[];
}

export const servicesData: Record<string, ServiceData> = {
  'haircut': {
    id: 'haircut',
    title: 'Precision Haircut',
    metaDesc: 'Discover the best haircuts in Chennai at Toni & Guy Salon. Enjoy top-notch styles and exceptional service for a fresh, modern look.',
    heroImage: 'https://toniandguysalon.in/wp-content/uploads/2023/11/Haircut.webp',
    overview: [
      "Experience TONI&GUY's signature cutting techniques, honed from decades of international fashion leadership.",
      "Every haircut is completely customized to your face shape, facial features, lifestyle, and hair texture.",
      "Our stylists carefully add width, height, texture, and volume exactly where you need it.",
      "Whether you're looking for a sharp creative cut or a specifically customized classic style, our London-trained team delivers."
    ],
    afterCare: [
      "Use professional salon-grade shampoo and conditioner recommended by your stylist.",
      "Avoid overwashing to maintain your hair's natural oils.",
      "Schedule regular trims every 6-8 weeks to maintain the shape.",
      "Protect your hair from extreme heat styling where possible."
    ],
    faqs: [
      { q: "What is a professional hair stylist called?", a: "At Toni & Guy, they are called Style Directors, Creative Directors, Top Stylists, and Stylists depending on their experience level." },
      { q: "How often should I get a haircut?", a: "For shorter styles, every 3-4 weeks. For longer hair, every 6-8 weeks helps prevent split ends and maintains the shape." },
      { q: "Can the stylist recommend a cut for my face shape?", a: "Yes, every appointment begins with a thorough consultation analyzing your bone structure, hair texture, and lifestyle." }
    ]
  },
  'colour': {
    id: 'colour',
    title: 'Bespoke Hair Colour',
    metaDesc: 'Experience the best salon for hair color in Chennai. Expert colorists, vibrant results.',
    heroImage: 'https://toniandguysalon.in/wp-content/uploads/2023/11/haircolour.webp',
    overview: [
      "Our colour services are strictly consultation-led approach—we analyze your skin tone, eye colour, and hair texture before beginning.",
      "Offerings include Global Colour, Highlights, Lowlights, Balayage, Grey Blending, Toner & Gloss, and advanced Colour Correction.",
      "We cater to both Men (grey blending, subtle highlights) and Women (root touch-up, balayage, intense fashion tones).",
      "We use only premium, low-damage colour systems that protect the integrity of your hair."
    ],
    afterCare: [
      "Wait at least 48 hours for your first wash after the service.",
      "Use only colour-safe, sulfate-free shampoo and conditioner.",
      "Protect your hair from excessive heat styling and direct sun exposure.",
      "Avoid very hot water when washing—use lukewarm or cool water.",
      "Plan your next refresh before it feels urgent.",
      "Treat coloured hair with extra care, utilizing regular deep-conditioning masks."
    ],
    faqs: [
      { q: "Is temporary colour available?", a: "Yes, we offer glosses, toners, wash-out tints, and semi-permanent fashion tones." },
      { q: "Will bleach damage my hair?", a: "When done professionally with our premium protectant products, damage is heavily minimized." },
      { q: "Do you require a patch test?", a: "Yes, for certain chemical services and new clients, we recommend a patch test." }
    ]
  },
  'keratin': {
    id: 'keratin',
    title: 'Keratin Treatment',
    metaDesc: 'Discover the best salon for keratin treatment in Chennai. Professional treatments, healthy hair, perfect results.',
    heroImage: 'https://toniandguysalon.in/wp-content/uploads/2024/04/kertain-home.webp',
    overview: [
      "Our keratin treatments begin with a thorough examination of your hair texture, porosity, breakage, and past chemical history.",
      "It smoothly coats the hair surface without making it stiff or unnatural, drastically reducing tangling and frizz.",
      "Enjoy a softer fall, incredible light reflection, and zero \"puffy\" mornings.",
      "Keratin is highly recommended for men as well, especially to tame crown puffing and rough front hair."
    ],
    afterCare: [
      "Follow your stylist's strict timing for the first wash (usually 48-72 hours).",
      "Use only a keratin-friendly, sulfate-free routine.",
      "Avoid tight styles (ponytails, clips) immediately after treatment to prevent denting.",
      "Always use heat protection.",
      "Use a weekly keratin mask for longevity.",
      "Plan your maintenance every 3-5 months."
    ],
    faqs: [
      { q: "What exactly is Keratin?", a: "It is a smoothing treatment that infuses the hair with protein to smooth the cuticle." },
      { q: "Is this the same as hair smoothening?", a: "It's similar, but Keratin specifically replenishes protein and reduces frizz rather than permanently altering the hair bond like strong relaxers." },
      { q: "Does it work on coloured hair?", a: "Yes, in fact it often helps seal in colour and make it look more vibrant." },
      { q: "How long does it last?", a: "Typically 3 to 5 months depending on your home care routine and hair type." }
    ]
  },
  'botox': {
    id: 'botox',
    title: 'Hair Botox Treatment',
    metaDesc: 'Revive your hair with professional hair Botox in Chennai. Repair damage, eliminate frizz, and boost shine.',
    heroImage: 'https://toniandguysalon.in/wp-content/uploads/2023/11/hairspa.webp',
    overview: [
      "Hair Botox is a deep-conditioning, repair-focused service designed to reconstruct the hair fiber.",
      "It is ideal after repeated colouring, heavy heat styling, or seasonal dryness.",
      "The formula fills in roughness, dramatically improves light reflection, and reduces frizz.",
      "Note: This is NOT a straightening service—it simply makes your natural texture healthier, deeply hydrated, and easier to live with."
    ],
    afterCare: [
      "Maintain a gentle moisturizing routine at home.",
      "Reduce heat stress by air-drying when possible.",
      "Apply a weekly hydrating mask.",
      "Be mindful of swimming in chlorinated pools or extended sun exposure.",
      "Get regular trims to keep ends fresh.",
      "Plan your next session as recommended by your stylist."
    ],
    faqs: [
      { q: "What is the difference between Botox and Keratin?", a: "Botox is primarily for repairing, hydrating, and anti-aging the hair, while Keratin is primarily for smoothing frizz and straightening." },
      { q: "Will it straighten my curly hair?", a: "No, it will not chemically straighten your hair, but it will define your curls and make them much softer and less frizzy." },
      { q: "Is it suitable for men?", a: "Absolutely. It's excellent for rough, dull, or puffy men's hair." }
    ]
  },
  'smoothening': {
    id: 'smoothening',
    title: 'Hair Smoothening',
    metaDesc: 'Get frizz-free, silky hair with the best hair smoothening treatment in Chennai at Toni & Guy.',
    heroImage: 'https://toniandguysalon.in/wp-content/uploads/2023/11/hair-smoothing.webp',
    overview: [
      "Our Smoothening service drastically reduces frizz, softens natural waves, and provides a much straighter finish.",
      "Every session is consultation-first—we check your curl pattern, density, porosity, and chemical history to choose the right formula.",
      "The result is long-lasting, but it is not permanently irreversible (new growth will return to your natural pattern).",
      "The process involves: Consultation → Cleansing → Application → Rinsing → Professional Blow-dry."
    ],
    afterCare: [
      "Follow the exact first-wash timing given by your stylist.",
      "Invest in a smoothing-friendly salon-grade shampoo and conditioner.",
      "Always use heat protection when blow-drying.",
      "Avoid washing your hair with very hot water.",
      "Apply a weekly deep conditioning mask.",
      "Maintain regular trims."
    ],
    faqs: [
      { q: "Is smoothening permanent?", a: "The treated hair remains smooth, but your new root growth will be your natural texture." },
      { q: "Can men get their hair smoothened?", a: "Yes, it is very popular for men seeking a sleeker look." },
      { q: "How much does it cost?", a: "Pricing is completely consultation-based and depends on hair length, density, and the exact product used." }
    ]
  },
  'bridal': {
    id: 'bridal',
    title: 'Bridal Hair & Makeup',
    metaDesc: 'Experience the ultimate bridal transformation in Chennai. HD and Airbrush makeup for your big day.',
    heroImage: 'https://toniandguysalon.in/wp-content/uploads/2023/11/bridal.webp',
    overview: [
      "We deliver a wedding day-focused aesthetic: flawlessly composed in person, and stunningly radiant in high-definition photographs.",
      "Our bridal service is team-based (not just a single stylist) to ensure consistent technique across both hair and makeup.",
      "We offer comprehensive Trial & Consultation sessions to discuss preferences and nail down the perfect look.",
      "Top looks include Classic South Indian bridal, Contemporary Reception glam, and Minimal/Fresh daytime ceremonies."
    ],
    afterCare: [
      "Arrive with perfectly clean, calm skin.",
      "Prioritize hydration and sleep the night before your event.",
      "Wear a button-front top to avoid ruining makeup when changing into your bridal attire.",
      "Keep touch-ups minimal (blotting paper is preferred over heavy powder).",
      "Avoid touching your face throughout the ceremony.",
      "Plan a dedicated touch-up slot between ceremonies if necessary."
    ],
    faqs: [
      { q: "Do you offer Airbrush makeup?", a: "Yes, we specialize in both HD and Airbrush makeup tailored to humidity and long wear." },
      { q: "Do you style the bridesmaids too?", a: "Yes, our team is equipped to handle the bride as well as family members and bridesmaids." },
      { q: "Are trial sessions paid?", a: "Trials are available and can be discussed during your initial consultation." }
    ]
  },
  'party': {
    id: 'party',
    title: 'Party Makeup',
    metaDesc: 'Dazzle at every event with professional party makeup in Chennai. HD to Airbrush, stunning long-lasting looks.',
    heroImage: 'https://toniandguysalon.in/wp-content/uploads/2023/11/tg3.webp',
    overview: [
      "Stand out at any cocktail, evening, or night party with our bespoke party makeup services.",
      "We offer a 'Simple Party Makeup' option for a fresh, breathable, beautifully finished look.",
      "Eye makeup looks are completely customized to your eye shape, comfort level, and the intensity required for the event.",
      "Even if you are a beginner to makeup, our artists create lightweight enhancements that elevate rather than overwhelm."
    ],
    afterCare: [
      "Arrive with clean, lightly moisturized skin.",
      "Avoid touching your face once the makeup is locked in.",
      "Carry simple touch-ups like lipstick and a blotting paper.",
      "Be gentle around the eyes, especially if false lashes are applied.",
      "Ensure you use a professional makeup remover at the end of the night."
    ],
    faqs: [
      { q: "Can you match my outfit?", a: "Absolutely, we tailor the colour palette to perfectly complement your attire." },
      { q: "I have sensitive skin, is it safe?", a: "We use premium, dermatologically tested products. Please inform us of any severe allergies before starting." },
      { q: "Can you do my hair as well?", a: "Yes, party makeup is frequently paired with professional blowout and styling services." }
    ]
  },
  'beard': {
    id: 'beard',
    title: 'Beard Styling',
    metaDesc: 'Level up your grooming with professional Beard Styling in Chennai. Fades to classic trims.',
    heroImage: 'https://toniandguysalon.in/wp-content/uploads/2024/03/hair-cut.webp',
    overview: [
      "A great beard is shaped to your face shape, jawline, hair texture, and natural growth pattern.",
      "Our full beard trim includes length balancing, cheek/neck clean-up, moustache shaping, and premium beard oil application.",
      "Whether you need a boardroom-ready clean trim or a sharp faded beard edge, our barbers deliver ultimate precision."
    ],
    afterCare: [
      "Keep your beard clean and completely dry after washing.",
      "Comb daily to train the hair and stimulate the skin.",
      "Trim stray hairs between appointments to maintain sharpness.",
      "Tidy the neckline regularly.",
      "Use premium beard oil or balm daily to soften the hair.",
      "Stick to regular appointments to prevent the shape from growing out irregularly."
    ],
    faqs: [
      { q: "What is the difference between styling and a regular trim?", a: "Styling involves designing lines, fading, and shaping the beard to enhance your facial structure, rather than just reducing length." },
      { q: "How often should I get it styled?", a: "Depending on your growth rate, every 2-3 weeks keeps the lines extremely sharp." },
      { q: "My beard is patchy, can you fix it?", a: "Our stylists use specific fading and shaping techniques to minimize the appearance of patches and balance the look." }
    ]
  }
};
