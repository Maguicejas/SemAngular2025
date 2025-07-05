import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BeautyProductComponent } from './beauty-product/beauty-product.component';
import { BeautyAboutComponent } from './beauty-about/beauty-about.component';

const routes: Routes = [
{
 path:'',
 redirectTo:'products',
 pathMatch:'full'
},
{
  path: 'products',
  component: BeautyProductComponent
},
{ 
  path: 'about',
  component: BeautyAboutComponent
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
