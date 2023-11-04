//padaryt acordijona

//knygu sarasas

let knygu_katalogas ={
    
    grozine:[
     {
         isbn:"gl1236k",
         leidimo_metai:"2010",
         pavadinimas:"meskucio istorijos",
         puslapiu_skaicius:"100"
     }, 
     {
         isbn:"gl1446k",
         leidimo_metai:"2023",
         pavadinimas:"meskucio pasakos",
         puslapiu_skaicius:"100"
     },
     {
         isbn:"g11436k",
         leidimo_metai:"2020",
         pavadinimas:"meskucio patarles",
         puslapiu_skaicius:"100"
     },
     {
         isbn:"gl123hg",
         leidimo_metai:"2017",
         pavadinimas:"meskucio istorijos",
         puslapiu_skaicius:"200"
     }
 ],
     biografijos:[
     
         {
             isbn:"gl5566k",
             leidimo_metai:"2018",
             pavadinimas:"daktaras",
             puslapiu_skaicius:"100"
         },
         {
             isbn:"gl13336k",
             leidimo_metai:"2023",
             pavadinimas:"stalius",
             puslapiu_skaicius:"150"
         },
         {
             isbn:"g123236k",
             leidimo_metai:"2012",
             pavadinimas:"konditeris",
             puslapiu_skaicius:"100"
         },
         {
             isbn:"gl88736k",
             leidimo_metai:"2023",
             pavadinimas:"elektrikas",
             puslapiu_skaicius:"100"
         }
 ],
     eilerasciai:[
         {
             isbn:"g8736k",
             leidimo_metai:"2022",
             pavadinimas:"poemos",
             puslapiu_skaicius:"100"
         },
         {
             isbn:"gl88736k",
             leidimo_metai:"2013",
             pavadinimas:"poezijos",
             puslapiu_skaicius:"300"
         },
         {
             isbn:"gl136k",
             leidimo_metai:"2010",
             pavadinimas:"skanduotes",
             puslapiu_skaicius:"10"
         },
         {
             isbn:"gl88720k",
             leidimo_metai:"2023",
             pavadinimas:"donelaicio metai",
             puslapiu_skaicius:"100"
         }    
 ]
}

// isvedame jei knyga yra nauja ir knygu kieki kategorijoje

for (let kategorija in knygu_katalogas) {
    console.log('---------------');
    console.log(kategorija, knygu_katalogas[kategorija]);
        for (let knyga of knygu_katalogas[kategorija]) {
            console.log(knyga);
                if (knyga.leidimo_metai === '2023') {
                console.log(`Nauja knyga`);       
        }
    }
}

// ikeliame informacija i akordijona 

for (let book of knygu_katalogas['grozine']) {
    for (let property in book) {
        console.log(property + ": " + book[property]);
        document.querySelector('.accordion-bodyOne').innerHTML += `<p>${property}: ${book[property]}</p>`;
    }
}

for (let book of knygu_katalogas['biografijos']) {
    for (let property in book) {
        console.log(property + ": " + book[property]);
        document.querySelector('.accordion-bodyTwo').innerHTML += `<p>${property}: ${book[property]}</p>`;
    }
}

for (let book of knygu_katalogas['eilerasciai']) {
    for (let property in book) {
        console.log(property + ": " + book[property]);
        document.querySelector('.accordion-bodyThree').innerHTML += `<p>${property}: ${book[property]}</p>`;
    }
}
