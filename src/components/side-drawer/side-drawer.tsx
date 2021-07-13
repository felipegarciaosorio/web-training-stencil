import { Component, h, Prop } from "@stencil/core";

@Component({
 tag: 'int-side-drawer',
 styleUrl: './side-drawer.css',
 shadow: true
})

export class SideDrawer {
 @Prop() titleName: string;
 @Prop({ mutable: true, reflect: true }) open: boolean;
 @Prop() testButton: Array<any> = [{"id": "1", "button": "Navigation"}, { "id": "2", button: "Contact"}]

 onCloseDrawer() {
   this.open = false;
 }

 render() {
   return (
     <aside>
       <header>
         <h1>{this.titleName}</h1>
         <button onClick={this.onCloseDrawer.bind(this)}>X</button>
       </header>
       <section id="tabs">
         <button class="active">Navigation</button>
         <button>Contact</button>
       </section>

       <section id="tabs">
        {this.testButton.map((res) => 
          <button class="active">{res.button}</button>
        )} 
       </section>

       <section id="tabs">
        {this.testButton.map((res) => 
          <button class="active">{res.button}</button>
        )} 
       </section>
       <main>
         <slot />
       </main>
     </aside>
   );
 }
}