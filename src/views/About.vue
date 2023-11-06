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
                {property:'og:url',content:'https://www.imdb.com/title/tt0117500/'},
                {property:'og:image',content:'https://ia.media-imdb.com/images/rock.jpg'},
             ]
            })
    }
}

</script>

<style lang="scss" scoped></style>