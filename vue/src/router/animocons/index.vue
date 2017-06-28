<template>
  <div>
    <svg class="hidden">
      <symbol id="icon-arrow" viewBox="0 0 24 24">
        <title>arrow</title>
        <polygon points="6.3,12.8 20.9,12.8 20.9,11.2 6.3,11.2 10.2,7.2 9,6 3.1,12 9,18 10.2,16.8 "/>
      </symbol>
      <symbol id="icon-drop" viewBox="0 0 24 24">
        <title>drop</title>
        <path d="M12,21c-3.6,0-6.6-3-6.6-6.6C5.4,11,10.8,4,11.4,3.2C11.6,3.1,11.8,3,12,3s0.4,0.1,0.6,0.3c0.6,0.8,6.1,7.8,6.1,11.2C18.6,18.1,15.6,21,12,21zM12,4.8c-1.8,2.4-5.2,7.4-5.2,9.6c0,2.9,2.3,5.2,5.2,5.2s5.2-2.3,5.2-5.2C17.2,12.2,13.8,7.3,12,4.8z"/><path d="M12,18.2c-0.4,0-0.7-0.3-0.7-0.7s0.3-0.7,0.7-0.7c1.3,0,2.4-1.1,2.4-2.4c0-0.4,0.3-0.7,0.7-0.7c0.4,0,0.7,0.3,0.7,0.7C15.8,16.5,14.1,18.2,12,18.2z"/>
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
        <h1 class="codrops-header__title"><span class="codrops-header__title--upper">ani<span class="dotted">mo</span>cons</span> Animated Icons with <a class="special-link" href="http://mojs.io/">mo.js</a></h1>
        <p class="codrops-header__tagline">Animated icons powered by Oleg Solomka's motion graphics library <a href="http://mojs.io/">mo.js</a> and inspired by this <a href="https://dribbble.com/shots/2527200-Like-Animation">Dribbble shot</a> by Daryl Ginn</p>
      </header>
    </main>
  </div>
</template>

<script>
  export default {
    mounted () {}
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
  .icon
    display block
    width 1.5em
    height 1.5em
    margin 0 auto 
    fill currentColor
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
