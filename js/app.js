document.querySelector("#cp").addEventListener("input", function () {
  if (this.value.length == 5) {
    let url = `https://geo.api.gouv.fr/communes?codePostal=${this.value}&fields=nom,code,codesPostaux,codeDepartement,codeRegion,population&format=json&geometry=centre`;

    //     fetch(url).then((response) =>
    //       response.json().then((data) => console.log(data))
    //     );
    //   }
    // });

    fetch(url)
      .then((response) =>
        response
          .json() //le 1er then ns permet de formatter la reponse
          .then((data) => {//le 2em va ns permettre de traiter les données
            console.log(data);
            let affichage = "<ul>";
            for (let ville of data) {
              affichage += `<li><strong>${ville.nom}</strong> - ${ville.population} habitants</li> `;
            }
            affichage += "</ul>";
            document.querySelector("#villes").innerHTML = affichage;
          })
      )
      .catch((err) => console.log("Erreur : " + err)); //Permet d'afficher les error lorsk sa ne fonctionne pas
  } else {
    let sms;
    sms = "this value is invalid";
    document.querySelector("#villes").innerHTML = sms;
    // document.querySelector("").classList.add("text-danger");
    // document.querySelector("sms").classList.add("text-danger");
  }
});

// fetch("https://api.github.com/users/MariamaBalde")
//   .then((response) => response.json())
//   //   .then(reponse2 => console.table(reponse2))
//   .then((data) => {
//     output.textContent = "";
//     output.textContent = `Compte de ${data.name}`;
//     const img = document.createElement("img");
//     img.src = data.avatar_url;
//     img.width = "100";
//     output.appendChild(img);
//   });
