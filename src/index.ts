const html = `<h2><a id="title">ようこそ</a></h2><div id="content">typescriptが出力しています</div>`

window.addEventListener('load', () => {
    let msg: HTMLParagraphElement = document.querySelector('#msg')
    msg.innerHTML = html

    const title: HTMLAnchorElement = document.querySelector('#title')
    title.href = "http://localhost:8080"
    
    const content:HTMLDivElement = document.querySelector('#content')
    setDiv(content)
    addElement1(content)
    addElement2(content)

    function setDiv(content:HTMLDivElement) {
        content.style.position = "absolute"
        content.style.left = "100px"
        content.style.top = "300px"
        content.style.width = "300px"
        content.style.height ="300px"
        content.style.borderWidth = "3px"
        content.style.borderStyle = "solid"
        content.style.backgroundColor = "yellowgreen"
        content.textContent = "setDiv関数が上書きしました"
        content.style.borderColor = "blue"
    }
})

function addElement1(content: HTMLDivElement) {
    let div: HTMLDivElement = document.createElement('div')
    div.style.position = "absolute"
    div.style.width = "50px"
    div.style.height = "50px"
    div.style.backgroundColor = "red"
    div.style.top = "40px"
    div.textContent = "add1"
    content.appendChild(div)

}

function addElement2(content: HTMLDivElement) {
    let div: HTMLDivElement = document.createElement('div')
    div.style.position = "absolute"
    div.style.width = "50px"
    div.style.height = "50px"
    div.style.backgroundColor = "green"
    div.style.top = "100px"
    div.textContent = "add2"
    content.appendChild(div)
}
