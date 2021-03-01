async function getResponse () {
  let response = await fetch("numbers.json")
  let content = await response.json()
  return (content.numbers)
}

let active_Tab = 0;
let month_Data = [];
let month_nav = document.querySelector('.month-nav');
let table = document.querySelector('.table');

getResponse().then(function(result){
  for (month in result) {
    month_Data.push(result[month]);
    if (result[month].is_visible) {
      month_nav.innerHTML += `
        <li class="month-nav__item">
          <a class="month-nav__link">${ucFirst(result[month].alias)}</a>
        </li>
        `
    }
  }
}).then(() => {
  tableData(active_Tab);
  let month_tab = document.querySelectorAll('.month-nav__link');
  
  // Tab area
  month_tab.forEach((tab) =>
    tab.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector('.input-search').value = '';
      month_tab.forEach(
        (child) => child.classList.remove('mounth-nav--active')
      );
  
      tab.classList.add('mounth-nav--active');
      active_Tab = Object.values(month_tab).indexOf(tab);

      let table_line = document.querySelectorAll('.table__line');
      for (let i = 0; i < table_line.length; i++) {
        table_line[i].remove()
      }

      tableData(active_Tab);
    })
  );
  month_tab[active_Tab].classList.add('mounth-nav--active');


  //  Search area
  document.querySelector('.input-search').oninput = function () {
    let val = this.value.trim();
    let numbersItems = document.querySelectorAll('.table__collumn--numbers');
    let allItems = document.querySelectorAll('.table__line');

    if ( val != '' ) {
      numbersItems.forEach(function (elem) {
        if (elem.innerText.search(val) == -1) {
          allItems[Object
            .values(numbersItems)
            .indexOf(elem)]
            .classList.add('hide');
        }
        else {
          allItems[Object
            .values(numbersItems)
            .indexOf(elem)]
            .classList.remove('hide');
        }
      })
    }
    else {
      numbersItems.forEach(function (elem) {
        elem.classList.remove('hide');
      })
    }
  }

})


function ucFirst(str) {
  if (!str) return str;
  return str[0].toUpperCase() + str.slice(1);
}

function tableData(active_Tab) {
  let re = /([0-9]+)\-([0-9]+)\-([0-9]+)/;
  for (cell in month_Data[active_Tab].number_list) {
    let tr = document.createElement("tr");
    
    tr.className = "table__line"
    tr.innerHTML += `
        <td class="table__column table__collumn--numbers">
          ${month_Data[active_Tab].number_list[cell].number}
        </td>
        <td class="table__column">
          ${month_Data[active_Tab].number_list[cell].cdate
            .substr(0, 10).replace(re, '$3.$2.$1')}
        </td>
      ` 
    table.appendChild(tr);
  }
}