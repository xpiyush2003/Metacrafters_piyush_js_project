let NFT_ARRAY =[]; //array which will hold the

function mintnft(first_name,network,hair_colour,bling){       
    let NFT = {
        "first_name":first_name,
        "network":network,
        "hair_colour":hair_colour,
        "bling":bling
    };
   NFT_ARRAY.push(NFT);
}

function listNFTs(){
    for (let i = 0; i < NFT_ARRAY.length; i++) {
        console.log("first_name: "+NFT_ARRAY[i].first_name+" network: "+NFT_ARRAY[i].network+" hair_colour: "+NFT_ARRAY[i].hair_colour+" bling: "+NFT_ARRAY[i].bling);
    }
}

function getTotalSupply() {
   return NFT_ARRAY.length;
}

mintnft("Piyush","Ethereum","Black","Diamond_watch");
mintnft("Abhishek","Ripple","Grey","Diamond_chain");
listNFTs();
console.log("Total number of supplies: "+getTotalSupply());