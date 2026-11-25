// ---------------------------------------------------------------------------
// Wedding details — edit everything for the website from this ONE file.
// Spellings are copied exactly from the printed invitation card.
// ---------------------------------------------------------------------------

export const WEDDING = {
  bismillahArabic: "بِسْمِ ٱللَّهِ ٱلرَّحْمَـٰنِ ٱلرَّحِيمِ",
  bismillah: "In the Name of Allah, the most Beneficent, the most Merciful",

  hostName: "HAFIZ K. MAKHDOOM ALI",
  hostLine: "S/o. Late Janab Kaka Najmuddin Sahib",
  hostInvite:
    "Solicits your gracious presence on the occasion of the marriage of his Daughter",

  brideName: "K. Ayisha Tayyiba",
  brideShort: "Ayisha",
  brideDegree: "B.Sc.",
  brideLine: "Maternal Grand D/o. Late Ondaikar Abdul Sattar Sahib",

  groomName: "A. Tahir Faizan",
  groomShort: "Tahir",
  groomDegree: "B.C.A.",
  groomLine: "S/o. Janab Alangayam Sayeed Basha Sahib",

  dateText: "Saturday, 12th December 2026",
  dateShort: "12 December 2026",
  hijriDate: "2nd Rajjab 1448 Hijri",

  // Nikah time: 12 December 2026, 12:15 PM IST (UTC +05:30)
  nikahISO: "2026-12-12T12:15:00+05:30",
  nikahEndISO: "2026-12-12T13:15:00+05:30",
  // Valima is "after Zohar prayer" — 1:30 PM is used only so a calendar
  // entry can be created. Guests are asked to follow the day's announcement.
  valimaISO: "2026-12-12T13:30:00+05:30",
  valimaEndISO: "2026-12-12T16:30:00+05:30",

  nikah: {
    title: "NIKAH",
    date: "Saturday, 12th December 2026",
    hijri: "2nd Rajjab 1448 Hijri",
    time: "12:15 PM",
    venue: "Masjid-e-Khaderpet",
    address: "Masjid-e-Khaderpet, Vaniyambadi.",
    mapSearch:
      "https://www.google.com/maps/search/?api=1&query=Masjid-e-Khaderpet%2C+Vaniyambadi",
    mapDirections:
      "https://www.google.com/maps/dir/?api=1&destination=Masjid-e-Khaderpet%2C+Vaniyambadi",
    mapEmbed:
      "https://www.google.com/maps?q=Masjid-e-Khaderpet%2C%20Vaniyambadi&output=embed",
  },

  valima: {
    title: "VALIMA",
    timing: "Lunch After Zohar Prayer",
    venue: "Miyan Shadi Mahal",
    address: "Mattekar Street, Muslimpur, Vaniyambadi.",
    mapSearch:
      "https://www.google.com/maps/search/?api=1&query=Miyan+Shadi+Mahal%2C+Mattekar+Street%2C+Muslimpur%2C+Vaniyambadi",
    mapDirections:
      "https://www.google.com/maps/dir/?api=1&destination=Miyan+Shadi+Mahal%2C+Mattekar+Street%2C+Muslimpur%2C+Vaniyambadi",
    mapEmbed:
      "https://www.google.com/maps?q=Miyan%20Shadi%20Mahal%2C%20Mattekar%20Street%2C%20Muslimpur%2C%20Vaniyambadi&output=embed",
  },

  footerDua:
    "May Allah bless this beautiful union and grant the couple a lifetime of happiness, love, peace, and barakah.",
};

// Gallery — to use real wedding photos later, simply replace the files in
// public/images/ keeping the same file names, or edit the list below.
export const GALLERY = [
  {
    src: "/images/gallery-rings.jpg",
    title: "Bands of Barakah",
    caption: "Gold rings resting with the Holy Qur'an — a bond blessed by faith.",
  },
  {
    src: "/images/gallery-mosque.jpg",
    title: "The House of Allah",
    caption: "Where two hearts will be joined in Nikah, Insha' Allah.",
  },
  {
    src: "/images/gallery-mehndi.jpg",
    title: "Mehndi & Jasmine",
    caption: "Henna drawn with love, finished with fresh jasmine.",
  },
  {
    src: "/images/gallery-bouquet.jpg",
    title: "Ivory Blooms",
    caption: "White roses and jasmine, tied in ivory silk.",
  },
  {
    src: "/images/gallery-lanterns.jpg",
    title: "Lantern Light",
    caption: "Golden lanterns, sweet dates and tasbih — ready to welcome guests.",
  },
  {
    src: "/images/gallery-calligraphy.jpg",
    title: "Written with Love",
    caption: "Calligraphy and florals in cream and antique gold.",
  },
];

// A few welcome duas shown the first time the Blessings Wall is opened.
export const SEED_DUAS = [
  {
    name: "With love, from Family",
    message:
      "Barakallahu lakuma wa baraka alaikuma wa jama'a bainakuma fi khair. May Allah bless your marriage with love, mercy and endless barakah.",
    date: "Welcome",
  },
  {
    name: "Well-wishers",
    message:
      "MashaAllah! May your home be filled with the light of Imaan, the warmth of love, and the sweetness of togetherness. Aameen.",
    date: "Welcome",
  },
  {
    name: "From Vaniyambadi",
    message:
      "Heartfelt duas for Ayisha and Tahir. May Allah grant you righteous children and a lifetime of happiness in this world and the next.",
    date: "Welcome",
  },
];
