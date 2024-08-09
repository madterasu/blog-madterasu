---
title: "Belajar Bash Scripting: Jalan Pintas Jadi Master Terminal"
description: "Mempercantik terminal Linux dengan Figlet dan Lolcat pada i3 Debian 12"
date: "08/09/2024"
---
![bash-scripting-linux-dasar](/madterasi-bash-scripting.png)

Halo rekk! Piye kabare? Semoga sehat dan tetap semangat ya! 😺 Hari ini aku pengen ngajak kalian ngobrol-ngobrol soal salah satu senjata rahasia di dunia Linux yoiku Bash Scripting. Nah, bagi kalian yang udah sering ngubek-ngubek terminal, pasti udah gak asing lagi sama yang namanya bash. Tapi, tau nggak sih kalau bash itu bisa lebih dari sekadar ngetik-ngetik perintah biasa? Yuk, kita pelajari lebih lanjut!

#### Apa Itu Bash?

Bash, singkatan dari "Bourne Again SHell," adalah salah satu shell yang paling umum dipakai di sistem operasi Unix dan Linux. Shell sendiri adalah antarmuka antara pengguna dan sistem operasi yang memungkinkan kita buat menjalankan perintah, mengelola file, dan sebagainya. Bash adalah salah satu shell yang populer karena mudah dipelajari dan powerful banget! 😸

#### Kenapa Harus Belajar Bash Scripting?

Nah, mungkin kalian mikir, "Ngapain sih belajar Bash Scripting? Ribet, nggak sih?" Eitsss, jangan salah! 😺 Bash scripting itu justru bikin hidup kita lebih gampang, terutama kalau kalian sering melakukan tugas-tugas berulang di terminal. Bayangin aja, dengan satu script sederhana, kalian bisa melakukan banyak hal secara otomatis tanpa perlu ngulang-ngulang perintah yang sama. Hemat waktu, hemat tenaga, tinggal duduk manis aja sambil ngopi! 😸☕

#### Membuat Script Pertama Kita

Sekarang, kita langsung praktik bikin script pertama kita, yuk! Caranya gampang banget, rekk.

1. Buka terminal dan buat file baru dengan nama `pertama.sh`.
```bash
nano pertama.sh
```
2. Tulis perintah pertama kalian di dalam file tersebut.
```bash
#!/bin/bash
echo "Halo, Dunia! Ini adalah script bash pertamaku!"
```
3. Simpan dan keluar dari nano dengan menekan <kbd>CTRL</kbd> + <kbd>X</kbd>, lalu <kbd>Y</kbd>, dan <kbd>Enter</kbd>.
4. Jalankan script yang udah kita buat.
```bash
bash pertama.sh
```

Dan tadaaa 🎊 ! Kalian baru aja bikin script bash pertama kalian. 😸 Mudah, kan?

###### Penjelasan Singkat

- `#!/bin/bash` : Baris ini adalah shebang, yang memberitahu sistem bahwa file ini akan dijalankan dengan bash.
- `echo` : Ini adalah perintah untuk mencetak teks ke layar. Kalian bisa modif sesuka hati.

#### Sedikit Trik dan Tips

Sekarang, setelah kalian punya script sederhana, ada beberapa trik yang bisa bikin script kalian lebih keren.

1. _**Variabel**_, Simpan data di dalam script dengan variabel.
```bash
nama="Madterasu"
echo "Halo, $nama! Selamat datang di dunia bash scripting!"
```
2. _**Looping**_, Ulangi perintah tertentu dengan loop.
```bash
for i in {1..5}
do
    echo "Ini adalah pengulangan ke-$i"
done
```
3. _**Kondisi (If-Else)**_, Buat script kalian lebih pintar dengan kondisi.
```bash
angka=10
if [ $angka -gt 5 ]; then
    echo "Angka ini lebih besar dari 5!"
else
    echo "Angka ini tidak lebih besar dari 5!"
fi
```
Piye piyee? Seru kan belajar bash scripting? Dengan bash scripting, kalian bisa jadi master terminal dan otomatisasi pekerjaan kalian jadi lebih mudah. Terus coba-coba dan eksplorasi, siapa tahu kalian bisa bikin script yang super keren! Sampai jumpa di artikel selanjutnya, dan tetap semangat belajar! 😸💻

---
Referensi :
[Wikipedia](https://en.wikipedia.org/wiki/Bash_(Unix_shell)), [The Linux Documentation Project](https://tldp.org/LDP/Bash-Beginners-Guide/html/index.html), [GNU](https://www.gnu.org/software/bash/manual/bash.html), [Shell Script](https://www.shellscript.sh/)