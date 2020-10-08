const filter = document.querySelector('#filter');
const names = document.querySelector('.name-list');
const namesGroup = document.querySelectorAll('.list-group-item');


filter.addEventListener('keyup', filterNames);


function filterNames(e){

    const textInput = e.target.value.toLowerCase();
    Array.from(namesGroup).forEach(item =>{

        name = item.lastElementChild.textContent.toLowerCase();
        if(name.indexOf(textInput) != -1){
            item.style.display = 'block';
        }else{
            item.style.display = 'none';
        }
        
    })
}

