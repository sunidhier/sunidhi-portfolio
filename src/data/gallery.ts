
/* ============================================================
   GALLERY DATA — Categorized personal photo galleries

   Image files are stored inside the public/images/ directory.
   Paths below must start with /images/, NOT /public/images/.

   Available photos:
   Boeing:   7 images
   Miss G:   3 images
   Placement: 3 images
   Club:     2 images

   To add more photos, place them in the matching folder and
   add another entry to that category's photos array.
   ============================================================ */

export interface GalleryPhoto {
  id: string;
  src: string;
  alt: string;
  caption: string;
}

export interface GalleryCategory {
  id: string;
  title: string;
  subtitle: string;
  coverEmoji: string;
  coverAccent: string;
  coverImage: string;
  photos: GalleryPhoto[];
}

export const galleryCategories: GalleryCategory[] = [
  {
    id: 'boeing',
    title: 'Boeing Internship',
    subtitle: 'Programmer Analyst Intern · Boeing India · Summer 2026',
    coverEmoji: '✈️',
    coverAccent: '#00BFFF',
    coverImage: '/images/boeing/boeing-01.jpeg',
    photos: [
      {
        id: 'b1',
        src: '/images/boeing/boeing-01.jpeg',
        alt: 'Boeing internship photograph 1',
        caption: 'Programmer Analyst Intern — Boeing India, 2026',
      },
      {
        id: 'b2',
        src: '/images/boeing/boeing-02.jpeg',
        alt: 'Boeing internship photograph 2',
        caption: 'Summer internship experience',
      },
      {
        id: 'b3',
        src: '/images/boeing/boeing-03.jpeg',
        alt: 'Boeing internship photograph 3',
        caption: 'Internship memories',
      },
      {
        id: 'b4',
        src: '/images/boeing/boeing-04.jpeg',
        alt: 'Boeing internship photograph 4',
        caption: 'Professional learning experience',
      },
      {
        id: 'b5',
        src: '/images/boeing/boeing-05.jpeg',
        alt: 'Boeing internship photograph 5',
        caption: 'Summer internship, 2026',
      },
      {
        id: 'b6',
        src: '/images/boeing/boeing-06.jpeg',
        alt: 'Boeing internship photograph 6',
        caption: 'Internship memories',
      },
      {
        id: 'b7',
        src: '/images/boeing/boeing-07.jpeg',
        alt: 'Boeing internship photograph 7',
        caption: 'A summer of learning and growth',
      },
    ],
  },

  {
    id: 'miss-g',
    title: 'Miss G — Second Runner-Up',
    subtitle: 'GSSSIETW College Pageant · 2025',
    coverEmoji: '👑',
    coverAccent: '#A78BFA',
    coverImage: '/images/miss-g/miss-g-01.jpeg',
    photos: [
      {
        id: 'mg1',
        src: '/images/miss-g/miss-g-01.jpeg',
        alt: 'Miss G pageant photograph 1',
        caption: 'Miss G — Second Runner-Up, 2025',
      },
      {
        id: 'mg2',
        src: '/images/miss-g/miss-g-02.jpeg',
        alt: 'Miss G pageant photograph 2',
        caption: 'Pageant memories, 2025',
      },
      {
        id: 'mg3',
        src: '/images/miss-g/miss-g-03.jpeg',
        alt: 'Miss G pageant photograph 3',
        caption: 'A memorable college achievement',
      },
    ],
  },

  {
    id: 'placement',
    title: 'Student Placement Coordinator',
    subtitle: 'GSSSIETW · 2024–Present',
    coverEmoji: '📋',
    coverAccent: '#34D399',
    coverImage: '/images/placement/placement-01.jpeg',
    photos: [
      {
        id: 'p1',
        src: '/images/placement/placement-01.jpeg',
        alt: 'Placement coordination photograph 1',
        caption: 'Student placement coordination',
      },
      {
        id: 'p2',
        src: '/images/placement/placement-02.jpeg',
        alt: 'Placement coordination photograph 2',
        caption: 'Campus placement activities',
      },
      {
        id: 'p3',
        src: '/images/placement/placement-03.jpeg',
        alt: 'Placement coordination photograph 3',
        caption: 'Placement coordination memories',
      },
    ],
  },

  {
    id: 'club',
    title: 'Science & Adventure Club',
    subtitle: 'Treasurer · GSSSIETW · 2023–2024',
    coverEmoji: '🔬',
    coverAccent: '#FCD34D',
    coverImage: '/images/club/club-01.jpeg',
    photos: [
      {
        id: 'c1',
        src: '/images/club/club-01.jpeg',
        alt: 'Science and Adventure Club photograph 1',
        caption: 'Science & Adventure Club',
      },
      {
        id: 'c2',
        src: '/images/club/club-02.jpeg',
        alt: 'Science and Adventure Club photograph 2',
        caption: 'Club activities and memories',
      },
    ],
  },
];
