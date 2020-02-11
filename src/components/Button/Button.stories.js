import Button from './Button.vue'

export default {
  component: Button,
  title: 'Button'
}

export const withText = () => ({
  components: { Button },
  template: '<Button @click="action">Hello Button</Button>',
})

export const withSomeEmoji = () => ({
  components: { Button },
  template: '<Button>😀 😎 👍 💯</Button>'
})
