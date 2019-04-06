<template lang="pug">
  footer.footer
    .footer__line
    | Made by&nbsp;
    a.footer__link(href="https://github.com/iwonapiotrowska" target="blank")
      | Iwona Piotrowska
</template>

<script>
export default {
  name: 'MainFooter'
}
</script>

<style lang="sass" scoped>
.footer
  text-align: center
  position: absolute
  right: 0
  bottom: 0
  left: 0
  height: 110px
  margin-top: -110px
  background-color: $c-bg-footer
  font-size: 14px
  color: $c-text-footer
  box-shadow: 1px 0 5px $c-bg-footer

.footer__line
  width: 300px
  margin: 32px auto 22px
  border-bottom: 1px solid $c-line-footer

.footer__link
  text-decoration: none
  color: $c-white
</style>
