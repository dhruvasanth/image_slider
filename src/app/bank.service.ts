import { Injectable } from '@angular/core';
import { Observable,pipe} from 'rxjs';

import { HttpClient } from  '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class BankService {
  public  url:string="assets/data/empdata.json"

  constructor(private http:HttpClient) { }
   getBankData():Observable<any>
  {
  return  this.http.get<any>(this.url);


  

 //   filter( data:any => data=data.id >2 );
  
  

  }
}
