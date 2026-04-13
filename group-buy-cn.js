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
      note.textContent = '此团购表单最低数量为 100kg。';
      quantityInput?.focus();
      return;
    }

    const messageLines = [
      '你好，我想预订新山 / 笨珍社区区域的番薯社区团购配送。',
      '',
      `姓名: ${(data.get('name') || '').toString().trim()}`,
      `电话: ${(data.get('phone') || '').toString().trim()}`,
      `公司 / 团体: ${(data.get('company') || '-').toString().trim() || '-'}`,
      `买家类型: ${(data.get('buyerType') || '').toString().trim()}`,
      `数量: ${quantity}kg`,
      `期望送货日期: ${(data.get('deliveryDate') || '').toString().trim()}`,
      `包装偏好: ${(data.get('packaging') || '').toString().trim()}`,
      `配送方式: ${(data.get('deliveryType') || '').toString().trim()}`,
      `地址: ${(data.get('address') || '').toString().trim()}`,
      `邮编: ${(data.get('postcode') || '').toString().trim()}`,
      `城市: ${(data.get('city') || '').toString().trim()}`,
      `州属: ${(data.get('state') || '').toString().trim()}`,
      `备注: ${(data.get('notes') || '-').toString().trim() || '-'}`,
      '',
      '请确认是否有货、报价、运费与下一步。'
    ];

    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(messageLines.join('\n'))}`;
    note.textContent = '正在打开 WhatsApp 团购询问...';
    window.open(url, '_blank');

    setTimeout(() => {
      note.textContent = '如果 WhatsApp 没有打开，请检查弹窗拦截后再试一次。';
    }, 1500);
  });
});
