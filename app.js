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
    
    // ÖNƏMLİ: Davamiyyətdə kəsr varsa (bal = 0), ümumi nəticə də kəsrdir
    if (davamiyyetBali === 0) {
        // Davamiyyət kəsr - Tələbə ümumillikdə kəsilmişdir
        const resultBox = document.getElementById('semestr-result');
        resultBox.className = 'result-box show danger';
        resultBox.innerHTML = `
            <div class="result-title">KƏSR - DAVAMIYYƏT</div>
            <div class="result-score" style="font-size: 36px;">KƏSR</div>
            <div class="result-stats">
                <div class="stat-item" style="background: rgba(255,255,255,0.2); padding: 15px; border-radius: 8px; margin-bottom: 10px;">
                    <span class="stat-label" style="display: block; text-align: center; font-size: 18px;">
                        ⚠️ Davamiyyət limiti keçildi
                    </span>
                </div>
                <div class="stat-item">
                    <span class="stat-label">Seçilən Fənn Saatı:</span>
                    <span class="stat-value">${fennSaat} saat</span>
                </div>
                <div class="stat-item">
                    <span class="stat-label">Qayıb Sayı:</span>
                    <span class="stat-value">${qayibSayi} qayıb</span>
                </div>
                <div class="stat-item">
                    <span class="stat-label">Davamiyyət Balı:</span>
                    <span class="stat-value">0 / 10 (KƏSR)</span>
                </div>
                <div class="stat-item" style="border-top: 2px solid rgba(255,255,255,0.3); padding-top: 10px; margin-top: 10px;">
                    <span class="stat-label">Seminar Ortalaması:</span>
                    <span class="stat-value">${seminarOrta.toFixed(2)} / 10</span>
                </div>
                <div class="stat-item">
                    <span class="stat-label">Kollekvium Ortalaması:</span>
                    <span class="stat-value">${kollekviumOrta.toFixed(2)} / 10</span>
                </div>
                <div class="stat-item">
                    <span class="stat-label">Sərbəst İş:</span>
                    <span class="stat-value">${serbestIs.toFixed(2)} / 10</span>
                </div>
                <div class="stat-item" style="background: rgba(255,255,255,0.2); padding: 10px; border-radius: 8px; margin-top: 10px;">
                    <span class="stat-label" style="display: block; text-align: center; font-size: 14px; font-style: italic;">
                        Davamiyyət kəsr olduqda digər balların əhəmiyyəti yoxdur
                    </span>
                </div>
            </div>
        `;
        return; // Funksiyadan çıx
    }
    
    // Davamiyyət kəsr deyilsə, normal hesablama davam edir
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
        message = '🎉 MÜVƏFFƏQİYYƏTLƏ KEÇDİNİZ! ✅';
        resultClass = 'success';
    } else if (umumiBal >= 45) {
        message = '🔥 ÇOX YAXŞI 📊';
        resultClass = 'success';
    } else if (umumiBal >= 41) {
        message = '💣 YAXŞI 📈';
        resultClass = 'info';
    } else if (umumiBal >= 36) {
        message = '🫂 KAFİ 📉';
        resultClass = 'warning';
    } else if (umumiBal >= 26) {
        message = '🎭 ZƏİF 📴';
        resultClass = 'warning';
    } else {
        message = '🗿 YAXŞI OLACAQ 🆒';
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
        message = '🎉 MÜVƏFFƏQİYYƏTLƏ KEÇDİNİZ! ✅';
        resultClass = 'success';
    } else if (uomg >= 81) {
        message = '🔥 ÇOX YAXŞI 📊';
        resultClass = 'success';
    } else if (uomg >= 71) {
        message = '💣 YAXŞI 📈';
        resultClass = 'info';
    } else if (uomg >= 61) {
        message = '🫂 KAFİ 📉';
        resultClass = 'warning';
    } else if (uomg >= 51) {
        message = '🎭 ZƏİF 📴';
        resultClass = 'warning';
    } else {
        message = '🗿 YAXŞI OLACAQ 🆒';
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
        soz: "Universitet", 
        meana: "Ali təhsil verən böyük təhsil müəssisəsidir və bir neçə fakültədən ibarət olur." 
    },
    { 
        soz: "Korpus", 
        meana: "Universitetin dərslərin və digər fəaliyyətlərin keçirildiyi binalarından biridir. Böyük universitetlərdə bir neçə korpus olur." 
    },
    { 
        soz: "Fakültə", 
        meana: "Universitetin müəyyən ixtisasları birləşdirən bölməsidir. Məsələn, Filologiya fakültəsi." 
    },
    { 
        soz: "Rektor", 
        meana: "Universitetin ən yüksək rəhbəridir və bütün tədris, idarəetmə və rəsmi qərarlara cavabdeh şəxsdir. Universitetlə bağlı əsas qərarları o verir." 
    },
    { 
        soz: "Rektor Müavini", 
        meana: "Rektora kömək edir və adətən tədris, elm və ya inzibati işlər kimi müəyyən sahələrə nəzarət edir. Öz sahəsi üzrə işlərin düzgün getməsinə cavabdehdir." 
    },
    { 
        soz: "Dekan", 
        meana: "Fakültənin rəhbəridir və həmin fakültədə dərslərin və ümumi qaydaların təşkilinə nəzarət edir." 
    },
    { 
        soz: "Dekan Müavini", 
        meana: "Dekana kömək edir və tələbələrlə bağlı məsələlərdə, dərs cədvəlində və digər işlərdə dəstək göstərir." 
    },
    { 
        soz: "Tyutor", 
        meana: "Tələbələrə qeydiyyat və akademik məsələlərdə yol göstərən şəxsdir. Problemlər olduqda tələbələr ona müraciət edə bilərlər." 
    },
    { 
        soz: "Mühazirə", 
        meana: "Müəllimin mövzunu izah etdiyi dərs formasıdır və adətən çoxlu tələbə iştirak edir." 
    },
    { 
        soz: "Seminar", 
        meana: "Tələbələrin mövzu haqqında danışdığı, sual verdiyi və müzakirə etdiyi dərs formasıdır." 
    },
    { 
        soz: "Sərbəst iş", 
        meana: "Tələbənin dərsdən kənar vaxtda özü araşdırıb hazırladığı tapşırıq və ya layihədir." 
    },
    { 
    soz: "Professor", 
    meana: "Universitetdə ən yüksək elmi vəzifələrdən biridir və böyük təcrübəyə malik müəllimdir." 
    },
    { 
    soz: "Dosent", 
    meana: "Elmi dərəcəyə sahib olan və dərs deyən, professordan bir pillə aşağı vəzifədir." 
    },
    { 
    soz: "Müəllim", 
    meana: "Tələbələrə dərs keçən və mövzuları izah edən tədris işçisidir." 
    },
    { 
    soz: "Doktorantura", 
    meana: "Ali təhsilin ən yüksək pilləsidir və burada elmi araşdırma aparılıb dissertasiya yazılır." 
    },
    { 
    soz: "Magistratura", 
    meana: "Bakalavrdan sonrakı təhsil mərhələsidir və ixtisas üzrə biliklər daha dərindən öyrənilir." 
    },
    { 
    soz: "Bakalavr", 
    meana: "Ali təhsilin ilk pilləsidir və tələbə burada əsas ixtisas biliklərini əldə edir." 
    },
    
    // Yeni sözlər əlavə etmək üçün aşağı formata əməl et:
    // { soz: "Söz", meana: "Açıqlama" },
];

// Akademik məlumatlar - Buraya yeni məlumatlar əlavə et
const akademikMelumatlar = [
    "Əlaçı təqaüd üçün semestr sonu imtahanlarında bütün fənlər üzrə yekun bal 91 və yuxarı olmalıdır.",
    "Həvəsləndirici təqaüd almaq üçün ən azı 1 fəndən (1-dən çox da ola bilər) 91+ bal, digər fənlərin hər birindən isə minimum 71+ bal olmalıdır.",
    "Adi təqaüd almaq üçün bütün fənlər üzrə yekun bal ən azı 51+ olmalıdır. Bu 51 balın minimum 17 balı imtahandan toplanmalıdır (ödənişli ixtisaslarda fərqlilik ola bilər).",
    "Semestr ərzində toplanan bal maksimum 50 baldır. Bunun 10 balı sərbəst işdən, 10 balı davamiyyətdən, 30 balı isə seminar və kollekviumdan gəlir. Semestr balı bu düsturla hesablanır: (seminar balı orta × 0.4 + kollekvium balı orta × 0.6) × 3 + davamiyyət balı + sərbəst iş balı.",
    "İmtahanda toplanılan bal maksimum 50 baldır. Semestr balı ilə imtahan balı toplanır və ümumi nəticə alınır. Bu nəticəyə əsasən tələbənin akademik göstəricisi müəyyən edilir.",
    "Kəsr imtahanı: Əgər tələbə imtahandan minimum 17 bal toplamazsa və ya semestr balı ilə imtahan balının cəmi 51 balı keçməzsə (imtahan balı 17 və ya daha yuxarı olsa belə), tələbə kəsilmiş sayılır.",
    "Kəsr fənni olan tələbə həmin fənnin kredit sayına uyğun olaraq, istəyə bağlı şəkildə 25% ödəniş edib ikinci şans imtahanında iştirak edə bilər. 25% ödəniş bu düsturla hesablanır: [((illik ödəniş / 60) × kredit sayı) / 4] + 1.",
    "Əgər tələbə kəsilməzdən əvvəl təqaüd alırdısa, kəsildiyi halda təqaüdünü itirir və 25% ödənişlə imtahanı uğurla versə belə, təqaüd bərpa olunmur.",
    "ÜOMG (Ümumi Orta Müvəffəqiyyət Göstəricisi) tələbənin ümumi akademik nəticəsidir və universiteti bitirərkən gələcək təhsilinə mühüm təsir göstərir. ÜOMG 100 ballıq sistemlə bu düsturla hesablanır: (bal1 × kredit1 + bal2 × kredit2 + ... + bal n × kredit n) / (kredit1 + kredit2 + ... + kredit n).",
    "Qayıb limiti: Hər fənn üzrə dərs saatına uyğun qayıb limiti müəyyən edilir. Bu limiti aşan tələbə imtahana buraxılmır və avtomatik olaraq kəsilmiş sayılır. Mühazirə və seminar üzrə qayıb sayı ortaq hesablanır."
    "91–100 bal A ilə qiymətləndirilir və əla qiymət sayılır; 81–90 bal B ilə qiymətləndirilir və çox yaxşı hesab olunur; 71–80 bal C ilə qiymətləndirilir və yaxşı qiymət sayılır; 61–70 bal D ilə qiymətləndirilir və kafi hesab olunur; 51–60 bal E ilə qiymətləndirilir və qaneedici hesab olunur; 51-dən aşağı bal F ilə qiymətləndirilir və qeyri-kafi hesab olunur.",
    // Yeni məlumatlar əlavə etmək üçün dırnaq içində yaz:
    // "Yeni məlumat buraya",
];

// Sürətli linklər - Buraya yeni linklər əlavə et
const suretliLinkler = [
    {
        icon: "🌐",
        text: "Bakı Dövlət Universitetinin Rəsmi Web Saytı",
        url: "https://share.google/M2ZIeZ1uGX63hbYwN"
    },
    {
        icon: "🎓",
        text: "Bakı Dövlət Universitetinin Tələbə Akademik Web Saytı (SemsLogin)",
        url: "https://share.google/7ljpthpUCiOMOeS82"
    },
    {
        icon: "💬",
        text: "Bakı Dövlət Universitetinin WhatsApp Kanalı",
        url: "https://whatsapp.com/channel/0029Va85Ls85q08WyYoGeJ3r"
    },
    {
        icon: "📷",
        text: "Bakı Dövlət Universitetinin Instagramı",
        url: "https://www.instagram.com/bdu_eduaz"
    },
    {
        icon: "✈️",
        text: "Bakı Dövlət Universitetinin Telegramı",
        url: "https://t.me/bdu_eduaz"
    },
    {
        icon: "👤",
        text: "Sayt Sahibinin Instagramı",
        url: "https://www.instagram.com/desespere_etoile"
    },
    {
        icon: "👥",
        text: "Tələbə Sosiallaşma Qrupu (Telegram)",
        url: "https://t.me/+WUKxtnDjo2E5YTcy"
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
