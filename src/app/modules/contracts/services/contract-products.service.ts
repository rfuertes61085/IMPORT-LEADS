import { IProduct } from './../contract.model';
import { HttpClient } from '@angular/common/http';
import { BaseService } from 'src/app/services/base.service';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ContractProductsService extends BaseService<IProduct> {
  constructor(http: HttpClient) {
    super(http, 'products');
  }
}
