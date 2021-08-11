<template>
  <div id="app">
    <!--<sample />-->
    <router-link to="/"> HOME </router-link>
    <router-link to="/sample"> Sample</router-link>
    <router-view></router-view>

  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
    //sample
  }
}
</script>
