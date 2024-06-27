const TheaterData = (option: string) => {
    if (option === "Island") {
        return [
            {
                "name": "Blue Pictures Cinema",
                "address": "City Mall, Lagos Island",
                "phoneNumber": "+2348152637491",
                "rating": 4,
                "reservationLink": "https://linktr.ee/bluepicturescinemas?fbclid=PAZXh0bgNhZW0CMTEAAabXgfZq77M3RfbQ0mzBW_LvuwTwYhzEH-TAVrMYASBILm-GCtrKuIf-Ha0_aem_nK4XxgNLBzZo5qtYHOJ44A",
                "display_images": [
                  require('../../assets/images/theaters/blue/1.jpg'),
                  require('../../assets/images/theaters/blue/2.jpg'),
                  require('../../assets/images/theaters/blue/3.jpg'),
                ],
                "image": require('../../assets/images/theaters/blue/3.jpg'),
                "openingDays": {
                  "Monday": true,
                  "Tuesday": true,
                  "Wednesday": true,
                  "Thursday": true,
                  "Friday": true,
                  "Saturday": true,
                  "Sunday": true
                }
              },
              {
                "name": "Ebony Life Place",
                "address": "1637 Adetokunbo Ademola St., Victoria Island",
                "phoneNumber": "+2348098765432",
                "rating": 5,
                "link": "https://ebonylifecinemas.com/?fbclid=PAZXh0bgNhZW0CMTEAAaYWvapjMdBn2Gw7nMEfhGB0Vs7hsmL64tNdj6nGzKIGvbvL_d9ctQIFTNY_aem_fKQBQnKJHOe-Wok1V9ymag",
                "display_images": [
                  require('../../assets/images/theaters/ebony/1.jpg'),
                  require('../../assets/images/theaters/ebony/2.jpg'),
                  require('../../assets/images/theaters/ebony/4.jpg'),
                  require('../../assets/images/theaters/ebony/5.jpg'),
                  require('../../assets/images/theaters/ebony/6.jpg'),
                  require('../../assets/images/theaters/ebony/7.jpg'),

                ],
                "image": require('../../assets/images/theaters/ebony/0.jpg'),
                "openingDays": {
                  "Monday": true,
                  "Tuesday": true,
                  "Wednesday": true,
                  "Thursday": true,
                  "Friday": true,
                  "Saturday": true,
                  "Sunday": true
                }
              },
              {
                "name": "Filmhouse Cinemas IMAX Lekki Lagos",
                "address": "10b The Rock Dr, Lekki Phase1",
                "phoneNumber": "+2348176543210",
                "rating": 5,
                "link": "https://filmhouseng.com/",
                "display_images": [
                  require('../../assets/images/theaters/film_house/2.png'),
                  require('../../assets/images/theaters/film_house/1.jpg'),
                  require('../../assets/images/theaters/film_house/0.jpg'),
                ],
                "image": require('../../assets/images/theaters/film_house/0.jpg'),
                "openingDays": {
                  "Monday": true,
                  "Tuesday": true,
                  "Wednesday": true,
                  "Thursday": true,
                  "Friday": true,
                  "Saturday": true,
                  "Sunday": true
                }
              },
              {
                "name": "Filmhouse Cinemas, Oniru",
                "address": "Twin Waters Entertainment Centre Okunde Blue water zone off, Remi Olowude St, Eti-Osa, Lekki",
                "phoneNumber": "+2348034567890",
                "rating": 4,
                "reservationLink": "https://filmhouseng.com/",
                "display_images": [
                  require('../../assets/images/theaters/film_cinema/0.jpg'),
                  require('../../assets/images/theaters/film_cinema/1.jpg'),
                  require('../../assets/images/theaters/film_cinema/2.jpg'),
                  require('../../assets/images/theaters/film_cinema/3.jpg'),
                  require('../../assets/images/theaters/film_cinema/4.jpg'),
                ],
                "image": require('../../assets/images/theaters/film_cinema/2.jpg'),
                "openingDays": {
                  "Monday": true,
                  "Tuesday": true,
                  "Wednesday": true,
                  "Thursday": true,
                  "Friday": true,
                  "Saturday": true,
                  "Sunday": true
                }
              },
              {
                "name": "Silverbird Galleria",
                "address": "133 Ahmadu Bello Way, Victoria Island",
                "phoneNumber": "+2348176543210",
                "rating": 4,
                "reservationLink": "https://ticketing.eu.veezi.com/sessions/?siteToken=4x3z2wcre0rek2beab5w344ae0",
                "display_images": [
                  require('../../assets/images/theaters/silverbird/1.png'),
                  require('../../assets/images/theaters/silverbird/0.jpg'),
                  require('../../assets/images/theaters/silverbird/2.jpg'),
                  require('../../assets/images/theaters/silverbird/3.jpg'),
                  require('../../assets/images/theaters/film_cinema/4.jpg'),
                ],
                "image": require('../../assets/images/theaters/silverbird/3.jpg'),
                "openingDays": {
                  "Monday": true,
                  "Tuesday": true,
                  "Wednesday": true,
                  "Thursday": true,
                  "Friday": true,
                  "Saturday": true,
                  "Sunday": true
                },
              }
        ]
    }else {
        return [
            {
              "name": "Ozone Cinema",
              "address": "Ozone E Center, 1-11 Commercial Ave, Yaba, Lagos",
              "phoneNumber": "+2348123456789",
              "rating": 4,
              "reservationLink": "https://ozonecinemas.com/",
              "display_images": [
                require('../../assets/images/theaters/ozone/1.jpg'),
                require('../../assets/images/theaters/ozone/2.jpg'),
              ],
              "image": require('../../assets/images/theaters/film_cinema/2.jpg'),
              "openingDays": {
                "Monday": true,
                "Tuesday": true,
                "Wednesday": true,
                "Thursday": true,
                "Friday": true,
                "Saturday": true,
                "Sunday": true
              }
            },
            {
              "name": "Genesis Deluxe Cinemas",
              "address": "Funtasticaland, Ikorodu-Ososun Rd, Lagos, Ikeja 105102, Lagos",
              "phoneNumber": "+2348098765432",
              "rating": 4,
              "reservationLink": "https://genesiscinemas.com/",
              "display_images": [
                require('../../assets/images/theaters/genesis/1.jpg'),
                require('../../assets/images/theaters/genesis/2.jpg'),
              ],
              "image": require('../../assets/images/theaters/genesis/2.jpg'),
              "openingDays": {
                "Monday": true,
                "Tuesday": true,
                "Wednesday": true,
                "Thursday": true,
                "Friday": true,
                "Saturday": true,
                "Sunday": true
              }
            },
            {
              "name": "Silverbird Cinemas",
              "address": "174/194 Obafemi Awolowo Way, Ikeja City Mall, Alausa Ikeja, Lagos",
              "phoneNumber": "+2348034567890",
              "rating": 3, 
              "reservationLink": "https://silverbirdcinemas.com/cinema/ikeja/",
              "display_images": [
                require('../../assets/images/theaters/silverbird/1.png'),
                require('../../assets/images/theaters/silverbird/0.jpg'),
                require('../../assets/images/theaters/silverbird/2.jpg'),
                require('../../assets/images/theaters/silverbird/3.jpg'),
                require('../../assets/images/theaters/film_cinema/4.jpg'),
              ],
              "image": require('../../assets/images/theaters/silverbird/4.jpg'),
              "openingDays": {
                "Monday": true,
                "Tuesday": true,
                "Wednesday": true,
                "Thursday": true,
                "Friday": true,
                "Saturday": true,
                "Sunday": true
              },
              
            },
            {
              "name": "Filmhouse Cinema Surulere",
              "address": "30b Adeniran Ogunsanya Street, Surulere, Lagos",
              "phoneNumber": "+2348176543210",
              "rating": 4,
              "reservationLink": "https://filmhouseng.com/",
              "display_images": [
                require('../../assets/images/theaters/film_cinema/0.jpg'),
                require('../../assets/images/theaters/film_cinema/1.jpg'),
                require('../../assets/images/theaters/film_cinema/2.jpg'),
                require('../../assets/images/theaters/film_cinema/3.jpg'),
                require('../../assets/images/theaters/film_cinema/4.jpg'),
              ],
              "image": require('../../assets/images/theaters/film_cinema/3.jpg'),
              "openingDays": {
                "Monday": true,
                "Tuesday": true,
                "Wednesday": true,
                "Thursday": true,
                "Friday": true,
                "Saturday": true,
                "Sunday": true
              }
            },
            {
                "name": "VIVA Cinemas Ikeja",
                "address": "22 Simbiat Abiola Way, Ikeja, Lagos 101233, Lagos",
                "phoneNumber": "+2348152637491",
                "rating": 4,
                "reservationLink": "https://web.vivacinemas.com/",
                "display_images": [
                  require('../../assets/images/theaters/v/0.png'),
                  require('../../assets/images/theaters/v/1.jpg'),
                  require('../../assets/images/theaters/v/2.jpg'),
                  require('../../assets/images/theaters/v/3.png'),
                  require('../../assets/images/theaters/v/4.jpg'),
                ],
                "image": require('../../assets/images/theaters/v/2.jpg'),
                "openingDays": {
                  "Monday": true,
                  "Tuesday": true,
                  "Wednesday": true,
                  "Thursday": true,
                  "Friday": true,
                  "Saturday": true,
                  "Sunday": true
                },
            }
          ]
          
    }
}

export default TheaterData