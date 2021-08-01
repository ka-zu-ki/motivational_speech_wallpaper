let targetObj = document.getElementById("target")

class Wallpaper {
  constructor(text, color, url, align, justify, obj) {
    this.text = text
    this.color = color
    this.url = url
    this.align = align
    this.justify = justify
    this.obj = obj
  }

  alignSet() {
    const alignHash = {
      top: 'align-items-start',
      center: 'align-items-center',
      bottom: 'align-items-end'
    }
    return alignHash[this.align]
  }

  justifySet() {
    const justifyHash = {
      left: 'justify-content-start',
      center: 'justify-content-center',
      right: 'justify-content-end'
    }
    return justifyHash[this.justify]
  }
}

function motivationalSpeechWallpaper(elm) {
  // 画像用のdiv
  let divImg = document.createElement('div')
  divImg.style.backgroundImage = "url(" + elm.url + ")"
  divImg.classList.add('img')

  // テキストのcontainer
  let textP = document.createElement('div')
  textP.classList.add('col-12', 'd-flex', elm.alignSet(), elm.justifySet())

  // テキストのdiv
  let textC = document.createElement('div')
  textC.classList.add('col-5')

  // テキスト用のpタグ
  let textElm = document.createElement('p')
  textElm.classList.add('text')
  textElm.innerHTML = elm.text
  textElm.style.color = `#${elm.color}`

  elm.obj.append(divImg)
  divImg.append(textP)
  textP.append(textC)
  textC.append(textElm)
}

const elm1 = new Wallpaper("Perfection is achieved, not when there is nothing more to add, but when there is nothing left to take away. - Antoine de Saint", "2c3e50", "https://recursionist.io/img/different-job.png", "center", "center", targetObj)
const elm2 = new Wallpaper("The scientist discovers a new type of material or energy and the engineer discovers a new use for it. - Gordon Lindsay Glegg", "2c3e50", "https://cdn.pixabay.com/photo/2018/02/23/04/38/laptop-3174729_1280.jpg", "bottom", "left", targetObj)
const elm3 = new Wallpaper("Scientists study the world as it is, engineers create the world that never has been. - Theodore von Karman", "ecf0f1", "https://cdn.pixabay.com/photo/2017/05/10/19/29/robot-2301646_1280.jpg", "top", "right", targetObj)

const elms = [elm1, elm2, elm3]
elms.map(elm => motivationalSpeechWallpaper(elm))
