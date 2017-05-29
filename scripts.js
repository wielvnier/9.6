var newUlElem = document.createElement('ul');
var newButtonElem = document.createElement('button');

newUlElem.id += 'id-ul';
newButtonElem.id += 'id-button';

var body = document.getElementsByTagName('body');
body[0].appendChild(newUlElem);
body[0].appendChild(newButtonElem);

var ulElem = document.getElementById('id-ul');
var buttonElem = document.getElementById('id-button');

function checkOnclickEvent(param) {
  var newLiElem = document.createElement('li');
	ulElem.appendChild(newLiElem);
	newLiElem.innerHTML = 'item';
}

buttonEleme.addEventListener('click', function(e) {
  checkOnclickEvent()
});
