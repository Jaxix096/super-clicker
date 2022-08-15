var shadowItems = [
    document.getElementById('shadow1')
]

var shadowTextAttr = [
    shadowItems[0].getAttribute("text")
]

var shadowValueAttr = [
    shadowItems[0].getAttribute("value")
]

for (let i = 0; i < shadowItems.length; i++) {
    shadowItems[i].innerText = shadowTextAttr[0]
    shadowItems[i].style.textShadow = shadowValueAttr[0]
}