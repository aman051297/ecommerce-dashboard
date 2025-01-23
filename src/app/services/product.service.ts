import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private apiUrl = 'https://fakestoreapi.com/products'; //  API URL

  constructor(private http: HttpClient) {}

  // getProducts(): Observable<any[]> {
  //   return this.http.get<any[]>(this.apiUrl).pipe(
  //     map((data) => {
  //       // Check if the response data is empty
  //       if (data && data.length > 0) {
  //         return data; // Return the actual data if available
  //       } else {
  //         // Return dummy data if no actual data is found
  //         return this.getDummyData();
  //       }
  //     }),
  //     catchError((error) => {
  //       console.error('Error fetching products:', error);
  //       // Return dummy data on error
  //       return of(this.getDummyData());
  //     })
  //   );
  // }

  getProducts(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl).pipe(
      map((data) => {
        // Check if the response data is empty
        if (data && data.length > 0) {
          return data; // Return the actual data if available
        } else {
          // Return dummy data if no actual data is found
          return this.getDummyData();
        }
      }),
      catchError((error) => {
        console.error('Error fetching products:', error);
        // Return dummy data on error
        return of(this.getDummyData());
      })
    );
  }

  // Dummy data with basic details
  private getDummyData(): any[] {
    return [
      { id: 1, name: 'Dummy Product 1', price: 100, category: 'Electronics' },
      { id: 2, name: 'Dummy Product 2', price: 200, category: 'Home Appliances' },
      { id: 3, name: 'Dummy Product 3', price: 300, category: 'Furniture' },
      { id: 4, name: 'Dummy Product 4', price: 150, category: 'Books' },
      { id: 5, name: 'Dummy Product 5', price: 50, category: 'Clothing' },
    ];
  }
}
