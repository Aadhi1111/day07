var request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all")
request.send()
request.onload = function(){
    var res = JSON.parse(request.response);
    console.log(res);
    //a.Get all the countries from Asia continent /region using Filter function
    var region = res.filter((el)=>el.continents[0] == "Asia");
    var country1 = region.map((el)=>el.name.common);
    console.log(country1);

    //b.Get all the countries with a population of less than 2 lakhs using Filter function
    var pop = res.filter((ele)=>ele.population<200000);
    var country2 = pop.map((ele)=>ele.name.common);
    console.log(country2);

    //c.Print the following details name, capital, flag, using forEach function
    res.forEach((ele)=>{
        console.log(`Country Name : ${ele.name.common}   Capital : ${ele.capital}   Flag : ${ele.flag}`);
    })

    //d.Print the total population of countries using reduce function
    var tot = res.reduce((acc,cp)=>cp.population+acc,0);
    console.log(tot);

    //e.Print the country that uses US dollars as currency.
    
    var cur = res.filter((ele)=>ele.currencies && Object.keys(ele.currencies)=='USD');
    var country3 = cur.map((ele)=>ele.name.common);
    console.log(country3);
}