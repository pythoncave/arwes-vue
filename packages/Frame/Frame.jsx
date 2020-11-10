import Animation from "~/Animation/Animation";
import cx from 'classnames'
const cornerLength = corners => {
    switch (corners) {
        case 1:
            return 8;
        case 2:
            return 16;
        case 3:
            return 16;
        case 4:
            return 24;
        case 5:
            return 24;
        default:
            return 32;
    }
};

const cornerWidth = corners => {
    switch (corners) {
        case 1:
            return 1;
        case 2:
            return 1;
        case 3:
            return 2;
        case 4:
            return 2;
        case 6:
            return 3;
        default:
            return 3;
    }
};


const styles = {

    root: {
        display: 'inline',
        position: 'relative',
        padding: '1px',

        '&$exiting, &$exited': {
            '& $borderLeft, & $borderRight': {
                height: '0%'
            },
            '& $borderTop, & $borderBottom': {
                width: '0%'
            },
            '& $corner': {
                width: 0,
                height: 0,
                opacity: 0
            },
            '& $box': {
                backgroundColor: 'transparent'
            }
        },

    },
    frame: {
        margin: '60px',
        border: '2px solid red',
    },
    box: {
        zIndex: 3,
        position: 'relative',
        overflow: 'hidden',
        display: 'inline',

    },
    children: {
        display: 'inline'
    },
    border: {
        zIndex: 1,
        position: 'absolute',
        borderStyle: 'solid',
        transition: `all 500ms ease-in`,
        borderColor:  'dark',
        opacity: 1
    },
    borderLeft: {
        left: 0,
        top: '50%',
        transform: 'translate(0, -50%)',
        borderWidth: '0 0 0 1px',
        height: '100%'
    },
    borderRight: {
        right: 0,
        top: '50%',
        transform: 'translate(0, -50%)',
        borderWidth: '0 0 0 1px',
        height: '100%'
    },
    borderTop: {
        top: 0,
        left: '50%',
        transform: 'translate(-50%, 0)',
        borderWidth: '1px 0 0 0',
        width: '100%'
    },
    borderBottom: {
        bottom: 0,
        left: '50%',
        transform: 'translate(-50%, 0)',
        borderWidth: '1px 0 0 0',
        width: '100%'
    },
    corner: {
        zIndex: 2,
        position: 'absolute',
        width: props => cornerLength(props.corners),
        height: props => cornerLength(props.corners),
        transition: `all 500ms ease-in`,
        borderStyle: 'solid',

        opacity: 1
    },
    cornerLT: {
        left: props => -cornerWidth(props.corners),
        top: props => -cornerWidth(props.corners),
        borderWidth: props =>
            `${cornerWidth(props.corners)}px 0 0 ${cornerWidth(props.corners)}px`
    },
    cornerLB: {
        left: props => -cornerWidth(props.corners),
        bottom: props => -cornerWidth(props.corners),
        borderWidth: props =>
            `0 0 ${cornerWidth(props.corners)}px ${cornerWidth(props.corners)}px`
    },
    cornerRT: {
        right: props => -cornerWidth(props.corners),
        top: props => -cornerWidth(props.corners),
        borderWidth: props =>
            `${cornerWidth(props.corners)}px ${cornerWidth(props.corners)}px 0 0`
    },
    cornerRB: {
        right: props => -cornerWidth(props.corners),
        bottom: props => -cornerWidth(props.corners),
        borderWidth: props =>
            `0 ${cornerWidth(props.corners)}px ${cornerWidth(props.corners)}px 0`
    },

    hover: {},
    entering: {},
    entered: {},
    exiting: {},
    exited: {}
};
export default {
    name: 'Frame',
    styles,
    data: function () {
        return {
            show:true,
            corners:true,
            border:true,
            disabled:false,
            hover:false,
            className:'',
        }
    },
    methods: {

    },
    mounted() {
        this.$classes;
    },
    components: {
        Animation:Animation
    },
    render() {
        // const cls = cx(
        //     this.$classes.root,
        //     {
        //         [this.$classes.hover]: !this.disabled && this.hover
        //     },
        //     this.className
        // );

        return (
            <Animation
                show={this.show}
                // animate={animate}
                // timeout={theme.animTime}
                // {...animation}
            >
                    <div class={this.$classes.root}>
                        {this.border && (
                            <div class={cx(this.$classes.border, this.$classes.borderLeft)} />
                        )}
                        {this.border && (
                            <div class={cx(this.$classes.border, this.$classes.borderRight)} />
                        )}
                        {this.border && (
                            <div class={cx(this.$classes.border, this.$classes.borderTop)} />
                        )}
                        {this.border && (
                            <div class={cx(this.$classes.border, this.$classes.borderBottom)} />
                        )}

                        {!!this.corners && (
                            <div class={cx(this.$classes.corner, this.$classes.cornerLT)} />
                        )}
                        {!!this.corners && (
                            <div class={cx(this.$classes.corner, this.$classes.cornerLB)} />
                        )}
                        {!!this.corners && (
                            <div class={cx(this.$classes.corner, this.$classes.cornerRT)} />
                        )}
                        {!!this.corners && (
                            <div class={cx(this.$classes.corner, this.$classes.cornerRB)} />
                        )}

                        <div class={this.$classes.box}>
                            <div class={this.$classes.children}>
                                {this.$slots.default}
                            </div>
                        </div>
                    </div>
            </Animation>
        );
    }
}
