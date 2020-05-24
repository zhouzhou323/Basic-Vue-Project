// 1.使用commonJS的模块化规范
const {add, mul} = require('./js/mathUtils')

console.log(add(20,30));
console.log(mul(20,30));

// 2.使用ES6的模块化规范
import {name,age,height} from './js/info'
console.log('name');
console.log('age');
console.log('height');

// 3.依赖css文件
require('./css/normal.css')

// 4.依赖less文件
require('./css/special.less')
document.writeln('<h2>hello，xuanyu</h2>')

// 5.依赖vue
import Vue from 'vue'
import App from './vue/App.vue'
new Vue({
    el:'#app',
    template:`<App/>`,
    components:{
        App
    }
})

document.writeln('<p>run success</p>')
