$('#answer-example-share-button').on('click', () => {
  if (navigator.share) {
    navigator.share({
        title: 'Linktree Caio Rocha',
        text: 'Saiba todas as redes sociais do Caio Rocha',
        url: 'https://cvrocha.github.io/project-linktree/',
      })
      .then(() => console.log('Compartilhamento bem-sucedido'))
      .catch((error) => console.log('Erro ao compartilhar', error));
  } else {
    console.log('Compartilhar não suportado neste navegador, faça da maneira antiga.');
  }
});