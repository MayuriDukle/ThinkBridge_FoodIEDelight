import { Component, Input } from '@angular/core';
import { RestaurantService } from '../../Services/restaurant.service';

@Component({
  selector: 'app-tile',
  templateUrl: './tile.component.html',
  styleUrl: './tile.component.css'
})
export class TileComponent {
@Input() restaurant : any;
editdetails : any = false;
edit : any = "Edit"
menuflag : any = false


constructor(private restaurantService: RestaurantService){}

ngOnInit()
{

}

deleteRestaurant()
{
  let result = this.restaurantService.deleteRestaurant(this.restaurant);
  
}
edit_details()
{
  
}
receiveMessage(message: boolean) {
  this.editdetails = message;
}

receiveobj(message : any)
{
this.restaurant = message;
}

displayMenu()
{

}

}
