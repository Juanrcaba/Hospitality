import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';


interface categories{
  id?: number;
  name?:string;
  price?:number;
 }
 interface document{
  id?: number;
  name?:string;  
 }
 interface reservas{
  id: number,
  idCategory: number,
  idTipoDocumento: number,
  idStatusReserva: number,
  codigo: string,
  nombreCompleto: string,
  noDocumento: string,
  email: string,
  telefono: string,
  numeroAdultos: number,
  numeroNinos: number,
  checkIn: string,
  checkOut: string,
  precio: number,
  notas: string,

}
const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 800,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.addEventListener('mouseenter', Swal.stopTimer)
    toast.addEventListener('mouseleave', Swal.resumeTimer)
  }
  
})

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {

 
addForm!:FormGroup;
_categories!: categories[];
_documentType!:document[];
_Price!:categories;
_action = "Save";
_toDay = new Date();
_startDate!:Date;

  constructor(private builder:FormBuilder,  private route: Router) 
  {
    
  }
  


  ngOnInit(): void {

    this.addForm = this.builder.group({
      id:0,
      idStatusReserva:[2],
      nombreCompleto:['',Validators.required],
      telefono:[''],
      email:['',Validators.email],
      idTipoDocumento:[null,Validators.required],
      noDocumento:['',Validators.required],
      numeroAdultos:[1],
      numeroNinos:[0],
      idCategory:[null,Validators.required],
      precio:[0],
      checkIn:['',Validators.required],
      checkOut:['',Validators.required],
      notas:[''],
    });

   
    

    // this.db.getCategories().subscribe((response:any)=> this._categories = response);
    // this.db.getDocuments().subscribe((response:any)=> this._documentType = response );    

    // if(this.dataService.getData().id!=0)
    // this.fillForm(this.dataService.getData());
  }
 
  onClick(){
    console.log();
  }
  onSubmit(){

    // if(this.addForm.valid){
    // this.addForm.controls['checkIn'].setValue(moment(this.addForm.value.checkIn).format("yyyy-MM-D"))
    // this.addForm.controls['checkOut'].setValue(moment(this.addForm.value.checkOut).format("yyyy-MM-D")) 
    
    
    //     if(this.addForm.controls['id'].value == 0){
      
    //       this.db.postReservation(this.addForm.value).subscribe((response:any)=>{
    //         response == null ? this.sendData('Inserted') : console.log(response)
    //       });

    //     }else{
         
    //       this.db.UptadateReservation(this.addForm.value).subscribe((response:any)=>{

    //         response == null ? this.sendData('Updated'): console.log(response)
    //       });
    //     }
    // }
  }
  onChange(event:any){
   console.log(event.value)
  //  let valor = this._categories[event.value -1]
  let valor = this._categories.find(x=>x.id == event.value)
   console.log(valor?.price)
   this.addForm.controls['precio'].setValue(valor?.price)   
  }

  fillForm(data:reservas){
    this.addForm.patchValue({
      id:data.id,     
      idStatusReserva:data.idStatusReserva,
      nombreCompleto:data.nombreCompleto,
      telefono:data.telefono,
      email:data.email,
      idTipoDocumento:data.idTipoDocumento,
      noDocumento:data.noDocumento,
      numeroAdultos:data.numeroAdultos,
      numeroNinos:data.numeroNinos,
      idCategory:data.idCategory,
      precio:data.precio,
      checkIn:data.checkIn,
      checkOut:data.checkOut,
      notas:data.notas,
    })   
    this._action = "Update"
}

sendData(state:string){
  
  Toast.fire({
    icon: 'success',
    title: 'Data was '+state
  })
  setTimeout(() => {
    this.route.navigate(['/reservations']) 
  }, 900);
}
}