import { Pipe, PipeTransform } from '@angular/core';
import {reservationData} from '@Core/models/reservation.model'

@Pipe({
  name: 'filtro'
})
export class FiltroPipe implements PipeTransform {

  transform( reservationData: reservationData[], page: number = 0, search: string = '' ): reservationData[] {

    if ( search.length === 0 )
      return reservationData.slice(page, page + 10);
    
      
    const filteredUsers = reservationData.filter( user => { return user.fullName.toLowerCase().includes( search.toLowerCase() ) || user.reservationCode.toLowerCase().includes( search.toLowerCase() )});
    return filteredUsers.slice(page, page + 10);

  }

}