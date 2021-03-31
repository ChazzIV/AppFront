import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

// componentes
import { AppComponent } from './app.component';

// Servicios
import { JarwisService } from './features/auth/services/jarwis.service';
import { TokenService } from './features/auth/services/token.service';
import { AuthService } from './features/auth/services/auth.service';
import { AfterLoginService } from './shared/services/after-login.service';
import { BeforeLoginService } from './shared/services/before-login.service';

// modulos
import {SnotifyModule, SnotifyService, ToastDefaults} from 'ng-snotify';
import {SharedComponentsModule} from './shared/components/components.module';
import {AuthModule} from './features/auth/auth.module';
import {AdminModule} from './features/admin/admin.module';
import {PortalModule} from './features/portal/portal.module';
import {OrderModule} from './features/order/order.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    SnotifyModule,
    SharedComponentsModule,
    AuthModule,
    AdminModule,
    PortalModule,
    OrderModule
  ],
  providers: [JarwisService, TokenService, AuthService, AfterLoginService, BeforeLoginService,
    { provide: 'SnotifyToastConfig', useValue: ToastDefaults },
    SnotifyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
