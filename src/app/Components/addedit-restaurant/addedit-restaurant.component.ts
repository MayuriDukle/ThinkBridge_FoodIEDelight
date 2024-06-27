import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RestaurantService } from '../../Services/restaurant.service';

@Component({
  selector: 'app-addedit-restaurant',
  templateUrl: './addedit-restaurant.component.html',
  styleUrl: './addedit-restaurant.component.css'
})
export class AddeditRestaurantComponent {

  @Input() type : any;
  @Input() res : any;

  @Output() messageEvent = new EventEmitter<boolean>();

  openPopup : any = false;
  restaurant : any 
  address : any
  details : any
  cuisine : any
  error : any = false;
  menuarray : any = [{
    id : 1,
    menu : "",
    price : ""
  }]
  
  constructor(private restaurantService: RestaurantService)
  {

  }

  ngOnInit()
  {
      if(this.type == "Edit")
        {
          this.restaurant = this.res.name;
          this.address = this.res.address;
          this.details = this.res.description;
          this.cuisine = this.res.cuisine;
          this.menuarray = this.res.Menu
        }
        else
        {
          this.restaurant = "";
          this.address = "";
          this.details = "";
          this.cuisine = "";
        }
  }

  addRestaurant()
  {

    if(this.restaurant == "" || this.address == "" || this.details== "" || this.cuisine== "")
      {
        this.error = true;
      }
    else
    {
    const newObject = {
          id:this.restaurantService.restaurantlength + 1,
          name: this.restaurant,
          address: this.address,
          description: this.details,
          hours: "12:00 PM - 10:00 PM",
          cuisine: this.cuisine,
          Menu : this.menuarray
        }
        console.log(newObject);
      
        this.restaurantService.addRestaurant(newObject);
        
        this.openPopup = false;
        this.messageEvent.emit(this.openPopup);
    }
         
    

  }

  updateRestaurant()
  {
    const newObject = {
      id:this.res.id,
      name: this.restaurant,
      address: this.address,
      description: this.details,
      hours: "12:00 PM - 10:00 PM",
      cuisine: this.cuisine
    }
    this.restaurantService.updateRestaurant(newObject);
    this.openPopup = false;
    this.messageEvent.emit(this.openPopup);
  }

  addMenu()
  {
     const obj = {
      id : this.menuarray.length + 1 ,
      menu : "",
      price : ""
     }
     this.menuarray.push(obj);
     console.log(this.menuarray);
  }

  SaveMenu(menu,price,i)
  {
    this.menuarray[i] = {
      id : i,
      menu : menu,
      price : price
    }
    console.log(this.menuarray);
  }

  deleteMenu(menu)
  {
    console.log(menu);
    const result = this.menuarray.filter(i=>i.id!== menu.id);
    console.log(result);
    this.menuarray = result;
  }

  Fillvalue(menu,price,id , Data )
  {
    console.log("id",id);
    this.menuarray[id] = 
    {
      id : id,
      menu : menu,
      price : price
    }
   
    console.log("eeeeee");
    console.log("Menu array",this.menuarray);

  }
}
