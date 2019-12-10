<template>
  <div class="container py-5">
    <NavTabs />
    <Spinner v-if="isLoading" />
    <template v-else>
      <h1 class="mt-5">Feeds</h1>
      <hr />
      <div class="row">
        <div class="col-md-6">
          <h3>Newest Restaurants</h3>
          <!-- 最新餐廳 NewestRestaurants -->
          <NewestRestaurants :restaurants="restaurants" />
        </div>
        <div class="col-md-6">
          <!-- 最新評論 NewestComments-->
          <h3>Newest Comments</h3>
          <NewestComments :comments="comments" />
        </div>
      </div>
    </template>
  </div>
</template>

<script>
import NavTabs from '../components/NavTabs'
import NewestRestaurants from '../components/NewestRestaurants'
import NewestComments from '../components/NewestComments'
import restaurantAPI from '../apis/restaurants'
import Spinner from '../components/Spinner'
import { Toast } from '../utils/helpers'

export default {
  name: 'RestaurantsFeeds.vue',
  components: {
    NavTabs,
    NewestRestaurants,
    NewestComments,
    Spinner
  },
  data() {
    return {
      restaurants: [],
      comments: [],
      isLoading: true
    }
  },
  created() {
    this.fetchFeeds()
  },
  methods: {
    async fetchFeeds() {
      try {
        const response = await restaurantAPI.getFeeds()
        const { data, statusText } = response
        if (statusText !== 'OK') {
          throw new Error(statusText)
        }
        this.restaurants = data.restaurants
        this.comments = data.comments.filter(comment => comment.Restaurant)
        this.isLoading = false
      } catch (e) {
        this.isLoading = false
        Toast.fire({
          icon: 'error',
          title: "Can't fetch data, please try it later"
        })
      }
    }
  }
}
</script>