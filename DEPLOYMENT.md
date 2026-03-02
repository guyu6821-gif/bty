# BDU Tələbə Hesablayıcı - Render.com Deployment

## Render.com-da Static Site Yaratma

### 1. Render Dashboard
1. https://dashboard.render.com saytına daxil olun
2. "New +" düyməsinə basın
3. "Static Site" seçin

### 2. GitHub Repository Bağlantısı
1. GitHub hesabınızı bağlayın (ilk dəfə)
2. Repository seçin: `guyu6821-gif/bty`
3. Repository-ni Render-ə icazə verin

### 3. Deployment Parametrləri

**Name:** `bdu-hesablayici` (və ya istədiyiniz ad)

**Branch:** `main`

**Root Directory:** boş buraxın (və ya `/`)

**Build Command:** boş buraxın

**Publish Directory:** `.` (və ya boş buraxın)

**Auto-Deploy:** Yes (aktiv)

### 4. Deploy
"Create Static Site" düyməsinə basın və gözləyin.

### 5. URL
Deploy tamamlandıqdan sonra sizə URL veriləcək:
`https://bdu-hesablayici.onrender.com`

## Local Test URL
https://3000-iz0j1dpya1ff5hwa2837s-b237eb32.sandbox.novita.ai

## GitHub Repository
https://github.com/guyu6821-gif/bty

## Qeydlər
- Build command lazım deyil (static HTML/CSS/JS)
- Publish directory root-dur (/)
- Bütün fayllar hazırdır və işlək vəziyyətdədir
- PWA quraşdırıla bilir (Ana ekrana əlavə et)
- Offline işləyir
- Auto-deploy aktivdirsə, hər git push avtomatik deploy olunacaq

## Faydalı Render.com Dokumentasiyası
https://render.com/docs/static-sites
