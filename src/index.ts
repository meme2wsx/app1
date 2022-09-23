const html = `<h2><a id="title">ようこそ</a></h2><div id="content">typescriptが出力しています</div>`

window.addEventListener('load', () => {
    let msg: HTMLParagraphElement = document.querySelector('#msg')
    msg.innerHTML = html

    const title: HTMLAnchorElement = document.querySelector('#title')
    title.href = "http://localhost:8080"
    
    const content:HTMLDivElement = document.querySelector('#content')
    setDiv(content)

    function setDiv(content:HTMLDivElement) {
        content.style.width = "300px"
        content.style.height ="300px"
        content.style.borderWidth = "3px"
        content.style.borderStyle = "solid"
        content.style.backgroundColor = "yellowgreen"
        content.textContent = "setDiv関数が上書きしました"
    }
})
