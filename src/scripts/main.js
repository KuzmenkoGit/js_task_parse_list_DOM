'use strict';

const employeesList = document.querySelector('ul');

sortList(employeesList);

getEmployees(employeesList);

function sortList(list) {
  const listItems = Array.from(list.children);
  const sortedArray = listItems.sort((a, b) => {
    return parseSalary(b.dataset.salary) - parseSalary(a.dataset.salary);
  });

  sortedArray.forEach((li) => {
    list.appendChild(li);
  });
}

function getEmployees(list) {
  return [...list.children].map((item) => ({
    name: item.textContent.trim(),
    position: item.dataset.position,
    salary: parseSalary(item.dataset.salary),
    age: Number(item.dataset.age),
  }));
}

function parseSalary(string) {
  return Number(string.replace(/[^\d.-]/g, ''));
}
