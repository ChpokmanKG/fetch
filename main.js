function myQuery(){
 fetch(`http://46.101.146.101:8081/categories/`)
  .then((Response) => Response.json())
  .then((data) => {
    var ret;
    console.log(data);
    Array.from(data).forEach((item) => {
      ret += `
        <div class="card">
            <p class="p-id">${item.id}</p>
            <div class="card-text">
                <span>${item.title}</span>
                <img src="${item.category_image_url}">
            </div>
        </div>
      `;
    });
    document.getElementById('root').innerHTML = ret;
  });
}
myQuery();

        /* <ul>
          <li>${item.id}</li>
          <li">${item.title}</li>
          <li>
            <img src="${item.category_image_url}"/>
          </li>
        </ul> */