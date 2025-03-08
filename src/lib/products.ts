export interface Product {
  id: string;
  name: string;
  slug: string;
  price: number;
  collection: string;
  category: string;
  shortDescription: string;
  description: string;
  features: string[];
  images: string[];
  story: string;
  materials: string[];
  dimensions: string;
  inStock: boolean;
}

export const products: Product[] = [
  {
    id: '1',
    name: 'Amara Pearl Necklace',
    slug: 'amara-pearl-necklace',
    price: 149,
    collection: 'aarambh',
    category: 'necklaces',
    shortDescription: 'A delicate pearl necklace with gold accents inspired by traditional Indian designs.',
    description: 'The Amara Pearl Necklace features a strand of carefully selected freshwater pearls, interspersed with delicate gold beads. The design draws inspiration from traditional Indian jewelry, with a contemporary twist that makes it perfect for both everyday wear and special occasions.',
    features: [
      'Freshwater pearls (8-9mm)',
      '18k gold-plated accents',
      'Adjustable length (16-18 inches)',
      'Lobster clasp closure',
      'Handcrafted by skilled artisans'
    ],
    images: [
      '/images/products/necklace.svg',
      '/images/hero-banner.svg',
      '/images/placeholder.svg'
    ],
    story: 'The Amara necklace is named after the Sanskrit word for "eternal." It represents the timeless beauty of pearls and the enduring traditions of Indian jewelry making. Each pearl is carefully selected for its luster and shape, creating a piece that will be treasured for generations.',
    materials: ['Freshwater pearls', '18k gold-plated brass'],
    dimensions: 'Length: 16-18 inches (adjustable)',
    inStock: true
  },
  {
    id: '2',
    name: 'Kavya Pearl Earrings',
    slug: 'kavya-pearl-earrings',
    price: 129,
    collection: 'aarambh',
    category: 'earrings',
    shortDescription: 'Elegant drop earrings featuring freshwater pearls with intricate silver work.',
    description: 'The Kavya Pearl Earrings showcase the beauty of freshwater pearls suspended from intricate silver work inspired by traditional Indian filigree designs. These elegant drop earrings add a touch of sophistication to any outfit, making them perfect for both everyday wear and special occasions.',
    features: [
      'Freshwater pearls (7-8mm)',
      'Sterling silver with traditional filigree design',
      'Secure lever back closures',
      'Lightweight and comfortable for all-day wear',
      'Handcrafted by skilled artisans'
    ],
    images: [
      '/images/products/earrings.svg',
      '/images/hero-banner.svg',
      '/images/placeholder.svg'
    ],
    story: 'Kavya, meaning "poetry" in Sanskrit, reflects the artistic expression embodied in these earrings. The design draws inspiration from the intricate patterns found in traditional Indian poetry and art, creating a piece that tells a story of cultural heritage and artistic beauty.',
    materials: ['Freshwater pearls', 'Sterling silver'],
    dimensions: 'Length: 1.5 inches, Pearl diameter: 7-8mm',
    inStock: true
  },
  {
    id: '3',
    name: 'Riya Pearl Bracelet',
    slug: 'riya-pearl-bracelet',
    price: 119,
    collection: 'aarambh',
    category: 'bracelets',
    shortDescription: 'A stunning bracelet with alternating pearls and gold beads inspired by royal Indian jewelry.',
    description: 'The Riya Pearl Bracelet features alternating freshwater pearls and intricate gold beads, creating a piece that is both elegant and eye-catching. Inspired by the jewelry worn by Indian royalty, this bracelet adds a touch of luxury to any outfit while remaining versatile enough for everyday wear.',
    features: [
      'Freshwater pearls (7-8mm)',
      '18k gold-plated beads with traditional designs',
      'Secure lobster clasp closure',
      'Adjustable length (7-8 inches)',
      'Handcrafted by skilled artisans'
    ],
    images: [
      '/images/products/bracelet.svg',
      '/images/hero-banner.svg',
      '/images/placeholder.svg'
    ],
    story: 'Named after the Sanskrit word for "royal," the Riya bracelet draws inspiration from the opulent jewelry worn by Indian royalty throughout history. Each gold bead features intricate patterns that tell stories of royal heritage, while the pearls add a timeless elegance to this regal piece.',
    materials: ['Freshwater pearls', '18k gold-plated brass'],
    dimensions: 'Length: 7-8 inches (adjustable)',
    inStock: true
  },
  {
    id: '4',
    name: 'Priya Pearl Ring',
    slug: 'priya-pearl-ring',
    price: 99,
    collection: 'aarambh',
    category: 'rings',
    shortDescription: 'A delicate ring featuring a lustrous pearl set in intricate gold-plated silver work.',
    description: 'The Priya Pearl Ring showcases a single lustrous freshwater pearl set in an intricate gold-plated silver setting. The design draws inspiration from traditional Indian motifs, creating a piece that is both elegant and meaningful. This versatile ring adds a touch of sophistication to any outfit.',
    features: [
      'Freshwater pearl (9-10mm)',
      'Gold-plated sterling silver setting',
      'Intricate traditional Indian-inspired design',
      'Available in sizes 5-9',
      'Handcrafted by skilled artisans'
    ],
    images: [
      '/images/products/ring.svg',
      '/images/hero-banner.svg',
      '/images/placeholder.svg'
    ],
    story: 'Priya, meaning "beloved" in Sanskrit, reflects the cherished nature of this ring. The design is inspired by traditional Indian motifs that symbolize love and connection, making it a meaningful piece to wear yourself or give as a gift to someone special.',
    materials: ['Freshwater pearl', 'Gold-plated sterling silver'],
    dimensions: 'Pearl diameter: 9-10mm',
    inStock: true
  },
  {
    id: '5',
    name: 'Anika Pearl Pendant',
    slug: 'anika-pearl-pendant',
    price: 109,
    collection: 'aarambh',
    category: 'necklaces',
    shortDescription: 'An elegant pendant featuring a pearl surrounded by intricate silver filigree work.',
    description: 'The Anika Pearl Pendant features a lustrous freshwater pearl surrounded by intricate silver filigree work inspired by traditional Indian designs. This elegant pendant comes with a delicate silver chain, creating a piece that adds a touch of sophistication to any outfit.',
    features: [
      'Freshwater pearl (10-11mm)',
      'Sterling silver filigree setting',
      '18-inch sterling silver chain',
      'Secure lobster clasp closure',
      'Handcrafted by skilled artisans'
    ],
    images: [
      '/images/products/pendant.svg',
      '/images/hero-banner.svg',
      '/images/placeholder.svg'
    ],
    story: 'Anika, meaning "grace" in Sanskrit, embodies the elegant beauty of this pendant. The filigree design surrounding the pearl is inspired by the intricate patterns found in traditional Indian architecture, creating a piece that tells a story of cultural heritage and artistic beauty.',
    materials: ['Freshwater pearl', 'Sterling silver'],
    dimensions: 'Pendant: 1 inch diameter, Chain: 18 inches',
    inStock: true
  },
  {
    id: '6',
    name: 'Maya Pearl Hoop Earrings',
    slug: 'maya-pearl-hoop-earrings',
    price: 139,
    collection: 'aarambh',
    category: 'earrings',
    shortDescription: 'Modern hoop earrings with delicate pearls suspended within gold-plated hoops.',
    description: 'The Maya Pearl Hoop Earrings offer a contemporary take on traditional pearl earrings, featuring delicate freshwater pearls suspended within gold-plated hoops. These versatile earrings add a touch of elegance to any outfit, making them perfect for both everyday wear and special occasions.',
    features: [
      'Freshwater pearls (6-7mm)',
      '18k gold-plated hoops',
      'Secure hinged closure',
      'Lightweight and comfortable for all-day wear',
      'Handcrafted by skilled artisans'
    ],
    images: [
      '/images/products/hoop-earrings.svg',
      '/images/hero-banner.svg',
      '/images/placeholder.svg'
    ],
    story: 'Maya, meaning "illusion" in Sanskrit, reflects the magical quality of these earrings, where the pearls appear to float within the hoops. The design represents the fusion of traditional materials with contemporary design, creating a piece that bridges cultures and generations.',
    materials: ['Freshwater pearls', '18k gold-plated brass'],
    dimensions: 'Hoop diameter: 1.25 inches, Pearl diameter: 6-7mm',
    inStock: true
  },
  {
    id: '7',
    name: 'Leela Pearl Bangle',
    slug: 'leela-pearl-bangle',
    price: 159,
    collection: 'aarambh',
    category: 'bracelets',
    shortDescription: 'An elegant bangle featuring pearls set in a traditional Indian-inspired gold-plated design.',
    description: 'The Leela Pearl Bangle showcases freshwater pearls set in a gold-plated bangle with intricate designs inspired by traditional Indian jewelry. This elegant piece adds a touch of sophistication to any outfit, making it perfect for both everyday wear and special occasions.',
    features: [
      'Freshwater pearls (6-7mm)',
      '18k gold-plated brass with traditional Indian-inspired designs',
      'Hinged closure for easy wear',
      'Available in small, medium, and large sizes',
      'Handcrafted by skilled artisans'
    ],
    images: [
      '/images/products/bangle.svg',
      '/images/hero-banner.svg',
      '/images/placeholder.svg'
    ],
    story: 'Leela, meaning "divine play" in Sanskrit, reflects the playful yet elegant nature of this bangle. The design is inspired by the bangles worn during traditional Indian dances, where the movement creates a beautiful visual and auditory experience, celebrating the joy of self-expression.',
    materials: ['Freshwater pearls', '18k gold-plated brass'],
    dimensions: 'Small: 2.5 inch diameter, Medium: 2.75 inch diameter, Large: 3 inch diameter',
    inStock: true
  },
  {
    id: '8',
    name: 'Indira Pearl Hair Pin',
    slug: 'indira-pearl-hair-pin',
    price: 89,
    collection: 'aarambh',
    category: 'accessories',
    shortDescription: 'An elegant hair pin featuring a cluster of pearls with gold-plated accents.',
    description: 'The Indira Pearl Hair Pin showcases a beautiful cluster of freshwater pearls with gold-plated accents, creating a piece that adds elegance to any hairstyle. Inspired by traditional Indian hair ornaments, this pin combines cultural heritage with contemporary design.',
    features: [
      'Freshwater pearls (4-5mm)',
      '18k gold-plated accents',
      'Secure and comfortable fit',
      'Versatile for various hairstyles',
      'Handcrafted by skilled artisans'
    ],
    images: [
      '/images/products/hair-pin.svg',
      '/images/hero-banner.svg',
      '/images/placeholder.svg'
    ],
    story: 'Indira, meaning "beauty" in Sanskrit, reflects the elegant enhancement this hair pin brings to any hairstyle. Inspired by the ornate hair accessories worn by Indian brides, this piece celebrates the tradition of adorning the hair for special occasions while being versatile enough for everyday wear.',
    materials: ['Freshwater pearls', '18k gold-plated brass'],
    dimensions: 'Length: 3 inches',
    inStock: true
  },
  {
    id: '9',
    name: 'Divya Pearl Anklet',
    slug: 'divya-pearl-anklet',
    price: 99,
    collection: 'aarambh',
    category: 'accessories',
    shortDescription: 'A delicate anklet featuring freshwater pearls with silver bell charms inspired by traditional Indian anklets.',
    description: 'The Divya Pearl Anklet features delicate freshwater pearls alternating with tiny silver bell charms, creating a piece that is both visually and audibly beautiful. Inspired by traditional Indian anklets, this piece adds a touch of elegance and playfulness to any outfit.',
    features: [
      'Freshwater pearls (4-5mm)',
      'Sterling silver bell charms',
      'Adjustable length (9-10 inches)',
      'Secure lobster clasp closure',
      'Handcrafted by skilled artisans'
    ],
    images: [
      '/images/products/anklet.svg',
      '/images/hero-banner.svg',
      '/images/placeholder.svg'
    ],
    story: 'Divya, meaning "divine" in Sanskrit, reflects the spiritual significance of anklets in Indian culture. Traditionally, the gentle sound of anklet bells was believed to spread positive energy with every step. This modern interpretation honors that tradition while creating a piece that is elegant and contemporary.',
    materials: ['Freshwater pearls', 'Sterling silver'],
    dimensions: 'Length: 9-10 inches (adjustable)',
    inStock: true
  },
  {
    id: '10',
    name: 'Sita Pearl Layered Necklace',
    slug: 'sita-pearl-layered-necklace',
    price: 179,
    collection: 'aarambh',
    category: 'necklaces',
    shortDescription: 'A stunning layered necklace featuring pearls of varying sizes with gold-plated accents.',
    description: 'The Sita Pearl Layered Necklace features three delicate strands of freshwater pearls in varying sizes, creating a piece that is both elegant and eye-catching. Gold-plated accents add a touch of luxury to this versatile necklace, making it perfect for both everyday wear and special occasions.',
    features: [
      'Freshwater pearls in varying sizes (4-8mm)',
      '18k gold-plated accents and chain',
      'Three-layer design',
      'Adjustable length (16-18 inches)',
      'Secure lobster clasp closure',
      'Handcrafted by skilled artisans'
    ],
    images: [
      '/images/products/layered-necklace.svg',
      '/images/hero-banner.svg',
      '/images/placeholder.svg'
    ],
    story: 'Sita, a name from Indian mythology representing purity and devotion, reflects the pure beauty of the pearls in this necklace. The layered design symbolizes the multiple facets of feminine strength and beauty, creating a piece that honors tradition while embracing contemporary style.',
    materials: ['Freshwater pearls', '18k gold-plated brass'],
    dimensions: 'Length: 16-18 inches (adjustable)',
    inStock: true
  }
]; 