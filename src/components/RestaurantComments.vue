<template>
  <div>
    <h2 class="my-4 row">All Comments:</h2>

    <div
      v-for="comment in restaurantComments"
      :key="comment.id"
      class="col-md-12"
    >
      <blockquote class="blockquote mb-0">
        <button
          v-if="currentUser.isAdmin"
          type="button"
          class="btn btn-danger float-right"
          @click.stop.prevent="deleteComment(comment.id)"
        >Delete</button>
        <h3>
          <a
            href="#"
            class="float-left"
          >{{comment.User.name}}</a>
        </h3>
        <p>{{comment.text}}</p>
        <footer class="blockquote-footer">{{comment.createdAt | fromNow}}</footer>
      </blockquote>
      <hr />
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import commentsAPI from '../apis/comments'
import { Toast } from '../utils/helpers'

import { fromNowFilter } from './../utils/mixins'
export default {
  mixins: [fromNowFilter],
  props: {
    restaurantComments: {
      type: Array,
      required: true
    }
  },
  methods: {
    async deleteComment(commentId) {
      try {
        const { data, statusText } = await commentsAPI.delete({ commentId })
        if (statusText !== 'OK' || data.status !== 'success') {
          throw new Error(statusText)
        }
        // 觸發父層事件 - $emit( '事件名稱' , 傳遞的資料 )
        this.$emit('after-delete-comment', commentId)
        Toast.fire({
          type: 'success',
          title: '移除評論成功'
        })
      } catch (error) {
        Toast.fire({
          type: 'error',
          title: '無法移除評論，請稍後再試'
        })
      }
    }
  },
  computed: {
    ...mapState(['currentUser'])
  }
}
</script>