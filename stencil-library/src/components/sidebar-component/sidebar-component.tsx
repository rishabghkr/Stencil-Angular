import {Component, h, Prop, State} from '@stencil/core';

@Component({
  tag: 'sidebar-component',
  styleUrl: 'sidebar-component.css',
  shadow: true,
})
export class SidebarComponent {
  @State() isOpen = true;
  @Prop() items: { name: string, goto: string }[]

  handleOnClick() {
    this.isOpen = !this.isOpen
  }

  render() {
    return (
      <aside class="side-show">
        <div class="sidebar-container">
          <ul class="sidebar-links">
            {this.items.map(({name, goto}) => <navbar-item name={name} goto={goto}/>)}
          </ul>
        </div>
      </aside>

    )
  }
}
