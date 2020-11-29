 function getCats() {
            return [
                {
                    "name": "Люся",
                    "age": "1 год",
                    "color": "трехцветная",
                    "additional_info": {"vaccinations": true, "passport": true}
                },
                {
                    "name": "Том",
                    "age": "3 месяца",
                    "color": "белый",
                    "additional_info": {"vaccinations": false, "passport": false}
                },
                {
                    "name": "Макс",
                    "age": 2,
                    "color": "серый",
                    "additional_info": {"vaccinations": false, "passport": true}
                },
                {
                    "name": "Василий",
                    "age": 3,
                    "color": "черный",
                    "additional_info": {"vaccinations": true, "passport": true}
                }
            ];
        }


function generateCards(cardsElem) {
    let getcats = getCats();
    for (let item in getcats) {
        let card = document.createElement("div");
        card.classList.add("card");
        card.classList.add("col-3");

        let title = document.createElement("h2");
        title.innerText = getcats[item].name+" / "+getcats[item].age;

        let template = document.createElement("div");
        template.classList.add("template");



        let pic = document.createElement("img");
        pic.setAttribute("src", "https://picsum.photos/id/988/300");
        pic.classList.add("col-6");

        let addinfo = document.createElement("p");
        addinfo.innerText = `Дополнительная информация:
                             Цвет: ${getcats[item].color}
                             Документы: ${getcats[item].additional_info["passport"] ? "да" : "нет"}
                             Прививки: ${getcats[item].additional_info["vaccinations"] ? "да" : "нет"}`;
        addinfo.classList.add("col-6");                     



        template.append(pic,addinfo)
        card.append(title, template);
        cardsElem.append(card);
    }
}

generateCards(document.querySelector(".cats"));



let articles = [
            {
                id: 1,
                title: "JS",
                text: "Статья про JS",
                author: "Александр"
            },
            {
                id: 2,
                title: "PHP",
                text: "Статья про PHP",
                author: "Виталий"
            },
            {
                id: 3,
                title: "Базы Данных",
                text: "Статья про Базы Данных",
                author: "Евгения"
            },
            {
                id: 4,
                title: "HTML",
                text: "Статья про HTML",
                author: "Виталий"
            }
        ];
        
let goods = [
            {
                title: "Пианино",
                price: 3000,
                count: 25
            },
            {
                title: "Гитара",
                price: 1200,
                count: 40
            },
            {
                title: "Барабаны",
                price: 2700,
                count: 12
            },
            {
                title: "Флейта",
                price: 900,
                count: 50
            },
            {
                title: "Арфа",
                price: 3400,
                count: 5
            }
        ];
/*
function generateTableHead(arrObj) {
    
    return "<td>"+Object.keys(arrObj[0]).join("</td><td>")+"</td></tr>";
}

*/
function generateTable(arrObj) {
    let table = document.createElement("table");
    table.innerHTML = "<tr><th>"+Object.keys(arrObj[0]).join("</th><th>")+"</th></tr>";;
    for (let obj of arrObj) {
        let row = table.insertRow(0);
        for (let propName in obj) {
            let td = document.createElement("td");
            row.append(td);
            td.append(obj[propName]);  
        }

    table.append(row);

    }
 
    document.querySelector(".table").append(table);


}

generateTable(articles);
generateTable(goods);