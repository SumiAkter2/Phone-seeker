
// toggle spinner:

const toggleSpinner= displayStyle => {
  document.getElementById('spinner').style.display=displayStyle;
}

const toggleDetailResult= displayStyle => {
  document.getElementById('detail-result').style.display=displayStyle;
}
// error massege:

const errorMessage = document.getElementById('error-message').style.display='none';

// onclick button
const loadPhone=()=>{
  const searchInput = document.getElementById('search-id');
 //display spinner:
 toggleSpinner('block');
 toggleDetailResult('none');
 
   const searchText  = searchInput.value;
   searchInput.value = '';
 
  if(searchText==''){
    
    const errorMessage = document.getElementById('error-message').style.display='none';
    
 
  }
 
// fetch url :
const url=`https://openapi.programming-hero.com/api/phones?search=${searchText}`
fetch(url)
.then(res => res.json())
.then(data => displayResult(data.data.slice(0,20)))

}



   ///////////////////////////////////////////////////// 
// display result:
const displayResult =phones=>{
 
    const searchResult = document.getElementById('search-result');
    if(phones.length == 0){
      const errorMessage = document.getElementById('error-message').style.display='block';

    }
      searchResult.textContent='';
     
   phones?.forEach(phone=>{
         console.log(phone);
        const div= document.createElement('div');
      
        const errorMessage = document.getElementById('error-message').style.display='none';
       
        div.classList.add('col');
        div.innerHTML= `
        <div class= "card p-4  h-100">
                <img width="200" src="${phone.image}" class="card-img-top img-fluid img-thumbnail" alt="...">
            <div class="card-body">
                <h5 class="card-title">${phone.phone_name}</h5>
                <p class="card-text">${phone.brand}</p>
                <button onclick="loadDetails('${phone.slug}')" type="button" class="btn btn-bg btn-primary  fw-normal">Show Details</button>
            </div>
         
        </div>

        `;
        searchResult.appendChild(div);
       
    }); 
    toggleSpinner('none');
    toggleDetailResult('none');
}

/////////////////////////////////////////
//details check:
 const loadDetails= phoneId=>{
 const url =`https://openapi.programming-hero.com/api/phone/${phoneId}`
 fetch(url)
 .then(res=>res.json())
 .then(data=>displayDetailResult(data.data));

}
// show detail results :
 const displayDetailResult=phone=>{
   console.log(phone);
   const searchResult=document.getElementById('detail-result');
   searchResult.textContent='';
 const div = document.createElement('div');
 div.innerHTML=`
        <div class="row g-0 ps-4 rounded">
         <div class="col-md-4 ">
                 <img  src="${phone.image}" class=" img-margin img-thumbnail img-fluid card-img-top" alt="...">
        </div>
     <div class="col-md-8">
      <div class="card-body">
            <h3>${phone.name}</h3>
              <p class="fs-6 card-text"><span class="fw-bold">Release Date: </span> ${phone.releaseDate ? phone.releaseDate: 'Not available'}</p>
              <p ><span class="fw-bold">Id: </span> ${phone.slug}</p>
              <p class=" fw-bold">Main-freature:</p>
              <p > <span class="fw-bold">Storage:</span> ${phone.mainFeatures.storage}</p>
              <p ><span class="fw-bold">Display-size:</span> ${phone.mainFeatures.displaySize}  </p>
              <p > <span class="fw-bold">Chipset:</span> ${phone.mainFeatures.chipSet}</p>
             <p ><span class="fw-bold">Memory: </span> ${phone.mainFeatures.memory}</p>
             <p class="card-text fs-6"> <span class="fw-bold ">Sensor:</span> ${phone.mainFeatures.sensors}</p>
             <p class="fw-bold fs-4">Others:</p>
             <p> <span class="fw-bold">Bluetooth: </span>${phone.others ? phone.others.Bluetooth: 'Not available'}, <span class="fw-bold fs-6">Radio:</span>${phone.others ? phone.others.Radio: 'Not available'} ,<span class="fw-bold"> WLAn: </span>${phone.others ? phone.others.WLAN: 'Not available'},<span class="fw-bold"> GPS: </span>${phone.others ? phone.others.GPS: 'Not available'}, <span class="fw-bold">NFC: </span> ${phone.others ? phone.others.NFC: 'Not available'}</p>
      </div>
    </div>
  </div>
 `;
 // taggle:
 toggleDetailResult('block');
 searchResult.appendChild(div);
 }