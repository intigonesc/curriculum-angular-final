import { Component, OnInit } from '@angular/core';
import { CvService } from '../servicios/cv.service';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})


  export class ContactoComponent implements OnInit {

    datos: any;

    
    constructor(private cvService:CvService){}
      ngOnInit(): void {
        this.cvService.obtenerEducacion().subscribe(
    
          data => {
            console.log("contacto")
          this.datos=data["contacto"]
          }
        )
      
      }
    
    
    
    }
    








