import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Tienda } from 'src/app/models/tienda.model';
import { LoginService } from 'src/app/services/login.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public cliForm: FormGroup;
  private idcliente: number;
  public tienda = new Tienda();
  
  constructor(private loginservice: LoginService,
    private router:ActivatedRoute) { }

  ngOnInit(): void {
    this.idcliente= Number(this.router.snapshot.paramMap.get('id'))
    this.loginservice.getTiendabyId(this.idcliente).subscribe((result:any)=>{
      console.log(result.data);
      this.tienda=result.data;
    })
    }
}
