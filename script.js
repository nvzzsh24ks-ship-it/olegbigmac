const oleg = document.getElementById("oleg")
const bigmac = document.getElementById("bigmac")
const scoreEl = document.getElementById("score")

let isJumping = false
let isAlive = true
let score = 0
let speed = 6
let bigmacX = 600

document.addEventListener("keydown", e => {
  if ((e.code === "Space" || e.code === "ArrowUp") && !isJumping && isAlive) {
    isJumping = true
    oleg.classList.add("jump")
    setTimeout(() => {
      oleg.classList.remove("jump")
      isJumping = false
    }, 600)
  }
})

setInterval(() => {
  if (!isAlive) return
  score++
  scoreEl.innerText = score
  if (score % 300 === 0) speed++
}, 10)

function moveBigmac() {
  if (!isAlive) return

  bigmacX -= speed
  bigmac.style.left = bigmacX + "px"

  if (bigmacX < -40) {
    bigmacX = 600 + Math.random() * 200
  }

  let olegBottom = parseInt(getComputedStyle(oleg).getPropertyValue("bottom"))
  let bigmacLeft = bigmacX

  if (bigmacLeft < 50 && bigmacLeft > 0 && olegBottom < 40) {
    isAlive = false
    bigmac.style.display = "none"
    alert("ОЛЕГ ЗʼЇВ БІГ МАК 🤡\nОчки: " + score)
    location.reload()
  }

  requestAnimationFrame(moveBigmac)
}

moveBigmac()