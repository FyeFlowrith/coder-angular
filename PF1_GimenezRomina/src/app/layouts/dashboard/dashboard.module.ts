import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';

@NgModule({
  declarations: [DashboardComponent, ToolbarComponent, SidenavComponent],
  imports: [CommonModule, MatSidenavModule, MatToolbarModule, MatIconModule, MatListModule],
  exports: [DashboardComponent],
})
export class DashboardModule {}
