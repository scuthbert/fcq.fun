import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { FCQPageComponent } from "./fcqpage.component";

describe("FCQPageComponent", () => {
  let component: FCQPageComponent;
  let fixture: ComponentFixture<FCQPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FCQPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FCQPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
