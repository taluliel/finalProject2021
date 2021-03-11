<template>
  <div>
       <v-app>
      <NavHeader></NavHeader>
      <v-main class="main">
        <router-view></router-view>
      </v-main>
      </v-app>
  </div>
</template>

<script>
import NavHeader from "./components/NavHeader";
export default {
  name: "App",
  components: {
    NavHeader,
     },
};
</script>
<style scoped>
.main {
  /* background: rgb(255, 229, 196); */
  background: #f4f4f1;
  position: relative;
  /* width: 375px; */
}
</style>
