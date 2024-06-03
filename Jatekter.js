import Lampa from "./Lampa.js";

export default class Jatekter{
    //adattagok
    #meret;
    #lista=[" "," "," "," "," "," "," "," "," "];

    constructor(meret){
        this.#meret = meret;
        this.#megjelenit();
    }
    
    //tagfüggvények
    #megjelenit(){
        let szuloElem = $(".jatek");
        szuloElem.empty();
        this.#lista.forEach((ertek, index)=>{
            this.#lista[index] = new Lampa(szuloElem, index);
        });
        console.log(this.#lista);
    }
}