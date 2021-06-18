<template>
  <article>
    <section>
       <draggable v-model="pinned" handle=".handle" >
        <ImageTag v-for="(image, key) in pinned" :key="key" :image="image" />
      </draggable>
    </section>
    <section>
      <draggable v-model="images" handle=".handle">
        <ImageTag v-for="(image, key) in images" :key="key" :image="image" />
      </draggable>
    </section>
  </article>
</template>

<script>
import ImageTag from '~/components/ImageTag.vue'
import Draggable from 'vuedraggable'

export default {
  components: {
    ImageTag,
    Draggable
  },
  computed: {
    images: {
      get() { return this.$store.getters['images/list'] },
      set(images) { this.$store.commit('images/UPDATE', images) }
    },
    pinned: {
      get() { return this.$store.getters['images/pinned'] },
      set(pinned) { this.$store.commit('images/PINNED_UPDATE', pinned) }
    }
  }
}
</script>
