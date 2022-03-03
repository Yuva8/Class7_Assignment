

async function restCountry(){
    try {
 var res = await fetch("https://restcountries.com/v3.1/all");
 var data = await res.json();
 var Asia = data.filter(ele => ele.region === 'Asia');
 console.log(Asia);
 var population = data.filter(ele => ele.population<200000);
 console.log(population);
 data.forEach((ele)=>{
    console.log(ele.name);
    console.log(`${ele.capital},${ele.flag}`)
 })
 var total = data.reduce((sum, ele) => sum + ele.population, 0);
 console.log(total);
 var usd = data.filter((x)=> {
    for(var curr in x.currencies){
        if(x.currencies[curr] == 'USD'){
            return true;
        }
    }
}).map(x=>console.log(x));
console.log(usd);

    }
    catch (err) {
        console.log(err);
    }
}

restCountry();