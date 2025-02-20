document.addEventListener('DOMContentLoaded', function() {
    const textElement = document.getElementById('text');
    const button = document.getElementById('celebrateButton');
    const audio = document.getElementById('birthdayAudio');
    const text = "Selamat Ulang Tahun yang ke 17 Tahun Keyla Zoya! Semoga Segala yang diinginkan disegerakan " ;
    let index = 0;

    function typeWriter() {
        if (index < text.length) {
            textElement.innerHTML += text.charAt(index);
            index++;
            setTimeout(typeWriter, 100);
        }
    }

    button.addEventListener('click', function() {
        typeWriter(); // Memulai efek mengetik
        audio.play(); // Memutar audio

        // Membuat efek kembang api yang lebih menarik
        createFireworks();
    });

    function createFireworks() {
        const container = document.querySelector('.container');

        for (let i = 0; i < 10; i++) { // Mengurangi jumlah kembang api menjadi 10
            const firework = document.createElement('div');
            firework.className = 'firework';
            firework.style.left = `${Math.random() * 100}%`; // Posisi horizontal acak
            firework.style.top = `${Math.random() * 100}%`; // Posisi vertikal acak
            firework.style.animationDuration = `${Math.random() * 2 + 1}s`; // Durasi animasi acak
            firework.style.backgroundColor = getRandomColor(); // Warna acak
            container.appendChild(firework);

            // Menambahkan partikel kecil untuk efek ledakan
            createParticles(firework);

            // Menghapus elemen kembang api setelah animasi selesai
            firework.addEventListener('animationend', () => {
                firework.remove();
            });
        }
    }

    function createParticles(parent) {
        const particleCount = 30; // Jumlah partikel per kembang api
        for (let i = 0; i < particleCount; i++) {
            const particle = document.createElement('div');
            particle.className = 'particle';
            particle.style.backgroundColor = getRandomColor(); // Warna partikel acak
            particle.style.animationDuration = `${Math.random() * 1 + 0.5}s`; // Durasi animasi partikel acak
            parent.appendChild(particle);
        }
    }

    function getRandomColor() {
        const colors = ['#ff4757', '#ff6b81', '#ffa502', '#ff7f50', '#ff6348', '#ffd700', '#00ced1', '#20b2aa', '#7b68ee'];
        return colors[Math.floor(Math.random() * colors.length)];
    }
});