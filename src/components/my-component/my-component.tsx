import { Component, Prop, h, Host } from '@stencil/core';

@Component({
  tag: 'my-component',
  styleUrls: ['my-component.css'],
  assetsDirs: ['assets'],
  shadow: false,
})
export class MyComponent {
  /**
   * The first name
   */
  @Prop() first: string;

  @Prop() icon: string;

  /**
   * The middle name
   */
  @Prop() middle: string;

  /**
   * The last name
   */
  @Prop() logoImage: string;

  @Prop() config: any;

  componentWillLoad() {
    // This component will get access
    // to config if slotted inside root.
    console.log(this.config);
  }

  render() {
    return [
    <div class="top">
      <div class="applogo">
        <a href="#/home" class="logo">
            <img src={this.logoImage} alt="Intelepeer" />
        </a>
      </div>
    </div>

    

    
    ]
  }

  //render() {
  //  return (
  //    <Host>
  //      <slot>
  //        <i class="fab fa-adobe"></i>
  //        <i class="far fa-address-card"></i>
  //        <i class="fas fa-address-card"></i>
  //        <i class="fas fa-map-marked-alt"></i>
  //      </slot>
  //    </Host>
  //  );
  //}
}
