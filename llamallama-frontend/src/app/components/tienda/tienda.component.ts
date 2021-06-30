import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Tienda } from 'src/app/models/tienda.model';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-tienda',
  templateUrl: './tienda.component.html',
  styleUrls: ['./tienda.component.css']
})
export class TiendaComponent implements OnInit {

  private idtienda: number;
  public tienda = new Tienda()
  constructor(private loginservice: LoginService,
    private router:ActivatedRoute) { }

  ngOnInit(): void {
    this.idtienda=Number(this.router.snapshot.paramMap.get('id'))
    this.loginservice.getTiendabyId(this.idtienda).subscribe((result:any)=>{
      console.log(result.data);
      this.tienda=result.data;
    })
  }

}
