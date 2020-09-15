import { Component, OnInit } from '@angular/core'

declare interface RouteInfo {
  path: string
  title: string
  icon: string
  iconClick: string
  class: string
}
export const ROUTES: RouteInfo[] = [
  {
    path: '/home',
    title: 'หน้าหลัก',
    icon: 'assets/img/icon-home.png',
    iconClick: 'assets/img/icon-home-click.png',
    class: '',
  },
  {
    path: '/management-services',
    title: 'จัดการงานบริการ',
    icon: 'assets/img/icon-star.png',
    iconClick: 'assets/img/icon-star-click.png',
    class: '',
  },
  {
    path: '/history',
    title: 'ประวัติการทำรายการ',
    icon: 'assets/img/icon-history.png',
    iconClick: 'assets/img/icon-history-click.png',
    class: '',
  },
  {
    path: '/user-srevice',
    title: 'ข้อมูลผู้ให้บริการ',
    icon: 'assets/img/icon-info.png',
    iconClick: 'assets/img/icon-info-click.png',
    class: '',
  },
  {
    path: '/user-profile',
    title: 'รายงานข้อมูลสมาชิก',
    icon: 'assets/img/icon-report.png',
    iconClick: 'assets/img/icon-report-click.png',
    class: '',
  },
]

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent implements OnInit {
  menuItems: any[]

  constructor() {}

  ngOnInit() {
    this.menuItems = ROUTES.filter((menuItem) => menuItem)
  }
  isMobileMenu() {
    if (window.innerWidth > 991) {
      return false
    }
    return true
  }
}
