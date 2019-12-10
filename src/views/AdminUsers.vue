<template>
  <div class="container py-5">
    <!-- AdminNav Component -->
    <AdminNav />

    <Spinner v-if="isLoading" />

    <table
      v-else
      class="table"
    >
      <thead class="thead-dark">
        <tr>
          <th scope="col">#</th>
          <th scope="col">Email</th>
          <th scope="col">Role</th>
          <th
            scope="col"
            width="140"
          >Action</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="user in users"
          :key="user.id"
        >
          <th scope="row">{{user.id}}</th>
          <td>{{user.email}}</td>
          <td>{{user.isAdmin? 'Admin' : 'User'}}</td>
          <td>
            <button
              v-if="currentUser.id !== user.id"
              @click="toggleUserRole({userId: user.id,isAdmin: user.isAdmin})"
              type="button"
              class="btn btn-link"
            >{{user.isAdmin? 'set as user':'set as admin'}}</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import AdminNav from '../components/AdminNav'
import Spinner from '../components/Spinner'
import adminAPI from '../apis/admin'
import { Toast } from '../utils/helpers'
import { mapState } from 'vuex'
export default {
  components: {
    AdminNav,
    Spinner
  },
  data() {
    return {
      users: [],
      isLoading: true
    }
  },
  created() {
    this.fetchUsers()
  },
  methods: {
    async fetchUsers() {
      try {
        const { data, statusText } = await adminAPI.users.get()
        if (statusText !== 'OK') {
          throw new Error(statusText)
        }
        this.users = data.users
        this.isLoading = false
      } catch (error) {
        this.isLoading = false
        Toast.fire({
          icon: 'error',
          title: 'Can not fetch users'
        })
      }
    },
    async toggleUserRole({ userId, isAdmin }) {
      try {
        const toggleRole = !isAdmin
        const { data, statusText } = await adminAPI.users.update({
          userId,
          isAdmin: toggleRole.toString()
        })
        if (statusText !== 'OK' || data.status !== 'success') {
          throw new Error(statusText)
        }
        this.users = this.users.map(user => {
          if (user.id !== userId) {
            return user
          }
          return {
            ...user,
            isAdmin: toggleRole
          }
        })
      } catch (error) {
        Toast.fire({
          icon: 'error',
          title: "Can no update user's info"
        })
      }
    }
  },
  computed: {
    ...mapState(['currentUser'])
  }
}
</script>