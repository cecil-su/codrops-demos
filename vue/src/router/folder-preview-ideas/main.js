/* eslint-disable */
import anime from 'animejs'
import charming from 'charming'

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

export class ShaktiFx extends FolderFx {
  _in () {
    anime({
      targets: this.dom.previewElems,
      duration: 500,
      delay: function(t, i, c) {
        return i*80;
      },
      easing: [0.1,1,0.3,1],
      rotate: function(t, i,c) { 
        return [0,-10*(c-i-1) - 15 + 'deg']
      },
      opacity: {
        value: 1,
        duration: 10,
        delay: function(t, i, c) {
          return i*80 + 10
        },
        easing: 'linear'
      }
    });

    anime({
      targets: this.dom.el,
      duration: 400,
      easing: [0.2,1,0.3,1],
      translateY: [0,15+'px']
    })
  }
  _out () {
    anime({
      targets: this.dom.previewElems,
      duration: 500,
      easing: [0.1,1,0.3,1],
      rotate: 0,
      opacity: {
        value: 0,
        duration: 20,
        delay: 80,
        easing: 'linear'
      }
    });

    anime({
      targets: this.dom.el,
      duration: 400,
      easing: [0.2,1,0.3,1],
      translateY: 0
    });
  }
}

export class KuberaFx extends FolderFx {
  _in () {
    anime({
      targets: this.dom.previewElems,
      duration: 400,
      easing: 'linear',
      delay: function(t, i, c) {
        return i*300;
      },
      translateY: function(t, i, c) {
        return -1*anime.random(180,250) + 'px';
      },
      translateX: function(t, i, c) {
        return anime.random(-25,25) + 'px';
      },
      rotate: function(t, i) {
        return anime.random(-20,20) + 'deg';
      },
      opacity: [
        { 
          value:1, 
          duration:10
        },
        { 
          value:0, 
          duration:200, 
          delay:200 
        }
      ],
      loop: true
    });

    anime({
      targets: this.dom.cover,
      duration: 400,
      easing: 'easeOutExpo',
      rotateX: [0,-40]
    });
  }
  _out () {
    anime({
      targets: this.dom.previewElems,
      duration: 100,
      easing: 'linear',
      rotate: 0,
      opacity: 0
    });

    anime({
      targets: this.dom.cover,
      duration: 300,
      easing: 'easeOutExpo',
      rotateX: 0
    });
  }
}

export class HariFx extends FolderFx {
  _in () {
    const firstStepDuration = 200
    anime({
      targets: this.dom.previewElems,
      duration: 800,
      delay: firstStepDuration,
      easing: 'easeOutElastic',
      elasticity: 400,
      translateY: function(t, i, c) {
        const radius = 140,
            startAngle = Math.PI / c,
            angle = startAngle/2 + startAngle*i;

        return Math.round(radius*Math.sin(angle)) + 'px';
      },
      translateX: function(t, i, c) {
        const radius = 140,
            startAngle = Math.PI / c,
            angle = startAngle/2 + startAngle*i;

        return Math.round(radius*Math.cos(angle)) + 'px';
      },
      scale: [0.5,1],
      opacity: {
        value: 1,
        duration: 10,
        easing: 'linear'
      }
    });

    anime({
      targets: this.dom.wrapper,
      translateY: [
        { 
          value: -20 + 'px', 
          duration: 800, 
          delay: firstStepDuration, 
          elasticity: 300 
        },
      ],
      scaleY: [
        { 
          value: 0.8, 
          duration: firstStepDuration, 
          easing: 'easeOutExpo' 
        },
        { 
          value: .9, 
          duration: 800, 
          elasticity: 300 
        }
      ],
      scaleX: [
        { 
          value: 1.1, 
          duration: firstStepDuration, 
          easing: 'easeOutExpo' 
        },
        { 
          value: .9, 
          duration: 800, 
          elasticity: 300 
        }
      ]
    });

    anime({
      targets: this.dom.cover,
      duration: 400,
      delay: firstStepDuration,
      easing: 'easeOutExpo',
      rotateX: [0,-25]
    });

    anime({
      targets: this.dom.feedback,
      delay: firstStepDuration,
      easing: [0.1,1,0.3,1],
      opacity: [
        { 
          value:1, 
          duration:10
        },
        { 
          value:0, 
          duration:700, 
          delay:50 
        }
      ],
      scale: {
        value: [1,15],
        duration: 1100
      }
    });
  }
  _out () {
    anime({
      targets: this.dom.previewElems,
      duration: 400,
      easing: 'easeOutExpo',
      translateY: 0,
      translateX: 0,
      scale: [1,0.5],
      opacity: {
        value: 0,
        duration: 10,
        delay: 400,
        easing: 'linear'
      }
    });

    anime({
      targets: this.dom.wrapper,
      duration: 400,
      easing: 'easeOutExpo',
      translateY: 0,
      scaleY: 1,
      scaleX: 1
    });

    anime({
      targets: this.dom.cover,
      duration: 400,
      easing: 'easeOutExpo',
      rotateX: 0
    });
  }
}

export class RaviFx extends FolderFx {
  _in () {
    anime({
      targets: this._reorder(this.dom.previewElems),
      duration: 400,
      easing: [0.1,1,0.3,1],
      translateY: -70,
      translateX: function(t, i, c) {
        const interval = 60;
        return -1*interval*Math.floor(c/2)+interval*i  + (c/2 %1 != 0 ? 0 : interval/2) + 'px';
      },
      rotate: function(t, i, c) {
        const interval = 20;
        return -1*interval*Math.floor(c/2)+interval*i  + (c/2 %1 != 0 ? 0 : interval/2) + 'deg';
      },
      opacity: {
        value: 1,
        duration: 10,
        easing: 'linear'
      }
    });

    anime({
      targets: this.dom.cover,
      duration: 400,
      easing: 'easeOutExpo',
      rotateX: [0,-30]
    });
  }
  _out () {
    anime({
      targets: this.dom.previewElems,
      duration: 300,
      easing: 'easeInBack',
      translateY: 0,
      translateX: 0,
      rotate: 0,
      scale: [1,0.5],
      opacity: {
        value: 0,
        duration: 10,
        delay: 300,
        easing: 'linear'
      }
    });

    anime({
      targets: this.dom.cover,
      duration: 300,
      delay: 300,
      easing: 'easeOutExpo',
      rotateX: 0
    });

    anime({
      targets: this.dom.feedback,
      delay: 350,
      easing: [0.1,1,0.3,1],
      opacity: [
        { 
          value:1, 
          duration:10
        },
        { 
          value:0, 
          duration:500, 
          delay:20 
        }
      ],
      scale: {
        value: [1,5],
        duration: 800
      }
    });
  }
  _reorder (arr) {
    let newArray = [],
      i = Math.ceil(arr.length/2),
      j = i - 1;

    while (j >= 0) {
      newArray.push(arr[j--]);
      if (i < arr.length) {
        newArray.push(arr[i++]);
      }
    }
    return newArray;
  }
}

export class DurgaFx extends FolderFx {
  constructor (el) {
    super(el)
    Array.prototype.slice.call(this.dom.previewElems).forEach((item) => {
      charming(item)
    })
    this.dom.letters = [].slice.call(this.dom.preview.querySelectorAll('span'))
  }
  _in () {
    anime({
      targets: this.dom.letters,
      duration: 20,
      delay: function(t, i) {
        return i*20;
      },
      easing: 'linear',
      opacity: [0,1],
      begin: () => {
        this.dom.preview.style.opacity = 1;
      }
    });

    anime({
      targets: this.dom.cover,
      duration: 300,
      easing: 'easeOutExpo',
      rotateX: [0,-30]
    });
  }
  _out () {
    this.dom.preview.style.opacity = 0;

    anime({
      targets: this.dom.cover,
      duration: 300,
      easing: 'easeOutExpo',
      rotateX: 0
    });
  }
}

export class NandiFx extends FolderFx {
  _in () {
    anime({
      targets: this.dom.preview,
      duration: 300,
      easing: 'easeOutExpo',
      scale: {
        value: [0,1],
        easing: 'easeInOutSine'
      },
      translateY: {
        value: [0,-200]
      },
      opacity: {
        value: 1,
        duration: 50,
        easing: 'linear'
      }
    });

    anime({
      targets: this.dom.previewElems,
      duration: 400,
      delay: function(t, i) {
        return i*40 + 200;
      },
      easing: [0.1,1,0.3,1],
      scale: [0,1]
    });

    anime({
      targets: this.dom.cover,
      duration: 300,
      easing: [0.1,1,0.3,1],
      rotateX: [0,-30]
    });
  }
  _out () {
    anime({
      targets: this.dom.preview,
      duration: 500,
      easing: 'easeInOutSine',
      scale: {
        value: [1,0],
        easing: 'easeOutExpo'
      },
      translateY: 0,
      opacity: {
        value: 0,
        duration: 50,
        delay: 200,
        easing: 'linear'
      }
    });

    anime({
      targets: this.dom.previewElems,
      duration: 100,
      easing: 'easeOutQuad',
      scale: 0
    });

    anime({
      targets: this.dom.cover,
      duration: 600,
      delay: 100,
      easing: 'linear',
      rotateX: 0
    });
  }
}

/* eslint-disable */
