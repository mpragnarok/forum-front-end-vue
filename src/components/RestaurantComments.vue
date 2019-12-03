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
          @click.stop.prevent="handleDeleteButtonClick(comment.id)"
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
const dummyUser = {
  currentUser: {
    id: 1,
    name: 'Admin',
    email: 'root@example.com',
    image: 'https://i.pravatar.cc/300',
    isAdmin: true
  },
  isAuthenticated: true
}
import { fromNowFilter } from './../utils/mixins'
export default {
  mixins: [fromNowFilter],
  props: {
    restaurantComments: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      currentUser: dummyUser.currentUser
    }
  },
  methods: {
    handleDeleteButtonClick(commentId) {
      console.log('handleDeleteButtonClick', commentId)
      // TODO: 請求 API 伺服器刪除 id 為 commentId 的評論
      // 觸發父層事件 - $emit( '事件名稱' , 傳遞的資料 )
      this.$emit('after-delete-comment', commentId)
    }
  }
}
</script>