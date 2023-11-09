import { Component, OnInit } from '@angular/core';
import { CvService } from '../servicios/cv.service';


@Component({
  selector: 'app-estudios',
  templateUrl: './estudios.component.html',
  styleUrls: ['./estudios.component.css']  
})


export class EstudiosComponent implements OnInit {

  personal: any;
  
  constructor(private cvService:CvService){}
    ngOnInit(): void {
      this.cvService.obtenerEducacion().subscribe(
  
        data => {
          console.log(data)
        this.personal=data["personal"][1]
        }
      )
    
    }
  
  
  
  }
  
