<template>
  <div id="app">
    <h3 v-text="test"></h3>
    <img  v-on:click="test2" src="./assets/logo.png">
    {{test}}

    <router-link to="/foo">Go to Foo</router-link>

    <!-- 路由出口 -->
    <!-- 路由匹配到的组件将渲染在这里 -->
    <router-view></router-view>

  </div>
</template>

<script>
import Hello from './components/Hello'

export default {
  name: 'app',
  data () {
    return {
      "test" : 1,
      "tmp" : 33
    }
  },
  components: {
    Hello
  },
  methods:{
      test2 : function(e){
        console.log("shoudao..");
      }

  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

</style>
