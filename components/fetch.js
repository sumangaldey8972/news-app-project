let searchdata = async(url) =>{
    try{
        let res = await fetch(url)
        let data = res.json();
        console.log(data);
        return data;
    }catch(err){
        console.log(err);
    }
    
}


export {searchdata};