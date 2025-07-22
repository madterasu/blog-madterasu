---
title: "Ngedokering WordPress"
description: "Tutorial ringan ala DevOps pemula buat nge-deploy WordPress bareng MariaDB dalam container. Gak ribet, tinggal jalanin aja!"
date: 2025-07-22
tags: ["Docker", "WordPress", "DevOps", "Containerization"]
thumbnail: "/images/projects/docker-wordpress-thumb.png"
---
Halo rek~ 👋  
Pernah kebayang gak sih, bikin website WordPress tapi gak mau ribet install satu-satu kayak Apache, PHP, sama MariaDB? Nahhh... kali iki aku cobain cara **deploy WordPress langsung pake Docker**, lengkap sama databasenya (MariaDB). Auto cepet, auto santuy~ 🚀

---

### 📦 Ceritanya Dimulai dari...

Jadi ceritanya aku lagi iseng belajar DevOps. Terus nemu nih cara kece buat *containerize* aplikasi WordPress.  
Gak perlu ribet install manual, cukup tulis satu file `docker-compose.yml`, dan... bumm! 💥 Semuanya jalan otomatis di dalem container.

Dengan cara ini, kita bisa:

- Menghindari error karena beda versi server
- Pindahin project ke mana aja, asal ada Docker
- Jaga data tetep aman walau container dimatiin

Sakjane, iki konsep **containerization** modern yang sekarang jadi standar DevOps masa kini~ 😎

---

### 🧠 Ilmu Sing Tak Pakai

Nah, selama ngerjain proyek iki, aku belajar banyak hal, antara lain:

- 🐳 **Dockerization**  
  Ngekemas WordPress + MariaDB jadi container yang bisa dijalankan di mana aja

- 📜 **Infrastructure as Code (IaC)**  
  Semua konfigurasi ditulis rapi di `docker-compose.yml`, tinggal jalanin aja

- 🔗 **Multi-Container Orchestration**  
  Ada 2 container yang saling terkoneksi: `wordpress` dan `mariadb`

- 🧱 **Docker Networking**  
  Container bisa saling ngobrol lewat jaringan internal Docker

- 💾 **Persistent Volume**  
  Datamu aman walaupun container dihapus, karena pake volume `db_data`

---

### ⚙️ Tools & Teknologi Sing Dipakai

Berikut ini teknologi yang tak pake buat ngebangun proyek iki:

- **Docker** – Buat bikin dan ngejalanin container
- **Docker Compose** – Buat ngatur banyak container sekaligus
- **Image Resmi dari Docker Hub**:
  - `wordpress:latest`
  - `mariadb:latest`

---

#### 💡 Cara Njalankno Proyek Iki

Tenang rek, carane gampang kok!  
Iki langkah-langkah buat nyoba proyek iki di komputermu:

### 🔧 Prasyarat

- Install **Docker Desktop** dulu ya, bisa di [docker.com](https://www.docker.com/)

#### 📥 Langkah-langkah

1. **Clone repositori-nya**
   ```bash
   git clone https://github.com/madterasu/wordpress-docker.git
   ```

2. **Masuk ke folder project**

   ```bash
   cd wordpress-docker
   ```

3. **Jalankan project**

   ```bash
   docker compose up -d
   ```

4. **Akses di browser**

   ```
   http://localhost:8000
   ```

   Kalau berhasil, bakal muncul halaman instalasi WordPress 😻

5. **Kalau mau matiin**

   ```bash
   docker compose down
   ```

   Tenang, data database tetep aman kok karena pake volume!

---

#### 🐱 Rasakan Sensasi Ngedokering\~

Gitu rek caraku nge-deploy WordPress dengan gaya modern ala DevOps kekinian.
Dengan bantuan Docker & Docker Compose, urusan serveran jadi jauh lebih gampang dan fleksibel. Gak perlu takut ngulang-ngulang setup dari awal tiap pindah server 😆

Kalau kamu juga lagi belajar Docker, cobain proyek ini yaa.
Dan jangan lupa, **eksperimen terus** sampe nemu gaya DevOps-mu sendiri! 😼✨