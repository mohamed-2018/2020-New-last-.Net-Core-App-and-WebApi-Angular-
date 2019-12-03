import { Component, OnInit } from '@angular/core';
import { PaymentDetailService } from 'src/app/shared/payment-detail.service';
import { PaymentDetail } from './../../shared/payment-detail.model';
import { NgForm } from '@angular/forms';
import { format } from 'url';
import {ToastrService }  from 'ngx-toastr';


@Component({
  selector: 'app-payment-detail-list',
  templateUrl: './payment-detail-list.component.html',
  styles: []
})
export class PaymentDetailListComponent implements OnInit {

  constructor(private service :PaymentDetailService,private toastr : ToastrService) { }

  ngOnInit() {
    this.service.refreshList();
  }
  populateForm(pd:PaymentDetail){
  this.service.formData = Object.assign({},pd);
  }
  onDelete(PMId){
    if(confirm('Are you Sure to Dekete This Record')){
    this.service.DeletePaymentDetail(PMId).subscribe(
      res => {
       this.service.refreshList();
      this.toastr.warning('Deleted successfully','Payment Detail Register');

    },
    err => {console.log(err);
    })
  }
  }
}
