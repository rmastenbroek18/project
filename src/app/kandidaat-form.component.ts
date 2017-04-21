import { Component } from '@angular/core';

import { Kandidaatbezorger } from './kandidaatbezorger';

@Component({
    selector: 'kandidaat-form',
    templateUrl: './kandidaat-form.component.html'
})

export class KandidaatFormComponent{
    //model = new Kandidaatbezorger("Richard", "Mastenbroek", "Rheezerend", 182, "7701 BK", "Dedemsvaart", 12, 12, "gmail.com", new Date("February 4, 2016 10:13:00") , "123", 123, new Date("February 4, 2016 10:13:00"))
    public model;
    onSubmit(value: any){
        this.model = new Kandidaatbezorger(value.voornaam, value.achternaam, value.straatnaam, value.huisnummer, value.postcode, value.plaats, value.telefoon, value.mobiel, value.email, value.geboortedatum, value.bankrekeningnummer, value.bsn, value.vervaldatumid, value.toevoeging);
        console.log(value);
    }
}