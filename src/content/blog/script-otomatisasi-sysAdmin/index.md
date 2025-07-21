---
title: "Script Otomatisasi SysAdmin - Health Check & Backup"
description: "Sebuah script Bash sederhana untuk monitoring kesehatan sistem dan backup otomatis direktori penting di Linux."
date: "July 21 2025"
repoURL: "https://github.com/madterasu/sysadmin-automation-scripts.git"
draft: false
---

Halo rek! 👋  
Pernah kepikiran gak sih, gimana caranya ngejaga server biar tetap sehat walafiat dan data penting tetep aman sentosa? 🐧📦  
Nahh, di blog kali ini aku mau share **script Bash sederhana** yang bisa bantu kamu buat ngelakuin dua hal penting itu secara otomatis. Cusss disimak yaa~ 😽

---

#### 🔧 Kenapa Perlu Otomatisasi?

Sebagai orang yang (pura-puranya) jadi System Administrator, kerjaan kita tuh gak jauh-jauh dari yang namanya:

- Ngecek kondisi server tiap hari 🧠  
- Mastiin ruang disk gak meledak 💣  
- Jagain penggunaan RAM biar gak jebol 🧵  
- Backup data penting biar gak ilang pas error 😭  

Daripada ngejalanin manual terus tiap hari, mending bikin script yang bisa *ngurusi semua itu sendiri*, kan?  
Hidup jadi lebih santai, tinggal minum kopi sambil ngeliatin server jalan otomatis~ ☕😺

---

#### 📜 Isi Script-nya Ngapain Aja?

Script ini punya dua fitur utama:

1. Laporan Kesehatan Sistem

Setiap kali script dijalankan, dia bakal bikin log yang isinya:

- 📦 Penggunaan Disk (`df -h`)  
- 🧠 Pemakaian RAM & Swap (`free -m`)  
- ⚙️ Rata-rata Beban CPU (`uptime`)  

Semua info itu disimpan ke file log, lengkap sama timestamp-nya. Jadi bisa dicek history-nya kapan aja~ 🕒

2. Backup Direktori Penting

Script ini juga bakal:

- Ngompres folder yang kamu tentuin jadi `.tar.gz`  
- Kasih timestamp biar gampang nyari versi terbaru  
- Nyimpen hasilnya ke folder tujuan yang udah kamu tentuin sebelumnya  

Jadi misal tiba-tiba server rusak atau file kehapus, tinggal ambil dari backup. Nyawaa terselamatkan! 😹

---

#### 🚀 Cara Pakai Script-nya Gimana, Kak?

Tenang, gampang kok! Ini langkah-langkahnya:

1. Clone dulu repo-nya:

```bash
git clone https://github.com/madterasu/sysadmin-automation-scripts.git
cd sysadmin-automation-scripts
```

2. Atur Konfigurasi

Buka file `health_check_and_backup.sh`, terus ubah bagian variabel berikut sesuai kebutuhanmu:

```bash
BACKUP_DIR="/home/user/data"
BACKUP_DEST="/home/user/backup"
LOG_FILE="/home/user/system_health.log"
```

3. Kasih Izin Eksekusi

Biar script-nya bisa dijalankan, kasih izin eksekusi dulu:

```bash
chmod +x health_check_and_backup.sh
```

4. Jalankan Script-nya

Langsung eksekusi script-nya dengan cara berikut:

```bash
./health_check_and_backup.sh
```

Hasilnya:

* File log dengan info sistem akan tersimpan di `LOG_FILE`
* File backup akan muncul di `BACKUP_DEST` dengan format nama:
  `backup_YYYY-MM-DD_HH-MM-SS.tar.gz`

---

#### Biar Jalan Otomatis Setiap Hari

Kalau pengin script ini dijalankan otomatis setiap hari (misalnya jam 02:00 pagi), tinggal tambahkan baris berikut ke crontab kamu:

##### Buka crontab:

```bash
crontab -e
```

##### Tambahkan baris ini:

```bash
0 2 * * * /path/ke/script/anda/health_check_and_backup.sh
```

Sekarang script kamu bakal jalan tiap hari jam 2 pagi secara otomatis\~ 😴✨

---

#### 📁 Contoh Isi Script

Berikut contoh isi file `health_check_and_backup.sh`:

```bash
#!/bin/bash

# === Konfigurasi ===
BACKUP_DIR="/home/user/data"
BACKUP_DEST="/home/user/backup"
LOG_FILE="/home/user/system_health.log"
TIMESTAMP=$(date +"%Y-%m-%d_%H-%M-%S")

# === Laporan Kesehatan Sistem ===
echo "[$TIMESTAMP] Mulai pemeriksaan sistem..." >> "$LOG_FILE"
echo "Disk Usage:" >> "$LOG_FILE"
df -h >> "$LOG_FILE"
echo -e "\nMemory Usage:" >> "$LOG_FILE"
free -m >> "$LOG_FILE"
echo -e "\nCPU Load:" >> "$LOG_FILE"
uptime >> "$LOG_FILE"
echo "[$TIMESTAMP] Pemeriksaan selesai ✅" >> "$LOG_FILE"
echo -e "----------------------------------------\n" >> "$LOG_FILE"

# === Backup Folder ===
TAR_FILE="$BACKUP_DEST/backup_$TIMESTAMP.tar.gz"
tar -czf "$TAR_FILE" "$BACKUP_DIR"
echo "[$TIMESTAMP] Backup disimpan di: $TAR_FILE" >> "$LOG_FILE"
```

---

Script ini memang sederhana, tapi manfaatnya gedhe rek!
Mulai dari simulasi tugas SysAdmin, project kampus, sampai server beneran, bisa banget pake ini.

Kalau kamu ngerasa script ini membantu, boleh dong dikasih ⭐ di GitHub\~
biar aku semangat terus bagi-bagi ilmu lainnya 😽

> *"Otomatisasi itu bukan buat males-malesan, tapi biar waktumu bisa dipake buat hal yang lebih penting\~"* 💡

Sampai jumpa di tulisan selanjutnya, rek! 🐱
