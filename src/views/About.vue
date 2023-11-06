<template>
    <metainfo>
        <template v-slot:title="{ content }">{{ content ? `${content}` : `SITE_NAME` }}</template>
    </metainfo>
    <div>
        about
    </div>
</template>

<script setup> 
    import { useMeta } from 'vue-meta'
useMeta({
    title: 'about' ,
    meta:[
        {property:'og:title',content:'about'},
        {property:'og:description',content:'title description'},
        {property:'og:type',content:'video.movie'},
        {property:'og:url',content:''},
        {property:'og:image',content:''},
    ]
})
</script>

<style lang="scss" scoped>

</style>