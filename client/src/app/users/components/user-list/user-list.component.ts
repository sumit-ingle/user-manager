import { Component, OnInit, Input, ElementRef, AfterViewInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit, AfterViewInit {

  @Input() rows;
  @Input() columns;
  @Output() onUpdate: EventEmitter<any> = new EventEmitter();
  constructor(private el: ElementRef) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
  }

  updateUser(updatedUser, rowIndex) {
    let rowData = {
      updatedUser,
      rowIndex
    }
    this.onUpdate.emit(rowData);
  }

  searchByFirstColumn(event) {
    const searchText = event.target.value.trim().toUpperCase();
    const tr = this.el.nativeElement.getElementsByTagName("tr");
    for (let i = 0; i < tr.length; i++) {
      const td = tr[i].getElementsByTagName("td")[0];
      if (td) {
        const txtValue = (td.textContent || td.innerText).trim().toUpperCase();
        if (txtValue.indexOf(searchText) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }
    }
  }
}
