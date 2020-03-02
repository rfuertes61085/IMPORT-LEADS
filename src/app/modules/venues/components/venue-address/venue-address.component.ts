import { GenericPanelComponent } from 'src/app/shared/generics/generic-panel';
import { moveItemInArray, CdkDragDrop } from '@angular/cdk/drag-drop';
import { VenueProduct } from './../../venues.models';
import { environment } from './../../../../../environments/environment';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'il-venue-address',
  templateUrl: './venue-address.component.html',
  styleUrls: ['./venue-address.component.scss']
})

export class VenueAddressComponent extends GenericPanelComponent implements OnInit {
  public svgPath: string = environment.svgPath;
  @Input()
  public items: VenueProduct[];
  public hoveredIndex: number | null = null;
  public selectedIndex: number | null = null;
  @Input()
  public colsHeaders: Array<{ label: string, width?: string | number }>;
  public rates = new Array(5);

  public dragStart: boolean = false;
  public drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.items, event.previousIndex, event.currentIndex);
    this.dragStart = false;
  }

  constructor() {
    super();
  }

  ngOnInit() { }

  public onPreventExpandPanel(event: any) {
    event.stopPropagation();
  }

  public dragStarted(event: any) {
    this.dragStart = event;
  }
}