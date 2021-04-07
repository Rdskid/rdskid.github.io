const requestURL = '';
fetch(requestURL)  
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    const directory = jsonObject['directory'];

    for (let i = 0; i < directory.length; i++ ) {
      let card = document.createElement('section');
      let bName = document.createElement('h2');
      let bAdd = document.createElement('p');
      let bTel = document.createElement('p');
      let bEmail= document.createElement('p');
      let bWeb= document.createElement('p');
      let bOwner= document.createElement('p');
      let bFy= document.createElement('p');

      let image = document.createElement('img');

      bName.textContent = directory[i].businessname;
      bAdd.textContent = 'Address: ' + directory[i].businessaddress;
      bTel.textContent = 'Phone: ' + directory[i].businesstel;
      bEmail.textContent = 'Email:' + directory[i].businessemail;
      bWeb.textContent = 'Web:' + directory[i].web;
      bOwner.textContent = 'Owner:' + directory[i].owner;
      bFy.textContent = 'Founded:' + directory[i].Founded;

      image.setAttribute('src', directory[i].logo);
      image.setAttribute('alt', directory[i].businessname + ' ' + '-' + ' ' + directory[i].order);

      card.appendChild(bName);
      card.appendChild(bAdd);
      card.appendChild(bTel);
      card.appendChild(bEmail);
      card.appendChild(bWeb);
      card.appendChild(bOwner);
      card.appendChild(bFy);
      card.appendChild(image);

      
      
      document.querySelector('div.cards').appendChild(card);
    }
  });


  var elements = document.getElementsByClassName("section");