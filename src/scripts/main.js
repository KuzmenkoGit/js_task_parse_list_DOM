'use strict';

const employeesList = document.querySelectorAll('ul li');

sortList(employeesList);

getEmployees(employeesList);

function sortList(list) {
  const sortedArray = [...list].sort((a, b) => {
    return (
      Number.parseInt(b.dataset.salary.replace(/[$,]/g, '')) -
      Number.parseInt(a.dataset.salary.replace(/[$,]/g, ''))
    );
  });

  const parentLi = sortedArray[0].parentNode;

  sortedArray.forEach((li) => {
    parentLi.appendChild(li);
  });
}

function getEmployees(list) {
  return [...list].map((item) => ({
    name: item.innerText,
    position: item.dataset.position,
    salary: Number.parseInt(item.dataset.salary.replace(/[$,]/g, '')),
    age: item.dataset.age,
  }));
}
