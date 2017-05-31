var newUlElem = document.createElement('ul');
var newButtonElem = document.createElement('button');

newUlElem.id += 'id-ul';
newButtonElem.id += 'id-button';
newButtonElem.innerText = "Dodaj";

var body = document.getElementsByTagName('body');
body[0].appendChild(newUlElem);
body[0].appendChild(newButtonElem);

var ulElem = document.getElementById('id-ul');
var liElem = document.getElementsByTagName('li');
var buttonElem = document.getElementById('id-button');

function checkOnclickEvent(param) {
    var newLiElem = document.createElement('li');	
	newLiElem.innerHTML = 'item ' + liElem.length;  
    ulElem.appendChild(newLiElem);
}

buttonElem.addEventListener('click', function(e) {
    checkOnclickEvent();
});
