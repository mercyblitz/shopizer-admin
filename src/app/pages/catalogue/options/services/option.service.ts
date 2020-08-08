import { Injectable } from '@angular/core';

import { CrudService } from '../../../shared/services/crud.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OptionService {

  constructor(
    private crudService: CrudService
  ) {
  }

  getListOfOptions(params): Observable<any> {
    return this.crudService.get(`/v1/private/product/options`, params);
  }

  createOption(option): Observable<any> {
    return this.crudService.post(`/v1/private/product/option`, option);
  }

  updateOption(id, option): Observable<any> {
    return this.crudService.put(`/v1/private/product/option/${id}`, option);
  }

  deleteOption(id): Observable<any> {
    return this.crudService.delete(`/v1/private/product/option/${id}`);
  }

  getOptionById(id): Observable<any> {
    const params = {
      lang: '_all'
    };
    return this.crudService.get(`/v1/private/product/option/${id}`, params);
  }

  checkOptionCode(code): Observable<any> {
    const params = {
      'code': code,
    };
    return this.crudService.get(`/v1/private/product/option/unique`, params);
  }

  // Set option API
  getListOfOptionsSet(): Observable<any> {
    return this.crudService.get('/v1/private/product/option/set');
  }

  deleteOptioSet(id): Observable<any> {
    return this.crudService.delete(`/v1/private/product/option/set/${id}`);
  }
  checkOptionSetCode(code): Observable<any> {
    return this.crudService.get('/v1/private/product/option/set/unique?code=' + code);
  }
  createSetOption(param): Observable<any> {
    return this.crudService.post('/v1/private/product/option/set', param);
  }
  getOptionSetById(id, params): Observable<any> {

    return this.crudService.get(`/v1/private/product/option/set/${id}`, params);
  }
  updateSetOption(id, param): Observable<any> {
    return this.crudService.put(`/v1/private/product/option/set/${id}`, param);
  }
}
