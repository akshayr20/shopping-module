import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-item-quick-edit',
  templateUrl: './item-quick-edit.component.html',
  styleUrls: ['./item-quick-edit.component.scss']
})
export class ItemQuickEditComponent implements OnInit {
  @Output() editItem$: EventEmitter<boolean> = new EventEmitter();

  constructor() {}

  ngOnInit() {}
}
