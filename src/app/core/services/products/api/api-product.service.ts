import { ApiProduct } from 'src/app/core/services/products/api/api-product_model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../product.model';
const API_PRODUCT_URL = 'https://63df9d5159bccf35dab64144.mockapi.io';

@Injectable({
  providedIn: 'root'
})
export class ApiProductService {

  constructor(
    private http: HttpClient
  ) { }

  public getApiProducts(): Observable<ApiProduct[]>{
      return this.http.get< ApiProduct[]>(`${API_PRODUCT_URL}/list`);
  }

  public getApiAuthor(): Observable<ApiProduct[]>{
    return this.http.get< ApiProduct[]>(`${API_PRODUCT_URL}/Author`);
}

  public getApiProductDetail(id: string): Observable<ApiProduct> {
    return this.http.get<ApiProduct>(`${API_PRODUCT_URL}/list/${id}`)
  }
  public getApiAuthorDetail(): Observable<ApiProduct[]>{
    return this.http.get< ApiProduct[]>(`${API_PRODUCT_URL}/author`);
}

  public deleteApiProduct(id: string): Observable<ApiProduct>{
    return this.http.delete<ApiProduct>(`${API_PRODUCT_URL}/list/${id}`)
  }
  public deleteApiAuthor(): Observable<ApiProduct[]>{
    return this.http.get< ApiProduct[]>(`${API_PRODUCT_URL}/author`);
}

  public createApiProducts(body: Product): Observable<ApiProduct> {
    return this.http.post<ApiProduct>(`${API_PRODUCT_URL}/list`, body);
  }

  public createApiAuthor(): Observable<ApiProduct[]>{
    return this.http.get< ApiProduct[]>(`${API_PRODUCT_URL}/author`);
}

  public editApiProducts(id: string, body: Product): Observable<ApiProduct> {
    return this.http.put<ApiProduct>(`${API_PRODUCT_URL}/list/${id}`, body);
  }

  public editApiAuthor(): Observable<ApiProduct[]>{
    return this.http.get< ApiProduct[]>(`${API_PRODUCT_URL}/author`);
}
  
}
