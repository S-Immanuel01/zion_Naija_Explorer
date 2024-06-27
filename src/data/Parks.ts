import videos from "../constants/videos"

const ParkData = (option: string) => {
    return [
        {
          "name": "The Good Beach",
          "address": "Plot 10B Water Corporation Dr, Trinity Ave, Victoria Island, Lagos",
          "phoneNumber": "+2348165432789",
          "rating": 4,
          "display_images": [
            require('../../assets/images/parks_n_beaches/good_beach/1.jpg'),
            require('../../assets/images/parks_n_beaches/good_beach/2.jpg'),
            require('../../assets/images/parks_n_beaches/good_beach/3.jpg'),
            require('../../assets/images/parks_n_beaches/good_beach/4.jpg'),
            require('../../assets/images/parks_n_beaches/good_beach/0.jpg'),
          ],
          "image": require('../../assets/images/parks_n_beaches/good_beach/0.jpg'),
          "reservationLink": "https://goodbeachlagos.com/?fbclid=PAZXh0bgNhZW0CMTEAAaZh7wtxBrqsDIwNlib6UoO7L6qSXz12puGQjXEhDLS5pa8JJgmcXAN3Zho_aem_Yu1GGfu0NgtQ4jU09xhEug",
          "instagram": "https://www.instagram.com/thegoodbeachlagos?igsh=MXVxczg2aXl3bnB5Zg==",
          "accessFee": {
            "kidsAndStudents": "3k",
            "individualMondayToThursday": "5k",
            "individualFridayToSunday": "7k"
          },
          "openingHours": "12pm-3am daily",
          "openingDays": {
            "Monday": true,
            "Tuesday": true,
            "Wednesday": true,
            "Thursday": true,
            "Friday": true,
            "Saturday": true,
            "Sunday": true
          },
          'copy_write': "Bask in the beauty of Lagos at The Good Beach, where sun-kissed shores meet serene waters. Escape the city and unwind in paradise."
        },
        {
          "name": "Landmark Beach",
          "address": "Numbers 3 & 4 Water Corporation Road, VI, Lagos",
          "phoneNumber": "+2348098765432",
          "rating": 4,
          "display_images": [
            require('../../assets/images/parks_n_beaches/landmark/0.jpg'),
          ],
          "image": require('../../assets/images/parks_n_beaches/good_beach/2.jpg'),
          "reservationLink": "https://linktr.ee/LandmarkBeach2?fbclid=PAZXh0bgNhZW0CMTEAAaaaaThY14x2E6TE-j6EluvBfLmbpBwsTlI8Si0nak-PbbvIdKjGCRqOPeo_aem_FK2KSiMfJEIT_xzZIS45tg",
          "instagram": "https://www.instagram.com/landmarklagos?igsh=aTE5ZjdxZHFtdTAw",
          "entryFee": "2k",
          "openingHours": "12pm-3am daily",
          "openingDays": {
            "Monday": true,
            "Tuesday": true,
            "Wednesday": true,
            "Thursday": true,
            "Friday": true,
            "Saturday": true,
            "Sunday": true
          },
          'copy_write': "Discover seaside serenity at Landmark Beach, where every wave brings tranquility. Embrace the coastal charm and create unforgettable memories."
        },
        {
          "name": "Wave Beach Lagos",
          "address": "Oba Elegushi Road, Ikate Lekki, Lagos",
          "phoneNumber": "+2348176543210",
          "rating": 4,
          "display_images": [
           
          ],
          "image": require('../../assets/images/parks_n_beaches/good_beach/3.jpg'),
          "reservationLink": "https://dooshima.wavebeachlagos.com/?fbclid=PAZXh0bgNhZW0CMTEAAaYNpJtTflEg01wyHudBUBWlw6JMPfhKG4ANmvbnDZwh1aZ9d4YgK1zCqIg_aem_oXpE6-OuxysSZUSFdFmM7Q",
          "instagram": "https://www.instagram.com/wavebeachlagos?igsh=bGxldGVpaWNhbWF3",
          "openingHours": "24 hours daily",
          "openingDays": {
            "Monday": true,
            "Tuesday": true,
            "Wednesday": true,
            "Thursday": true,
            "Friday": true,
            "Saturday": true,
            "Sunday": true
          },
          'copy_write': "Ride the waves of relaxation at Wave Beach, Lagos Island’s hidden gem. Dive into adventure or simply soak up the sun on pristine sands."
        },
        {
          "name": "Tarkwa Bay Beach",
          "address": "Victoria Island, Lagos",
          "phoneNumber": "+2348034567890",
          "rating": 4,
          "display_images": [
            require('../../assets/images/parks_n_beaches/tarkwabay/1.jpg'),
            require('../../assets/images/parks_n_beaches/tarkwabay/2.jpg'),
            require('../../assets/images/parks_n_beaches/tarkwabay/3.jpg'),
            require('../../assets/images/parks_n_beaches/tarkwabay/4.jpg'),
            require('../../assets/images/parks_n_beaches/tarkwabay/0.jpg'),
          ],
          "image": require('../../assets/images/parks_n_beaches/tarkwabay/0.jpg'),
          "instagram": "https://www.instagram.com/tarkwabaybeachofficial01?igsh=MTBldHVyanBwNDh5YQ==",
          "entryFee": "2k",
          "openingHours": "10am-12am daily",
          "openingDays": {
            "Monday": true,
            "Tuesday": true,
            "Wednesday": true,
            "Thursday": true,
            "Friday": true,
            "Saturday": true,
            "Sunday": true
          },
          'copy_write': "Escape to Tarkwa Bay Beach, Lagos’s secret paradise. With its clear waters and laid-back vibes, it’s the perfect getaway from city life."
        },
        {
          "name": "JJT Park",
          "address": "House of Assembly beside Lagos State Secretariat Alausa, Ikeja",
          "phoneNumber": "+2348165432789",
          "rating": 4,
          "display_images": [
            require('../../assets/images/parks_n_beaches/jjk/1.jpg'),
            require('../../assets/images/parks_n_beaches/jjk/2.jpg'),
            require('../../assets/images/parks_n_beaches/jjk/3.jpg'),
            require('../../assets/images/parks_n_beaches/jjk/0.jpg'),
          ],
          "image": require('../../assets/images/parks_n_beaches/jjk/0.jpg'),
          "entryFee": "free",
          "openingHours": "9am to 6pm daily",
          "openingDays": {
            "Monday": true,
            "Tuesday": true,
            "Wednesday": true,
            "Thursday": true,
            "Friday": true,
            "Saturday": true,
            "Sunday": true
          },
          'copy_write': "Explore nature’s playground at JJT Park, where lush greenery meets urban oasis. Reconnect with family and friends amidst scenic beauty."
        },
        {
          "name": "Lekki Conservation Centre",
          "address": "Lekki Conservation, Eti-Osa, Lagos, Lekki Conservation Centre Rd, Lekki",
          "phoneNumber": "+2348098765432",
          "rating": 4,
          "display_images": [
        
          ],
          "image": require('../../assets/images/parks_n_beaches/lufasi/3.jpg'),
          "reservationLink": "https://lufasi.org/",
          "instagram": "https://www.instagram.com/lekkiconservationcentre?igsh=NnkzNTdjanIwNGhq",
          "openingHours": "8:30am to 5:30pm daily",
          "gateFee": {
            "adult": "2,500 naira",
            "children": "1,000 naira",
            "canopyWalkway": "2,500 naira"
          },
          "openingDays": {
            "Monday": true,
            "Tuesday": true,
            "Wednesday": true,
            "Thursday": true,
            "Friday": true,
            "Saturday": true,
            "Sunday": true
          },
          'copy_write': "Embark on a wild adventure at Lekki Conservation Park, Lagos’s green sanctuary. Encounter nature’s wonders and preserve memories of a lifetime.",
          "videoData": {
            "local": [
                videos.lekki
            ],
            "online": [
                "https://www.instagram.com/zayda.lagos/reel/C6MD4TUCa6Z/"
            ]
        },
        },
        {
          "name": "LUFASI Nature Park",
          "address": "Eti-Osa, Lagos",
          "phoneNumber": "+2348034567890",
          "rating": 4,
          "display_images": [
            require('../../assets/images/parks_n_beaches/lufasi/1.jpg'),
            require('../../assets/images/parks_n_beaches/lufasi/2.jpg'),
            require('../../assets/images/parks_n_beaches/lufasi/3.jpg'),
            require('../../assets/images/parks_n_beaches/lufasi/0.jpg'),
          ],
          "image": require('../../assets/images/parks_n_beaches/lufasi/0.jpg'),
          "reservationLink": "https://lufasi.org/",
          "instagram": "https://www.instagram.com/lufasipark?igsh=ZGh6OTk5YzIwN3lh",
          "openingHours": "9am till 6pm daily",
          "openingDays": {
            "Monday": true,
            "Tuesday": true,
            "Wednesday": true,
            "Thursday": true,
            "Friday": true,
            "Saturday": true,
            "Sunday": true
          }, 
          'copy_write': "Immerse yourself in the wonders of nature at Lufasi Nature Park, Lagos’s ecological haven. Discover biodiversity and cherish peaceful moments."
        }
      ]      
}

export default ParkData