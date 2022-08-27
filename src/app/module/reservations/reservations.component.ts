import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { reservationData } from '@Core/models/reservation.model';
import { FiltroPipe } from '@Core/pipe/filter.pipe';



@Component({
  selector: 'app-reservations',
  templateUrl: './reservations.component.html',
  styleUrls: ['./reservations.component.scss']
})
export class ReservationsComponent implements OnInit {
@ViewChild('nextbutton') nextButton!: ElementRef
  constructor() { }
  page: number = 0;
  myFilter:string = '';
  auxData!:reservationData[]
  data:reservationData[]=[ 
    {
      reservationCode:"42238",
      fullName:"John Doe",
      pax:350,
      checkInDate:"8/09/2022",
      checkOutDate:"8/09/2022",
      statusValue:"Pending",
      categoryRoom:"Simple"
    },
    {
      reservationCode:"42220",
      fullName:"John Doe",
      pax:350,
      checkInDate:"8/09/2022",
      checkOutDate:"8/09/2022",
      statusValue:"Pending",
      categoryRoom:"Simple"
    },
    {
      reservationCode:"42210",
      fullName:"John Doe",
      pax:350,
      checkInDate:"8/09/2022",
      checkOutDate:"8/09/2022",
      statusValue:"Pending",
      categoryRoom:"Simple"
    },
    {
      reservationCode:"42231",
      fullName:"John Doe",
      pax:350,
      checkInDate:"8/09/2022",
      checkOutDate:"8/09/2022",
      statusValue:"Pending",
      categoryRoom:"Simple"
    },
    {
      reservationCode:"42225",
      fullName:"John Doe",
      pax:350,
      checkInDate:"8/09/2022",
      checkOutDate:"8/09/2022",
      statusValue:"Pending",
      categoryRoom:"Simple"
    },
    {
      reservationCode:"42205",
      fullName:"Juan ramon santos caba",
      pax:350,
      checkInDate:"8/09/2022",
      checkOutDate:"8/09/2022",
      statusValue:"Pending",
      categoryRoom:"Simple"
    },
    {
      reservationCode:"42205",
      fullName:"John Doe",
      pax:350,
      checkInDate:"8/09/2022",
      checkOutDate:"8/09/2022",
      statusValue:"Pending",
      categoryRoom:"Simple"
    },
    {
      reservationCode:"42205",
      fullName:"John Doe",
      pax:350,
      checkInDate:"8/09/2022",
      checkOutDate:"8/09/2022",
      statusValue:"Pending",
      categoryRoom:"Simple"
    },
    {
      reservationCode:"42205",
      fullName:"John Doe",
      pax:350,
      checkInDate:"8/09/2022",
      checkOutDate:"8/09/2022",
      statusValue:"Pending",
      categoryRoom:"Simple"
    },
    {
      reservationCode:"42205",
      fullName:"John Doe",
      pax:350,
      checkInDate:"8/09/2022",
      checkOutDate:"8/09/2022",
      statusValue:"Pending",
      categoryRoom:"Simple"
    },
    {
      reservationCode:"42205",
      fullName:"John Doe",
      pax:350,
      checkInDate:"8/09/2022",
      checkOutDate:"8/09/2022",
      statusValue:"Pending",
      categoryRoom:"Simple"
    },
    {
      reservationCode:"42205",
      fullName:"John Doe",
      pax:350,
      checkInDate:"8/09/2022",
      checkOutDate:"8/09/2022",
      statusValue:"Pending",
      categoryRoom:"Simple"
    },
    {
      reservationCode:"42205",
      fullName:"John Doe",
      pax:350,
      checkInDate:"8/09/2022",
      checkOutDate:"8/09/2022",
      statusValue:"Pending",
      categoryRoom:"Simple"
    },
    {
      reservationCode:"42205",
      fullName:"John Doe",
      pax:350,
      checkInDate:"8/09/2022",
      checkOutDate:"8/09/2022",
      statusValue:"Pending",
      categoryRoom:"Simple"
    },
    {
      reservationCode:"42205",
      fullName:"John Doe",
      pax:350,
      checkInDate:"8/09/2022",
      checkOutDate:"8/09/2022",
      statusValue:"Pending",
      categoryRoom:"Este es el ultimo"
    },
 ]
  ngOnInit(): void {
    this.auxData = this.data;
  }
  applyFilter(event: string) {
     this.page -= this.page
    this.myFilter = event
    this.nextButton.nativeElement.on('click',()=>{
     alert('hola')
    })
  
  }
  prevPage(){
    if(this.page != 0)
    this.page -=10
  }
  nextPage(){    
    this.page +=10
  }
  
  // filterWord() {
  // this.auxData = []
  //   this.data.map((e, i) => {      
  //     if (
  //       e.reservationCode.toLowerCase().includes(this.myFilter.toLowerCase())  ||
  //       e.fullName.toLowerCase().includes(this.myFilter.toLowerCase())
  //     ) {
  //       this.auxData.push(this.data[i]);
        
  //     }
  //   });
 // }

}
