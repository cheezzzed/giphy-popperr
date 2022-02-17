/**
 * Fetches GIFs from the Giphy API
 *
 * @param {String} searchTerm what you want to search giphy for
 * @param {Function} callback the function to call when giphy replies with some gifs
 */
let getGif = function(searchTerm, callback) {
	// learn about how the giphy API wants you to construct your URLs to make a request here:
	// https://developers.giphy.com/docs/api/endpoint#search
	const GIPHY_API = 'https://api.giphy.com/v1/gifs/search?api_key=' + GIPHY_API_KEY + '&rating=G&';
	
	// axios is a package for fetching data via ajax.
	axios.get(GIPHY_API + 'q=' + searchTerm)
		.then(function(response) {
			callback(response.data.data)
		})
		.catch(function (error) {
			console.warn(error);
		})
}











/*
 * simple example of how to get cat gifs and console log the results
 */

let topicName = document.querySelector('.topic')
let myButton = document.querySelector('.submit-topic')

topicName.addEventListener('keyup', function(event) {
	// myButton.textContent = `Click count: ${event.detail}`;

	// search giphy for whatever is typed in

	// get what was typed in topicName
	// send it to giphyAPI

	// get the value of top00icName
	// call getGif "value"


	let type = function(){
	getGif(topicName.value, function(gifData) {
			console.log(gifData)
			// put all gif on screen

			// loop through array
			// making a gif for each object

			// loop through array
			// make an img elemnent
			// get src from the object // object.images.original.url
			// append on body

			let createdImg = document.createElement("img")
			createdImg.setAttribute('src' , gifData[0].images.orginal.url)
			img.classList.add('new-img')
			body.append (createdImg)


		})
}

topicName.addEventListener('keypress' , type)

	
  });


