

// //------------------------------

// // Request data goes here
// // The example below assumes JSON formatting which may be updated
// // depending on the format your endpoint expects.
// // More information can be found here:
// // https://docs.microsoft.com/azure/machine-learning/how-to-deploy-advanced-entry-script
// const requestBody = "" ;

// const requestHeaders = new Headers({"Content-Type" : "application/json"});

// // Replace this with the primary/secondary key, AMLToken, or Microsoft Entra ID token for the endpoint
// const apiKey = "";
// if (!apiKey)
// {
// 	throw new Exception("A key should be provided to invoke the endpoint");
// }
// requestHeaders.append("Authorization", "Bearer " + apiKey)

// // This header will force the request to go to a specific deployment.
// // Remove this line to have the request observe the endpoint traffic rules
// requestHeaders.append("azureml-model-deployment", "amlworkspace-fwyfs-1");

// const url = "https://amlworkspace-fwyfs.eastus.inference.ml.azure.com/score";

// fetch(url, {
//   method: "POST",
//   body: JSON.stringify(requestBody),
//   headers: requestHeaders
// })
// 	.then((response) => {
// 	if (response.ok) {
// 		return response.json();
// 	} else {
// 		// Print the headers - they include the request ID and the timestamp, which are useful for debugging the failure
// 		console.debug(...response.headers);
// 		console.debug(response.body)
// 		throw new Error("Request failed with status code" + response.status);
// 	}
// 	})
// 	.then((json) => console.log(json))
// 	.catch((error) => {
// 		console.error(error)
// 	});

document.getElementById('demo').innerHTML = 'hello js'

// writing into an HTML element, using innerHTML
// writing inot the HTML output using document.write()
// writing into the alert box, using window.alert()
// writing into the browser, using console.log()
arr = ['car','boat','plane']
let l = arr.length;
for (let i = 0; i < l; i++){
	console.log(i)
}
// const person = new Object()
// person.firstname = "Germain";
// person.lastname = 'Safari';
// person.age = 23;

function Person(firstname, lastname, age) {
	this.firstname = firstname;
	this.lastname = lastname;
	this.age = age;
};
let person = new Person('Germain', 'Safari', 23)
console.log(person)

const fruits = [
	{name:'bananas', quality: 20},
	{name:'kiwi', quality:20},


]
function myFruits({quality}) {
	return quality > 200
}
// a web worker is a Js running in the background, without affecting the perfomance of the page.
// when executing scripts in an HTML page, the page becomes unresponsive till the script is finished.
// a web worker is a Js that runs in the background, independently of other scripts, without affecting the perfomance 
// of the page.

// Js Fetch API: the fetch API interface allows web browser to make HTTP requests to a web servers.
fetch(file)
.then(x => x.text)
.then(y => myDisplay(y))

//with AJAX -- Asynchronous Javascript and XML, you can
// read data from a web server - after the page has loaded
// update a web page without reloading the page
// send data to a web server 

// With the HTML DOM , js can access and change elements of an HTML docx DOM means Document Object Model

