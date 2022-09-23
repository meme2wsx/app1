let msg:HTMLParagraphElement

const html = `<h2><id="title">ようこそ</h2><p>typescriptが出力しています</p>`

window.addEventListener('load', () => {
    msg = document.querySelector('#msg')
    msg.innerHTML = html
})
