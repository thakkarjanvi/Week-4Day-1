import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
  @Input() item!: string;
  @Output() removeItem = new EventEmitter<void>();

  onItemClicked() {
    this.removeItem.emit();
  }
}
