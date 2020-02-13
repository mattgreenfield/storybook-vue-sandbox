<script>
/**
 * Renders a heading with some balloons either side
 */
export default {
    props: {
        /**
         * The heading level, e.g. H1, H2, H3
         */
        level: {
            type: Number,
            default: 1,
        }
    },
    render(createElement) {
        const prefix = createElement('span', {}, ['🎈'])
        const suffix = createElement('span', {}, ['🎈'])

        if (this.$slots.default) {
            this.$slots.default.forEach(() => {
              console.log('foo');
            })
        }

        return createElement(
            `h${this.level}`,
            {},
            [prefix, this.$slots.default, suffix],
        );
    },
}
</script>