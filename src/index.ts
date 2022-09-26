let msg: HTMLParagraphElement

const html = `<h3>赤枠内にパンダの絵を描きなさい。</h3><div id="content">wait...</div>`

window.addEventListener('load', () => {
    msg = document.querySelector('#msg')
    msg.innerHTML = html
    const content: HTMLDivElement = document.querySelector('#content')
    setDiv(content)
})

function addElement(event: MouseEvent) {
    const div: HTMLDivElement = document.createElement('div')
    div.style.position = "absolute"
    div.style.width = "25px"
    div.style.height = "25px"
    div.style.left = event.offsetX  + "px"
    div.style.top = event.offsetY  + "px"
    div.style.backgroundColor = "#000000"
    const target: HTMLElement = event.target as HTMLElement
    target.appendChild(div)
}

function setDiv(content: HTMLDivElement) {
    content.style.position = "absolute"
    content.style.left = "100px"
    content.style.top ="100px"
    content.style.width = "300px"
    content.style.height = "300px"
    content.style.borderWidth = "3px"
    content.style.borderStyle = "solid"
    content.style.borderColor = "red"
    content.style.backgroundColor = "white"
    content.textContent = ""
    content.addEventListener('click', addElement)
}

