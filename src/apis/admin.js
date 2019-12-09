import { apiHelper } from '@/utils/helpers'

export default {
  restaurants: {
    create({ formData }) {
      return apiHelper.post('/admin/restaurants', formData)
    },
    get() {
      return apiHelper.get('/admin/restaurants')
    },
    getDetail({ restaurantId }) {
      return apiHelper.get(`/admin/restaurants/${restaurantId}`)
    },
    delete({ restaurantId }) {
      return apiHelper.delete(`/admin/restaurants/${restaurantId}`)
    },
    update({ restaurantId, formData }) {
      return apiHelper.put(`/admin/restaurants/${restaurantId}`, formData)
    }
  },
  categories: {
    get() {
      return apiHelper.get('/admin/categories')
    },
    create({ name }) {
      return apiHelper.post('/admin/categories', { name })
    },
    delete({ categoryId }) {
      return apiHelper.delete(`/admin/categories/${ categoryId }`)
    }
  }
}