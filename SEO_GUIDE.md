# 🔍 SEO və Google Search Console Guide - UniFy

## 📋 SEO Optimizasiyası Tamamlandı

### ✅ Əlavə Edilən Fayllar

1. **sitemap.xml** - Saytın xəritəsi (Google üçün)
2. **robots.txt** - Axtarış motorları üçün qaydalar
3. **SEO Meta Tags** - index.html-də əlavə edildi
4. **JSON-LD Structured Data** - Google Rich Snippets üçün

---

## 📁 Faylların Məzmunu

### 1. sitemap.xml
**Yer:** `/sitemap.xml`  
**Məqsəd:** Google-a saytın bütün səhifələrini göstərir

**Daxil olan səhifələr:**
- ✅ Ana səhifə (priority: 1.0)
- ✅ Semestr Balı (priority: 0.9)
- ✅ ÜOMG Hesablama (priority: 0.9)
- ✅ Kəsr Ödənişi (priority: 0.9)
- ✅ Yaş Hesablayıcı (priority: 0.7)
- ✅ Lüğət (priority: 0.6)
- ✅ Məlumat (priority: 0.6)
- ✅ Sürətli Linklər (priority: 0.5)
- ✅ Haqqında (priority: 0.4)
- ✅ iOS Test (priority: 0.3)

### 2. robots.txt
**Yer:** `/robots.txt`  
**Məqsəd:** Axtarış motorlarına hansı səhifələri index etməli olduğunu göstərir

**Qaydalar:**
- ✅ Bütün axtarış motorlarına icazə (User-agent: *)
- ✅ Sitemap.xml yolu göstərilir
- ✅ Test faylları bloklanır
- ✅ Git və log faylları bloklanır

### 3. SEO Meta Tags (index.html)
**Əlavə edilən tag-lər:**

#### Əsas SEO
- `description` - Saytın təsviri
- `keywords` - Axtarış açar sözləri
- `robots` - Index və follow
- `canonical` - Əsas URL

#### Open Graph (Facebook)
- `og:title` - Paylaşım başlığı
- `og:description` - Paylaşım təsviri
- `og:image` - Paylaşım şəkli
- `og:url` - Sayt URL-i

#### Twitter Card
- `twitter:card` - Twitter paylaşım kartı
- `twitter:title` - Twitter başlığı
- `twitter:description` - Twitter təsviri

#### JSON-LD Structured Data
- WebApplication schema
- BreadcrumbList schema
- Rich Snippets üçün

---

## 🎯 Açar Sözlər (Keywords)

### Əsas Açar Sözlər:
1. ✅ **ÜOMG hesablama**
2. ✅ **semestr bal hesablama**
3. ✅ **kəsr ödənişi hesablama**
4. ✅ **25% imtahan haqqı**
5. ✅ **tələbə balı hesablama**
6. ✅ **davamiyyət hesablama**
7. ✅ **akademik hesablama**
8. ✅ **BDU tələbə**
9. ✅ **universitet bal hesablama**
10. ✅ **təqaüd hesablama**
11. ✅ **imtahan kəsri**
12. ✅ **kredit hesablama**
13. ✅ **kollekvium hesablama**
14. ✅ **seminar balı**
15. ✅ **Bakı Dövlət Universiteti**

---

## 🚀 Google Search Console Qeydiyyatı

### Addım 1: Google Search Console-a Daxil Olun
1. https://search.google.com/search-console/ keçin
2. Google hesabınızla daxil olun
3. "Add Property" düyməsinə basın

### Addım 2: Domain və ya URL Prefix
**Tövsiyə:** URL prefix istifadə edin

- URL daxil edin: `https://bdu-hesablayici.onrender.com`
- "Continue" düyməsinə basın

### Addım 3: Ownership Verification
**Metod 1: HTML File Upload** (Ən asan)
1. Google sizə HTML faylı verəcək (məs: `google1234567890.html`)
2. Bu faylı layihənizin root direktoriyasına əlavə edin
3. GitHub-a push edin
4. Render.com avtomatik deploy edəcək
5. Google Search Console-da "Verify" basın

**Metod 2: HTML Tag** (Alternativ)
1. Google sizə meta tag verəcək
2. index.html-in `<head>` bölməsinə əlavə edin
3. Push və deploy edin
4. "Verify" basın

### Addım 4: Sitemap Submit Etmək
1. Verification uğurlu olduqdan sonra
2. Sol menüdən "Sitemaps" seçin
3. Sitemap URL daxil edin: `https://bdu-hesablayici.onrender.com/sitemap.xml`
4. "Submit" düyməsinə basın

### Addım 5: robots.txt Yoxlama
1. Sol menüdən "Settings" seçin
2. "robots.txt Tester" seçin
3. Yoxlayın ki, düzgün işləyir

---

## 📊 Google Search Console İzləmə

### Monitoring Parametrlər:

1. **Performance (Performans)**
   - Total clicks (Kliklər)
   - Total impressions (Göstərilmələr)
   - Average CTR (Klik nisbəti)
   - Average position (Orta mövqe)

2. **Coverage (Əhatə)**
   - Indexed pages (İndeksləşmiş səhifələr)
   - Errors (Xətalar)
   - Warnings (Xəbərdarlıqlar)

3. **Queries (Sorğular)**
   - Hansı açar sözlərlə tapılır
   - Hansı səhifələr populyardır

4. **Links (Linklər)**
   - External links (Xarici linklər)
   - Internal links (Daxili linklər)

---

## 🔧 SEO Best Practices (Tətbiq Edildi)

### ✅ On-Page SEO
- [x] Title tag optimize edildi
- [x] Meta description əlavə edildi
- [x] H1, H2, H3 başlıqlar strukturlaşdırıldı
- [x] Alt text-lər şəkillərə əlavə edildi
- [x] Canonical URL təyin edildi
- [x] Structured data (JSON-LD) əlavə edildi

### ✅ Technical SEO
- [x] robots.txt yaradıldı
- [x] sitemap.xml yaradıldı
- [x] Mobile-friendly (responsive design)
- [x] Fast loading speed
- [x] HTTPS (Render.com default)
- [x] PWA support

### ✅ Content SEO
- [x] Açar sözlər təbii şəkildə daxil edildi
- [x] Unique content (original məzmun)
- [x] User-friendly URL-lər
- [x] Internal linking strukturu

---

## 📈 SEO Nəticələri (Gözlənilən)

### 1-2 Həftə İçində:
- ✅ Google index etməyə başlayacaq
- ✅ Sitemap qəbul ediləcək
- ✅ İlk search impressions görünəcək

### 1-3 Ay İçində:
- ✅ Açar sözlər üzrə ranking
- ✅ Organic traffic artımı
- ✅ Search Console-da data toplama

### 3-6 Ay İçində:
- ✅ Top 10 posisiyalarda görünmə (bəzi açar sözlər)
- ✅ Stabil organic traffic
- ✅ Backlink qazanma

---

## 🎯 Hədəf Açar Sözlər və Ranking Potensialı

| Açar Söz | Search Volume | Rəqabət | Ranking Potensialı |
|----------|---------------|---------|-------------------|
| ÜOMG hesablama | Orta | Aşağı | ⭐⭐⭐⭐⭐ Yüksək |
| semestr bal hesablama | Orta | Aşağı | ⭐⭐⭐⭐⭐ Yüksək |
| kəsr ödənişi hesablama | Aşağı | Çox Aşağı | ⭐⭐⭐⭐⭐ Çox Yüksək |
| 25% imtahan haqqı | Aşağı | Aşağı | ⭐⭐⭐⭐⭐ Çox Yüksək |
| BDU tələbə | Yüksək | Yüksək | ⭐⭐⭐ Orta |
| davamiyyət hesablama | Aşağı | Çox Aşağı | ⭐⭐⭐⭐⭐ Çox Yüksək |

---

## 🔍 SEO Test və Yoxlama

### Axtarış Motorlarında Test:
```
Google: ÜOMG hesablama
Google: semestr bal hesablama BDU
Google: kəsr ödənişi hesablama
Google: 25% imtahan haqqı hesablama
Yandex: tələbə balı hesablama
```

### SEO Tools ilə Yoxlama:
1. **Google PageSpeed Insights**
   - https://pagespeed.web.dev/
   - URL daxil edin və test edin

2. **Google Rich Results Test**
   - https://search.google.com/test/rich-results
   - Structured data yoxlayın

3. **Schema.org Validator**
   - https://validator.schema.org/
   - JSON-LD yoxlayın

---

## 📞 Dəstək və Sorğular

**SEO üçün əlavə yardım:**
- WhatsApp: +994 55 940 60 18
- Instagram: @desespere_etoile

---

## ✅ SEO Checklist

- [x] sitemap.xml yaradıldı
- [x] robots.txt yaradıldı
- [x] Meta tags əlavə edildi (description, keywords)
- [x] Open Graph tags əlavə edildi
- [x] Twitter Card tags əlavə edildi
- [x] JSON-LD structured data əlavə edildi
- [x] Canonical URL təyin edildi
- [x] Title optimize edildi
- [x] Alt texts əlavə edildi
- [x] Mobile-friendly
- [x] Fast loading
- [x] HTTPS enabled
- [ ] Google Search Console-a əlavə et (sizin üzərinizdədir)
- [ ] Sitemap submit et (sizin üzərinizdədir)
- [ ] Bing Webmaster Tools-a əlavə et (optional)

---

**Hazırladı:** BDU Tələbə Hesablayıcı Team  
**Versiya:** 1.3.3 (SEO Optimized)  
**Tarix:** 12.03.2024

🚀 **SEO - Axtarış Motorlarında Görünərliyinizi Artırın!** 🔍
