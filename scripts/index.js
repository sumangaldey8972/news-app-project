// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page

import navbar from "../components/navbar.js";
document.getElementById("navbar").innerHTML = navbar();


import {searchdata} from "../components/fetch.js";

let id;
document.getElementById("search_input").addEventListener("input", () =>{
    let search = document.getElementById("search_input").value;
    // console.log(search);
    let url = `https://masai-mock-api.herokuapp.com/news?q=${search}`;
    
    if (id){
        clearTimeout(id);
    }
    id = setTimeout(() => {
        main(url);
    },1000)
});



// let newsdata = JSON.parse(localStorage.getItem("newa")) || [];
let main = async (url) =>{
    let data = await searchdata(url);
    console.log(data.articles);
    set(data.articles);

}


let newsdata = JSON.parse(localStorage.getItem("news")) || [];
let set = (data) => {
    data.map(ele => {
        let img = document.createElement("img");
        img.src = ele.url;

        console.log("img:", img);
        let p1 = document.createElement("p");
        p1.innerText = ele.title;
        console.log("title: ", p1);

        let p2 = document.createElement("p");
        p1.innerText = ele.description;
        console.log("description: ", p2); 
       
        newsdata.push(img, p1, p2);
        // console.log("newsdara: ", newsdata);
        window.Location.href = "news.html";
        localStorage.setItem("news", JSON.stringify(newsdata));
    });

}