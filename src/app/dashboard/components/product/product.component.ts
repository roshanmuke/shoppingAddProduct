import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { ProductService } from "../../services/product.service";
@Component({
  selector: "app-product",
  templateUrl: "./product.component.html",
  styleUrls: ["./product.component.scss"],
})
export class ProductComponent implements OnInit {
  title = "";
  errorMessage: string = "";
  apiFlag: boolean = false;
  apiSpinner: boolean = false;
  apiSuccess: boolean = false;
  ProductForm: FormGroup;
  constructor(private activatedroute: ActivatedRoute, private router: Router, private productService:ProductService) {}
  ngOnInit(): void {
    this.activatedroute.params.subscribe((params) => {
      const id = params["id"];
      const action = params["action"];
      if (action == "add") {
        this.title = "Add";
      } else if (action == "edit") {
        this.title = "Edit";
      } else {
        this.title = "View";
      }

      alert(action);
    });

    this.ProductForm = new FormGroup({
      productName: new FormControl("", [
        Validators.required,
        Validators.minLength(3),
      ]),
      productSize: new FormControl("", [
        Validators.required,
        Validators.minLength(1),
      ]),

      productColor: new FormControl("", [
        Validators.required,
        Validators.minLength(2),
      ]),
      productPrice: new FormControl("", [
        Validators.required,
        Validators.minLength(2),
      ]),
      productUrl: new FormControl("", [
        Validators.required,
        Validators.minLength(2),
      ]),
      role: new FormControl("", [Validators.required]),
    });
  }
  submitForm() {
    this.ProductForm.markAllAsTouched();
    // if (this.ProductForm.invalid) {
    //   return;
    //}
    this.apiSpinner = true;
    this.productService.addProduct(this.ProductForm).subscribe(
      (res:any) => {
        this.apiSpinner = false;
        this.apiFlag = true;
        this.apiSuccess = res.Status ? true : false;
        this.errorMessage = res.Message;
        console.log(res);
      },
      (err) => {
        console.log(err);
      }
    );
    console.log(this.ProductForm);
  }
  clearFun() {
    this.ProductForm.reset();
  }
}
