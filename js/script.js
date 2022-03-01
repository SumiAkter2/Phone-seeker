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
    phones.forEach(phone=>{
        console.log(phone);
        const div= document.createElement('div');
        div.classList.add('col');
        div.innerHTML=`
        <div  class=" card h-100">
        <img src="${phone.image}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${phone.phone_name}</h5>
          <p class="card-text">${phone.brand}</p>
        </div>
      </div>
        `;
        searchResult.appendChild(div);
    })
}

