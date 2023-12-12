const scaleButton = document.getElementById("btn-login");
const elementToScale = document.getElementById("wrapper");
const cancelIcon = document.getElementById('cancel-icon');

scaleButton.addEventListener('click', function(){
    elementToScale.style.transform = 'scale(1)';  
});

cancelIcon.addEventListener('click', function(){
    elementToScale.style.transform = 'scale(0)';  
});