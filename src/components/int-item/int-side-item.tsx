import { Component, h } from '@stencil/core';

@Component({
  tag: 'side-item',
  styleUrl: 'int-side-item.css',
  shadow: false,
})

export class IntSideItem {
  render() {
    return [
     <li class="side-item"> 
      <slot />
     </li>
    ];
  }
}
