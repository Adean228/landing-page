var stripe = Stripe('sk_test_51Pze43FgJIQHevFcqL3JIGe1MRUMdTjAmgqJAC6SS0LoSvS2ZufuYWc4hCVmXexqlYTiNgcPSoue6TrJS2gZRibh00VSLSchVq'); 
const express = require('express');
const bodyParser = require('body-parser');
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const app = express();

// Use o middleware body-parser para ler o corpo das solicitações
app.use(bodyParser.json());

app.post('/webhook', (req, res) => {
    const sig = req.headers['stripe-signature'];
    const endpointSecret = 'seu_endpoint_secret';

    let event;

    try {
        event = stripe.webhooks.constructEvent(req.body, sig, endpointSecret);
    } catch (err) {
        console.log(`Webhook error: ${err.message}`);
        return res.status(400).send(`Webhook Error: ${err.message}`);
    }

    // Manipule os eventos recebidos
    if (event.type === 'payment_intent.succeeded') {
        const paymentIntent = event.data.object;
        console.log(`Pagamento bem-sucedido! ID: ${paymentIntent.id}`);
        // Aqui você pode realizar ações adicionais, como atualizar seu banco de dados
    }

    res.json({ received: true });
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
