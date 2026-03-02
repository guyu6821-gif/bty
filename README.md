# BDU Tələbə Hesablayıcı

## Layihə Haqqında
Bakı Dövlət Universiteti tələbələri üçün hazırlanmış müxtəlif hesablama alətləri toplusu. Progressive Web App (PWA) texnologiyası ilə hazırlanmışdır və internet olmadan da işləyir.

## Əsas Funksiyalar

### ✅ Tamamlanmış Funksiyalar

1. **Semestr Balı Hesablama**
   - Seminar qiymətləri (maksimum 9 ədəd, 0-10 bal)
   - Kollekvium qiymətləri (maksimum 4 ədəd, 0-10 bal)
   - Sərbəst iş balı (0-10)
   - Davamiyyət balı (avtomatik hesablama)
   - Ümumi nəticə maksimum 50 bal
   - Detallı statistika göstərici

2. **ÜOMG Hesablama**
   - Fənn sayı (maksimum 9)
   - Hər fənn üçün bal və kredit
   - Ağırlıqlı ortalama hesablama

3. **25% İmtahan (Kəsr Pulu) Hesablama**
   - İllik ödəniş əsasında
   - Fənn krediti ilə hesablama

4. **Yaş Hesablayıcı**
   - Tam yaş hesablama
   - Yaşanılan günlər
   - Növbəti ad gününə qalan günlər

5. **Akademik Lüğət**
   - Asan əlavə edilə bilən söz siyahısı
   - Akademik terminlərin izahı

6. **Akademik Məlumat**
   - Asan əlavə edilə bilən məlumat siyahısı
   - Faydalı akademik məlumatlar

7. **Sürətli Linklər**
   - BDU rəsmi saytı və sosial media linkləri
   - Mobil tətbiq dəstəyi (WhatsApp, Instagram, Telegram)

8. **Sabit Banner**
   - Sərbəst iş hazırlanması üçün WhatsApp əlaqə

## Texniki Xüsusiyyətlər

### PWA Dəstəyi
- ✅ Service Worker ilə offline işləmə
- ✅ Quraşdırıla bilən (Ana ekrana əlavə et)
- ✅ Manifest.json
- ✅ Avtomatik cache yeniləmə sistemi
- ✅ Versiya idarəetməsi

### Texnologiyalar
- **Frontend:** HTML5, CSS3, JavaScript (Vanilla)
- **PWA:** Service Worker API
- **Cache Strategy:** Cache First
- **Backend:** Yoxdur (tam client-side)

## Strukturu
```
webapp/
├── index.html          # Əsas HTML faylı
├── styles.css          # CSS stilləri
├── app.js              # JavaScript funksionallıq
├── sw.js               # Service Worker
├── manifest.json       # PWA manifest
├── icon-192.png        # PWA ikonu (192x192)
├── icon-512.png        # PWA ikonu (512x512)
└── README.md           # Bu fayl
```

## Developer Qeydləri

### Yeni Söz Əlavə Etmə (Lüğət)
`app.js` faylında `lugetSozleri` massivində:
```javascript
const lugetSozleri = [
    { soz: "Mühazirə", meana: "Müəllimin keçdiyi dərs" },
    { soz: "Yeni Söz", meana: "Açıqlama" }, // Yeni söz buraya
];
```

### Yeni Məlumat Əlavə Etmə
`app.js` faylında `akademikMelumatlar` massivində:
```javascript
const akademikMelumatlar = [
    "Əlaçı olmaq üçün bütün fənlər 91+ olmalıdır.",
    "Yeni məlumat buraya", // Yeni məlumat
];
```

### Yeni Link Əlavə Etmə
`app.js` faylında `suretliLinkler` massivində:
```javascript
const suretliLinkler = [
    { icon: "🌐", text: "Link adı", url: "https://..." },
    // Yeni link buraya
];
```

### Cache Versiyasını Yeniləmə
`sw.js` faylında `CACHE_VERSION` dəyərini artır:
```javascript
const CACHE_VERSION = 'v1.0.1'; // Nömrəni artır
```

## Render.com Deployment

### Deployment Addımları
1. GitHub hesabınıza push edin
2. Render.com-da "New Static Site" yaradın
3. GitHub repository-ni seçin
4. Build Command: boş buraxın
5. Publish Directory: `/` (root)
6. Deploy düyməsinə basın

### Deployment Parametrləri
- **Build Command:** Yoxdur (static files)
- **Publish Directory:** `/`
- **Auto-Deploy:** Aktiv

## URL-lər
- **Local Test (Sandbox):** https://3000-iz0j1dpya1ff5hwa2837s-b237eb32.sandbox.novita.ai
- **Production (Render.com):** Deploy etdikdən sonra URL əldə ediləcək
- **GitHub Repository:** https://github.com/guyu6821-gif/bty
- **Project Backup:** https://www.genspark.ai/api/files/s/8ohDeVHP

## Son Yeniləmə
- **Tarix:** 2025-03-02
- **Versiya:** 1.0.0
- **Status:** ✅ Deployment üçün hazırdır

## Əlaqə
- **WhatsApp:** +994 55 940 60 18 (Sərbəst iş hazırlanması)
- **Instagram:** @desespere_etoile

## Lisenziya
Bu layihə Bakı Dövlət Universiteti tələbələri üçün hazırlanmışdır.
