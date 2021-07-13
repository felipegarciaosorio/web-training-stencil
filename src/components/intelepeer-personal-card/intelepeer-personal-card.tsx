import { Component, h } from "@stencil/core";

@Component({
  tag: 'intelepeer-personal-card',
  styleUrl: 'intelepeer-personal-card.css'
})

export class IntelepeerPersonalCard {

 render(){
  return (
   <div class="b-personal-card-box">
    <div class="b-personal-card">
     <div class="b-personal-card__photo-container">
      <img src="https://randomuser.me/api/portraits/men/75.jpg" alt="Felipe Image"></img>
     </div>
     <div class="b-personal-card__full-name">
      <h2>Andres Garcia</h2>
     </div>

     <div class="b-personal-card__resume">
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis sed itaque est, rem voluptatem ullam, atque laborum, magni quaerat doloremque beatae asperiores odit pariatur nisi in ipsam. Molestias, adipisci quos?
     </div>
    </div>
   </div>
  );
 }
}