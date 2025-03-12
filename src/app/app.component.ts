import { Component, inject } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { HeaderComponent } from './components/header/header.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import {BreakpointObserver, Breakpoints, LayoutModule} from '@angular/cdk/layout';


@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    MatButtonModule,
    HeaderComponent,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    LayoutModule,
    RouterLink
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'admin-dashboard';
  isSidebarOpen = true;
  breakpointObserver = inject(BreakpointObserver)

ngOnInit(){
  this.breakpointObserver.observe([Breakpoints.XSmall,Breakpoints.Small])
  .subscribe(result=>{
     if(this.breakpointObserver.isMatched([Breakpoints.XSmall,Breakpoints.Small])){
           this.isSidebarOpen = false
     }else{
      this.isSidebarOpen = true;
     }
  })
}
}
