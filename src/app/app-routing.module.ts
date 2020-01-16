import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {RegisterComponent} from './user/register/register.component';
import {LoginComponent} from './user/login/login.component';
import {HomeComponent} from './user/home/home.component';
import {ProfileComponent} from './user/profile/profile.component';
import {BoardUserComponent} from './user/board-user/board-user.component';
import {BoardModeratorComponent} from './user/board-moderator/board-moderator.component';
import {BoardAdminComponent} from './user/board-admin/board-admin.component';
import {PostCreateComponent} from './component/post/post-create/post-create.component';
import {PostListComponent} from './component/post/post-list/post-list.component';
import {PostDetailComponent} from './component/post/post-detail/post-detail.component';
import {ListCommentComponent} from './component/comments/list-comment/list-comment.component';
import {CreateCommentComponent} from './component/comments/create-comment/create-comment.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'user', component: BoardUserComponent},
  {path: 'mod', component: BoardModeratorComponent},
  {path: 'admin', component: BoardAdminComponent},
  {path: 'post-list', component: PostListComponent},
  {path: 'post-detail/:id', component: PostDetailComponent},
  {path: 'post-create', component: PostCreateComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'comments', component: ListCommentComponent},
  {path: 'create-comment', component: CreateCommentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
