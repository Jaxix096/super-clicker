var data;
var onTracked = null;
var achDesc = [
    document.getElementById("ach1desc")
]
var check = [
    document.getElementById("check1")
]
data = new GameIntial()

data.layers.push({
    resource:new Decimal(0),
    rps:new Decimal(0),
    upgrades:[
        new Upgrade(new Decimal(50), new Decimal(1.5), new Decimal(1), 0, "Boost Gain", () => "Get boost x" + data.layers[0].upgrades[0].level.mul(3))
    ]
})

function updateGameArea() {
  data.layers[0].resource =  data.layers[0].resource.add(data.layers[0].rps)
  for (let i = 0; i < data.achievements.length; i++) {
      achDesc[i].innerText = data.achievements[i].desc
      if (data.achievements[i].length) {
          check[i].innerText = "(Unlocked)"
      } else {
          check[i].innerText = "(Locked)"
      }
  }
  document.getElementsByClassName("number")[0].innerText = data.layers[0].resource
  document.getElementsByClassName("hover")[0].onclick = function() {
    data.layers[0].resource =  data.layers[0].resource.add(1)
  }
}

setInterval(() => {
    updateGameArea()
}, 100);