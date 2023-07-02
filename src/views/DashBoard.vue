<template>
      <v-snackbar
       variant="text"
        v-model="snackbar"
        location="top right"
      > 
        <v-alert
        type="success"
        title="Alert title"
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi"
        
        >
          <v-btn icon="$close" size="small" variant="text" @click="snackbar = false"></v-btn>
        </v-alert>
        
      </v-snackbar>
      <v-container class="py-8 "  fluid>
      <!-- <v-row  class="flex-nowrap" >
          <v-col  class="d-flex justify-center">
            <h3>Dashboard</h3>
          </v-col>
          <v-spacer></v-spacer>
          <v-col  class="d-flex justify-center">
            <v-btn>Dashboard</v-btn>
          </v-col>
      </v-row> -->
      <!-- like abovr -->
      <div class="d-flex justify-space-between align-center">
        <h3>das</h3>
        <v-btn color="success" variant="text" @click="snackbar = true"> open </v-btn>
    </div>
      <v-row>
        <v-col lg="6" cols="12" >
          <v-alert
            density="compact"
            color="success"
            icon="$success"
            title="Alert title"
            text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi"
            variant="tonal"
          >
          </v-alert>
          <v-row>
            <v-col lg="6" cols="12" v-for="item in 4">
              <v-card>
                <v-card-text class="d-flex justify-space-between  align-center">
                    <div>
                      <h4>dsds</h4>
                      <p>dsds</p>
                    </div>
                    <v-avatar color="red">
                        <span>fsd</span>
                    </v-avatar>
                </v-card-text>
              </v-card>

            </v-col>
          </v-row>
        </v-col>
        <v-col lg="6" cols="12" >
          <v-card class="mt-1 " >
            <v-card-title>activities</v-card-title>
            <v-timeline side="end" class="justify-start" >
               <v-timeline-item
               dot-color="pink"
               size="small"
              >
              <div class="d-flex">
                <strong class="me-4">5pm</strong>
                <div>
                  <strong>New Icon</strong>
                  <div class="text-caption">
                    Mobile App
                  </div>
                </div>
              </div>
              </v-timeline-item>
            
              <v-timeline-item
              dot-color="teal-lighten-3"
              size="small"
            >
              <div class="d-flex">
                <strong class="me-4">3-4pm</strong>
                <div>
                  <strong>Design Stand Up</strong>
                  <div class="text-caption mb-2">
                    Hangouts
                  </div>
                </div>
              </div>
              </v-timeline-item>   
              <v-timeline-item
              dot-color="teal-lighten-3"
              size="small"
            >
              <div class="d-flex">
                <strong class="me-4">3-4pm</strong>
                <div>
                  <strong>Design Stand Up</strong>
                  <div class="text-caption mb-2">
                    Hangouts
                  </div>
                </div>
              </div>
              </v-timeline-item>   
            </v-timeline>
        </v-card>
        </v-col>
      </v-row>
      <v-table >
        <thead>
          <tr>
            <th class="text-left">
              Name
            </th>
            <th class="text-left">
              Calories
            </th>
            <th class="text-left">
              Calories
            </th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="item in desserts"
            :key="item.name"
          >
            <td>{{ item.name }}</td>
            <td>{{ item.calories }}</td>
            <td>{{ item.calories }}</td>
          </tr>
        </tbody>
      </v-table>
    </v-container>
     
</template>

<script setup>
  import { ref } from 'vue'
  const  desserts =[
    {
      name: 'Frozen Yogurt',
      calories: 159,
    },
    {
      name: 'Ice cream sandwich',
      calories: 237,
    },
    {
      name: 'Eclair',
      calories: 262,
    },
    {
      name: 'Cupcake',
      calories: 305,
    },
    {
      name: 'Gingerbread',
      calories: 356,
    },
    {
      name: 'Jelly bean',
      calories: 375,
    },
    {
      name: 'Lollipop',
      calories: 392,
    },
    {
      name: 'Honeycomb',
      calories: 408,
    },
    {
      name: 'Donut',
      calories: 452,
    },
    {
      name: 'KitKat',
      calories: 518,
    },
  ]
  const snackbar=ref(true)
</script>

<style lang="scss" scoped>

</style>