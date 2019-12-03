import { Injectable } from '@angular/core';
import { PaymentDetail } from './payment-detail.model';
import{HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})

export class PaymentDetailService {

  formData:PaymentDetail
  readonly rootURL ='https://localhost:44355/api';
  List :PaymentDetail[];
  constructor(private http :HttpClient) { }

  PostPaymentDetail(){
     return this.http.post(this.rootURL+'/PaymentDetail',this.formData);
  }
  PutPaymentDetail(){
     return this.http.put(this.rootURL+'/PaymentDetail/'+this.formData.PMId,this.formData);
  }
  DeletePaymentDetail(id){
     return this.http.delete(this.rootURL+'/PaymentDetail/'+id);
  }
  refreshList(){
    return this.http.get(this.rootURL+'/PaymentDetail')
    .toPromise()
    .then(res =>this.List =res as PaymentDetail[] );
    
  }
  
  
} 
