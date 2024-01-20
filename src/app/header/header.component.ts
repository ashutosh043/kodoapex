import { CommonModule } from '@angular/common';
import { Component, OnInit} from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule,CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit{


  hemburgerRotate(){
       const hemburgerIcon= document.querySelector('.hemburger');
       const mobileMenu =document.querySelector('.mobile-menu');
       const bgDrop=document.querySelector('.backdrop_bg');
        hemburgerIcon?.classList.toggle('rotate');
        mobileMenu?.classList.toggle('slide');
        bgDrop?.classList.toggle('show')
  }

  bgDrop(){
    const hemburgerIcon= document.querySelector('.hemburger');
       const mobileMenu =document.querySelector('.mobile-menu');
       const bgDrop=document.querySelector('.backdrop_bg');
    hemburgerIcon?.classList.remove('rotate');
    mobileMenu?.classList.remove('slide');
    bgDrop?.classList.remove('show')
  }


  ngOnInit(): void {
    var header=document.querySelector('header');
    window.addEventListener('scroll', ()=>{
         if(window.scrollY>40){
               header?.classList.add('fixed');
         }
         else{
          header?.classList.remove('fixed');
         }
    })

  }

  
  
  
  



}
