import { Component, OnInit } from '@angular/core';

declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/home', title: 'หน้าหลัก',  icon: 'design_app', class: '' },
    { path: '/management-services', title: 'จัดการงานบริการ',  icon:'education_atom', class: '' },
    { path: '/history', title: 'ประวัติการทำรายการ',  icon:'location_map-big', class: '' },
    { path: '/user-srevice', title: 'ข้อมูลผู้ให้บริการ',  icon:'ui-1_bell-53', class: '' },

    { path: '/user-profile', title: 'รายงานข้อมูลสมาชิก',  icon:'users_single-02', class: '' },

];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
      if ( window.innerWidth > 991) {
          return false;
      }
      return true;
  };
}
