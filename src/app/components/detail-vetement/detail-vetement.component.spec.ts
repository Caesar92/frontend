import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailVetementComponent } from './detail-vetement.component';

describe('DetailVetementComponent', () => {
  let component: DetailVetementComponent;
  let fixture: ComponentFixture<DetailVetementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailVetementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailVetementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
