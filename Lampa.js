export default class Lampa{
    //adattagok
    #allapot;
    #szuloElem;
    #divElem;
    #id = 0;

    constructor(szuloElem, id){
        this.#szuloElem = szuloElem;
        this.#id = id;
        
        this.#allapotMegadas();
        this.#megjelenit();
    }
    
    //tagfüggvények
    #allapotMegadas(){
        let randomszam = Math.floor(Math.random()*100)+1;
        if(randomszam < 21){
            this.#allapot = true;
        }
        else{
            this.#allapot = false;
        }
    }

    #megjelenit(){
        let txt = "";
        if(this.#allapot===true){
            txt += `<div class="felkapcsolva"></div>`
        }else{
            txt += `<div class="lekapcsolva"></div>`
        }
        this.#szuloElem.append(txt);
    }

    get allapot(){
        return this.#allapot;
    }
}