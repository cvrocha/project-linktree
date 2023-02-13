const shareButtons = document.querySelectorAll('.tile-share-button')
console.log(shareButtons)

async function copyText(e) {
//prevent button going to the site
    e.preventDefault()
    const link = this.getAttribute('link')
    console.log(link)
    try {
        await navigator.clipboard.writeText(link)
        alert("Copied the text: " + link)
    } catch (err) {
        console.error(err)
    }
}

let btn = document.querySelector('#copy');
btn.addEventListener('click', function(e) {
  let textArea = document.querySelector('.text');
  textArea.select();
  document.execCommand('copy');
  alert("Chave Pix copiada!");
});