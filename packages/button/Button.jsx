const styles = {
    //  root: {
    //    display: 'inline-block',
    //    position: 'relative',
    //    lineHeight: 1,
    //    verticalAlign: 'middle'
    //  },
     button: {
       position: 'relative',
       zIndex: 2,
       display: 'inline-block',
       margin: 0,
       border: '1px solid #26dafd',
      padding: [20 / 2, 20],
       background: 'rgba(6,43,45,0.65)',

    //   color: props =>
     //      theme.color[props.disabled ? 'disabled' : props.layer].base,
    //   fontSize: theme.typography.fontSize * 0.75,
       lineHeight: 1,
       verticalAlign: 'middle',

      // transition: `all ${theme.animTime}ms ease-out`,
       userSelect: 'none',
       outline: 'none',
     //  cursor: props => (props.disabled ? 'auto' : 'pointer'),
         color:'#acf9fb',
         cursor: 'pointer',
       '&:focus': {
         outline: 'none'
       },

       '&::-moz-focus-inner': {
         border: 'none'
       },

       '& .mdi, & .icon': {
         lineHeight: 0,
         fontSize: '140%',
         verticalAlign: 'middle'
       }
     }

};
export default {
    name: 'Button',
    styles,
    data() {
    },
    methods: {
    },
    mounted() {
    },
    render() {
        return (
            <transition>
                <button class={this.$classes.button}>1</button>
            </transition>

        );
    }
}
// .root {
// display: 'inline-block',
// position: 'relative',
// lineHeight: 1,
// verticalAlign: 'middle'
// },
// .button {
// position: 'relative',
// zIndex: 2,
// display: 'inline-block',
// margin: 0,
// border: 'none',
// padding: [theme.padding / 2, theme.padding],
// background: 'transparent',
//
// color: props =>
// theme.color[props.disabled ? 'disabled' : props.layer].base,
// fontSize: theme.typography.fontSize * 0.75,
// lineHeight: 1,
// verticalAlign: 'middle',
//
// transition: `all ${theme.animTime}ms ease-out`,
// userSelect: 'none',
// outline: 'none',
//
// '&:focus': {
// outline: 'none'
// },
//
// '&::-moz-focus-inner': {
// border: 'none'
// },
//
// '& .mdi, & .icon': {
// lineHeight: 0,
// fontSize: '140%',
// verticalAlign: 'middle'
// }
// }
//

