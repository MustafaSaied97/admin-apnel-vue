import { createSSRApp } from 'vue';

export function createApp(app=null) {
    if(app){
        return createSSRApp(app);
    }else{
        return createSSRApp({
            data: () => ({ count: 1 }),
            template: `<button @click="count++">{{ count }}</button>`
        });
    }
    
  }

// import { createSSRApp } from 'vue';

// export function createApp() {
   
//         return createSSRApp({
//             data: () => ({ count: 1 }),
//             template: `<button @click="count++">{{ count }}</button>`
//         });
    
    
//   }

