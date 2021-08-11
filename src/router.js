import Vue from 'vue';
import Router from 'vue-router'
import HelloWorld from '../src/components/HelloWorld.vue' 
import sample from '../src/components/sample.vue'

Vue.use(Router) // プラグイン（どこでも使える機能）を適用するために記載

export default new Router({
    routes:[
        {
            path:'/',           // URL 
            name: "root",
            component: HelloWorld    // 上記URLのときに表示するコンポーネント
        },
        {
            path: '/sample',
            name: "sample",
            component: sample   
        }
    ]
})
