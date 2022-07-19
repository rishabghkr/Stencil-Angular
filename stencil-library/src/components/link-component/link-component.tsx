import {Component, h, Prop} from '@stencil/core';

@Component({
  tag: 'link-component',
  styleUrl: 'link-component.css',
  shadow: true,
})
export class LinkComponent {
  @Prop() href: string;
  @Prop() name: string;

  render() {
    return (
      <a href={this.href}>{this.name}</a>
    );
  }
}
