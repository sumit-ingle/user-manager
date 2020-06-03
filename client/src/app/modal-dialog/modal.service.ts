// import {
//   Directive, Input, Output, EventEmitter, ElementRef, HostListener, Renderer2,
//   ViewContainerRef, ComponentFactoryResolver, OnInit, OnChanges, Injectable
// } from '@angular/core';
// import { ModalDialogComponent } from './modal-dialog.component';

// @Injectable({
//   providedIn: 'root'
// })
// export class ModalService {
//   modalElement: any;
//   constructor(
//     private el: ElementRef,
//     private ren: Renderer2,
//     private viewContainer: ViewContainerRef,
//     private componentFactoryResolver: ComponentFactoryResolver) { }

//   openModal(componentInstance, options: {title: string, componentData?: any}) {
//     console.log('Modal directive is called.');
//     // this.modalElement = this.el.nativeElement;
//     // console.log('modalElement => ', this.modalElement);
//     // this.ren.setAttribute(this.modalElement, 'tabindex', '0');
//     // this.ren.setAttribute(this.modalElement, 'aria-haspopup', 'true');
//     this.createModalDialog(ModalDialogComponent, componentInstance, options);
//   }

//   createModalDialog(modalDialogComponent, componentInstance: any, options: {title: string, componentData?: any}) {
//     console.log('CreateModalDialog is called');
//     this.viewContainer.clear();
//     const modalDialogComponentFactory = this.componentFactoryResolver.resolveComponentFactory(modalDialogComponent);
//     const modalDialogComponentRef = this.viewContainer.createComponent(modalDialogComponentFactory);
//     modalDialogComponentRef.instance['title'] = options.title;
//     modalDialogComponentRef.instance['componentData'] = options.componentData;
//     modalDialogComponentRef.instance['componentInstance'] = componentInstance;
//     modalDialogComponentRef.instance['close'].subscribe(event => {
//       if (event === 'close') {
//         console.log(this.el.nativeElement);
//         this.el.nativeElement.focus();
//       }
//     });
//     return modalDialogComponentRef;
//   }
// }
