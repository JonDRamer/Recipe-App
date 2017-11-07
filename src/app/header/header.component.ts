import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  // Output makes this event available for parent components to listen to
  // Event emitter makes this property broadcast an event whenever the
  // onSelect method is called in the child component (header) template
  @Output() featureSelected = new EventEmitter<string>();

  // Gets called whenever a user clicks on a navigation link in the header
  onSelect(feature: string) {
    this.featureSelected.emit(feature);
  }

  constructor() { }

  ngOnInit() {
  }

}
