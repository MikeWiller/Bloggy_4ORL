import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AffiListComponent } from './affi-list.component';

describe('AffiListComponent', () => {
  let component: AffiListComponent;
  let fixture: ComponentFixture<AffiListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AffiListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AffiListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
