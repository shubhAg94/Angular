import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'dynamic-alertcomp',
  templateUrl: './dynamic-alertcomp.component.html',
  styleUrls: ['./dynamic-alertcomp.component.css']
})
export class DynamicAlertcompComponent implements OnInit {

  @Input() message: string;
  @Output() close = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  onClose(){
    this.close.emit('dialog closed');
  }
}
