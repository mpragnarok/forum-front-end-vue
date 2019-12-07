<template>
  <div class="container py-5">
    <AdminRestaurantForm
      :initial-restaurant="restaurant"
      @after-submit="handleAfterSubmit"
    />
  </div>
</template>

<script>
const dummyData = {
  restaurant: {
    id: 1,
    name: 'August Gerlach Da LA1234',
    tel: '02-8888-0000',
    address: '01313 ketlch deive',
    opening_hours: '08:00',
    description: 'dsfsafdsadfasasdfasdf',
    image:
      'https://loremflickr.com/320/240/restaurant,food/?random=22.148585495422335',
    viewCounts: 2,
    createdAt: '2019-11-20T06:25:42.921Z',
    updatedAt: '2019-12-05T08:36:44.586Z',
    CategoryId: 2,
    Category: {
      id: 2,
      name: '日本料理',
      createdAt: '2019-11-20T06:25:42.917Z',
      updatedAt: '2019-11-20T06:25:42.917Z'
    }
  }
}
import AdminRestaurantForm from './../components/AdminRestaurantForm.vue'

export default {
  components: {
    AdminRestaurantForm
  },
  data() {
    return {
      restaurant: {
        id: -1,
        name: '',
        categoryId: '',
        tel: '',
        address: '',
        description: '',
        image: '',
        openingHours: ''
      }
    }
  },
  methods: {
    handleAfterSubmit(formData) {
      // 透過 API 將表單資料送到伺服器
      for (let [name, value] of formData.entries()) {
        console.log(name + ': ' + value)
      }
    },
    fetchRestaurant(restaurantId) {
      console.log('fetchRestaurant id:', restaurantId)
      const { restaurant } = dummyData
      this.restaurant = {
        ...this.restaurant,
        id: restaurant.id,
        name: restaurant.name,
        categoryId: restaurant.CategoryId,
        tel: restaurant.tel,
        address: restaurant.address,
        description: restaurant.description,
        image: restaurant.image,
        openingHours: restaurant.opening_hours
      }
    }
  },
  created() {
    const { id } = this.$route.params
    this.fetchRestaurant(id)
  }
}
</script>