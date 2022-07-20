import {Component, HostListener} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Dream Lands';
  navbarItems = [
    {goto: "/", name: "All Places"},
    {goto: "/asia", name: "Asia"},
    {goto: "/europe", name: "Europe"},
    {goto: "/north-america", name: "North America"},
    {goto: "/south-america", name: "South America"},
  ];
  navbarStyles = {
    background: "#60caed",
    padding: 0,
    margin: 0,
    "font-family": "monospace",
    "font-size": "16px",

  }
  sidebarItems = [
    {goto: "/", name: "Places"},
    {goto: "/tools", name: "Tools"},
    {goto: "/heroes", name: "Heroes"}
  ]
  sidebarStyles = {
    background: "#048ab2",
    color: "cornslik",
    "font-family": "monospace",
    "font-size": "16px",
  }

  @HostListener('isOpenEvent')
  handleSidebarSwitch(event: boolean) {
    console.log("sidebar event is", event)
  }
}
