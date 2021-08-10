import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PayswitchAngularComponent } from './payswitch-angular.component';

describe('PayswitchAngularComponent', () => {
  let component: PayswitchAngularComponent;
  let fixture: ComponentFixture<PayswitchAngularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PayswitchAngularComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PayswitchAngularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
