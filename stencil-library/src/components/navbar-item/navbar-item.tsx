import {Component, h, Prop} from "@stencil/core";
import "../link-component/link-component"

@Component({
  tag: 'navbar-item',
  styleUrl: 'navbar-item.css',
  shadow: true,
})
export class NavbarItem {
  @Prop() goto: string
  @Prop() name: string

  render() {
    return (
      <li class="navbar-item">
        <link-component href={this.goto} name={this.name}/>
      </li>
    );
  }
}
