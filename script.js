var options = document.querySelectorAll('.option');

function play(e)
{
	let p = e.target.textContent;
	let c = complay();
	let con = document.querySelector('footer>.end');
	let x = 4;
	for(let i = 0; i < 3; i++)
		if(p == options[i].textContent)
			x = i;

	display(p, options[c].textContent);

	if(x == (c+1)%3)
		con.textContent = 'You win!';
	else if(c == x)
		con.textContent = 'Game Draw!';
	else
		con.textContent = 'You loose!';

}

function display(p,c)
{
	let pl = document.querySelector('.player');
	let co = document.querySelector('.computer');
	pl.textContent = 'Your option: '+p;
	co.textContent = "Computer: "+c;
}

function complay()
{
	let o = Math.floor(Math.random()*3);
	return o;
}

for(let i = 0; i < options.length; i++)
	options[i].addEventListener('click', play);