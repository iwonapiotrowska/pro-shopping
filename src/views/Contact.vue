<template lang="pug">
  .contact.container
    form.wrapper.contact__form
      .contact__wrapper--sm
        input.contact__input(
          id="name"
          v-model="form.name"
          type="text"
          required="required"
        )
        label.contact__label(
          v-show="!form.name"
          for="name"
        ) Name
      .contact__wrapper--lg
        input.contact__input(
          id="email"
          v-model="form.email"
          type="email"
          required="required"
        )
        label.contact__label(
          v-show="!form.email"
          for="email"
        ) Email
      .contact__wrapper--md
        input.contact__input(
          id="message"
          type="text"
          placeholder="Message"
        )
      button.contact__button Send
</template>

<script>
export default {
  name: 'Contact',
  data () {
    return {
      form: {
        name: '',
        email: ''
      }
    }
  }
}
</script>

<style lang="sass" scoped>
.contact
  margin: 37px 0 20px

  @include tablet-portrait-up
    margin: 0
    position: absolute
    top: 50%
    left: 50%
    transform: translate(-50%, -50%)

.contact__form
  padding: 70px 40px 76px
  box-sizing: border-box
  height: 407px
  width: 100%

  @include tablet-portrait-up
    padding: 70px 110px 76px
    width: 467px

.contact__wrapper--sm
  height: 48px

.contact__wrapper--md
  height: 55px

.contact__wrapper--lg
  height: 120px

.contact__input
  font-size: 14px
  border-top: none
  border-right: none
  border-left: none
  border-bottom: 1px solid $c-text-form
  width: 100%
  outline: none
  line-height: 1.9

  &::placeholder
    color: $c-text-form

// Label substitutes for placeholder in order to allow different text colors
.contact__label
  font-size: 14px
  color: $c-text-form

.contact__input + .contact__label
  position: relative
  top: -25px

.contact__input[required] + .contact__label:after
  content: '\FE61'
  color: red
  font-size: 10px
  vertical-align: top

.contact__button
  width: 92px
  height: 34px
  display: block
  margin-left: auto
  margin-right: 0
  text-transform: uppercase
  background-color: $c-cta
  color: $c-white
  border: none
  border-radius: 3px
  box-shadow: 0 1px $c-border
  font-size: 14px
</style>
