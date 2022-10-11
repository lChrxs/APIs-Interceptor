import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, RequiredValidator, Validators } from '@angular/forms';
import { ApiService } from '../../services/api.service';
import StorageHelper from '../../libs/helpers/storage.helper';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup

  constructor(
    private apiS: ApiService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      username: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required)
    })
  }

  onSubmit(){
    if(this.loginForm.valid){
      this.apiS.login(this.loginForm.value).subscribe({
        next: (res => {
          StorageHelper.setItem('session', res)
          this.router.navigate(['rickAndMorty'])
        })
      })
    
    }else {
      console.error('Formulario invalido', this.loginForm.errors);
    }
  }

}
