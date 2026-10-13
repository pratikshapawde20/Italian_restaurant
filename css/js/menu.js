document.addEventListener("DOMContentLoaded", () => {
  const $ = (id) => document.getElementById(id);

  const menuGrid = $("menuGrid");
  const searchInput = $("menuSearch");
  const clearSearch = $("clearSearch");
  const categoryFilters = $("categoryFilters");
  const resultsCount = $("resultsCount");
  const noResults = $("noResults");
  const resetFilters = $("resetFilters");
  const languageToggle = $("languageToggle");
  const navToggle = $("navToggle");
  const mainNav = $("mainNav");
  const backTop = $("backTop");

  // Menu items and prices transcribed from your screenshots.
  // Descriptions are illustrative; confirm ingredients with the restaurant.
  const dishes = [
    {
      ko: "그린샐러드", en: "Green Salad", price: 6900, cat: "salad",
      photo: "photo-1512621776951-a57141f2eefd",
      desc: {
        en: "A fresh garden salad with crisp greens and seasonal vegetables.",
        ko: "신선한 채소와 제철 재료를 곁들인 산뜻한 샐러드."
      }
    },
    {
      ko: "오렌지 에이드", en: "Orange Ade", price: 4300, cat: "drink",
      photo: "photo-1546173159-315724a31696",
      desc: {
        en: "A refreshing orange drink served chilled.",
        ko: "상큼한 오렌지 풍미를 시원하게 즐기는 에이드."
      }
    },
    {
      ko: "자몽 에이드", en: "Grapefruit Ade", price: 4300, cat: "drink",
      photo: "photo-1513558161293-cdaf765edfd7",
      desc: {
        en: "A refreshing grapefruit ade with a lively citrus taste.",
        ko: "자몽의 산뜻한 시트러스 풍미가 돋보이는 에이드."
      }
    },
    {
      ko: "레몬 에이드", en: "Lemon Ade", price: 4300, cat: "drink",
      photo: "photo-1513558161293-cdaf765edfd7",
      desc: {
        en: "A cool lemon drink with a fresh, tangy finish.",
        ko: "레몬의 상큼함을 담아 시원하게 즐기는 음료."
      }
    },
    {
      ko: "땡초크림파스타", en: "Spicy Cheongyang Cream Pasta", price: 9900, cat: "pasta",
      photo: "photo-1473093295043-cdd812d0e601",
      desc: {
        en: "Creamy pasta with a Korean-style spicy kick.",
        ko: "고소한 크림소스에 매콤한 맛을 더한 파스타."
      }
    },
    {
      ko: "버터스테이크", en: "Butter Steak", price: 39000, cat: "steak",
      photo: "photo-1544025162-d76694265947",
      desc: {
        en: "A hearty steak-style main with a rich buttery flavour.",
        ko: "버터의 풍미를 더해 든든하게 즐기는 스테이크."
      }
    },
    {
      ko: "광양식불고기치즈파스타", en: "Gwangyang Bulgogi Cheese Pasta", price: 13900, cat: "pasta",
      photo: "photo-1473093295043-cdd812d0e601",
      desc: {
        en: "Pasta inspired by Gwangyang-style bulgogi, finished with cheese.",
        ko: "광양식 불고기의 풍미와 치즈를 함께 즐기는 파스타."
      }
    },
    {
      ko: "덕수샐러드", en: "Deoksu Salad", price: 9900, cat: "salad",
      photo: "photo-1512621776951-a57141f2eefd",
      desc: {
        en: "The house salad with a generous mix of greens and toppings.",
        ko: "다양한 채소와 토핑을 풍성하게 담은 덕수 샐러드."
      }
    },
    {
      ko: "치즈불고기필라프", en: "Cheese Bulgogi Pilaf", price: 13900, cat: "risotto",
      photo: "photo-1512058564366-18510be2db19",
      desc: {
        en: "Savoury bulgogi-style rice finished with cheese.",
        ko: "불고기 풍미의 필라프에 치즈를 더한 든든한 한 접시."
      }
    },
    {
      ko: "떠먹는피자 페퍼로니", en: "Spoon Pizza – Pepperoni", price: 12900, cat: "mains",
      photo: "photo-1579751626657-72bc17010498",
      desc: {
        en: "A spoonable pizza-style dish topped with pepperoni.",
        ko: "페퍼로니와 치즈를 올려 떠먹는 스타일의 피자."
      }
    },
    {
      ko: "대패김치필라프", en: "Thin-Sliced Pork Kimchi Pilaf", price: 9900, cat: "risotto",
      photo: "photo-1512058564366-18510be2db19",
      desc: {
        en: "A savoury rice pilaf with kimchi-inspired flavour.",
        ko: "김치의 감칠맛을 담은 든든한 필라프."
      }
    },
    {
      ko: "추라이 스테이크", en: "Churai Steak", price: 39000, cat: "steak",
      photo: "photo-1544025162-d76694265947",
      desc: {
        en: "A substantial steak main served in the restaurant's style.",
        ko: "매장 스타일로 즐기는 풍성한 스테이크 메뉴."
      }
    },
    {
      ko: "감바스", en: "Gambas", price: 13900, cat: "mains",
      photo: "photo-1559737558-2f5a35f4523b",
      desc: {
        en: "A shrimp dish with a rich, savoury finish.",
        ko: "새우의 풍미를 살려 즐기는 감바스 메뉴."
      }
    },
    {
      ko: "떠먹는피자 불고기", en: "Spoon Pizza – Bulgogi", price: 13900, cat: "mains",
      photo: "photo-1579751626657-72bc17010498",
      desc: {
        en: "A spoonable pizza-style dish with bulgogi-inspired flavour.",
        ko: "불고기 풍미와 치즈를 함께 즐기는 떠먹는 피자."
      }
    },
    {
      ko: "머쉬룸 크림 파스타", en: "Mushroom Cream Pasta", price: 9900, cat: "pasta",
      photo: "photo-1473093295043-cdd812d0e601",
      desc: {
        en: "Pasta with a creamy mushroom-inspired sauce.",
        ko: "버섯의 풍미와 부드러운 크림소스를 곁들인 파스타."
      }
    },
    {
      ko: "토마토 파스타", en: "Tomato Pasta", price: 9900, cat: "pasta",
      photo: "photo-1473093295043-cdd812d0e601",
      desc: {
        en: "Classic pasta with a bright tomato-style sauce.",
        ko: "토마토소스의 산뜻한 풍미를 즐기는 클래식 파스타."
      }
    },
    {
      ko: "베이컨 로제 파스타", en: "Bacon Rosé Pasta", price: 9900, cat: "pasta",
      photo: "photo-1473093295043-cdd812d0e601",
      desc: {
        en: "Rosé-style pasta with creamy tomato sauce and bacon.",
        ko: "토마토와 크림의 조화에 베이컨 풍미를 더한 파스타."
      }
    },
    {
      ko: "우삼겹 갈릭 오일 파스타", en: "Beef Brisket Garlic Oil Pasta", price: 10900, cat: "pasta",
      photo: "photo-1473093295043-cdd812d0e601",
      desc: {
        en: "Garlic-oil pasta with thin-sliced beef brisket.",
        ko: "마늘 오일의 향과 우삼겹을 함께 즐기는 파스타."
      }
    },
    {
      ko: "무제 파스타", en: "Muje Pasta", price: 11900, cat: "pasta",
      photo: "photo-1473093295043-cdd812d0e601",
      desc: {
        en: "A house-style pasta. Ask the restaurant about ingredients.",
        ko: "매장에 재료와 소스를 문의해 보세요."
      }
    },
    {
      ko: "씨푸드 칠리 오일 파스타", en: "Seafood Chili Oil Pasta", price: 11900, cat: "pasta",
      photo: "photo-1555949258-eb67b1ef0ceb",
      desc: {
        en: "Seafood-inspired pasta with a chilli-oil flavour.",
        ko: "해산물 풍미와 칠리 오일의 매콤함을 더한 파스타."
      }
    },
    {
      ko: "들깨 크림 파스타", en: "Perilla Cream Pasta", price: 12900, cat: "pasta",
      photo: "photo-1473093295043-cdd812d0e601",
      desc: {
        en: "Creamy pasta featuring the nutty character of perilla.",
        ko: "들깨의 고소함을 부드러운 크림소스에 담은 파스타."
      }
    },
    {
      ko: "페페로니 치즈 파스타", en: "Pepperoni Cheese Pasta", price: 12900, cat: "pasta",
      photo: "photo-1473093295043-cdd812d0e601",
      desc: {
        en: "Cheesy pasta with pepperoni-inspired savoury flavour.",
        ko: "페페로니 풍미와 치즈의 조화를 즐기는 파스타."
      }
    },
    {
      ko: "마초 파스타", en: "Macho Pasta", price: 12900, cat: "pasta",
      photo: "photo-1555949258-eb67b1ef0ceb",
      desc: {
        en: "A hearty house-style pasta. Ask staff for exact ingredients.",
        ko: "푸짐하게 즐기는 파스타입니다. 자세한 재료는 직원에게 문의해 주세요."
      }
    },
    {
      ko: "포테이토 로제 리조또", en: "Potato Rosé Risotto", price: 15900, cat: "risotto",
      photo: "photo-1476124369491-e7ADDf5db371",
      desc: {
        en: "Creamy rosé-style risotto with potato-inspired comfort.",
        ko: "부드러운 로제 소스와 감자의 풍미를 즐기는 리조또."
      }
    },
    {
      ko: "광양식 불고기 필라프", en: "Gwangyang Bulgogi Pilaf", price: 9900, cat: "risotto",
      photo: "photo-1512058564366-18510be2db19",
      desc: {
        en: "A savoury rice pilaf inspired by Gwangyang-style bulgogi.",
        ko: "광양식 불고기의 감칠맛을 담은 필라프."
      }
    },
    {
      ko: "에그 필라프", en: "Egg Pilaf", price: 12900, cat: "risotto",
      photo: "photo-1512058564366-18510be2db19",
      desc: {
        en: "A comforting rice pilaf with egg.",
        ko: "계란을 곁들여 든든하게 즐기는 필라프."
      }
    },
    {
      ko: "버팔로 윙봉 10조각", en: "Buffalo Wings – 10 Pieces", price: 11900, cat: "mains",
      photo: "photo-1527477396000-e27163b481c2",
      desc: {
        en: "Ten chicken wing pieces with a bold, savoury finish.",
        ko: "풍미 있게 즐기는 버팔로 윙봉 10조각."
      }
    },
    {
      ko: "불고기 땡초 크림 파스타", en: "Bulgogi Spicy Cream Pasta", price: 15900, cat: "pasta",
      photo: "photo-1473093295043-cdd812d0e601",
      desc: {
        en: "Bulgogi-inspired flavour meets a spicy Korean-style cream sauce.",
        ko: "불고기의 풍미와 매콤한 청양 크림소스를 함께 즐기는 파스타."
      }
    },
    {
      ko: "들깨 크림 리조또", en: "Perilla Cream Risotto", price: 12900, cat: "risotto",
      photo: "photo-1476124369491-e7ADDf5db371",
      desc: {
        en: "Creamy risotto with the nutty flavour of perilla.",
        ko: "들깨의 고소함을 살린 부드러운 크림 리조또."
      }
    },
    {
      ko: "베이컨 크림 리조또", en: "Bacon Cream Risotto", price: 13900, cat: "risotto",
      photo: "photo-1476124369491-e7ADDf5db371",
      desc: {
        en: "Creamy risotto with a savoury bacon-style finish.",
        ko: "베이컨의 풍미를 더한 크리미한 리조또."
      }
    },
    {
      ko: "토마토 목살 리조또", en: "Tomato Pork Shoulder Risotto", price: 13900, cat: "risotto",
      photo: "photo-1476124369491-e7ADDf5db371",
      desc: {
        en: "Tomato-style risotto paired with pork shoulder.",
        ko: "토마토소스와 목살을 함께 즐기는 리조또."
      }
    },
    {
      ko: "새우크림파스타", en: "Shrimp Cream Pasta", price: 13900, cat: "pasta",
      photo: "photo-1473093295043-cdd812d0e601",
      desc: {
        en: "Creamy pasta with shrimp-inspired flavour.",
        ko: "새우의 풍미를 더한 부드러운 크림 파스타."
      }
    },
    {
      ko: "버터갈릭 파스타", en: "Butter Garlic Pasta", price: 11900, cat: "pasta",
      photo: "photo-1473093295043-cdd812d0e601",
      desc: {
        en: "Pasta with buttery garlic flavour.",
        ko: "버터와 마늘의 고소한 향을 즐기는 파스타."
      }
    },
    {
      ko: "크림 리조또", en: "Cream Risotto", price: 12900, cat: "risotto",
      photo: "photo-1476124369491-e7ADDf5db371",
      desc: {
        en: "Comforting risotto in a creamy-style sauce.",
        ko: "부드러운 크림소스로 완성한 리조또."
      }
    }
  ];

  const copy = {
    en: {
      topNote: "A little Italian comfort, served with Korean warmth.",
      navHome: "Home",
      navMenu: "Menu",
      navReservation: "Reservation",
      navAbout: "About Us",
      navContact: "Contact",
      heroEyebrow: "MADE TO BE SHARED",
      heroTitle: 'Good food.<br><em>Beautiful moments.</em>',
      heroText: "From creamy pasta to sizzling steak, find your next favourite at Deoksu Pasta.",
      exploreMenu: "Explore the menu",
      introText: "Thoughtfully prepared comfort food, made for the moments that bring people together.",
      sectionEyebrow: "FIND YOUR FAVOURITE",
      sectionTitle: "Our Menu",
      sectionDescription: "Explore our pasta, risotto, steak, salads and refreshing drinks.",
      searchPlaceholder: "Search dishes...",
      catAll: "All dishes",
      catPasta: "Pasta",
      catRisotto: "Risotto & rice",
      catSteak: "Steak & mains",
      catSalad: "Salad & sides",
      catDrinks: "Drinks",
      priceNote: "Prices shown in Korean won (₩).",
      allItems: "menu items",
      noResultsTitle: "No dishes found",
      noResultsText: "Try another search or choose a different category.",
      resetFilters: "Reset filters",
      disclaimer: "Menu items and prices are transcribed from the supplied menu screenshots. Please confirm current availability, ingredients and prices with the restaurant. Food photos are illustrative.",
      quote: "Every plate is an invitation to slow down, share a little more, and enjoy the moment.",
      quoteKorean: "좋은 음식과 좋은 사람, 함께하는 따뜻한 순간.",
      footerPhrase: "Good food, good company, and a table waiting for you.",
      footerNote: "Prepared with care. Served with warmth."
    },
    ko: {
      topNote: "이탈리아의 편안한 맛에 한국의 따뜻한 마음을 더합니다.",
      navHome: "홈",
      navMenu: "메뉴",
      navReservation: "예약",
      navAbout: "소개",
      navContact: "문의",
      heroEyebrow: "함께 나누는 맛",
      heroTitle: '좋은 음식.<br><em>아름다운 순간.</em>',
      heroText: "부드러운 파스타부터 풍성한 스테이크까지, 덕수파스타에서 새로운 최애 메뉴를 만나보세요.",
      exploreMenu: "메뉴 둘러보기",
      introText: "사람과 사람을 이어주는 순간을 위해 정성껏 준비한 편안한 한 끼.",
      sectionEyebrow: "오늘의 취향을 찾아보세요",
      sectionTitle: "전체 메뉴",
      sectionDescription: "파스타, 리조또, 스테이크, 샐러드와 상큼한 음료를 만나보세요.",
      searchPlaceholder: "메뉴 검색...",
      catAll: "전체 메뉴",
      catPasta: "파스타",
      catRisotto: "리조또 & 필라프",
      catSteak: "스테이크 & 메인",
      catSalad: "샐러드 & 사이드",
      catDrinks: "음료",
      priceNote: "가격은 원화(₩) 기준입니다.",
      allItems: "개 메뉴",
      noResultsTitle: "메뉴를 찾을 수 없습니다",
      noResultsText: "다른 검색어를 입력하거나 카테고리를 바꿔보세요.",
      resetFilters: "필터 초기화",
      disclaimer: "메뉴명과 가격은 제공해 주신 메뉴 사진을 기준으로 옮겼습니다. 판매 여부, 재료와 가격은 매장에 확인해 주세요. 음식 사진은 참고용 이미지입니다.",
      quote: "한 접시의 음식이 잠시 쉬어가고, 더 많이 나누고, 순간을 즐기는 초대가 되기를 바랍니다.",
      quoteKorean: "좋은 음식과 좋은 사람, 함께하는 따뜻한 순간.",
      footerPhrase: "좋은 음식, 좋은 사람, 여러분을 기다리는 식탁.",
      footerNote: "정성으로 준비하고 따뜻하게 대접합니다."
    }
  };

  let language = "en";
  let activeCategory = "all";
  let searchTerm = "";

  const categoryNames = {
    en: {
      pasta: "Pasta",
      risotto: "Risotto & rice",
      steak: "Steak & mains",
      salad: "Salad & sides",
      drink: "Drinks",
      mains: "Small plates"
    },
    ko: {
      pasta: "파스타",
      risotto: "리조또 & 필라프",
      steak: "스테이크",
      salad: "샐러드 & 사이드",
      drink: "음료",
      mains: "메인 메뉴"
    }
  };

  function money(value) {
    return "₩" + value.toLocaleString("en-US");
  }

  function imageUrl(photo) {
    return `https://images.unsplash.com/${photo}?auto=format&fit=crop&w=850&q=80`;
  }

  function renderMenu() {
    const list = dishes.filter((dish) => {
      const categoryMatch =
        activeCategory === "all" ||
        (activeCategory === "steak" && ["steak", "mains"].includes(dish.cat)) ||
        (activeCategory === "salad" && dish.cat === "salad") ||
        (activeCategory === "drink" && dish.cat === "drink") ||
        dish.cat === activeCategory;

      const query = searchTerm.toLocaleLowerCase();
      const textMatch =
        !query ||
        dish.ko.toLocaleLowerCase().includes(query) ||
        dish.en.toLocaleLowerCase().includes(query) ||
        dish.desc[language].toLocaleLowerCase().includes(query);

      return categoryMatch && textMatch;
    });

    menuGrid.replaceChildren();

    list.forEach((dish) => {
      const card = document.createElement("article");
      card.className = "dish-card";

      const photoWrap = document.createElement("div");
      photoWrap.className = "dish-photo-wrap";

      const img = document.createElement("img");
      img.className = "dish-photo";
      img.src = imageUrl(dish.photo);
      img.alt = `${dish.en} / ${dish.ko}`;
      img.loading = "lazy";
      img.onerror = () => {
        img.onerror = null;
        img.src = imageUrl("photo-1473093295043-cdd812d0e601");
      };

      const number = document.createElement("span");
      number.className = "dish-number";
      number.textContent = String(dishes.indexOf(dish) + 1).padStart(2, "0");

      const category = document.createElement("span");
      category.className = "dish-category";
      category.textContent =
        categoryNames[language][dish.cat] ||
        (language === "ko" ? "메인 메뉴" : "Main");

      photoWrap.append(img, number, category);

      const content = document.createElement("div");
      content.className = "dish-content";

      const ko = document.createElement("h3");
      ko.className = "dish-name-ko";
      ko.lang = "ko";
      ko.textContent = dish.ko;

      const en = document.createElement("p");
      en.className = "dish-name-en";
      en.textContent = dish.en;

      const desc = document.createElement("p");
      desc.className = "dish-description";
      desc.textContent = dish.desc[language];

      const bottom = document.createElement("div");
      bottom.className = "dish-bottom";

      const price = document.createElement("p");
      price.className = "dish-price";
      price.append(document.createTextNode(money(dish.price)));

      const priceSmall = document.createElement("small");
      priceSmall.textContent =
        language === "ko" ? "메뉴 표시 가격" : "Listed menu price";
      price.appendChild(priceSmall);

      const index = document.createElement("span");
      index.className = "dish-index";
      index.textContent = "✳";

      bottom.append(price, index);
      content.append(ko, en, desc, bottom);
      card.append(photoWrap, content);
      menuGrid.appendChild(card);
    });

    const t = copy[language];

    resultsCount.textContent =
      language === "ko"
        ? `${list.length}${t.allItems}`
        : `${list.length} ${t.allItems}`;

    noResults.hidden = list.length > 0;
    menuGrid.hidden = list.length === 0;
    clearSearch.hidden = searchTerm.length === 0;
  }

  function applyLanguage(nextLanguage) {
    language = nextLanguage;
    document.documentElement.lang = language;

    document.querySelectorAll("[data-i18n]").forEach((element) => {
      const key = element.dataset.i18n;
      if (Object.prototype.hasOwnProperty.call(copy[language], key)) {
        element.innerHTML = copy[language][key];
      }
    });

    document.querySelectorAll("[data-i18n-placeholder]").forEach((element) => {
      const key = element.dataset.i18nPlaceholder;
      if (Object.prototype.hasOwnProperty.call(copy[language], key)) {
        element.placeholder = copy[language][key];
      }
    });

    languageToggle.textContent = language === "en" ? "한국어" : "English";
    languageToggle.setAttribute(
      "aria-label",
      language === "en" ? "Switch to Korean" : "Switch to English"
    );

    document.querySelectorAll(".filter-chip").forEach((button) => {
      button.classList.toggle(
        "active",
        button.dataset.category === activeCategory
      );
    });

    try {
      localStorage.setItem("deoksu-menu-language", language);
    } catch (error) {
      // The page still works if browser storage is unavailable.
    }

    renderMenu();
  }

  categoryFilters.addEventListener("click", (event) => {
    const button = event.target.closest("[data-category]");
    if (!button) return;

    activeCategory = button.dataset.category;

    categoryFilters.querySelectorAll(".filter-chip").forEach((chip) => {
      chip.classList.toggle("active", chip === button);
    });

    renderMenu();
  });

  searchInput.addEventListener("input", () => {
    searchTerm = searchInput.value.trim();
    renderMenu();
  });

  clearSearch.addEventListener("click", () => {
    searchInput.value = "";
    searchTerm = "";
    searchInput.focus();
    renderMenu();
  });

  resetFilters.addEventListener("click", () => {
    activeCategory = "all";
    searchTerm = "";
    searchInput.value = "";

    categoryFilters.querySelectorAll(".filter-chip").forEach((chip) => {
      chip.classList.toggle("active", chip.dataset.category === "all");
    });

    renderMenu();
  });

  languageToggle.addEventListener("click", () => {
    applyLanguage(language === "en" ? "ko" : "en");
  });

  navToggle.setAttribute("aria-expanded", "false");

  navToggle.addEventListener("click", () => {
    const opened = mainNav.classList.toggle("open");
    navToggle.setAttribute("aria-expanded", String(opened));
    navToggle.setAttribute(
      "aria-label",
      opened ? "Close navigation" : "Open navigation"
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
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  try {
    const savedLanguage = localStorage.getItem("deoksu-menu-language");
    if (savedLanguage === "ko" || savedLanguage === "en") {
      language = savedLanguage;
    }
  } catch (error) {
    // Use English by default if storage is unavailable.
  }

  $("year").textContent = new Date().getFullYear();
  applyLanguage(language);
});
