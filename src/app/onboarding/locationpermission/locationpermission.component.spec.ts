import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationpermissionComponent } from './locationpermission.component';

describe('LocationpermissionComponent', () => {
  let component: LocationpermissionComponent;
  let fixture: ComponentFixture<LocationpermissionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LocationpermissionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LocationpermissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
