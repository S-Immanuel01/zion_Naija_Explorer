const HotelData = (location: string) => {
        return [
            {
              "name": "Legend Hotel Lagos",
              "rating": 4,
              "address": "Quits Aviation Services Free Zone, Airport Rd, Ikeja 23401, Lagos",
              "openingDays": {
                "monday": true,
                "tuesday": true,
                "wednesday": true,
                "thursday": true,
                "friday": true,
                "saturday": true,
                "sunday": true
            },
              "image": require("../../assets/images/hotels/legend_hotel/0.jpg"),
              "display_images": [
                require("../../assets/images/hotels/legend_hotel/4.jpg"),
                require("../../assets/images/hotels/legend_hotel/1.jpg"),
                require("../../assets/images/hotels/legend_hotel/2.jpg"),
                require("../../assets/images/hotels/legend_hotel/3.jpg"),
              ],
              'copy_write': "Discover urban elegance at Legen Hotel, where luxury meets Lagos. Immerse yourself in comfort and style in the heart of the Mainland.",
              "locationLink": "https://www.google.com/maps/dir//Quits+Aviation+Services+Free+Zone,+Airport+Rd,+Ikeja+23401,+Lagos/@6.5732176,3.2421259,12z/data=!3m1!4b1!4m8!4m7!1m0!1m5!1m1!1s0x103b91e40ea31cad:0x2ff2ab803bf50066!2m2!1d3.3245278!2d6.5732243?entry=ttu"
            },
            {
              "name": "Lagos Marriott Hotel Ikeja",
              "rating": 4,
              "address": "122 Joel Ogunnaike Street, Ikeja, Lagos",
              "openingDays": {
                "Monday": true,
                "Tuesday": true,
                "Wednesday": true,
                "Thursday": true,
                "Friday": true,
                "Saturday": true,
                "Sunday": true
              },
              "image": require("../../assets/images/hotels/marriot/0.jpg"),
              "display_images": [
                require("../../assets/images/hotels/marriot/4.jpg"),
                require("../../assets/images/hotels/marriot/1.jpg"),
                require("../../assets/images/hotels/marriot/2.jpg"),
                require("../../assets/images/hotels/marriot/3.jpg"),
              ],
              'copy_write': "Elevate your stay in Lagos at the iconic Lagos Marriott Hotel Ikeja. Experience refined luxury and impeccable service in the city's vibrant business hub.",
              "reservationLink": "https://www.googleadservices.com/pagead/aclk?sa=L&ai=DChcSEwjhmaSt5_mGAxWca0ECHVdYBrsYABAEGgJ3cw&gclid=CjwKCAjw-O6zBhASEiwAOHeGxV4VE5QjIINivpRvDhgVUvC68-dzwPGPHIX5wiWNgluYWoPFy2bDzhoC4H8QAvD_BwE&ohost=www.google.com&cid=CAESV-D2dPNPFot5Yjvf7InS6WBFxht3jHD6IVyWB2RsmgDaKR9Q5gQyw89_NTAimThfLr7oshHJo_JXol-G3wMbmGOFwUwm-5iGLtNSvW4vMOSZ6Cy8eT1fFQ&sig=AOD64_2WgWC1obvtC-NlRZuPRK7lCs6UUg&q&adurl&ved=2ahUKEwi70p2t5_mGAxUYSPEDHZxMA2kQ0Qx6BAgFEAE",
              "locationLink": "https://www.google.com/travel/search?g2lb=4814050,4874190,4893075,4965990,10210221,72277293,72302247,72317059,72406588,72414906,72421566,72462234,72470899,72471280,72472051,72473841,72481459,72485658,72486593,72494250,72513513,72536387,72549171,72570850,72597757,72602734,72605013,72606237,72616120,72619927,72620306,72620956,72624691,72626058,72634629&hl=en-NG&gl=ng&cs=1&ssta=1&q=lagos+marriott+hotel+ikeja&ts=CAEaRwopEicyJTB4MTAzYjkyMTc3NmQ0Y2QzZjoweDgyYmZhNmE4YTMxNzdkZGYSGhIUCgcI6A8QBhgbEgcI6A8QBhgcGAEyAhAA&qs=CAEyFENnc0kzX3ZkbUlyVjZkLUNBUkFCOAJCCQnffRejqKa_gkIJCd99F6Oopr-C&ap=ugEGcHJpY2Vz&ictx=1"
            },
            {
              "name": "Radisson Blu",
              "rating": 5,
              "address": "42 Isaac John Street, Ikeja, Lagos",
              "image": require("../../assets/images/hotels/radisson/0.jpg"),
              "openingDays": {
                "Monday": true,
                "Tuesday": true,
                "Wednesday": true,
                "Thursday": true,
                "Friday": true,
                "Saturday": true,
                "Sunday": true
              },
              'display_images': [
                require('../../assets/images/hotels/radisson/1.jpg'),
                require('../../assets/images/hotels/radisson/2.jpg'),
                require('../../assets/images/hotels/radisson/3.jpg')
              ],
              'copy_write': "Experience modern sophistication at Radisson Blu Lagos Ikeja. Discover unparalleled comfort, exquisite dining, and effortless elegance in the heart of Lagos Mainland.",
              "reservationLink": "https://www.google.com/url?sa=t&source=web&rct=j&opi=89978449&url=https://www.radissonhotels.com/en-us/hotels/radisson-blu-lagos-anchorage&ved=2ahUKEwiS8qiK5_mGAxVDR_EDHZP6BIkQFnoECAYQAQ&usg=AOvVaw33AHKpemOpWVbqEdvwt0SD"
            }
          ]
          
    
}

export default HotelData;