import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { MainComponent } from './pages/main/main.component';
import { TryComponent } from './pages/try/try.component';
import { GameComponent } from './pages/game/game.component';
import { NewsComponent } from './pages/news/news.component';
import { WhoComponent } from './pages/who/who.component';
import { PersonComponent } from './pages/person/person.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { NewComponent } from './pages/new/new.component';
import { SignInComponent } from './pages/sign-in/sign-in.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { HeaderComponent } from './sharepages/header/header.component';
import { FooterComponent } from './sharepages/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    TryComponent,
    GameComponent,
    NewsComponent,
    WhoComponent,
    PersonComponent,
    ProfileComponent,
    NewComponent,
    SignInComponent,
    SignUpComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: '', component: MainComponent},
      {path: 'try', component: TryComponent},
      {path: 'game', component: GameComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
