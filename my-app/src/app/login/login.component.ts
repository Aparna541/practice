import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { AppService } from '../app.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;
  subscription: any;
  constructor(private formBuilder: FormBuilder,public httpClient: HttpClient, 
    public router: Router, public route: ActivatedRoute,
    public appService: AppService) { }

  ngOnInit() {

    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

   // convenience getter for easy access to form fields
   get f() { return this.loginForm.controls; }

   onSubmit() {
       this.submitted = true;

       // stop here if form is invalid
       if (this.loginForm.invalid) {
           return;
       }

       this.loading = true;
       this.subscription = this.httpClient.get(this.appService.appURL+'login').subscribe((response: any) => {
        debugger; 
        console.log('login');
        if (response.userName === this.loginForm.controls.username.value && response.password === this.loginForm.controls.password.value) {
          this.router.navigate(['/home'], {relativeTo: this.route, skipLocationChange: false});
          this.appService.loginToken = response.token;
          sessionStorage.setItem('key',response.token);
        } else {
          alert("Invalid user credentials");
        } 

        this.loading = false;

       });
      
   }

  ngOnDestroy () {
    this.subscription.unsubscribe();
  }

}
