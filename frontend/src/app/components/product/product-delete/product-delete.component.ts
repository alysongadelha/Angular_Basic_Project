import { Product } from './../product.model';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.css']
})
export class ProductDeleteComponent implements OnInit {

  product: Product

  constructor(private producService: ProductService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')
    this.producService.readById(id).subscribe(product => {
      this.product = product
    })
  }

  deleteProduct(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.producService.delete(id).subscribe(() => {
      this.producService.showMessage("Produto Excluído com Sucesso!")
      this.router.navigate(['/products'])
    })
  }

  cancelar(): void {
    this.router.navigate(['/products'])
  }

}
