<template>
    <v-app-bar color="primary" prominent>
        <v-app-bar-nav-icon class="d-flex align-center" variant="text" @click.stop="$emit('toggleDrawer')"></v-app-bar-nav-icon>
        <v-toolbar-title>My files</v-toolbar-title>
          <v-text-field
            rounded
            density="compact"
            variant="outlined"
            append-inner-icon="mdi-magnify"
            single-line
            hide-details
            ></v-text-field>
    
        <v-spacer></v-spacer>
        <v-menu >
          <template v-slot:activator="{ props }">
            <v-btn class=" mx-4 text-none" v-bind="props" stacked >
              <v-badge :content="itemLen" color="error">
                <v-icon>mdi-bell-outline</v-icon>
              </v-badge>
            </v-btn>
          </template>
          <!-- <v-list>

            <v-list-item v-for="(item, index) in items" :key="index"  link :prepend-icon="item.icon" :title="item.title" >
              <template v-slot:append>
                <v-badge :color="item.color" :content="item.content" inline></v-badge>
              </template>
            </v-list-item>

          </v-list> -->
          <v-list
            :items="items"
            item-props
            lines="three"
            link
            width="250"
          >
            <template v-slot:subtitle="{ subtitle }" >
              <div v-html="subtitle"></div>
            </template>
          </v-list>
        </v-menu>  

        <v-menu  
          v-model="menu"
          :close-on-content-click="false"
          location="end"
        >
          
          <template v-slot:activator="{ props }">
            <v-chip class="mx-4" pill v-bind="props" link>
              <v-avatar start image="https://cdn.vuetifyjs.com/images/john.png"></v-avatar>
              John Leider
            </v-chip>
          </template>

          <v-card>
            <v-list bg-color="black" >

              <!-- <v-list-item>

                <template v-slot:prepend>
                  <v-avatar image="https://cdn.vuetifyjs.com/images/john.png"></v-avatar>
                </template>

                <v-list-item-title>John Leider</v-list-item-title>
                <v-list-item-subtitle>john@google.com</v-list-item-subtitle>

                <template v-slot:append>
                  <v-list-item-action>
                    <v-btn icon="mdi-close-circle"  variant="text" @click="menu = false"  ></v-btn>
                  </v-list-item-action>
                </template>
                
              </v-list-item> -->

              <!-- same afunction licke above -->
              <v-list-item
                prepend-avatar="https://cdn.vuetifyjs.com/images/john.png"
                title="John Leider"
                subtitle="john@google.com"
              >
                <template v-slot:append>
                  <v-list-item-action>
                    <v-btn icon="mdi-close-circle"  variant="text" @click="menu = false"  ></v-btn>
                  </v-list-item-action>
                </template>
              </v-list-item>
            </v-list>

            <v-list   >
              <v-list-item link prepend-icon="mdi-briefcase">
                  <v-list-item-subtitle>john@gmail.com</v-list-item-subtitle>
              </v-list-item>
            </v-list>



            <v-list >
              <v-list-item 
                prepend-icon="mdi-home" 
                title="Home" 
                subtitle="subhome" 
                append-icon="mdi-home">
              </v-list-item>
              
              <v-list-group value="Users" > 
               
                <template v-slot:activator="{ props }">
                  <v-list-item
                    v-bind="props"
                    prepend-icon="mdi-account-circle"
                    title="Users"
                  ></v-list-item>
                </template>
              
                <v-list-group value="Admin">
                  <template v-slot:activator="{ props }">
                    <v-list-item
                      v-bind="props"
                      title="Admin"
                    ></v-list-item>
                  </template>
                
                  <v-list-item
                    v-for="([title, icon], i) in admins"
                    :key="i"
                    :title="title"
                    :prepend-icon="icon"
                    :value="title"
                  ></v-list-item>

                </v-list-group>
              
                <v-list-group value="Actions">
                  <template v-slot:activator="{ props }">
                    <v-list-item
                      v-bind="props"
                      title="Actions"
                    ></v-list-item>
                  </template>

                  <v-list-item
                    v-for="([title, icon], i) in cruds"
                    :key="i"
                    :value="title"
                    :title="title"
                    :prepend-icon="icon"
                  ></v-list-item>
                </v-list-group>
              
              </v-list-group>

            </v-list>
          </v-card>
           
        </v-menu>  


        <v-btn class="mx-4" :icon="theme==='light'?'mdi-weather-sunny':'mdi-weather-night'" @click="$emit('toggletheme')" ></v-btn>    
      </v-app-bar>  
</template>

<script setup>
import { computed,ref} from 'vue';

    const emit =defineEmits([
        'toggleDrawer','toggletheme'
    ])
    const props =defineProps([
        'theme'
    ])
    // const items= [
    //     { icon:'mdi-inbox-arrow-down',title: 'Inbox',color:'info',content:'12' },
    //     { icon:'mdi-send',title: 'Sent Mail',color:'info',content:'12' },
    //     { icon:'mdi-delete',title: 'Trash' ,color:'info',content:'12'},
    //     { icon:'mdi-alert-circle',title: 'Spam',color:'info',content:'12' },
    //   ]
    const items=[
        { type: 'subheader', title: 'Today' },
        {
          prependAvatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
          title: 'Brunch this weekend?',
          subtitle: `<span class="text-primary">Ali Connors</span> &mdash; I'll be in your neighborhood doing errands this weekend. Do you want to hang out?`,
        },
        { type: 'divider', inset: true },
        {
          prependAvatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg',
          title: 'Summer BBQ',
          subtitle: `<span class="text-primary">to Alex, Scott, Jennifer</span> &mdash; Wish I could come, but I'm out of town this weekend.`,
        },
        { type: 'divider', inset: true },
        {
          prependAvatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg',
          title: 'Oui oui',
          subtitle: '<span class="text-primary">Sandra Adams</span> &mdash; Do you have Paris recommendations? Have you ever been?',
        },
        { type: 'divider', inset: true },
        {
          prependAvatar: 'https://cdn.vuetifyjs.com/images/lists/4.jpg',
          title: 'Birthday gift',
          subtitle: '<span class="text-primary">Trevor Hansen</span> &mdash; Have any ideas about what we should get Heidi for her birthday?',
        },
        { type: 'divider', inset: true },
        {
          prependAvatar: 'https://cdn.vuetifyjs.com/images/lists/5.jpg',
          title: 'Recipe to try',
          subtitle: '<span class="text-primary">Britta Holt</span> &mdash; We should eat this: Grate, Squash, Corn, and tomatillo Tacos.',
        },
    ]
    const itemLen=computed(()=> items.filter((item)=>item.prependAvatar).length)

    const open= ['Users']
    const admins = [
        ['Management', 'mdi-account-multiple-outline'],
        ['Settings', 'mdi-cog-outline'],
      ]
      const  cruds = [
        ['Create', 'mdi-plus-outline'],
        ['Read', 'mdi-file-outline'],
        ['Update', 'mdi-update'],
        ['Delete', 'mdi-delete'],
      ]
    // const menuOpt={
    //   fav: true,
    //   menu: false,
    //   message: false,
    //   hints: true,
    // }
    const menu= ref(false)
</script>

<style>

</style>