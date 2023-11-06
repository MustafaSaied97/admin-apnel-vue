<template>
 <div>
  <v-app id="inspire" :theme="theme">
    <SideBar :drawer="drawer"/>
    <Header @toggleDrawer="toggleDrawer" @toggletheme="toggletheme" :theme="theme"/>
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
  const theme = ref('light')

  const toggleDrawer=()=>{
    drawer.value = !drawer.value
  }
  const toggletheme=()=>{
    theme.value =theme.value==='light'? 'dark':'light'
  }
</script>
