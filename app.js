// ============================================
// Səhifə Naviqasiyası və Scroll Pozisiyası
// ============================================
let lastScrollPosition = 0;

function showPage(pageId) {
    const pages = document.querySelectorAll('.page');
    
    // Ana səhifəyə qayıdarkən scroll pozisiyasını saxla
    if (pageId === 'home-page') {
        pages.forEach(page => page.classList.remove('active'));
        document.getElementById(pageId).classList.add('active');
        
        // Saxlanmış pozisiyaya qayıt
        setTimeout(() => {
            window.scrollTo(0, lastScrollPosition);
        }, 10);
    } else {
        // Digər səhifələrə keçərkən cari pozisiyanı saxla
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
        alert('Xahiş olunur 1-9 arası bir rəqəm daxil edin');
        return;
    }
    
    container.innerHTML = '';
    for (let i = 1; i <= count; i++) {
        container.innerHTML += `
            <div class="dynamic-input">
                <label>Seminar ${i} qiyməti (0-10):</label>
                <input type="number" class="seminar-input" min="0" max="10" step="0.1" placeholder="0" required>
            </div>
        `;
    }
}

function generateKollekviumInputs() {
    const count = parseInt(document.getElementById('kollekvium-count').value);
    const container = document.getElementById('kollekvium-inputs');
    
    if (!count || count < 1 || count > 4) {
        alert('Xahiş olunur 1-4 arası bir rəqəm daxil edin');
        return;
    }
    
    container.innerHTML = '';
    for (let i = 1; i <= count; i++) {
        container.innerHTML += `
            <div class="dynamic-input">
                <label>Kollekvium ${i} qiyməti (0-10):</label>
                <input type="number" class="kollekvium-input" min="0" max="10" step="0.1" placeholder="0" required>
            </div>
        `;
    }
}

function hesablaDavamiyyet(saat, qayib) {
    const rules = {
        30: { 0: 10, 1: 9, 2: 9, 3: 8, 4: 0 },
        45: { 0: 10, 1: 10, 2: 9, 3: 9, 4: 8, 5: 8, 6: 0 },
        60: { 0: 10, 1: 10, 2: 9, 3: 9, 4: 9, 5: 8, 6: 8, 7: 8, 8: 0 },
        75: { 0: 10, 1: 10, 2: 9, 3: 9, 4: 9, 5: 9, 6: 8, 7: 8, 8: 8, 9: 8, 10: 0 },
        90: { 0: 10, 1: 10, 2: 10, 3: 9, 4: 9, 5: 9, 6: 9, 7: 8, 8: 8, 9: 8, 10: 8, 11: 8, 12: 0 },
        105: { 0: 10, 1: 10, 2: 10, 3: 9, 4: 9, 5: 9, 6: 9, 7: 9, 8: 8, 9: 8, 10: 8, 11: 8, 12: 8, 13: 8, 14: 0 }
    };
    
    if (rules[saat] && rules[saat][qayib] !== undefined) {
        return rules[saat][qayib];
    }
    
    // Qayıb çox olduqda
    return 0;
}

function hesablaSemestr() {
    const seminarInputs = document.querySelectorAll('.seminar-input');
    const kollekviumInputs = document.querySelectorAll('.kollekvium-input');
    const serbestIs = parseFloat(document.getElementById('serbest-is').value) || 0;
    const fennSaat = parseInt(document.getElementById('fenn-saat').value);
    const qayibSayi = parseInt(document.getElementById('qayib-sayi').value);
    
    // Validasiya
    if (seminarInputs.length === 0) {
        alert('Xahiş olunur seminar sayını daxil edib "Yarat" düyməsinə basın');
        return;
    }
    
    if (kollekviumInputs.length === 0) {
        alert('Xahiş olunur kollekvium sayını daxil edib "Yarat" düyməsinə basın');
        return;
    }
    
    if (serbestIs < 0 || serbestIs > 10) {
        alert('Sərbəst iş balı 0-10 aralığında olmalıdır');
        return;
    }
    
    if (!fennSaat || qayibSayi === undefined || qayibSayi === null || qayibSayi < 0) {
        alert('Xahiş olunur fənn saatını seçin və qayıb sayını daxil edin');
        return;
    }
    
    // Seminar ortalaması
    let seminarSum = 0;
    let validSeminarCount = 0;
    seminarInputs.forEach(input => {
        const val = parseFloat(input.value);
        if (!isNaN(val) && val >= 0 && val <= 10) {
            seminarSum += val;
            validSeminarCount++;
        }
    });
    
    if (validSeminarCount === 0) {
        alert('Xahiş olunur ən azı bir seminar qiyməti daxil edin');
        return;
    }
    
    const seminarOrta = seminarSum / validSeminarCount;
    
    // Kollekvium ortalaması
    let kollekviumSum = 0;
    let validKollekviumCount = 0;
    kollekviumInputs.forEach(input => {
        const val = parseFloat(input.value);
        if (!isNaN(val) && val >= 0 && val <= 10) {
            kollekviumSum += val;
            validKollekviumCount++;
        }
    });
    
    if (validKollekviumCount === 0) {
        alert('Xahiş olunur ən azı bir kollekvium qiyməti daxil edin');
        return;
    }
    
    const kollekviumOrta = kollekviumSum / validKollekviumCount;
    
    // Davamiyyət balı
    const davamiyyetBali = hesablaDavamiyyet(fennSaat, qayibSayi);
    
    // Əsas hesablama
    const seminarKollekviumBali = (seminarOrta * 0.4 + kollekviumOrta * 0.6) * 3;
    let umumiBal = seminarKollekviumBali + davamiyyetBali + serbestIs;
    
    // Maksimum 50 bal
    if (umumiBal > 50) {
        umumiBal = 50;
    }
    
    // Nəticə mesajı
    let message = '';
    let resultClass = '';
    
    if (umumiBal === 0) {
        message = '0 BAL';
        resultClass = 'danger';
    } else if (umumiBal >= 50) {
        message = 'MÜVƏFFƏQİYYƏTLƏ KEÇDİNİZ';
        resultClass = 'success';
    } else if (umumiBal >= 45) {
        message = 'ÇOX YAXŞI';
        resultClass = 'success';
    } else if (umumiBal >= 41) {
        message = 'YAXŞI';
        resultClass = 'info';
    } else if (umumiBal >= 36) {
        message = 'KAFİ';
        resultClass = 'warning';
    } else if (umumiBal >= 26) {
        message = 'ZƏİF';
        resultClass = 'warning';
    } else {
        message = 'YAXŞI OLACAQ';
        resultClass = 'danger';
    }
    
    // Nəticəni göstər
    const resultBox = document.getElementById('semestr-result');
    resultBox.className = `result-box show ${resultClass}`;
    resultBox.innerHTML = `
        <div class="result-title">${message}</div>
        <div class="result-score">${umumiBal.toFixed(2)} / 50</div>
        <div class="result-stats">
            <div class="stat-item">
                <span class="stat-label">Seminar və Kollekvium:</span>
                <span class="stat-value">${seminarKollekviumBali.toFixed(2)} / 30</span>
            </div>
            <div class="stat-item">
                <span class="stat-label">Sərbəst İş:</span>
                <span class="stat-value">${serbestIs.toFixed(2)} / 10</span>
            </div>
            <div class="stat-item">
                <span class="stat-label">Davamiyyət:</span>
                <span class="stat-value">${davamiyyetBali.toFixed(2)} / 10</span>
            </div>
            <div class="stat-item">
                <span class="stat-label">Seminar Ortalaması:</span>
                <span class="stat-value">${seminarOrta.toFixed(2)} / 10</span>
            </div>
            <div class="stat-item">
                <span class="stat-label">Kollekvium Ortalaması:</span>
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
        alert('Xahiş olunur 1-9 arası bir rəqəm daxil edin');
        return;
    }
    
    container.innerHTML = '';
    for (let i = 1; i <= count; i++) {
        container.innerHTML += `
            <div class="form-section">
                <h3>Fənn ${i}</h3>
                <div class="input-group">
                    <label>Bal (maksimum 100):</label>
                    <input type="number" class="fenn-bal" min="0" max="100" step="0.1" placeholder="0" required>
                </div>
                <div class="input-group">
                    <label>Kredit:</label>
                    <input type="number" class="fenn-kredit" min="1" placeholder="0" required>
                </div>
            </div>
        `;
    }
}

function hesablaUOMG() {
    const balInputs = document.querySelectorAll('.fenn-bal');
    const kreditInputs = document.querySelectorAll('.fenn-kredit');
    
    if (balInputs.length === 0) {
        alert('Xahiş olunur fənn sayını daxil edib "Yarat" düyməsinə basın');
        return;
    }
    
    let toplam = 0;
    let kreditToplam = 0;
    
    for (let i = 0; i < balInputs.length; i++) {
        const bal = parseFloat(balInputs[i].value);
        const kredit = parseFloat(kreditInputs[i].value);
        
        if (isNaN(bal) || isNaN(kredit) || bal < 0 || bal > 100 || kredit < 1) {
            alert(`Fənn ${i + 1} üçün düzgün məlumat daxil edin`);
            return;
        }
        
        toplam += bal * kredit;
        kreditToplam += kredit;
    }
    
    const uomg = toplam / kreditToplam;
    
    // Nəticə mesajı
    let message = '';
    let resultClass = '';
    
    if (uomg === 0) {
        message = '0 BAL';
        resultClass = 'danger';
    } else if (uomg >= 91) {
        message = 'MÜVƏFFƏQİYYƏTLƏ KEÇDİNİZ';
        resultClass = 'success';
    } else if (uomg >= 81) {
        message = 'ÇOX YAXŞI';
        resultClass = 'success';
    } else if (uomg >= 71) {
        message = 'YAXŞI';
        resultClass = 'info';
    } else if (uomg >= 61) {
        message = 'KAFİ';
        resultClass = 'warning';
    } else if (uomg >= 51) {
        message = 'ZƏİF';
        resultClass = 'warning';
    } else {
        message = 'YAXŞI OLACAQ';
        resultClass = 'danger';
    }
    
    // Nəticəni göstər
    const resultBox = document.getElementById('uomg-result');
    resultBox.className = `result-box show ${resultClass}`;
    resultBox.innerHTML = `
        <div class="result-title">${message}</div>
        <div class="result-score">${uomg.toFixed(2)} / 100</div>
        <div class="result-stats">
            <div class="stat-item">
                <span class="stat-label">Toplam Bal × Kredit:</span>
                <span class="stat-value">${toplam.toFixed(2)}</span>
            </div>
            <div class="stat-item">
                <span class="stat-label">Toplam Kredit:</span>
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
    
    if (!illikOdenis || illikOdenis < 0) {
        alert('Xahiş olunur düzgün illik ödəniş daxil edin');
        return;
    }
    
    if (!fennKredit || fennKredit < 1) {
        alert('Xahiş olunur düzgün kredit sayı daxil edin');
        return;
    }
    
    const result = ((illikOdenis / 60) * fennKredit) / 4 + 1;
    
    const resultBox = document.getElementById('kesr-result');
    resultBox.className = 'result-box show info';
    resultBox.innerHTML = `
        <div class="result-title">25% İmtahan Haqqı</div>
        <div class="result-score">${result.toFixed(2)} AZN</div>
        <div class="result-stats">
            <div class="stat-item">
                <span class="stat-label">İllik Ödəniş:</span>
                <span class="stat-value">${illikOdenis.toFixed(2)} AZN</span>
            </div>
            <div class="stat-item">
                <span class="stat-label">Kredit Sayı:</span>
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
    
    if (!dogumTarixi) {
        alert('Xahiş olunur doğum tarixini seçin');
        return;
    }
    
    const dogum = new Date(dogumTarixi);
    const bugun = new Date();
    
    // Yaş hesablama
    let yas = bugun.getFullYear() - dogum.getFullYear();
    const ayFerqi = bugun.getMonth() - dogum.getMonth();
    
    if (ayFerqi < 0 || (ayFerqi === 0 && bugun.getDate() < dogum.getDate())) {
        yas--;
    }
    
    // Gün hesablama
    const gunFerqi = Math.floor((bugun - dogum) / (1000 * 60 * 60 * 24));
    
    // Növbəti ad günü
    const novbetiAdGunu = new Date(bugun.getFullYear(), dogum.getMonth(), dogum.getDate());
    if (novbetiAdGunu < bugun) {
        novbetiAdGunu.setFullYear(bugun.getFullYear() + 1);
    }
    const qalanGunler = Math.ceil((novbetiAdGunu - bugun) / (1000 * 60 * 60 * 24));
    
    const resultBox = document.getElementById('yas-result');
    resultBox.className = 'result-box show info';
    resultBox.innerHTML = `
        <div class="result-title">Yaş Məlumatları</div>
        <div class="result-stats">
            <div class="stat-item">
                <span class="stat-label">Yaşınız:</span>
                <span class="stat-value">${yas} yaş</span>
            </div>
            <div class="stat-item">
                <span class="stat-label">Yaşadığınız günlər:</span>
                <span class="stat-value">${gunFerqi.toLocaleString()} gün</span>
            </div>
            <div class="stat-item">
                <span class="stat-label">Növbəti ad gününə:</span>
                <span class="stat-value">${qalanGunler} gün</span>
            </div>
        </div>
    `;
}

// ============================================
// Lüğət və Məlumat - Developer üçün asan əlavə etmə
// ============================================

// Lüğət sözləri - Buraya yeni sözlər əlavə et
const lugetSozleri = [
    { 
        soz: "Mühazirə", 
        meana: "Müəllimin keçdiyi dərs" 
    },
    { 
        soz: "TEZLİKLƏ", 
        meana: "Əlavə Ediləcək" 
    },
    // Yeni sözlər əlavə etmək üçün aşağı formata əməl et:
    // { soz: "Söz", meana: "Açıqlama" },
];

// Akademik məlumatlar - Buraya yeni məlumatlar əlavə et
const akademikMelumatlar = [
    "Əlaçı olmaq üçün bütün fənlər 91+ olmalıdır.",
    "Tezliklə Əlavə Ediləcək",
    // Yeni məlumatlar əlavə etmək üçün dırnaq içində yaz:
    // "Yeni məlumat buraya",
];

// Sürətli linklər - Buraya yeni linklər əlavə et
const suretliLinkler = [
    {
        icon: "🌐",
        text: "Bakı Dövlət Universiteti rəsmi web saytı",
        url: "https://share.google/M2ZIeZ1uGX63hbYwN"
    },
    {
        icon: "🎓",
        text: "BDU Tələbə Akademik Web Saytı (SemsLogin)",
        url: "https://share.google/7ljpthpUCiOMOeS82"
    },
    {
        icon: "💬",
        text: "BDU WhatsApp Kanal",
        url: "https://whatsapp.com/channel/0029Va85Ls85q08WyYoGeJ3r"
    },
    {
        icon: "📷",
        text: "BDU Instagram",
        url: "https://www.instagram.com/bdu_eduaz"
    },
    {
        icon: "✈️",
        text: "BDU Telegram",
        url: "https://t.me/bdu_eduaz"
    },
    {
        icon: "👤",
        text: "Sayt Sahibinin Instagram",
        url: "https://www.instagram.com/desespere_etoile"
    },
    {
        icon: "👥",
        text: "Tələbə Sosiallaşma Qrupu (Telegram)",
        url: "https://t.me/+WUKxtnDjo2E5YTcy"
    }
     {
        icon: "👥",
        text: "Tələbə Sosiallaşma Qrupu (Telegram)",
        url: "https://www.youtube.com/watch?v=yJtiJf2TxGw&list=RDMMcEzaZOnPn3Y&index=6"
    }
    // Yeni link əlavə etmək üçün:
    // { icon: "emoji", text: "Link adı", url: "https://..." },
];

// ============================================
// Səhifə yükləndikdə işə sal
// ============================================
document.addEventListener('DOMContentLoaded', function() {
    // Lüğət siyahısını doldur
    const dictionaryList = document.getElementById('dictionary-list');
    lugetSozleri.forEach(item => {
        const div = document.createElement('div');
        div.className = 'dictionary-item';
        div.innerHTML = `<strong>${item.soz}</strong> ${item.meana}`;
        dictionaryList.appendChild(div);
    });
    
    // Məlumat siyahısını doldur
    const infoList = document.getElementById('info-list');
    akademikMelumatlar.forEach((melumat, index) => {
        const div = document.createElement('div');
        div.className = 'info-item';
        div.innerHTML = `<strong>${index + 1}.</strong> ${melumat}`;
        infoList.appendChild(div);
    });
    
    // Link siyahısını doldur
    const linksList = document.getElementById('links-list');
    suretliLinkler.forEach(link => {
        const a = document.createElement('a');
        a.className = 'link-item';
        a.href = link.url;
        a.target = '_blank';
        a.rel = 'noopener';
        a.innerHTML = `
            <span class="link-icon">${link.icon}</span>
            <span class="link-text">${link.text}</span>
        `;
        linksList.appendChild(a);
    });
});

// ============================================
// PWA - Service Worker Qeydiyyatı
// ============================================
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
            .then(registration => {
                console.log('Service Worker qeydiyyatdan keçdi:', registration.scope);
                
                // Yeniləmə yoxla
                registration.addEventListener('updatefound', () => {
                    const newWorker = registration.installing;
                    newWorker.addEventListener('statechange', () => {
                        if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
                            // Yeni versiya mövcuddur
                            if (confirm('Yeni versiya mövcuddur. Yeniləmək istəyirsiniz?')) {
                                window.location.reload();
                            }
                        }
                    });
                });
            })
            .catch(error => {
                console.log('Service Worker qeydiyyatı uğursuz oldu:', error);
            });
    });
}

// ============================================
// PWA Quraşdırma Promptu və Endirmə Düyməsi
// ============================================
let deferredPrompt;

window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    deferredPrompt = e;
    
    // Endirmə düyməsini göstər
    showInstallButton();
});

window.addEventListener('appinstalled', () => {
    console.log('PWA quraşdırıldı');
    deferredPrompt = null;
    
    // Endirmə düyməsini gizlət
    hideInstallButton();
});

// Endirmə düyməsini göstər
function showInstallButton() {
    // Yalnız standalone modda deyilsə göstər (yəni tətbiq kimi quraşdırılmayıb)
    if (!window.matchMedia('(display-mode: standalone)').matches) {
        const installBtn = document.getElementById('install-button');
        if (installBtn) {
            installBtn.style.display = 'flex';
        }
    }
}

// Endirmə düyməsini gizlət
function hideInstallButton() {
    const installBtn = document.getElementById('install-button');
    if (installBtn) {
        installBtn.style.display = 'none';
    }
}

// Endirmə düyməsinə klik
function installApp() {
    if (deferredPrompt) {
        deferredPrompt.prompt();
        deferredPrompt.userChoice.then((choiceResult) => {
            if (choiceResult.outcome === 'accepted') {
                console.log('İstifadəçi tətbiqi quraşdırdı');
            }
            deferredPrompt = null;
            hideInstallButton();
        });
    }
}
