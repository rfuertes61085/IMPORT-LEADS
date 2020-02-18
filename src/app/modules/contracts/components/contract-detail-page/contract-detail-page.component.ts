import { FormBuilder, FormGroup } from '@angular/forms';
import { Contract } from './../../contract.model';
import { MatDialog } from '@angular/material/dialog';
import { environment } from './../../../../../environments/environment';
import { Component, OnInit, ViewChild, ElementRef, HostListener, Inject } from '@angular/core';
import { ContractAddDialogComponent } from 'src/app/modules/dialogs/components/contracts/contract-add-dialog.component';
import { GenericPageDetailComponent } from 'src/app/shared/generics/generic-page-detail';
import { Observable, fromEvent } from 'rxjs';

@Component({
  selector: 'il-contract-detail-page',
  templateUrl: './contract-detail-page.component.html',
  styleUrls: ['./contract-detail-page.component.scss']
})

export class ContractDetailPageComponent extends GenericPageDetailComponent<Contract> implements OnInit {
  public svgPath: string = environment.svgPath;
  public options: Array<{ id: number, label: string, icon: string, action?: () => void }>;
  public panels: Array<{ id: number, title: string, description: string }> = [
    {
      id: 1,
      title: '2G1W Dimmer Picture',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    },
    {
      id: 2,
      title: 'Rated Voltage',
      description: '<500W'
    },
    {
      id: 3,
      title: 'Ive seen other answers suggesting animating',
      description: 'Start editing to see some magic happen :).'
    },
    {
      id: 4,
      title: 'In case anyone is reading this',
      description: 'transition '
    }
  ];
  public _showTabActions: boolean = false;
  public showRightNav: boolean = false;

  constructor(public fb: FormBuilder, public dialog: MatDialog) {
    super();
    this.form = this.fb.group({
      id: ['c28c801d-6556-42aa-8b8c-072f7eb4b17d'],
      title: ['PI SK19NL0806-1 Touch Dim'],
      venue: ['Canhui toys limited'],
      startDate: ['01.09.2019'],
      deliveryDate: ['30.12.2019'],
      details: ['Lorem Ipsum is simply dummy text of the printing industry'],
      attachments: [null]
    });
  }

  @ViewChild('scrollPnl', { static: false }) public scrollPnl: any;
  ngOnInit() {
    this.options = [
      {
        id: 1,
        label: 'Edit contract',
        icon: 'edit-icon-blue.svg',
        action: this.editContract
      },
      {
        id: 2,
        label: 'Add a category',
        icon: 'add-category-icon-blue.svg'
      },
      {
        id: 3,
        label: 'Add a title',
        icon: 'add-title-icon-blue.svg'
      },
      {
        id: 4,
        label: 'Download',
        icon: 'download-icon-blue.svg'
      },
      {
        id: 5,
        label: 'Create or update template',
        icon: 'templates-icon-blue.svg',
        action: this.createUpdateTemplate
      },
      {
        id: 6,
        label: 'Delete contract',
        icon: 'delete-icon-red.svg'
      }
    ];

    fromEvent(window, "scroll").subscribe((e: any) => {
      document.querySelector('.inner-container').scrollTop = (document.documentElement.scrollTop);
    });
  }

  public showTabActions(): void {
    this._showTabActions != this._showTabActions;
  }

  public createUpdateTemplate = (): void => {
    this.showRightNav = !this.showRightNav;
  }

  public editContract = (): void => {
    const dialogRef = this.dialog.open(ContractAddDialogComponent, {
      data: {
        formValues: this.form.value
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  public addContract(): void {
    const dialogRef = this.dialog.open(ContractAddDialogComponent, {});
    dialogRef.afterClosed().subscribe(result => { });
  }

  public add(): void {
    this.panels.push({ id: 4, title: 'test title 123', description: 'test description 123' });
  }
}
