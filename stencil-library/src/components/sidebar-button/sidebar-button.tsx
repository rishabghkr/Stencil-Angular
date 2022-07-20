import {Component, Event, EventEmitter, h, Prop, State} from '@stencil/core';
import "../sidebar-icon/sidebar-icon"

@Component({
  tag: 'sidebar-button',
  styleUrl: 'sidebar-button.css',
  shadow: true,
})
export class SidebarButton {
  @Prop() iconSize = "1";
  @State() isOpen = false;
  @Event({
    bubbles: true,
    composed:true
  }) isOpenEvent: EventEmitter<boolean>

  handleOnClick() {
    this.isOpen = !this.isOpen
    this.isOpenEvent.emit(this.isOpen)
  }

  render() {
    return (
      <button onClick={() => this.handleOnClick()}>
        <sidebar-icon iconSize={this.iconSize}/>
      </button>
    );
  }
}
