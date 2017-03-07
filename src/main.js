import Vue from 'vue'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import '../statics/css/mui.css'
import '../statics/css/icons-extra.css'
import '../statics/css/muihead.css'

import App from './App.vue'

import VueRouter from 'vue-router'
import vueResource from 'vue-resource'

//import VueLazyload from 'vue-lazyload'

Vue.use(VueRouter)
Vue.use(vueResource)

Vue.use(MintUI)  //注册全局组件
import store from './vuex/store.js'


//注册图片预览组件
import VuePreview from 'vue-preview'
Vue.use(VuePreview)

//Vue.use(VueLazyload, {
//preLoad: 1.3,
//error: 'statics/images/loading.png',
//loading: 'statics/images/loading.png',
//attempt: 1
//})

import moment from '../statics/js/moment.js'
//注册全局过滤器
Vue.filter('dateFmt',(value,formatString)=>{
	formatString = formatString || 'YYYY-MM-DD HH:mm:ss';
	return moment(value).format(formatString); 
})

import Home from 'comp/Home/Home'
import member from 'comp/member/member'
import car from 'comp/car/car'
import search from 'comp/search/search'
//图文资讯组件
import imgcontentnews from 'comp/news/ImgContentNew'
//图文资讯详细内容显示组件
import showNewsDetial from 'comp/news/showDetial'
//图片分享组件
import photolist from 'comp/photo/photolist'
import photo from 'comp/photo/photo'

//商品展示列表
import goodlist from 'comp/goods/goodlist'
import goodsInfo from 'comp/goods/goodsInfo'
import goodscomment from 'comp/subcomp/comment'
import goodsdesc from 'comp/goods/goodsdesc'

const router = new VueRouter({
	linkActiveClass:'mui-active', //可以修改router-link-active 为mui-active来解决tab栏的选中bug
    mode: 'history',  //不想看到#号则配置这个 (可以用来解决与html本身锚点冲突的问题)
    routes: [
   		{ path: '/', redirect:'/Home'},
        { path: '/Home', component: Home },
        { path: '/member', component: member },
        { path: '/car', component: car },
        { path: '/search', component: search },
        { path: '/news/imgcontentnews', component: imgcontentnews }, //图文资讯
        { path: '/news/showdetial/:id', component: showNewsDetial }, //图文资讯详细
        { path:'/photolist',component:photolist},  //图片分享列表
        { path:'/photo/:id',component:photo},  //图片详情
        { path:'/goodslist',component:goodlist},  //商品列表
        { path:'/goods/info/:id',component:goodsInfo},  //商品详情
        { name:'goodscomment', path:'/goods/comment/:id',component:goodscomment},  //商品评论
        { name:'goodsdesc', path:'/goods/desc/:id',component:goodsdesc}  //商品评论
    ]
})

new Vue({
  el: '#app',
  store:store,
  router:router, //使用路由对象实例
  render: h => h(App)
})

