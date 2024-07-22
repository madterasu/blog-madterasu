---
title: "Screenshoot di I3WM Debian 12"
description: "Melakukan screenshot di I3WM Debian 12"
date: "07/22/2024"
---

### Bahan

- maim
- xclip
- copyq

---

### Set up

tempel kode on yout i3 config file ~/.config/i3/config

```
## Screenshots
bindsym Print exec --no-startup-id maim "/home/$USER/Pictures/$(date)"
bindsym $mod+Print exec --no-startup-id maim --window $(xdotool getactivewindow) "/home/$USER/Pictures/$(date)"
bindsym Shift+Print exec --no-startup-id maim --select "/home/$USER/Pictures/$(date)"

## Clipboard Screenshots
bindsym Ctrl+Print exec --no-startup-id maim | xclip -selection clipboard -t image/png
bindsym Ctrl+$mod+Print exec --no-startup-id maim --window $(xdotool getactivewindow) | xclip -selection clipboard -t image/png
bindsym Ctrl+Shift+Print exec --no-startup-id maim --select | xclip -selection clipboard -t image/png
```

---

Reload window manager `super + shift + r`