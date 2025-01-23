import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filter-bar',
  standalone: true,
  templateUrl: './filter-bar.component.html',
  styleUrls: ['./filter-bar.component.css'],
})
export class FilterBarComponent {
  @Output() sortChanged = new EventEmitter<string>();

  changeSorting(event: Event): void {
    const value = (event.target as HTMLSelectElement).value; // Cast the target
    this.sortChanged.emit(value);
  }
}
