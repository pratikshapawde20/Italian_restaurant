
document.addEventListener("DOMContentLoaded", () => {
  const languageToggle = document.getElementById("languageToggle");
  const navToggle = document.getElementById("navToggle");
  const mainNav = document.getElementById("mainNav");
  const form = document.getElementById("reservationForm");
  const formMessage = document.getElementById("formMessage");
  const dateInput = document.getElementById("date");
  const backTop = document.getElementById("backTop");
  const year = document.getElementById("year");

  const translations = {
    en: {
      announcement: "A beautiful meal begins with a reservation.",
      navHome: "Home",
      navMenu: "Menu",
      navReservation: "Reservation",
      navAbout: "About Us",
      navContact: "Contact",
      heroEyebrow: "YOUR TABLE IS WAITING",
      heroTitle: 'Make room for<br><em>something wonderful.</em>',
      heroDescription: "A lovely meal, good company, and moments worth remembering. Let us know when you would like to visit.",
      startBooking: "Request a Reservation",
      formEyebrow: "LET'S PLAN YOUR VISIT",
      formTitle: 'A table for<br><em>your special moment.</em>',
      formDescription: "Tell us a little about your visit. Submit your request and the restaurant can follow up to confirm availability.",
      noteTitle: "A little note",
      noteText: "Your request is not a confirmed booking until the restaurant confirms it with you.",
      quote: "Good food tastes even better when shared with people you love.",
      cardEyebrow: "DEOKSU PASTA · SUNCHEON",
      cardTitle: "Reservation Request",
      nameLabel: "Your name *",
      namePlaceholder: "Enter your name",
      phoneLabel: "Phone number *",
      phonePlaceholder: "Enter your phone number",
      emailLabel: "Email address",
      emailPlaceholder: "you@example.com",
      guestsLabel: "Number of guests *",
      guest1: "1 guest",
      guest2: "2 guests",
      guest3: "3 guests",
      guest4: "4 guests",
      guest5: "5 guests",
      guest6: "6 guests",
      guest7: "7 guests",
      guest8: "8 guests",
      guestLarge: "9+ guests",
      dateLabel: "Preferred date *",
      timeLabel: "Preferred time *",
      timePlaceholder: "Choose a time",
      occasionLabel: "Occasion (optional)",
      occasionNone: "Just a meal together",
      occasionBirthday: "Birthday",
      occasionAnniversary: "Anniversary",
      occasionDate: "Date night",
      occasionFamily: "Family gathering",
      occasionBusiness: "Business meal",
      occasionOther: "Other",
      requestsLabel: "Special requests",
      requestsPlaceholder: "Allergies, seating preferences, or other notes...",
      consentText: "I agree that the restaurant may contact me about this reservation request. *",
      submitButton: "Review Reservation Request",
      formFootnote: "Please wait for the restaurant to confirm your requested date and time.",
      stepsEyebrow: "SIMPLE & THOUGHTFUL",
      stepsTitle: 'Your visit, <em>made easy.</em>',
      stepOneTitle: "Tell us your plans",
      stepOneText: "Choose your date, time, and number of guests.",
      stepTwoTitle: "Review your request",
      stepTwoText: "Check your contact details and any special notes.",
      stepThreeTitle: "Wait for confirmation",
      stepThreeText: "The restaurant must confirm availability before your booking is final.",
      closingEyebrow: "WE LOOK FORWARD TO WELCOMING YOU",
      closingTitle: '좋은 음식, <em>행복한 순간.</em>',
      closingText: "Thank you for choosing Deoksu Pasta Suncheon.",
      seeMenu: "Explore the Menu",
      footerMessage: "Good food brings us together.",
      footerNote: "Made with care. Shared with love.",
      summaryTitle: "Please review your reservation request",
      summaryName: "Name",
      summaryPhone: "Phone",
      summaryEmail: "Email",
      summaryGuests: "Guests",
      summaryDate: "Date",
      summaryTime: "Time",
      summaryOccasion: "Occasion",
      summaryRequests: "Special requests",
      summaryNone: "None provided",
      summaryNotice: "This request has not been sent to the restaurant. Copy the details and send them to the restaurant, or connect this form to its booking system.",
      copyButton: "Copy Request Details",
      copied: "Reservation details copied. You can now paste and send them to the restaurant.",
      copyFailed: "Automatic copying was unavailable. Please select and copy the details manually.",
      validationError: "Please check the required fields and enter a valid email address if provided.",
      dateError: "Please choose today or a future date.",
      guestLabel: "guests",
      timeSuffix: "",
      languageLabel: "Switch to Korean",
      mobileOpen: "Open navigation",
      mobileClose: "Close navigation",
      backTopLabel: "Back to top"
    },

    ko: {
      announcement: "아름다운 식사는 예약에서 시작됩니다.",
      navHome: "홈",
      navMenu: "메뉴",
      navReservation: "예약",
      navAbout: "소개",
      navContact: "문의",
      heroEyebrow: "여러분을 위한 자리가 기다리고 있습니다",
      heroTitle: '특별한 순간을<br><em>함께 만들어 보세요.</em>',
      heroDescription: "맛있는 식사와 좋은 사람들, 오래 기억될 순간. 방문을 원하시는 날짜와 시간을 알려주세요.",
      startBooking: "예약 요청하기",
      formEyebrow: "방문을 계획해 보세요",
      formTitle: '여러분의 특별한 순간을 위한<br><em>테이블.</em>',
      formDescription: "방문 정보를 입력해 주세요. 요청을 제출하면 레스토랑에서 예약 가능 여부를 확인할 수 있습니다.",
      noteTitle: "안내 사항",
      noteText: "레스토랑에서 예약을 확인해 드리기 전까지는 예약이 확정된 것이 아닙니다.",
      quote: "좋은 음식은 사랑하는 사람들과 함께할 때 더욱 맛있습니다.",
      cardEyebrow: "덕수파스타 · 순천",
      cardTitle: "예약 요청",
      nameLabel: "성함 *",
      namePlaceholder: "성함을 입력해 주세요",
      phoneLabel: "연락처 *",
      phonePlaceholder: "전화번호를 입력해 주세요",
      emailLabel: "이메일 주소",
      emailPlaceholder: "you@example.com",
      guestsLabel: "방문 인원 *",
      guest1: "1명",
      guest2: "2명",
      guest3: "3명",
      guest4: "4명",
      guest5: "5명",
      guest6: "6명",
      guest7: "7명",
      guest8: "8명",
      guestLarge: "9명 이상",
      dateLabel: "희망 날짜 *",
      timeLabel: "희망 시간 *",
      timePlaceholder: "시간을 선택해 주세요",
      occasionLabel: "방문 목적 (선택)",
      occasionNone: "일반 식사",
      occasionBirthday: "생일",
      occasionAnniversary: "기념일",
      occasionDate: "데이트",
      occasionFamily: "가족 모임",
      occasionBusiness: "비즈니스 식사",
      occasionOther: "기타",
      requestsLabel: "추가 요청 사항",
      requestsPlaceholder: "알레르기, 좌석 선호 사항 또는 기타 요청을 입력해 주세요...",
      consentText: "예약 요청과 관련하여 레스토랑이 연락하는 것에 동의합니다. *",
      submitButton: "예약 요청 내용 확인",
      formFootnote: "희망하시는 날짜와 시간의 예약 가능 여부를 레스토랑에서 확인해 드립니다.",
      stepsEyebrow: "간편하고 세심하게",
      stepsTitle: '방문 준비를 <em>간편하게.</em>',
      stepOneTitle: "방문 계획 입력",
      stepOneText: "날짜, 시간, 방문 인원을 선택해 주세요.",
      stepTwoTitle: "요청 내용 확인",
      stepTwoText: "연락처와 추가 요청 사항을 확인해 주세요.",
      stepThreeTitle: "예약 확인 기다리기",
      stepThreeText: "예약은 레스토랑에서 가능 여부를 확인한 후 확정됩니다.",
      closingEyebrow: "여러분을 만나 뵙기를 기대합니다",
      closingTitle: '좋은 음식, <em>행복한 순간.</em>',
      closingText: "덕수파스타 순천을 선택해 주셔서 감사합니다.",
      seeMenu: "메뉴 둘러보기",
      footerMessage: "좋은 음식은 우리를 이어줍니다.",
      footerNote: "정성으로 준비하고 사랑으로 나눕니다.",
      summaryTitle: "예약 요청 내용을 확인해 주세요",
      summaryName: "성함",
      summaryPhone: "연락처",
      summaryEmail: "이메일",
      summaryGuests: "방문 인원",
      summaryDate: "날짜",
      summaryTime: "시간",
      summaryOccasion: "방문 목적",
      summaryRequests: "추가 요청 사항",
      summaryNone: "입력 내용 없음",
      summaryNotice: "이 요청은 아직 레스토랑으로 전송되지 않았습니다. 내용을 복사하여 레스토랑에 보내거나 예약 시스템과 연결해 주세요.",
      copyButton: "예약 내용 복사하기",
      copied: "예약 내용이 복사되었습니다. 레스토랑에 붙여넣어 보내실 수 있습니다.",
      copyFailed: "자동 복사가 지원되지 않습니다. 내용을 직접 선택하여 복사해 주세요.",
      validationError: "필수 항목을 확인하고 이메일을 입력하셨다면 올바른 형식인지 확인해 주세요.",
      dateError: "오늘 또는 이후 날짜를 선택해 주세요.",
      guestLabel: "명",
      timeSuffix: "",
      languageLabel: "Switch to English",
      mobileOpen: "메뉴 열기",
      mobileClose: "메뉴 닫기",
      backTopLabel: "맨 위로"
    }
  };

  let language = "en";

  try {
    const saved = localStorage.getItem("deoksu-reservation-language");
    if (saved === "en" || saved === "ko") language = saved;
  } catch (error) {
    // Language switching remains available without local storage.
  }

  // Set the earliest permitted booking date to the user's local today.
  function localDateString(date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  }

  dateInput.min = localDateString(new Date());

  function translatePage() {
    const dictionary = translations[language];
    document.documentElement.lang = language;

    document.querySelectorAll("[data-i18n]").forEach((element) => {
      const key = element.dataset.i18n;
      if (Object.prototype.hasOwnProperty.call(dictionary, key)) {
        element.innerHTML = dictionary[key];
      }
    });

    document.querySelectorAll("[data-i18n-placeholder]").forEach((element) => {
      const key = element.dataset.i18nPlaceholder;
      if (Object.prototype.hasOwnProperty.call(dictionary, key)) {
        element.placeholder = dictionary[key];
      }
    });

    languageToggle.textContent = language === "en" ? "한국어" : "English";
    languageToggle.setAttribute("aria-label", dictionary.languageLabel);

    navToggle.setAttribute(
      "aria-label",
      mainNav.classList.contains("open") ? dictionary.mobileClose : dictionary.mobileOpen
    );

    backTop.setAttribute("aria-label", dictionary.backTopLabel);
  }

  languageToggle.addEventListener("click", () => {
    language = language === "en" ? "ko" : "en";

    try {
      localStorage.setItem("deoksu-reservation-language", language);
    } catch (error) {
      // The current page can still switch languages.
    }

    translatePage();

    // Refresh the displayed request summary in the selected language.
    if (formMessage.dataset.requestData) {
      showSummary(JSON.parse(formMessage.dataset.requestData));
    }
  });

  navToggle.addEventListener("click", () => {
    const isOpen = mainNav.classList.toggle("open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
    navToggle.setAttribute(
      "aria-label",
      isOpen ? translations[language].mobileClose : translations[language].mobileOpen
    );
  });

  mainNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      mainNav.classList.remove("open");
      navToggle.setAttribute("aria-expanded", "false");
      translatePage();
    });
  });

  function updateBackTop() {
    backTop.classList.toggle("visible", window.scrollY > 400);
  }

  window.addEventListener("scroll", updateBackTop, { passive: true });

  backTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  // Format the selected date without relying on a server.
  function displayDate(value) {
    if (!value) return "";
    const parts = value.split("-").map(Number);
    const date = new Date(parts[0], parts[1] - 1, parts[2]);

    return date.toLocaleDateString(
      language === "ko" ? "ko-KR" : "en-US",
      { year: "numeric", month: "long", day: "numeric" }
    );
  }

  function displayTime(value) {
    if (!value) return "";
    const [hours, minutes] = value.split(":").map(Number);

    if (language === "ko") {
      const period = hours < 12 ? "오전" : "오후";
      const hour12 = hours % 12 || 12;
      return `${period} ${hour12}:${String(minutes).padStart(2, "0")}`;
    }

    const period = hours < 12 ? "AM" : "PM";
    const hour12 = hours % 12 || 12;
    return `${hour12}:${String(minutes).padStart(2, "0")} ${period}`;
  }

  function selectedText(id) {
    const select = document.getElementById(id);
    return select.options[select.selectedIndex]?.text || "";
  }

  function escapeHTML(value) {
    return String(value).replace(/[&<>"']/g, (character) => ({
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;"
    })[character]);
  }

  function showSummary(data) {
    const dictionary = translations[language];
    const guestCount = data.guests === "9+"
      ? dictionary.guestLarge
      : `${data.guests} ${dictionary.guestLabel}`;

    const lines = [
      [dictionary.summaryName, data.name],
      [dictionary.summaryPhone, data.phone],
      [dictionary.summaryEmail, data.email || dictionary.summaryNone],
      [dictionary.summaryGuests, guestCount],
      [dictionary.summaryDate, displayDate(data.date)],
      [dictionary.summaryTime, displayTime(data.time)],
      [dictionary.summaryOccasion, data.occasion || dictionary.summaryNone],
      [dictionary.summaryRequests, data.requests || dictionary.summaryNone]
    ];

    const summaryText = [
      "덕수파스타 순천 / Deoksu Pasta Suncheon",
      dictionary.summaryTitle,
      ...lines.map(([label, value]) => `${label}: ${value}`),
      "",
      dictionary.summaryNotice
    ].join("\n");

    formMessage.dataset.requestData = JSON.stringify(data);

    formMessage.innerHTML = `
      <strong>${escapeHTML(dictionary.summaryTitle)}</strong>
      <div class="summary-details">
        ${lines.map(([label, value]) => `
          <p><strong>${escapeHTML(label)}:</strong> ${escapeHTML(value)}</p>
        `).join("")}
      </div>
      <p class="summary-notice">${escapeHTML(dictionary.summaryNotice)}</p>
      <button type="button" id="copyRequest" class="button button-submit">
        ${escapeHTML(dictionary.copyButton)}
      </button>
      <p id="copyStatus" aria-live="polite"></p>
    `;

    formMessage.hidden = false;

    document.getElementById("copyRequest").addEventListener("click", async () => {
      const status = document.getElementById("copyStatus");

      try {
        if (!navigator.clipboard || !navigator.clipboard.writeText) {
          throw new Error("Clipboard API unavailable");
        }

        await navigator.clipboard.writeText(summaryText);
        status.textContent = dictionary.copied;
      } catch (error) {
        status.textContent = dictionary.copyFailed;
      }
    });

    formMessage.scrollIntoView({ behavior: "smooth", block: "nearest" });
  }

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    formMessage.hidden = true;

    if (!form.checkValidity()) {
      form.reportValidity();
      formMessage.textContent = translations[language].validationError;
      formMessage.hidden = false;
      return;
    }

    const today = localDateString(new Date());

    if (dateInput.value < today) {
      formMessage.textContent = translations[language].dateError;
      formMessage.hidden = false;
      dateInput.focus();
      return;
    }

    const data = {
      name: document.getElementById("fullName").value.trim(),
      phone: document.getElementById("phone").value.trim(),
      email: document.getElementById("email").value.trim(),
      guests: document.getElementById("guests").value,
      date: dateInput.value,
      time: document.getElementById("time").value,
      occasion: selectedText("occasion"),
      requests: document.getElementById("requests").value.trim()
    };

    if (!data.name || !data.phone || !data.date || !data.time) {
      formMessage.textContent = translations[language].validationError;
      formMessage.hidden = false;
      return;
    }

    showSummary(data);
  });

  year.textContent = new Date().getFullYear();
  translatePage();
});
