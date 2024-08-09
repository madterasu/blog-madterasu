---
title: "Cara Mudah Mengambil Screenshot di i3 dengan Maim dan xclip"
description: "Screenshot pada i3 Debian 12"
date: "07/22/2024"
---

![screenshot i3wm debian 12](/madterasu-screenshot-i3wm-debian.png)

Halo rekk! Piye kabar eee? Semoga sehat terus lan semangat terus yo! 😺 Saiki aku bakal bagi-bagi cara gampang buat ngambil screenshot di lingkungan i3 dengan beberapa alat keren, seperti `maim`, `xclip`, lan `copyq`. Ini pas banget buat kalian sing suka ngatur desktop supaya lebih efisien.

#### Instalasi Bahan-Bahan

Pertama-tama, kita perlu nginstal beberapa alat sing bakal kita pake. Buka terminal lan jalankan perintah berikut buat nginstal `maim`, `xclip`, lan `copyq`:

```bash
sudo apt install maim xclip copyq
```

#### Konfigurasi I3

Yen kabeh alat wis terinstal, waktune ngatur i3 supaya bisa ngambil screenshot dengan gampang. Buka file konfigurasi i3 di `~/.config/i3/config` terus tambahi kode berikut:

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
Tak jelasno singkat tentang konfigurasi iki:

| Key Bindings    | Keterangan |
| :------ | --: |
|<kbd>print</kbd>| bakal ngambil screenshot kabeh layar lan nyimpené di folder Pictures. |
|<kbd>$mod</kbd> + <kbd>print</kbd>| bakal ngambil screenshot dari jendela aktif. |
|<kbd>$mod</kbd> + <kbd>print</kbd>| bakal ngijini kalian milih area tertentu kanggo diambil screenshot-nya. |
|<kbd>ctrl</kbd> + <kbd>$mod</kbd> + <kbd>print</kbd>| bakal nyalin screenshot langsung ke clipboard. |

Yen wis nambah kode tersebut, <mark>ojo lali nge-reload konfigurasi i3</mark> nganggo <kbd>super</kbd> + <kbd>shift</kbd> + <kbd>r</kbd>. Iki bakal menerapkan perubahan lan langsung nggawe konfigurasi anyar siap dipake. 😺

Kanthi pengaturan iki, kalian bisa njupuk screenshot kanthi gampang lan cepet. Selamat nyoba, lan semoga kalian suka karo cara anyar kanggo nangkep gambar ing desktop awamu kabeh bresss! 😸😸😸