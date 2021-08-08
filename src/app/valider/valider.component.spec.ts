import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValiderComponent } from './valider.component';

describe('ValiderComponent', () => {
  let component: ValiderComponent;
  let fixture: ComponentFixture<ValiderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ValiderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ValiderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
