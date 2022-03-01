console.log('allah');
// Onclick button setup and search input value show:
const loadPhone=()=>{
const searchInput = document.getElementById('search-id');
const searchText = searchInput.value ;
searchInput.value = ' ';
 
// fetch url for search result:
    const url =`https://openapi.programming-hero.com/api/phones?search=${searchText}`;
     fetch(url)
    .then(res=>res.json())
    .then(data=>displayResult(data.data.slice(0,20)));
    }
// display result:
const displayResult =phones=>{
  console.log(phones)
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
              <img src="${phone.image}" class="mt-3 img-fluid card-img-top" alt="...">
        </div>
     <div class="col-md-8">
      <div class="card-body">
           <h3>${phone.name}</h3>
           <p class="fs-6 card-text">Release Date: ${phone.releaseDate}</p>
           <p class="card-text">Id: ${phone.slug}</p>
            <h4>Main-freature:</h4>
            <p class="card-text">
               Storage: ${phone.mainFeatures.storage}</p>
            <p class="card-text">Display-size: ${phone.mainFeatures.displaySize}</p>
            <p class="card-text">Chipset: ${phone.mainFeatures.chipSet}</p>
           <p class="card-text">Memory: ${phone.mainFeatures.memory}</p>
           <p class="card-text">Sensor: ${phone.mainFeatures.sensors}</p>
          
      </div>
    </div>
  </div>
 `;

 searchResult.appendChild(div);
 }