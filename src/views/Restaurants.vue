<template>
  <div class="container py-5">
    <NavTabs />
    <!-- 餐廳類別標籤 RestaurantsNavPills -->

    <RestaurantsNavPills :categories="categories" />
    <div class="row">
      <!-- 餐廳卡片 RestaurantCard-->
      <RestaurantCard
        v-for="restaurant in restaurants"
        :key="restaurant.id"
        :initial-restaurant="restaurant"
      />
    </div>

    <!-- 分頁標籤 RestaurantPagination -->
  </div>
</template>

<script>
import NavTabs from '../components/NavTabs'
import RestaurantCard from '../components/RestaurantCard'
import RestaurantsNavPills from '../components/RestaurantsNavPills'
const dummyData = {
  restaurants: [
    {
      id: 14,
      name: 'Rahul Kilback',
      tel: '1-573-027-3190',
      address: '13538 Lula Roads',
      opening_hours: '08:00',
      description: 'Ut ea repellat cumque illo sint. Possimus a magni ',
      image:
        'https://loremflickr.com/320/240/restaurant,food/?random=66.19683181847653',
      viewCounts: 10,
      createdAt: '2019-11-20T06:25:42.925Z',
      updatedAt: '2019-11-24T10:03:11.697Z',
      CategoryId: 5,
      Category: {
        id: 5,
        name: '素食料理',
        createdAt: '2019-11-20T06:25:42.917Z',
        updatedAt: '2019-11-20T06:25:42.917Z'
      },
      isFavorited: true,
      isLiked: true
    },
    {
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
      CategoryId: 3,
      Category: {
        id: 3,
        name: '義大利料理',
        createdAt: '2019-11-20T06:25:42.917Z',
        updatedAt: '2019-11-20T06:25:42.917Z'
      },
      isFavorited: false,
      isLiked: false
    },
    {
      id: 13,
      name: "Edwardo O'Connell",
      tel: '1-616-258-4098 x22305',
      address: '995 Winfield Shore',
      opening_hours: '08:00',
      description: 'Nemo nam adipisci corporis voluptatem enim quasi i',
      image:
        'https://loremflickr.com/320/240/restaurant,food/?random=80.45833463639185',
      viewCounts: null,
      createdAt: '2019-11-20T06:25:42.924Z',
      updatedAt: '2019-11-20T06:25:42.924Z',
      CategoryId: 4,
      Category: {
        id: 4,
        name: '墨西哥料理',
        createdAt: '2019-11-20T06:25:42.917Z',
        updatedAt: '2019-11-20T06:25:42.917Z'
      },
      isFavorited: false,
      isLiked: false
    },
    {
      id: 15,
      name: 'Vinnie Beier',
      tel: '(147) 768-4416 x06977',
      address: '91390 VonRueden Ferry',
      opening_hours: '08:00',
      description: 'Deserunt molestiae deleniti in asperiores dolorum ',
      image:
        'https://loremflickr.com/320/240/restaurant,food/?random=8.851357212949207',
      viewCounts: null,
      createdAt: '2019-11-20T06:25:42.925Z',
      updatedAt: '2019-11-20T06:25:42.925Z',
      CategoryId: 5,
      Category: {
        id: 5,
        name: '素食料理',
        createdAt: '2019-11-20T06:25:42.917Z',
        updatedAt: '2019-11-20T06:25:42.917Z'
      },
      isFavorited: false,
      isLiked: false
    },
    {
      id: 16,
      name: 'Aliyah Schaden V',
      tel: '1-881-809-6051',
      address: '747 Carter Roads',
      opening_hours: '08:00',
      description: 'Ducimus laboriosam earum. Occaecati placeat ab per',
      image:
        'https://loremflickr.com/320/240/restaurant,food/?random=73.5077723721848',
      viewCounts: null,
      createdAt: '2019-11-20T06:25:42.926Z',
      updatedAt: '2019-11-20T06:25:42.926Z',
      CategoryId: 4,
      Category: {
        id: 4,
        name: '墨西哥料理',
        createdAt: '2019-11-20T06:25:42.917Z',
        updatedAt: '2019-11-20T06:25:42.917Z'
      },
      isFavorited: false,
      isLiked: false
    },
    {
      id: 17,
      name: 'Abdiel Denesik',
      tel: '1-462-228-0055',
      address: '3668 Vandervort Mountain',
      opening_hours: '08:00',
      description: 'odit eum quia',
      image:
        'https://loremflickr.com/320/240/restaurant,food/?random=97.04595774715901',
      viewCounts: null,
      createdAt: '2019-11-20T06:25:42.926Z',
      updatedAt: '2019-11-20T06:25:42.926Z',
      CategoryId: 2,
      Category: {
        id: 2,
        name: '日本料理',
        createdAt: '2019-11-20T06:25:42.917Z',
        updatedAt: '2019-11-20T06:25:42.917Z'
      },
      isFavorited: false,
      isLiked: false
    },
    {
      id: 18,
      name: 'Miss Judd Satterfield',
      tel: '(670) 554-5755 x689',
      address: '6262 Pfannerstill Radial',
      opening_hours: '08:00',
      description: 'omnis quisquam possimus',
      image:
        'https://loremflickr.com/320/240/restaurant,food/?random=36.49343044536353',
      viewCounts: null,
      createdAt: '2019-11-20T06:25:42.926Z',
      updatedAt: '2019-11-20T06:25:42.926Z',
      CategoryId: 2,
      Category: {
        id: 2,
        name: '日本料理',
        createdAt: '2019-11-20T06:25:42.917Z',
        updatedAt: '2019-11-20T06:25:42.917Z'
      },
      isFavorited: false,
      isLiked: false
    },
    {
      id: 12,
      name: 'Charley Koelpin',
      tel: '166-610-8412',
      address: '63494 Orn Plains',
      opening_hours: '08:00',
      description: 'Assumenda qui voluptatem. Voluptas occaecati aliqu',
      image:
        'https://loremflickr.com/320/240/restaurant,food/?random=66.85254991604799',
      viewCounts: 2,
      createdAt: '2019-11-20T06:25:42.924Z',
      updatedAt: '2019-11-24T07:09:58.753Z',
      CategoryId: 5,
      Category: {
        id: 5,
        name: '素食料理',
        createdAt: '2019-11-20T06:25:42.917Z',
        updatedAt: '2019-11-20T06:25:42.917Z'
      },
      isFavorited: false,
      isLiked: false
    },
    {
      id: 21,
      name: 'Daija Kunze',
      tel: '384-909-3213',
      address: '868 Bayer Mountains',
      opening_hours: '08:00',
      description: 'Reprehenderit aliquam dolor dicta consequatur ad n',
      image:
        'https://loremflickr.com/320/240/restaurant,food/?random=56.179907577974795',
      viewCounts: null,
      createdAt: '2019-11-20T06:25:42.927Z',
      updatedAt: '2019-11-20T06:25:42.927Z',
      CategoryId: 3,
      Category: {
        id: 3,
        name: '義大利料理',
        createdAt: '2019-11-20T06:25:42.917Z',
        updatedAt: '2019-11-20T06:25:42.917Z'
      },
      isFavorited: false,
      isLiked: false
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
      Category: {
        id: 1,
        name: '中式料理',
        createdAt: '2019-11-20T06:25:42.917Z',
        updatedAt: '2019-11-20T06:25:42.917Z'
      },
      isFavorited: false,
      isLiked: false
    }
  ],
  categories: [
    {
      id: 1,
      name: '中式料理',
      createdAt: '2019-11-20T06:25:42.917Z',
      updatedAt: '2019-11-20T06:25:42.917Z'
    },
    {
      id: 2,
      name: '日本料理',
      createdAt: '2019-11-20T06:25:42.917Z',
      updatedAt: '2019-11-20T06:25:42.917Z'
    },
    {
      id: 3,
      name: '義大利料理',
      createdAt: '2019-11-20T06:25:42.917Z',
      updatedAt: '2019-11-20T06:25:42.917Z'
    },
    {
      id: 4,
      name: '墨西哥料理',
      createdAt: '2019-11-20T06:25:42.917Z',
      updatedAt: '2019-11-20T06:25:42.917Z'
    },
    {
      id: 5,
      name: '素食料理',
      createdAt: '2019-11-20T06:25:42.917Z',
      updatedAt: '2019-11-20T06:25:42.917Z'
    },
    {
      id: 6,
      name: '美式料理',
      createdAt: '2019-11-20T06:25:42.917Z',
      updatedAt: '2019-11-20T06:25:42.917Z'
    },
    {
      id: 7,
      name: '複合式料理',
      createdAt: '2019-11-20T06:25:42.917Z',
      updatedAt: '2019-11-20T06:25:42.917Z'
    },
    {
      id: 60,
      name: 'adfa',
      createdAt: '2019-11-23T14:47:27.384Z',
      updatedAt: '2019-11-23T14:47:27.384Z'
    },
    {
      id: 61,
      name: 'asdaaaaa',
      createdAt: '2019-11-23T14:52:28.251Z',
      updatedAt: '2019-11-23T14:52:28.251Z'
    },
    {
      id: 59,
      name: 'ww',
      createdAt: '2019-11-23T14:14:08.992Z',
      updatedAt: '2019-11-23T15:55:11.729Z'
    }
  ],
  categoryId: '',
  page: 1,
  totalPage: [1, 2, 3, 4, 5, 6],
  prev: 1,
  next: 2
}
export default {
  components: {
    NavTabs,
    RestaurantCard,
    RestaurantsNavPills
  },
  data() {
    return {
      categories: [],
      categoryId: -1,
      currentPage: 1,
      restaurants: [],
      totalPage: -1
    }
  },
  created() {
    this.fetchRestaurants()
  },
  methods: {
    fetchRestaurants() {
      this.categories = dummyData.categories
      this.categoryId = dummyData.categoryId
      this.currentPage = dummyData.page
      this.restaurants = dummyData.restaurants
      this.totalPage = dummyData.totalPage.length
    }
  }
}
</script>