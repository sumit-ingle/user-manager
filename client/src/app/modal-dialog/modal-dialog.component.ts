import {
  Component, Input, OnInit, ComponentFactoryResolver, ViewContainerRef, ViewChild,
  ElementRef, Renderer2, AfterContentInit, EventEmitter, Output, HostListener, OnChanges, AfterViewInit
} from '@angular/core';
import { ComponentLoaderService } from '../component-loader.service';


@Component({
  selector: 'modal-dialog',
  templateUrl: './modal-dialog.component.html',
  styleUrls: ['./modal-dialog.component.css']
})

export class ModalDialogComponent implements OnInit, AfterContentInit, AfterViewInit {
  @Input() title: string;
  @Input() componentData: string;
  @Input() componentName: any;
  @Output() save = new EventEmitter<any>();

  public name: any;
  public overlayDiv: any;

  @ViewChild('datacontainer', { read: ViewContainerRef, static: true }) entry: ViewContainerRef;

  constructor(
    private el: ElementRef,
    private ren: Renderer2,
    private resolver: ComponentFactoryResolver,
    private loaderService: ComponentLoaderService
  ) {}

  public div = this.ren.createElement('div');

  ngOnInit() {
    console.log('Modal Component is called.');
  }

  ngAfterContentInit() {
    this.ren.addClass(this.el.nativeElement.ownerDocument.body, 'modal-open');
    this.ren.insertBefore(this.el.nativeElement.children[0], this.div, this.el.nativeElement.children[0].children[0]);
    this.ren.setAttribute(this.div , 'class', 'modal-backdrop');
    this.ren.setAttribute(this.div , 'tabindex', '-1');
    this.createModalPopup();
    console.log(this.el.nativeElement.children[0]);
  }

  ngAfterViewInit() {
    this.ren.listen(this.el.nativeElement, 'keydown', (event) => {
      console.log('event keydown => ', event);
      if (event.keyCode === 27 || event.key === 'Escape' || event.which === 27) { // ESCAPE key from keyboard
        this.closeModal();
        event.preventDefault();
      }
    });
  }

  createModalPopup() {
    console.log('createModalPopup is called.');
    const name = this.loaderService.getComponent(this.componentName);
    console.log('Component Name => ', name);
    const myFactory = this.resolver.resolveComponentFactory(<any>name);
    const componentRef = this.entry.createComponent(myFactory);
    componentRef.instance['data'] = this.componentData;
    componentRef.instance['save'].subscribe(data => {
      this.save.emit(data);
      this.closeModal();
    })
    this.overlayDiv = this.el.nativeElement.children[0];
    console.log('overlayDiv => ', this.el.nativeElement.children[0]);
    this.setFocus();
  }

  setFocus() {
    const focusDiv = this.el.nativeElement.children[0].children[1].children[0];
    console.log('focusDiv => ', focusDiv);
    focusDiv.focus();
  }

  closeModal() {
    this.ren.removeClass(this.el.nativeElement.ownerDocument.body, 'modal-open');
    this.el.nativeElement.remove();
  }


}

