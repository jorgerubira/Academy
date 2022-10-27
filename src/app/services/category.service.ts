import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { Category } from '../models/category';
import { Observable, lastValueFrom } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class CategoryService extends BaseService{

    list?: Category[]

    listCategories(){
        super.http.get(super.url + "category")
                  .toPromise()
                  .then(
                    data=>{
                        this.list=data as Category[];
                    }
    );
        
}
    


}