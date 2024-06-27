import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddeditRestaurantComponent } from './addedit-restaurant.component';

describe('AddeditRestaurantComponent', () => {
  let component: AddeditRestaurantComponent;
  let fixture: ComponentFixture<AddeditRestaurantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddeditRestaurantComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddeditRestaurantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
