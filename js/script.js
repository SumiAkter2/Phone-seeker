console.log('allah');
// Onclick button setup and search input value show:
const loadPhone=()=>{
const searchInput = document.getElementById('search-id');
const searchText = searchInput.value ;
searchInput.value = ' ';
 console.log(searchText);
// fetch url for search result:
const url =`https://openapi.programming-hero.com/api/phones?search=${searchText}`
fetch(url)
.then(res=>res.json())
.then(data=>displayResult(data.data));

}
// display result:
const displayResult = phones=>{
    const searchResult = document.getElementById('search-result');
      searchResult.textContent='';
    phones.forEach(phone=>{
         console.log(phone);
        const div= document.createElement('div');
        div.classList.add('col');
        div.innerHTML=`
        <div class=" card h-100">
           <img src="${phone.image}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${phone.phone_name}</h5>
                <p class="card-text">${phone.brand}</p>
                <button onclick="loadDetails('${phone.brand}')" type="button" class="btn btn-bg btn-primary fw-normal">Show Details</button>
            </div>
        </div>
        `;
        searchResult.appendChild(div);
    })
}

const loadDetails= phoneId=>{
 const url =`https://openapi.programming-hero.com/api/phone/apple_iphone_13_pro_max-${phoneId}`
 fetch(url)
 .then(res=>res.json())
 .then(data=>displayDetailResult(data));

}

const displayDetailResult=phone=>{
  console.log(phone)
  const searchResult=document.getElementById('detail-result');
const div = document.createElement('div');
div.innerHTML=`
   <img src="${phone.image}" class="card-img-top" alt="...">
   <div class="card-body">
        <p class="card-text">${phone.data.mainFeatures.storage}</p>
   </div>
`;
searchResult.appendChild(div);
}