var form = document.getElementById('gif-form');
form.addEventListener('submit',getGiphs);

function getGiphs(e) {
  e.preventDefault();
  const searchTerm = document.querySelector(".search").value;
  fetch(`https://api.giphy.com/v1/gifs/search?&q=${searchTerm}&limit=100&api_key=3mIxmBZUIIPyb8R69gtxaW8Hsh74dFKV`)
  .then((response) => {return response.json(); })
  .then((resp => {
      var dataArray = resp.data
      console.log(dataArray);
      showGiphs(dataArray);
  }))
  .catch(err => console.log(err));
}

function showGiphs(data){
  var result = document.getElementsByClassName('results');
  var ret = `<div class="container">`;
  data.forEach((giphData) => {
    ret += `
      <img src="${giphData.images.fixed_width.url}" />
    `;
  });
  result[0].innerHTML = ret;
}