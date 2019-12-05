<template>
  <div class="card">
    <div class="card-header">
      <strong>1</strong> 收藏的餐廳
    </div>
    <div class="card-body row">
      <div
        v-for="favoritedRestaurant in favoritedRestaurants"
        :key="favoritedRestaurant.id"
        class="mr-1 my-1"
      >
        <router-link :to="{name: 'restaurant', params:{id: favoritedRestaurant.id}}">
          <img
            :src="favoritedRestaurant.image"
            width="60"
            height="60"
            class="avatar"
          />
        </router-link>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    initialRestaurants: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      favoritedRestaurants: this.initialRestaurants
    }
  }
}
</script>