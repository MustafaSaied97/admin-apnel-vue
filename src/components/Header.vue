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

        <v-btn variant="text" icon="mdi-filter"></v-btn>
        <v-menu>
          <template v-slot:activator="{ props }">
            <v-btn class="text-none" v-bind="props" stacked >
              <v-badge content="2" color="error">
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
            <template v-slot:subtitle="{ subtitle }">
              <div v-html="subtitle"></div>
            </template>
          </v-list>
        </v-menu>      
      </v-app-bar>  
</template>

<script setup>
    const emit =defineEmits([
        'toggleDrawer',
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

</script>

<style>

</style>