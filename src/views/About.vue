<template>
    <div>
        about
        <metainfo>
            <template v-slot:title="{ content }">{{ content ? `${content} | SITE_NAME` : `SITE_NAME` }}</template>
        </metainfo>
    </div>
</template>

<script >
import { useMeta } from 'vue-meta'

export default {
    setup() {
        useMeta({
             title: 'Some Page' ,
             meta:[
                {property:'og:title',content:'The Rock'},
                {property:'og:type',content:'video.movie'},
                {property:'og:url',content:''},
                {property:'og:image',content:''},
             ]
            })
    }
}

</script>

<style lang="scss" scoped></style>