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
import { ListCommentComponent } from './component/comments/comment-list/list-comment.component';
import {CreateCommentComponent} from './component/comments/comment-create/create-comment.component';
import { EditCommentComponent } from './component/comments/comment-edit/edit-comment.component';
import { PostEditComponent } from './component/post/post-edit/post-edit.component';
import { PostDeleteComponent } from './component/post/post-delete/post-delete.component';
import { DeleteCommentComponent } from './component/comments/comment-delete/delete-comment.component';
import { ChangePasswordComponent } from './password/change-password/change-password.component';
import { AppHeaderComponent } from './Theme/app-header/app-header.component';
import {ThemeComponent} from './Theme/theme/theme.component';
import { PostHomeComponent } from './post-home/post-home.component';
import { FooterComponent } from './Theme/footer/footer.component';
import { NavComponent } from './Theme/nav/nav.component';
import { FootComponent } from './Theme/foot/foot.component';
import { SearchPostComponent } from './component/post/search-post/search-post.component';
import { SearchPostInfoComponent } from './component/post/search-post-info/search-post-info.component';


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
    CreateCommentComponent,
    EditCommentComponent,
    PostDetailComponent,
    PostEditComponent,
    PostDeleteComponent,
    DeleteCommentComponent,
    ChangePasswordComponent,
    AppHeaderComponent,
    ThemeComponent,
    PostHomeComponent,
    FooterComponent,
    NavComponent,
    FootComponent,
    SearchPostComponent,
    SearchPostInfoComponent
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
