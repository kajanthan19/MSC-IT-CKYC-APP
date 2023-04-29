import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs';
import { ConfirmPasswordValidator } from 'src/app/helpers/confirm-password.validator';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'kyc-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loading = false;
  submitted = false;
  form: FormGroup;
  isPasswordChange: boolean = false;
  constructor(private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router, private authservice: AuthService) { 
      this.form = formBuilder.group({
        email: new FormControl('', Validators.required),
        password: new FormControl('', Validators.required),
        newpassword: new FormControl(''),
        confirmpassword: new FormControl(''),
      }, { validators: ConfirmPasswordValidator("newpassword", "confirmpassword") }); 
    }

  ngOnInit(): void {
    if(this.authservice.isAuthenticated()){
      this.router.navigate(['/home']);
    }
  }

  checkPasswords: ValidatorFn = (group: AbstractControl):  ValidationErrors | null => { 
    let pass = this.f['newpassword'].value;
    let confirmPass = this.f['confirmpassword'].value
    return pass === confirmPass ? null : { notSame: true }
  }

  get f() { return this.form.controls; }

  onSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.form.invalid) {
        return;
    }

    if(!this.isPasswordChange){
      this.loading = true;
      this.authservice.token(this.f['email'].value, this.f['password'].value)
          // .pipe(first()) 
          .subscribe({
              next: () => {
                 this.loading = false;
                  // get return url from query parameters or default to home page
                  const returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
                  this.router.navigateByUrl(returnUrl);
              },
              error: (error: { error: { errorCode: number; exception: any; }; }) => {
                if(error.error.errorCode == 307){
                  this.submitted = false;
                  this.isPasswordChange = true;
                  this.form.controls['newpassword'].setValidators([Validators.required]);
                  this.form.controls['newpassword'].updateValueAndValidity();
                  this.form.controls['confirmpassword'].setValidators([Validators.required]);
                  this.form.controls['confirmpassword'].updateValueAndValidity();
                }
                if(error.error.errorCode == 401){
                  // this.alertService.error(error.error.exception, {autoClose: true});
                }

                this.loading = false;
              }
          });
    }else{
      this.loading = true;
      this.authservice.newpassword(this.f['email'].value, this.f['password'].value, this.f['newpassword'].value)
          .pipe(first()) 
          .subscribe({
              next: () => {
                  this.loading = false;
                  // get return url from query parameters or default to home page
                  const returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
                  this.router.navigateByUrl(returnUrl);
              },
              error: (error: any) => {
                  this.loading = false;
                  // this.alertService.error(error.error.exception, {autoClose: true});
              }
          });
    }

}
}
