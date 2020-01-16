import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {LoginComponent} from './user/login/login.component';
import {RegisterComponent} from './user/register/register.component';
import {BoardAdminComponent} from './user/board-admin/board-admin.component';
import {HomeComponent} from './user/home/home.component';
import {BoardUserComponent} from './user/board-user/board-user.component';
import {BoardModeratorComponent} from './user/board-moderator/board-moderator.component';
import {ProfileComponent} from './user/profile/profile.component';
import {AppRoutingModule} from './app-routing.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {authInterceptorProviders} from './user/_helpers/auth.interceptor';
import { PostCreateComponent } from './component/post/post-create/post-create.component';
import { PostListComponent } from './component/post/post-list/post-list.component';
import { PostDetailComponent } from './component/post/post-detail/post-detail.component';
import { ListCommentComponent } from './component/comments/list-comment/list-comment.component';
import {CreateCommentComponent} from './component/comments/create-comment/create-comment.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    BoardAdminComponent,
    BoardUserComponent,
    BoardModeratorComponent,
    ProfileComponent,
    PostCreateComponent,
    PostListComponent,
    PostDetailComponent,
    ListCommentComponent,
    CreateCommentComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        HttpClientModule,
        ReactiveFormsModule
    ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
