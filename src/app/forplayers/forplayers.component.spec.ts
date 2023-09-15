import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForplayersComponent } from './forplayers.component';

describe('ForplayersComponent', () => {
  let component: ForplayersComponent;
  let fixture: ComponentFixture<ForplayersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForplayersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ForplayersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
