import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoueurComponent } from './loueur.component';

describe('LoueurComponent', () => {
  let component: LoueurComponent;
  let fixture: ComponentFixture<LoueurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoueurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoueurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
