const html = `<h2><a id="title">ようこそ</a></h2><p>typescriptが出力しています</p>`

window.addEventListener('load', () => {
    let msg: HTMLParagraphElement = document.querySelector('#msg')
    msg.innerHTML = html

    const title: HTMLAnchorElement = document.querySelector('#title')
    title.href = "http://localhost:8080"
    
})
