console.log('allah');

// toggle spinner:

const toggleSpinner= displayStyle => {
  document.getElementById('spinner').style.display=displayStyle;
}

//  const toggleSearchResult= displayStyle => {
//    document.getElementById('search-result').style.display=displayStyle;
//  }
 //Onclick button setup and search input value show:
const loadPhone=()=>{
const searchInput = document.getElementById('search-id');
//display spinner:
toggleSpinner('block');
//  toggleSearchResult('none');


const searchText = searchInput.value ;
searchInput.value = ' ';
 

 // fetch url for search result:
    const url =`https://openapi.programming-hero.com/api/phones?search=${searchText}`;
     fetch(url)
    .then(res=>res.json())
    .then(data=>displayResult(data.data.slice(0,20)));
   
    }


   ///////////////////////////////////////////////////// 
// display result:
const displayResult =phones=>{
 
    const searchResult = document.getElementById('search-result');
      searchResult.textContent='';
      
   phones?.forEach(phone=>{
         console.log(phone);
        const div= document.createElement('div');

        
        div.classList.add('col');
        div.innerHTML= `
        <div class= "card p-4  h-100">
           <img width="200" src="${phone.image}" class="card-img-top img-fluid" alt="...">
            <div class="card-body">
                <h5 class="card-title">${phone.phone_name}</h5>
                <p class="card-text">${phone.brand}</p>
                <button onclick="loadDetails('${phone.slug}')" type="button" class="btn btn-bg btn-primary fw-normal">Show Details</button>
            </div>
         
        </div>
        `;
        searchResult.appendChild(div);
    }); 
    toggleSpinner('none')
     
}

//

 const loadDetails= phoneId=>{
 const url =`https://openapi.programming-hero.com/api/phone/${phoneId}`
 fetch(url)
 .then(res=>res.json())
 .then(data=>displayDetailResult(data.data));

}

 const displayDetailResult=phone=>{
   console.log(phone);
   const searchResult=document.getElementById('detail-result');
   searchResult.textContent='';
 const div = document.createElement('div');
 div.innerHTML=`
        <div class="row g-0 ps-4">
         <div class="col-md-4 ">
              <img src="${phone.image}" class="img-margin img-fluid card-img-top" alt="...">
        </div>
     <div class="col-md-8">
      <div class="card-body">
           <h3>${phone.name}</h3>
            <p class="fs-6 card-text">Release Date: ${phone.releaseDate ? phone.releaseDate: 'Not available'}</p>
            <p >Id: ${phone.slug}</p>
            <h4>Main-freature:</h4>
            <p > Storage: ${phone.mainFeatures.storage}</p>
            <p >Display-size: ${phone.mainFeatures.displaySize}  </p>
            <p >Chipset: ${phone.mainFeatures.chipSet}</p>
           <p >Memory: ${phone.mainFeatures.memory}</p>
           <p class="card-text ">Sensor: ${phone.mainFeatures.sensors}</p>
           <h4>Others:</h4>
          <p> bluetooth: ${phone.others ? phone.others.Bluetooth: 'no'}, Radio:${phone.others ? phone.others.Radio: 'Not available'}</p>
      </div>
    </div>
  </div>
 `;

 searchResult.appendChild(div);
 }