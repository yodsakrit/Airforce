import { Component, OnInit } from '@angular/core';

declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/home', title: 'หน้าหลัก',  icon: 'fas fa-clock', class: '' },
    { path: '/management-services', title: 'จัดการงานบริการ',  icon:'fas fa-star', class: '' },
    { path: '/history', title: 'ประวัติการทำรายการ',  icon:'fas fa-file-alt', class: '' },
    { path: '/user-srevice', title: 'ข้อมูลผู้ให้บริการ',  icon:'', class: '' },

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
