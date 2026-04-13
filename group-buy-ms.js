document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('groupBuyForm');
  const note = document.getElementById('groupBuyNote');
  const quantityInput = document.getElementById('quantityKg');
  const whatsappNumber = '60177740471';

  if (!form) return;

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const data = new FormData(form);
    const quantity = Number(data.get('quantityKg') || 0);

    if (quantity < 100) {
      note.textContent = 'Minimum untuk borang group buy ini ialah 100kg.';
      quantityInput?.focus();
      return;
    }

    const messageLines = [
      'Hello, saya ingin tempah penghantaran group buy kejiranan ubi keledek untuk kawasan kejiranan Johor Bahru / Pontian.'
      '',
      `Nama: ${(data.get('name') || '').toString().trim()}`,
      `Telefon: ${(data.get('phone') || '').toString().trim()}`,
      `Syarikat / Kumpulan: ${(data.get('company') || '-').toString().trim() || '-'}`,
      `Jenis Pembeli: ${(data.get('buyerType') || '').toString().trim()}`,
      `Kuantiti: ${quantity}kg`,
      `Tarikh Penghantaran Pilihan: ${(data.get('deliveryDate') || '').toString().trim()}`,
      `Pilihan Pembungkusan: ${(data.get('packaging') || '').toString().trim()}`,
      `Jenis Penghantaran: ${(data.get('deliveryType') || '').toString().trim()}`,
      `Alamat: ${(data.get('address') || '').toString().trim()}`,
      `Poskod: ${(data.get('postcode') || '').toString().trim()}`,
      `Bandar: ${(data.get('city') || '').toString().trim()}`,
      `Negeri: ${(data.get('state') || '').toString().trim()}`,
      `Nota: ${(data.get('notes') || '-').toString().trim() || '-'}`,
      '',
      'Mohon sahkan stok, sebut harga, caj penghantaran, dan langkah seterusnya.'
    ];

    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(messageLines.join('\n'))}`;
    note.textContent = 'Sedang membuka permintaan group buy di WhatsApp...';
    window.open(url, '_blank');

    setTimeout(() => {
      note.textContent = 'Jika WhatsApp tidak dibuka, sila semak popup blocker dan cuba lagi.';
    }, 1500);
  });
});
