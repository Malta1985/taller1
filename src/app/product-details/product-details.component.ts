import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit {
  productId: number = 0;
  comments: any[] = [];

  constructor(private route: ActivatedRoute, private http: HttpClient) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const id = params.get('id');
      if (id !== null) {
        this.productId = +id;
        this.loadComments();
      }
    });
  }

  loadComments() {
    this.http
      .get<any[]>(
        `https://jsonplaceholder.typicode.com/comments?postId=${this.productId}`
      )
      .subscribe((comments) => {
        this.comments = comments;
      });
  }
}
