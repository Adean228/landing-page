const stripe = Stripe('SUA_CHAVE_PUBLICA_STRIPE');

document.addEventListener('DOMContentLoaded', () => {
    const metodoPagamento = document.getElementById('metodo-pagamento');
    const dadosCartaoCredito = document.getElementById('dados-cartao-credito');
    const dadosCartaoDebito = document.getElementById('dados-cartao-debito');
    const dadosPix = document.getElementById('dados-pix');
    const chavePixInput = document.getElementById('chave-pix');
    const qrCodeImg = document.getElementById('qrcode-img');

    metodoPagamento.addEventListener('change', () => {
        dadosCartaoCredito.classList.remove('active');
        dadosCartaoDebito.classList.remove('active');
        dadosPix.classList.remove('active');
        
        switch (metodoPagamento.value) {
            case 'cartao-credito':
                dadosCartaoCredito.classList.add('active');
                break;
            case 'cartao-debito':
                dadosCartaoDebito.classList.add('active');
                break;
            case 'pix':
                dadosPix.classList.add('active');
                break;
        }
    });

    chavePixInput.addEventListener('input', function() {
        var chavePix = this.value.trim();
        
        if (chavePix) {
            // Gere a URL do QR Code com base na chave Pix
            qrCodeImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(chavePix)}`;
            qrCodeImg.style.display = 'block';
        } else {
            qrCodeImg.style.display = 'none';
        }
    });
});
// pausa de 3 segunto pra volta pra pasta indexedDB.html

document.getElementById('paymentButton').addEventListener('click', function(event) {
  event.preventDefault(); // Impede o comportamento padrão do link
  setTimeout(function() {
    window.location.href = '/home/index.html'; // Redireciona após 4 segundos
  }, 4000); // 3000 milissegundos = 3 segundos
});

