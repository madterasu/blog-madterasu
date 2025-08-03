---
title: "Otomatisasi Build & Push Docker Image pakai GitHub Actions"
description: "Pengalaman pribadi bikin CI/CD pipeline sederhana yang bisa otomatis build dan push Docker image ke Docker Hub langsung dari GitHub!"
date: 2025-08-03
tags: ["CI/CD", "GitHub Actions", "Docker", "DevOps", "Automation"]
---

Halo rek! 👋  
Kali ini aku mau cerita soal project kecil tapi berdampak gede buat produktivitasku sebagai developer. Ceritane aku bikin pipeline CI/CD sederhana yang bisa **otomatis nge-build dan nge-push Docker image ke Docker Hub** tiap kali ada perubahan di repo GitHub 😼⚙️

Yok tak ceritakke step-step'e!

---

## 🔄 Alur Otomatisasi Workflow

Konsep sing tak pake sederhana banget, tapi efeknya woww!  
Jadi, tiap aku push update ke branch `main`, workflow GitHub Actions bakal langsung:

1. **Build Docker Image**
2. **Login ke Docker Hub**
3. **Push image terbaru ke Docker Hub**

Alur lengkap'e:
**Push ke GitHub** ➡️ **GitHub Actions jalan** ➡️ **Docker image dibangun** ➡️ **Image dikirim ke Docker Hub**  
Auto kayak deploy kecil-kecilan gitu lah 😆🚢

---

## ✨ Keahlian yang Tak Pelajari

Lewat proyek iki, aku belajar dan praktek langsung beberapa hal penting dalam dunia DevOps modern:

- 🛠️ **CI/CD Workflow** — Ngerancang otomasi dari koding sampe artefak siap pakai
- 🤖 **GitHub Actions** — Bikin file YAML yang ngatur step otomasi build & push
- 📦 **Docker** — Bungkus aplikasi Flask ke dalam image portabel
- 🔐 **Secrets Management** — Nggunain GitHub Secrets buat nyimpen kredensial Docker

Nggak cuma teorinya, tapi langsung ngoding dan ngrasakke manfaatnya 🙌

---

## ⚙️ Struktur Proyekku

Nah, ini struktur utama proyekku:

```bash
.
├── app.py                      # Aplikasi Flask sederhana
├── Dockerfile                 # Instruksi buat build image Docker
└── .github/
    └── workflows/
        └── docker-build.yml   # File workflow GitHub Actions
````

### Penjelasan Singkat:

* `app.py` → Aplikasi web sederhana pake Flask (buat testing image aja)
* `Dockerfile` → Isi instruksi build image dari aplikasi Python
* `docker-build.yml` → Script utama yang ngerun otomatis pas ada push ke `main`

---

## 🔐 Setup Secrets di GitHub

Supaya workflow bisa login ke Docker Hub, aku nyimpen kredensial lewat **GitHub Secrets**.
Carane:

1. Buka tab `Settings` repo
2. Pilih `Secrets and variables` → `Actions`
3. Tambahkan:

   * `DOCKERHUB_USERNAME`
   * `DOCKERHUB_TOKEN` (bisa pake Personal Access Token dari Docker)

Aman, terenkripsi, dan bisa langsung dipakai di file workflow 💪

---

## ✅ Hasil Akhir

Setelah semua setup beres, tinggal push kode ke branch `main`, dan cling! ✨
Docker image langsung muncul di Docker Hub.

* 🔍 Cek status build: [Actions Tab](https://github.com/madterasu/simple-api-cicd/actions)
* 🐳 Lihat Docker image: [Docker Hub Repository](https://hub.docker.com/r/madterasu/simple-api-cicd)

---

## 😺 Penutup

Otomatisasi kayak gini nggak cuma ngirit waktu, tapi juga bikin proses development lebih profesional.
Apalagi kalo udah mulai seriusin portofolio atau proyek bareng tim.
CI/CD is a must, rek! 💡

Kalau kamu juga penasaran atau pengin coba, silakan **fork repo-nya**, sesuaikan `Dockerfile` dan workflow-mu, lalu rasakan sensasi “ngoding yang mantep dan terstruktur”! 😎