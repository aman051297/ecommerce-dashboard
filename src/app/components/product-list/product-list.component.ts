import { Component, OnInit, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService } from '../../services/product.service';
import { ProductCardComponent } from '../product-card/product-card.component';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, ProductCardComponent],
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  displayedProducts: any[] = []; // Products currently displayed
  isLoading = false; // Prevent multiple API calls
  itemsPerPage = 10; // Number of items to load per page
  currentPage = 1; // Current page (starts at 1 for most APIs)
  totalProducts = 0; // Total products available (fetched from API)
  hasMoreProducts = true; // Check if there are more products to load

  isModalVisible = false; 
  selectedProduct :any

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.loadMoreProducts(); // Fetch initial products
  }

  // Fetch products from the API with pagination
  loadMoreProducts(): void {
    if (this.isLoading || !this.hasMoreProducts) return;

    this.isLoading = true; // Set loading flag
    this.productService
      .getProducts(this.currentPage, this.itemsPerPage) // Add page and limit to API call
      .subscribe({
        next: (data: any) => {
          this.displayedProducts.push(...data.products); // Append new products
          this.totalProducts = data.total; // Update total product count (if provided by the API)
          this.currentPage++; // Increment page
          this.hasMoreProducts = this.displayedProducts.length < this.totalProducts;
          this.isLoading = false; // Reset loading flag
        },
        error: () => {
          this.isLoading = false; // Reset loading flag on error
          alert('Failed to load products!');
        },
      });
  }

  // Detect when the user scrolls near the bottom of the page
  @HostListener('window:scroll', ['$event'])
  onScroll(): void {
    const threshold = 300; // Trigger load when 300px from bottom
    const position = window.innerHeight + window.scrollY;
    const height = document.body.scrollHeight;

    if (position >= height - threshold && !this.isLoading && this.hasMoreProducts) {
      this.loadMoreProducts();
    }
  }

  // Sorting function
  onSortChange(sortBy: string): void {
    if (sortBy === 'priceAsc') {
      this.displayedProducts.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'priceDesc') {
      this.displayedProducts.sort((a, b) => b.price - a.price);
    } else if (sortBy === 'ratingAsc') {
      this.displayedProducts.sort((a, b) => a.rating - b.rating);
    } else if (sortBy === 'ratingDesc') {
      this.displayedProducts.sort((a, b) => b.rating - a.rating);
    }
  }

  // Show modal
  showModal(product: any) {
    this.selectedProduct = product;
    this.isModalVisible = true;
  }

  // Hide modal
  hideModal() {
    this.isModalVisible = false;
    this.selectedProduct = undefined
  }
}
