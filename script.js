// --- Initial Page Load ---
        window.addEventListener('load', () => {
            // Ensure aboutPage starts visible & paymentPage hidden if JS enabled
            aboutPage.classList.add('active');
            aboutPage.classList.remove('hidden');
            paymentPage.classList.add('hidden');
            paymentPage.classList.remove('active');

            setTimeout(() => {
                loader.classList.add('hidden');
                // Don't explicitly show 'about' here, it's handled by initial classes
            }, 2000); // Keep loader a bit longer for effect
        });

const audio = document.getElementById('bg-music');

    // Musik dimulai dalam kondisi mute dan autoplay
    audio.play().catch(err => {
        console.warn('Autoplay gagal:', err);
    });

    // Fungsi untuk unmute saat pengguna berinteraksi
    const enableSound = () => {
        audio.muted = false;
        audio.play();
        document.removeEventListener('click', enableSound);
        document.removeEventListener('scroll', enableSound);
        document.removeEventListener('keydown', enableSound);
    };

    // Dengarkan interaksi pengguna
    document.addEventListener('click', enableSound);
    document.addEventListener('scroll', enableSound);
    document.addEventListener('keydown', enableSound);

const payments = [
    {
        nama: "Bank BCA",
        nomor: "1234567890",
        atasNama: "PT Contoh Jaya"
    },
    {
        nama: "Bank Mandiri",
        nomor: "9876543210",
        atasNama: "CV Kreatif Indo"
    },
    {
        nama: "OVO",
        nomor: "081234567890",
        atasNama: "Agus Wijaya"
    },
    {
        nama: "Dana",
        nomor: "081298765432",
        atasNama: "Siti Nurhaliza",
        qr: "images/dana_qr.png"
    },
    {
        nama: "QRIS",
        nomor: "Scan Barcode",
        atasNama: "PT QR Solutions",
        qr: "images/qris.png"
    }
];

const paymentList = document.getElementById('payment-list');

payments.forEach((payment, index) => {
    const div = document.createElement('div');
    div.className = 'payment-item';

    let qrSection = '';
    if (payment.qr) {
        qrSection = `
            <img src="${payment.qr}" alt="QR ${payment.nama}" class="qr-image">
            <a href="${payment.qr}" download class="download-button">Download QR</a>
        `;
    }

    div.innerHTML = `
        <h3>${payment.nama}</h3>
        <p><strong>Nomor:</strong> <span id="nomor-${index}">${payment.nomor}</span></p>
        <p><strong>Atas Nama:</strong> ${payment.atasNama}</p>
        ${qrSection}
        <button class="copy-button" onclick="copyToClipboard('${index}')">Salin Nomor</button>
    `;

    paymentList.appendChild(div);
});

function copyToClipboard(index) {
    const text = document.getElementById(`nomor-${index}`).innerText;
    navigator.clipboard.writeText(text).then(() => {
        alert("Nomor berhasil disalin!");
    }).catch(() => {
        alert("Gagal menyalin nomor.");
    });
}
