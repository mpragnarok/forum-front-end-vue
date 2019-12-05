<template>
  <div class="container py-5">
    <NavTabs />
    <h1 class="mt-5">Top Restaurants</h1>
    <TopRestaurantCard
      v-for="restaurant in restaurants"
      :key="restaurant.id"
      :initial-restaurant="restaurant"
    />
    <hr />
  </div>
</template>


<script>
const dummyData = {
  restaurants: [
    {
      id: 50,
      name: 'Jolie Hackett',
      tel: '542.600.9620',
      address: '2439 Tiffany Heights',
      opening_hours: '08:00',
      description: 'magni ut voluptas',
      image:
        'https://loremflickr.com/320/240/restaurant,food/?random=27.32287991372693',
      viewCounts: null,
      createdAt: '2019-11-20T06:25:42.934Z',
      updatedAt: '2019-11-20T06:25:42.934Z',
      CategoryId: 2,
      FavoritedUsers: [
        {
          id: 2,
          name: 'user1',
          email: 'user1@example.com',
          password:
            '$2a$10$ESv6iQjQ8oEe3/XGjw00PuSh1kjmG6Dkhd4YXa50boTlncJDxljAy',
          isAdmin: false,
          image: null,
          createdAt: '2019-11-20T06:25:42.685Z',
          updatedAt: '2019-11-21T09:55:30.970Z',
          Favorite: {
            UserId: 2,
            RestaurantId: 50,
            createdAt: '2019-11-23T09:13:39.392Z',
            updatedAt: '2019-11-23T09:13:39.392Z'
          }
        },
        {
          id: 1,
          name: 'root1',
          email: 'root@example.com',
          password:
            '$2a$10$alLLwv1Kn0tC9euHs6Llwen8uif7jQfU9DPaybXRuGn83ZfKzW56G',
          isAdmin: true,
          image: null,
          createdAt: '2019-11-20T06:25:42.456Z',
          updatedAt: '2019-11-25T06:53:28.542Z',
          Favorite: {
            UserId: 1,
            RestaurantId: 50,
            createdAt: '2019-11-22T09:55:43.745Z',
            updatedAt: '2019-11-22T09:55:43.745Z'
          }
        }
      ],
      isFavorited: true,
      FavoriteCount: 2
    },
    {
      id: 27,
      name: 'Jean Reichert',
      tel: '(979) 733-0015',
      address: '4084 Arvilla Avenue',
      opening_hours: '08:00',
      description: 'assumenda impedit ut',
      image:
        'https://loremflickr.com/320/240/restaurant,food/?random=24.17100664017355',
      viewCounts: 1,
      createdAt: '2019-11-20T06:25:42.928Z',
      updatedAt: '2019-11-23T15:40:49.150Z',
      CategoryId: 5,
      FavoritedUsers: [
        {
          id: 1,
          name: 'root1',
          email: 'root@example.com',
          password:
            '$2a$10$alLLwv1Kn0tC9euHs6Llwen8uif7jQfU9DPaybXRuGn83ZfKzW56G',
          isAdmin: true,
          image: null,
          createdAt: '2019-11-20T06:25:42.456Z',
          updatedAt: '2019-11-25T06:53:28.542Z',
          Favorite: {
            UserId: 1,
            RestaurantId: 27,
            createdAt: '2019-11-22T17:53:45.206Z',
            updatedAt: '2019-11-22T17:53:45.206Z'
          }
        }
      ],
      isFavorited: true,
      FavoriteCount: 1
    },
    {
      id: 5,
      name: 'Abagail Dietrich',
      tel: '638.352.6637 x5805',
      address: '011 Glenna Camp',
      opening_hours: '08:00',
      description: 'Cumque quasi nihil. Dicta accusantium officiis ass',
      image:
        'https://loremflickr.com/320/240/restaurant,food/?random=60.98596097768254',
      viewCounts: 37,
      createdAt: '2019-11-20T06:25:42.923Z',
      updatedAt: '2019-11-23T14:18:04.644Z',
      CategoryId: 1,
      FavoritedUsers: [
        {
          id: 1,
          name: 'root1',
          email: 'root@example.com',
          password:
            '$2a$10$alLLwv1Kn0tC9euHs6Llwen8uif7jQfU9DPaybXRuGn83ZfKzW56G',
          isAdmin: true,
          image: null,
          createdAt: '2019-11-20T06:25:42.456Z',
          updatedAt: '2019-11-25T06:53:28.542Z',
          Favorite: {
            UserId: 1,
            RestaurantId: 5,
            createdAt: '2019-11-23T14:09:32.441Z',
            updatedAt: '2019-11-23T14:09:32.441Z'
          }
        }
      ],
      isFavorited: true,
      FavoriteCount: 1
    },
    {
      id: 6,
      name: 'Liliane Dibbert',
      tel: '1-827-478-9971 x690',
      address: '2762 Devon Run',
      opening_hours: '08:00',
      description: 'facilis',
      image:
        'https://loremflickr.com/320/240/restaurant,food/?random=98.6709769179636',
      viewCounts: 22,
      createdAt: '2019-11-20T06:25:42.923Z',
      updatedAt: '2019-11-23T14:30:18.715Z',
      CategoryId: 2,
      FavoritedUsers: [
        {
          id: 1,
          name: 'root1',
          email: 'root@example.com',
          password:
            '$2a$10$alLLwv1Kn0tC9euHs6Llwen8uif7jQfU9DPaybXRuGn83ZfKzW56G',
          isAdmin: true,
          image: null,
          createdAt: '2019-11-20T06:25:42.456Z',
          updatedAt: '2019-11-25T06:53:28.542Z',
          Favorite: {
            UserId: 1,
            RestaurantId: 6,
            createdAt: '2019-11-23T13:53:40.181Z',
            updatedAt: '2019-11-23T13:53:40.181Z'
          }
        }
      ],
      isFavorited: true,
      FavoriteCount: 1
    },
    {
      id: 7,
      name: 'Kari Sporer',
      tel: '584-434-6976',
      address: '941 Jakubowski Stream',
      opening_hours: '08:00',
      description: 'sunt dolorem voluptate',
      image:
        'https://loremflickr.com/320/240/restaurant,food/?random=80.77439621389972',
      viewCounts: 1,
      createdAt: '2019-11-20T06:25:42.923Z',
      updatedAt: '2019-11-23T14:30:22.808Z',
      CategoryId: 1,
      FavoritedUsers: [
        {
          id: 1,
          name: 'root1',
          email: 'root@example.com',
          password:
            '$2a$10$alLLwv1Kn0tC9euHs6Llwen8uif7jQfU9DPaybXRuGn83ZfKzW56G',
          isAdmin: true,
          image: null,
          createdAt: '2019-11-20T06:25:42.456Z',
          updatedAt: '2019-11-25T06:53:28.542Z',
          Favorite: {
            UserId: 1,
            RestaurantId: 7,
            createdAt: '2019-11-23T13:54:18.486Z',
            updatedAt: '2019-11-23T13:54:18.486Z'
          }
        }
      ],
      isFavorited: true,
      FavoriteCount: 1
    },
    {
      id: 24,
      name: 'Tracy Kling',
      tel: '602.671.9831',
      address: '4776 Hazle Freeway',
      opening_hours: '08:00',
      description: 'Libero fugit omnis inventore quasi maxime magnam a',
      image:
        'https://loremflickr.com/320/240/restaurant,food/?random=28.34397872340968',
      viewCounts: null,
      createdAt: '2019-11-20T06:25:42.927Z',
      updatedAt: '2019-11-20T06:25:42.927Z',
      CategoryId: 2,
      FavoritedUsers: [],
      isFavorited: false,
      FavoriteCount: 0
    },
    {
      id: 38,
      name: 'Arlo Kuhn',
      tel: '149-987-1043',
      address: '8225 Rahul Ridges',
      opening_hours: '08:00',
      description: 'Nobis repudiandae veniam ipsa adipisci ut delectus',
      image:
        'https://loremflickr.com/320/240/restaurant,food/?random=52.44227001274191',
      viewCounts: null,
      createdAt: '2019-11-20T06:25:42.930Z',
      updatedAt: '2019-11-20T06:25:42.930Z',
      CategoryId: 2,
      FavoritedUsers: [],
      isFavorited: false,
      FavoriteCount: 0
    },
    {
      id: 22,
      name: 'Joanie Larkin',
      tel: '436.858.3661 x76732',
      address: '732 Reichert Underpass',
      opening_hours: '08:00',
      description: 'Officia quidem voluptatem dignissimos repellat pro',
      image:
        'https://loremflickr.com/320/240/restaurant,food/?random=10.952554365224177',
      viewCounts: null,
      createdAt: '2019-11-20T06:25:42.927Z',
      updatedAt: '2019-11-20T06:25:42.927Z',
      CategoryId: 1,
      FavoritedUsers: [],
      isFavorited: false,
      FavoriteCount: 0
    },
    {
      id: 40,
      name: 'Mr. Brennon Jakubowski',
      tel: '1-098-504-4116',
      address: '668 Destin Ferry',
      opening_hours: '08:00',
      description: 'Dignissimos consectetur itaque eius quasi tempore ',
      image:
        'https://loremflickr.com/320/240/restaurant,food/?random=54.59595296130533',
      viewCounts: null,
      createdAt: '2019-11-20T06:25:42.931Z',
      updatedAt: '2019-11-20T06:25:42.931Z',
      CategoryId: 5,
      FavoritedUsers: [],
      isFavorited: false,
      FavoriteCount: 0
    },
    {
      id: 42,
      name: 'Derek Shields MD',
      tel: '158-995-6038',
      address: '3403 Ortiz Inlet',
      opening_hours: '08:00',
      description: 'Velit suscipit soluta. Sint deleniti magni quaerat',
      image:
        'https://loremflickr.com/320/240/restaurant,food/?random=49.09923471680735',
      viewCounts: null,
      createdAt: '2019-11-20T06:25:42.931Z',
      updatedAt: '2019-11-20T06:25:42.931Z',
      CategoryId: 2,
      FavoritedUsers: [],
      isFavorited: false,
      FavoriteCount: 0
    }
  ]
}
import NavTabs from '../components/NavTabs'
import TopRestaurantCard from '../components/TopRestaurantCard'
export default {
  name: 'RestaurantsTop',
  components: {
    NavTabs,
    TopRestaurantCard
  },
  data() {
    return {
      restaurants: []
    }
  },
  created() {
    this.fetchRestaurants()
  },
  methods: {
    fetchRestaurants() {
      this.restaurants = dummyData.restaurants
    }
  }
}
</script>