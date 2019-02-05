function myQuery(){
 fetch(`http://46.101.146.101:8081/categories/`)
  .then((Response) => Response.json())
  .then((data) => {
    var ret;
    console.log(data);
    Array.from(data).forEach((item) => {
      ret += `
        <ul>
          <li>${item.id}</li>
          <li">${item.title}</li>
          <li>
            <img src="${item.category_image_url}"/>
          </li>
        </ul>
      `;
    });
    document.getElementById('root').innerHTML = ret;
  });
}
myQuery();