import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GravadoraComponent } from './gravadora.component';

describe('GravadoraComponent', () => {
  let component: GravadoraComponent;
  let fixture: ComponentFixture<GravadoraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GravadoraComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GravadoraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
