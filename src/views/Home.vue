<template>
  <div class="home">
    <sample />
  </div>
</template>

<script>
// @ is an alias to /src
import sample from '@/components/sample.vue'

export default {
  name: 'sample',
  components: {
    sample
  }
}
</script>
