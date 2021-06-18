<template>
  <div class="fade-in">
    <a @click="toggle()">
      <img src="/pin.png" height="20" />
    </a>
    <img v-lazy="image.urls.regular" class="handle"  />
    <div v-if="image.alt_description">
      <small>{{image.alt_description}}</small>
    </div>
  </div>
</template>

<script>
export default {
  props: ['image'],
  methods: {
    toggle() {
      console.log(this.image)
      this.$store.commit('images/TOGGLE_PIN', this.image)
    }
  }
}
</script>


<style lang="scss" scoped>

.fade-in {
  opacity: 1;
  animation-name: fadeInOpacity;
  animation-iteration-count: 1;
  animation-timing-function: ease-in;
  animation-duration: 0.25s;
}

small {
  display: block;
  text-align: center;
  width: 100%;
}

@keyframes fadeInOpacity {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

</style>