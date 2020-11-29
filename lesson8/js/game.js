'use strict';

let playobj = {
                cat: "Кот",
                book: "Книга",
                car: "Машина"
            };

function generateField(n) {
    if (n < 3) return

    let section = document.getElementsByTagName('section')[0];
    let cnt = 0;	
  		for (let i=0; i < n; i++) {
  			let img = document.createElement('img');
  			img.setAttribute("src","img/feild.png");
  			img.setAttribute("id",cnt);
  			section.append(img);
  			cnt++;
  			for (let l=0; l < n-1; l++) {
  				let img = document.createElement('img');
  				img.setAttribute("src","img/feild.png");
  				img.setAttribute("id",cnt);
  				section.append(img);
  				cnt++;
  			}
  			section.append(document.createElement("br"));
  		}
/*  	let	arrObj = Object.keys(playobj);*/
for (let prise of Object.keys(playobj)) {
	document.getElementById(Math.floor(Math.random()*(n*n))).setAttribute("prise",prise);
}

  }
    
    

generateField(10);