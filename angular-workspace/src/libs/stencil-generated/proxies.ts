/* tslint:disable */
/* auto-generated angular directive proxies */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, NgZone } from '@angular/core';
import { ProxyCmp, proxyOutputs } from './angular-component-lib/utils';

import { Components } from '@stencil-library/dist/components';




export declare interface LinkComponent extends Components.LinkComponent {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['href', 'name']
})
@Component({
  selector: 'link-component',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['href', 'name']
})
export class LinkComponent {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface NavbarComponent extends Components.NavbarComponent {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['home', 'items', 'sidebarIconSize', 'styles']
})
@Component({
  selector: 'navbar-component',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['home', 'items', 'sidebarIconSize', 'styles']
})
export class NavbarComponent {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface NavbarItem extends Components.NavbarItem {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['goto', 'name']
})
@Component({
  selector: 'navbar-item',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['goto', 'name']
})
export class NavbarItem {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface SidebarButton extends Components.SidebarButton {
  /**
   *  
   */
  isOpenEvent: EventEmitter<CustomEvent<boolean>>;

}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['iconSize']
})
@Component({
  selector: 'sidebar-button',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['iconSize']
})
export class SidebarButton {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['isOpenEvent']);
  }
}


export declare interface SidebarComponent extends Components.SidebarComponent {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['items', 'styles']
})
@Component({
  selector: 'sidebar-component',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['items', 'styles']
})
export class SidebarComponent {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface SidebarIcon extends Components.SidebarIcon {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['iconSize']
})
@Component({
  selector: 'sidebar-icon',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['iconSize']
})
export class SidebarIcon {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}
