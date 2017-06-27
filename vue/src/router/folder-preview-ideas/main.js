/* eslint-disable */
import anime from 'animejs'

class FolderFx {
  constructor (el) {
    this.dom = {}
    this.dom.el = el
    this.dom.wrapper = this.dom.el.querySelector('.folder__icon')
    this.dom.back = this.dom.wrapper.querySelector('.folder__icon-img--back')
    this.dom.cover = this.dom.wrapper.querySelector('.folder__icon-img--cover')
    this.dom.feedback = this.dom.el.querySelector('.folder__feedback')
    this.dom.preview = this.dom.el.querySelector('.folder__preview')
    this.dom.previewElems = this.dom.preview.children
    this.totalPreview = this.dom.previewElems.length
    this._initEvents()
  }

  _removeAnimTargets () {
    anime.remove(this.dom.preview)
    anime.remove(this.dom.previewElems)
    anime.remove(this.dom.wrapper)
    anime.remove(this.cover)
    anime.remove(this.dom.el)
    if (this.dom.feedback) {
      anime.remove(this.dom.feedback)
      this.dom.feedback.style.opacity = 0
    }
    if (this.dom.letters) {
      anime.remove(this.dom.letters)
    }
  }
  _initEvents () {
    this._mouseenterFn = () => {
      this.intimeout = setTimeout(() => {
        this._removeAnimTargets()
        this._in()
      }, 75)
    }
    this._mouseleaveFn = () => {
      clearTimeout(this.intimeout)
      this._removeAnimTargets()
      this._out()
    }
    this.dom.wrapper.addEventListener('mouseenter', this._mouseenterFn)
    this.dom.wrapper.addEventListener('mouseleave', this._mouseleaveFn)
  }
  _in () {
    [].slice.call(this.dom.previewElems).forEach((el) => {

    })
  }
  _out () {}
}

export class DeviFx extends FolderFx {
  _in () {
    anime({
      targets: this.dom.previewElems,
      duration: 600,
      delay: function (t, i, c) {
        return (c - i - 1) * 40
      },
      easing: [0.2, 1, 0.3, 1],
      translateY: (t, i, c) => {
        const radius = 150, startAngle = Math.PI / c, angle = startAngle / 2 + startAngle * i
        return Math.round(-1 * radius * Math.sin(angle)) + 'px'
      },
      translateX: (t, i, c) => {
        const radius = 150, startAngle = Math.PI / c, angle = startAngle / 2 + startAngle * i
        return Math.round(radius * Math.cos(angle)) + 'px'
      },
      scale: [0.7, 1],
      opacity: {
        value: 1,
        duration: 10,
        easing: 'linear'
      }
    })
  }
  _out () {
    anime({
      targets: this.dom.previewElems,
      duration: 600,
      delay: (t, i, c) => {
        return (c - i - 1) * 40
      },
      easing: [0.2, 1, 0.3, 1],
      translateY: 0,
      translateX: 0,
      scale: [1, 0.7],
      opacity: {
        value: 0,
        duration: 10,
        delay: (t, i, c) => {
          return (c - i - 1) * 40 + 600
        },
        easing: 'linear'
      }
    })
  }
}

export class RudrasFx extends FolderFx {
  _in () {
    anime({
      targets: this.dom.previewElems,
      duration: 800,
      delay: (t, i, c) => {
        return (c - i - 1) * 80
      },
      easing: 'easeOutElastic',
      translateY: (t, i, c) => {
        const radius = 130, startAngle = Math.PI / c, angle = startAngle / 2 + startAngle * i
        return Math.round(-1 * radius * Math.sin(angle)) + 'px'
      },
      translateX: (t, i, c) => {
        const radius = 130, startAngle = Math.PI / c, angle = startAngle / 2 + startAngle * i
        return Math.round(-1 * radius * Math.cos(angle)) + 'px'
      },
      scale: [0, 1],
      opacity: {
        value: 1,
        duration: 10,
        easing: 'linear'
      }
    })

    anime({
      targets: this.dom.cover,
      duration: 300,
      easing: 'easeOutExpo',
      rotateX: [0, -30]
    })
  }
  _out () {
    anime({
      targets: this.dom.previewElems,
      duration: 300,
      delay: (t, i, c) => {
        return i * 40
      },
      easing: 'easeInBack',
      translateY: 0,
      translateX: 0,
      scale: [1, 0],
      opacity: {
        value: 0,
        duration: 10,
        delay: (t, i, c) => {
          return i * 40 + 300
        },
        easing: 'linear'
      }
    })

    anime({
      targets: this.dom.cover,
      duration: 500,
      delay: (this.totalPreview - 1) * 40 + 200,
      easing: 'easeOutExpo',
      rotateX: 0
    })
  }
}

export class ArdraFx extends FolderFx {
  _in () {
    anime({
      targets: this.dom.previewElems,
      duration: 500,
      easing: [0.1, 1, 0.3, 1],
      translateY: function(t, i, c) {
        const radius = anime.random(110,160)
        return Math.round(radius * Math.sin(2*(i+1)*Math.PI/c)) + 'px'
      },
      translateX: function(t, i, c) {
        const radius = anime.random(110,160)
        return Math.round(radius * Math.cos(2*(i+1)*Math.PI/c)) + 'px'
      },
      rotate: function(t, i, c) {
        return [0,anime.random(-3,3) + 'deg']
      },
      scale: [0.4,1],
      opacity: {
        value: 1,
        duration: 10,
        easing: 'linear'
      }
    })

    anime({
      targets: this.dom.wrapper,
      duration: 500,
      easing: [0.1,1,0.3,1],
      scale: [1,0.8]
    })

    anime({
      targets: this.dom.feedback,
      easing: [0.1,1,0.3,1],
      opacity: [
        { 
          value:1, 
          duration:10
        },
        { 
          value:0, 
          duration:400, 
          delay:50 
        }
      ],
      scale: {
        value: [1,10],
        duration: 900
      }
    })
  }
  _out () {
    anime({
      targets: this.dom.previewElems,
      duration: 500,
      easing: [0.1,1,0.3,1],
      translateY: 0,
      translateX: 0,
      rotate: 0,
      scale: [1,0.4],
      opacity: {
        value: 0,
        duration: 250,
        delay: 250,
        easing: 'linear'
      }
    });

    anime({
      targets: this.dom.wrapper,
      duration: 500,
      easing: [0.1,1,0.3,1],
      scale: [0.8,1]
    });
  }
}

/* eslint-disable */
