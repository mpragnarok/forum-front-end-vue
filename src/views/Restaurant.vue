<template>
  <div class="container py-5">
    <Spinner v-if="isLoading" />
    <template v-else>
      <!-- 餐廳資訊頁 RestaurantDetail -->
      <RestaurantDetail :initial-restaurant="restaurant" />
      <!-- 餐廳評論 RestaurantComments -->
      <RestaurantComments
        :restaurant-comments="restaurantComments"
        @after-delete-comment="afterDeleteComment"
      />
      <!-- 新增評論 CreateComment -->
      <CreateComment
        :restaurant-id="restaurant.id"
        @after-create-comment="afterCreateComment"
      />
    </template>
  </div>
</template>

<script>
import Spinner from '../components/Spinner'
import restaurantsAPI from '../apis/restaurants'
import { Toast } from '../utils/helpers'
import RestaurantDetail from '../components/RestaurantDetail'
import RestaurantComments from '../components/RestaurantComments'
import CreateComment from '../components/CreateComment'
import { mapState } from 'vuex'

export default {
  components: {
    RestaurantDetail,
    RestaurantComments,
    CreateComment,
    Spinner
  },
  data() {
    return {
      restaurant: {
        id: -1, // -1 for initial data, it'll replace with real data
        name: '',
        categoryName: '',
        image: '',
        openingHours: '',
        tel: '',
        address: '',
        description: '',
        isFavorited: false,
        isLiked: false
      },
      restaurantComments: [],
      isLoading: true
    }
  },
  created() {
    const { id: restaurantId } = this.$route.params
    this.fetchRestaurant(restaurantId)
  },
  methods: {
    async fetchRestaurant(restaurantId) {
      this.isLoading = true
      try {
        const { data, statusText } = await restaurantsAPI.getRestaurant({
          restaurantId
        })
        if (statusText !== 'OK') {
          throw new Error(statusText)
        }

        this.restaurant = {
          id: data.restaurant.id,
          name: data.restaurant.name,
          categoryName: data.restaurant.Category.name,
          image: data.restaurant.image,
          openingHours: data.restaurant.opening_hours,
          tel: data.restaurant.tel,
          address: data.restaurant.address,
          description: data.restaurant.description,
          isFavorited: data.isFavorited,
          isLiked: data.isLiked
        }
        this.restaurantComments = data.restaurant.Comments
        this.isLoading = false
      } catch (error) {
        this.isLoading = false
        Toast.fire({
          icon: 'error',
          title: '無法取得餐廳資料，請稍後再試'
        })
      }
    },
    afterDeleteComment(commentId) {
      // filter to keep the unselected comment.id
      this.restaurantComments = this.restaurantComments.filter(
        comment => comment.id !== commentId
      )
    },
    afterCreateComment(payload) {
      const { commentId, restaurantId, text } = payload
      this.restaurantComments.push({
        id: commentId,
        RestaurantId: restaurantId,
        User: {
          id: this.currentUser.id,
          name: this.currentUser.name
        },
        text,
        createdAt: new Date()
      })
    }
  },
  beforeRouteUpdate(to, from, next) {
    const { id: restaurantId } = to.params
    this.fetchRestaurant(restaurantId)
    next()
  },
  computed: {
    ...mapState(['currentUser'])
  }
}
</script>