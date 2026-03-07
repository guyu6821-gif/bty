# 🍎 iOS PWA Quraşdırma və Troubleshooting Guide

## 📱 iOS-da PWA Quraşdırma (Safari)

### ✅ Addım-addım Təlimat

#### 1. Safari-də Saytı Aç
- Safari browser-i açın
- URL-ə https://your-domain.com daxil edin
- Səhifə tam yüklənənə qədər gözləyin

#### 2. Share Düyməsi
- Safari-nin aşağı panelindəki **Share** (📤) düyməsinə toxunun
- Və ya yuxarı sağ küncdəki Share ikonuna

#### 3. "Add to Home Screen" Seç
- Siyahıdan **"Add to Home Screen"** tapın
- Aşağı scroll edib tapmalı ola bilərsiniz

#### 4. Adı Düzənlə (Optional)
- Tətbiq adını dəyişdirə bilərsiniz
- Default: "UniFy"

#### 5. Add Düyməsi
- Sağ üst küncdəki **"Add"** düyməsinə toxunun

#### 6. ✅ Hazırdır!
- Tətbiq Home Screen-də görünəcək
- UniFy loqosu ilə

---

## 🧪 Offline Test

### Test Etmək Üçün:
1. ✅ Tətbiqi quraşdırın (yuxarıdakı addımlar)
2. 🛫 **Airplane Mode**-a keçin
3. 📱 Home Screen-dən tətbiqi açın
4. ✅ Tətbiq işləməlidir (offline)

### Əgər işləmirsə:
👇 Aşağıdakı troubleshooting bölməsinə bax

---

## 🔧 iOS PWA Troubleshooting

### Problem 1: Offline İşləmir ❌

**Əlamətlər:**
- Tətbiq quraşdırılıb
- Airplane Mode-da açılmır
- "No Internet Connection" xətası

**Həll:**

#### A. Cache Test (Recommended)
1. Safari-də `/ios-test.html` açın
2. Aşağıdakı yoxlamaları görəcəksiniz:
   - 📱 İOS Cihaz: ✅/❌
   - 🔧 Service Worker: ✅/❌
   - 💾 Cache: ✅/❌
   - 🌐 Offline: ✅/❌

3. Əgər hər hansı ❌ varsa:
   - **"Bütün Cache-ləri Təmizlə"** düyməsinə toxunun
   - Safari-i **tamamilə bağlayın** (app switcher-dən)
   - Safari-i yenidən açın
   - Saytı açın və **30-60 saniyə gözləyin**
   - Test səhifəsini yenidən yoxlayın

#### B. Manuel Təmizləmə
1. **Safari bağlayın** (app switcher-dən swipe up)
2. **Settings → Safari**
3. **"Clear History and Website Data"**
4. **Clear** edin
5. iPhone-u **restart** edin
6. Safari açın və saytı yenidən ziyarət edin
7. **30-60 saniyə gözləyin** (səhifədə qalın)
8. "Add to Home Screen" edin

#### C. Service Worker Yoxlama
1. Safari-də saytı açın
2. Konsolu açmaq üçün Mac-a qoşun (optional)
3. Və ya sadəcə **30-60 saniyə** səhifədə qalın
4. Service Worker qeydiyyatdan keçməlidir

---

### Problem 2: "Add to Home Screen" Seçimi Yoxdur ❌

**Səbəblər:**
- Safari olmayan browser istifadə edirsiz (Chrome, Firefox)
- İnsecure connection (HTTP, HTTPS deyil)

**Həll:**
1. **Safari** istifadə etməlisiniz
2. URL **https://** ilə başlamalıdır
3. Private/Incognito Mode **deyil**

---

### Problem 3: Tətbiq "Fullscreen" Açılmır ❌

**Əlamətlər:**
- Tətbiq Safari-də açılır
- Safari UI görsənir (address bar, buttons)

**Səbəb:**
- Sayt Share → "Add to Home Screen" ilə əlavə edilməyib
- Bookmark kimi əlavə edilib

**Həll:**
1. Home Screen-dən tətbiqi **silin**
2. Safari-də saytı açın
3. **Share → Add to Home Screen** edin (bookmark deyil!)

---

### Problem 4: Cache Yenilənmir ❌

**Əlamətlər:**
- Yeni versiya deploy edilib
- Köhnə versiya görsənir

**Həll:**

#### A. Avtomatik Yenilənmə (Tövsiyə)
1. Tətbiqi açın
2. **Bir neçə saniyə gözləyin**
3. Tətbiq avtomatik yeniləməlidir

#### B. Manuel Yenilənmə
1. Home Screen-dən tətbiqi **silin**
2. Safari-də saytı açın
3. **Clear History and Website Data** (Settings → Safari)
4. Saytı yenidən açın
5. 30 saniyə gözləyin
6. "Add to Home Screen" edin

---

## 🔍 Diaqnostika Alətləri

### iOS Test Səhifəsi: `/ios-test.html`

Bu səhifə sizə göstərir:
- ✅ İOS cihaz və Safari versiyası
- ✅ Service Worker qeydiyyat statusu
- ✅ Cache məlumatları (hansı fayllar cache-də)
- ✅ Offline dəstək statusu
- 🗑️ Cache təmizləmə düyməsi

**İdeal Nəticə:**
```
✅ İOS Cihaz: iPhone
✅ Service Worker: Aktiv
✅ Cache: 8 fayl
✅ Offline: Mümkündür
```

---

## ⚙️ Safari Experimental Features (Advanced)

### Aktiv Etmək:
1. **Settings → Safari**
2. **Advanced → Experimental Features**
3. Aşağıdakıları **enable** edin:
   - ✅ Service Worker
   - ✅ Cache API
   - ✅ Fetch API
   - ✅ Web App Manifest

4. iPhone-u **restart** edin

---

## 📊 iOS PWA Limitləri

### ⚠️ iOS Safari Məhdudiyyətləri:

1. **Cache Ömrü:**
   - Cache 7 gün sonra avtomatik silinir (tətbiq açılmazsa)
   - Həll: Tətbiqi hər 7 gündən bir açın

2. **Background Sync:**
   - iOS-da background sync yoxdur
   - Tətbiq açıq olmalıdır

3. **Push Notifications:**
   - iOS-da PWA push notification yoxdur (iOS 16.4+ dəstək var)

4. **Auto-Install Prompt:**
   - Android-dəki kimi avtomatik "Install" prompt çıxmır
   - İstifadəçi manuel "Add to Home Screen" etməlidir

---

## ✅ Əmin Olmaq Üçün Checklist

Tətbiq düzgün quraşdırılıb və offline işləyir?

- [ ] Safari-də sayt açılır
- [ ] `/ios-test.html` səhifəsində bütün ✅ var
- [ ] "Add to Home Screen" ilə əlavə edilib
- [ ] Home Screen-də UniFy ikonu var
- [ ] Tətbiq açılanda Safari UI görsənmir (fullscreen)
- [ ] Airplane Mode-da tətbiq açılır
- [ ] Bütün funksiyalar işləyir (Semestr, ÜOMG, etc.)

Əgər hamısı ✅ isə - **Tətbiq düzgün quraşdırılıb!** 🎉

---

## 🆘 Hələ də Problem Var?

### Son Çarə:
1. **iPhone-u tam restart edin** (Power + Volume)
2. **Safari Settings → Clear All Data**
3. **iPhone-u yenidən restart edin**
4. Safari açın və saytı yeniləyin
5. **2-3 dəqiqə səhifədə qalın**
6. `/ios-test.html` yoxlayın
7. "Add to Home Screen" edin

### Texniki Dəstək:
- **WhatsApp:** +994 55 940 60 18
- **Instagram:** @desespere_etoile

---

## 📝 Notes

### iOS Safari PWA Xüsusiyyətləri (2024)
- iOS 11.3+ PWA dəstəyi var
- iOS 16.4+ improved PWA support
- iOS 17+ better offline caching
- Service Worker support: iOS 11.3+
- Cache API: iOS 11.3+
- Web App Manifest: iOS 11.3+

### Cache Strategiyası
- **Cache Version:** v1.3.2
- **Files Cached:** 8 əsas fayl
- **Strategy:** Cache-First with Network Fallback
- **Update:** Automatic on new version

---

Hazırladı: BDU Tələbə Hesablayıcı Team  
Versiya: 1.3.2 (iOS Cache Fixed)  
Tarix: 07.03.2024

🍎 **iOS-da PWA - Artıq İnternet Olmadan İşləyir!** 🚀
