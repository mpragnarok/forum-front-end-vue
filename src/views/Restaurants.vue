<template>
  <div class="container py-5">
    <Spinner v-if="isLoading" />
    <template v-else>
      <NavTabs />
      <!-- 餐廳類別標籤 RestaurantsNavPills -->

      <RestaurantsNavPills :categories="categories" />
      <div class="row">
        <!-- 餐廳卡片 RestaurantCard-->
        <RestaurantCard
          v-for="restaurant in restaurants"
          :key="restaurant.id"
          :initial-restaurant="restaurant"
        />
      </div>

      <!-- 分頁標籤 RestaurantPagination -->
      <RestaurantsPagination
        v-if="totalPage > 1"
        :category-id="categoryId"
        :current-page="currentPage"
        :total-page="totalPage"
      />
      <div v-if="restaurants.length <1">No data</div>
    </template>
  </div>
</template>

<script>
import Spinner from '../components/Spinner'
import NavTabs from '../components/NavTabs'
import RestaurantCard from '../components/RestaurantCard'
import RestaurantsNavPills from '../components/RestaurantsNavPills'
import RestaurantsPagination from '../components/RestaurantsPagination'
import restaurantsAPI from '../apis/restaurants'
import { Toast } from '../utils/helpers'
export default {
  components: {
    NavTabs,
    RestaurantCard,
    RestaurantsNavPills,
    RestaurantsPagination,
    Spinner
  },
  data() {
    return {
      categories: [],
      categoryId: '',
      currentPage: 1,
      restaurants: [],
      totalPage: 0,
      isLoading: true
    }
  },
  created() {
    const { page = 1, categoryId = '' } = this.$route.query
    this.fetchRestaurants({
      page,
      categoryId
    })
  },
  // 使用 beforeRouteUpdate 方法取得使用者路由變化

  beforeRouteUpdate(to, from, next) {
    const { page = 1, categoryId = '' } = to.query
    this.fetchRestaurants({ page, categoryId })
    next()
  },
  methods: {
    async fetchRestaurants({ page, categoryId }) {
      try {
        this.isLoading = true
        const response = await restaurantsAPI.getRestaurants({
          page,
          categoryId
        })
        // STEP 2：將 response 中的 data 和 statusText 取出
        const { data, statusText } = response
        // STEP 3：如果 statusText 不是 OK 的話則進入錯誤處理
        if (statusText !== 'OK') {
          throw new Error(statusText)
        }
        this.categories = data.categories
        this.categoryId = data.categoryId
        this.currentPage = data.page
        this.restaurants = data.restaurants
        this.totalPage = data.totalPage.length
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