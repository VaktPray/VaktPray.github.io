(function () {
  const STORAGE_KEY = "vaktpray-language";
  const DEFAULT_LANGUAGE = "en";
  const SUPPORTED_LANGUAGES = ["en", "bs"];

  const translations = {
    en: {
      meta: {
        homeTitle: "VaktPray",
        homeDescription: "VaktPray is an offline iOS app focused exclusively on Islamic prayer times for 🇧🇦 Bosnia and Herzegovina, with notifications, widgets, night-time information, and Apple Watch support.",
        privacyTitle: "Privacy Policy | VaktPray",
        privacyDescription: "Privacy policy for the VaktPray iOS app.",
        supportTitle: "Support | VaktPray",
        supportDescription: "Support contact information for the VaktPray iOS app."
      },
      common: {
        language: "Language",
        privacy: "Privacy",
        privacyPolicy: "Privacy Policy",
        support: "Support",
        showSupportEmail: "Show support email",
        showSupportEmailLower: "show support email"
      },
      home: {
        heroEyebrow: "Prayer times for iPhone",
        heroText: "An offline iOS app focused exclusively on Islamic prayer times for 🇧🇦 Bosnia and Herzegovina, with daily prayer notifications, widgets, night-time information, and Apple Watch support. No data collected.",
        detailsEyebrow: "App Details",
        detailsTitle: "Built for daily prayer time checks",
        offlineTitle: "Offline prayer data",
        offlineBody: "Prayer time data is included in the app, so no internet connection is required after installation.",
        remindersTitle: "Local reminders",
        remindersBody: "Prayer reminders are scheduled on your device through iOS notification settings.",
        widgetsTitle: "Widgets",
        widgetsBody: "Widgets use the app's private shared storage to display your selected city and prayer schedule.",
        watchTitle: "Apple Watch",
        watchBody: "Apple Watch support keeps prayer time information available from your wrist.",
        linksEyebrow: "App Store Links",
        linksTitle: "Public URLs",
        linksBody: "These pages are available for users and App Store review."
      },
      privacy: {
        eyebrow: "Privacy Policy",
        title: "VaktPray Privacy Policy",
        lede: "VaktPray is designed to provide prayer times without collecting personal data, using analytics, or tracking you.",
        updated: "Last updated: June 2, 2026",
        collectsTitle: "Information the app collects",
        collectsBody1: "VaktPray does not collect personal data from the app. It does not use analytics, advertising identifiers, tracking SDKs, or third-party advertising services.",
        collectsBody2: "Prayer time data is included in the app, so no internet connection is required after installation.",
        localTitle: "Information stored on your device",
        localBody1: "VaktPray stores app preferences locally on your device, including your selected city, language, notification settings, notification sound choices, and display preferences. Some preferences are stored in the app's private shared storage so VaktPray widgets can show the same settings.",
        localBody2: "These preferences are not sent to VaktPray. They remain on your device unless you change them, reset them, or delete the app.",
        locationTitle: "Location",
        locationBody: "VaktPray does not request precise device location. Prayer times are based on the city you select in the app.",
        notificationsTitle: "Notifications",
        notificationsBody: "Prayer reminders are scheduled locally on your device through Apple's notification system. Notification permission is controlled by iOS and can be changed at any time in the Settings app.",
        supportEmailTitle: "Support email",
        supportEmailBody: "If you email VaktPray support, your email address and the information you choose to include in your message are used only to respond to your request, bug report, or feedback.",
        choicesTitle: "Privacy choices",
        choicesBody: "Because VaktPray does not collect personal data from the app, there is no account data to access, export, or delete. You can remove locally stored app preferences by deleting the app from your device.",
        changesTitle: "Changes",
        changesBody: "If VaktPray's privacy practices change, this policy will be updated before those changes are released.",
        contactTitle: "Contact",
        contactBodyPrefix: "For privacy questions, support requests, bug reports, or feedback, email ",
        contactBodySuffix: "."
      },
      support: {
        eyebrow: "Support",
        title: "VaktPray Support",
        lede: "For support, bug reports, or feedback, contact VaktPray by email.",
        detailsEyebrow: "Contact Details",
        detailsTitle: "What to include",
        requestsTitle: "Support requests",
        requestsBody: "Include what happened, what you expected to happen, and whether the issue is repeatable.",
        bugsTitle: "Bug reports",
        bugsBody: "Include your iOS version, device model, selected city, notification setting, and app version if available.",
        privacyBody: "VaktPray does not collect personal data from the app, does not use analytics, and does not track you.",
        readPolicy: "Read the policy"
      }
    },
    bs: {
      meta: {
        homeTitle: "VaktPray",
        homeDescription: "VaktPray je offline iOS aplikacija namijenjena isključivo islamskim vremenima namaza u 🇧🇦 Bosni i Hercegovini, s obavijestima, widgetima, informacijama o noćnom vremenu i podrškom za Apple Watch.",
        privacyTitle: "Pravila privatnosti | VaktPray",
        privacyDescription: "Pravila privatnosti za VaktPray iOS aplikaciju.",
        supportTitle: "Podrška | VaktPray",
        supportDescription: "Kontakt informacije za podršku za VaktPray iOS aplikaciju."
      },
      common: {
        language: "Jezik",
        privacy: "Privatnost",
        privacyPolicy: "Pravila privatnosti",
        support: "Podrška",
        showSupportEmail: "Prikaži email podrške",
        showSupportEmailLower: "prikaži email podrške"
      },
      home: {
        heroEyebrow: "Vaktija za iPhone",
        heroText: "Offline iOS aplikacija namijenjena isključivo islamskim vremenima namaza u 🇧🇦 Bosni i Hercegovini, s obavijestima za dnevne namaze, widgetima, informacijama o noćnom vremenu i podrškom za Apple Watch. Podaci se ne prikupljaju.",
        detailsEyebrow: "Detalji aplikacije",
        detailsTitle: "Napravljena za svakodnevnu provjeru vakta",
        offlineTitle: "Offline vaktija",
        offlineBody: "Podaci o vremenima namaza uključeni su u aplikaciju, tako da nakon instalacije nije potrebna internet konekcija.",
        remindersTitle: "Lokalni podsjetnici",
        remindersBody: "Podsjetnici za namaz zakazuju se na vašem uređaju kroz iOS postavke obavijesti.",
        widgetsTitle: "Widgeti",
        widgetsBody: "Widgeti koriste privatnu zajedničku pohranu aplikacije za prikaz odabranog grada i rasporeda namaza.",
        watchTitle: "Apple Watch",
        watchBody: "Podrška za Apple Watch omogućava da informacije o vaktu budu dostupne na vašem zglobu.",
        linksEyebrow: "App Store linkovi",
        linksTitle: "Javni URL-ovi",
        linksBody: "Ove stranice su dostupne korisnicima i App Store pregledu."
      },
      privacy: {
        eyebrow: "Pravila privatnosti",
        title: "VaktPray pravila privatnosti",
        lede: "VaktPray je napravljen da pruža vremena namaza bez prikupljanja ličnih podataka, analitike ili praćenja.",
        updated: "Ažurirano: 2. juni 2026.",
        collectsTitle: "Podaci koje aplikacija prikuplja",
        collectsBody1: "VaktPray ne prikuplja lične podatke iz aplikacije. Ne koristi analitiku, reklamne identifikatore, SDK-ove za praćenje ili usluge oglašavanja trećih strana.",
        collectsBody2: "Podaci o vremenima namaza uključeni su u aplikaciju, tako da nakon instalacije nije potrebna internet konekcija.",
        localTitle: "Podaci pohranjeni na vašem uređaju",
        localBody1: "VaktPray lokalno pohranjuje postavke aplikacije na vašem uređaju, uključujući odabrani grad, jezik, postavke obavijesti, izbor zvuka obavijesti i postavke prikaza. Neke postavke se čuvaju u privatnoj zajedničkoj pohrani aplikacije kako bi VaktPray widgeti mogli prikazati iste postavke.",
        localBody2: "Ove postavke se ne šalju VaktPrayu. Ostaju na vašem uređaju osim ako ih promijenite, resetujete ili izbrišete aplikaciju.",
        locationTitle: "Lokacija",
        locationBody: "VaktPray ne traži preciznu lokaciju uređaja. Vremena namaza se zasnivaju na gradu koji odaberete u aplikaciji.",
        notificationsTitle: "Obavijesti",
        notificationsBody: "Podsjetnici za namaz zakazuju se lokalno na vašem uređaju kroz Appleov sistem obavijesti. Dozvolom za obavijesti upravlja iOS i može se promijeniti u bilo kojem trenutku u aplikaciji Postavke.",
        supportEmailTitle: "Email podrške",
        supportEmailBody: "Ako pošaljete email VaktPray podršci, vaša email adresa i informacije koje odlučite uključiti u poruku koriste se samo za odgovor na vaš zahtjev, prijavu greške ili povratnu informaciju.",
        choicesTitle: "Izbori privatnosti",
        choicesBody: "Budući da VaktPray ne prikuplja lične podatke iz aplikacije, nema podataka računa kojima se može pristupiti, koje se može izvesti ili izbrisati. Lokalno pohranjene postavke aplikacije možete ukloniti brisanjem aplikacije s uređaja.",
        changesTitle: "Promjene",
        changesBody: "Ako se prakse privatnosti VaktPraya promijene, ova pravila će biti ažurirana prije objave tih promjena.",
        contactTitle: "Kontakt",
        contactBodyPrefix: "Za pitanja o privatnosti, zahtjeve za podršku, prijave grešaka ili povratne informacije, pošaljite email: ",
        contactBodySuffix: "."
      },
      support: {
        eyebrow: "Podrška",
        title: "VaktPray podrška",
        lede: "Za podršku, prijave grešaka ili povratne informacije, kontaktirajte VaktPray putem emaila.",
        detailsEyebrow: "Kontakt detalji",
        detailsTitle: "Šta uključiti",
        requestsTitle: "Zahtjevi za podršku",
        requestsBody: "Uključite šta se desilo, šta ste očekivali da se desi i da li se problem može ponoviti.",
        bugsTitle: "Prijave grešaka",
        bugsBody: "Uključite verziju iOS-a, model uređaja, odabrani grad, postavku obavijesti i verziju aplikacije ako je dostupna.",
        privacyBody: "VaktPray ne prikuplja lične podatke iz aplikacije, ne koristi analitiku i ne prati vas.",
        readPolicy: "Pročitajte pravila"
      }
    }
  };

  function getNestedValue(language, key) {
    return key.split(".").reduce((value, part) => value && value[part], translations[language]);
  }

  function preferredLanguage() {
    const requested = new URLSearchParams(window.location.search).get("lang");
    if (SUPPORTED_LANGUAGES.includes(requested)) {
      return requested;
    }

    const saved = window.localStorage.getItem(STORAGE_KEY);
    if (SUPPORTED_LANGUAGES.includes(saved)) {
      return saved;
    }

    const browserLanguage = (navigator.language || "").toLowerCase();
    return browserLanguage.startsWith("bs") ? "bs" : DEFAULT_LANGUAGE;
  }

  function setLanguage(language) {
    const selectedLanguage = SUPPORTED_LANGUAGES.includes(language) ? language : DEFAULT_LANGUAGE;
    window.localStorage.setItem(STORAGE_KEY, selectedLanguage);
    document.documentElement.lang = selectedLanguage;

    document.querySelectorAll("[data-i18n]").forEach((element) => {
      const value = getNestedValue(selectedLanguage, element.dataset.i18n);
      if (value) {
        element.textContent = value;
      }
    });

    document.querySelectorAll("[data-i18n-aria-label]").forEach((element) => {
      const value = getNestedValue(selectedLanguage, element.dataset.i18nAriaLabel);
      if (value) {
        element.setAttribute("aria-label", value);
      }
    });

    const page = document.body.dataset.page;
    const pageTitle = getNestedValue(selectedLanguage, `meta.${page}Title`);
    const pageDescription = getNestedValue(selectedLanguage, `meta.${page}Description`);
    const description = document.querySelector('meta[name="description"]');

    if (pageTitle) {
      document.title = pageTitle;
    }

    if (description && pageDescription) {
      description.setAttribute("content", pageDescription);
    }

    const selector = document.getElementById("language-select");
    if (selector) {
      selector.value = selectedLanguage;
    }
  }

  const initialLanguage = preferredLanguage();
  setLanguage(initialLanguage);

  document.getElementById("language-select")?.addEventListener("change", (event) => {
    setLanguage(event.target.value);
  });
})();
