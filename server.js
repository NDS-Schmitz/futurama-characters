const { request } = require('express');
const express = require('express');
const app = express();
const PORT = 4000;

//webpage data

document.querySelector('button').addEventListener('click', apiRequest);

async function apiRequest() {
	const name = document.querySelector('input').value;
	try {
		const response = await fetch(
			`https://salmon-fossa-tutu.cyclic.app/${name}`
		);
		const data = await response.json();

		console.log(data);
		document.querySelector('h2').innerText = data.Speices;
	} catch (error) {
		console.log(error);
	}
}

//json data

const characters = {
	fry: {
		'Full Name': 'Phillip. J Fry',
		'Birth Date': 'August 14, 1974',
		Speices: 'Human',
		Planet: 'Earth',
	},
	bender: {
		'Full Name': 'Bender Bending Rodríguez',
		'Birth Date': '2996',
		Speices: 'Robot',
		Planet: 'Earth',
	},
	farnsworth: {
		'Full Name': 'Hubert J. Farnsworth',
		'Birth Date': 'April 9, 2841',
		Speices: 'Human',
		Planet: 'Earth',
	},
	leela: {
		'Full Name': 'Turanga Leela',
		'Birth Date': 'July 29, 2975',
		Speices: 'Mutant',
		Planet: 'Earth',
	},
	amy: {
		'Full Name': 'Amy Wong-Kroker',
		'Birth Date': 'December 2979',
		Speices: 'Human',
		Planet: 'Mars',
	},
	zoidberg: {
		'Full Name': 'John A. Zoidberg',
		'Birth Date': 'May 5th, 2914',
		Speices: 'Decapodian',
		Planet: 'Decapod 10',
	},
	unknown: {
		Description:
			'This character does not exist or was destroyed by Lrrr of the planet omicron persei 8.',
	},
};

//ROUTERS
app.get('/', (request, response) => {
	response.sendFile(`${__dirname}/index.html`);
});

app.get('/api/:name', (request, response) => {
	const charName = request.params.name.toLowerCase();
	if (characters[charName]) {
		response.json(characters[charName]);
	} else {
		response.json(characters['unknown']);
	}
});

//server

app.listen(PORT, (request, response) => {
	console.log(
		`The server is running on port: ${PORT} you should go catch it before it gets away`
	);
});
