import {defineCustomElements} from "@stencil-library/loader"
import {NgModule} from "@angular/core";
import {
  LinkComponent,
  NavbarComponent,
  NavbarItem,
  SidebarButton,
  SidebarComponent,
  SidebarIcon
} from "./stencil-generated/proxies";

defineCustomElements(window)

@NgModule({
  declarations: [NavbarComponent, LinkComponent, NavbarItem, SidebarButton, SidebarComponent, SidebarIcon],
  exports: [NavbarComponent, SidebarComponent],
})
export class StencilComponentsModule {
}

