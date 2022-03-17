import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {

  @Input()
  page: number = 1;
  @Input()
  pageSize: number = 6;
  @Input()
  collectionSize: number = 12;

  @Output()
  pageChange = new EventEmitter<number>();
  constructor() { }

  ngOnInit(): void {
  }

  prevPage() : void {
      this.pageChange.emit(this.page - 1);
  }

  nextPage() : void {
    this.pageChange.emit(this.page + 1);
  }
}
