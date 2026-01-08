# DDS Reklam - Kurumsal Web Sitesi

DDS Reklam için geliştirilmiş; modern, etkileşimli ve kurumsal kimliği yansıtan web sitesi projesi.

![Project Status](https://img.shields.io/badge/status-active-success.svg)
![License](https://img.shields.io/badge/license-MIT-blue.svg)

## 🌟 Proje Hakkında

Bu proje, DDS Reklam ajansının hizmetlerini, projelerini ve referanslarını sergilemek amacıyla geliştirilmiştir. Kullanıcı deneyimini (UX) ön planda tutan, **Glassmorphism** ve **Flat Design 2.0** tasarım dillerinin harmanlandığı modern bir arayüze sahiptir.

### Öne Çıkan Özellikler

*   **🎨 Modern Tasarım:** Glassmorphism efektleri ve temiz flat tasarım.
*   **🧊 3D Entegrasyonu:** Three.js ile etkileşimli 3D görselleştirmeler.
*   **📱 Tam Duyarlı (Responsive):** Mobil, tablet ve masaüstü uyumlu.
*   **⚡ Hızlı ve Performanslı:** Vite ve React altyapısı.
*   **✨ Mikro Etkileşimler:** Hover efektleri, yumuşak geçişler ve animasyonlar.

## 🛠️ Teknolojiler

Projede kullanılan temel kütüphane ve araçlar:

*   **Core:** [React](https://reactjs.org/) (TypeScript ile)
*   **Build Tool:** [Vite](https://vitejs.dev/)
*   **Styling:** [Tailwind CSS](https://tailwindcss.com/)
*   **3D Graphics:** [Three.js](https://threejs.org/) & [React Three Fiber](https://docs.pmnd.rs/react-three-fiber)
*   **Routing:** [React Router DOM](https://reactrouter.com/)
*   **Icons:** [Lucide React](https://lucide.dev/)

## 📂 Proje Yapısı

```bash
src/
├── components/   # Navbar, Footer, ScrollToTop vb. bileşenler
├── layouts/      # Ana sayfa düzeni (MainLayout)
├── pages/        # Sayfa içerikleri (Home, About, Services, vb.)
├── assets/       # Görseller ve statik dosyalar
└── main.tsx      # Uygulama giriş noktası
```

## 🚀 Kurulum ve Çalıştırma

Projeyi yerel ortamınızda çalıştırmak için aşağıdaki adımları izleyin:

1.  **Depoyu klonlayın:**
    ```bash
    git clone <repo-url>
    cd dds-reklam
    ```

2.  **Bağımlılıkları yükleyin:**
    ```bash
    npm install
    ```

3.  **Geliştirme sunucusunu başlatın:**
    ```bash
    npm run dev
    ```
    Tarayıcınızda `http://localhost:5173` adresine gidin.

## 🏗️ Build (Canlıya Alma)

Projeyi canlı sunucuya atmak (production build) için:

```bash
npm run build
```
Bu komut `dist` klasörü içerisinde optimize edilmiş dosyaları oluşturacaktır.

## 🎨 Renk Paleti

*   **Koyu Lacivert:** `#1B1B28` (Arka planlar, Header)
*   **Ana Kırmızı:** `#E0020E` (Butonlar, Vurgular)
*   **Nude/Pembe:** `#DAB9BC`, `#ED6C73` (Detaylar, İkincil öğeler)
*   **Beyaz:** `#FDFDFD` (Kart zeminleri, Metinler)

---
© 2026 DDS REKLAM YAPI İNŞAAT TURİZM SANAYİ VE TİCARET LİMİTED ŞİRKETİ. Tüm hakları saklıdır.