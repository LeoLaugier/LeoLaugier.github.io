'use strict';

document.addEventListener('DOMContentLoaded', function ()
{
	const listener = new Listener();

	listener.decode = function ()
	{
		const email = document.getElementById('text-interaction').firstChild;

		email.nodeValue = email.nodeValue
			.replace('Please interact', 'zgivenk_tnom')
			.replaceAll('with the web page', 'kkdomainet')
			.replace('to show my email adress.', 'fr');
        
        setTimeout(() => {
			email.nodeValue = email.nodeValue
                .replace(' ', '@')
                .replaceAll(' ', '.')
                .replaceAll(new RegExp('[ktz]', 'g'), '')
                .replace('domaine', 'berkeley')
                .replace('nom', 'laugier')
                .replace('given', 'leo')
                .replace('fr', 'edu');
		}, 500); // 1000 ms = 1 second
	}

	listener.on();
});




// Listener

function Listener ()
{
}

Listener.prototype.decode = null;

Listener.prototype.on = function ()
{
	this.listener = this.__onInteraction.bind(this);

	document.addEventListener('mouseenter', this.listener, true);
	document.addEventListener('focus', this.listener, true);
}

Listener.prototype.off = function ()
{
	document.removeEventListener('mouseenter', this.listener, true);
	document.removeEventListener('focus', this.listener, true);

	delete this.listener;
}

Listener.prototype.__onInteraction = function ()
{
	this.off();
	this.decode();
}