import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpClientPage } from './http-client.page';

describe('HttpClientPage', () => {
  let component: HttpClientPage;
  let fixture: ComponentFixture<HttpClientPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HttpClientPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HttpClientPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
