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
  products: any[] = [];
  displayedProducts: any[] = []; // Products currently displayed
  isLoading = false;
  itemsPerPage = 10; // Number of items to load per "page"
  currentPage = 0;
  isModalVisible = false; 
  selectedProduct = {
    name: '',
    description: '',
    title: '',
    image: '',
    rating: {
      rate:'',
      count:''
    }
  }

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.fetchProducts();
  }

  fetchProducts(): void {
    this.isLoading = true;
    this.productService.getProducts().subscribe({
      next: (data) => {
        this.products = data;
        this.loadMoreProducts(); // Load initial products
        this.isLoading = false;
      },
      error: () => {
        this.isLoading = false;
        alert('Failed to load products!');
      },
    });
  }

  loadMoreProducts(): void {
    const nextPage = this.products.slice(
      this.currentPage * this.itemsPerPage,
      (this.currentPage + 1) * this.itemsPerPage
    );
    this.displayedProducts.push(...nextPage);
    this.currentPage++;
  }

  @HostListener('window:scroll', ['$event'])
  onScroll(): void {
    const threshold = 300; // Trigger load when 300px from bottom
    const position = window.innerHeight + window.scrollY;
    const height = document.body.scrollHeight;

    if (position >= height - threshold && !this.isLoading) {
      this.loadMoreProducts();
    }
  }

  
  onSortChange(sortBy: string): void {
    if (sortBy === 'priceAsc') {
      this.displayedProducts.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'priceDesc') {
      this.displayedProducts.sort((a, b) => b.price - a.price);
    }
  }

  showModal(product: any) {
    this.selectedProduct = product;
    this.isModalVisible = true;
  }

  // Hide the modal
  hideModal() {
    this.isModalVisible = false;
    this.selectedProduct =  {
    name: '',
    description: '',
    title: '',
    image: '',
    rating: {
    rate:'',
      count:''
    }
  }
}
}
