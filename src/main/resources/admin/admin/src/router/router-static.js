import Vue from 'vue';
//配置路由
import VueRouter from 'vue-router'
Vue.use(VueRouter);
//1.创建组件
import Index from '@/views/index'
import Home from '@/views/home'
import Login from '@/views/login'
import NotFound from '@/views/404'
import UpdatePassword from '@/views/update-password'
import pay from '@/views/pay'
import register from '@/views/register'
import center from '@/views/center'
    import forum from '@/views/modules/forum/list'
    import news from '@/views/modules/news/list'
    import xiaoshuopingfen from '@/views/modules/xiaoshuopingfen/list'
    import xiaoshuofenlei from '@/views/modules/xiaoshuofenlei/list'
    import huiyuan from '@/views/modules/huiyuan/list'
    import config from '@/views/modules/config/list'
    import discussxiaoshuoxinxi from '@/views/modules/discussxiaoshuoxinxi/list'
    import xiaoshuoxinxi from '@/views/modules/xiaoshuoxinxi/list'


//2.配置路由   注意：名字
const routes = [{
    path: '/index',
    name: '首页',
    component: Index,
    children: [{
      // 这里不设置值，是把main作为默认页面
      path: '/',
      name: '首页',
      component: Home,
      meta: {icon:'', title:'center'}
    }, {
      path: '/updatePassword',
      name: '修改密码',
      component: UpdatePassword,
      meta: {icon:'', title:'updatePassword'}
    }, {
      path: '/pay',
      name: '支付',
      component: pay,
      meta: {icon:'', title:'pay'}
    }, {
      path: '/center',
      name: '个人信息',
      component: center,
      meta: {icon:'', title:'center'}
    }
      ,{
	path: '/forum',
        name: '交流论坛',
        component: forum
      }
      ,{
	path: '/news',
        name: '公告资讯',
        component: news
      }
      ,{
	path: '/xiaoshuopingfen',
        name: '小说评分',
        component: xiaoshuopingfen
      }
      ,{
	path: '/xiaoshuofenlei',
        name: '小说分类',
        component: xiaoshuofenlei
      }
      ,{
	path: '/huiyuan',
        name: '会员',
        component: huiyuan
      }
      ,{
	path: '/config',
        name: '轮播图管理',
        component: config
      }
      ,{
	path: '/discussxiaoshuoxinxi',
        name: '小说信息评论',
        component: discussxiaoshuoxinxi
      }
      ,{
	path: '/xiaoshuoxinxi',
        name: '小说信息',
        component: xiaoshuoxinxi
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {icon:'', title:'login'}
  },
  {
    path: '/register',
    name: 'register',
    component: register,
    meta: {icon:'', title:'register'}
  },
  {
    path: '/',
    name: '首页',
    redirect: '/index'
  }, /*默认跳转路由*/
  {
    path: '*',
    component: NotFound
  }
]
//3.实例化VueRouter  注意：名字
const router = new VueRouter({
  mode: 'hash',
  /*hash模式改为history*/
  routes // （缩写）相当于 routes: routes
})

export default router;
