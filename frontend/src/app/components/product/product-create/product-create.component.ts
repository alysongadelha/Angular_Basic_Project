import { Product } from './../product.model';
import { ProductService } from './../product.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  product: Product = {
    name: '',
    price: null
  }

  constructor(private router: Router,
    private productService: ProductService) { }

  ngOnInit(): void {
    console.log('TESTE')
  }

  createProduct(): void {
    this.productService.create(this.product).subscribe(() => {
      this.productService.showMessage('Produto Criado');
      //this.router.navigate(['/products']);
    })
  };

  cancel(): void {
    this.router.navigate(['/products']);

  }

}
