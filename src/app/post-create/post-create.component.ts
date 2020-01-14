import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {PostService} from '../_services/post.service';
import {TokenStorageService} from '../_services/token-storage.service';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent implements OnInit {
  createForm: FormGroup;
  currentUser: any;

  constructor(
    private token: TokenStorageService,
    private postService: PostService,
    private formBuilder: FormBuilder
  ) {
  }

  ngOnInit() {
    this.currentUser = this.token.getUser();
    this.createForm = this.formBuilder.group({
      user: [''],
      title: [''],
      content: [''],
      shareStatus: ['']
    });
  }

  onSubmit() {
    const {value} = this.createForm;
    value.user = {id: this.currentUser.id};
    this.postService.createPost(value)
      .subscribe(next => {
          alert('tao post thanh cong');
          this.createForm.reset({
            user: '',
            title: '',
            content: '',
            shareStatus: ''
          });
        }, error => console.log(error)
      );
  }
}
