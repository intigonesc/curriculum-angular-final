import { Component, OnInit } from '@angular/core';
import { CvService } from '../servicios/cv.service';


@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})

export class ExperienciaComponent implements OnInit {

  datos: any;
  
  constructor(private cvService:CvService){}
    ngOnInit(): void {
      this.cvService.obtenerEducacion().subscribe(
  
        data => {
          console.log(data)
        this.datos=data["experiencia"]
        }
      )
    
    }
  
  
  
  }