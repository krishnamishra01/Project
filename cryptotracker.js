const form = document.querySelector('#searchForm');
const res = document.querySelector('#tableResult');
var upd; 
form.addEventListener('submit',(e)=>{

    e.preventDefault();
    

    const ctype = form.elements.coinType.value;

    fetchPrice(ctype);

});


const fetchPrice= async(ctype) =>{
    const r = await axios.get(`https://api.coinstats.app/public/v1/coins/${ctype}?currency=USD`);
    console.log(r.data.coin.price);
     const price = r.data.coin.price;
     const volume  = r.data.coin.volume;
     const change = r.data.coin.priceChange1d;
     const base = r.data.coin.name;
     const target = 'USD';
     var col="green";
    if(change<0){
        col="red";
    }


     res.innerHTML =`<tr style="background-color:blue; color:white; font-weight:700">
     <td>
         Property
     </td>
     <td>Value</td>
 </tr>
 <tr>
     <td>
        <b> ${base}</b>
     </td>
     <td style="color:${col};"><b>${price} ${target}</b></td>
 </tr>
 <tr>
     <td>
         <b>Volume(24hrs)</b>
     </td>
     <td><b>${volume}</b></td>
 </tr>
 <tr>
     <td>
         <b>Change(24hrs)</b>
     </td>
     
    <td style="color:${col};"><b>${change} ${target}</b></td>
 </tr>`

    

}

