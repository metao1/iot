import {PanelConfiguration} from "@persoinfo/model/dashboard/configuration/panel/panel.configuration";
import {AfterViewInit, Directive, HostListener, Input, TemplateRef, ViewContainerRef} from "@angular/core";

@Directive({
  selector: '[groPanelMenu]'
})
export class PanelMenuDirective implements AfterViewInit {

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef
  ) {
    console.log(templateRef);
    console.log(viewContainer);
  }

  @Input()
  set groPanelMenu(configuration: PanelConfiguration) {
    console.log(configuration);
  }

  @HostListener('mouseenter')
  onMouseEnter() {
    this.addOutline();
    console.log('entering...');
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.removeOutline();
    console.log('leaving...');
  }

  ngAfterViewInit() {
    console.log();
  }

  private addOutline() {
    //this.element.nativeElement.innerHTML.firstChild = '#FFFFFF solid 2px';
  }

  private removeOutline() {
    //this.element.nativeElement.innerHTML.style.outline = 'none';
  }
}
