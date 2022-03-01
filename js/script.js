console.log('allah');

const loadPhone=()=>{
const searchInput = document.getElementById('search-id');
const searchText = searchInput.value ;
searchInput.value = ' ';
console.log(searchText);

const url =`https://openapi.programming-hero.com/api/phones?search=${searchText}`
fetch(url)
.then(res=>res.json())
.then(data=>console.log(data.data));

}

