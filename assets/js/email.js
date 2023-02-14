function copyEmail() {
  /* Copy text into clipboard */
  navigator.clipboard.writeText
      ("caiovrocha.contato@gmail.com");
      document.getElementById('email').innerHTML = 'Email copiado!'
}