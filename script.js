var options = document.querySelectorAll('.option');
var reset = document.querySelector('.reset');

var player = 0, computer = 0;

function rst(e)
{
	var p = document.querySelectorAll('.opt');
	var q = document.querySelectorAll('.points');
	for(let i = 0; i < 2; i++){
		p[i].textContent = '';
	}
	q[0].textContent = 'You: 0';
	q[1].textContent = 'Computer: 0';

	p = document.querySelector('.end');
	p.textContent='';

}

function play(e)
{
	let p = e.target.textContent;
	let c = complay();
	let con = document.querySelector('footer>.end');
	let x = 4;
	for(let i = 0; i < 3; i++)
		if(p == options[i].textContent)
			x = i;

	display(p, options[c].textContent, '.player', '.computer', 
		'Your option: ', 'computer: ');

	if(x == (c+1)%3){
		player++;
		con.textContent = 'You win!';
	}
	else if(c == x)
		con.textContent = 'Game Draw!';
	else{
		computer++;
		con.textContent = 'You loose!';
	}
	display(player, computer, '.play', '.comp', 
		'You: ', 'Computer: ');

}

function display(p,c,s1,s2,m1,m2)
{
	let pl = document.querySelector(s1);
	let co = document.querySelector(s2);
	pl.textContent = m1+p;
	co.textContent = m2+c;
}

function complay()
{
	let o = Math.floor(Math.random()*3);
	return o;
}

for(let i = 0; i < options.length; i++)
	options[i].addEventListener('click', play);

reset.addEventListener('click', rst);