import videos from "../constants/videos";

export default function RestaurantData(option) {
    const Restaurant = (option === 'Island') ? [
        {
            "name": "The manyfair lagos",
            "address": "19b sinari danarijo street, v.I lagos",
            "reservation": false,
            "phoneNumber": "09135576891",
            "openingHours": "2pm to 3am",
            "openingDays": {
                "monday": false,
                "tuesday": false,
                "wednesday": true,
                "thursday": true,
                "friday": true
            },
            "rating": 4,
            "imageUrl": "https://th.bing.com/th/id/OIP.R4LSBmLsYWABjyjRCg2UpgHaDa?rs=1&pid=ImgDetMain",
            "dataType": "restaurant",
            "videoData": {
                "local": [
                    videos.ManyFair
                ],
                "online": [
                    "https://www.instagram.com/zayda.lagos/reel/C6MD4TUCa6Z/"
                ]
            },
            "menu": [
            ],
            'images': '',

            "reservationLink": "https://www.google.com/url?sa=t&source=web&rct=j&opi=89978449&url=https://www.instagram.com/zayda.lagos/&ved=2ahUKEwiv9vHBp9aGAxVbSEEAHTBLClQQFnoECB4QAQ&usg=AOvVaw0G5emEzFb40p3kmnn9uhAR",
            "locationLink": "https://maps.app.goo.gl/AKmv7d72ZP6xQNCZ8",
            'display_images':  [
              require("../../assets/images/display_images/manyfair/0.png"), 
              require("../../assets/images/display_images/manyfair/1.png"),
              require("../../assets/images/display_images/manyfair/2.png")],
            "image":  require("../../assets/images/display_images/manyfair/0.png"),
            
        },
        {
            "name": "Sora lagos",
            "address": "15th floor, trinity towers, chief yesufu abiodun, oniru road, lagos",
            "reservation": true,
            "phoneNumber": "09081900900",
            "openingHours": "12pm",
            "openingDays": {
                "monday": true,
                "tuesday": true,
                "wednesday": true,
                "thursday": true,
                "friday": true,
                "saturday": true,
                "sunday": true
            },
            "rating": 3,
            'display_images':  [require("../../assets/images/display_images/sora/0.png"), require("../../assets/images/display_images/sora/1.png"),require("../../assets/images/display_images/sora/2.png")],
            "image":  require("../../assets/images/display_images/sora/0.png"),
            "dataType": "restaurant",
            "videoData": {
                "local": [
                    videos.Soro
                ],
                "online": [
                    "https://www.instagram.com/zayda.lagos/reel/C6MD4TUCa6Z/"
                ]
            },
            "menu": [
                require("../../assets/images/menu/sora/0.png"),
                require("../../assets/images/menu/sora/1.png"),
                require("../../assets/images/menu/sora/2.png"),
                require("../../assets/images/menu/sora/3.png"),
                require("../../assets/images/menu/sora/4.png"),
                require("../../assets/images/menu/sora/5.png"),
                require("../../assets/images/menu/sora/6.png"),
                require("../../assets/images/menu/sora/7.png"),
                require("../../assets/images/menu/sora/8.png"),
                require("../../assets/images/menu/sora/9.png"),
                require("../../assets/images/menu/sora/10.png"),
                require("../../assets/images/menu/sora/11.png"),
                require("../../assets/images/menu/sora/12.png"),
            ],

            "reservationLink": "https://www.google.com/url?sa=t&source=web&rct=j&opi=89978449&url=https://www.instagram.com/soralagos/&ved=2ahUKEwi4686IyNiGAxVIU0EAHZjyFDoQFnoECEgQAQ&usg=AOvVaw0epmGE2HByNwPJ4Sk9M-hX",
            "locationLink": "https://g.co/kgs/FKYBYjC",
            'display_images':  [
              require("../../assets/images/display_images/sora/0.png"), 
              require("../../assets/images/display_images/sora/1.png"),
              require("../../assets/images/display_images/sora/2.png"),
              require("../../assets/images/display_images/sora/3.png"),
              require("../../assets/images/display_images/sora/4.png"),
            ],
            "image":  require("../../assets/images/display_images/sora/0.png"),
        },
        {
            "name": "Zayda lagos",
            "address": "1, chief collins uchidiuno street, lekki phase 1, lagos",
            "reservation": true,
            "phoneNumber": "09080700007",
            "openingHours": "12pm till late",
            "openingDays": {
                "monday": true,
                "tuesday": true,
                "wednesday": true,
                "thursday": true,
                "friday": true,
                "saturday": true,
                "sunday": true
            },
            "rating": 5,
            "videoData": {
                "local": [
                    videos.ZadyaLagos
                ],
                "online": [
                    "https://www.instagram.com/zayda.lagos/reel/C6MD4TUCa6Z/"
                ]
            },
            "menu": [
                require("../../assets/images/menu/zanya/0.png"),
                require("../../assets/images/menu/zanya/1.png"),
                require("../../assets/images/menu/zanya/2.png"),
                require("../../assets/images/menu/zanya/3.png"),
                require("../../assets/images/menu/zanya/4.png"),
                require("../../assets/images/menu/zanya/5.png"),
                require("../../assets/images/menu/zanya/6.png"),
                require("../../assets/images/menu/zanya/7.png"),
                require("../../assets/images/menu/zanya/8.png"),
                require("../../assets/images/menu/zanya/9.png"),
                require("../../assets/images/menu/zanya/10.png"),

            ],

            "reservationLink": "https://www.google.com/url?sa=t&source=web&rct=j&opi=89978449&url=https://www.instagram.com/zayda.lagos/&ved=2ahUKEwiv9vHBp9aGAxVbSEEAHTBLClQQFnoECB4QAQ&usg=AOvVaw0G5emEzFb40p3kmnn9uhAR",
            "locationLink": "https://maps.app.goo.gl/AKmv7d72ZP6xQNCZ8",
            'display_images':  [
              require("../../assets/images/display_images/zayda/0.png"), 
              require("../../assets/images/display_images/zayda/1.png"),
              require("../../assets/images/display_images/zayda/2.png"),
              require("../../assets/images/display_images/zayda/3.png"),
              require("../../assets/images/display_images/zayda/4.png"),
            ],
            "image":  require("../../assets/images/display_images/zayda/0.png"),
        },
        {
            "name": "Rococo .ng",
            "address": "1c ozumba, mabadiwe, v.I lagos",
            "reservation": true,
            "phoneNumber": "09137755555",
            "openingHours": "12pm till 1am",
            "openingDays": {
                "monday": true,
                "tuesday": true,
                "wednesday": true,
                "thursday": true,
                "friday": true,
                "saturday": true,
                "sunday": true
            },
            "rating": 4,
            "image": require("../../assets/images/menu/roco/6.png"),
            "dataType": "restaurant",
            "menu": [
                require("../../assets/images/menu/roco/6.png"),
                require("../../assets/images/menu/roco/1.png"),
                require("../../assets/images/menu/roco/2.png"),
                require("../../assets/images/menu/roco/3.png"),
                require("../../assets/images/menu/roco/5.png"),
                require("../../assets/images/menu/roco/0.png"),
            ],
            "reservationLink": "http://www.rococo.ng/",

            "locationLink": "https://maps.app.goo.gl/G3i7ncWYdKR8zQfP6",
        },
        {
            "name": "The smiths.ng",
            "address": "16 akin adesola vi lagos",
            "reservation": true,
            "phoneNumber": "09166414521",
            "openingHours": "NA",
            "openingDays": "NA",
            "rating": 3,
            "imageUrl": "https://th.bing.com/th/id/OIP.R4LSBmLsYWABjyjRCg2UpgHaDa?rs=1&pid=ImgDetMain",
            "dataType": "restaurant",
            "menu": [
                require("../../assets/images/menu/smiths/0.png"),
                require("../../assets/images/menu/smiths/1.png"),
                require("../../assets/images/menu/smiths/2.png"),
                require("../../assets/images/menu/smiths/3.png"),
                require("../../assets/images/menu/smiths/4.png"),
                require("../../assets/images/menu/smiths/5.png"),
                require("../../assets/images/menu/smiths/6.png"),
                require("../../assets/images/menu/smiths/7.png"),
                require("../../assets/images/menu/smiths/8.png"),
                require("../../assets/images/menu/smiths/9.png"),
                require("../../assets/images/menu/smiths/10.png"),
                require("../../assets/images/menu/smiths/11.png"),
                require("../../assets/images/menu/smiths/12.png"),
                require("../../assets/images/menu/smiths/13.png"),
                require("../../assets/images/menu/smiths/14.png"),
                require("../../assets/images/menu/smiths/15.png"),
                require("../../assets/images/menu/smiths/16.png"),
                require("../../assets/images/menu/smiths/17.png"),
                require("../../assets/images/menu/smiths/18.png"),
                require("../../assets/images/menu/smiths/19.png"),

            ],

            "reservationLink": "https://www.google.com/url?sa=t&source=web&rct=j&opi=89978449&url=https://www.instagram.com/soralagos/&ved=2ahUKEwi4686IyNiGAxVIU0EAHZjyFDoQFnoECEgQAQ&usg=AOvVaw0epmGE2HByNwPJ4Sk9M-hX",
            "locationLink": "https://g.co/kgs/FKYBYjC",
            "videoData": {
              "local": [
                  videos.smiths
              ],
              "online": [
                  "https://www.instagram.com/zayda.lagos/reel/C6MD4TUCa6Z/"
              ]
          },
          'display_images':  [
            require("../../assets/images/display_images/smiths/3.png"), 
            require("../../assets/images/display_images/smiths/0.png"),
            require("../../assets/images/display_images/smiths/1.png"),
            require("../../assets/images/display_images/smiths/2.png"),
          ],
          "image":  require("../../assets/images/display_images/smiths/3.png"),
        },
        {
            "name": "Slow lagos",
            "address": "2 musa yar adusa st vi lagos",
            "reservation": true,
            "phoneNumber": "09016666660",
            "openingHours": "Weekdays 8am till 11pm, Weekends 10am till 11pm",
            "openingDays": {
                "monday": true,
                "tuesday": true,
                "wednesday": true,
                "thursday": true,
                "friday": true,
                "saturday": true,
                "sunday": true
            },
            "rating": 5,
            "imageUrl": "https://th.bing.com/th/id/OIP.R4LSBmLsYWABjyjRCg2UpgHaDa?rs=1&pid=ImgDetMain",
            "dataType": "restaurant",
            "menu": [
                require("../../assets/images/menu/slow/0.png"),
                require("../../assets/images/menu/slow/1.png"),
                require("../../assets/images/menu/slow/2.png"),
                require("../../assets/images/menu/slow/3.png"),
                require("../../assets/images/menu/slow/4.png"),
            ],

            "reservationLink": "https://www.google.com/url?sa=t&source=web&rct=j&opi=89978449&url=https://www.instagram.com/soralagos/&ved=2ahUKEwi4686IyNiGAxVIU0EAHZjyFDoQFnoECEgQAQ&usg=AOvVaw0epmGE2HByNwPJ4Sk9M-hX",
            "locationLink": "https://g.co/kgs/FKYBYjC",
            'display_images':  [
              require("../../assets/images/display_images/slow/3.png"), 
              require("../../assets/images/display_images/slow/0.png"),
              require("../../assets/images/display_images/slow/1.png"),
              require("../../assets/images/display_images/slow/2.png"),
            ],
            "image":  require("../../assets/images/display_images/slow/3.png"),
         
        },
        {
            "name": "quayslagos",
            "address": "3 tokunbo omisore street, lekki phase 1 lagos",
            "reservation": true,
            "phoneNumber": "09166756582",
            "openingHours": "11am till 10pm",
            "openingDays": "NA",
            "rating": 2,
            "imageUrl": "https://th.bing.com/th/id/OIP.R4LSBmLsYWABjyjRCg2UpgHaDa?rs=1&pid=ImgDetMain",
            "dataType": "restaurant",
            "menu": [
                require("../../assets/images/menu/quays/0.png"),
                require("../../assets/images/menu/quays/1.png"),
                require("../../assets/images/menu/quays/2.png"),
                require("../../assets/images/menu/quays/3.png"),
                require("../../assets/images/menu/quays/4.png"),
                require("../../assets/images/menu/quays/5.png"),
                require("../../assets/images/menu/quays/6.png"),
            ],

            "reservationLink": "https://www.google.com/url?sa=t&source=web&rct=j&opi=89978449&url=https://www.instagram.com/soralagos/&ved=2ahUKEwi4686IyNiGAxVIU0EAHZjyFDoQFnoECEgQAQ&usg=AOvVaw0epmGE2HByNwPJ4Sk9M-hX",
            "locationLink": "https://g.co/kgs/FKYBYjC",
            'display_images':  [
              require("../../assets/images/display_images/quays/3.png"), 
              require("../../assets/images/display_images/quays/0.png"),
              require("../../assets/images/display_images/quays/1.png"),
              require("../../assets/images/display_images/quays/2.png"),
            ],
            "image":  require("../../assets/images/display_images/quays/3.png"),
         
        },
        {
            "name": "Zoes bistro_ng",
            "address": "27 glover road ikoyi lagos",
            "reservation": false,
            "phoneNumber": "09120147746",
            "openingHours": "8am till 12am",
            "openingDays": {
                "monday": true,
                "tuesday": true,
                "wednesday": true,
                "thursday": true,
                "friday": true,
                "saturday": true,
                "sunday": true
            },
            "rating": 3,
            "dataType": "restaurant",
            "menu": [
                require("../../assets/images/menu/zoe/0.png"),
                require("../../assets/images/menu/zoe/1.png"),
                require("../../assets/images/menu/zoe/2.png"),
                require("../../assets/images/menu/zoe/3.png"),
                require("../../assets/images/menu/zoe/4.png"),
                require("../../assets/images/menu/zoe/5.png"),
                require("../../assets/images/menu/zoe/6.png"),
                require("../../assets/images/menu/zoe/7.png"),
                require("../../assets/images/menu/zoe/8.png"),
            ],
            'image': require('../../assets/images/zoe/0.png'),
            "reservationLink": "https://www.google.com/url?sa=t&source=web&rct=j&opi=89978449&url=https://www.instagram.com/soralagos/&ved=2ahUKEwi4686IyNiGAxVIU0EAHZjyFDoQFnoECEgQAQ&usg=AOvVaw0epmGE2HByNwPJ4Sk9M-hX",
            "locationLink": "https://g.co/kgs/FKYBYjC",
            "uberLink": "",
            "display_images": [
                require("../../assets/images/zoe/0.png"),
                require("../../assets/images/zoe/1.png"),
                require("../../assets/images/zoe/2.png"),
                require("../../assets/images/zoe/3.png"),
            ]
        }
    ]


        : [
                {
                  "name": "ofadaboy",
                  "address": "1 mba street, surulere, lagos",
                  "phoneNumber": "07083800003",
                  "reservation": false,
                  "openingHours": "11am-9pm",
                  "openingDays": {
                    "monday": true,
                    "tuesday": true,
                    "wednesday": true,
                    "thursday": true,
                    "friday": true,
                    "saturday": true,
                    "sunday": true
                },
                  "image": require("../../assets/images/display_images/ofada_boy/0.png"),
                  "rating": 4,
                  'display_images': [
                    require('../../assets/images/display_images/ofada_boy/1.png'),
                    require('../../assets/images/display_images/ofada_boy/2.png'),
                    require('../../assets/images/display_images/ofada_boy/3.png')
                  ],
                  'menu': [
                    require('../../assets/images/menu/ofada_boy/0.png'),
                    require('../../assets/images/menu/ofada_boy/1.png'),
                    require('../../assets/images/menu/ofada_boy/2.png'),
                    require('../../assets/images/menu/ofada_boy/3.png')
                  ]
                },
                {
                  "name": "soulfood lagos",
                  "address": "51 st finbars college road, akoka, lagos",
                  "phoneNumber": "07041585082",
                  "reservation": false,
                  "opening hours": "9am-10pm",
                  "openingDays":{
                    "monday": true,
                    "tuesday": true,
                    "wednesday": true,
                    "thursday": true,
                    "friday": true,
                    "saturday": true,
                    "sunday": true
                },
                  "image": require("../../assets/images/display_images/soul_food/0.png"),
                  "rating": 4,
                  'display_images': [
                    require('../../assets/images/display_images/soul_food/1.png'),
                    require('../../assets/images/display_images/soul_food/2.png')
                  ],
                  'menu': [
                    require('../../assets/images/menu/soul_food/0.png'),
                    require('../../assets/images/menu/soul_food/1.png'),
                    require('../../assets/images/menu/soul_food/2.png'),
                  ]
                },
                {
                  "name": "Essence by the grid",
                  "address": "15a sasegbon street, GRA ikeja",
                  "phoneNumber": "08118877188",
                  "reservation": false,
                  "opening hours":"9am-10pm",
                  "openingDays": {
                    "monday": true,
                    "tuesday": true,
                    "wednesday": true,
                    "thursday": true,
                    "friday": true,
                    "saturday": true,
                    "sunday": true
                },
                  "image": require("../../assets/images/display_images/essence/0.png"),
                  "rating": 4,
                  'display_images': [
                    require('../../assets/images/display_images/essence/1.png'),
                    require('../../assets/images/display_images/essence/2.png')
                  ],
                  'menu': [
                    require('../../assets/images/menu/essence/0.png'),
                    require('../../assets/images/menu/essence/1.png'),
                    require('../../assets/images/menu/essence/2.png'),
                    require('../../assets/images/menu/essence/3.png'),
                    require('../../assets/images/menu/essence/4.png'),
                    require('../../assets/images/menu/essence/5.png'),
                    require('../../assets/images/menu/essence/6.png'),
                    require('../../assets/images/menu/essence/7.png'),
                    require('../../assets/images/menu/essence/8.png'),
                    require('../../assets/images/menu/essence/9.png'),
                  ]
                },
                {
                  "name": "the orchid bistro",
                  "address": "58a isaac john street ikeja GRA ,lagos",
                  "phoneNumber": "08125848463",
                  "reservation": false,
                  "opening hours": "7am-9pm",
                  "openingDays": {
                    "monday": true,
                    "tuesday": true,
                    "wednesday": true,
                    "thursday": true,
                    "friday": true,
                    "saturday": true,
                    "sunday": true
                },
                  "rating": 4,
                  "image":  require("../../assets/images/zoe/3.png"),
                  'copy_write': "Experience elegance and flavor at The Orchid Bistro, an oasis of culinary delight nestled in the heart of Lagos Mainland. From our meticulously crafted dishes to our serene ambiance, every visit promises a feast for the senses. Whether you're savoring brunch with friends or enjoying a romantic dinner, indulge in our fusion of global cuisines with a Nigerian twist. Discover why The Orchid Bistro is your go-to destination for unforgettable dining experiences."
                },
                {
                  "name": "the gridlagos",
                  "address": "5, thomas ajufo street opebi, lagos",
                  "phoneNumber": "08146149510",
                  "reservation": false,
                  "opening hours": "12pm-3pm",
                  "openingDays": {
                    "monday": true,
                    "tuesday": true,
                    "wednesday": true,
                    "thursday": true,
                    "friday": true,
                    "saturday": true,
                    "sunday": true
                },
                  "rating": 4,
                  "image": require("../../assets/images/display_images/ofada_boy/2.png"),
                  'copy_write': "Welcome to The GridLagos, where food meets innovation in Lagos Mainland. Step into a vibrant culinary playground where creativity knows no bounds. Our eclectic menu curated by passionate chefs brings together the best of local flavors and international influences. Whether you're here for our signature cocktails or to savor our artisanal dishes, every bite tells a story of craftsmanship and quality. Join us at The GridLagos and redefine your dining expectations."
                },
                {
                  "name": "oeuvrebistro",
                  "address": "ogudu mall, ogudu road, lagos",
                  "phoneNumber": "08181887479",
                  "reservation": false,
                  "openingHours": "9am-10pm",
                  "openingDays": {
                    "monday": true,
                    "tuesday": true,
                    "wednesday": true,
                    "thursday": true,
                    "friday": true,
                    "saturday": true,
                    "sunday": true
                },
                  "rating": 4,
                  "rating": 4,
                  "image": require("../../assets/images/display_images/ofada_boy/3.png"),
                  'menu': [
                    require('../../assets/images/menu/oeuvre_bistro/0.png'),
                    require('../../assets/images/menu/oeuvre_bistro/1.png'),
                    require('../../assets/images/menu/oeuvre_bistro/2.png'),
                    require('../../assets/images/menu/oeuvre_bistro/3.png'),

                  ],
                  "videoData": {
                    "local": [
                        videos.oeuvre
                    ],
                    "online": [
                        "https://www.instagram.com/zayda.lagos/reel/C6MD4TUCa6Z/"
                    ]
                },
                  
                },
                {
                  "name": "chocos bistro",
                  "address": "53B ODUDUWA way ikeja lagos",
                  "phoneNumber": "08128824588",
                  "reservation": false,
                  "openingHours":  "12pm-11pm",
                  "openingDays": {
                    "monday": true,
                    "tuesday": true,
                    "wednesday": true,
                    "thursday": true,
                    "friday": true,
                    "saturday": true,
                    "sunday": true
                },
                  "rating": 4,
                  "image": require("../../assets/images/display_images/essence/1.png"),
                  'menu': [
                    require('../../assets/images/menu/chocos_bistro/0.png'),
                    require('../../assets/images/menu/chocos_bistro/1.png'),
                    require('../../assets/images/menu/chocos_bistro/2.png'),
                    require('../../assets/images/menu/chocos_bistro/3.png'),

                  ],
                  "videoData": {
                    "local": [
                        videos.choco
                    ],
                    "online": [
                        "https://www.instagram.com/zayda.lagos/reel/C6MD4TUCa6Z/"
                    ]
                },
                }       
        ];

    return Restaurant;
}