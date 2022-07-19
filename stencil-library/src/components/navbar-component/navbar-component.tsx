import {Component, h, Prop} from '@stencil/core';
import "../navbar-item/navbar-item";
import "../link-component/link-component"
import "../sidebar-button/sidebar-button"


@Component({
  tag: 'navbar-component',
  styleUrl: 'navbar-component.css',
  shadow: true,
})
export class NavbarComponent {
  @Prop() home: string
  @Prop() items: { name: string, goto: string }[]
  @Prop() styles: { [key: string]: string }
  @Prop() sidebarIconSize = "1"

  render() {
    return (
      <nav class="navbar" style={this.styles}>
        <div class="nav-center">
          <div class="nav-header">
            <sidebar-button iconSize={this.sidebarIconSize}/>
            <link-component href="/" name={this.home}/>
          </div>
          <ul class="nav-links">
            {this.items.map(({name, goto}) => <navbar-item name={name} goto={goto}/>)}
          </ul>
        </div>
      </nav>
    );
  }
}
