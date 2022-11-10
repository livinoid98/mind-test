const modal = document.querySelector('.another-share-modal-back');
const close = document.querySelector('.another-share-title-wrap img');
const open = document.querySelector('.share-wrap div');

open.onclick = function(){
    modal.style.display = "block";
};

close.onclick = function(){
    modal.style.display = "none";
};