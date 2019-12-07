<template>
  <div class="row no-gutters mt-4">
    <div class="col-md-4">
      <img
        :src="profile.image"
        width="300px"
        height="300px"
      />
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">{{profile.name}}</h5>
        <p class="card-text">{{profile.email}}</p>
        <ul class="list-unstyled list-inline">
          <li>
            <strong>{{profile.userComments.length}}</strong> 已評論餐廳
          </li>
          <li>
            <strong>{{profile.favoritedRestaurants.length}}</strong> 收藏的餐廳
          </li>
          <li>
            <strong>{{profile.followings.length}}</strong> followings (追蹤者)
          </li>
          <li>
            <strong>{{profile.followers.length}}</strong> followers (追隨者)
          </li>
        </ul>
        <p></p>
        <router-link
          :to="{name: 'user-edit', params: {id:profile.id}}"
          v-if="currentUser.id == profile.id"
          class="btn btn-info"
        >Edit</router-link>
        <button
          v-else-if="currentUser.id != profile.id && profile.isFollowed"
          type="submit"
          class="btn btn-primary mr-2"
          @click.stop.prevent="addFollowing"
        >追蹤</button>
        <button
          v-else
          type="submit"
          class="btn btn-danger"
          @click.stop.prevent="deleteFollowing"
        >取消追蹤</button>
      </div>
    </div>
  </div>
</template>

<script>
const dummyUser = {
  currentUser: {
    id: 1,
    name: 'root1',
    email: 'root@example.com',
    image: null,
    isAdmin: true
  },
  isAuthenticated: true
}
export default {
  props: {
    initialProfile: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      profile: this.initialProfile,
      currentUser: dummyUser.currentUser
    }
  },
  methods: {
    addFollowing() {
      this.profile = {
        ...this.profile,
        isFollowed: true
      }
    },
    deleteFollowing() {
      this.profile = {
        ...this.profile,
        isFollowed: false
      }
    }
  }
}
</script>