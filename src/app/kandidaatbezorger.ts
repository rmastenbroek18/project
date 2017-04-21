export class Kandidaatbezorger{

    constructor(
        public voornaam: string,
        public achternaam: string,
        public straatnaam: string,
        public huisnummer: number,
        public postcode: string,
        public plaats: string,
        public telefoon: number,
        public mobiel: number,
        public email: string,
        public geboortedatum: Date,
        public bankrekeningnummer: string,
        public bsn: number,
        public vervaldatumid: Date,
        public toevoeging?: string      
    ) { }

}