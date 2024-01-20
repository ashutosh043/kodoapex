import { AfterViewInit, Component } from '@angular/core';
import anime from 'animejs/lib/anime.es.js';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent  implements AfterViewInit{
  dataset:any;

  ngAfterViewInit(): void {
    
    var tricksWord = document.getElementsByClassName("marg-animate-text");
    for (var i = 0; i < tricksWord.length; i++) {

      var wordWrap = tricksWord.item(i);
      wordWrap.innerHTML = wordWrap.innerHTML.replace(/(^|<\/?[^>]+>|\s+)([^\s<]+)/g, '$1<span class="tricksword">$2</span>');

    }


    var tricksLetter =document.getElementsByClassName("tricksword");
    for (var i = 0; i < tricksLetter.length; i++) {

      var letterWrap = tricksLetter.item(i);
      letterWrap.innerHTML =letterWrap.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

    }
   
    var slideUp = anime.timeline({
      loop: true,
      autoplay: false,
    });

    slideUp
      .add({
        targets: '.first-heading .letter',
        translateY: ["1.1em", 0],
        opacity: [0, 1],
        translateZ: 0,
        duration: 750,
        delay: (_el: any, i: number) => 50 * i
      }).add({
        targets: '.first-heading',
        opacity: 0,
        duration: 1000,
        easing: "easeOutExpo",
        delay: 1000,
      }).add({
        targets: '.second-heading .letter',
        translateY: ["1.1em", 0],
        opacity: [0, 1],
        translateZ: 0,
        duration: 750,
        delay: (_el: any, i: number) => 50 * i,
        offset: '-=750' 
      }).add({
        targets: '.second-heading',
        opacity: 0,
        duration: 1000,
        easing: "easeOutExpo",
        delay: 1000
      }).add({
        targets: '.third-heading .letter',
        translateY: ["1.1em", 0],
        opacity: [0, 1],
        translateZ: 0,
        duration: 750,
        delay: (_el: any, i: number) => 50 * i,
        offset: '-=750' 
      }).add({
        targets: '.third-heading',
        opacity: 0,
        duration: 1000,
        easing: "easeOutExpo",
        delay: 1000
      }).add({
        targets: '.fourth-heading .letter',
        translateY: ["1.1em", 0],
        opacity: [0, 1],
        translateZ: 0,
        duration: 750,
        delay: (_el: any, i: number) => 50 * i,
        offset: '-=750' 
      }).add({
        targets: '.fourth-heading',
        opacity: 0,
        duration: 1000,
        easing: "easeOutExpo",
        delay: 1000
      })

      .add({
        targets: '.fifth-heading .letter',
        translateY: ["1.1em", 0],
        opacity: [0, 1],
        translateZ: 0,
        duration: 750,
        delay: (_el: any, i: number) => 50 * i,
        offset: '-=750' 
      }).add({
        targets: '.fifth-heading',
        opacity: 0,
        duration: 1000,
        easing: "easeOutExpo",
        delay: 1000,
      })

    .add({
      targets: '.sixth-heading .letter',
      translateY: ["1.1em", 0],
      opacity: [0, 1],
      translateZ: 0,
      duration: 750,
      delay: (_el: any, i: number) => 50 * i,
      offset: '-=750' 
    }).add({
      targets: '.sixth-heading',
      opacity: 0,
      duration: 1000,
      easing: "easeOutExpo",
      delay: 1000,
    })
  .add({
    targets: '.seventh-heading .letter',
    translateY: ["1.1em", 0],
    opacity: [0, 1],
    translateZ: 0,
    duration: 750,
    delay: (_el: any, i: number) => 50 * i,
    offset: '-=750' 
  }).add({
    targets: '.seventh-heading',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000,
  });
slideUp.play();

  }
  }
