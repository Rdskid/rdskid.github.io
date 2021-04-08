const requestURL = 'https://raw.githubusercontent.com/Rdskid/rdskid.github.io/master/Final/data/directory-data.json';
fetch(requestURL)  
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    const directory = jsonObject['directory'];

    for (let i = 0; i < directory.length; i++ ) {
      let card = document.createElement('section');
      let bName = document.createElement('h2');
      let bTel = document.createElement('p');
      let bWeb= document.createElement('p');

      let image = document.createElement('img');

      bName.textContent = directory[i].businessname;
      bTel.textContent = 'Phone: ' + directory[i].businesstel;
      bWeb.textContent = 'Web:' + directory[i].web;

      image.setAttribute('src', directory[i].logo);
      image.setAttribute('alt', directory[i].businessname + ' ' + '-' + ' ' + directory[i].order);

      card.appendChild(bName);
      card.appendChild(bTel);
      card.appendChild(bWeb);
      card.appendChild(image);

      
      
      document.querySelector('div.cards').appendChild(card);
    }
  });


  var elements = document.getElementsByClassName("section");

  function listView() {
    for (i = 0; i < elements.length; i++) {
      elements[i].style.width = "100%";
    }
  }
  
 
  function gridView() {
    for (i = 0; i < elements.length; i++) {
      elements[i].style.width = "33.33%";
    }
  }
  
  var container = document.getElementById("btnContainer");
  var btns = container.getElementsByClassName("btn");
  for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function() {
      var current = document.getElementsByClassName("active");
      current[0].className = current[0].className.replace(" active", "");
      this.className += " active";
    });
  }