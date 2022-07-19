import {Component, h, Prop} from '@stencil/core';

@Component({
  tag: 'sidebar-icon',
  shadow: true,
})
export class SidebarIcon {
  @Prop() iconSize = "1";
  height: string;
  width: string;
  sizeChart = {
    "1": {height: "8", width: "10"},
    "2": {height: "16", width: "20"},
    "3": {height: "24", width: "30"},
    "4": {height: "32", width: "40"},
    "5": {height: "40", width: "50"},
  }

  componentWillLoad() {
    const {height, width} = this.sizeChart[this.iconSize]
    this.height = height;
    this.width = width
  }

  render() {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" width={this.width} height={this.height} viewBox="0 0 10 8">
        <g id="TripleGripper">
          <rect id="Frame" width="10" height="8" fill="red" opacity="0"/>
          <path d="M9.4502,1H.5498a.5.5,0,0,1,0-1H9.4502a.5.5,0,0,1,0,1Z"/>
          <path d="M9.4502,4H.5498a.5.5,0,0,1,0-1H9.4502a.5.5,0,0,1,0,1Z"/>
          <path d="M9.4502,7H.5498a.5.5,0,0,1,0-1H9.4502a.5.5,0,0,1,0,1Z"/>
        </g>
      </svg>
    );
  }
}
