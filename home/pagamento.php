<?php
// pagamento.php

// Obtém os dados do formulário
$nome = $_POST['nome'];
$email = $_POST['email'];
$telefone = $_POST['telefone'];
$plano = $_POST['plano'];
$pagamento = $_POST['pagamento'];

// Aqui você deve adicionar a lógica para processar o pagamento
// Pode ser uma integração com uma API de pagamento ou uma lógica de validação

// Exemplo de resposta de sucesso
echo "Pagamento realizado com sucesso para o plano: $plano";
?>
