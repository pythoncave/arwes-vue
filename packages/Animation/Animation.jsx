const styles = {

};
export default {
    name: 'Animation',
    styles,
    data: function () {
        return {
        }
    },
    methods: {
    },
    mounted() {
    },
    render() {
        return (
            <transition>
                {this.$slots.default}
            </transition>
        );
    }
}
