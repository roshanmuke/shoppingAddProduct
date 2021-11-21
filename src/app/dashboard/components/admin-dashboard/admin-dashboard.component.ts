import { Component, OnInit } from "@angular/core";
import { ProductService } from "../../services/product.service";
import { StorageService } from "../../../services/storage.service";
import { Router } from "@angular/router";
@Component({
  selector: "app-admin-dashboard",
  templateUrl: "./admin-dashboard.component.html",
  styleUrls: ["./admin-dashboard.component.scss"],
})
export class AdminDashboardComponent implements OnInit {
  constructor(
    private productService: ProductService,
    private storageService: StorageService,
    private router: Router
  ) {}
  productArr = [];
  loggedInUser;
  ngOnInit(): void {
    this.loggedInUser = this.storageService.getUser();
    this.getProductList();
  }
  getProductList() {
    this.productService.getProducts().subscribe(
      (res: any) => {
        console.log(res);
        this.productArr = res.Data;
      },
      (err) => {
        console.log(err);
      }
    );
  }
  logout() {
    this.storageService.removeUser();
    this.router.navigate(["/"]);
  }
}
