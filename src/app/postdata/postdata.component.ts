import { Component, OnInit } from '@angular/core';
import { UserServicesService } from '../user-services.service';
import { Router } from '@angular/router';
import { PostData } from './post-data';
@Component({
  selector: 'app-postdata',
  templateUrl: './postdata.component.html',
  styleUrls: ['./postdata.component.css']
})
export class PostdataComponent implements OnInit {
  PostData = new PostData('', '');
  public errorMessage = '';
  public ifError = false;
  constructor(private _register:UserServicesService, private router:Router) { }

  ngOnInit() {
  }
  onSubmit() {
    console.log(this.PostData);
    this._register.postContent(this.PostData)
    .subscribe(
      data => {
        console.log('Success!', data)
      },
      error => {
        console.log(error);
        this.ifError = true;
        this.errorMessage = error.error;
      }
    )

  }
}
