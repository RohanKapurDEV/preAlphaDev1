import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DevRoomPage } from './dev-room.page';

describe('DevRoomPage', () => {
  let component: DevRoomPage;
  let fixture: ComponentFixture<DevRoomPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DevRoomPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DevRoomPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
