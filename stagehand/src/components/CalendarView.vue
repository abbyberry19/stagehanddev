<template>
<v-theme-provider theme="light">
  <NavDrawer />
  <iframe src="https://calendar.google.com/calendar/embed?bgcolor=%23f3f4f6&src=4amng3nn8ue7ogca8scpa02ejk%40group.calendar.google.com&ctz=Europe%2FLondon" style="border: 0" width="1100" height="600" frameborder="0" scrolling="no"></iframe>
  </v-theme-provider>
</template>

<script>
import NavDrawer from './ui/NavDrawer.vue'

  export default {
    components: {
      NavDrawer
    }
  }
</script>