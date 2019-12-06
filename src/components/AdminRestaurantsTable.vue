<template>
  <table class="table">
    <thead class="thead-dark">
      <tr>
        <th scope="col">
          #
        </th>
        <th scope="col">
          Category
        </th>
        <th scope="col">
          Name
        </th>
        <th
          scope="col"
          width="300"
        >
          操作
        </th>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="restaurant in restaurants"
        :key="restaurant.id"
      >
        <th scope="row">
          {{ restaurant.id }}
        </th>
        <td>{{ restaurant.Category && restaurant.Category.name }}</td>
        <td>{{ restaurant.name }}</td>
        <td class="d-flex justify-content-between">
           <router-link
            :to="{name: 'admin-restaurant', params: {id: restaurant.id}}"
            class="btn btn-link"
          >
            Show
          </router-link>

          <a
            href="#"
            class="btn btn-link"
          >Edit</a>

          <button
            type="button"
            class="btn btn-link"
            @click.stop.prevent="deleteRestaurant(restaurant.id)"
          >
            Delete
          </button>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
const dummyData = {
    "restaurants": [
        {
            "id": 13,
            "name": "墨西哥歌",
            "tel": "1-616-258-4098 x2230",
            "address": "995 Winfield Shore",
            "opening_hours": "08:00",
            "description": "Nemo nam adipisci corporis voluptatem enim quasi ipsum mollitia ab. Voluptas deleniti ducimus odit maxime. Aliquid vitae eos iusto ut rem earum expedita velit. Occaecati repellat quo. Consequuntur qui vel fuga ut autem nihil. Non ullam deserunt eaque.",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=80.45833463639185",
            "viewCounts": 3,
            "createdAt": "2019-11-20T06:25:42.924Z",
            "updatedAt": "2019-12-06T09:07:06.687Z",
            "CategoryId": 4,
            "Category": {
                "id": 4,
                "name": "墨西哥料理",
                "createdAt": "2019-11-20T06:25:42.917Z",
                "updatedAt": "2019-11-20T06:25:42.917Z"
            }
        },
        {
            "id": 16,
            "name": "Aliyah Schaden V",
            "tel": "1-881-809-6051",
            "address": "747 Carter Roads",
            "opening_hours": "08:00",
            "description": "Ducimus laboriosam earum. Occaecati placeat ab perferendis consequatur pariatur deleniti eum quia consequatur. Quo eum fuga dolorem sed vel inventore. Rerum sed corrupti sunt dolor sed laborum dolor accusamus modi.",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=73.5077723721848",
            "viewCounts": 1,
            "createdAt": "2019-11-20T06:25:42.926Z",
            "updatedAt": "2019-12-04T07:49:54.805Z",
            "CategoryId": 4,
            "Category": {
                "id": 4,
                "name": "墨西哥料理",
                "createdAt": "2019-11-20T06:25:42.917Z",
                "updatedAt": "2019-11-20T06:25:42.917Z"
            }
        },
        {
            "id": 12,
            "name": "Charley Koelpin",
            "tel": "166-610-8412",
            "address": "63494 Orn Plains",
            "opening_hours": "08:00",
            "description": "Assumenda qui voluptatem. Voluptas occaecati aliquam est cumque ipsum exercitationem totam dolor. Sunt autem natus est velit cupiditate. Esse deserunt quae tenetur.",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=66.85254991604799",
            "viewCounts": 5,
            "createdAt": "2019-11-20T06:25:42.924Z",
            "updatedAt": "2019-12-06T09:43:12.198Z",
            "CategoryId": 5,
            "Category": {
                "id": 5,
                "name": "素食料理",
                "createdAt": "2019-11-20T06:25:42.917Z",
                "updatedAt": "2019-11-20T06:25:42.917Z"
            }
        },
        {
            "id": 15,
            "name": "Vinnie Beier",
            "tel": "(147) 768-4416 x06977",
            "address": "91390 VonRueden Ferry",
            "opening_hours": "08:00",
            "description": "Deserunt molestiae deleniti in asperiores dolorum asperiores qui consequatur et. Et id est asperiores distinctio sit voluptate sint dolores. Dicta et consequuntur. Dolores tenetur et illo animi eligendi eum tempora. Ipsum repellat autem tempora ut nemo id vero qui.\n \rQuo occaecati eaque. Sint sequi rerum incidunt ipsa. Fuga vel et. Ab ipsam deserunt rem et earum numquam. Quae fugit harum officiis quo. Asperiores fugit illum sed aut possimus vitae.\n \rUt delectus soluta qui. Provident aut quibusdam. Et omnis voluptatum voluptatem totam rerum at quaerat.",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=8.851357212949207",
            "viewCounts": 2,
            "createdAt": "2019-11-20T06:25:42.925Z",
            "updatedAt": "2019-12-04T08:16:39.200Z",
            "CategoryId": 5,
            "Category": {
                "id": 5,
                "name": "素食料理",
                "createdAt": "2019-11-20T06:25:42.917Z",
                "updatedAt": "2019-11-20T06:25:42.917Z"
            }
        },
        {
            "id": 17,
            "name": "Abdiel Denesik",
            "tel": "1-462-228-0055",
            "address": "3668 Vandervort Mountain",
            "opening_hours": "08:00",
            "description": "odit eum quia",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=97.04595774715901",
            "viewCounts": null,
            "createdAt": "2019-11-20T06:25:42.926Z",
            "updatedAt": "2019-11-20T06:25:42.926Z",
            "CategoryId": 2,
            "Category": {
                "id": 2,
                "name": "日本料理",
                "createdAt": "2019-11-20T06:25:42.917Z",
                "updatedAt": "2019-11-20T06:25:42.917Z"
            }
        },
        {
            "id": 18,
            "name": "Miss Judd Satterfield",
            "tel": "(670) 554-5755 x689",
            "address": "6262 Pfannerstill Radial",
            "opening_hours": "08:00",
            "description": "omnis quisquam possimus",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=36.49343044536353",
            "viewCounts": null,
            "createdAt": "2019-11-20T06:25:42.926Z",
            "updatedAt": "2019-11-20T06:25:42.926Z",
            "CategoryId": 2,
            "Category": {
                "id": 2,
                "name": "日本料理",
                "createdAt": "2019-11-20T06:25:42.917Z",
                "updatedAt": "2019-11-20T06:25:42.917Z"
            }
        },
        {
            "id": 14,
            "name": "Rahul Kilback",
            "tel": "1-573-027-3190",
            "address": "13538 Lula Roads",
            "opening_hours": "08:00",
            "description": "Ut ea repellat cumque illo sint. Possimus a magni iusto molestiae explicabo. Impedit ea magni vel quaerat hic exercitationem nemo alias dolor. Eum rem harum soluta voluptas consequatur.\n \rSaepe ut deserunt eaque magni nulla omnis aut aut. Vel voluptate enim aut autem incidunt. Sit expedita alias quis pariatur sit. Itaque et dolorem veniam sed reprehenderit aut. Nisi vero exercitationem quibusdam sed vitae iure modi et porro.\n \rRerum inventore suscipit sequi id optio nemo deserunt tempore. Ab blanditiis libero sed ut eum. Sit doloribus veritatis porro dolor impedit excepturi iste voluptatem. Consequatur iste dolore vero.",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=66.19683181847653",
            "viewCounts": 23,
            "createdAt": "2019-11-20T06:25:42.925Z",
            "updatedAt": "2019-12-05T08:27:16.169Z",
            "CategoryId": 5,
            "Category": {
                "id": 5,
                "name": "素食料理",
                "createdAt": "2019-11-20T06:25:42.917Z",
                "updatedAt": "2019-11-20T06:25:42.917Z"
            }
        },
        {
            "id": 21,
            "name": "Daija Kunze",
            "tel": "384-909-3213",
            "address": "868 Bayer Mountains",
            "opening_hours": "08:00",
            "description": "Reprehenderit aliquam dolor dicta consequatur ad neque sunt sunt consequuntur. Non fugit officiis a. Possimus accusamus eaque. Dolorem dolores blanditiis voluptates omnis at voluptatem cum voluptatem. Accusantium illum quas vel.",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=56.179907577974795",
            "viewCounts": null,
            "createdAt": "2019-11-20T06:25:42.927Z",
            "updatedAt": "2019-11-20T06:25:42.927Z",
            "CategoryId": 3,
            "Category": {
                "id": 3,
                "name": "義大利料理",
                "createdAt": "2019-11-20T06:25:42.917Z",
                "updatedAt": "2019-11-20T06:25:42.917Z"
            }
        },
        {
            "id": 22,
            "name": "Joanie Larkin",
            "tel": "436.858.3661 x76732",
            "address": "732 Reichert Underpass",
            "opening_hours": "08:00",
            "description": "Officia quidem voluptatem dignissimos repellat provident consequatur.\nVoluptatem modi odio cumque impedit tenetur cum.",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=10.952554365224177",
            "viewCounts": null,
            "createdAt": "2019-11-20T06:25:42.927Z",
            "updatedAt": "2019-11-20T06:25:42.927Z",
            "CategoryId": 1,
            "Category": {
                "id": 1,
                "name": "中式料理",
                "createdAt": "2019-11-20T06:25:42.917Z",
                "updatedAt": "2019-11-20T06:25:42.917Z"
            }
        },
        {
            "id": 23,
            "name": "Emma Reilly",
            "tel": "819-368-8831 x58482",
            "address": "9334 Carroll Fork",
            "opening_hours": "08:00",
            "description": "adipisci",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=56.11589558082037",
            "viewCounts": null,
            "createdAt": "2019-11-20T06:25:42.927Z",
            "updatedAt": "2019-11-20T06:25:42.927Z",
            "CategoryId": 4,
            "Category": {
                "id": 4,
                "name": "墨西哥料理",
                "createdAt": "2019-11-20T06:25:42.917Z",
                "updatedAt": "2019-11-20T06:25:42.917Z"
            }
        },
        {
            "id": 51,
            "name": "發大財0121牛排",
            "tel": "12345678",
            "address": "高雄市",
            "opening_hours": "00:00",
            "description": "123",
            "image": "https://i.imgur.com/CaeM9rg.jpg",
            "viewCounts": null,
            "createdAt": "2019-11-22T06:50:58.472Z",
            "updatedAt": "2019-11-22T06:50:58.472Z",
            "CategoryId": 5,
            "Category": {
                "id": 5,
                "name": "素食料理",
                "createdAt": "2019-11-20T06:25:42.917Z",
                "updatedAt": "2019-11-20T06:25:42.917Z"
            }
        },
        {
            "id": 52,
            "name": "發大財0121牛排",
            "tel": "12345678",
            "address": "高雄市",
            "opening_hours": "00:00",
            "description": "123",
            "image": "https://i.imgur.com/VwnnLF9.jpg",
            "viewCounts": null,
            "createdAt": "2019-11-22T06:51:00.683Z",
            "updatedAt": "2019-11-22T06:51:00.683Z",
            "CategoryId": 5,
            "Category": {
                "id": 5,
                "name": "素食料理",
                "createdAt": "2019-11-20T06:25:42.917Z",
                "updatedAt": "2019-11-20T06:25:42.917Z"
            }
        },
        {
            "id": 11,
            "name": "Brayan Fahey",
            "tel": "1-254-729-2217 x00004",
            "address": "543 Powlowski Brooks",
            "opening_hours": "08:00",
            "description": "eius ipsam molestiae",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=26.664359906345346",
            "viewCounts": 8,
            "createdAt": "2019-11-20T06:25:42.924Z",
            "updatedAt": "2019-12-05T07:29:57.095Z",
            "CategoryId": 3,
            "Category": {
                "id": 3,
                "name": "義大利料理",
                "createdAt": "2019-11-20T06:25:42.917Z",
                "updatedAt": "2019-11-20T06:25:42.917Z"
            }
        },
        {
            "id": 24,
            "name": "Tracy Kling",
            "tel": "602.671.9831",
            "address": "4776 Hazle Freeway",
            "opening_hours": "08:00",
            "description": "Libero fugit omnis inventore quasi maxime magnam autem.\nCupiditate ratione possimus et iure.\nVoluptatem voluptatem sint quasi eos dolores non eum voluptates eveniet.\nDolores accusantium magnam consequatur temporibus molestias.\nSequi corrupti est sed fuga distinctio corporis harum non iure.",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=28.34397872340968",
            "viewCounts": null,
            "createdAt": "2019-11-20T06:25:42.927Z",
            "updatedAt": "2019-11-20T06:25:42.927Z",
            "CategoryId": 2,
            "Category": {
                "id": 2,
                "name": "日本料理",
                "createdAt": "2019-11-20T06:25:42.917Z",
                "updatedAt": "2019-11-20T06:25:42.917Z"
            }
        },
        {
            "id": 25,
            "name": "Webster Dietrich",
            "tel": "1-653-478-8294 x018",
            "address": "229 Predovic Lodge",
            "opening_hours": "08:00",
            "description": "Qui consequuntur est quo.",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=37.893799230224204",
            "viewCounts": null,
            "createdAt": "2019-11-20T06:25:42.928Z",
            "updatedAt": "2019-11-20T06:25:42.928Z",
            "CategoryId": 3,
            "Category": {
                "id": 3,
                "name": "義大利料理",
                "createdAt": "2019-11-20T06:25:42.917Z",
                "updatedAt": "2019-11-20T06:25:42.917Z"
            }
        },
        {
            "id": 26,
            "name": "Dayna Roberts",
            "tel": "759-389-2695",
            "address": "9850 Kaia Circle",
            "opening_hours": "08:00",
            "description": "ipsum",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=3.7178880115385837",
            "viewCounts": null,
            "createdAt": "2019-11-20T06:25:42.928Z",
            "updatedAt": "2019-11-20T06:25:42.928Z",
            "CategoryId": 2,
            "Category": {
                "id": 2,
                "name": "日本料理",
                "createdAt": "2019-11-20T06:25:42.917Z",
                "updatedAt": "2019-11-20T06:25:42.917Z"
            }
        },
        {
            "id": 28,
            "name": "Earl Kohler",
            "tel": "234.268.7177 x25276",
            "address": "021 Moore Motorway",
            "opening_hours": "08:00",
            "description": "qui qui consequatur",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=85.94426264459874",
            "viewCounts": null,
            "createdAt": "2019-11-20T06:25:42.928Z",
            "updatedAt": "2019-11-20T06:25:42.928Z",
            "CategoryId": 2,
            "Category": {
                "id": 2,
                "name": "日本料理",
                "createdAt": "2019-11-20T06:25:42.917Z",
                "updatedAt": "2019-11-20T06:25:42.917Z"
            }
        },
        {
            "id": 29,
            "name": "Mrs. Deonte Schmeler",
            "tel": "694-889-1934",
            "address": "4833 Ila Causeway",
            "opening_hours": "08:00",
            "description": "Ut officia pariatur quam perferendis quia nihil expedita.\nSunt quis voluptatibus cupiditate est quis provident quae ipsa.\nIste at consequatur optio qui alias iste consequatur velit.\nEt nesciunt voluptas.\nEt id velit.",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=33.27090568354101",
            "viewCounts": null,
            "createdAt": "2019-11-20T06:25:42.928Z",
            "updatedAt": "2019-11-20T06:25:42.928Z",
            "CategoryId": 4,
            "Category": {
                "id": 4,
                "name": "墨西哥料理",
                "createdAt": "2019-11-20T06:25:42.917Z",
                "updatedAt": "2019-11-20T06:25:42.917Z"
            }
        },
        {
            "id": 31,
            "name": "Ofelia Kshlerin II",
            "tel": "1-020-848-2670 x403",
            "address": "385 Sanford Fords",
            "opening_hours": "08:00",
            "description": "excepturi",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=79.35851334047884",
            "viewCounts": null,
            "createdAt": "2019-11-20T06:25:42.928Z",
            "updatedAt": "2019-11-20T06:25:42.928Z",
            "CategoryId": 3,
            "Category": {
                "id": 3,
                "name": "義大利料理",
                "createdAt": "2019-11-20T06:25:42.917Z",
                "updatedAt": "2019-11-20T06:25:42.917Z"
            }
        },
        {
            "id": 32,
            "name": "Trever Cole",
            "tel": "570-434-5010",
            "address": "9157 Bernier Parks",
            "opening_hours": "08:00",
            "description": "Molestiae provident quia rerum omnis rerum. Quia adipisci reprehenderit. Nisi voluptatem nisi facere. Voluptatem distinctio ut eos.",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=92.63836618053767",
            "viewCounts": null,
            "createdAt": "2019-11-20T06:25:42.929Z",
            "updatedAt": "2019-11-20T06:25:42.929Z",
            "CategoryId": 5,
            "Category": {
                "id": 5,
                "name": "素食料理",
                "createdAt": "2019-11-20T06:25:42.917Z",
                "updatedAt": "2019-11-20T06:25:42.917Z"
            }
        },
        {
            "id": 33,
            "name": "Sigrid Crist",
            "tel": "1-146-534-9217 x65343",
            "address": "969 Jessica Well",
            "opening_hours": "08:00",
            "description": "aut",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=1.6493076127501727",
            "viewCounts": null,
            "createdAt": "2019-11-20T06:25:42.929Z",
            "updatedAt": "2019-11-20T06:25:42.929Z",
            "CategoryId": 4,
            "Category": {
                "id": 4,
                "name": "墨西哥料理",
                "createdAt": "2019-11-20T06:25:42.917Z",
                "updatedAt": "2019-11-20T06:25:42.917Z"
            }
        },
        {
            "id": 34,
            "name": "Frida Jones",
            "tel": "(605) 542-9140 x08706",
            "address": "5248 Dare Forge",
            "opening_hours": "08:00",
            "description": "quidem quis quia",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=48.33317711631233",
            "viewCounts": null,
            "createdAt": "2019-11-20T06:25:42.929Z",
            "updatedAt": "2019-11-20T06:25:42.929Z",
            "CategoryId": 1,
            "Category": {
                "id": 1,
                "name": "中式料理",
                "createdAt": "2019-11-20T06:25:42.917Z",
                "updatedAt": "2019-11-20T06:25:42.917Z"
            }
        },
        {
            "id": 35,
            "name": "Dr. Tanya Stokes",
            "tel": "456-794-6389 x25673",
            "address": "719 Baron Rest",
            "opening_hours": "08:00",
            "description": "Veritatis deserunt et harum voluptate minima quis rerum esse. Itaque voluptatem aut voluptas unde aut quas alias. Et laborum doloremque quam veniam.",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=39.76113955456408",
            "viewCounts": null,
            "createdAt": "2019-11-20T06:25:42.929Z",
            "updatedAt": "2019-11-20T06:25:42.929Z",
            "CategoryId": 5,
            "Category": {
                "id": 5,
                "name": "素食料理",
                "createdAt": "2019-11-20T06:25:42.917Z",
                "updatedAt": "2019-11-20T06:25:42.917Z"
            }
        },
        {
            "id": 36,
            "name": "Kale Nicolas",
            "tel": "1-129-966-2808",
            "address": "54065 Austin Plains",
            "opening_hours": "08:00",
            "description": "Est et id saepe tenetur et veritatis et. Qui similique illum labore vel impedit. Molestiae alias eligendi. Neque aut natus optio quis sit dolorem reprehenderit et aut. Rerum quis nobis eum quaerat doloribus occaecati. Facilis voluptatem ut ipsam veniam aut.\n \rEt fugit enim qui pariatur fugit non impedit beatae non. Eos atque occaecati distinctio at. Voluptates iste mollitia omnis. Assumenda quia maiores quo minus natus. Quos est non non quidem. Ipsum animi nihil velit ut consequatur nam enim.\n \rConsequatur eligendi alias quis fugit quo dolores numquam dolorem ut. Ex est quasi sint ut. Pariatur quasi suscipit. Asperiores cupiditate animi sed amet eveniet est in voluptas sed. Tenetur id magni ipsum iure minima odit.",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=11.056442083543061",
            "viewCounts": null,
            "createdAt": "2019-11-20T06:25:42.929Z",
            "updatedAt": "2019-11-20T06:25:42.929Z",
            "CategoryId": 3,
            "Category": {
                "id": 3,
                "name": "義大利料理",
                "createdAt": "2019-11-20T06:25:42.917Z",
                "updatedAt": "2019-11-20T06:25:42.917Z"
            }
        },
        {
            "id": 53,
            "name": "素食",
            "tel": "12345678",
            "address": "wqeqwe",
            "opening_hours": "01:59",
            "description": "qweqe",
            "image": null,
            "viewCounts": null,
            "createdAt": "2019-11-22T06:51:45.306Z",
            "updatedAt": "2019-11-22T06:51:45.306Z",
            "CategoryId": 6,
            "Category": {
                "id": 6,
                "name": "美式料理",
                "createdAt": "2019-11-20T06:25:42.917Z",
                "updatedAt": "2019-11-20T06:25:42.917Z"
            }
        },
        {
            "id": 38,
            "name": "Arlo Kuhn",
            "tel": "149-987-1043",
            "address": "8225 Rahul Ridges",
            "opening_hours": "08:00",
            "description": "Nobis repudiandae veniam ipsa adipisci ut delectus temporibus tenetur. Sed beatae quia incidunt eum. Est nulla temporibus quo voluptatibus inventore vel tempora. Facere et non placeat nam architecto dolorum et ipsa officiis.\n \rQuia voluptatibus quia. Magni aut est eligendi sapiente incidunt possimus non. Saepe quibusdam est molestiae quasi. Optio sapiente qui aut a. Dolor quis dolores reprehenderit nihil quia. Ex animi sapiente qui sed officia non omnis aliquam maiores.\n \rDolorum architecto saepe ducimus. Earum non iste modi ad unde et aut quo mollitia. Doloribus temporibus harum ut perferendis deserunt vero sed. Sunt qui perspiciatis. Vel ut eius dicta eaque rerum.",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=52.44227001274191",
            "viewCounts": null,
            "createdAt": "2019-11-20T06:25:42.930Z",
            "updatedAt": "2019-11-20T06:25:42.930Z",
            "CategoryId": 2,
            "Category": {
                "id": 2,
                "name": "日本料理",
                "createdAt": "2019-11-20T06:25:42.917Z",
                "updatedAt": "2019-11-20T06:25:42.917Z"
            }
        },
        {
            "id": 39,
            "name": "Kirk Rosenbaum",
            "tel": "(819) 758-2128 x85915",
            "address": "707 Conroy Trace",
            "opening_hours": "08:00",
            "description": "Ratione rem aut qui et soluta sint qui officiis.",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=93.61331373873116",
            "viewCounts": null,
            "createdAt": "2019-11-20T06:25:42.931Z",
            "updatedAt": "2019-11-20T06:25:42.931Z",
            "CategoryId": 5,
            "Category": {
                "id": 5,
                "name": "素食料理",
                "createdAt": "2019-11-20T06:25:42.917Z",
                "updatedAt": "2019-11-20T06:25:42.917Z"
            }
        },
        {
            "id": 40,
            "name": "Mr. Brennon Jakubowski",
            "tel": "1-098-504-4116",
            "address": "668 Destin Ferry",
            "opening_hours": "08:00",
            "description": "Dignissimos consectetur itaque eius quasi tempore quibusdam labore et id. Quia odit quis voluptatem nemo quo quisquam eum.",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=54.59595296130533",
            "viewCounts": null,
            "createdAt": "2019-11-20T06:25:42.931Z",
            "updatedAt": "2019-11-20T06:25:42.931Z",
            "CategoryId": 5,
            "Category": {
                "id": 5,
                "name": "素食料理",
                "createdAt": "2019-11-20T06:25:42.917Z",
                "updatedAt": "2019-11-20T06:25:42.917Z"
            }
        },
        {
            "id": 42,
            "name": "Derek Shields MD",
            "tel": "158-995-6038",
            "address": "3403 Ortiz Inlet",
            "opening_hours": "08:00",
            "description": "Velit suscipit soluta. Sint deleniti magni quaerat voluptatibus dignissimos hic quia. Pariatur voluptas recusandae impedit voluptatem velit. Deserunt qui odio est vel quisquam et iste quo.",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=49.09923471680735",
            "viewCounts": null,
            "createdAt": "2019-11-20T06:25:42.931Z",
            "updatedAt": "2019-11-20T06:25:42.931Z",
            "CategoryId": 2,
            "Category": {
                "id": 2,
                "name": "日本料理",
                "createdAt": "2019-11-20T06:25:42.917Z",
                "updatedAt": "2019-11-20T06:25:42.917Z"
            }
        },
        {
            "id": 43,
            "name": "Dr. Magdalen Davis",
            "tel": "(424) 983-9590 x24645",
            "address": "45584 Claudia Green",
            "opening_hours": "08:00",
            "description": "Rerum atque placeat non. Sint esse maiores iste commodi magnam modi laborum. Distinctio ut aliquid sed sapiente et quo commodi odio enim. Sit quidem nobis sunt tempora perspiciatis nemo voluptatem nesciunt. Qui est voluptas cupiditate tempora dolores laudantium quis quia quis. Rem autem temporibus fugit deserunt.\n \rQuam placeat illum nihil sunt expedita nisi reprehenderit. Eaque dolor optio iure qui aut non. Adipisci corrupti et ullam eius explicabo incidunt. Nesciunt id cum sapiente voluptates odit eius laborum. Necessitatibus at non non. Quisquam voluptas eveniet eveniet praesentium.\n \rEsse doloribus iure quia mollitia velit ipsa tenetur deleniti. Consequatur incidunt blanditiis quidem et. Id autem iste voluptatum sint deserunt et. Quod velit a. Pariatur culpa autem aspernatur dignissimos cum quos animi. Qui eligendi voluptatem.",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=11.101761113142405",
            "viewCounts": null,
            "createdAt": "2019-11-20T06:25:42.932Z",
            "updatedAt": "2019-11-20T06:25:42.932Z",
            "CategoryId": 3,
            "Category": {
                "id": 3,
                "name": "義大利料理",
                "createdAt": "2019-11-20T06:25:42.917Z",
                "updatedAt": "2019-11-20T06:25:42.917Z"
            }
        },
        {
            "id": 30,
            "name": "Vince Kassulke",
            "tel": "(302) 097-9821 x641",
            "address": "82815 Vivianne Inlet",
            "opening_hours": "08:00",
            "description": "nihil",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=60.72153192006735",
            "viewCounts": 111,
            "createdAt": "2019-11-20T06:25:42.928Z",
            "updatedAt": "2019-11-20T07:21:32.094Z",
            "CategoryId": 1,
            "Category": {
                "id": 1,
                "name": "中式料理",
                "createdAt": "2019-11-20T06:25:42.917Z",
                "updatedAt": "2019-11-20T06:25:42.917Z"
            }
        },
        {
            "id": 94,
            "name": "1111111111111111111111111111111111",
            "tel": "",
            "address": "",
            "opening_hours": "",
            "description": "",
            "image": "https://i.imgur.com/73iE9ju.jpg",
            "viewCounts": null,
            "createdAt": "2019-12-05T08:55:11.174Z",
            "updatedAt": "2019-12-05T08:55:11.174Z",
            "CategoryId": 4,
            "Category": {
                "id": 4,
                "name": "墨西哥料理",
                "createdAt": "2019-11-20T06:25:42.917Z",
                "updatedAt": "2019-11-20T06:25:42.917Z"
            }
        },
        {
            "id": 44,
            "name": "Citlalli Grady",
            "tel": "274-150-1828 x8337",
            "address": "054 Ewell Route",
            "opening_hours": "08:00",
            "description": "Molestiae cum sit sunt delectus.",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=15.185966372644089",
            "viewCounts": null,
            "createdAt": "2019-11-20T06:25:42.932Z",
            "updatedAt": "2019-11-20T06:25:42.932Z",
            "CategoryId": 4,
            "Category": {
                "id": 4,
                "name": "墨西哥料理",
                "createdAt": "2019-11-20T06:25:42.917Z",
                "updatedAt": "2019-11-20T06:25:42.917Z"
            }
        },
        {
            "id": 45,
            "name": "Gay Hintz",
            "tel": "(549) 902-6622",
            "address": "16657 Lane Rapid",
            "opening_hours": "08:00",
            "description": "est",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=53.54156594068704",
            "viewCounts": null,
            "createdAt": "2019-11-20T06:25:42.932Z",
            "updatedAt": "2019-11-20T06:25:42.932Z",
            "CategoryId": 4,
            "Category": {
                "id": 4,
                "name": "墨西哥料理",
                "createdAt": "2019-11-20T06:25:42.917Z",
                "updatedAt": "2019-11-20T06:25:42.917Z"
            }
        },
        {
            "id": 46,
            "name": "Bernadette Sawayn",
            "tel": "1-773-750-7162 x141",
            "address": "309 Hackett Valley",
            "opening_hours": "08:00",
            "description": "temporibus",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=47.44279873720891",
            "viewCounts": null,
            "createdAt": "2019-11-20T06:25:42.932Z",
            "updatedAt": "2019-11-20T06:25:42.932Z",
            "CategoryId": 4,
            "Category": {
                "id": 4,
                "name": "墨西哥料理",
                "createdAt": "2019-11-20T06:25:42.917Z",
                "updatedAt": "2019-11-20T06:25:42.917Z"
            }
        },
        {
            "id": 47,
            "name": "Rafael Murray",
            "tel": "415.165.4928",
            "address": "6067 Nader Square",
            "opening_hours": "08:00",
            "description": "Sint explicabo dolor. Est libero saepe ullam hic deleniti. Consequatur harum in ducimus nemo eius veniam qui.\n \rRatione adipisci maiores quia voluptas nulla. Nulla iusto ut omnis ex ipsa unde. Et assumenda non vero similique facere.\n \rIn reiciendis accusamus maiores quis facere dignissimos et. Ut numquam officia earum et quas. Molestiae eligendi commodi ea ut. Qui et et eos atque iusto excepturi esse consectetur. Eum quasi reiciendis voluptas id earum eum nobis voluptatem enim.",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=75.07568802989297",
            "viewCounts": null,
            "createdAt": "2019-11-20T06:25:42.933Z",
            "updatedAt": "2019-11-20T06:25:42.933Z",
            "CategoryId": 2,
            "Category": {
                "id": 2,
                "name": "日本料理",
                "createdAt": "2019-11-20T06:25:42.917Z",
                "updatedAt": "2019-11-20T06:25:42.917Z"
            }
        },
        {
            "id": 48,
            "name": "Rosie Mayer Jr.",
            "tel": "1-686-584-6537 x40191",
            "address": "46878 Buckridge Passage",
            "opening_hours": "08:00",
            "description": "Ad dignissimos praesentium. Aut vel neque nobis aut. Molestias quasi cumque aut ratione et. Facere voluptatem sapiente. Et praesentium sed ex sunt. Est nihil rem facilis.",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=84.39306160663618",
            "viewCounts": null,
            "createdAt": "2019-11-20T06:25:42.934Z",
            "updatedAt": "2019-11-20T06:25:42.934Z",
            "CategoryId": 5,
            "Category": {
                "id": 5,
                "name": "素食料理",
                "createdAt": "2019-11-20T06:25:42.917Z",
                "updatedAt": "2019-11-20T06:25:42.917Z"
            }
        },
        {
            "id": 49,
            "name": "Dejah Kertzmann",
            "tel": "(430) 181-8381",
            "address": "25596 Haag Creek",
            "opening_hours": "08:00",
            "description": "Quis excepturi similique porro omnis quia sit a quos molestiae. Quia et aut quidem consequatur eum quisquam laboriosam quam. Voluptatibus dolore reprehenderit facere.\n \rMolestiae nam labore similique provident assumenda magni expedita. Quasi assumenda nemo odit unde debitis. Veritatis veritatis alias. Enim libero mollitia voluptatem laudantium explicabo qui.\n \rQuam commodi atque debitis amet voluptas saepe vero maxime et. Est voluptates facilis sit maiores voluptates voluptas. Ut voluptatem in rem eum voluptate culpa.",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=86.69959548084738",
            "viewCounts": null,
            "createdAt": "2019-11-20T06:25:42.934Z",
            "updatedAt": "2019-11-20T06:25:42.934Z",
            "CategoryId": 3,
            "Category": {
                "id": 3,
                "name": "義大利料理",
                "createdAt": "2019-11-20T06:25:42.917Z",
                "updatedAt": "2019-11-20T06:25:42.917Z"
            }
        },
        {
            "id": 50,
            "name": "Jolie Hackett",
            "tel": "542.600.9620",
            "address": "2439 Tiffany Heights",
            "opening_hours": "08:00",
            "description": "magni ut voluptas",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=27.32287991372693",
            "viewCounts": null,
            "createdAt": "2019-11-20T06:25:42.934Z",
            "updatedAt": "2019-11-20T06:25:42.934Z",
            "CategoryId": 2,
            "Category": {
                "id": 2,
                "name": "日本料理",
                "createdAt": "2019-11-20T06:25:42.917Z",
                "updatedAt": "2019-11-20T06:25:42.917Z"
            }
        },
        {
            "id": 54,
            "name": "retetret",
            "tel": "retertrt",
            "address": "ertretre",
            "opening_hours": "01:00",
            "description": "ertetrete",
            "image": null,
            "viewCounts": null,
            "createdAt": "2019-11-22T06:57:24.615Z",
            "updatedAt": "2019-11-22T06:57:24.615Z",
            "CategoryId": 2,
            "Category": {
                "id": 2,
                "name": "日本料理",
                "createdAt": "2019-11-20T06:25:42.917Z",
                "updatedAt": "2019-11-20T06:25:42.917Z"
            }
        },
        {
            "id": 4,
            "name": "Icie Bogisich I",
            "tel": "018-616-9160",
            "address": "89802 Parker Crossing",
            "opening_hours": "08:00",
            "description": "Molestiae enim architecto accusantium repellat iste.",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=43.567974806132945",
            "viewCounts": 35,
            "createdAt": "2019-11-20T06:25:42.923Z",
            "updatedAt": "2019-11-23T13:22:14.894Z",
            "CategoryId": 5,
            "Category": {
                "id": 5,
                "name": "素食料理",
                "createdAt": "2019-11-20T06:25:42.917Z",
                "updatedAt": "2019-11-20T06:25:42.917Z"
            }
        },
        {
            "id": 37,
            "name": "Damaris Johnston",
            "tel": "1-576-914-4171 x8326",
            "address": "71940 Effertz Throughway",
            "opening_hours": "08:00",
            "description": "Fuga recusandae ut aut dolor sequi reiciendis. Laboriosam est ullam unde omnis laboriosam atque harum. Perferendis nihil magni voluptatem explicabo voluptatem voluptates vel hic incidunt. Eaque doloribus tempore cumque doloribus aperiam. Repellat sint dolorem ut. Ipsum quisquam reprehenderit quod tenetur expedita a aspernatur.",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=14.803006892375548",
            "viewCounts": 12,
            "createdAt": "2019-11-20T06:25:42.930Z",
            "updatedAt": "2019-11-20T06:58:40.142Z",
            "CategoryId": 1,
            "Category": {
                "id": 1,
                "name": "中式料理",
                "createdAt": "2019-11-20T06:25:42.917Z",
                "updatedAt": "2019-11-20T06:25:42.917Z"
            }
        },
        {
            "id": 6,
            "name": "Liliane Dibbert",
            "tel": "1-827-478-9971 x690",
            "address": "2762 Devon Run",
            "opening_hours": "08:00",
            "description": "facilis",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=98.6709769179636",
            "viewCounts": 22,
            "createdAt": "2019-11-20T06:25:42.923Z",
            "updatedAt": "2019-11-23T14:30:18.715Z",
            "CategoryId": 2,
            "Category": {
                "id": 2,
                "name": "日本料理",
                "createdAt": "2019-11-20T06:25:42.917Z",
                "updatedAt": "2019-11-20T06:25:42.917Z"
            }
        },
        {
            "id": 95,
            "name": "rghdfhfdh",
            "tel": "",
            "address": "",
            "opening_hours": "",
            "description": "",
            "image": null,
            "viewCounts": null,
            "createdAt": "2019-12-05T08:55:54.669Z",
            "updatedAt": "2019-12-05T08:55:54.669Z",
            "CategoryId": 1,
            "Category": {
                "id": 1,
                "name": "中式料理",
                "createdAt": "2019-11-20T06:25:42.917Z",
                "updatedAt": "2019-11-20T06:25:42.917Z"
            }
        },
        {
            "id": 1,
            "name": "August Gerlach Da LA1234",
            "tel": "02-8888-0000",
            "address": "01313 ketlch deive",
            "opening_hours": "08:00",
            "description": "dsfsafdsadfasasdfasdf",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=22.148585495422335",
            "viewCounts": 2,
            "createdAt": "2019-11-20T06:25:42.921Z",
            "updatedAt": "2019-12-05T08:36:44.586Z",
            "CategoryId": 2,
            "Category": {
                "id": 2,
                "name": "日本料理",
                "createdAt": "2019-11-20T06:25:42.917Z",
                "updatedAt": "2019-11-20T06:25:42.917Z"
            }
        },
        {
            "id": 96,
            "name": "dfgdfhgdfh xfghfgxh",
            "tel": "xfgxgfbxfb",
            "address": "dzfbdfzbzfbzs",
            "opening_hours": "12:59",
            "description": "AFAScsddggrhHFJSGFJFDGsdF",
            "image": "https://i.imgur.com/oOHdiBw.jpg",
            "viewCounts": null,
            "createdAt": "2019-12-05T09:11:11.111Z",
            "updatedAt": "2019-12-05T09:11:11.111Z",
            "CategoryId": 2,
            "Category": {
                "id": 2,
                "name": "日本料理",
                "createdAt": "2019-11-20T06:25:42.917Z",
                "updatedAt": "2019-11-20T06:25:42.917Z"
            }
        },
        {
            "id": 5,
            "name": "Abagail Dietrich",
            "tel": "638.352.6637 x5805",
            "address": "011 Glenna Camp",
            "opening_hours": "08:00",
            "description": "Cumque quasi nihil. Dicta accusantium officiis assumenda ut eaque qui ullam ut. Iure in qui adipisci.",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=60.98596097768254",
            "viewCounts": 37,
            "createdAt": "2019-11-20T06:25:42.923Z",
            "updatedAt": "2019-11-23T14:18:04.644Z",
            "CategoryId": 1,
            "Category": {
                "id": 1,
                "name": "中式料理",
                "createdAt": "2019-11-20T06:25:42.917Z",
                "updatedAt": "2019-11-20T06:25:42.917Z"
            }
        },
        {
            "id": 7,
            "name": "Kari Sporer",
            "tel": "584-434-6976",
            "address": "941 Jakubowski Stream",
            "opening_hours": "08:00",
            "description": "sunt dolorem voluptate",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=80.77439621389972",
            "viewCounts": 1,
            "createdAt": "2019-11-20T06:25:42.923Z",
            "updatedAt": "2019-11-23T14:30:22.808Z",
            "CategoryId": 1,
            "Category": {
                "id": 1,
                "name": "中式料理",
                "createdAt": "2019-11-20T06:25:42.917Z",
                "updatedAt": "2019-11-20T06:25:42.917Z"
            }
        },
        {
            "id": 8,
            "name": "Bradley Kiehn",
            "tel": "453.101.0729",
            "address": "0173 Wilfredo Shores",
            "opening_hours": "08:00",
            "description": "qui",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=83.09110863923424",
            "viewCounts": 1,
            "createdAt": "2019-11-20T06:25:42.923Z",
            "updatedAt": "2019-11-23T14:30:28.959Z",
            "CategoryId": 4,
            "Category": {
                "id": 4,
                "name": "墨西哥料理",
                "createdAt": "2019-11-20T06:25:42.917Z",
                "updatedAt": "2019-11-20T06:25:42.917Z"
            }
        },
        {
            "id": 9,
            "name": "Lambert Weimann",
            "tel": "129.140.6063 ",
            "address": "520 Jaskolski Streets",
            "opening_hours": "08:00",
            "description": "animi",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=6.865111126440082",
            "viewCounts": 1,
            "createdAt": "2019-11-20T06:25:42.923Z",
            "updatedAt": "2019-12-05T08:48:19.484Z",
            "CategoryId": 3,
            "Category": {
                "id": 3,
                "name": "義大利料理",
                "createdAt": "2019-11-20T06:25:42.917Z",
                "updatedAt": "2019-11-20T06:25:42.917Z"
            }
        },
        {
            "id": 97,
            "name": "DGGSXFG",
            "tel": "04534545",
            "address": "XDFGZSDFGZJFZFGAD",
            "opening_hours": "12:59",
            "description": "XDFGBSZFDGZZSDFGsdg",
            "image": "https://i.imgur.com/QOX4UzQ.jpg",
            "viewCounts": null,
            "createdAt": "2019-12-05T09:11:37.628Z",
            "updatedAt": "2019-12-05T09:11:37.628Z",
            "CategoryId": 2,
            "Category": {
                "id": 2,
                "name": "日本料理",
                "createdAt": "2019-11-20T06:25:42.917Z",
                "updatedAt": "2019-11-20T06:25:42.917Z"
            }
        },
        {
            "id": 59,
            "name": "test11",
            "tel": "123",
            "address": "123",
            "opening_hours": "12:59",
            "description": "dd",
            "image": "https://i.imgur.com/J977QZe.jpg",
            "viewCounts": null,
            "createdAt": "2019-11-23T14:37:12.845Z",
            "updatedAt": "2019-11-23T14:37:12.845Z",
            "CategoryId": 3,
            "Category": {
                "id": 3,
                "name": "義大利料理",
                "createdAt": "2019-11-20T06:25:42.917Z",
                "updatedAt": "2019-11-20T06:25:42.917Z"
            }
        },
        {
            "id": 98,
            "name": "DGXDFHXGHXFDH",
            "tel": "02545245",
            "address": "ZSDVFsdVG",
            "opening_hours": "14:02",
            "description": "SDVSDVVSZDVA",
            "image": "https://i.imgur.com/Ra339Yo.jpg",
            "viewCounts": null,
            "createdAt": "2019-12-05T09:12:06.956Z",
            "updatedAt": "2019-12-05T09:12:06.956Z",
            "CategoryId": 1,
            "Category": {
                "id": 1,
                "name": "中式料理",
                "createdAt": "2019-11-20T06:25:42.917Z",
                "updatedAt": "2019-11-20T06:25:42.917Z"
            }
        },
        {
            "id": 60,
            "name": "yyyyy",
            "tel": "",
            "address": "",
            "opening_hours": "",
            "description": "",
            "image": null,
            "viewCounts": null,
            "createdAt": "2019-11-23T14:41:55.478Z",
            "updatedAt": "2019-11-23T14:41:55.478Z",
            "CategoryId": 4,
            "Category": {
                "id": 4,
                "name": "墨西哥料理",
                "createdAt": "2019-11-20T06:25:42.917Z",
                "updatedAt": "2019-11-20T06:25:42.917Z"
            }
        },
        {
            "id": 58,
            "name": "test1 234567",
            "tel": "0988888888",
            "address": "New Taipei City",
            "opening_hours": "",
            "description": "",
            "image": null,
            "viewCounts": null,
            "createdAt": "2019-11-23T07:40:54.401Z",
            "updatedAt": "2019-11-23T11:12:31.210Z",
            "CategoryId": 2,
            "Category": {
                "id": 2,
                "name": "日本料理",
                "createdAt": "2019-11-20T06:25:42.917Z",
                "updatedAt": "2019-11-20T06:25:42.917Z"
            }
        },
        {
            "id": 61,
            "name": "哇啦啦啦",
            "tel": "",
            "address": "",
            "opening_hours": "",
            "description": "",
            "image": null,
            "viewCounts": null,
            "createdAt": "2019-11-23T14:43:17.444Z",
            "updatedAt": "2019-11-23T14:43:17.444Z",
            "CategoryId": 3,
            "Category": {
                "id": 3,
                "name": "義大利料理",
                "createdAt": "2019-11-20T06:25:42.917Z",
                "updatedAt": "2019-11-20T06:25:42.917Z"
            }
        },
        {
            "id": 27,
            "name": "Jean Reichert",
            "tel": "(979) 733-0015",
            "address": "4084 Arvilla Avenue",
            "opening_hours": "08:00",
            "description": "assumenda impedit ut",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=24.17100664017355",
            "viewCounts": 1,
            "createdAt": "2019-11-20T06:25:42.928Z",
            "updatedAt": "2019-11-23T15:40:49.150Z",
            "CategoryId": 5,
            "Category": {
                "id": 5,
                "name": "素食料理",
                "createdAt": "2019-11-20T06:25:42.917Z",
                "updatedAt": "2019-11-20T06:25:42.917Z"
            }
        },
        {
            "id": 2,
            "name": "Kaci Koelpin",
            "tel": "083-343-7765",
            "address": "22769 Johnson Squares",
            "opening_hours": "08:00",
            "description": "Sequi facere sit iusto molestiae dolores quibusdam dolores. Labore deleniti beatae id. Qui quidem quibusdam fugiat qui harum odit voluptas. Beatae asperiores exercitationem quia commodi. Provident magnam sed expedita quibusdam labore aliquid hic.",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=22.957592747300982",
            "viewCounts": 110,
            "createdAt": "2019-11-20T06:25:42.922Z",
            "updatedAt": "2019-11-20T09:00:04.918Z",
            "CategoryId": 4,
            "Category": {
                "id": 4,
                "name": "墨西哥料理",
                "createdAt": "2019-11-20T06:25:42.917Z",
                "updatedAt": "2019-11-20T06:25:42.917Z"
            }
        }
    ]
}

export default {
  data () {
    return {
      restaurants: []
    }
  },
  created () {
    this.fetchRestaurants()
  },
  methods: {
    fetchRestaurants () {
      this.restaurants = dummyData.restaurants
    },
    deleteRestaurant(restaurantId) {
      this.restaurants = this.restaurants.filter(
        restaurant => restaurant.id !== restaurantId
      )
    }
  }
}
</script>