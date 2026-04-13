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
      note.textContent = 'Minimum target is 100kg for this group-buy form.';
      quantityInput?.focus();
      return;
    }

    const messageLines = [
      'Hello, I would like to book a sweet potato neighbourhood group buy delivery for Johor Bahru / Pontian neighbourhood areas.',
      '',
      `Name: ${(data.get('name') || '').toString().trim()}`,
      `Phone: ${(data.get('phone') || '').toString().trim()}`,
      `Company / Group: ${(data.get('company') || '-').toString().trim() || '-'}`,
      `Buyer Type: ${(data.get('buyerType') || '').toString().trim()}`,
      `Quantity: ${quantity}kg`,
      `Preferred Delivery Date: ${(data.get('deliveryDate') || '').toString().trim()}`,
      `Preferred Packaging: ${(data.get('packaging') || '').toString().trim()}`,
      `Delivery Type: ${(data.get('deliveryType') || '').toString().trim()}`,
      `Address: ${(data.get('address') || '').toString().trim()}`,
      `Postcode: ${(data.get('postcode') || '').toString().trim()}`,
      `City: ${(data.get('city') || '').toString().trim()}`,
      `State: ${(data.get('state') || '').toString().trim()}`,
      `Notes: ${(data.get('notes') || '-').toString().trim() || '-'}`,
      '',
      'Please confirm stock availability, quotation, delivery charge, and next step.'
    ];

    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(messageLines.join('\n'))}`;
    note.textContent = 'Opening WhatsApp group-buy request...';
    window.open(url, '_blank');

    setTimeout(() => {
      note.textContent = 'If WhatsApp did not open, please check your popup blocker and try again.';
    }, 1500);
  });
});
