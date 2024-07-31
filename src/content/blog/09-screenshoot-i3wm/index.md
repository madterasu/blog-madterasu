---
title: "Cara Mudah Mengambil Screenshot di i3 dengan Maim dan xclip"
description: "Cara screenshot di I3WM Debian 12"
date: "07/22/2024"
---

Halo teman-teman! Kali ini aku akan berbagi cara sederhana untuk mengambil screenshot di lingkungan i3 menggunakan beberapa alat keren: `maim`, `xclip`, dan `copyq`. Ini sangat cocok buat kalian yang suka mengatur segala sesuatu di desktop secara efisien.
Instalasi Bahan-Bahan

Pertama-tama, kita perlu menginstal beberapa alat yang akan kita gunakan. Buka terminal dan jalankan perintah berikut untuk menginstal `maim`, `xclip`, dan `copyq`:

```bash
sudo apt install maim xclip copyq
```

### Konfigurasi I3

Setelah semua alat terinstal, saatnya mengonfigurasi i3 agar bisa mengambil screenshot dengan mudah. Buka file konfigurasi i3 di `~/.config/i3/config` dan tambahkan kode berikut:

```bash
## Screenshots
bindsym Print exec --no-startup-id maim "/home/$USER/Pictures/$(date)"
bindsym $mod+Print exec --no-startup-id maim --window $(xdotool getactivewindow) "/home/$USER/Pictures/$(date)"
bindsym Shift+Print exec --no-startup-id maim --select "/home/$USER/Pictures/$(date)"

## Clipboard Screenshots
bindsym Ctrl+Print exec --no-startup-id maim | xclip -selection clipboard -t image/png
bindsym Ctrl+$mod+Print exec --no-startup-id maim --window $(xdotool getactivewindow) | xclip -selection clipboard -t image/png
bindsym Ctrl+Shift+Print exec --no-startup-id maim --select | xclip -selection clipboard -t image/png
```
Penjelasan singkat tentang konfigurasi ini:

- `Print` akan mengambil screenshot penuh layar dan menyimpannya di folder Pictures.
- `$mod+Print` akan mengambil screenshot dari jendela aktif.
- `Shift+Print` akan memungkinkan kalian memilih area tertentu untuk diambil screenshot-nya. Kombinasi dengan `Ctrl` akan menyalin screenshot langsung ke clipboard.

Setelah menambahkan kode tersebut, jangan lupa untuk me-reload konfigurasi i3 dengan menekan `super + shift + r`. Ini akan menerapkan perubahan dan langsung membuat konfigurasi baru siap digunakan.

Dengan pengaturan ini, kalian bisa mengambil screenshot dengan mudah dan cepat. Selamat mencoba, dan semoga kalian suka dengan cara baru ini untuk menangkap gambar di desktop kalian! 😸😸😸