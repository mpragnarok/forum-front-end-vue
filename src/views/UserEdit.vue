<template>
  <UserEditForm
    :initial-user="user"
    @after-submit="handleAfterSubmit"
  />
</template>
<script>
const dummyUser = {
  id: 1,
  name: 'Admin',
  email: 'root@example.com',
  image: 'https://i.pravatar.cc/300',
  isAdmin: true
}

import UserEditForm from '../components/UserEditForm'
export default {
  components: {
    UserEditForm
  },
  data() {
    return {
      user: {
        id: -1,
        name: '',
        image: ''
      }
    }
  },
  created() {
    const { id } = this.$route.params
    this.fetchUser(id)
  },
  methods: {
    fetchUser() {
      this.user.id = dummyUser.id
      this.user.name = dummyUser.name
      this.user.image = dummyUser.image
    },
    handleAfterSubmit(formData) {
      for (let [name, value] of formData.entries()) {
        console.log(name + ': ' + value)
      }
    }
  }
}
</script>