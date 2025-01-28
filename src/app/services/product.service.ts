import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private apiUrl = 'https://dummyjson.com/products'; // API endpoint for products

  constructor(private http: HttpClient) {}

  /**
   * Fetch products with pagination.
   * @param page - Current page number (1-indexed).
   * @param limit - Number of products per page.
   * @returns Observable of products data.
   */
  getProducts(page: number, limit: number): Observable<any> {
    const skip = (page - 1) * limit; // Calculate the skip value based on page and limit
    const url = `${this.apiUrl}?limit=${limit}&skip=${skip}`;

    return this.http.get<any>(url).pipe(
      map((response) => {
        if (response && response.products && response.products.length > 0) {
          return response; // Return the response with products and total count
        } else {
          return { products: this.getDummyData(), total: 0 }; // Dummy data if empty
        }
      }),
      catchError((error) => {
        console.error('Error fetching products:', error);
        return of({ products: this.getDummyData(), total: 0 }); // Return dummy data on error
      })
    );
  }

  /**
   * Generate dummy data for fallback.
   * @returns Array of dummy product data.
   */
  private getDummyData(): any[] {
    return [
      {
        id: 1,
        title: 'Dummy Product 1',
        description: 'This is a dummy product description.',
        price: 10.0,
        thumbnail: 'https://via.placeholder.com/150',
        rating: { rate: 4.5, count: 10 },
      },
      {
        id: 2,
        title: 'Dummy Product 2',
        description: 'This is another dummy product description.',
        price: 20.0,
        thumbnail: 'https://via.placeholder.com/150',
        rating: { rate: 3.8, count: 5 },
      },
      // Add more dummy products as needed
    ];
  }
}
