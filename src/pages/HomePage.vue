<template>
  <div class="container-fluid">
    <section>
      <div class="row">

        <div v-for="gift in gifts" :key="gift.id" class="col-4 text-center bg-primary p-4 mb-2 card">
          <p>{{ gift.tag }}</p>
          <div v-if="gift.opened == true" :src="gift.url"></div>

        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { computed, onMounted } from 'vue';
import { gfitsService } from '../services/GiftsService.js';
import { AppState } from '../AppState.js'
import Pop from '../utils/Pop.js';

export default {
  setup() {
    async function getGifts() {
      try {
        await gfitsService.getGifts()
      } catch (error) {
        Pop.error(error)
      }
    }
    onMounted(() => {
      getGifts()
    })
    return {

      gifts: computed(() => AppState.gifts)
    }
  },
}





</script>

<style scoped lang="scss"></style>
