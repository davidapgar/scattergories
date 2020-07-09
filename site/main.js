import * as Categories from './categories.js';
import { CountDown } from './count_down.js';

const gameTimer = document.getElementById('gameTimer');

let countDown = new CountDown(3, function() {
  alert("Done!");
});
countDown.display();

gameTimer.onclick = function() {
  countDown.event();
}

let list = Categories.lists[0];
for (let i = 0; i < list.length; i++) {
  let category = document.querySelector(`#category-${i+1}`);
  category.textContent = list[i];
}
/*
fetch('list.json')
.then(response => response.json())
.then(json => {
  console.log("did it");
  // get a random list
  listIdx = Math.floor(Math.random() * json.length);
  console.log(listIdx);
  list = json[listIdx];
  if (list.length != 12) {
    console.log(`List isn't length 12, was: ${list.length}`);
    return;
  }
  for (let i = 0; i < list.length; i++) {
    let category = document.querySelector(`#category-${i+1}`);
    category.textContent = list[i];
  }
})
.catch(error => {
  console.log("didn't");
})
*/
