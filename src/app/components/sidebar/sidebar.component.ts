import { Component, OnInit } from '@angular/core';

declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/home', title: 'หน้าหลัก',  icon: 'arrows-1_cloud-download-93', class: '' },
    { path: '/management-services', title: 'จัดการงานบริการ',  icon:'arrows-1_cloud-download-93', class: '' },
    { path: '/history', title: 'ประวัติการทำรายการ',  icon:'arrows-1_cloud-download-93', class: '' },
    { path: '/user-srevice', title: 'ข้อมูลผู้ให้บริการ',  icon:'arrows-1_cloud-download-93', class: '' },
    { path: '/user-profile', title: 'รายงานข้อมูลสมาชิก',  icon:'arrows-1_cloud-download-93', class: '' },

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
