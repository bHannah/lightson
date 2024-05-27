import Lampa from "./Lampa.js";

export default class Jatekter{
    //adattagok
    #meret;
    #lista=[false,false,false,false,false,false,false,false,false];

    constructor(meret){
        this.#meret = meret
        this.#megjelenit();
    }
    
    //tagfüggvények
    #megjelenit(){
        let szuloElem = $(".jatek");
        szuloElem.empty();
        for (let i = 0; i < this.#meret*this.#meret; i++) {
            new Lampa(szuloElem, i);
            this.#lista[i] = Lampa.allapot;
            console.log(Lampa.allapot)
        }
    }
}