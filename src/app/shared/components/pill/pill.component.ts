import { SimpleItem } from './../../generics/generic.model';
import { GenericControl } from './../../generics/generic-control';
import { environment } from './../../../../environments/environment';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'il-pill',
  templateUrl: './pill.component.html',
  styleUrls: ['./pill.component.scss']
})

export class PillComponent extends GenericControl<SimpleItem> implements OnInit {
  public svgPath: string = environment.svgPath;
  @Output()
  public removeEmitter = new EventEmitter<number>();
  constructor() {
    super();
  }

  ngOnInit() {
  }
}
