import {Component} from '@angular/core';
import "stencil-library/dist/components/navbar-component";

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
    background: "#00c1ff",
    padding: 0,
    margin: 0,
    "font-family": "monospace",
    "z-index": 9999
  }
  sidebarItems = [
    {goto: "/", name: "Places"},
    {goto: "/tools", name: "Tools"},
    {goto: "/heroes", name: "Heroes"}
  ]
}
