import Button from './button/index'

import jssPlugin from 'vue-jss-plugin';


const components = [
    Button,
]
const install = function(Vue) {
    // 遍历并注册所有组件
    components.map(component => {
        Vue.component(component.name, component);
    })
    Vue.use(jssPlugin);
}
// 检测是否为vue环境
if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue)
}
export default {
    install
}