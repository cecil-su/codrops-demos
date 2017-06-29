<template>
  <div>
    <svg class="hidden">
      <symbol id="icon-arrow" viewBox="0 0 24 24">
        <title>arrow</title>
        <polygon points="6.3,12.8 20.9,12.8 20.9,11.2 6.3,11.2 10.2,7.2 9,6 3.1,12 9,18 10.2,16.8 "/>
      </symbol>
      <symbol id="icon-thumbs-up" viewBox="0 0 25 28">
        <title>thumbs-up</title>
        <path d="M4 21c0-0.547-0.453-1-1-1-0.562 0-1 0.453-1 1 0 0.562 0.438 1 1 1 0.547 0 1-0.438 1-1zM6.5 13v10c0 0.547-0.453 1-1 1h-4.5c-0.547 0-1-0.453-1-1v-10c0-0.547 0.453-1 1-1h4.5c0.547 0 1 0.453 1 1zM25 13c0 0.828-0.328 1.719-0.859 2.328 0.172 0.5 0.234 0.969 0.234 1.188 0.031 0.781-0.203 1.516-0.672 2.141 0.172 0.578 0.172 1.203 0 1.828-0.156 0.578-0.453 1.094-0.844 1.469 0.094 1.172-0.172 2.125-0.766 2.828-0.672 0.797-1.703 1.203-3.078 1.219h-2.016c-2.234 0-4.344-0.734-6.031-1.313-0.984-0.344-1.922-0.672-2.469-0.688-0.531-0.016-1-0.453-1-1v-10.016c0-0.516 0.438-0.953 0.953-1 0.578-0.047 2.078-1.906 2.766-2.812 0.562-0.719 1.094-1.391 1.578-1.875 0.609-0.609 0.781-1.547 0.969-2.453 0.172-0.922 0.359-1.891 1.031-2.547 0.187-0.187 0.438-0.297 0.703-0.297 3.5 0 3.5 2.797 3.5 4 0 1.281-0.453 2.188-0.875 3-0.172 0.344-0.328 0.5-0.453 1h4.328c1.625 0 3 1.375 3 3z"></path>
      </symbol>
      <symbol id="icon-drop" viewBox="0 0 24 24">
        <title>drop</title>
        <path d="M12,21c-3.6,0-6.6-3-6.6-6.6C5.4,11,10.8,4,11.4,3.2C11.6,3.1,11.8,3,12,3s0.4,0.1,0.6,0.3c0.6,0.8,6.1,7.8,6.1,11.2C18.6,18.1,15.6,21,12,21zM12,4.8c-1.8,2.4-5.2,7.4-5.2,9.6c0,2.9,2.3,5.2,5.2,5.2s5.2-2.3,5.2-5.2C17.2,12.2,13.8,7.3,12,4.8z"/><path d="M12,18.2c-0.4,0-0.7-0.3-0.7-0.7s0.3-0.7,0.7-0.7c1.3,0,2.4-1.1,2.4-2.4c0-0.4,0.3-0.7,0.7-0.7c0.4,0,0.7,0.3,0.7,0.7C15.8,16.5,14.1,18.2,12,18.2z"/>
      </symbol>
      <symbol id="icon-microphone" viewBox="0 0 18 28">
        <title>microphone</title>
        <path d="M18 11v2c0 4.625-3.5 8.437-8 8.937v2.063h4c0.547 0 1 0.453 1 1s-0.453 1-1 1h-10c-0.547 0-1-0.453-1-1s0.453-1 1-1h4v-2.063c-4.5-0.5-8-4.312-8-8.937v-2c0-0.547 0.453-1 1-1s1 0.453 1 1v2c0 3.859 3.141 7 7 7s7-3.141 7-7v-2c0-0.547 0.453-1 1-1s1 0.453 1 1zM14 5v8c0 2.75-2.25 5-5 5s-5-2.25-5-5v-8c0-2.75 2.25-5 5-5s5 2.25 5 5z"></path>
      </symbol>
      <symbol id="icon-map-marker" viewBox="0 0 16 28">
        <title>map-marker</title>
        <path d="M12 10c0-2.203-1.797-4-4-4s-4 1.797-4 4 1.797 4 4 4 4-1.797 4-4zM16 10c0 0.953-0.109 1.937-0.516 2.797l-5.688 12.094c-0.328 0.688-1.047 1.109-1.797 1.109s-1.469-0.422-1.781-1.109l-5.703-12.094c-0.406-0.859-0.516-1.844-0.516-2.797 0-4.422 3.578-8 8-8s8 3.578 8 8z"></path>
      </symbol>
      <symbol id="icon-heart" viewBox="0 0 28 28">
        <title>heart</title>
        <path d="M14 26c-0.25 0-0.5-0.094-0.688-0.281l-9.75-9.406c-0.125-0.109-3.563-3.25-3.563-7 0-4.578 2.797-7.313 7.469-7.313 2.734 0 5.297 2.156 6.531 3.375 1.234-1.219 3.797-3.375 6.531-3.375 4.672 0 7.469 2.734 7.469 7.313 0 3.75-3.437 6.891-3.578 7.031l-9.734 9.375c-0.187 0.187-0.438 0.281-0.688 0.281z"></path>
      </symbol>
      <symbol id="icon-shopping-cart" viewBox="0 0 26 28">
        <title>shopping-cart</title>
        <path d="M10 24c0 1.094-0.906 2-2 2s-2-0.906-2-2 0.906-2 2-2 2 0.906 2 2zM24 24c0 1.094-0.906 2-2 2s-2-0.906-2-2 0.906-2 2-2 2 0.906 2 2zM26 7v8c0 0.5-0.391 0.938-0.891 1l-16.312 1.906c0.078 0.359 0.203 0.719 0.203 1.094 0 0.359-0.219 0.688-0.375 1h14.375c0.547 0 1 0.453 1 1s-0.453 1-1 1h-16c-0.547 0-1-0.453-1-1 0-0.484 0.703-1.656 0.953-2.141l-2.766-12.859h-3.187c-0.547 0-1-0.453-1-1s0.453-1 1-1h4c1.047 0 1.078 1.25 1.234 2h18.766c0.547 0 1 0.453 1 1z"></path>
      </symbol>
    </svg>
    <main>
      <header class="codrops-header">
        <div class="codrops-links">
          <a class="codrops-icon codrops-icon--prev" href="https://tympanus.net/Development/MorphingBackgroundShapes/" title="Previous Demo"><svg class="icon icon--arrow"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-arrow"></use></svg></a>
          <a class="codrops-icon codrops-icon--drop" href="https://tympanus.net/codrops/?p=31283" title="Back to the article"><svg class="icon icon--drop"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-drop"></use></svg></a>
        </div>
        <a href="https://github.com/codrops/Animocons/" class="github-corner">
          <svg width="70" height="70" viewBox="0 0 250 250">
            <path d="M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z"></path>
            <path d="M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2" fill="#f9f9f9" style="transform-origin: 130px 106px;" class="octo-arm"></path>
            <path d="M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z" fill="#f9f9f9" class="octo-body"></path>
          </svg>
        </a>
        <h1 class="codrops-header__title"><span class="codrops-header__title--upper">ani<span class="dotted">mo</span>cons</span> Animated Icons with <a class="special-link" href="http://mojs.io/" @mouseenter="title">mo.js</a></h1>
        <p class="codrops-header__tagline">Animated icons powered by Oleg Solomka's motion graphics library <a href="http://mojs.io/">mo.js</a> and inspired by this <a href="https://dribbble.com/shots/2527200-Like-Animation">Dribbble shot</a> by Daryl Ginn</p>
      </header>
      <section class="content">
        <div class="grid">
          <div class="grid__item">
            <button class="icobutton"><svg class="icon icon-thumbs-up"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-thumbs-up"></use></svg></button>
          </div>
          <div class="grid__item">
            <button class="icobutton"><svg class="icon icon-thumbs-up"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-thumbs-up"></use></svg></button>
          </div>
          <div class="grid__item">
            <button class="icobutton"><svg class="icon icon-thumbs-up"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-thumbs-up"></use></svg></button>
          </div>
          <div class="grid__item">
            <button class="icobutton"><svg class="icon icon-thumbs-up"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-thumbs-up"></use></svg></button>
          </div>
          <div class="grid__item">
            <button class="icobutton"><svg class="icon icon-thumbs-up"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-thumbs-up"></use></svg></button>
          </div>
          <div class="grid__item">
            <button class="icobutton"><svg class="icon icon-thumbs-up"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-thumbs-up"></use></svg></button>
          </div>
          <div class="grid__item">
            <button class="icobutton"><svg class="icon icon-thumbs-up"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-thumbs-up"></use></svg></button>
          </div>
          <div class="grid__item">
            <button class="icobutton"><svg class="icon icon-thumbs-up"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-thumbs-up"></use></svg></button>
          </div>
          <div class="grid__item">
            <button class="icobutton"><svg class="icon icon-thumbs-up"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-thumbs-up"></use></svg></button>
          </div>
          <div class="grid__item">
            <button class="icobutton"><svg class="icon icon-thumbs-up"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-thumbs-up"></use></svg></button>
          </div>
          <div class="grid__item">
            <button class="icobutton"><svg class="icon icon-microphone"><use xlink:href="#icon-microphone"></use></svg></button>
          </div>
          <div class="grid__item">
            <button class="icobutton"><svg class="icon icon-map-marker"><use xlink:href="#icon-map-marker"></use></svg></button>
          </div>
          <div class="grid__item">
            <button class="icobutton"><svg class="icon icon-thumbs-up"><use xlink:href="#icon-thumbs-up"></use></svg></button>
          </div>
          <div class="grid__item">
            <button class="icobutton"><svg class="icon icon-heart"><use xlink:href="#icon-heart"></use></svg></button>
          </div>
          <div class="grid__item">
            <button class="icobutton"><svg class="icon icon-shopping-cart"><use xlink:href="#icon-shopping-cart"></use></svg></button>
          </div>
          <div class="grid__item">
            <button class="icobutton"><svg class="icon icon-heart"><use xlink:href="#icon-heart"></use></svg></button>
          </div>
          <div class="grid__item">
            <button class="icobutton">
              <svg viewBox="0 0 448.546 448.546" width="86px" height="86px">
                <path d="M385.7,172.2c-9.7-7.9-19.2-12.4-27.3-14.9c-9.9-3.1-17.5-3.2-20.6-3.2c-16.2,0-32.3,5.5-45.5,15.6c-6,4.6-12.6,8.3-19.5,11c-0.4-56.9-23-110.5-59.3-139.5c-2.3-4.1-5.1-7.9-8.5-11.3l-6-6.1l-4.6,5.2c-14.9-7.2-30.6-9.5-45.7-6.9c-11,2-20.2,9.2-24.6,19.5c-3.1,7.2-3.5,15.2-1.4,22.5c-1.7,0.8-3.3,1.6-4.8,2.6L9.3,1.5l80.4,107.4l-22.6,49.4c-5,10.9-4,23.3,2.6,33.2c6.4,9.5,17,15.2,28.5,15.2c6.1,0,12.2-1.7,17.4-4.8l17.3-10.3c-8.1,18.2-16.9,41-16.9,53.1c0,22.7,7.9,44.7,22.4,61.7c5,6,10.8,11.2,17.1,15.8V450h33h15h42v-110c23.5-2,55.1-15.9,83.1-30.8c-0.1,3.4-0.1,6.4-0.1,9.2V450h32h16h41l-0.6-201.4c0,0-0.6-34.4-8-47.2C401.9,189.5,396.1,180.7,385.7,172.2z M242.6,108.6c9.7,23.5,14.5,49.8,14.1,76.4c-4.1,0.7-8.3,1-12.6,1h-9.4c-2.3-16.2-8.9-56.5-22.2-87.7c5.1-8.3,7.7-17.9,8-27.5C229.2,81.6,236.8,94.4,242.6,108.6z M138.9,48c2.3-5.4,6.9-9.1,12.7-10.1c10.5-1.9,21.2-0.6,31.8,3.7L172.5,54c-1.2,1.1-2.8,1.7-4.8,1.7c-6.8,0-18.5,1.6-29.6,3.9C137,55.8,137.2,51.8,138.9,48z M70.9,57.2l32.5,19.5l-6.2,15.7L70.9,57.2z M107.5,188.2c-2.8,1.7-6,2.6-9.3,2.6c-6.1,0-11.8-3-15.2-8.1c-3.5-5.2-4-12-1.4-17.7l32.3-70.6c4.1-9,12-15.5,21.6-17.9c11.5-2.8,25.4-4.9,32.3-4.9c6.2,0,11.9-2.3,16.1-6.5L199,48c7.9,13.4,7.5,32.2-1.9,44.7l-2.9,3.8l2,4.3c0.6,1.2,1.1,2.5,1.7,3.8c4.2,9.9,4.5,21.3,0,31.1c-3.8,8.3-10.3,15-19.7,19.8c-13.2,6.9-27.2,7.7-27.4,7.7l0,0c-1.3,0.1-2.5,0.5-3.6,1.2L107.5,188.2z M188.4,337.4V409h-17v-77.5C176.8,334,182.5,336,188.4,337.4z M171.4,434v-9h17v9H171.4z M204.4,434v-9h25v9H204.4z M239.9,324.3c-0.7,0-1.4,0-2.1-0.1l-8.4-0.5V409h-25v-84.9l-6.6-1.1c-18.5-3.2-35.3-12.7-47.2-26.9c-12-14.2-18.6-32.5-18.6-51.4c0-10.8,12.4-41,24.6-65.9c6.2-0.8,17.4-3.1,28.5-8.8c9.2-4.7,19.3-12.3,25.8-24.4c6.2,26.1,8.9,48.9,8.9,49.2l0.8,7.1h23.6c21,0,41-6.8,57.8-19.7c10.4-7.9,23.1-12.3,35.7-12.3c6.3,0,12.5,1.1,18.4,3.2c1.9,0.7,3.4,1.3,4.5,2c6.4,3.6,12.2,8,17.3,13.1c15.1,15.1,23.2,30.7,23.2,52l0.1,168.7h-25v-83.4l-4.8-2.1c-10.4-4.5-17.2-14.8-17.2-26.4v-20.9l-12,7C296.8,309.7,260.5,324.3,239.9,324.3z M360.4,335.9V409h-16v-89.3C348.2,326.3,353.7,331.9,360.4,335.9z M344.4,434v-9h16v9H344.4z M376.4,434v-9h25v9H376.4z" />
                <path d="M161,128.1c7.4-10.7,4.6-25.5-6.1-32.8c-3.9-2.7-8.6-4.1-13.3-4.1c-7.8,0-15.1,3.8-19.5,10.3c-7.4,10.7-4.6,25.5,6.1,32.8c3.9,2.7,8.6,4.1,13.3,4.1h0C149.3,138.4,156.6,134.5,161,128.1z M147.8,119.1c-1.4,2.1-3.8,3.3-6.3,3.3c-1.5,0-3-0.5-4.3-1.3c-3.5-2.4-4.3-7.1-2-10.6c1.4-2.1,3.8-3.3,6.3-3.3c1.5,0,3,0.5,4.3,1.3c1.7,1.1,2.8,2.9,3.2,4.9C149.4,115.4,148.9,117.4,147.8,119.1z" />
                <path d="M363.3,171.6c-0.6,0-1.2,0-1.9-0.1c-6.6-0.5-18.3-3.7-21.8-9.8c-1.4-2.6-1.6-5.5-0.3-8v0c19.7-39.5,10.4-90.8,10.3-91.3l-2.7-14.4l78.3,37.2l-2.1,6.3c-0.3,0.8-6.8,20.1-17,39.4C391.7,158.2,377.6,171.6,363.3,171.6z M352.7,160.3C352.7,160.3,352.7,160.3,352.7,160.3C352.7,160.3,352.7,160.3,352.7,160.3L352.7,160.3z M355.2,154.9c2,0.7,4.6,1.4,7.4,1.6c0.2,0,0.4,0,0.6,0c13.9,0,33.1-35.7,43.4-63.7l-40.5-19.2C367.7,92,368.1,125.2,355.2,154.9z" /></svg>
            </button>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script>
  import { titleHover, iconClick } from './main.js'
  export default {
    mounted () {
      iconClick(document.querySelectorAll('.grid > .grid__item .icobutton'))
    },
    methods: {
      title (e) {
        titleHover(e.target)
      }
    }
  }
</script>

<style lang="stylus">
  *,
  *::after,
  *::before 
    box-sizing border-box
  body
    font-family 'Avenir Next', Avenir, 'Helvetica Neue', Helvetica, Arial, sans-serif
    counter-reset gridcounter
    color #000
    background #f9f9f9
    -webkit-font-smoothing antialiased
    -moz-osx-font-smoothing grayscale
  a 
    color #999
    outline none
    text-decoration none
    &:hover, &:focus 
      color #000
  .special-link
    position relative
    color #f64040
    transition color 0.2s
    &:hover, &:focus 
      color #d52828
    svg 
      left 0
  .hidden
    position absolute
    overflow hidden
    width 0
    height 0
    pointer-events none
  .codrops-header
    position relative
    display flex 
    flex-wrap wrap 
    align-items center
    padding 1.75em 0.85em 1.5em 
    letter-spacing 1px
    &__title
      font-size 2.5em 
      line-height 1
      padding 1em 0.5em 0
      margin 0
      text-align center
      width 100%
      &--upper 
        display block 
        padding 0 0 1.5em 0
        font-size 0.65em 
        color #aaa 
        letter-spacing 5px 
        text-indent 5px
        font-family 'Patrick Hand SC', cursive
    &__tagline
      padding 2em 1em 0
      margin 0 auto 
      font-weight bold
      color #d1cece
      max-width 40em 
      text-align center
  .dotted
    color #f64040
    &::after,
    &::before
      content '\2022'
      font-size 0.75em
      opacity 0.4
  .codrops-links
    position relative
    display inline-block
    text-align center
    white-space nowrap
    pointer-events auto 
    &::after,
    .codrops-demos a:not(:last-child)::after 
      content ''
      position absolute
      top 50%
      left 50% 
      width 1px 
      height 100%
      background-color #aaa 
      transform translateY(-50%) rotate3d(0, 0, 1, 22.5deg)
  .codrops-icon
    display inline-block
    width 1.5em
    margin 0 0.5em
    text-decoration none
    span 
      display none
  .grid
    display flex 
    flex-wrap wrap 
    justify-content space-between 
    padding 0
    max-width 60em
    margin 3em auto 0
    &__item 
      position relative
      text-align center 
      background-color #f0f0f0
      margin 0 0 5em 
      min-height 36em
      display flex 
      align-items center 
      justify-content center
      align-content center
      width 100%
      &::before 
        content counter(gridcounter)
        font-size 5.5em
        font-weight bold
        line-height 1
        position absolute
        bottom 0
        left 0
        counter-increment gridcounter
        text-align center
        color #2b2929
        font-family 'Patrick Hand SC', cursive
        transform translate3d(0.2em, 50%, 0)
  .icon
    display block
    width 1.5em
    height 1.5em
    margin 0 auto 
    fill currentColor
  .icobutton
    font-size 2em
    position relative
    margin 0
    padding 0
    color #c0c1c3
    border 0
    background none
    overflow visible
    cursor pointer
    outline none
    -webkit-tap-highlight-color rgba(0,0,0,0)
  .github-corner 
    &:hover .octo-arm 
      animation octocat-wave 560ms ease-in-out
    svg
      fill #988ade
      color #fff 
      position absolute
      top 0
      right 0
      border 0
  @keyframes octocat-wave
    0%,100% 
      transform rotate(0)
    20%,60%
      transform rotate(-25deg)
    40%,80%
      transfrom rotate(10deg)
  @media screen and (max-width 40em)
    .github-corner:hover .octo-arm
      animation none
    .github-corner .octo-arm
      animation octocat-wave 560ms ease-in-out
</style>
