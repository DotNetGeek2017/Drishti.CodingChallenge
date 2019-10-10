import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SharedModule } from "../shared/shared.module";

import { HeaderComponent } from "./header/header.component";
import { MenuListComponent } from "./menu/menu-list/menu-list.component";
import { MenuItemComponent } from "./menu/menu-item/menu-item.component";
import { ShellComponent } from "./shell/shell.component";

import { CookieService } from "ngx-cookie-service";

import { AppRoutingModule } from "../app.routing";
import { FooterComponent } from "./footer/footer.component";

@NgModule({
  imports: [CommonModule, SharedModule.forRoot(), AppRoutingModule],
  declarations: [
    HeaderComponent,
    ShellComponent,
    MenuListComponent,
    MenuItemComponent,
    FooterComponent
  ],
  exports: [
    HeaderComponent,
    MenuListComponent,
    ShellComponent,
    MenuItemComponent
  ],
  providers: [CookieService]
})
export class CoreModule {}
