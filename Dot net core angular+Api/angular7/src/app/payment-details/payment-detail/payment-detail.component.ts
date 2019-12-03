import { Component, OnInit } from '@angular/core';
import { PaymentDetailService } from 'src/app/shared/payment-detail.service';
import { NgForm } from '@angular/forms';
import { format } from 'url';
import {ToastrService }  from 'ngx-toastr';
@Component({
  selector: 'app-payment-detail',
  templateUrl: './payment-detail.component.html',
  styles: []
})
export class PaymentDetailComponent implements OnInit {

  constructor(private service :PaymentDetailService, private toastr : ToastrService) { }

  ngOnInit() {
    this.resetForm();
  }

  resetForm(form?:NgForm){
    if(form != null)
    form.resetForm(); 
    this.service.formData ={
      PMId:0,
      CardOwnerName:'',
      CardNumber:'',
      ExperationDate:'',
      CVV:'',
    }
  }
  onSubmit(form:NgForm){
    if (this.service.formData.PMId==0) {
      this.insertRecord(form);
    } else {
      this.updateRecord(form);
    }

  
}
insertRecord(form:NgForm){
  this.service.PostPaymentDetail().subscribe(
    res => { this.resetForm(form); console.log(res);
      this.toastr.success('Submitted successfully','Payment Detail Register');
      this.service.refreshList();
    
    },
    err => { console.log(err);
    },
    
     
  )

}
updateRecord(form:NgForm){
  this.service.PutPaymentDetail().subscribe(
    res => { this.resetForm(form); console.log(res);
      this.toastr.info('Updated successfully','Payment Detail Register');
          this.service.refreshList();

    },
    err => { console.log(err);
    },
    
     
  )

}


}
