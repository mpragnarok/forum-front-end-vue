<template>
  <div class="row">
    <div class="col-md-12">
      <h1>{{restaurant.name}}</h1>
      <span class="badge badge-secondary">{{restaurant.Category.name}}</span>
    </div>
    <div class="col-md-4">
      <div class="well">
        <ul class="list-unstyled">
          <li>
            <strong>Reviews:</strong>
            {{restaurant.Comments.length}}
          </li>
          <li>
            <strong>Views:</strong>
            {{restaurant.viewCounts}}
          </li>
        </ul>
        <a href="javascript:history.go(-1)">Go Back</a>
      </div>
    </div>

    <hr />
  </div>
</template>

<script>
const dummyData = {
  restaurant: {
    id: 1,
    name: 'August Gerlach Da LA1234',
    tel: '02-8888-9999',
    address: '01313 ketlch deive',
    opening_hours: '08:00',
    description: 'dsfsafdsadfasasdfasdf',
    image:
      'https://loremflickr.com/320/240/restaurant,food/?random=22.148585495422335',
    viewCounts: 2,
    createdAt: '2019-11-20T06:25:42.921Z',
    updatedAt: '2019-11-27T06:22:09.768Z',
    CategoryId: 2,
    Category: {
      id: 2,
      name: '日本料理',
      createdAt: '2019-11-20T06:25:42.917Z',
      updatedAt: '2019-11-20T06:25:42.917Z'
    },
    Comments: [
      {
        id: 1,
        text: 'Voluptas omnis laudantium et non ut quia unde.',
        UserId: 2,
        RestaurantId: 1,
        createdAt: '2019-11-20T06:25:42.942Z',
        updatedAt: '2019-11-20T06:25:42.942Z',
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
        }
      },
      {
        id: 51,
        text: 'Distinctio laborum explicabo quasi.',
        UserId: 2,
        RestaurantId: 1,
        createdAt: '2019-11-20T06:25:42.944Z',
        updatedAt: '2019-11-20T06:25:42.944Z',
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
        }
      },
      {
        id: 101,
        text: 'Nihil iure quas.',
        UserId: 2,
        RestaurantId: 1,
        createdAt: '2019-11-20T06:25:42.946Z',
        updatedAt: '2019-11-20T06:25:42.946Z',
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
        }
      }
    ]
  }
}
export default {
  data() {
    return {
      restaurant: dummyData.restaurant
    }
  }
}
</script>