//  Author : Mayuri D.
//  Date : 26-Jun-2024
//  Description : Restaurant service file , provides array for restaurants.

import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {

  constructor() { }
  restaurantlength : any = 0;
   restaurants = [
    {
      id:1,
      name: "Gourmet Garden",
      address: "123 Main Street, Anytown, USA",
      description: "Experience the pinnacle of fine dining at Gourmet Garden, where every dish is crafted with the freshest local ingredients. Our menu, inspired by French culinary traditions, offers a sophisticated blend of flavors and textures that will delight even the most discerning palate.",
      hours: "11:00 AM - 10:00 PM",
      cuisine: "French",
      Menu: [
        {
            id :1,
            menu : "Roti",
            price : "$ 50"
        },
        {
          id :2,
          menu : "Roti",
          price : "$ 50"
        },
        {
          id :3,
          menu : "bhaji",
          price : "$ 50"
        }
      ]
    },
    {
      id:2,
      name: "Spice Junction",
      address: "456 Elm Street, Otherville, USA",
      description: "Journey through the vibrant tastes of India at Spice Junction. Our authentic dishes, bursting with aromatic spices and rich flavors, promise a culinary adventure like no other. From savory curries to tandoori specialties, each bite tells a story of tradition and excellence.",
      hours: "12:00 PM - 11:00 PM",
      cuisine: "Indian",
      Menu: [
        {
            id :1,
            menu : "Roti",
            price : "$ 50"
        },
        {
          id :2,
          menu : "Roti",
          price : "$ 50"
        },
        {
          id :3,
          menu : "bhaji",
          price : "$ 50"
        }
      ]
    },
    {
      id:3,
      name: "Sushi Zen",
      address: "789 Oak Street, Somewhere City, USA",
      description: "Immerse yourself in the art of sushi at Sushi Zen, where pristine seafood meets expert craftsmanship. Our traditional Japanese dishes are meticulously prepared to highlight the natural flavors of each ingredient. Whether you're a sushi aficionado or a first-time visitor, every visit promises a taste of Japan's culinary heritage.",
      hours: "5:00 PM - 10:30 PM",
      cuisine: "Japanese",
      Menu: [
        {
            id :1,
            menu : "Roti",
            price : "$ 50"
        },
        {
          id :2,
          menu : "Roti",
          price : "$ 50"
        },
        {
          id :3,
          menu : "bhaji",
          price : "$ 50"
        }
      ]
    },
    {
      id:4,
      name: "Mediterranean Breeze",
      address: "321 Pine Avenue, Anytown, USA",
      description: "Escape to the Mediterranean at Mediterranean Breeze, where the sun-drenched flavors of Greece, Italy, and Spain come together. From fresh seafood to hearty salads, our menu celebrates the region's bounty with every dish. Whether dining indoors or on our charming patio, expect a warm welcome and a memorable culinary experience.",
      hours: "11:30 AM - 9:00 PM",
      cuisine: "Mediterranean",
      Menu: [
        {
            id :1,
            menu : "Roti",
            price : "$ 50"
        },
        {
          id :2,
          menu : "Roti",
          price : "$ 50"
        },
        {
          id :3,
          menu : "bhaji",
          price : "$ 50"
        }
      ]
    },
    {
      id:5,
      name: "Taco Libre",
      address: "555 Maple Road, Townsville, USA",
      description: "Celebrate the vibrant flavors of Mexico at Taco Libre, where every taco tells a tale of tradition and spice. From street-style tacos to sizzling fajitas, our menu is a fiesta of authentic Mexican cuisine. Whether you're here for lunch with friends or a late-night bite, prepare for a flavor-packed journey south of the border.",
      hours: "11:00 AM - 9:30 PM",
      cuisine: "Mexican",
      Menu: [
        {
            id :1,
            menu : "Roti",
            price : "$ 50"
        },
        {
          id :2,
          menu : "Roti",
          price : "$ 50"
        },
        {
          id :3,
          menu : "bhaji",
          price : "$ 50"
        }
      ]
    },
    {
      id:6,
      name: "Pasta Passion",
      address: "222 Cedar Lane, Anytown, USA",
      description: "Indulge in the flavors of Italy at Pasta Passion, where pasta is not just a dish but a passion. From handmade pastas to wood-fired pizzas, our menu captures the essence of Italian culinary traditions. Whether you're sharing a romantic dinner or a family meal, every bite is a taste of la dolce vita.",
      hours: "12:00 PM - 10:00 PM",
      cuisine: "Italian",
      Menu: [
        {
            id :1,
            menu : "Roti",
            price : "$ 50"
        },
        {
          id :2,
          menu : "Roti",
          price : "$ 50"
        },
        {
          id :3,
          menu : "bhaji",
          price : "$ 50"
        }
      ]
    },
    {
      id:7,
      name: "Thai Orchid",
      address: "777 Willow Drive, Otherville, USA",
      description: "Experience the exotic flavors of Thailand at Thai Orchid, where traditional recipes and aromatic herbs come together in harmony. From spicy curries to fragrant stir-fries, our menu offers a journey through Thailand's diverse culinary landscape. Whether dining in our serene ambiance or ordering takeout, every meal is a taste of Southeast Asia.",
      hours: "12:00 PM - 10:30 PM",
      cuisine: "Thai",
      Menu: [
        {
            id :1,
            menu : "Roti",
            price : "$ 50"
        },
        {
          id :2,
          menu : "Roti",
          price : "$ 50"
        },
        {
          id :3,
          menu : "bhaji",
          price : "$ 50"
        }
      ]
    },
    {
      id:8,
      name: "Burger Haven",
      address: "888 Birch Street, Somewhere City, USA",
      description: "Savor the classic flavors of America at Burger Haven, where juicy burgers and crispy fries reign supreme. From our signature cheeseburgers to loaded fries, each dish is crafted with care and served in a welcoming diner atmosphere. Whether you're craving a quick bite or a hearty meal, Burger Haven is your go-to spot for American comfort food.",
      hours: "11:00 AM - 11:00 PM",
      cuisine: "American",
      Menu: [
        {
            id :1,
            menu : "Roti",
            price : "$ 50"
        },
        {
          id :2,
          menu : "Roti",
          price : "$ 50"
        },
        {
          id :3,
          menu : "bhaji",
          price : "$ 50"
        }
      ]
    },
    {
      id:9,
      name: "Szechuan Palace",
      address: "999 Oak Avenue, Townsville, USA",
      description: "Embark on a culinary adventure through China at Szechuan Palace, where bold flavors and authentic Szechuan dishes await. From spicy mapo tofu to savory dumplings, our menu showcases the diverse flavors of Szechuan cuisine. Whether dining with family or friends, every visit promises a taste of China's rich culinary heritage.",
      hours: "12:00 PM - 10:00 PM",
      cuisine: "Chinese",
      Menu: [
        {
            id :1,
            menu : "Roti",
            price : "$ 50"
        },
        {
          id :2,
          menu : "Roti",
          price : "$ 50"
        },
        {
          id :3,
          menu : "bhaji",
          price : "$ 50"
        }
      ]
    }
  ];

  private restaurantListObs = new BehaviorSubject<any>([]);
  restaurantList = this.restaurantListObs.asObservable();
  

  getRestaurants()
  {
    this.restaurantListObs.next(this.restaurants);
    this.restaurantlength = this.restaurants.length;
  }

  addRestaurant(newObject)
  {
                
      this.restaurants.push(newObject); 
      console.log("new added " , this.restaurants);
      console.log("newsize " , this.restaurants.length);
    this.getRestaurants();
  }

  updateRestaurant(newObject)
  {
    console.log("new added " , newObject);
    let objIndex = this.restaurants.findIndex(obj => obj.id == newObject.id);
    this.restaurants[objIndex] = newObject;
    console.log("new added " , this.restaurants);
    console.log("newsize " , this.restaurants.length);
    this.getRestaurants();

  }

  deleteRestaurant(restaurant)
  {
     this.restaurants = this.restaurants.filter(x=>x.name!== restaurant.name);
     console.log("new " , this.restaurants);
     this.getRestaurants();
     return("res deleted succefully");
  
  }


}
