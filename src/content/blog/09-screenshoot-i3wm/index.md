---
title: "Cara Mudah Mengambil Screenshot di i3 dengan Maim dan xclip"
description: "Cara screenshot di I3WM Debian 12"
date: "07/22/2024"
---

Halo rekk! Piye kabar eee? Semoga sehat terus lan semangat terus ya! 😺 Kali ini aku bakal bagi-bagi cara gampang buat ngambil screenshot di lingkungan i3 dengan beberapa alat keren: `maim`, `xclip`, lan `copyq`. Ini pas banget buat kalian sing suka ngatur desktop supaya lebih efisien.

#### Instalasi Bahan-Bahan

Pertama-tama, kita perlu nginstal beberapa alat sing bakal kita pake. Buka terminal lan jalankan perintah berikut buat nginstal `maim`, `xclip`, lan `copyq`:

```bash
sudo apt install maim xclip copyq
```

#### Konfigurasi I3

Yen kabeh alat wis terinstal, waktunya ngatur i3 supaya bisa ngambil screenshot dengan gampang. Buka file konfigurasi i3 ing `~/.config/i3/config` lan tambahkan kode berikut:

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
Penjelasan singkat tentang konfigurasi iki:

- `Print` bakal ngambil screenshot kabeh layar lan nyimpené ing folder Pictures.
- `$mod+Print` bakal ngambil screenshot saka jendela aktif.
- `Shift+Print` bakal ngidini kalian milih area tartamtu kanggo diambil screenshot-nya. Kombinasi karo Ctrl bakal nyalin screenshot langsung ke clipboard.

Yen wis nambah kode kasebut, aja lali me-reload konfigurasi i3 nganggo `super + shift + r`. Iki bakal menerapkan perubahan lan langsung nggawe konfigurasi anyar siap dipake. 😺

Kanthi pengaturan iki, kalian bisa njupuk screenshot kanthi gampang lan cepet. Selamat nyoba, lan mugi kalian suka karo cara anyar kanggo nangkep gambar ing desktop kalian! 😸😸😸