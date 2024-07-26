// // const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Seattle';
// const options = {
// 	method: 'GET',
// 	headers: {
// 		'x-rapidapi-key': 'e625a7f725mshf5b36de029295bcp1580cfjsn2ea98b0ebdf0',
// 		'x-rapidapi-host': 'weather-by-api-ninjas.p.rapidapi.com'
// 	}
// };

// try {
// 	const response = await fetch(url, options);
// 	const result = await response.text();
// 	console.log(result);
// } catch (error) {
// 	console.error(error);
// }

function getdata(){
	const city=search.value;
	const options = {
		method: 'GET',
		headers: {
			'x-rapidapi-key': 'e625a7f725mshf5b36de029295bcp1580cfjsn2ea98b0ebdf0',
			'x-rapidapi-host': 'weather-by-api-ninjas.p.rapidapi.com'
		}
	};

	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+city,options)
	.then(Response => Response.json())
	.then(res=>{
		console.log(res);
	})
	.catch(err => console.log(err))
}

getdata();