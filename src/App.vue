<template>
 <div>
  <v-app id="inspire" theme="light">
    <SideBar :drawer="drawer"/>
    <Header @toggleDrawer="toggleDrawer"/>
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
 </div>
</template>

<script setup> 
  import {Header,SideBar} from './components'
  import { ref } from 'vue'
  
  const drawer = ref(false)

  const toggleDrawer=()=>{
    drawer.value = !drawer.value
  }
</script>
