
document.addEventListener("DOMContentLoaded", () => {
  const languageToggle = document.getElementById("languageToggle");
  const navToggle = document.getElementById("navToggle");
  const mainNav = document.getElementById("mainNav");
  const backTop = document.getElementById("backTop");
  const year = document.getElementById("year");

  const translations = {
    en: {
      announcement: "A warm welcome, a beautiful meal, a moment to remember.",
      navHome: "Home",
      navMenu: "Menu",
      navReservation: "Reservation",
      navAbout: "About Us",
      navContact: "Contact",
      heroEyebrow: "A LITTLE TASTE OF HAPPINESS",
      heroTitle: 'Good food.<br><em>Beautiful moments.</em>',
      heroDescription: "From comforting pasta to satisfying risotto and sizzling steak, discover flavours made to bring people together.",
      exploreMenu: "Explore Our Menu",
      reserveTable: "Reserve a Table",
      heroNote: "MADE WITH CARE · SERVED WITH WARMTH",
      welcomeEyebrow: "WELCOME TO DEOKSU PASTA",
      welcomeTitle: 'More than a meal.<br><em>A moment worth sharing.</em>',
      welcomeDescription: "Great food has a special way of bringing people closer. We invite you to slow down, enjoy every bite, and make wonderful memories around the table.",
      featuredEyebrow: "MADE TO MAKE YOU SMILE",
      featuredTitle: "A Taste to Remember",
      viewFullMenu: "View Full Menu",
      dishOneKo: "파스타",
      dishOne: "Signature Pasta",
      dishOneDesc: "Comforting flavours, a beautiful sauce, and every forkful made to savour.",
      dishTwoKo: "리조또",
      dishTwo: "Creamy Risotto",
      dishTwoDesc: "A comforting favourite with a rich, satisfying taste.",
      dishThreeKo: "스테이크",
      dishThree: "Steak & Mains",
      dishThreeDesc: "Hearty dishes for a meal that feels like a celebration.",
      storyEyebrow: "THE JOY OF GOOD FOOD",
      storyTitle: '좋은 음식,<br><em>행복한 순간.</em>',
      storyDescription: "We believe a meal is about more than what is on the plate. It is about the people beside you, the stories you share, and the memories you take home.",
      storyKorean: "정성으로 준비한 한 끼가 여러분의 하루에 작은 행복이 되기를 바랍니다.",
      ourStory: "Discover Our Story",
      experienceEyebrow: "YOUR TABLE, YOUR MOMENT",
      experienceTitle: 'Every visit deserves<br><em>something special.</em>',
      experienceOneTitle: "Made to Enjoy",
      experienceOneText: "Explore a menu of pasta, risotto, steak and more.",
      experienceTwoTitle: "A Warm Welcome",
      experienceTwoText: "Share a relaxed meal with friends, family, or someone special.",
      experienceThreeTitle: "Moments Together",
      experienceThreeText: "Turn an ordinary day into a memory around the table.",
      ctaEyebrow: "YOUR NEXT FAVOURITE MEAL AWAITS",
      ctaTitle: 'Come hungry.<br><em>Leave happy.</em>',
      ctaDescription: "Find your favourite dish and plan your next visit.",
      browseMenu: "Browse the Menu",
      bookNow: "Plan Your Visit",
      footerMessage: "Good food brings us together.",
      footerNote: "Made with care. Shared with love."
    },

    ko: {
      announcement: "따뜻한 환영, 맛있는 한 끼, 오래 기억될 순간.",
      navHome: "홈",
      navMenu: "메뉴",
      navReservation: "예약",
      navAbout: "소개",
      navContact: "문의",
      heroEyebrow: "행복을 담은 한 끼",
      heroTitle: '좋은 음식.<br><em>아름다운 순간.</em>',
      heroDescription: "편안한 파스타부터 든든한 리조또와 스테이크까지, 함께 나누기 좋은 맛을 만나보세요.",
      exploreMenu: "메뉴 둘러보기",
      reserveTable: "테이블 예약",
      heroNote: "정성으로 준비하고 따뜻하게 대접합니다",
      welcomeEyebrow: "덕수파스타에 오신 것을 환영합니다",
      welcomeTitle: '한 끼 이상의 가치.<br><em>함께 나누는 순간.</em>',
      welcomeDescription: "좋은 음식은 사람과 사람을 더 가깝게 이어줍니다. 잠시 여유를 갖고 한 입 한 입 즐기며 식탁 위에 아름다운 추억을 만들어 보세요.",
      featuredEyebrow: "미소를 전하는 맛",
      featuredTitle: "기억에 남는 한 끼",
      viewFullMenu: "전체 메뉴 보기",
      dishOneKo: "파스타",
      dishOne: "시그니처 파스타",
      dishOneDesc: "맛있는 소스와 풍성한 풍미를 한 포크마다 즐겨보세요.",
      dishTwoKo: "리조또",
      dishTwo: "크리미 리조또",
      dishTwoDesc: "풍부하고 부드러운 맛으로 즐기는 든든한 메뉴.",
      dishThreeKo: "스테이크",
      dishThree: "스테이크 & 메인",
      dishThreeDesc: "특별한 날을 더욱 풍성하게 만들어 주는 메뉴.",
      storyEyebrow: "좋은 음식이 주는 기쁨",
      storyTitle: '좋은 음식,<br><em>행복한 순간.</em>',
      storyDescription: "식사는 단순히 접시 위의 음식만을 의미하지 않습니다. 곁에 있는 사람들, 함께 나누는 이야기, 그리고 집으로 가져가는 소중한 추억을 의미합니다.",
      storyKorean: "정성으로 준비한 한 끼가 여러분의 하루에 작은 행복이 되기를 바랍니다.",
      ourStory: "덕수파스타 이야기",
      experienceEyebrow: "여러분의 식탁, 여러분의 순간",
      experienceTitle: '모든 방문에<br><em>특별함을 더합니다.</em>',
      experienceOneTitle: "즐거운 한 끼",
      experienceOneText: "파스타, 리조또, 스테이크 등 다양한 메뉴를 만나보세요.",
      experienceTwoTitle: "따뜻한 환영",
      experienceTwoText: "친구, 가족, 소중한 사람과 편안한 식사를 즐겨보세요.",
      experienceThreeTitle: "함께하는 순간",
      experienceThreeText: "평범한 하루를 식탁 위의 특별한 추억으로 만들어 보세요.",
      ctaEyebrow: "다음에 만날 맛있는 한 끼",
      ctaTitle: '맛있게 먹고,<br><em>행복하게 돌아가세요.</em>',
      ctaDescription: "좋아하는 메뉴를 찾고 다음 방문을 계획해 보세요.",
      browseMenu: "메뉴 보기",
      bookNow: "방문 계획하기",
      footerMessage: "좋은 음식은 우리를 이어줍니다.",
      footerNote: "정성으로 준비하고 사랑으로 나눕니다."
    }
  };

  let language = "en";

  try {
    const savedLanguage = localStorage.getItem("deoksu-home-language");
    if (savedLanguage === "ko" || savedLanguage === "en") {
      language = savedLanguage;
    }
  } catch (error) {
    // The site still works when browser storage is unavailable.
  }

  function setLanguage(nextLanguage) {
    language = nextLanguage;
    document.documentElement.lang = language;

    document.querySelectorAll("[data-i18n]").forEach((element) => {
      const key = element.dataset.i18n;
      const translated = translations[language][key];

      if (typeof translated === "string") {
        element.innerHTML = translated;
      }
    });

    languageToggle.textContent = language === "en" ? "한국어" : "English";

    languageToggle.setAttribute(
      "aria-label",
      language === "en" ? "Switch to Korean" : "Switch to English"
    );

    try {
      localStorage.setItem("deoksu-home-language", language);
    } catch (error) {
      // Language switching still works for this page.
    }
  }

  languageToggle.addEventListener("click", () => {
    setLanguage(language === "en" ? "ko" : "en");
  });

  navToggle.addEventListener("click", () => {
    const isOpen = mainNav.classList.toggle("open");

    navToggle.setAttribute("aria-expanded", String(isOpen));
    navToggle.setAttribute(
      "aria-label",
      isOpen ? "Close navigation" : "Open navigation"
    );
  });

  mainNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      mainNav.classList.remove("open");
      navToggle.setAttribute("aria-expanded", "false");
    });
  });

  function updateBackTop() {
    backTop.classList.toggle("visible", window.scrollY > 400);
  }

  window.addEventListener("scroll", updateBackTop, { passive: true });

  backTop.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });

  year.textContent = new Date().getFullYear();
  setLanguage(language);
});

