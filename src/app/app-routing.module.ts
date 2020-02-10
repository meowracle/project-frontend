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
import {ListCommentComponent} from './component/comments/comment-list/list-comment.component';
import {CreateCommentComponent} from './component/comments/comment-create/create-comment.component';
import {EditCommentComponent} from './component/comments/comment-edit/edit-comment.component';
import {PostEditComponent} from './component/post/post-edit/post-edit.component';
import {PostDeleteComponent} from './component/post/post-delete/post-delete.component';
import {PostHomeComponent} from './post-home/post-home.component';
import {SearchPostInfoComponent} from './component/post/search-post-info/search-post-info.component';
import {ChangePasswordComponent} from './password/change-password/change-password.component';

const routes: Routes = [
  // {path: '', redirectTo: '', pathMatch: 'full'},
  {path: '', component: HomeComponent},
  {path: 'home', component: PostHomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'user', component: BoardUserComponent},
  {path: 'mod', component: BoardModeratorComponent},
  {path: 'admin', component: BoardAdminComponent},
  {path: 'post-list', component: PostListComponent},
  {path: 'post-detail/:id', component: PostDetailComponent},
  {path: 'post-edit/:id', component: PostEditComponent},
  {path: 'post-create', component: PostCreateComponent},
  {path: 'comment-list', component: ListCommentComponent},
  {path: 'comment-create', component: CreateCommentComponent},
  {path: 'comment-edit/:id', component: EditCommentComponent},
  {path: 'search-post-info/:tittle', component: SearchPostInfoComponent},
  {path: 'change-pass', component: ChangePasswordComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
