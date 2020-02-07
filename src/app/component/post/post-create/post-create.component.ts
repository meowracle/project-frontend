import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {PostService} from '../../../user/_services/post.service';
import {TokenStorageService} from '../../../user/_services/token-storage.service';
import {Post} from '../../../interfaces/post';
import {PictureService} from '../picture.service';
import {Router} from '@angular/router';
import {AppComponent} from '../../../app.component';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent implements OnInit {
  createForm: FormGroup;
  currentUser: any;
  usedPictureFiles: any[];
  previewUrl: any[];
  pictures: any[];
  post: Post;

  constructor(
    private token: TokenStorageService,
    private postService: PostService,
    private formBuilder: FormBuilder,
    private pictureService: PictureService,
    private router: Router,
    private appComponent: AppComponent
  ) {
  }

  ngOnInit() {
    this.currentUser = this.token.getUser();
    this.createForm = this.formBuilder.group({
      id: '',
      user: [''],
      title: ['', [Validators.required, Validators.minLength(1)]],
      content: ['', [Validators.required, Validators.minLength(6)]],
      shareStatus: [''],
      video: ['']
    });
    this.usedPictureFiles = [];
    this.previewUrl = [];
    this.pictures = [];
  }

  onSubmit() {
    const {value} = this.createForm;
    value.user = {id: this.currentUser.id};
    this.post = value;
    for (const preview of this.previewUrl) {
      this.pictures.push({
        id: '',
        src: preview
      });
    }
    this.createPost();
    // code cu~
    /*this.postService.createPost(value)
      .subscribe(next => {
          alert('tao post thanh cong');
          this.createForm.reset({
            user: '',
            title: '',
            content: '',
            shareStatus: ''
          });
        }, error => console.log(error)
      );*/
  }

  onSelectFile(event) {
    this.usedPictureFiles = [];
    this.usedPictureFiles = event.srcElement.files;
    console.log(this.usedPictureFiles);
    this.preview();
  }

  createPost() {
    this.post.pictures = this.pictures;
    this.postService.createPost(this.post)
      .subscribe(next => {
        alert('tao post thanh cong');
        this.ngOnInit();
      });
  }

  preview() {
    for (let i = 0; i < this.usedPictureFiles.length; i++) {
      const myType = this.usedPictureFiles[i].type;
      if (myType.match(/image\/*/) == null) {
        return;
      }

      const reader = new FileReader();
      reader.readAsDataURL(this.usedPictureFiles[i]);
      reader.onload = event => {
        if (typeof reader.result === 'string') {
          this.previewUrl[i] = reader.result;
        }
      };
    }
    console.log(this.previewUrl);
  }
}
