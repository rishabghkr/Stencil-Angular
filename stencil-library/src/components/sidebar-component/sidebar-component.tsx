import {Component, h, Prop} from '@stencil/core';

@Component({
  tag: 'sidebar-component',
  styleUrl: 'sidebar-component.css',
  shadow: true,
})
export class SidebarComponent {
  @Prop() styles: { [key: string]: string }
  @Prop() items: { name: string, goto: string }[]

  render() {
    return (
      <aside class="side-show" style={this.styles}>
        <div class="sidebar-container">
          <ul class="sidebar-links">
            {this.items.map(({name, goto}) => <navbar-item name={name} goto={goto}/>)}
          </ul>
        </div>
      </aside>

    )
  }
}
