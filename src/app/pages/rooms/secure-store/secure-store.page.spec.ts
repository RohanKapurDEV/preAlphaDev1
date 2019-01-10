import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecureStorePage } from './secure-store.page';

describe('SecureStorePage', () => {
  let component: SecureStorePage;
  let fixture: ComponentFixture<SecureStorePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecureStorePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecureStorePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
