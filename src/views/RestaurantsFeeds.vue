<template>
  <div class="container py-5">
    <NavTabs />
    <h1 class="mt-5">Feeds</h1>
    <hr />
    <div class="row">
      <div class="col-md-6">
        <h3>Newest Restaurants</h3>
        <!-- 最新餐廳 NewestRestaurants -->
        <NewestRestaurants :restaurants="restaurants" />
      </div>
      <div class="col-md-6">
        <!-- 最新評論 NewestComments-->
        <h3>Newest Comments</h3>
        <NewestComments :comments="comments" />
      </div>
    </div>
  </div>
</template>

<script>
import NavTabs from '../components/NavTabs'
import NewestRestaurants from '../components/NewestRestaurants'
import NewestComments from '../components/NewestComments'
const dummyData = {
  restaurants: [
    {
      id: 61,
      name: '哇啦啦啦',
      tel: '',
      address: '',
      opening_hours: '',
      description: '',
      image: null,
      viewCounts: null,
      createdAt: '2019-11-23T14:43:17.444Z',
      updatedAt: '2019-11-23T14:43:17.444Z',
      CategoryId: 3,
      Category: {
        id: 3,
        name: '義大利料理',
        createdAt: '2019-11-20T06:25:42.917Z',
        updatedAt: '2019-11-20T06:25:42.917Z'
      }
    },
    {
      id: 60,
      name: 'yyyyy',
      tel: '',
      address: '',
      opening_hours: '',
      description: '',
      image: null,
      viewCounts: null,
      createdAt: '2019-11-23T14:41:55.478Z',
      updatedAt: '2019-11-23T14:41:55.478Z',
      CategoryId: 4,
      Category: {
        id: 4,
        name: '墨西哥料理',
        createdAt: '2019-11-20T06:25:42.917Z',
        updatedAt: '2019-11-20T06:25:42.917Z'
      }
    },
    {
      id: 59,
      name: 'test11',
      tel: '123',
      address: '123',
      opening_hours: '12:59',
      description: 'dd',
      image: 'https://i.imgur.com/J977QZe.jpg',
      viewCounts: null,
      createdAt: '2019-11-23T14:37:12.845Z',
      updatedAt: '2019-11-23T14:37:12.845Z',
      CategoryId: 3,
      Category: {
        id: 3,
        name: '義大利料理',
        createdAt: '2019-11-20T06:25:42.917Z',
        updatedAt: '2019-11-20T06:25:42.917Z'
      }
    },
    {
      id: 58,
      name: 'test1 234567',
      tel: '0988888888',
      address: 'New Taipei City',
      opening_hours: '',
      description: '',
      image: null,
      viewCounts: null,
      createdAt: '2019-11-23T07:40:54.401Z',
      updatedAt: '2019-11-23T11:12:31.210Z',
      CategoryId: 2,
      Category: {
        id: 2,
        name: '日本料理',
        createdAt: '2019-11-20T06:25:42.917Z',
        updatedAt: '2019-11-20T06:25:42.917Z'
      }
    },
    {
      id: 54,
      name: 'retetret',
      tel: 'retertrt',
      address: 'ertretre',
      opening_hours: '01:00',
      description: 'ertetrete',
      image: null,
      viewCounts: null,
      createdAt: '2019-11-22T06:57:24.615Z',
      updatedAt: '2019-11-22T06:57:24.615Z',
      CategoryId: 2,
      Category: {
        id: 2,
        name: '日本料理',
        createdAt: '2019-11-20T06:25:42.917Z',
        updatedAt: '2019-11-20T06:25:42.917Z'
      }
    },
    {
      id: 53,
      name: '素食',
      tel: '12345678',
      address: 'wqeqwe',
      opening_hours: '01:59',
      description: 'qweqe',
      image: null,
      viewCounts: null,
      createdAt: '2019-11-22T06:51:45.306Z',
      updatedAt: '2019-11-22T06:51:45.306Z',
      CategoryId: 6,
      Category: {
        id: 6,
        name: '美式料理',
        createdAt: '2019-11-20T06:25:42.917Z',
        updatedAt: '2019-11-20T06:25:42.917Z'
      }
    },
    {
      id: 52,
      name: '發大財0121牛排',
      tel: '12345678',
      address: '高雄市',
      opening_hours: '00:00',
      description: '123',
      image: 'https://i.imgur.com/VwnnLF9.jpg',
      viewCounts: null,
      createdAt: '2019-11-22T06:51:00.683Z',
      updatedAt: '2019-11-22T06:51:00.683Z',
      CategoryId: 5,
      Category: {
        id: 5,
        name: '素食料理',
        createdAt: '2019-11-20T06:25:42.917Z',
        updatedAt: '2019-11-20T06:25:42.917Z'
      }
    },
    {
      id: 51,
      name: '發大財0121牛排',
      tel: '12345678',
      address: '高雄市',
      opening_hours: '00:00',
      description: '123',
      image: 'https://i.imgur.com/CaeM9rg.jpg',
      viewCounts: null,
      createdAt: '2019-11-22T06:50:58.472Z',
      updatedAt: '2019-11-22T06:50:58.472Z',
      CategoryId: 5,
      Category: {
        id: 5,
        name: '素食料理',
        createdAt: '2019-11-20T06:25:42.917Z',
        updatedAt: '2019-11-20T06:25:42.917Z'
      }
    },
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
      Category: {
        id: 2,
        name: '日本料理',
        createdAt: '2019-11-20T06:25:42.917Z',
        updatedAt: '2019-11-20T06:25:42.917Z'
      }
    },
    {
      id: 48,
      name: 'Rosie Mayer Jr.',
      tel: '1-686-584-6537 x40191',
      address: '46878 Buckridge Passage',
      opening_hours: '08:00',
      description:
        'Ad dignissimos praesentium. Aut vel neque nobis aut. Molestias quasi cumque aut ratione et. Facere voluptatem sapiente. Et praesentium sed ex sunt. Est nihil rem facilis.',
      image:
        'https://loremflickr.com/320/240/restaurant,food/?random=84.39306160663618',
      viewCounts: null,
      createdAt: '2019-11-20T06:25:42.934Z',
      updatedAt: '2019-11-20T06:25:42.934Z',
      CategoryId: 5,
      Category: {
        id: 5,
        name: '素食料理',
        createdAt: '2019-11-20T06:25:42.917Z',
        updatedAt: '2019-11-20T06:25:42.917Z'
      }
    }
  ],
  comments: [
    {
      id: 185,
      text: 'levi',
      UserId: 2,
      RestaurantId: 11,
      createdAt: '2019-11-24T04:57:26.540Z',
      updatedAt: '2019-11-24T04:57:26.540Z',
      User: {
        id: 2,
        name: 'user1',
        email: 'user1@example.com',
        password:
          '$2a$10$ESv6iQjQ8oEe3/XGjw00PuSh1kjmG6Dkhd4YXa50boTlncJDxljAy',
        isAdmin: false,
        image: null,
        createdAt: '2019-11-20T06:25:42.685Z',
        updatedAt: '2019-11-21T09:55:30.970Z'
      },
      Restaurant: {
        id: 11,
        name: 'Brayan Fahey',
        tel: '1-254-729-2217 x00004',
        address: '543 Powlowski Brooks',
        opening_hours: '08:00',
        description: 'eius ipsam molestiae',
        image:
          'https://loremflickr.com/320/240/restaurant,food/?random=26.664359906345346',
        viewCounts: 5,
        createdAt: '2019-11-20T06:25:42.924Z',
        updatedAt: '2019-11-24T07:09:38.993Z',
        CategoryId: 3
      }
    },
    {
      id: 151,
      text: 'Cool Restaurant',
      UserId: 2,
      RestaurantId: 2,
      createdAt: '2019-11-20T08:59:36.728Z',
      updatedAt: '2019-11-20T08:59:36.728Z',
      User: {
        id: 2,
        name: 'user1',
        email: 'user1@example.com',
        password:
          '$2a$10$ESv6iQjQ8oEe3/XGjw00PuSh1kjmG6Dkhd4YXa50boTlncJDxljAy',
        isAdmin: false,
        image: null,
        createdAt: '2019-11-20T06:25:42.685Z',
        updatedAt: '2019-11-21T09:55:30.970Z'
      },
      Restaurant: {
        id: 2,
        name: 'Kaci Koelpin',
        tel: '083-343-7765',
        address: '22769 Johnson Squares',
        opening_hours: '08:00',
        description:
          'Sequi facere sit iusto molestiae dolores quibusdam dolores. Labore deleniti beatae id. Qui quidem quibusdam fugiat qui harum odit voluptas. Beatae asperiores exercitationem quia commodi. Provident magnam sed expedita quibusdam labore aliquid hic.',
        image:
          'https://loremflickr.com/320/240/restaurant,food/?random=22.957592747300982',
        viewCounts: 110,
        createdAt: '2019-11-20T06:25:42.922Z',
        updatedAt: '2019-11-20T09:00:04.918Z',
        CategoryId: 4
      }
    },
    {
      id: 150,
      text: 'Nesciunt molestiae molestiae sed.',
      UserId: 3,
      RestaurantId: 50,
      createdAt: '2019-11-20T06:25:42.948Z',
      updatedAt: '2019-11-20T06:25:42.948Z',
      User: {
        id: 3,
        name: 'user2',
        email: 'user2@example.com',
        password:
          '$2a$10$8SSanoaxZCd/VEJFxxKShuWVFzU6JyuwvYDD6bP4UheZDbSWibPea',
        isAdmin: false,
        image: null,
        createdAt: '2019-11-20T06:25:42.909Z',
        updatedAt: '2019-11-20T06:25:42.909Z'
      },
      Restaurant: {
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
        CategoryId: 2
      }
    },
    {
      id: 146,
      text: 'Ad nihil necessitatibus nam vel omnis labore suscipit.',
      UserId: 3,
      RestaurantId: 46,
      createdAt: '2019-11-20T06:25:42.948Z',
      updatedAt: '2019-11-20T06:25:42.948Z',
      User: {
        id: 3,
        name: 'user2',
        email: 'user2@example.com',
        password:
          '$2a$10$8SSanoaxZCd/VEJFxxKShuWVFzU6JyuwvYDD6bP4UheZDbSWibPea',
        isAdmin: false,
        image: null,
        createdAt: '2019-11-20T06:25:42.909Z',
        updatedAt: '2019-11-20T06:25:42.909Z'
      },
      Restaurant: {
        id: 46,
        name: 'Bernadette Sawayn',
        tel: '1-773-750-7162 x141',
        address: '309 Hackett Valley',
        opening_hours: '08:00',
        description: 'temporibus',
        image:
          'https://loremflickr.com/320/240/restaurant,food/?random=47.44279873720891',
        viewCounts: null,
        createdAt: '2019-11-20T06:25:42.932Z',
        updatedAt: '2019-11-20T06:25:42.932Z',
        CategoryId: 4
      }
    },
    {
      id: 148,
      text: 'Quis at maxime reiciendis.',
      UserId: 3,
      RestaurantId: 48,
      createdAt: '2019-11-20T06:25:42.948Z',
      updatedAt: '2019-11-20T06:25:42.948Z',
      User: {
        id: 3,
        name: 'user2',
        email: 'user2@example.com',
        password:
          '$2a$10$8SSanoaxZCd/VEJFxxKShuWVFzU6JyuwvYDD6bP4UheZDbSWibPea',
        isAdmin: false,
        image: null,
        createdAt: '2019-11-20T06:25:42.909Z',
        updatedAt: '2019-11-20T06:25:42.909Z'
      },
      Restaurant: {
        id: 48,
        name: 'Rosie Mayer Jr.',
        tel: '1-686-584-6537 x40191',
        address: '46878 Buckridge Passage',
        opening_hours: '08:00',
        description:
          'Ad dignissimos praesentium. Aut vel neque nobis aut. Molestias quasi cumque aut ratione et. Facere voluptatem sapiente. Et praesentium sed ex sunt. Est nihil rem facilis.',
        image:
          'https://loremflickr.com/320/240/restaurant,food/?random=84.39306160663618',
        viewCounts: null,
        createdAt: '2019-11-20T06:25:42.934Z',
        updatedAt: '2019-11-20T06:25:42.934Z',
        CategoryId: 5
      }
    },
    {
      id: 149,
      text: 'Ipsum ratione voluptatem voluptas in est omnis laboriosam vel.',
      UserId: 3,
      RestaurantId: 49,
      createdAt: '2019-11-20T06:25:42.948Z',
      updatedAt: '2019-11-20T06:25:42.948Z',
      User: {
        id: 3,
        name: 'user2',
        email: 'user2@example.com',
        password:
          '$2a$10$8SSanoaxZCd/VEJFxxKShuWVFzU6JyuwvYDD6bP4UheZDbSWibPea',
        isAdmin: false,
        image: null,
        createdAt: '2019-11-20T06:25:42.909Z',
        updatedAt: '2019-11-20T06:25:42.909Z'
      },
      Restaurant: {
        id: 49,
        name: 'Dejah Kertzmann',
        tel: '(430) 181-8381',
        address: '25596 Haag Creek',
        opening_hours: '08:00',
        description:
          'Quis excepturi similique porro omnis quia sit a quos molestiae. Quia et aut quidem consequatur eum quisquam laboriosam quam. Voluptatibus dolore reprehenderit facere.\n \rMolestiae nam labore similique provident assumenda magni expedita. Quasi assumenda nemo odit unde debitis. Veritatis veritatis alias. Enim libero mollitia voluptatem laudantium explicabo qui.\n \rQuam commodi atque debitis amet voluptas saepe vero maxime et. Est voluptates facilis sit maiores voluptates voluptas. Ut voluptatem in rem eum voluptate culpa.',
        image:
          'https://loremflickr.com/320/240/restaurant,food/?random=86.69959548084738',
        viewCounts: null,
        createdAt: '2019-11-20T06:25:42.934Z',
        updatedAt: '2019-11-20T06:25:42.934Z',
        CategoryId: 3
      }
    },
    {
      id: 143,
      text: 'Neque non fugit nulla fugit quia sunt et.',
      UserId: 2,
      RestaurantId: 43,
      createdAt: '2019-11-20T06:25:42.948Z',
      updatedAt: '2019-11-20T06:25:42.948Z',
      User: {
        id: 2,
        name: 'user1',
        email: 'user1@example.com',
        password:
          '$2a$10$ESv6iQjQ8oEe3/XGjw00PuSh1kjmG6Dkhd4YXa50boTlncJDxljAy',
        isAdmin: false,
        image: null,
        createdAt: '2019-11-20T06:25:42.685Z',
        updatedAt: '2019-11-21T09:55:30.970Z'
      },
      Restaurant: {
        id: 43,
        name: 'Dr. Magdalen Davis',
        tel: '(424) 983-9590 x24645',
        address: '45584 Claudia Green',
        opening_hours: '08:00',
        description:
          'Rerum atque placeat non. Sint esse maiores iste commodi magnam modi laborum. Distinctio ut aliquid sed sapiente et quo commodi odio enim. Sit quidem nobis sunt tempora perspiciatis nemo voluptatem nesciunt. Qui est voluptas cupiditate tempora dolores laudantium quis quia quis. Rem autem temporibus fugit deserunt.\n \rQuam placeat illum nihil sunt expedita nisi reprehenderit. Eaque dolor optio iure qui aut non. Adipisci corrupti et ullam eius explicabo incidunt. Nesciunt id cum sapiente voluptates odit eius laborum. Necessitatibus at non non. Quisquam voluptas eveniet eveniet praesentium.\n \rEsse doloribus iure quia mollitia velit ipsa tenetur deleniti. Consequatur incidunt blanditiis quidem et. Id autem iste voluptatum sint deserunt et. Quod velit a. Pariatur culpa autem aspernatur dignissimos cum quos animi. Qui eligendi voluptatem.',
        image:
          'https://loremflickr.com/320/240/restaurant,food/?random=11.101761113142405',
        viewCounts: null,
        createdAt: '2019-11-20T06:25:42.932Z',
        updatedAt: '2019-11-20T06:25:42.932Z',
        CategoryId: 3
      }
    },
    {
      id: 142,
      text: 'Placeat sint voluptatem voluptatem unde.',
      UserId: 2,
      RestaurantId: 42,
      createdAt: '2019-11-20T06:25:42.948Z',
      updatedAt: '2019-11-20T06:25:42.948Z',
      User: {
        id: 2,
        name: 'user1',
        email: 'user1@example.com',
        password:
          '$2a$10$ESv6iQjQ8oEe3/XGjw00PuSh1kjmG6Dkhd4YXa50boTlncJDxljAy',
        isAdmin: false,
        image: null,
        createdAt: '2019-11-20T06:25:42.685Z',
        updatedAt: '2019-11-21T09:55:30.970Z'
      },
      Restaurant: {
        id: 42,
        name: 'Derek Shields MD',
        tel: '158-995-6038',
        address: '3403 Ortiz Inlet',
        opening_hours: '08:00',
        description:
          'Velit suscipit soluta. Sint deleniti magni quaerat voluptatibus dignissimos hic quia. Pariatur voluptas recusandae impedit voluptatem velit. Deserunt qui odio est vel quisquam et iste quo.',
        image:
          'https://loremflickr.com/320/240/restaurant,food/?random=49.09923471680735',
        viewCounts: null,
        createdAt: '2019-11-20T06:25:42.931Z',
        updatedAt: '2019-11-20T06:25:42.931Z',
        CategoryId: 2
      }
    },
    {
      id: 145,
      text: 'Et adipisci vel ipsa ut non.',
      UserId: 1,
      RestaurantId: 45,
      createdAt: '2019-11-20T06:25:42.948Z',
      updatedAt: '2019-11-20T06:25:42.948Z',
      User: {
        id: 1,
        name: 'root1',
        email: 'root@example.com',
        password:
          '$2a$10$alLLwv1Kn0tC9euHs6Llwen8uif7jQfU9DPaybXRuGn83ZfKzW56G',
        isAdmin: true,
        image: null,
        createdAt: '2019-11-20T06:25:42.456Z',
        updatedAt: '2019-11-20T15:18:16.157Z'
      },
      Restaurant: {
        id: 45,
        name: 'Gay Hintz',
        tel: '(549) 902-6622',
        address: '16657 Lane Rapid',
        opening_hours: '08:00',
        description: 'est',
        image:
          'https://loremflickr.com/320/240/restaurant,food/?random=53.54156594068704',
        viewCounts: null,
        createdAt: '2019-11-20T06:25:42.932Z',
        updatedAt: '2019-11-20T06:25:42.932Z',
        CategoryId: 4
      }
    },
    {
      id: 144,
      text:
        'Voluptate qui consequuntur ratione atque deserunt doloribus eligendi.',
      UserId: 2,
      RestaurantId: 44,
      createdAt: '2019-11-20T06:25:42.948Z',
      updatedAt: '2019-11-20T06:25:42.948Z',
      User: {
        id: 2,
        name: 'user1',
        email: 'user1@example.com',
        password:
          '$2a$10$ESv6iQjQ8oEe3/XGjw00PuSh1kjmG6Dkhd4YXa50boTlncJDxljAy',
        isAdmin: false,
        image: null,
        createdAt: '2019-11-20T06:25:42.685Z',
        updatedAt: '2019-11-21T09:55:30.970Z'
      },
      Restaurant: {
        id: 44,
        name: 'Citlalli Grady',
        tel: '274-150-1828 x8337',
        address: '054 Ewell Route',
        opening_hours: '08:00',
        description: 'Molestiae cum sit sunt delectus.',
        image:
          'https://loremflickr.com/320/240/restaurant,food/?random=15.185966372644089',
        viewCounts: null,
        createdAt: '2019-11-20T06:25:42.932Z',
        updatedAt: '2019-11-20T06:25:42.932Z',
        CategoryId: 4
      }
    }
  ]
}
export default {
  name: 'RestaurantsFeeds.vue',
  components: {
    NavTabs,
    NewestRestaurants,
    NewestComments
  },
  data() {
    return {
      restaurants: [],
      comments: []
    }
  },
  created() {
    this.fetchFeeds()
  },
  methods: {
    fetchFeeds() {
      this.restaurants = dummyData.restaurants
      this.comments = dummyData.comments
    }
  }
}
</script>