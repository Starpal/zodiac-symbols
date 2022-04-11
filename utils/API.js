import { API_URL } from '@env';

export async function getRandomDegree() {
    const myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');
    myHeaders.append('cache-control', 'no-cache');
    myHeaders.append('Accept', 'application/json');
    try {
		const res = await fetch(`${API_URL}/degree`, {
			method: 'GET',
			headers: myHeaders,
        });
		return await res.json();
	} catch (error) {
		if (error.response) {
			// The request was made and the server responded with a status code
			// that falls out of the range of 2xx
			console.log("response.data", error.response.data);
			console.log("response.status", error.response.status);
			console.log("response.headers", error.response.headers);
		} else if (error.request) {
			// The request was made but no response was received
			// `error.request` is an instance of XMLHttpRequest in the browser and an instance of
			// http.ClientRequest in node.js
			console.log("e.request", error.request);
		} else {
			// Something happened in setting up the request that triggered an Error
			console.log('There has been a problem with getting RANDOM operation: ' + error.message);
		}
		throw error;
	}
}

export async function getDegreeSearch(sign, degree) {
	try {
		const res = await fetch(`${API_URL}/DBdegree`, {
			method: 'POST',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json',
				'cache-control': 'no-cache'
			},
			body: JSON.stringify({
				sign,
				degree
			})
		});
		return await res.json();
	} catch (err) {
		console.log('There has been a problem with your DBSearch operation: ' + err.message);
		throw err;
	}
}

export async function getRandomSky() {
    const myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');
    myHeaders.append('cache-control', 'no-cache');
    myHeaders.append('Accept', 'application/json');
    try {
		const res = await fetch(`${API_URL}/uploads`, {
			method: 'GET',
			headers: myHeaders,
        });
		const resJson = await res.json();
		const imgArray = [resJson.contentType, resJson.imageBase64];
		return imgArray;

	} catch (error) {
		if (error.response) {
			// The request was made and the server responded with a status code
			// that falls out of the range of 2xx
			console.log("response.data", error.response.data);
			console.log("response.status", error.response.status);
			console.log("response.headers", error.response.headers);
		} else if (error.request) {
			// The request was made but no response was received
			// `error.request` is an instance of XMLHttpRequest in the browser and an instance of
			// http.ClientRequest in node.js
			console.log("e.request", error.request);
		} else {
			// Something happened in setting up the request that triggered an Error
			console.log('There has been a problem wile getting RANDOM image: ' + error.message);
		}
		throw error;
	}
}