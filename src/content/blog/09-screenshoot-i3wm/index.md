---
title: "Screenshoot di I3WM Debian 12"
description: "Cara screenshot di I3WM Debian 12"
date: "07/22/2024"
---

### Bahan

- maim
- xclip
- copyq

kita lakukan installasi bahan-bahan
```bash
sudo apt install maim xclip copyq
```
---

### Set up

tempelkan kode pada i3 config file ~/.config/i3/config
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
jika sudah bisa melakukan reload window manager `super + shift + r`
---