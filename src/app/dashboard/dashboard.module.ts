import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Routes, RouterModule } from "@angular/router";
import { ReactiveFormsModule } from "@angular/forms";
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { AdminDashboardComponent } from "./components/admin-dashboard/admin-dashboard.component";
import { CustomerDashboardComponent } from "./components/customer-dashboard/customer-dashboard.component";
import { ProductListComponent } from "./components/product-list/product-list.component";
import { ProductComponent } from "./components/product/product.component";

const routes: Routes = [
  { path: "", component: AdminDashboardComponent },
  { path: "addProduct/:action", component: ProductComponent },
  { path: "editProduct/:action/:id", component: ProductComponent },
  { path: "viewProduct/:action/:id", component: ProductComponent },
];

@NgModule({
  declarations: [
    DashboardComponent,
    AdminDashboardComponent,
    CustomerDashboardComponent,
    ProductListComponent,
    ProductComponent,
  ],
  imports: [CommonModule, ReactiveFormsModule, RouterModule.forChild(routes)],
})
export class DashboardModule {}
