import { HttpClient } from '@angular/common/http';

export class BaseService {
    url="https://localhost:4200/assets/";
    http: HttpClient;
    constructor(private pHttp : HttpClient) { 
        this.http=pHttp;
    }
}