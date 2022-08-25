import { Component, OnInit } from '@angular/core';

interface reservationData{
  reservationCode:string,                                                     
  fullName:string,                             
  pax :number,
  checkInDate :string,
  checkOutDate :string,                                                
  statusValue :string,
  categoryRoom :string
}
@Component({
  selector: 'app-reservations',
  templateUrl: './reservations.component.html',
  styleUrls: ['./reservations.component.scss']
})
export class ReservationsComponent implements OnInit {

  constructor() { }
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
    this.auxData = this.data.map(a=>a);
  }
  
  filterWord() {
  this.auxData = []
    this.data.map((e, i) => {      
      if (
        e.reservationCode.toLowerCase().indexOf(this.myFilter.toLowerCase()) != -1 ||
        e.fullName.toLowerCase().indexOf(this.myFilter.toLowerCase()) != -1 
      ) {
        this.auxData.push(this.data[i]);
        
      }
    });
  }

}
