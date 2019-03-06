<template>
  <div>
    <router-link to="/">list</router-link>
    <router-link to="/about">about</router-link>
    <!-- <List :users = "users"></List> -->
    <router-view></router-view>
  </div>
</template>
<script>
export default {
}
</script>
