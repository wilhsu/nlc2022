const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '0488bbe325mshae2ae8da61979f3p1e6d70jsn10ad49b29fed',
		'X-RapidAPI-Host': 'stock-price4.p.rapidapi.com'
	}
};

fetch('https://stock-price4.p.rapidapi.com/price/TSLA', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));
    