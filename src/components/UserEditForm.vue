<template>
  <div class="container py-5">
    <form @submit.stop.prevent="handleSubmit">
      <div class="form-group">
        <label for="name">Name</label>
        <input
          id="name"
          type="text"
          name="name"
          v-model="user.name"
          class="form-control"
          placeholder="Enter Name"
          required
        />
      </div>

      <div class="form-group">
        <label for="image">Image</label>
        <img
          v-if="user.image"
          :src="user.image"
          class="d-block img-thumbnail mb-3"
          width="200"
          height="200"
        />
        <input
          id="image"
          type="file"
          name="image"
          accept="image/*"
          class="form-control-file"
          @change="handleFileChange"
        />
      </div>

      <button
        type="submit"
        class="btn btn-primary"
      >Submit</button>
    </form>
  </div>
</template>

<script>
export default {
  props: {
    initialUser: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      user: this.initialUser
    }
  },
  methods: {
    handleFileChange(e) {
      const files = e.target.files
      if (!files.length) return
      const imageURL = window.URL.createObjectURL(files[0])
      this.restaurant.image = imageURL
    },
    handleSubmit(e) {
      const form = e.target
      const formData = new FormData(form)
      this.$emit('after-submit', formData)
    }
  }
}
</script>