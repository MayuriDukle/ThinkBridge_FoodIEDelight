import { Component } from '@angular/core';
import { RestaurantService } from './Services/restaurant.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'fooddelight';
  restaurants: any[] = [];
  openPopup : any = false;
  restaurant : any 
  address : any
  details : any
  cuisine : any
  add : any = 'Add'
  constructor(private restaurantService: RestaurantService) {}

  ngOnInit() {


    this.restaurantService.getRestaurants();
    this.restaurantService.restaurantList.subscribe(
      (data) => {
        this.restaurants = data;
      },
      (error) => {
        console.error('Error fetching restaurants:', error);
      }
    );
    console.log(this.restaurants);
  }
  
  addRestaurant()
  {
    const newObject = {
      name: this.restaurant,
      address: this.address,
      description: this.details,
      hours: "12:00 PM - 10:00 PM",
      cuisine: this.cuisine
    }
    console.log(newObject);
    this.restaurantService.addRestaurant(newObject);

    this.restaurant = "";
    this.address = "";
    this.details = "";
    this.cuisine = "";

  }

  receiveMessage(message: boolean) {
    this.openPopup = message;
  }
 
}
