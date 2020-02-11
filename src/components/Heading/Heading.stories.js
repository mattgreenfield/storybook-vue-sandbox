import Heading from './Heading.vue'

export default {
  component: Heading,
  title: 'Heading'
}

export const withText = () => ({
  components: { Heading },
  template: '<Heading>This is the text</Heading>',
})
