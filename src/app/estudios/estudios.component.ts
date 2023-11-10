import { Component, OnInit } from '@angular/core';
import { CvService } from '../servicios/cv.service';


@Component({
  selector: 'app-estudios',
  templateUrl: './estudios.component.html',
  styleUrls: ['./estudios.component.css']  
})


export class EstudiosComponent implements OnInit {

  datos: any;
  
  constructor(private cvService:CvService){}
    ngOnInit(): void {
      this.cvService.obtenerEducacion().subscribe(
  
        data => {
          console.log(data)
        this.datos=data["estudios"];
        }
      )
    
    }
  
  
  
  }
  
