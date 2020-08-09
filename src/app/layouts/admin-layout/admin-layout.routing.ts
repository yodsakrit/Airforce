import { Routes } from '@angular/router';

import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { TableListComponent } from '../../management-services/table-list.component';
import { TypographyComponent } from '../../history/typography.component';
import { IconsComponent } from '../../user-srevice/icons.component';
import { MapsComponent } from '../../maps/maps.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { UpgradeComponent } from '../../upgrade/upgrade.component';
import { HomeComponent } from '../../home/home.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'home',      component: HomeComponent },
    { path: 'management-services',     component: TableListComponent },
    { path: 'history',     component: TypographyComponent },
    { path: 'user-srevice',          component: IconsComponent },
    { path: 'user-profile',   component: UserProfileComponent },

];
