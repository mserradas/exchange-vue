<template>
  <div>
    <bounce-loader
      :loading="isLoading"
      :color="'#68d391'"
      :size="100"
    ></bounce-loader>
    <px-assets-table v-if="!isLoading" :assets="assests"></px-assets-table>
  </div>
</template>

<script>
import PxAssetsTable from '@/components/PxAssetsTable'
import api from '@/api'

export default {
  name: 'Home',
  components: { PxAssetsTable },

  data() {
    return {
      assests: [],
      isLoading: false
    }
  },

  created() {
    this.isLoading = true

    api
      .getAssets()
      .then(response => (this.assests = response))
      .finally(() => (this.isLoading = false))
  }
}
</script>
