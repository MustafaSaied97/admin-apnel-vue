<template>
    <v-navigation-drawer :modelValue="drawer" @update:modelValue="drawer = $event">
        <v-img
          color="grey-lighten-4"
          class="text-center"
          src="https://cdn.vuetifyjs.com/images/cards/forest-art.jpg"
          
        >
          <v-avatar
            class="mb-4 ma-4"
            color="grey-darken-1"
            size="64"
          ></v-avatar>
  
          <div>john@google.com</div>
        </v-img>
  
        <v-divider></v-divider>
  
        <v-list>
          <v-list-item
            v-for="[icon, text] in links"
            :key="icon"
            link
          >
            <template v-slot:prepend>
              <v-icon>{{ icon }}</v-icon>
            </template>
  
            <v-list-item-title>{{ text }}</v-list-item-title>
          </v-list-item>
        </v-list>
    </v-navigation-drawer>
</template>

<script setup>
    const props=defineProps({
        drawer:Boolean,
    })
    const links = [
        ["mdi-microsoft-windows", "Dashboard"],
        ["mdi-account", "Profile"],
        ["mdi-clipboard-list-outline", "Products"],
        ["mdi-card-account-details-outline", "Orders"],
        ["mdi-cog", "System Setting"],
      ]
</script>

<style>

</style>