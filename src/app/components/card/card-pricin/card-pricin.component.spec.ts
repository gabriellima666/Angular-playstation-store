import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardPricinComponent } from './card-pricin.component';

describe('CardPricinComponent', () => {
  let component: CardPricinComponent;
  let fixture: ComponentFixture<CardPricinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardPricinComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardPricinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
