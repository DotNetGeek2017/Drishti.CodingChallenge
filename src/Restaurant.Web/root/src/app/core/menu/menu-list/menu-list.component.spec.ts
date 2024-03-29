import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { MenuListComponent } from "./menu-list.component";

describe("MenuComponent", () => {
  let component: MenuListComponent;
  let fixture: ComponentFixture<MenuListComponent>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [MenuListComponent]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should be created", () => {
    expect(component).toBeTruthy();
  });
});
