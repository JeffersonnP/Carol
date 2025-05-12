function atualizarContagem() {
    const destino = new Date('2025-05-21T00:00:00');
    const agora = new Date();
    const diferencaMs = destino - agora;
  
    if (diferencaMs <= 0) {
      document.getElementById('contador').textContent = "Chegou o seu dia especial! 💖";
      return;
    }
  
    const horas = Math.floor(diferencaMs / (1000 * 60 * 60));
  
    document.getElementById('contador').textContent =
      `Faltam ${horas} horas para seu dia especial! 💞`;
  }
  
  // Atualiza ao carregar a página e a cada 30 segundos
  atualizarContagem();
  setInterval(atualizarContagem, 30000);
  