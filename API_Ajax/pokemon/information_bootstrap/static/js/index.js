'use strict';

pokemon.forEach(p => {
    
  if(p.id == 1) {
    var section = document.getElementById('place-1')
  }
  if(p.id == 2) {
    var section = document.getElementById('place-2')
  }
  if(p.id == 3) {
    var section = document.getElementById('place-3')
  }
  if(p.id == 4) {
    var section = document.getElementById('place-4')
  }
  if(p.id == 5) {
    var section = document.getElementById('place-5')
  }
  
  var img = document.createElement('img');
  img.src = p.image;
  section.appendChild(img);
  
  var name = document.createElement('h3');
  name.innerHTML = p.name;
  section.appendChild(name);
  
  // var id_label = document.createElement('label');
  // id_label.innerHTML = 'Id:'
  // section.appendChild(id_label);
  // var id = document.createElement('p');
  // id.innerHTML = p.id;
  // id.classList.add('id');
  // id_label.appendChild(id);
  
  // var height_label = document.createElement('label');
  // height_label.innerHTML = 'Height:'
  // section.appendChild(height_label);
  // var height = document.createElement('p');
  // height.innerHTML = p.height;
  // height.classList.add('height');
  // height_label.appendChild(height);
  
  // var weight_label = document.createElement('label');
  // weight_label.innerHTML = 'Weight:'
  // section.appendChild(weight_label);
  // var weight = document.createElement('p');
  // weight.innerHTML = p.weight;
  // weight.classList.add('weight');
  // weight_label.appendChild(weight);
  
  var moveList = document.createElement('div');
  moveList.classList.add('move_list');
  section.appendChild(moveList);
  var move_label = document.createElement('label');
  move_label.innerHTML = 'Moves:'
  moveList.appendChild(move_label);
  var ul = document.createElement('ul');
  moveList.appendChild(ul);
  p.moves.forEach(move => {
    var move_name = document.createElement('li');
    move_name.innerHTML = move;
    ul.appendChild(move_name);
  });
  
});