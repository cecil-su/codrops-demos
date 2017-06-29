/* eslint-disable */
import mojs from 'mo-js'

function isIOSSafari () {
  const userAgent = window.navigator.userAgent
  return userAgent.match(/iPad/i) || userAgent.match(/iPhone/i)
}

function isTouch () {
  const isIETouch = navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0
  return [].indexOf.call(window, 'ontouchstart') > 0 || isIETouch
}

const isIOS = isIOSSafari()
const clickHandler = isIOS || isTouch() ? 'touchstart' : 'click'

function extend (a, b) {
  for (let key in b) {
    if (b.hasOwnProperty(key)) {
      a[key] = b[key]
    }
  }
  return a
}

class Animocon {
  constructor (el, options) {
    this.el = el
    this.options = {
      tweens: [new mojs.Burst()],
      onCheck: () => { return false },
      onUnCheck: () => { return false }
    }
    this.options = extend({}, this.options)
    extend(this.options, options)
    this.checked = false
    this.timeline = new mojs.Timeline()
    for (let i = 0, len = this.options.tweens.length; i < len; ++i) {
      this.timeline.add(this.options.tweens[i])
    }
    this.el.addEventListener(clickHandler, () => {
      if (this.checked) {
        this.options.onUnCheck()
      } else {
        this.options.onCheck()
        this.timeline.replay()
      }
      this.checked = !this.checked
    })
  }
}

export const iconClick = (el) => {
  el.forEach((item, i) => { 
    switch (i) {
      case 0:
        new Animocon(item, {
          tweens: [
            new mojs.Burst({
              parent: el,
              radius: {30: 90},
              count: 6,
              children: {
                fill: '#c0c1c3',
                options: 0.6,
                radius: 15,
                duration: 1700,
                easing: mojs.easing.bezier(0.1, 1, 0.3, 1)
              }
            }),
            new mojs.Shape({
              parent: item,
              type: 'circle',
              radius: {0: 60},
              fill: 'transparent',
              stroke: '#c0c1c3',
              strokeWidth: {20: 0},
              options: 0.6,
              duration: 700,
              easing: mojs.easing.sin.out
            }),
            new mojs.Tween({
              duration: 1200,
              onUpdate: (progress) => {
                if (progress > 0.3) {
                  const elpro = mojs.easing.elastic.out(1.43 * progress - 0.43)
                  item.querySelector('svg').style.WebkitTransform = item.querySelector('svg').style.transform = 'scale3d(' + elpro + ',' + elpro + ',1)'
                } else {
                  item.querySelector('svg').style.WebkitTransform = item.querySelector('svg').style.transform = 'scale3d(0, 0, 1)'
                }
              }
            })
          ],
          onCheck: () => {
            item.style.color = '#988ade'
          },
          onUnCheck: () => {
            item.style.color = '#c0c1c3'
          }
        })
        break
      case 1:
        new Animocon(item, {
          tweens: [
            new mojs.Burst({
              parent: item,
              count: 6,
              radius: {40: 90},
              timeline: { delay: 300 },
              children: {
                fill: '#c0c1c3',
                radius: 7,
                opacity: 0.6,
                duration: 1500,
                easing: mojs.easing.bezier(0.1, 1, 0.3, 1)
              }
            }),
            new mojs.Shape({
              parent: item,
              radius: {0: 50},
              fill: 'transparent',
              stroke: '#c0c1c3',
              strokeWidth: {35: 0},
              opacity: 0.6,
              duration: 600,
              easing: mojs.easing.ease.inout
            }),
            new mojs.Tween({
              duration: 1100,
              onUpdate: (progress) => {
                if (progress > 0.3) {
                  const elpro = mojs.easing.elastic.out(1.43 * progress - 0.43)
                  item.querySelector('svg').style.WebkitTransform = item.querySelector('svg').style.transform = 'scale3d(' + elpro + ',' + elpro + ',1)';
                } else {
                  item.querySelector('svg').style.WebkitTransform = item.querySelector('svg').style.transform = 'scale3d(0, 0, 1)'
                }
              }
            })
          ],
          onCheck: () => {
            item.style.color = '#988ade'
          },
          onUnCheck: () => {
            item.style.color = '#c0c1c3'
          }
        })
        break
      case 2:
        new Animocon(item, {
          tweens: [
            new mojs.Burst({
              parent: item,
              count: 6,
              radius: {40: 90},
              children: {
                fill: ['#988ADE', '#DE8AA0', '#8AAEDE', '#8ADEAD', '#DEC58A', '#8AD1DE'],
                opacity: 0.6,
                scale: 1,
                radius: {7: 0},
                duration: 1500,
                delay: 300,
                easing: mojs.easing.bezier(0.1, 1, 0.3, 1)
              }
            }),
            new mojs.Shape({
              parent: item,
              type: 'circle',
              scale: {0: 1},
              radius: 50,
              fill: 'transparent',
              stroke: '#988ade',
              strokeWidth: {35: 0},
              opacity: 0.6,
              duration: 750,
              easing: mojs.easing.bezier(0, 1, 0.5, 1)
            }),
            new mojs.Tween({
              duration: 1100,
              onUpdate: (progress) => {
                if (progress > 0.3) {
                  const elpro = mojs.easing.elastic.out(1.43 * progress - 0.43)
                  item.querySelector('svg').style.WebkitTransform = item.querySelector('svg').style.transform = 'scale3d(' + elpro + ',' + elpro + ',1)';
                } else {
                  item.querySelector('svg').style.WebkitTransform = item.querySelector('svg').style.transform = 'scale3d(0, 0, 1)'
                }
              }
            })
          ],
          onCheck: () => {
            item.style.color = '#988ade'
          },
          onUnCheck: () => {
            item.style.color = '#c0c1c3'
          }
        })
        break
      case 3:
        new Animocon(item, {
          tweens: [
            new mojs.Burst({
              parent: item,
              count: 6,
              radius: {40: 120},
              children: {
                fill: ['#988ADE', '#DE8AA0', '#8AAEDE', '#8ADEAD', '#DEC58A', '#8AD1DE'],
                opacity: 0.6,
                radius: 20,
                direction: [-1, -1, -1, 1, -1],
                swirlSize: 'rand(10, 14)',
                duration: 1500,
                easing: mojs.easing.bezier(0.1, 1, 0.3, 1),
                isSwirl: true
              }
            }),
            new mojs.Shape({
              parent: item,
              radius: 50,
              scale: {0: 1},
              fill: 'transparent',
              stroke: '#988ade',
              strokeWidth: {15: 0},
              opacity: 0.6,
              duration: 750,
              easing: mojs.easing.bezier(0, 1, 0.5, 1)
            }),
            new mojs.Tween({
              duration: 900,
              onUpdate: (progress) => {
                const scaleCurve = mojs.easing.path('M0,100 L25,99.9999983 C26.2328835,75.0708847 19.7847843,0 100,0')
                const scalePro = scaleCurve(progress)
                item.style.WebkitTransform = item.style.transform = 'scale3d('+ scalePro +', '+ scalePro +', 1)'
              }
            })
          ],
          onCheck: () => {
            item.style.color = '#988ade'
          },
          onUnCheck: () => {
            item.style.color = '#c0c1c3'
          }
        })
        break
      case 4:
        new Animocon(item, {
          tweens: [
            new mojs.Burst({
              parent: item,
              count: 15,
              radius: {20: 80},
              angle: {0: 140, easing: mojs.easing.bezier(0.1, 1, 0.3, 1)},
              children: {
                fill: '#988ade',
                radius: 20,
                opacity: 0.6,
                duration: 1500,
                easing: mojs.easing.bezier(0.1, 1, 0.3, 1)
              }
            }),
            new mojs.Tween({
              duration: 800,
              easing: mojs.easing.bezier(0.1, 1, 0.3, 1),
              onUpdate: (progress) => {
                const scaleCurve = mojs.easing.path('M0,100 L25,99.9999983 C26.2328835,75.0708847 19.7847843,0 100,0')
                const scalePro = scaleCurve(progress)
                item.style.WebkitTransform = item.style.transform = 'scale3d('+ scalePro +', '+ scalePro +', 1)'
              }
            })
          ],
          onCheck: () => {
            item.style.color = '#988ade'
          },
          onUnCheck: () => {
            item.style.color = '#c0c1c3'
          }
        })
        break
      case 5:
        new Animocon(item, {
          tweens: [
            new mojs.Burst({
              parent: item,
              radius: {40: 110},
              count: 20,
              children: {
                shape: 'line',
                fill: 'white',
                radius: {12: 0},
                scale: 1,
                stroke: '#988ade',
                strokeWidth: 2,
                duration: 1500,
                easing: mojs.easing.bezier(0.1, 1, 0.3, 1)
              }
            }),
            new mojs.Shape({
              parent: item,
              radius: {10: 60},
              fill: 'transparent',
              stroke: '#988ade',
              strokeWidth: {30: 0},
              duration: 800,
              easing: mojs.easing.bezier(0.1, 1, 0.3, 1)
            }),
            new mojs.Tween({
              duration: 800,
              easing: mojs.easing.bezier(0.1, 1, 0.3, 1),
              onUpdate: (progress) => {
                const scaleCurve = mojs.easing.path('M0,100 L25,99.9999983 C26.2328835,75.0708847 19.7847843,0 100,0')
                const scalePro = scaleCurve(progress)
                item.style.WebkitTransform = item.style.transform = 'scale3d('+ scalePro +', '+ scalePro +', 1)'
              }
            })
          ],
          onCheck: () => {
            item.style.color = '#988ade'
          },
          onUnCheck: () => {
            item.style.color = '#c0c1c3'
          }
        })
        break
      case 6:
        new Animocon(item, {
          tweens: [
            new mojs.Burst({
              parent: item,
              radius: {90: 150},
              count: 18,
              children: {
                fill: '#988ade',
                opacity: 0.6,
                scale: 1,
                radius: {'rand(5, 20)': 0},
                swirlSize: 15,
                direction: [1, 1, -1, -1, 1, 1, -1, -1, -1],
                duration: 1200,
                delay: 200,
                easing: mojs.easing.bezier(0.1, 1, 0.3, 1),
                isSwirl: true
              }
            }),
            new mojs.Shape({
              parent: item,
              radius: {30: 100},
              fill: 'transparent',
              stroke: '#988ade',
              strokeWidth: {30: 0},
              opacity: 0.6,
              duration: 1500,
              easing: mojs.easing.bezier(0.1, 1, 0.3, 1)
            }),
            new mojs.Shape({
              parent: item,
              radius: {30: 80},
              fill: 'transparent',
              stroke: '#988ade',
              strokeWidth: {20: 0},
              opacity: 0.3,
              duration: 1600,
              delay: 320,
              easing: mojs.easing.bezier(0.1, 1, 0.3, 1)
            }),
            new mojs.Tween({
              duration: 1000,
              onUpdate: (progress) => {
                if (progress > 0.3) {
                  const elpro = mojs.easing.elastic.out(1.43 * progress - 0.43)
                  item.querySelector('svg').style.WebkitTransform = item.querySelector('svg').style.transform = 'scale3d(' + elpro + ',' + elpro + ',1)';
                } else {
                  item.querySelector('svg').style.WebkitTransform = item.querySelector('svg').style.transform = 'scale3d(0, 0, 1)'
                }
              }
            })
          ],
          onCheck: () => {
            item.style.color = '#988ade'
          },
          onUnCheck: () => {
            item.style.color = '#c0c1c3'
          }
        })
        break
      case 7:
        new Animocon(item, {
          tweens: [
            new mojs.Burst({
              parent: item,
              count: 28,
              radius: {50: 110},
              children: {
                fill: '#988ade',
                opacity: 0.6,
                radius: {'rand(5, 20)': 0},
                scale: 1,
                swirlSize: 15,
                duration: 1600,
                easing: mojs.easing.bezier(0.1, 1, 0.3, 1),
                isSwirl: true
              }
            }),
            new mojs.Burst({
              parent: item,
              count: 18,
              angle: {0: 10},
              radius: {140: 200},
              children: {
                fill: '#988ade',
                shape: 'line',
                opacity: 0.6,
                radius: {'rand(5, 20)': 0},
                scale: 1,
                stroke: '#988ade',
                strokeWidth: 2,
                duration: 1800,
                delay: 300,
                easing: mojs.easing.bezier(0.1, 1, 0.3, 1)
              }
            }),
            new mojs.Burst({
              parent: item,
              count: 18,
              radius: {40: 80},
              children: {
                fill: '#988ade',
                opacity: 0.6,
                radius: {'rand(5, 20)': 0},
                scale: 1,
                swirlSize: 15,
                duration: 2000,
                delay: 500,
                easing: mojs.easing.bezier(0.1, 1, 0.3, 1),
                isSwirl: true
              }
            }),
            new mojs.Burst({
              parent: item,
              count: 20,
              angle: {0: -10},
              radius: {90: 130},
              children: {
                fill: '#988ade',
                opacity: 0.6,
                radius: {'rand(5, 20)': 0},
                scale: 1,
                duration: 3000,
                delay: 750,
                easing: mojs.easing.bezier(0.1, 1, 0.3, 1)
              }
            }),
            new mojs.Tween({
              duration: 400,
              easing: mojs.easing.back.out,
              onUpdate: (progress) => {
                const scaleCurve = mojs.easing.path('M0,100 L25,99.9999983 C26.2328835,75.0708847 19.7847843,0 100,0')
                const scalePro = scaleCurve(progress)
                item.style.WebkitTransform = item.style.transform = 'scale3d('+ scalePro +', '+ scalePro +', 1)'
              }
            })
          ],
          onCheck: () => {
            item.style.color = '#988ade'
          },
          onUnCheck: () => {
            item.style.color = '#c0c1c3'
          }
        })
        break
      case 8:
        new Animocon(item, {
          tweens: [
            new mojs.Burst({
              parent: item,
              count: 6,
              radius: {40: 90},
              angle: 135,
              degree: 90,
              children: {
                fill: ['#988ADE', '#DE8AA0', '#8AAEDE', '#8ADEAD', '#DEC58A', '#8AD1DE'],
                scale: 1,
                radius: {7: 0},
                opacity: 0.6,
                duration: 1500,
                delay: 350,
                easing: mojs.easing.bezier(0.1, 1, 0.3, 1)
              }
            }),
            new mojs.Burst({
              parent: item,
              count: 6,
              radius: {40: 100},
              angle: 45,
              degree: -90,
              children: {
                fill: ['#988ADE', '#DE8AA0', '#8AAEDE', '#8ADEAD', '#DEC58A', '#8AD1DE'],
                scale: 1,
                radius: {7: 0},
                opacity: 0.6,
                duration: 1500,
                delay: 550,
                easing: mojs.easing.bezier(0.1, 1, 0.3, 1)
              }
            }),
            new mojs.Shape({
              parent: item,
              radius: {0: 50},
              fill: 'transparent',
              stroke: '#988ade',
              strokeWidth: {35: 0},
              opacity: 0.6,
              duration: 750,
              easing: mojs.easing.bezier(0, 1, 0.5, 1)
            }),
            new mojs.Shape({
              parent: item,
              radius: {0: 50},
              fill: 'transparent',
              stroke: '#988ade',
              strokeWidth: {35: 0},
              opacity: 0.6,
              duration: 750,
              delay: 200,
              easing: mojs.easing.bezier(0, 1, 0.5, 1)
            }),
            new mojs.Tween({
              duration: 1500,
              onUpdate: (progress) => {
                item.querySelector('svg').style.WebkitTransformOrigin = item.style.transformOrigin = '-10% 50%'
                if (progress > 0.3) {
                  const elpro = mojs.easing.elastic.out(1.43 * progress - 0.43)
                  item.querySelector('svg').style.WebkitTransform = item.querySelector('svg').style.transform = 'scale3d(' + elpro + ',' + elpro + ',1) rotate3d(0, 0, 1,' + 90 * (1 - elpro) + 'deg)';
                } else {
                  item.querySelector('svg').style.WebkitTransform = item.querySelector('svg').style.transform = 'scale3d(0, 0, 1)'
                }
              }
            })
          ],
          onCheck: () => {
            item.style.color = '#988ade'
          },
          onUnCheck: () => {
            item.style.color = '#c0c1c3'
          }
        })
        break
      case 9:
        new Animocon(item, {
          tweens: [
            new mojs.Burst({
              parent: item,
              radius: {80: 130},
              degree: 90,
              angle: 135,
              count: 6,
              children: {
                shape: 'line',
                fill: '#c0c1c3',
                scale: 1,
                radius: {30: 0},
                opacity: 0.6,
                duration: 600,
                stroke: '#6f97f7',
                strokeWidth: {1: 2},
                easing: mojs.easing.bezier(0.1, 1, 0.3, 1)
              }
            }),
            new mojs.Tween({
              duration: 400,
              easing: mojs.easing.ease.out,
              onUpdate: (progress) => {
                const opacityCurve = mojs.easing.path('M1,0 C1,0 26,100 51,100 C76,100 101,0 101,0')
                const translationCurve = mojs.easing.path('M0,100 C0,0 50,0 50,0 L50,100 L50,200 C50,200 50,100 100,100')
                const colorCurve = mojs.easing.path('M0,100 L50,100 L50,0 L100,0')
                const opacityPro = opacityCurve(progress)
                item.querySelector('svg').style.opacity = opacityPro

                const translationPro = translationCurve(progress)
                item.querySelector('svg').style.WebkitTransform = item.querySelector('svg').style.transform = 'translate3d(0, ' + -150 * translationPro + '%, 0)'
                // 
                const colorPro = colorCurve(progress)
                item.style.color = colorPro ? '#6f97f7' : '#c0c1c3'
              }
            })
          ],
          onCheck: () => {
            item.style.color = '#988ade'
          },
          onUnCheck: () => {
            item.style.color = '#c0c1c3'
          }
        })
        break
      case 10:
        new Animocon(item, {
          tweens: [
            new mojs.Shape({
              parent: item,
              radius: {0: 95},
              fill: 'transparent',
              stroke: '#c0c1c3',
              strokeWidth: {50: 0},
              opacity: 0.4,
              duration: 1000,
              delay: 100,
              easing: mojs.easing.bezier(0, 1, 0.5, 1)
            }),
            new mojs.Shape({
              parent: item,
              radius: {0: 80},
              fill: 'transparent',
              stroke: '#c0c1c3',
              strokeWidth: {40: 0},
              opacity: 0.2,
              duration: 1800,
              delay: 300,
              easing: mojs.easing.bezier(0, 1, 0.5, 1)
            }),
            new mojs.Tween({
              duration: 1300,
              easing: mojs.easing.ease.out,
              onUpdate: (progress) => {
                const opacityCurve = mojs.easing.path('M0,0 C0,87 27,100 40,100 L40,0 L100,0')
                const scaleCurve = mojs.easing.path('M0,0c0,80,39.2,100,39.2,100L40-100c0,0-0.7,106,60,106')

                const opacityPro = opacityCurve(progress)
                item.style.opacity = opacityPro

                const scalePro = scaleCurve(progress)
                item.querySelector('svg').style.WebkitTransform = item.querySelector('svg').style.transform = 'scale3d(' + scalePro + ',' + scalePro + ',1)'


                const colorPro = opacityCurve(progress)
                item.style.color = colorPro >= 1 ? '#e97171' : '#c0c1c3'
              }
            })
          ],
          onUnCheck: () => {
            item.style.color = '#c0c1c3'
          }
        })
        break
      case 11:
        new Animocon(item, {
          tweens: [
            new mojs.Burst({
              parent: item,
              count: 2,
              radius: {10: 90},
              angle: 92,
              top: '90%',
              children: {
                shape: 'line',
                fill: '#c0c1c13',
                scale: 1,
                radius: {40: 0},
                stroke: '#c0c1c3',
                strokeWidth: {4: 1},
                strokeLinecap: 'round',
                opacity: 0.5,
                duration: 500,
                delay: 200,
                easing: mojs.easing.bezier(0.1, 1, 0.3, 1)
              }
            }),
            new mojs.Burst({
              parent: item,
              count: 3,
              radius: {10: 40},
              angle: 182,
              top: '90%',
              children: {
                shape: 'line',
                fill: '#c0c1c13',
                scale: 1,
                radius: {10: 0},
                stroke: '#c0c1c3',
                strokeWidth: {4: 1},
                strokeLinecap: 'round',
                opacity: 0.5,
                duration: 600,
                delay: 200,
                easing: mojs.easing.bezier(0.1, 1, 0.3, 1)
              }
            }),
            new mojs.Shape({
              parent: item,
              radius: {40: 0},
              radiusY: {20: 0},
              fill: '#c0c1c3',
              stroke: '#c0c1c3',
              strokeWidth: 0.3,
              top: '90%',
              duration: 100,
              easing: 'bounce.out'
            }),
            new mojs.Tween({
              duration: 500,
              easing: mojs.easing.bounce.out,
              onUpdate: (progress) => {
                const opacityCurve = mojs.easing.path('M0,100 L20,100 L20,1 L100,1')
                const translationCurve = mojs.easing.path('M0,100h20V0c0,0,0.2,101,80,101')

                const translationPro = translationCurve(progress)
                item.querySelector('svg').style.WebkitTransform = item.querySelector('svg').style.transform = 'translate3d(0, ' + -450 * translationPro + '%, 0)'

                const colorPro = opacityCurve(progress)
                item.style.color = colorPro ? '#99d892' : '#c0c1c3'
              }
            })
          ],
          onUnCheck: () => {
            item.style.color = '#c0c1c3'
          }
        })
        break
      case 12:
        new Animocon(item, {
          tweens: [
            new mojs.Burst({
              parent: item,
              count: 3,
              degree: 0,
              radius: {80: 250},
              angle: -90,
              children: {
                top: [0, 45, 0],
                left: [-25, 0, 25],
                shape: 'line',
                fill: '#c0c1c3',
                radius: {60: 0},
                scale: 1,
                stroke: '#988ade',
                opacity: 0.6,
                duration: 650,
                easing: mojs.easing.bezier(0.1, 1, 0.3, 1)
              }
            }),
            new mojs.Burst({
              parent: item,
              count: 6,
              radius: {60: 90},
              degree: -90,
              angle: 135,
              children: {
                shape: 'line',
                radius: {30: 0},
                scale: 1,
                stroke: '#988ade',
                strokeWidth: {2: 1},
                duration: 600,
                delay: 200,
                easing: mojs.easing.bezier(0.1, 1, 0.3, 1)
              }
            }),
            new mojs.Tween({
              duration: 1200,
              onUpdate: (progress) => {
                const elpro = mojs.easing.elastic.out(progress)
                item.querySelector('svg').style.WebkitTransform = item.querySelector('svg').style.transform = 'translate3d(' + -75 * (1 - elpro) + '%, 0, 0)'
              }
            })
          ],
          onCheck: () => {
            item.style.color = '#988ade'
          },
          onUnCheck: () => {
            item.style.color = '#c0c1c3'
          }
        })
        break
      case 13:
        new Animocon(item, {
          tweens: [
            new mojs.Shape({
              parent: item,
              duration: 750,
              type: 'circle',
              radius: {0: 40},
              fill: 'transparent',
              stroke: '#f35186',
              strokeWidth: {35: 0},
              opacity: 0.2,
              top: '45%',
              easing: mojs.easing.bezier(0, 1, 0.5, 1)
            }),
            new mojs.Shape({
              parent: item,
              duration: 500,
              delay: 100,
              type: 'circle',
              radius: {0: 20},
              fill: 'transparent',
              stroke: '#f35186',
              strokeWidth: {5: 0},
              opacity: 0.2,
              x: 40,
              y: -60,
              easing: mojs.easing.sin.out
            }),
            new mojs.Shape({
              parent: item,
              duration: 500,
              delay: 180,
              type: 'circle',
              radius: {0: 10},
              fill: 'transparent',
              stroke: '#f35186',
              strokeWidth: {5: 0},
              opacity: 0.5,
              x: -10,
              y: -80,
              easing: mojs.easing.sin.out
            }),
            new mojs.Shape({
              parent: item,
              duration: 800,
              delay: 240,
              type: 'circle',
              radius: {0: 20},
              fill: 'transparent',
              stroke: '#f35186',
              strokeWidth: {5: 0},
              opacity: 0.3,
              x: -70,
              y: -10,
              easing: mojs.easing.sin.out
            }),
            new mojs.Shape({
              parent: item,
              duration: 800,
              delay: 240,
              type: 'circle',
              radius: {0: 20},
              fill: 'transparent',
              stroke: '#f35186',
              strokeWidth: {5: 0},
              opacity: 0.4,
              x: -80,
              y: -50,
              easing: mojs.easing.sin.out
            }),
            new mojs.Shape({
              parent: item,
              duration: 1000,
              delay: 300,
              type: 'circle',
              radius: {0: 10},
              fill: 'transparent',
              stroke: '#f35186',
              strokeWidth: {5: 0},
              opacity: 0.2,
              x: 20,
              y: -100,
              easing: mojs.easing.sin.out
            }),
            new mojs.Shape({
              parent: item,
              duration: 600,
              delay: 330,
              type: 'circle',
              radius: {0: 25},
              fill: 'transparent',
              stroke: '#f35186',
              strokeWidth: {5: 0},
              opacity: 0.4,
              x: -40,
              y: -90,
              easing: mojs.easing.sin.out
            }),
            new mojs.Tween({
              duration: 1200,
              easing: mojs.easing.ease.out,
              onUpdate: (progress) => {
                if (progress > 0.3) {
                  const elpro = mojs.easing.elastic.out(1.43 * progress - 0.43)
                  item.querySelector('svg').style.WebkitTransform = item.querySelector('svg').style.transform = 'scale3d(' + elpro + ',' + elpro + ',1) rotate3d(0, 0, 1,' + 90 * (1 - elpro) + 'deg)';
                } else {
                  item.querySelector('svg').style.WebkitTransform = item.querySelector('svg').style.transform = 'scale3d(0, 0, 1)'
                }
              }
            })
          ],
          onCheck: () => {
            item.style.color = '#f35186'
          },
          onUnCheck: () => {
            item.style.color = '#c0c1c3'
          }
        })
        break
      case 14:
        new Animocon(item, {
          tweens: [
            new mojs.Burst({
              parent: item,
              top: '90%',
              count: 1,
              radius: {30: 100},
              degree: 20,
              angle: -90,
              children: {
                shape: 'line',
                fill: '#c0c1c3',
                radius: {60: 0},
                scale: 1,
                stroke: '#9bbadc',
                opacity: 0.6,
                duration: 500,
                easing: mojs.easing.bezier(0.1, 1, 0.3, 1)
              }
            }),
            new mojs.Tween({
              duration: 400,
              easing: mojs.easing.ease.inout,
              onUpdate: (progress) => {
                const opacityCurve = mojs.easing.path('M1,0 C1,0 26,100 51,100 C76,100 101,0 101,0')
                const translationCurve = mojs.easing.path('M0,100 C0,0 50,0 50,0 L50,100 L50,200 C50,200 50,100 100,100')
                const colorCurve = mojs.easing.path('M0,100 L50,100 L50,0 L100,0')

                const opacityPro = opacityCurve(progress)
                item.style.opacity = opacityPro

                const translationPro = translationCurve(progress)
                item.querySelector('svg').style.WebkitTransform = item.querySelector('svg').style.transform = 'translate3d(' + 350 * translationPro + '%, 0, 0)'

                const colorPro = colorCurve(progress)
                item.style.color = colorPro ? '#9bbadc' : '#c0c1c3'
              }
            })
          ],
          onUnCheck: () => {
            item.style.color = '#c0c1c3'
          }
        })
        break
      case 15:
        new Animocon(item, {
          tweens: [
            new mojs.Burst({
              parent: item,
              count: 6,
              radius: {0: 150},
              degree: 50,
              angle: -25,
              opacity: 0.3,
              children: {
                fill: '#ff6767',
                scale: 1,
                radius: {'rand(5, 15)': 0},
                duration: 1700,
                delay: 350,
                easing: mojs.easing.bezier(0.1, 1, 0.3, 1)
              }
            }),
            new mojs.Burst({
              parent: item,
              count: 3,
              radius: {80: 250},
              degree: 0,
              angle: 180,
              children: {
                top: [45, 0, 45],
                left: [-15, 0, 15],
                shape: 'line',
                radius: {60: 0},
                scale: 1,
                stroke: '#ff6767',
                opacity: 0.4,
                duration: 650,
                delay: 200,
                easing: mojs.easing.bezier(0.1, 1, 0.3, 1)
              }
            }),
            new mojs.Tween({
              duration: 500,
              onUpdate: (progress) => {
                const opacityCurve = mojs.easing.path('M0,0 L25.333,0 L75.333,100 L100,0')
                const translationCurve = mojs.easing.path('M0,100h25.3c0,0,6.5-37.3,15-56c12.3-27,35-44,35-44v150c0,0-1.1-12.2,9.7-33.3c9.7-19,15-22.9,15-22.9')
                const squashCurve = mojs.easing.path('M0,100.004963 C0,100.004963 25,147.596355 25,100.004961 C25,70.7741867 32.2461944,85.3230873 58.484375,94.8579105 C68.9280825,98.6531013 83.2611815,99.9999999 100,100')

                const translationPro = translationCurve(progress)
                const squashPro = squashCurve(progress)
                const scaleX = 1 - 2 * squashPro
                const scaleY = 1 + 2 * squashPro
                item.querySelector('svg').style.WebkitTransform = item.querySelector('svg').style.transform = 'translate3d(0, ' + -180 * translationPro + 'px, 0) scale3d(' + scaleX + ', ' + scaleY + ', 1)'

                item.querySelector('svg').style.opacity = opacityCurve(progress)

                item.style.color = progress >= 0.75 ? '#ff6767' : '#c0c1c3'
              }
            })
          ],
          onUnCheck: () => {
            item.style.color = '#c0c1c3'
          }
        })
        break
      case 16:
        new Animocon(item, {
          tweens: [
            new mojs.Burst({
              parent: item,
              left: '65%',
              top: '40%',
              count: 5,
              radius: {40: 120},
              angle: 69,
              degree: 17,
              children: {
                shape: 'line',
                scale: 1,
                radius: {20: 0},
                stroke: ['#bf62a6', '#f28c33', '#f5d63d', '#79c267', '#78c5d6'],
                duration: 600,
                easing: mojs.easing.bezier(0.1, 1, 0.3, 1)
              }
            }),
            new mojs.Burst({
              parent: item,
              left: '65%',
              top: '40%',
              count: 4,
              radius: {20: 50},
              angle: 70,
              degree: 20,
              opacity: 0.6,
              children: {
                fill: ['#bf62a6', '#f28c33', '#f5d63d', '#79c267', '#78c5d6'],
                scale: 1,
                radius: {'rand(5, 20)': 0},
                isSwirl: true,
                swirlSize: 4,
                duration: 1600,
                delay: [0, 350, 200, 150, 400],
                easing: mojs.easing.bezier(0.1, 1, 0.3, 1)
              }
            }),
            new mojs.Tween({
              duration: 800,
              easing: mojs.easing.bezier(0.1, 1, 0.3, 1),
              onUpdate: (progress) => {
                const translationCurve = mojs.easing.path('M0,100 C0,72 10,-0.1 50,0 C89.6,0.1 100,72 100,100')
                const translationPro = translationCurve(progress)
                item.querySelector('svg').style.WebkitTransform = item.querySelector('svg').style.transform = 'translate3d(' + -20 * translationPro + '%, 0, 0)'
              }
            })
          ],
          onCheck: () => {
            item.querySelector('svg').style.fill = '#f198ca'
          },
          onUnCheck: () => {
            item.querySelector('svg').style.fill = '#c0c1c3'
          }
        })
        break
    }
    
  })
  
}

export const titleHover = (el) => {
  const moTimeline = new mojs.Timeline()
  const config = [{
    count: 6,
    left: '0%',
    top: '-50%',
    radius: {0: 60},
    duration: 1300
  }, {
    count: 14,
    left: '-100%',
    top: '-20%',
    radius: {0: 120},
    duration: 1600,
    delay: 100
  }, {
    count: 8,
    left: '130%',
    top: '-70%',
    radius: {0: 90},
    duration: 1500,
    delay: 200
  }, {
    count: 14,
    left: '-20%',
    top: '-150%',
    radius: {0: 60},
    duration: 2000,
    delay: 300
  }, {
    count: 12,
    left: '30%',
    top: '-100%',
    radius: {0: 60},
    duration: 1400,
    delay: 400
  }]
  config.forEach((item) => {
    const moBurst = new mojs.Burst({
      parent: el,
      count: item.count,
      left: item.left,
      top: item.top,
      radius: item.radius,
      children: {
        fill: ['#988ade', '#de8aa0', '#9aaede', '#8adead', '#dec58a', '#8ad1de'],
        duration: item.duration,
        delay: item.delay ? item.delay : 0,
        easing: mojs.easing.bezier(0.1, 1, 0.3, 1)
      }
    })
    moTimeline.add(moBurst)
  })
  moTimeline.replay()
}
