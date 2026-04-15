// S12 LINE Customer Reviews — not editable via admin (per requirement).
export const lineReviewSrcs = [
  "/img/Page 12_ Customer Review from Line Official /IMG_0054.jpg",
  "/img/Page 12_ Customer Review from Line Official /IMG_1424.jpg",
  "/img/Page 12_ Customer Review from Line Official /IMG_1588.jpg",
  "/img/Page 12_ Customer Review from Line Official /IMG_2692.jpg",
  "/img/Page 12_ Customer Review from Line Official /IMG_2693.jpg",
  "/img/Page 12_ Customer Review from Line Official /IMG_3443.jpg",
  "/img/Page 12_ Customer Review from Line Official /IMG_3870.jpg",
  "/img/Page 12_ Customer Review from Line Official /IMG_6375.jpg",
  "/img/Page 12_ Customer Review from Line Official /IMG_7069.jpg",
  "/img/Page 12_ Customer Review from Line Official /IMG_7154.jpg",
  "/img/Page 12_ Customer Review from Line Official /IMG_7644.jpg",
];

export const lineReviewDesktopCards: { src: string; left: string; top: number; width: string }[] = [
  { src: "IMG_0054.jpg", left: "0%", top: 0, width: "27%" },
  { src: "IMG_1424.jpg", left: "24%", top: 50, width: "26%" },
  { src: "IMG_1588.jpg", left: "49%", top: 30, width: "24%" },
  { src: "IMG_2692.jpg", left: "73%", top: -10, width: "26%" },
  { src: "IMG_2693.jpg", left: "-5%", top: 270, width: "27%" },
  { src: "IMG_3443.jpg", left: "22%", top: 295, width: "25%" },
  { src: "IMG_3870.jpg", left: "49%", top: 200, width: "24%" },
  { src: "IMG_6375.jpg", left: "76%", top: 188, width: "25%" },
  { src: "IMG_7069.jpg", left: "-2%", top: 480, width: "26%" },
  { src: "IMG_7154.jpg", left: "22%", top: 425, width: "26%" },
  { src: "IMG_7644.jpg", left: "48%", top: 350, width: "26%" },
  { src: "IMG_8622.jpg", left: "79%", top: 485, width: "25%" },
  { src: "IMG_9222.jpg", left: "-4%", top: 605, width: "27%" },
  { src: "IMG_9264.jpg", left: "25%", top: 625, width: "26%" },
  { src: "IMG_9595.jpg", left: "51%", top: 520, width: "23%" },
  { src: "IMG_9699.jpg", left: "75%", top: 600, width: "24%" },
];

export const lineReviewDesktopSrcs = lineReviewDesktopCards.map(c => `/img/Page 12_ Customer Review from Line Official /${c.src}`);
