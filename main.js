document.querySelector('#heads').addEventListener('click', hideAndRunHeads)
document.querySelector('#tails').addEventListener('click', hideAndRunTails)
document.querySelector('#reload').addEventListener('click', tryAgain)


let x = 0

function hideAndRunHeads(){
    document.querySelector('#heads').style.display = 'none';
	document.querySelector('#tails').style.display = 'none';
    
    x = Math.floor(Math.random() * 2);
    if(x === 0){
        document.querySelector('#result').innerText='Tails Wins';
        document.querySelector('.hidden').classList.toggle('hidden')
    }else{
        document.querySelector('#result').innerText='Heads Wins';
        document.querySelector('.hidden').classList.toggle('hidden')
    }}

function hideAndRunTails(){
    document.querySelector('#heads').style.display = 'none';
	document.querySelector('#tails').style.display = 'none';

    x = Math.floor(Math.random() * 2);
    if(x === 0){
        document.querySelector('#result').innerText='Tails Wins';
        document.querySelector('.hidden').classList.toggle('hidden')

    }else{
        document.querySelector('#result').innerText='Heads Wins';
        document.querySelector('.hidden').classList.toggle('hidden')
    }
}

function tryAgain(){
    window.location.reload();
}
