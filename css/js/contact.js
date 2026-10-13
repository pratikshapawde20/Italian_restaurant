
const translations = {
  ko: {
    brandName: "덕수파스타 순천",
    brandTagline: "좋은 음식, 따뜻한 순간",

    navHome: "홈",
    navMenu: "메뉴",
    navReservation: "예약",
    navAbout: "소개",
    navContact: "오시는 길",
    bookTable: "예약하기",

    heroEyebrow: "VISIT · CALL · CONNECT",
    heroTitle: "찾아오시는 길,<br><em>언제나 환영합니다.</em>",
    heroText: "궁금한 점이 있으신가요? 전화로 문의하시거나 매장 위치를 확인해 주세요.",
    callNow: "전화 문의하기",
    getDirections: "길찾기 ↗",

    sectionEyebrow: "WE'D LOVE TO WELCOME YOU",
    sectionTitle: "방문을 기다립니다",
    sectionText: "아래 정보를 확인하시고 편하게 연락해 주세요.",

    addressLabel: "ADDRESS · 주소",
    addressTitle: "매장 주소",
    openMap: "Google Maps에서 위치 보기",

    phoneLabel: "PHONE · 전화",
    phoneTitle: "전화 문의",
    phoneText: "예약이나 메뉴 관련 문의는 매장으로 전화해 주세요.",
    callRestaurant: "매장에 전화하기",

    visitLabel: "YOUR VISIT · 방문 안내",
    visitTitle: "방문 전 확인해 주세요",
    visitText: "영업시간과 좌석 이용 가능 여부는 방문 전에 전화로 확인해 주세요.",
    visitNote: "영업시간은 매장 확인 후 업데이트할 수 있습니다.",

    findUsLabel: "FIND US",
    mapTitle: "순천에서 만나요",
    mapCaption: "WANGJI 2-GIL · SUNCHEON",
    mapAddressTitle: "덕수파스타 순천",
    directionsButton: "Google Maps 길찾기",
    mapDisclaimer: "지도 링크를 열어 실제 위치와 이동 경로를 확인해 주세요.",

    ctaEyebrow: "A TABLE FOR YOUR NEXT MOMENT",
    ctaTitle: "맛있는 순간을<br><em>함께 만들어 보세요.</em>",
    ctaText: "방문 계획이 있으시다면 예약 페이지를 확인해 주세요.",
    ctaButton: "예약 페이지로 이동 ↗",

    footerMessage: "한 접시의 정성, 오래 남는 따뜻한 기억.",
    footerCopyright: "정성과 진심으로 준비합니다."
  },

  en: {
    brandName: "Deoksu Pasta Suncheon",
    brandTagline: "Good Food, Warm Moments",

    navHome: "Home",
    navMenu: "Menu",
    navReservation: "Reservation",
    navAbout: "About Us",
    navContact: "Contact",
    bookTable: "Book a Table",

    heroEyebrow: "VISIT · CALL · CONNECT",
    heroTitle: "Come Find Us,<br><em>You're Always Welcome.</em>",
    heroText: "Have a question? Give us a call or check our location before visiting.",
    callNow: "Call the Restaurant",
    getDirections: "Get Directions ↗",

    sectionEyebrow: "WE'D LOVE TO WELCOME YOU",
    sectionTitle: "We Look Forward to Seeing You",
    sectionText: "Find our contact details below and get in touch with us.",

    addressLabel: "ADDRESS · 주소",
    addressTitle: "Restaurant Address",
    openMap: "View Location on Google Maps",

    phoneLabel: "PHONE · 전화",
    phoneTitle: "Call Us",
    phoneText: "For reservation and menu enquiries, please call the restaurant.",
    callRestaurant: "Call the Restaurant",

    visitLabel: "YOUR VISIT · 방문 안내",
    visitTitle: "Before You Visit",
    visitText: "Please call ahead to confirm opening hours and seating availability.",
    visitNote: "Opening hours can be added after confirmation with the restaurant.",

    findUsLabel: "FIND US",
    mapTitle: "Meet Us in Suncheon",
    mapCaption: "WANGJI 2-GIL · SUNCHEON",
    mapAddressTitle: "Deoksu Pasta Suncheon",
    directionsButton: "Get Directions on Google Maps",
    mapDisclaimer: "Open the map link to check the location and your travel route.",

    ctaEyebrow: "A TABLE FOR YOUR NEXT MOMENT",
    ctaTitle: "Let's Make Your Next Meal<br><em>A Special Moment.</em>",
    ctaText: "Planning a visit? Explore our reservation page.",
    ctaButton: "Visit Reservations ↗",

    footerMessage: "Thoughtful food. Warm memories that last.",
    footerCopyright: "Prepared with care and sincerity."
  }
};

const languageToggle = document.getElementById("languageToggle");
const languageLabel = document.getElementById("languageLabel");
const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");

let currentLanguage = "ko";

// Reuse the restaurant's saved language where possible.
try {
  const savedLanguage = localStorage.getItem("restaurantLanguage");

  if (savedLanguage === "ko" || savedLanguage === "en") {
    currentLanguage = savedLanguage;
  }
} catch (error) {
  // The page still works if browser storage is unavailable.
}

function setLanguage(language) {
  currentLanguage = language;
  document.documentElement.lang = language;

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n;
    const translatedText = translations[language][key];

    if (translatedText !== undefined) {
      element.innerHTML = translatedText;
    }
  });

  // Button text indicates the language the visitor can switch to.
  languageLabel.textContent = language === "ko" ? "EN" : "한국어";

  languageToggle.setAttribute(
    "aria-label",
    language === "ko" ? "Switch to English" : "한국어로 변경"
  );

  try {
    localStorage.setItem("restaurantLanguage", language);
  } catch (error) {
    // Language switching remains functional for this page.
  }
}

languageToggle.addEventListener("click", () => {
  setLanguage(currentLanguage === "ko" ? "en" : "ko");
});

// Responsive mobile navigation.
menuToggle.addEventListener("click", () => {
  const isOpen = mainNav.classList.toggle("is-open");

  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.setAttribute(
    "aria-label",
    isOpen ? "Close navigation" : "Open navigation"
  );
});

// Close the mobile navigation after selecting a page.
mainNav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    mainNav.classList.remove("is-open");
    menuToggle.setAttribute("aria-expanded", "false");
  });
});

// Display the current year automatically.
document.getElementById("currentYear").textContent =
  new Date().getFullYear();

// Initialize translations.
setLanguage(currentLanguage);
