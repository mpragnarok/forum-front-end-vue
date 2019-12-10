<template>
  <div class="row">
    <Spinner v-if="isLoading" />
    <template v-else>
      <div class="col-md-12">
        <h1>{{restaurant.name}}</h1>
        <span class="badge badge-secondary">{{restaurant.categoryName }}</span>
      </div>
      <div class="col-md-4">
        <div class="well">
          <ul class="list-unstyled">
            <li>
              <strong>Reviews:</strong>
              {{restaurant.commentsLength }}
            </li>
            <li>
              <strong>Favorited:</strong>
              {{restaurant.favoritedUsersLength }}
            </li>
          </ul>
          <a
            href="#"
            @click="$router.back()"
          >Go back</a>
        </div>
      </div>

      <hr />
    </template>
  </div>
</template>

<script>
import Spinner from '../components/Spinner'
import restaurantsAPI from '../apis/restaurants'
import { Toast } from '../utils/helpers'
export default {
  components: {
    Spinner
  },
  data() {
    return {
      restaurant: {
        id: -1,
        name: '',
        categoryName: '',
        commentsLength: 0,
        favoritedUsersLength: 0,
        likedUsersLength: 0
      },
      isLoading: true
    }
  },
  created() {
    const { id: restaurantId } = this.$router.params
    this.fetchRestaurant(restaurantId)
  },
  beforeRouteUpdate(to, from, next) {
    const { id: restaurantId } = to.params
    this.fetchRestaurant(restaurantId)
    next()
  },
  methods: {
    async fetchRestaurant(restaurantId) {
      try {
        this.isLoading = true
        const {
          data: { restaurant },
          statusText
        } = await restaurantsAPI.getRestaurant({
          restaurantId
        })
        if (statusText !== 'OK') {
          throw new Error(statusText)
        }
        this.restaurant = {
          ...this.restaurant,
          id: restaurant.id,
          name: restaurant.name,
          categoryName: restaurant.Category.name,
          commentsLength: restaurant.Comments.length,
          favoritedUsersLength: restaurant.FavoritedUsers.length,
          likedUsersLength: restaurant.LikedUsers.length
        }
        this.isLoading = false
      } catch (error) {
        this.isLoading = false
        Toast.fire({
          icon: 'error',
          title: '無法取得餐廳資料，請稍後再試'
        })
      }
    }
  }
}
</script>