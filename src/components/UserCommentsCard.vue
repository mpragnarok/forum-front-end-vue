<template>
  <div class="card">
    <div class="card-header">
      <strong>30</strong> 已評論餐廳
    </div>
    <div class="card-body row">
      <div
        v-for="comment in comments"
        :key="comment.id"
        class="mr-1 my-1"
      >
        <router-link :to="{name:'restaurant', params: {id: comment.RestaurantId}}">
          <img
            :src="comment.Restaurant.image"
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
    initialComments: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      comments: this.initialComments
    }
  }
}
</script>