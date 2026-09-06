// ============================================
// Translations - Tərcümə məlumatları
// ============================================
const translations = {
    az: {
        banner_text: "📲 Ən Ucuz və Mükəmməl Sərbəst İş Hazırlanması ➡️",
        install_app: "Tətbiqi Endir",
        ios_install_title: "UniFy Tətbiqini Quraşdır",
        ios_install_desc: "Safari-də <strong>Paylaş</strong> düyməsinə basın və <strong>\"Add to Home Screen\"</strong> seçin",
        ios_step1: "Aşağıdakı",
        ios_step1b: "Düyməsinə Basın",
        ios_step2: "Yuxarıdaki İkon Çıxmadığı halda Yanaşı 3 nöqtə Sonra Paylaş (daha fazla) Düyməsinə Basın",
        ios_step3: "\"Add to Home Screen\" Seçin",
        ios_step4: "\"Add və ya +\" Düyməsinə Basın",
        menu_semestr: "Semestr Balı",
        menu_uomg: "ÜOMG Hesablama",
        menu_kesr: "25% İmtahan (Kəsr Pulu)",
        menu_yas: "Yaş Hesablayıcı",
        menu_luget: "Lüğət",
        menu_melumat: "Məlumat",
        menu_links: "Sürətli Linklər",
        menu_about: "Haqqında",
        back_btn: "← Geri",
        semestr_title: "Semestr Balı Hesablama",
        seminar_label: "Seminar",
        seminar_count_label: "Seminar sayı (maksimum 9):",
        seminar_placeholder: "Məsələn: 6",
        kollekvium_label: "Kollekvium",
        kollekvium_count_label: "Kollekvium sayı (maksimum 4):",
        kollekvium_placeholder: "Məsələn: 2",
        serbest_label: "Sərbəst İş",
        serbest_score_label: "Sərbəst iş balı (0-10):",
        serbest_placeholder: "Məsələn: 8",
        davamiyyet_label: "Davamiyyət",
        fenn_saat_label: "Fənn saatı:",
        select_option: "Seçin",
        qayib_label: "Qayıb sayı:",
        qayib_placeholder: "Məsələn: 3",
        calculate_btn: "Hesabla",
        create_btn: "Yarat",
        uomg_title: "ÜOMG Hesablama",
        fenn_count_label: "Fənn sayı (maksimum 9):",
        fenn_placeholder: "Məsələn: 5",
        kesr_title: "25% İmtahan (Kəsr Pulu) Hesablama",
        illik_odenis_label: "İllik ödəniş (AZN):",
        illik_placeholder: "Məsələn: 2400",
        fenn_kredit_label: "Fənnin kredit sayı:",
        kredit_placeholder: "Məsələn: 5",
        yas_title: "Yaş Hesablayıcı",
        dogum_tarixi_label: "Doğum tarixi:",
        about_title: "Haqqında",
        about_p1: "Tətbiq tələbələrin akademik həyatına müsbət təsir göstərmək üçün yaradılıb.",
        about_p2: "İstifadəçilər tətbiqin daxilində olan alətlərdən istifadə edərək işlərinə yarayacaq məlumatlar əldə edə bilərlər.",
        about_p3: "Tətbiqə giriş etdikdə \"Yeni versiya mövcuddur\" bildirişi gəlirsə, yeniləməyiniz tövsiyə olunur.",
        about_p4: "(Heç bir şəkildə məlumatlarınız toplanmır.)",
        about_contact: "İş birliyi üçün:",
        about_contact_link: "WhatsApp ilə əlaqə saxlayın",
        about_designer: "Tətbiqin dizaynı və funksionallığı Nurxan tərəfindən hazırlanıb.",
        about_thanks: "Dəstək Üçün: Nəbiyeva Nuray, Rəhimov Riyad və TT2-Qrupuna Təşəkkür.",
        luget_title: "Akademik Lüğət",
        melumat_title: "Akademik Məlumat",
        links_title: "Sürətli Linklər",
        // Calc messages
        err_seminar_range: "Xahiş olunur 1-9 arası bir rəqəm daxil edin",
        err_kollekvium_range: "Xahiş olunur 1-4 arası bir rəqəm daxil edin",
        err_seminar_create: "Xahiş olunur seminar sayını daxil edib \"Yarat\" düyməsinə basın",
        err_kollekvium_create: "Xahiş olunur kollekvium sayını daxil edib \"Yarat\" düyməsinə basın",
        err_serbest_range: "Sərbəst iş balı 0-10 aralığında olmalıdır",
        err_davamiyyet: "Xahiş olunur fənn saatını seçin və qayıb sayını daxil edin",
        err_seminar_min: "Xahiş olunur ən azı bir seminar qiyməti daxil edin",
        err_kollekvium_min: "Xahiş olunur ən azı bir kollekvium qiyməti daxil edin",
        err_fenn_create: "Xahiş olunur fənn sayını daxil edib \"Yarat\" düyməsinə basın",
        err_fenn_data: "Fənn {n} üçün düzgün məlumat daxil edin",
        err_illik: "Xahiş olunur düzgün illik ödəniş daxil edin",
        err_kredit: "Xahiş olunur düzgün kredit sayı daxil edin",
        err_dogum: "Xahiş olunur doğum tarixini seçin",
        err_fenn_range: "Xahiş olunur 1-9 arası bir rəqəm daxil edin",
        // Result labels
        res_kesr_davamiyyet: "KƏSR - DAVAMIYYƏT",
        res_kesr: "KƏSR",
        res_davamiyyet_warning: "⚠️ Davamiyyət limiti keçildi",
        res_fenn_saat: "Seçilən Fənn Saatı:",
        res_qayib: "Qayıb Sayı:",
        res_davamiyyet_bal: "Davamiyyət Balı:",
        res_davamiyyet_kesr_note: "Davamiyyət kəsr olduqda digər balların əhəmiyyəti yoxdur",
        res_seminar_kollekvium: "Seminar və Kollekvium:",
        res_serbest: "Sərbəst İş:",
        res_davamiyyet: "Davamiyyət:",
        res_seminar_orta: "Seminar Ortalaması:",
        res_kollekvium_orta: "Kollekvium Ortalaması:",
        res_toplam: "Toplam Bal × Kredit:",
        res_kredit: "Toplam Kredit:",
        res_imtahan_haqqi: "25% İmtahan Haqqı",
        res_illik: "İllik Ödəniş:",
        res_kredit_sayi: "Kredit Sayı:",
        res_yas_info: "Yaş Məlumatları",
        res_yas: "Yaşınız:",
        res_gun: "Yaşadığınız günlər:",
        res_novbeti: "Növbəti ad gününə:",
        res_saat: "saat",
        res_qayib_unit: "qayıb",
        res_yas_unit: "yaş",
        res_gun_unit: "gün",
        seminar_input_label: "Seminar {n} qiyməti (0-10):",
        kollekvium_input_label: "Kollekvium {n} qiyməti (0-10):",
        fenn_input_label: "Fənn {n}",
        bal_label: "Bal (maksimum 100):",
        kredit_label: "Kredit:",
        msg_excellent: "🎉 MÜVƏFFƏQİYYƏTLƏ KEÇDİNİZ! ✅",
        msg_very_good: "🔥 ÇOX YAXŞI 📊",
        msg_good: "💣 YAXŞI 📈",
        msg_kafi: "🫂 KAFİ 📉",
        msg_zeif: "🎭 ZƏİF 📴",
        msg_zero: "0 BAL",
        msg_try: "🗿 YAXŞI OLACAQ 🆒",
        new_version: "Yeni versiya mövcuddur. Yeniləmək istəyirsiniz?",
        // WhatsApp greeting
        wa_greeting: "Salam! Mənə sərbəst iş haqqında məlumat verin.",
        // Link texts
        link_bdu_web: "Bakı Dövlət Universitetinin Rəsmi Web Saytı",
        link_bdu_student: "Bakı Dövlət Universitetinin Tələbə Akademik Web Saytı (SemsLogin)",
        link_whatsapp_group: "Məlumat Qrupu (WhatsApp)",
        link_bdu_whatsapp: "Bakı Dövlət Universitetinin WhatsApp Kanalı",
        link_bdu_instagram: "Bakı Dövlət Universitetinin Instagramı",
        link_owner_instagram: "Tətbiq Sahibinin Instagramı",
    },
    ru: {
        banner_text: "📲 Самая Дешёвая и Идеальная Подготовка Самостоятельных Работ ➡️",
        install_app: "Установить приложение",
        ios_install_title: "Установить приложение UniFy",
        ios_install_desc: "В Safari нажмите кнопку <strong>Поделиться</strong> и выберите <strong>\"Добавить на главный экран\"</strong>",
        ios_step1: "Нажмите кнопку",
        ios_step1b: "ниже",
        ios_step2: "Если иконка не появилась, нажмите 3 точки, затем Поделиться (ещё)",
        ios_step3: "Выберите \"Добавить на главный экран\"",
        ios_step4: "Нажмите \"Добавить\" или \"+\"",
        menu_semestr: "Семестровый Балл",
        menu_uomg: "Расчёт ÜOMG",
        menu_kesr: "25% Экзамен (Кəср)",
        menu_yas: "Калькулятор Возраста",
        menu_luget: "Словарь",
        menu_melumat: "Информация",
        menu_links: "Быстрые Ссылки",
        menu_about: "О Приложении",
        back_btn: "← Назад",
        semestr_title: "Расчёт Семестрового Балла",
        seminar_label: "Семинар",
        seminar_count_label: "Количество семинаров (макс. 9):",
        seminar_placeholder: "Например: 6",
        kollekvium_label: "Коллоквиум",
        kollekvium_count_label: "Количество коллоквиумов (макс. 4):",
        kollekvium_placeholder: "Например: 2",
        serbest_label: "Самостоятельная Работа",
        serbest_score_label: "Балл самостоятельной работы (0-10):",
        serbest_placeholder: "Например: 8",
        davamiyyet_label: "Посещаемость",
        fenn_saat_label: "Часов предмета:",
        select_option: "Выберите",
        qayib_label: "Количество пропусков:",
        qayib_placeholder: "Например: 3",
        calculate_btn: "Рассчитать",
        create_btn: "Создать",
        uomg_title: "Расчёт ÜOMG",
        fenn_count_label: "Количество предметов (макс. 9):",
        fenn_placeholder: "Например: 5",
        kesr_title: "Расчёт 25% Экзаменационного Взноса",
        illik_odenis_label: "Годовая оплата (AZN):",
        illik_placeholder: "Например: 2400",
        fenn_kredit_label: "Кредиты предмета:",
        kredit_placeholder: "Например: 5",
        yas_title: "Калькулятор Возраста",
        dogum_tarixi_label: "Дата рождения:",
        about_title: "О Приложении",
        about_p1: "Приложение создано для положительного влияния на академическую жизнь студентов.",
        about_p2: "Пользователи могут получать необходимую информацию с помощью инструментов приложения.",
        about_p3: "Если при входе появляется уведомление \"Доступна новая версия\", рекомендуется обновиться.",
        about_p4: "(Ваши данные никоим образом не собираются.)",
        about_contact: "Для сотрудничества:",
        about_contact_link: "Связаться через WhatsApp",
        about_designer: "Дизайн и функциональность приложения разработаны Нурханом.",
        about_thanks: "Благодарим: Набиеву Нурай, Рахимова Рияда и Группу ТТ2.",
        luget_title: "Академический Словарь",
        melumat_title: "Академическая Информация",
        links_title: "Быстрые Ссылки",
        err_seminar_range: "Пожалуйста, введите число от 1 до 9",
        err_kollekvium_range: "Пожалуйста, введите число от 1 до 4",
        err_seminar_create: "Пожалуйста, введите количество семинаров и нажмите \"Создать\"",
        err_kollekvium_create: "Пожалуйста, введите количество коллоквиумов и нажмите \"Создать\"",
        err_serbest_range: "Балл самостоятельной работы должен быть от 0 до 10",
        err_davamiyyet: "Пожалуйста, выберите часы предмета и введите количество пропусков",
        err_seminar_min: "Пожалуйста, введите хотя бы одну оценку за семинар",
        err_kollekvium_min: "Пожалуйста, введите хотя бы одну оценку за коллоквиум",
        err_fenn_create: "Пожалуйста, введите количество предметов и нажмите \"Создать\"",
        err_fenn_data: "Введите корректные данные для предмета {n}",
        err_illik: "Пожалуйста, введите корректную годовую оплату",
        err_kredit: "Пожалуйста, введите корректное количество кредитов",
        err_dogum: "Пожалуйста, выберите дату рождения",
        err_fenn_range: "Пожалуйста, введите число от 1 до 9",
        res_kesr_davamiyyet: "ОТЧИСЛЕН - ПОСЕЩАЕМОСТЬ",
        res_kesr: "ОТЧИСЛЕН",
        res_davamiyyet_warning: "⚠️ Превышен лимит посещаемости",
        res_fenn_saat: "Выбранные часы предмета:",
        res_qayib: "Количество пропусков:",
        res_davamiyyet_bal: "Балл посещаемости:",
        res_davamiyyet_kesr_note: "Когда посещаемость недостаточна, другие баллы не имеют значения",
        res_seminar_kollekvium: "Семинар и Коллоквиум:",
        res_serbest: "Самостоятельная работа:",
        res_davamiyyet: "Посещаемость:",
        res_seminar_orta: "Среднее за семинары:",
        res_kollekvium_orta: "Среднее за коллоквиумы:",
        res_toplam: "Сумма Балл × Кредит:",
        res_kredit: "Итого Кредиты:",
        res_imtahan_haqqi: "25% Экзаменационный Взнос",
        res_illik: "Годовая Оплата:",
        res_kredit_sayi: "Количество Кредитов:",
        res_yas_info: "Информация о Возрасте",
        res_yas: "Ваш возраст:",
        res_gun: "Дней прожито:",
        res_novbeti: "До следующего дня рождения:",
        res_saat: "часов",
        res_qayib_unit: "пропусков",
        res_yas_unit: "лет",
        res_gun_unit: "дней",
        seminar_input_label: "Оценка за семинар {n} (0-10):",
        kollekvium_input_label: "Оценка за коллоквиум {n} (0-10):",
        fenn_input_label: "Предмет {n}",
        bal_label: "Балл (макс. 100):",
        kredit_label: "Кредит:",
        msg_excellent: "🎉 ОТЛИЧНО! ✅",
        msg_very_good: "🔥 ОЧЕНЬ ХОРОШО 📊",
        msg_good: "💣 ХОРОШО 📈",
        msg_kafi: "🫂 УДОВЛЕТВОРИТЕЛЬНО 📉",
        msg_zeif: "🎭 СЛАБО 📴",
        msg_zero: "0 БАЛЛОВ",
        msg_try: "🗿 ПОЛУЧИТСЯ 🆒",
        new_version: "Доступна новая версия. Хотите обновить?",
        wa_greeting: "Здравствуйте! Дайте мне информацию о самостоятельной работе.",
        link_bdu_web: "Официальный сайт Бакинского государственного университета",
        link_bdu_student: "Академический сайт студентов БГУ (SemsLogin)",
        link_whatsapp_group: "Информационная Группа (WhatsApp)",
        link_bdu_whatsapp: "WhatsApp канал Бакинского государственного университета",
        link_bdu_instagram: "Instagram Бакинского государственного университета",
        link_owner_instagram: "Instagram владельца приложения",
    },
    en: {
        banner_text: "📲 Cheapest and Perfect Independent Study Preparation ➡️",
        install_app: "Install App",
        ios_install_title: "Install UniFy App",
        ios_install_desc: "In Safari, tap the <strong>Share</strong> button and select <strong>\"Add to Home Screen\"</strong>",
        ios_step1: "Tap the button",
        ios_step1b: "below",
        ios_step2: "If the icon doesn't appear, tap 3 dots then Share (more)",
        ios_step3: "Select \"Add to Home Screen\"",
        ios_step4: "Tap \"Add or +\"",
        menu_semestr: "Semester Score",
        menu_uomg: "GPA Calculator",
        menu_kesr: "25% Exam Fee",
        menu_yas: "Age Calculator",
        menu_luget: "Dictionary",
        menu_melumat: "Information",
        menu_links: "Quick Links",
        menu_about: "About",
        back_btn: "← Back",
        semestr_title: "Semester Score Calculator",
        seminar_label: "Seminar",
        seminar_count_label: "Number of seminars (max 9):",
        seminar_placeholder: "Example: 6",
        kollekvium_label: "Colloquium",
        kollekvium_count_label: "Number of colloquiums (max 4):",
        kollekvium_placeholder: "Example: 2",
        serbest_label: "Independent Study",
        serbest_score_label: "Independent study score (0-10):",
        serbest_placeholder: "Example: 8",
        davamiyyet_label: "Attendance",
        fenn_saat_label: "Subject hours:",
        select_option: "Select",
        qayib_label: "Number of absences:",
        qayib_placeholder: "Example: 3",
        calculate_btn: "Calculate",
        create_btn: "Create",
        uomg_title: "GPA Calculator",
        fenn_count_label: "Number of subjects (max 9):",
        fenn_placeholder: "Example: 5",
        kesr_title: "25% Exam Fee Calculator",
        illik_odenis_label: "Annual tuition (AZN):",
        illik_placeholder: "Example: 2400",
        fenn_kredit_label: "Subject credits:",
        kredit_placeholder: "Example: 5",
        yas_title: "Age Calculator",
        dogum_tarixi_label: "Date of birth:",
        about_title: "About",
        about_p1: "The app was created to positively impact students' academic lives.",
        about_p2: "Users can obtain useful information using the tools within the app.",
        about_p3: "If you see a \"New version available\" notification upon entry, it is recommended to update.",
        about_p4: "(Your data is not collected in any way.)",
        about_contact: "For cooperation:",
        about_contact_link: "Contact via WhatsApp",
        about_designer: "The app's design and functionality were developed by Nurxan.",
        about_thanks: "Thanks to: Nabiyeva Nuray, Rahimov Riyad and TT2 Group.",
        luget_title: "Academic Dictionary",
        melumat_title: "Academic Information",
        links_title: "Quick Links",
        err_seminar_range: "Please enter a number between 1 and 9",
        err_kollekvium_range: "Please enter a number between 1 and 4",
        err_seminar_create: "Please enter the number of seminars and click \"Create\"",
        err_kollekvium_create: "Please enter the number of colloquiums and click \"Create\"",
        err_serbest_range: "Independent study score must be between 0 and 10",
        err_davamiyyet: "Please select subject hours and enter the number of absences",
        err_seminar_min: "Please enter at least one seminar score",
        err_kollekvium_min: "Please enter at least one colloquium score",
        err_fenn_create: "Please enter the number of subjects and click \"Create\"",
        err_fenn_data: "Please enter valid data for subject {n}",
        err_illik: "Please enter a valid annual tuition",
        err_kredit: "Please enter a valid number of credits",
        err_dogum: "Please select a date of birth",
        err_fenn_range: "Please enter a number between 1 and 9",
        res_kesr_davamiyyet: "FAILED - ATTENDANCE",
        res_kesr: "FAILED",
        res_davamiyyet_warning: "⚠️ Attendance limit exceeded",
        res_fenn_saat: "Selected Subject Hours:",
        res_qayib: "Number of Absences:",
        res_davamiyyet_bal: "Attendance Score:",
        res_davamiyyet_kesr_note: "When attendance is insufficient, other scores do not matter",
        res_seminar_kollekvium: "Seminar and Colloquium:",
        res_serbest: "Independent Study:",
        res_davamiyyet: "Attendance:",
        res_seminar_orta: "Seminar Average:",
        res_kollekvium_orta: "Colloquium Average:",
        res_toplam: "Total Score × Credit:",
        res_kredit: "Total Credits:",
        res_imtahan_haqqi: "25% Exam Fee",
        res_illik: "Annual Tuition:",
        res_kredit_sayi: "Credit Count:",
        res_yas_info: "Age Information",
        res_yas: "Your age:",
        res_gun: "Days lived:",
        res_novbeti: "Until next birthday:",
        res_saat: "hours",
        res_qayib_unit: "absences",
        res_yas_unit: "years",
        res_gun_unit: "days",
        seminar_input_label: "Seminar {n} score (0-10):",
        kollekvium_input_label: "Colloquium {n} score (0-10):",
        fenn_input_label: "Subject {n}",
        bal_label: "Score (max 100):",
        kredit_label: "Credit:",
        msg_excellent: "🎉 EXCELLENT! ✅",
        msg_very_good: "🔥 VERY GOOD 📊",
        msg_good: "💣 GOOD 📈",
        msg_kafi: "🫂 SATISFACTORY 📉",
        msg_zeif: "🎭 WEAK 📴",
        msg_zero: "0 SCORE",
        msg_try: "🗿 YOU'LL DO BETTER 🆒",
        new_version: "New version available. Would you like to update?",
        wa_greeting: "Hello! Please give me information about the independent study.",
        link_bdu_web: "Official Website of Baku State University",
        link_bdu_student: "BSU Student Academic Website (SemsLogin)",
        link_whatsapp_group: "Information Group (WhatsApp)",
        link_bdu_whatsapp: "Baku State University WhatsApp Channel",
        link_bdu_instagram: "Baku State University Instagram",
        link_owner_instagram: "App Owner's Instagram",
    }
};

// Current language
let currentLang = localStorage.getItem('unify_lang') || 'az';

// Translation helper
function t(key) {
    return (translations[currentLang] && translations[currentLang][key])
        ? translations[currentLang][key]
        : (translations['az'][key] || key);
}

// Set Language
function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('unify_lang', lang);

    // Update active button
    document.querySelectorAll('.lang-btn').forEach(btn => btn.classList.remove('active'));
    const activeBtn = document.getElementById('lang-' + lang);
    if (activeBtn) activeBtn.classList.add('active');

    // Translate all elements with data-i18n
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        el.innerHTML = t(key);
    });

    // Translate placeholders
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        el.placeholder = t(key);
    });

    // Translate fenn-saat select first option
    const selectEl = document.getElementById('fenn-saat');
    if (selectEl && selectEl.options[0]) {
        selectEl.options[0].textContent = t('select_option');
    }

    // Update WhatsApp banner link with language-specific greeting
    updateWhatsAppLink();

    // Re-render dynamic lists
    renderDictionaryList();
    renderInfoList();
    renderLinksList();
}

// WhatsApp link with auto greeting message
function updateWhatsAppLink() {
    const waLink = document.querySelector('.whatsapp-btn');
    if (waLink) {
        const greeting = encodeURIComponent(t('wa_greeting'));
        waLink.href = 'https://wa.me/994778000983?text=' + greeting;
    }
}

// ============================================
// Dark / Light Mode Toggle
// ============================================
function toggleTheme() {
    const body = document.body;
    const isDark = body.classList.toggle('dark-mode');
    localStorage.setItem('unify_theme', isDark ? 'dark' : 'light');
    updateThemeIcon(isDark);
}

function updateThemeIcon(isDark) {
    const icon = document.getElementById('toggle-icon');
    if (icon) {
        icon.textContent = isDark ? '🌙' : '☀️';
    }
}

function initTheme() {
    const saved = localStorage.getItem('unify_theme');
    if (saved === 'dark') {
        document.body.classList.add('dark-mode');
        updateThemeIcon(true);
    } else {
        updateThemeIcon(false);
    }
}

// ============================================
// Səhifə Naviqasiyası
// ============================================
let lastScrollPosition = 0;

function showPage(pageId) {
    const pages = document.querySelectorAll('.page');

    if (pageId === 'home-page') {
        pages.forEach(page => page.classList.remove('active'));
        document.getElementById(pageId).classList.add('active');
        setTimeout(() => { window.scrollTo(0, lastScrollPosition); }, 10);
    } else {
        lastScrollPosition = window.scrollY || window.pageYOffset;
        pages.forEach(page => page.classList.remove('active'));
        document.getElementById(pageId).classList.add('active');
        window.scrollTo(0, 0);
    }
}

// ============================================
// Semestr Balı Hesablama
// ============================================
function generateSeminarInputs() {
    const count = parseInt(document.getElementById('seminar-count').value);
    const container = document.getElementById('seminar-inputs');

    if (!count || count < 1 || count > 9) {
        alert(t('err_seminar_range'));
        return;
    }

    container.innerHTML = '';
    for (let i = 1; i <= count; i++) {
        container.innerHTML += `
            <div class="dynamic-input">
                <label>${t('seminar_input_label').replace('{n}', i)}</label>
                <input type="number" class="seminar-input" min="0" max="10" step="0.1" placeholder="0" required>
            </div>
        `;
    }
}

function generateKollekviumInputs() {
    const count = parseInt(document.getElementById('kollekvium-count').value);
    const container = document.getElementById('kollekvium-inputs');

    if (!count || count < 1 || count > 4) {
        alert(t('err_kollekvium_range'));
        return;
    }

    container.innerHTML = '';
    for (let i = 1; i <= count; i++) {
        container.innerHTML += `
            <div class="dynamic-input">
                <label>${t('kollekvium_input_label').replace('{n}', i)}</label>
                <input type="number" class="kollekvium-input" min="0" max="10" step="0.1" placeholder="0" required>
            </div>
        `;
    }
}

function hesablaDavamiyyet(saat, qayib) {
    const rules = {
        30:  { 0:10, 1:9, 2:9, 3:8, 4:0 },
        45:  { 0:10, 1:10, 2:9, 3:9, 4:8, 5:8, 6:0 },
        60:  { 0:10, 1:10, 2:9, 3:9, 4:9, 5:8, 6:8, 7:8, 8:0 },
        75:  { 0:10, 1:10, 2:9, 3:9, 4:9, 5:9, 6:8, 7:8, 8:8, 9:8, 10:0 },
        90:  { 0:10, 1:10, 2:10, 3:9, 4:9, 5:9, 6:9, 7:8, 8:8, 9:8, 10:8, 11:8, 12:0 },
        105: { 0:10, 1:10, 2:10, 3:9, 4:9, 5:9, 6:9, 7:9, 8:8, 9:8, 10:8, 11:8, 12:8, 13:8, 14:0 }
    };

    if (rules[saat] && rules[saat][qayib] !== undefined) return rules[saat][qayib];
    return 0;
}

function hesablaSemestr() {
    const seminarInputs = document.querySelectorAll('.seminar-input');
    const kollekviumInputs = document.querySelectorAll('.kollekvium-input');
    const serbestIs = parseFloat(document.getElementById('serbest-is').value) || 0;
    const fennSaat = parseInt(document.getElementById('fenn-saat').value);
    const qayibSayi = parseInt(document.getElementById('qayib-sayi').value);

    if (seminarInputs.length === 0) { alert(t('err_seminar_create')); return; }
    if (kollekviumInputs.length === 0) { alert(t('err_kollekvium_create')); return; }
    if (serbestIs < 0 || serbestIs > 10) { alert(t('err_serbest_range')); return; }
    if (!fennSaat || qayibSayi === undefined || qayibSayi === null || qayibSayi < 0) {
        alert(t('err_davamiyyet')); return;
    }

    let seminarSum = 0, validSeminarCount = 0;
    seminarInputs.forEach(input => {
        const val = parseFloat(input.value);
        if (!isNaN(val) && val >= 0 && val <= 10) { seminarSum += val; validSeminarCount++; }
    });
    if (validSeminarCount === 0) { alert(t('err_seminar_min')); return; }
    const seminarOrta = seminarSum / validSeminarCount;

    let kollekviumSum = 0, validKollekviumCount = 0;
    kollekviumInputs.forEach(input => {
        const val = parseFloat(input.value);
        if (!isNaN(val) && val >= 0 && val <= 10) { kollekviumSum += val; validKollekviumCount++; }
    });
    if (validKollekviumCount === 0) { alert(t('err_kollekvium_min')); return; }
    const kollekviumOrta = kollekviumSum / validKollekviumCount;

    const davamiyyetBali = hesablaDavamiyyet(fennSaat, qayibSayi);

    if (davamiyyetBali === 0) {
        const resultBox = document.getElementById('semestr-result');
        resultBox.className = 'result-box show danger';
        resultBox.innerHTML = `
            <div class="result-title">${t('res_kesr_davamiyyet')}</div>
            <div class="result-score" style="font-size:36px;">${t('res_kesr')}</div>
            <div class="result-stats">
                <div class="stat-item" style="background:rgba(255,255,255,0.2);padding:15px;border-radius:8px;margin-bottom:10px;">
                    <span class="stat-label" style="display:block;text-align:center;font-size:18px;">${t('res_davamiyyet_warning')}</span>
                </div>
                <div class="stat-item">
                    <span class="stat-label">${t('res_fenn_saat')}</span>
                    <span class="stat-value">${fennSaat} ${t('res_saat')}</span>
                </div>
                <div class="stat-item">
                    <span class="stat-label">${t('res_qayib')}</span>
                    <span class="stat-value">${qayibSayi} ${t('res_qayib_unit')}</span>
                </div>
                <div class="stat-item">
                    <span class="stat-label">${t('res_davamiyyet_bal')}</span>
                    <span class="stat-value">0 / 10 (${t('res_kesr')})</span>
                </div>
                <div class="stat-item" style="border-top:2px solid rgba(255,255,255,0.3);padding-top:10px;margin-top:10px;">
                    <span class="stat-label">${t('res_seminar_orta')}</span>
                    <span class="stat-value">${seminarOrta.toFixed(2)} / 10</span>
                </div>
                <div class="stat-item">
                    <span class="stat-label">${t('res_kollekvium_orta')}</span>
                    <span class="stat-value">${kollekviumOrta.toFixed(2)} / 10</span>
                </div>
                <div class="stat-item">
                    <span class="stat-label">${t('res_serbest')}</span>
                    <span class="stat-value">${serbestIs.toFixed(2)} / 10</span>
                </div>
                <div class="stat-item" style="background:rgba(255,255,255,0.2);padding:10px;border-radius:8px;margin-top:10px;">
                    <span class="stat-label" style="display:block;text-align:center;font-size:14px;font-style:italic;">${t('res_davamiyyet_kesr_note')}</span>
                </div>
            </div>
        `;
        return;
    }

    const seminarKollekviumBali = (seminarOrta * 0.4 + kollekviumOrta * 0.6) * 3;
    let umumiBal = seminarKollekviumBali + davamiyyetBali + serbestIs;
    if (umumiBal > 50) umumiBal = 50;

    let message = '', resultClass = '';
    if (umumiBal === 0) { message = t('msg_zero'); resultClass = 'danger'; }
    else if (umumiBal >= 50) { message = t('msg_excellent'); resultClass = 'success'; }
    else if (umumiBal >= 45) { message = t('msg_very_good'); resultClass = 'success'; }
    else if (umumiBal >= 41) { message = t('msg_good'); resultClass = 'info'; }
    else if (umumiBal >= 36) { message = t('msg_kafi'); resultClass = 'warning'; }
    else if (umumiBal >= 26) { message = t('msg_zeif'); resultClass = 'warning'; }
    else { message = t('msg_try'); resultClass = 'danger'; }

    const resultBox = document.getElementById('semestr-result');
    resultBox.className = `result-box show ${resultClass}`;
    resultBox.innerHTML = `
        <div class="result-title">${message}</div>
        <div class="result-score">${umumiBal.toFixed(2)} / 50</div>
        <div class="result-stats">
            <div class="stat-item">
                <span class="stat-label">${t('res_seminar_kollekvium')}</span>
                <span class="stat-value">${seminarKollekviumBali.toFixed(2)} / 30</span>
            </div>
            <div class="stat-item">
                <span class="stat-label">${t('res_serbest')}</span>
                <span class="stat-value">${serbestIs.toFixed(2)} / 10</span>
            </div>
            <div class="stat-item">
                <span class="stat-label">${t('res_davamiyyet')}</span>
                <span class="stat-value">${davamiyyetBali.toFixed(2)} / 10</span>
            </div>
            <div class="stat-item">
                <span class="stat-label">${t('res_seminar_orta')}</span>
                <span class="stat-value">${seminarOrta.toFixed(2)} / 10</span>
            </div>
            <div class="stat-item">
                <span class="stat-label">${t('res_kollekvium_orta')}</span>
                <span class="stat-value">${kollekviumOrta.toFixed(2)} / 10</span>
            </div>
        </div>
    `;
}

// ============================================
// ÜOMG Hesablama
// ============================================
function generateFennInputs() {
    const count = parseInt(document.getElementById('fenn-count').value);
    const container = document.getElementById('fenn-inputs');

    if (!count || count < 1 || count > 9) {
        alert(t('err_fenn_range'));
        return;
    }

    container.innerHTML = '';
    for (let i = 1; i <= count; i++) {
        container.innerHTML += `
            <div class="form-section">
                <h3>${t('fenn_input_label').replace('{n}', i)}</h3>
                <div class="input-group">
                    <label>${t('bal_label')}</label>
                    <input type="number" class="fenn-bal" min="0" max="100" step="0.1" placeholder="0" required>
                </div>
                <div class="input-group">
                    <label>${t('kredit_label')}</label>
                    <input type="number" class="fenn-kredit" min="1" placeholder="0" required>
                </div>
            </div>
        `;
    }
}

function hesablaUOMG() {
    const balInputs = document.querySelectorAll('.fenn-bal');
    const kreditInputs = document.querySelectorAll('.fenn-kredit');

    if (balInputs.length === 0) { alert(t('err_fenn_create')); return; }

    let toplam = 0, kreditToplam = 0;
    for (let i = 0; i < balInputs.length; i++) {
        const bal = parseFloat(balInputs[i].value);
        const kredit = parseFloat(kreditInputs[i].value);
        if (isNaN(bal) || isNaN(kredit) || bal < 0 || bal > 100 || kredit < 1) {
            alert(t('err_fenn_data').replace('{n}', i + 1));
            return;
        }
        toplam += bal * kredit;
        kreditToplam += kredit;
    }

    const uomg = toplam / kreditToplam;
    let message = '', resultClass = '';
    if (uomg === 0) { message = t('msg_zero'); resultClass = 'danger'; }
    else if (uomg >= 91) { message = t('msg_excellent'); resultClass = 'success'; }
    else if (uomg >= 81) { message = t('msg_very_good'); resultClass = 'success'; }
    else if (uomg >= 71) { message = t('msg_good'); resultClass = 'info'; }
    else if (uomg >= 61) { message = t('msg_kafi'); resultClass = 'warning'; }
    else if (uomg >= 51) { message = t('msg_zeif'); resultClass = 'warning'; }
    else { message = t('msg_try'); resultClass = 'danger'; }

    const resultBox = document.getElementById('uomg-result');
    resultBox.className = `result-box show ${resultClass}`;
    resultBox.innerHTML = `
        <div class="result-title">${message}</div>
        <div class="result-score">${uomg.toFixed(2)} / 100</div>
        <div class="result-stats">
            <div class="stat-item">
                <span class="stat-label">${t('res_toplam')}</span>
                <span class="stat-value">${toplam.toFixed(2)}</span>
            </div>
            <div class="stat-item">
                <span class="stat-label">${t('res_kredit')}</span>
                <span class="stat-value">${kreditToplam}</span>
            </div>
        </div>
    `;
}

// ============================================
// Kəsr Pulu Hesablama
// ============================================
function hesablaKesr() {
    const illikOdenis = parseFloat(document.getElementById('illik-odenis').value);
    const fennKredit = parseFloat(document.getElementById('fenn-kredit').value);

    if (!illikOdenis || illikOdenis < 0) { alert(t('err_illik')); return; }
    if (!fennKredit || fennKredit < 1) { alert(t('err_kredit')); return; }

    const result = ((illikOdenis / 60) * fennKredit) / 4 + 1;

    const resultBox = document.getElementById('kesr-result');
    resultBox.className = 'result-box show info';
    resultBox.innerHTML = `
        <div class="result-title">${t('res_imtahan_haqqi')}</div>
        <div class="result-score">${result.toFixed(2)} AZN</div>
        <div class="result-stats">
            <div class="stat-item">
                <span class="stat-label">${t('res_illik')}</span>
                <span class="stat-value">${illikOdenis.toFixed(2)} AZN</span>
            </div>
            <div class="stat-item">
                <span class="stat-label">${t('res_kredit_sayi')}</span>
                <span class="stat-value">${fennKredit}</span>
            </div>
        </div>
    `;
}

// ============================================
// Yaş Hesablayıcı
// ============================================
function hesablaYas() {
    const dogumTarixi = document.getElementById('dogum-tarixi').value;
    if (!dogumTarixi) { alert(t('err_dogum')); return; }

    const dogum = new Date(dogumTarixi);
    const bugun = new Date();

    let yas = bugun.getFullYear() - dogum.getFullYear();
    const ayFerqi = bugun.getMonth() - dogum.getMonth();
    if (ayFerqi < 0 || (ayFerqi === 0 && bugun.getDate() < dogum.getDate())) yas--;

    const gunFerqi = Math.floor((bugun - dogum) / (1000 * 60 * 60 * 24));

    const novbetiAdGunu = new Date(bugun.getFullYear(), dogum.getMonth(), dogum.getDate());
    if (novbetiAdGunu < bugun) novbetiAdGunu.setFullYear(bugun.getFullYear() + 1);
    const qalanGunler = Math.ceil((novbetiAdGunu - bugun) / (1000 * 60 * 60 * 24));

    const resultBox = document.getElementById('yas-result');
    resultBox.className = 'result-box show info';
    resultBox.innerHTML = `
        <div class="result-title">${t('res_yas_info')}</div>
        <div class="result-stats">
            <div class="stat-item">
                <span class="stat-label">${t('res_yas')}</span>
                <span class="stat-value">${yas} ${t('res_yas_unit')}</span>
            </div>
            <div class="stat-item">
                <span class="stat-label">${t('res_gun')}</span>
                <span class="stat-value">${gunFerqi.toLocaleString()} ${t('res_gun_unit')}</span>
            </div>
            <div class="stat-item">
                <span class="stat-label">${t('res_novbeti')}</span>
                <span class="stat-value">${qalanGunler} ${t('res_gun_unit')}</span>
            </div>
        </div>
    `;
}

// ============================================
// Lüğət məlumatları (3 dildə)
// ============================================
const lugetSozleri = {
    az: [
        { soz: "Universitet", meana: "Ali təhsil verən böyük təhsil müəssisəsidir və bir neçə fakültədən ibarət olur." },
        { soz: "Korpus", meana: "Universitetin dərslərin və digər fəaliyyətlərin keçirildiyi binalarından biridir. Böyük universitetlərdə bir neçə korpus olur." },
        { soz: "Fakültə", meana: "Universitetin müəyyən ixtisasları birləşdirən bölməsidir. Məsələn, Filologiya fakültəsi." },
        { soz: "Rektor", meana: "Universitetin ən yüksək rəhbəridir və bütün tədris, idarəetmə və rəsmi qərarlara cavabdeh şəxsdir." },
        { soz: "Rektor Müavini", meana: "Rektora kömək edir və adətən tədris, elm və ya inzibati işlər kimi müəyyən sahələrə nəzarət edir." },
        { soz: "Dekan", meana: "Fakültənin rəhbəridir və həmin fakültədə dərslərin və ümumi qaydaların təşkilinə nəzarət edir." },
        { soz: "Dekan Müavini", meana: "Dekana kömək edir və tələbələrlə bağlı məsələlərdə, dərs cədvəlində və digər işlərdə dəstək göstərir." },
        { soz: "Tyutor", meana: "Tələbələrə qeydiyyat və akademik məsələlərdə yol göstərən şəxsdir." },
        { soz: "Mühazirə", meana: "Müəllimin mövzunu izah etdiyi dərs formasıdır və adətən çoxlu tələbə iştirak edir." },
        { soz: "Seminar", meana: "Tələbələrin mövzu haqqında danışdığı, sual verdiyi və müzakirə etdiyi dərs formasıdır." },
        { soz: "Sərbəst iş", meana: "Tələbənin dərsdən kənar vaxtda özü araşdırıb hazırladığı tapşırıq və ya layihədir." },
        { soz: "Professor", meana: "Universitetdə ən yüksək elmi vəzifələrdən biridir və böyük təcrübəyə malik müəllimdir." },
        { soz: "Dosent", meana: "Elmi dərəcəyə sahib olan və dərs deyən, professordan bir pillə aşağı vəzifədir." },
        { soz: "Müəllim", meana: "Tələbələrə dərs keçən və mövzuları izah edən tədris işçisidir." },
        { soz: "Doktorantura", meana: "Ali təhsilin ən yüksək pilləsidir və burada elmi araşdırma aparılıb dissertasiya yazılır." },
        { soz: "Magistratura", meana: "Bakalavrdan sonrakı təhsil mərhələsidir və ixtisas üzrə biliklər daha dərindən öyrənilir." },
        { soz: "Bakalavr", meana: "Ali təhsilin ilk pilləsidir və tələbə burada əsas ixtisas biliklərini əldə edir." },
    ],
    ru: [
        { soz: "Университет", meana: "Крупное высшее учебное заведение, состоящее из нескольких факультетов." },
        { soz: "Корпус", meana: "Одно из зданий университета, где проводятся занятия и другие мероприятия." },
        { soz: "Факультет", meana: "Подразделение университета, объединяющее определённые специальности. Например, филологический факультет." },
        { soz: "Ректор", meana: "Высший руководитель университета, ответственный за все учебные, административные и официальные решения." },
        { soz: "Проректор", meana: "Помогает ректору и обычно курирует определённые направления: учёбу, науку или административную работу." },
        { soz: "Декан", meana: "Руководитель факультета, отвечающий за организацию занятий и общих правил на факультете." },
        { soz: "Заместитель декана", meana: "Помогает декану в вопросах, связанных со студентами, расписанием и другими делами." },
        { soz: "Тьютор", meana: "Лицо, направляющее студентов по вопросам регистрации и академическим вопросам." },
        { soz: "Лекция", meana: "Форма занятия, на которой преподаватель объясняет тему, как правило, перед большой аудиторией." },
        { soz: "Семинар", meana: "Форма занятия, где студенты обсуждают тему, задают вопросы и дискутируют." },
        { soz: "Самостоятельная работа", meana: "Задание или проект, который студент исследует и готовит самостоятельно вне занятий." },
        { soz: "Профессор", meana: "Одна из высших научных должностей в университете; преподаватель с большим опытом." },
        { soz: "Доцент", meana: "Должность на ступень ниже профессора, имеющая учёную степень и ведущая занятия." },
        { soz: "Преподаватель", meana: "Сотрудник учебного заведения, проводящий занятия и объясняющий темы студентам." },
        { soz: "Докторантура", meana: "Высшая ступень высшего образования, на которой проводятся научные исследования и пишется диссертация." },
        { soz: "Магистратура", meana: "Этап обучения после бакалавриата, где знания по специальности изучаются более углублённо." },
        { soz: "Бакалавриат", meana: "Первая ступень высшего образования, на которой студент получает базовые знания по специальности." },
    ],
    en: [
        { soz: "University", meana: "A large higher education institution consisting of several faculties." },
        { soz: "Building / Corps", meana: "One of the university buildings where classes and other activities take place." },
        { soz: "Faculty", meana: "A division of a university grouping certain specializations. For example, the Faculty of Philology." },
        { soz: "Rector", meana: "The highest authority of the university, responsible for all academic, administrative and official decisions." },
        { soz: "Vice-Rector", meana: "Assists the rector and usually oversees specific areas such as education, science or administration." },
        { soz: "Dean", meana: "The head of a faculty who oversees the organization of classes and general regulations within that faculty." },
        { soz: "Vice-Dean", meana: "Assists the dean with student-related matters, timetables and other tasks." },
        { soz: "Tutor", meana: "A person who guides students on registration and academic issues." },
        { soz: "Lecture", meana: "A form of class where the teacher explains a topic, usually attended by many students." },
        { soz: "Seminar", meana: "A form of class where students discuss a topic, ask questions and debate." },
        { soz: "Independent Study", meana: "An assignment or project that a student researches and prepares outside of class time." },
        { soz: "Professor", meana: "One of the highest academic positions in a university; a teacher with extensive experience." },
        { soz: "Associate Professor", meana: "A position one step below professor, holding an academic degree and teaching classes." },
        { soz: "Teacher / Lecturer", meana: "An academic staff member who conducts classes and explains topics to students." },
        { soz: "Doctorate", meana: "The highest level of higher education, where scientific research is conducted and a dissertation is written." },
        { soz: "Master's", meana: "A stage of education after the bachelor's degree, where knowledge in a specialization is studied more deeply." },
        { soz: "Bachelor's", meana: "The first level of higher education, where the student acquires basic knowledge in their specialization." },
    ]
};

// ============================================
// Akademik Məlumatlar (3 dildə)
// ============================================
const akademikMelumatlar = {
    az: [
        "Əlaçı təqaüd üçün semestr sonu imtahanlarında bütün fənlər üzrə yekun bal 91 və yuxarı olmalıdır.",
        "Həvəsləndirici təqaüd almaq üçün ən azı 1 fəndən (1-dən çox da ola bilər) 91+ bal, digər fənlərin hər birindən isə minimum 71+ bal olmalıdır.",
        "Adi təqaüd almaq üçün bütün fənlər üzrə yekun bal ən azı 51+ olmalıdır. Bu 51 balın minimum 17 balı imtahandan toplanmalıdır (ödənişli ixtisaslarda fərqlilik ola bilər).",
        "Semestr ərzində toplanan bal maksimum 50 baldır. Bunun 10 balı sərbəst işdən, 10 balı davamiyyətdən, 30 balı isə seminar və kollekviumdan gəlir. Semestr balı bu düsturla hesablanır: (seminar balı orta × 0.4 + kollekvium balı orta × 0.6) × 3 + davamiyyət balı + sərbəst iş balı.",
        "İmtahanda toplanılan bal maksimum 50 baldır. Semestr balı ilə imtahan balı toplanır və ümumi nəticə alınır.",
        "Kəsr imtahanı: Əgər tələbə imtahandan minimum 17 bal toplamazsa və ya semestr balı ilə imtahan balının cəmi 51 balı keçməzsə, tələbə kəsilmiş sayılır.",
        "Kəsr fənni olan tələbə 25% ödəniş edib ikinci şans imtahanında iştirak edə bilər. 25% ödəniş: [((illik ödəniş / 60) × kredit sayı) / 4] + 1.",
        "Əgər tələbə kəsilməzdən əvvəl təqaüd alırdısa, kəsildiyi halda təqaüdünü itirir və 25% ödənişlə imtahanı uğurla versə belə, təqaüd bərpa olunmur.",
        "ÜOMG (Ümumi Orta Müvəffəqiyyət Göstəricisi): (bal1 × kredit1 + bal2 × kredit2 + ...) / (kredit1 + kredit2 + ...).",
        "Qayıb limiti aşan tələbə imtahana buraxılmır və avtomatik olaraq kəsilmiş sayılır.",
        "91–100 bal: A (əla); 81–90: B (çox yaxşı); 71–80: C (yaxşı); 61–70: D (kafi); 51–60: E (qaneedici); 51-dən aşağı: F (qeyri-kafi).",
    ],
    ru: [
        "Для отличной стипендии итоговый балл по всем предметам на экзаменах в конце семестра должен быть 91 и выше.",
        "Для поощрительной стипендии необходимо иметь 91+ баллов хотя бы по одному предмету и минимум 71+ по остальным.",
        "Для обычной стипендии итоговый балл по всем предметам должен быть не менее 51+. Из этих 51 балла минимум 17 должно быть набрано на экзамене.",
        "За семестр можно набрать максимум 50 баллов: 10 — самостоятельная работа, 10 — посещаемость, 30 — семинары и коллоквиумы. Формула: (ср. семинар × 0.4 + ср. коллоквиум × 0.6) × 3 + посещаемость + сам. работа.",
        "На экзамене можно набрать максимум 50 баллов. Семестровый балл и экзаменационный балл суммируются для получения итогового результата.",
        "Пересдача: если студент набрал менее 17 баллов на экзамене или сумма семестрового и экзаменационного баллов не превышает 51, студент считается отчисленным.",
        "Студент, имеющий задолженность, может заплатить 25% и участвовать в пересдаче. Формула 25%: [((годовая оплата / 60) × кол-во кредитов) / 4] + 1.",
        "Если студент получал стипендию до отчисления, при отчислении он её теряет, и даже при успешной сдаче пересдачи стипендия не восстанавливается.",
        "ÜOMG (общий средний показатель успеваемости): (балл1 × кредит1 + балл2 × кредит2 + ...) / (кредит1 + кредит2 + ...).",
        "Студент, превысивший лимит пропусков, не допускается к экзамену и автоматически считается отчисленным.",
        "91–100: A (отлично); 81–90: B (очень хорошо); 71–80: C (хорошо); 61–70: D (удовл.); 51–60: E (приемлемо); ниже 51: F (неудовл.).",
    ],
    en: [
        "For an excellence scholarship, the final score in all subjects at the end-of-semester exams must be 91 or above.",
        "For an incentive scholarship, you need 91+ in at least one subject and a minimum of 71+ in each of the others.",
        "For a regular scholarship, the final score in all subjects must be at least 51+. A minimum of 17 of these 51 points must come from the exam.",
        "The maximum semester score is 50 points: 10 from independent study, 10 from attendance, 30 from seminars and colloquiums. Formula: (avg seminar × 0.4 + avg colloquium × 0.6) × 3 + attendance + independent study.",
        "The maximum exam score is 50 points. The semester score and exam score are added together to get the final result.",
        "Retake exam: If a student scores less than 17 on the exam, or the sum of semester and exam scores does not exceed 51, the student is considered to have failed.",
        "A student with a failed subject can pay 25% and participate in a second-chance exam. Formula: [((annual tuition / 60) × credits) / 4] + 1.",
        "If a student was receiving a scholarship before failing, they lose it upon failing, and the scholarship is not restored even if they pass the retake.",
        "GPA (General Average Achievement Score): (score1 × credit1 + score2 × credit2 + ...) / (credit1 + credit2 + ...).",
        "A student who exceeds the absence limit is not allowed to take the exam and is automatically considered to have failed.",
        "91–100: A (excellent); 81–90: B (very good); 71–80: C (good); 61–70: D (satisfactory); 51–60: E (passing); below 51: F (failing).",
    ]
};

// ============================================
// Sürətli Linklər (3 dildə link mətni)
// ============================================
const suretliLinkler = [
    {
        icon: "🌐",
        key: "link_bdu_web",
        url: "https://share.google/M2ZIeZ1uGX63hbYwN"
    },
    {
        icon: "🎓",
        key: "link_bdu_student",
        url: "https://share.google/7ljpthpUCiOMOeS82"
    },
    {
        icon: "💬📢",
        key: "link_whatsapp_group",
        url: "https://chat.whatsapp.com/GDt5duGNCFcAzM5uzaygqu?s=cl&p=a&mlu=4&ilr=4"
    },
    {
        icon: "💬",
        key: "link_bdu_whatsapp",
        url: "https://whatsapp.com/channel/0029Va85Ls85q08WyYoGeJ3r"
    },
    {
        icon: "📷",
        key: "link_bdu_instagram",
        url: "https://www.instagram.com/bdu_eduaz"
    },
    {
        icon: "👤",
        key: "link_owner_instagram",
        url: "https://www.instagram.com/618_acc?igsh=eGZ6NDBqbnltbzJv"
    }
];

// ============================================
// Render Functions
// ============================================
function renderDictionaryList() {
    const dictionaryList = document.getElementById('dictionary-list');
    if (!dictionaryList) return;
    dictionaryList.innerHTML = '';
    const items = lugetSozleri[currentLang] || lugetSozleri['az'];
    items.forEach(item => {
        const div = document.createElement('div');
        div.className = 'dictionary-item';
        div.innerHTML = `<strong>${item.soz}</strong> ${item.meana}`;
        dictionaryList.appendChild(div);
    });
}

function renderInfoList() {
    const infoList = document.getElementById('info-list');
    if (!infoList) return;
    infoList.innerHTML = '';
    const items = akademikMelumatlar[currentLang] || akademikMelumatlar['az'];
    items.forEach((melumat, index) => {
        const div = document.createElement('div');
        div.className = 'info-item';
        div.innerHTML = `<strong>${index + 1}.</strong> ${melumat}`;
        infoList.appendChild(div);
    });
}

function renderLinksList() {
    const linksList = document.getElementById('links-list');
    if (!linksList) return;
    linksList.innerHTML = '';
    suretliLinkler.forEach(link => {
        const a = document.createElement('a');
        a.className = 'link-item';
        a.href = link.url;
        a.target = '_blank';
        a.rel = 'noopener';
        a.innerHTML = `
            <span class="link-icon">${link.icon}</span>
            <span class="link-text">${t(link.key)}</span>
        `;
        linksList.appendChild(a);
    });
}

// ============================================
// Səhifə yükləndikdə işə sal
// ============================================
document.addEventListener('DOMContentLoaded', function () {
    initTheme();
    setLanguage(currentLang);
    renderDictionaryList();
    renderInfoList();
    renderLinksList();
});

// ============================================
// PWA - Service Worker Qeydiyyatı (iOS Optimized)
// ============================================
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        const isIOSDevice = /iphone|ipad|ipod/.test(navigator.userAgent.toLowerCase());
        const swPath = '/sw.js';

        navigator.serviceWorker.register(swPath, {
            scope: '/',
            updateViaCache: 'none'
        })
            .then(registration => {
                if (isIOSDevice) {
                    registration.update();
                }

                registration.addEventListener('updatefound', () => {
                    const newWorker = registration.installing;

                    newWorker.addEventListener('statechange', () => {
                        if (newWorker.state === 'installed') {
                            if (navigator.serviceWorker.controller) {
                                if (isIOSDevice) {
                                    newWorker.postMessage({ type: 'SKIP_WAITING' });
                                    window.location.reload();
                                } else {
                                    if (confirm(t('new_version'))) {
                                        newWorker.postMessage({ type: 'SKIP_WAITING' });
                                        window.location.reload();
                                    }
                                }
                            }
                        }
                    });
                });

                if (isIOSDevice) {
                    navigator.serviceWorker.ready.then(reg => {
                        setInterval(() => { reg.update(); }, 60000);
                    });
                }
            })
            .catch(error => {
                console.error('[App] Service Worker qeydiyyatı uğursuz:', error);
            });
    });
}

// ============================================
// Supabase İnteqrasiyası
// ============================================
const SUPABASE_URL = 'https://glcgixnfjohomjoyyrwk.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdsY2dpeG5mam9ob21qb3l5cndrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODgwODE4OTIsImV4cCI6MjEwMzY1Nzg5Mn0.8fSkJHpPza6BrF2qFowhqmR2gK7-ecyrE9cPhA5YR-c';

function detectDevice() {
    return /Mobi|Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ? 'Mobile' : 'Desktop';
}

function detectBrowser() {
    const ua = navigator.userAgent;
    if (/Edg\//i.test(ua)) return 'Edge';
    if (/OPR\/|Opera/i.test(ua)) return 'Opera';
    if (/Chrome\/[0-9]/.test(ua) && !/Chromium/.test(ua)) return 'Chrome';
    if (/Firefox\//i.test(ua)) return 'Firefox';
    if (/Safari\/[0-9]/.test(ua) && !/Chrome/.test(ua)) return 'Safari';
    if (/MSIE|Trident/i.test(ua)) return 'Internet Explorer';
    return 'Unknown';
}

function detectOS() {
    const ua = navigator.userAgent;
    if (/Windows NT/i.test(ua)) return 'Windows';
    if (/Mac OS X/i.test(ua) && !/iPhone|iPad|iPod/.test(ua)) return 'macOS';
    if (/iPhone/i.test(ua)) return 'iOS (iPhone)';
    if (/iPad/i.test(ua)) return 'iOS (iPad)';
    if (/iPod/i.test(ua)) return 'iOS (iPod)';
    if (/Android/i.test(ua)) return 'Android';
    if (/Linux/i.test(ua)) return 'Linux';
    if (/CrOS/i.test(ua)) return 'ChromeOS';
    return 'Unknown';
}

async function logInstallClickToSupabase() {
    try {
        const payload = {
            clicked_at: new Date().toISOString(),
            page_url: window.location.href,
            referrer: document.referrer || null,
            device: detectDevice(),
            browser: detectBrowser(),
            operating_system: detectOS()
        };

        const response = await fetch(`${SUPABASE_URL}/rest/v1/orders`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'apikey': SUPABASE_ANON_KEY,
                'Authorization': `Bearer ${SUPABASE_ANON_KEY}`,
                'Prefer': 'return=minimal'
            },
            body: JSON.stringify(payload)
        });

        if (!response.ok) {
            const errText = await response.text();
            console.warn('[Supabase] Məlumat yazılmadı:', response.status, errText);
        }
    } catch (err) {
        console.warn('[Supabase] Xəta:', err);
    }
}

// ============================================
// PWA Quraşdırma
// ============================================
let deferredPrompt;

function isIOS() {
    return /iphone|ipad|ipod/.test(window.navigator.userAgent.toLowerCase());
}

function isInStandaloneMode() {
    return (('standalone' in window.navigator) && window.navigator.standalone) ||
        window.matchMedia('(display-mode: standalone)').matches;
}

function showIOSInstallBanner() {
    const banner = document.getElementById('ios-install-banner');
    const alreadyShown = localStorage.getItem('ios-banner-closed');

    if (alreadyShown) {
        const daysPassed = (Date.now() - parseInt(alreadyShown)) / (1000 * 60 * 60 * 24);
        if (daysPassed < 7) return;
    }

    if (banner && isIOS() && !isInStandaloneMode()) {
        banner.style.display = 'block';
        logInstallClickToSupabase();
    }
}

function closeIOSBanner() {
    const banner = document.getElementById('ios-install-banner');
    if (banner) {
        banner.style.display = 'none';
        localStorage.setItem('ios-banner-closed', Date.now().toString());
    }
}

window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    deferredPrompt = e;
    if (!isIOS()) showInstallButton();
});

window.addEventListener('appinstalled', () => {
    deferredPrompt = null;
    hideInstallButton();
});

function showInstallButton() {
    if (!isInStandaloneMode() && !isIOS()) {
        const installBtn = document.getElementById('install-button');
        if (installBtn) installBtn.style.display = 'flex';
    }
}

function hideInstallButton() {
    const installBtn = document.getElementById('install-button');
    if (installBtn) installBtn.style.display = 'none';
}

function installApp() {
    logInstallClickToSupabase();
    if (deferredPrompt) {
        deferredPrompt.prompt();
        deferredPrompt.userChoice.then((choiceResult) => {
            deferredPrompt = null;
            hideInstallButton();
        });
    }
}

window.addEventListener('load', () => {
    if (isIOS() && !isInStandaloneMode()) {
        setTimeout(showIOSInstallBanner, 2000);
    }
});
