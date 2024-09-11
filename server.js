const express = require('express');
const stripe = require('stripe')('sua-chave-secreta-do-stripe'); // Sua chave secreta
const app = express();
const port = 3000;

// Middleware para servir arquivos estáticos
app.use(express.static('public'));

// Middleware para analisar o corpo das requisições
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post('/create-checkout-session', async (req, res) => {
    const session = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        line_items: [{
            price_data: {
                currency: 'BRL',
                product_data: {
                    name: 'Plano Básico', // Nome do produto
                },
                unit_amount: 9000, // Valor em centavos (R$90,00)
            },
            quantity: 1,
        }],
        mode: 'payment',
        success_url: 'http://localhost:3000/success.html',
        cancel_url: 'http://localhost:3000/cancel.html',
    });

    res.json(session.id);
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
