import videos from "../constants/videos"

const MuseumData = (option: string) => {
    return [
        {
          "name": "Yemisi Shyllon Museum of Art",
          "address": "Pan Atlantic University, Lekki",
          "phoneNumber": "+2348123456789",
          "rating": 5,
          "entryFee": "3k",
          "openingHours": "Tuesday - Sunday 10am - 4pm",
          "instagram": "https://www.instagram.com/shyllonmuseum?igsh=MTA0ZHZuenV4d2swcw==",
          "reservationLink": "https://museum.pau.edu.ng/",
          "openingDays": {
            "Monday": false,
            "Tuesday": true,
            "Wednesday": true,
            "Thursday": true,
            "Friday": true,
            "Saturday": true,
            "Sunday": true
          },
          "display_images": [
            
          ],
          "image": require('../../assets/images/museum/kalakuta/0.jpg'),
        },
        {
          "name": "Badagry Slave Museum and Black History Museum",
          "address": "Marina, Badagry",
          "phoneNumber": "+2348098765432",
          "rating": 5,
          "entryFee": "2500",
          "openingHours": "Mon - Sat 9am - 5pm",
          "openingDays": {
            "Monday": true,
            "Tuesday": true,
            "Wednesday": true,
            "Thursday": true,
            "Friday": true,
            "Saturday": true,
            "Sunday": false
          },
          "display_images": [
            require('../../assets/images/museum/badagry/1.jpg'),
            require('../../assets/images/museum/badagry/2.jpg'),
            require('../../assets/images/museum/badagry/3.jpg'),
            require('../../assets/images/museum/badagry/0.jpg'),
          ],
          "image": require('../../assets/images/museum/badagry/0.jpg'),
        },
        {
          "name": "Kalakuta Museum",
          "address": "7 Gbemisola Street, Allen Ikeja, Lagos",
          "phoneNumber": "+2348187654321",
          "rating": 4,
          "entryFee": "free",
          "openingHours": "Daily 11am - 6pm",
          "instagram": "https://www.instagram.com/kalakutamuseums?igsh=MXdyNHJqeTRqZ3NvOA==",
          "openingDays": {
            "Monday": true,
            "Tuesday": true,
            "Wednesday": true,
            "Thursday": true,
            "Friday": true,
            "Saturday": true,
            "Sunday": false
          },
          "display_images": [
            require('../../assets/images/museum/kalakuta/1.jpg'),
            require('../../assets/images/museum/kalakuta/2.jpg'),
            require('../../assets/images/museum/kalakuta/3.jpg'),
            require('../../assets/images/museum/kalakuta/0.jpg'),
          ],
          "image": require('../../assets/images/museum/kalakuta/0.jpg'),
        },
        {
          "name": "National Museum Lagos",
          "address": "Onikan Road, Ikoyi, Lagos",
          "phoneNumber": "+2348034567890",
          "rating": 4,
          "entryFee": "1k",
          "openingHours": "Daily 9:30am - 3:30pm",
          "openingDays": {
            "Monday": true,
            "Tuesday": true,
            "Wednesday": true,
            "Thursday": true,
            "Friday": true,
            "Saturday": true,
            "Sunday": false
          },
          "display_images": [
            require('../../assets/images/museum/national/1.jpg'),
            require('../../assets/images/museum/national/2.jpg'),
            require('../../assets/images/museum/national/3.jpg'),
            require('../../assets/images/museum/national/0.jpg'),
          ],
          "image": require('../../assets/images/museum/national/3.jpg'),
          "videoData": {
            "local": [
                videos.national
            ],
            "online": [
                "https://www.instagram.com/zayda.lagos/reel/C6MD4TUCa6Z/"
            ]
        },
        }
      ]
    }      

export default MuseumData