
# Vue-Shrodinger

[![CircleCI](https://circleci.com/gh/gaohailang/bookstore-web.svg?style=svg)](https://circleci.com/gh/gaohailang/bookstore-web)

### Intro

使用 vue 相关技术构建 SPA 单页应用，相关组件如下:


- [vue.js](https://cn.vuejs.org/v2/guide/index.html)
- [vue-router](https://router.vuejs.org/zh-cn/)
- [element-ui](http://element.eleme.io/#/)
- [webpack](https://webpack.js.org/)

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).


## Build Setup

首先确保按照 node/npm > 7

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

### Usage

#### 前后分离导致跨域问题，使用 Proxy 配置

在 config 目录下 dev proxyTable 中使用配置（具体参考 webpack-devserver 文档：

```js
{
  proxyTable: {
    "/api": {
      target: "http://localhost:3000",
      // pathRewrite: {"^/api" : ""}
    }
  },
}
```

#### 引入第三方非 npm 管理的插件（styles/scripts）

在 src/index.html 中直接插入

```html
<!-- Usage Demo - include third-party style/script using reference in html-->
<link href="//netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.css" rel="stylesheet">
<script src="//cdnjs.cloudflare.com/ajax/libs/jquery/1.9.1/jquery.js"></script>
<!-- end Usage Demo -->
```

#### Demo for vue filter

```js
// Demo for filter usage
Vue.filter('santizeAnnotationContent', value => {
  try {
    var x = JSON.parse(value)
    return x.blocks.map((i) => i.text).join('\n')
  } catch (e) {
    return value
  }
})
```

#### 使用 netlify 前端构建 CI

https://app.netlify.com/sites/typist-walrus-53887/overview
node -v  > .nvmrc


### 应用结构

```sh
src
├── App.vue - 入口 App Component
├── assets - 静态资源文件
│   └── logo.png
├── components - 普通组件，在 views 中使用
│   ├── SideMenu.vue
│   └── SimpleDemo.vue
├── main.js - 入口 JS，配置和引用相关依赖等
├── router
│   └── index.js - 路由配置
├── store
├── utils
│   └── request.js
└── views
    └── DemoPageView.vue - 页面级组件，在 router 中使用
```

### 组件选择

- vuex - 状态管理
https://github.com/vuejs/vuex

- superagent, superagent-jsonp

- devtools
https://github.com/vuejs/vue-devtools

- transform-jsx
https://github.com/vuejs/babel-plugin-transform-vue-jsx


### 参考

### Misc
