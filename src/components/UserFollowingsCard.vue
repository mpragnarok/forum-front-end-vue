<template>
  <div class="card">
    <div class="card-header">
      <strong>{{followings.length}}</strong> followings (追蹤者)
    </div>
    <div class="card-body row">
      <div
        v-for="following in followings"
        :key="following.id"
        class="mr-1"
      >
        <router-link :to="{name: 'user', params: {id: following.id}}">
          <img
            :src="following.image"
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
    initialFollowings: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      followings: this.initialFollowings
    }
  }
}
</script>