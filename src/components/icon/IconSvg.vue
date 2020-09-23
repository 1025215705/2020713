
<template>
    <img :src="iconName" class="svg-icon" />
</template>

<script>
export default {
  name: 'icon-svg',
  props: {
    iconClass: {
      type: String,
      required: true
    }
  },
  computed: {
    iconName() {
      // return `#icon-${this.iconClass}`
      return require('@/assets/icons/svg/'+this.iconClass+'.svg')
    }
  }
}
</script>

<style>
.svg-icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>