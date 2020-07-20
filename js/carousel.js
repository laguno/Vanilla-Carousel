class Carousel {
	constructor(obj){
		this.container = obj.container;
		this.title = obj.title;
		this.subtitle = obj.subtitle;
	}
	setTitle(){
		var container = document.getElementById("" + this.container + "");
		var titleElem = document.createElement("H2");
		var subTitleElem = document.createElement("H5");
		var title = document.createTextNode(this.title);
		var subtitle = document.createTextNode(this.subtitle); 
		container.appendChild(titleElem);
		container.appendChild(subTitleElem);
		titleElem.appendChild(title);
		subTitleElem.appendChild(subtitle);
	}
}
var options1 = {
	container: "my-carousel",
	title: "Fresh and just uploaded content",
	subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
	fetchCards: function (chunkSize) {
		// Function that returns "chunkSize" card oject to be displayed in the carousel
		// Each card object is structured as follows:
		return {
			image: "http://writingexcercises.co.uk/images2randomimage/cyclist.jpg", //url or random image taken from the web
			type: "elearning", // a string with the following allowed values (video, elearning, learning_plan, playlist)",
			duration: 3600, // a duration in number of seconds (to be converted in human readable format, see mockup)
			title: "Welcome to Effective Time Management",
			cardinality: "single" // Whether this card is single or a stack of cards. Possible values = "single" or "collection"
		};
		// Simulate a random delay of an API call here, to demonstrate the usage of card placeholders
	}
};
document.addEventListener('DOMContentLoaded', (event) => {
	var carousel1 = new Carousel(options1);
	carousel1.setTitle();
});

/* var options2 = {
	container: "my-carousel2",
	title: "Another carousel instance title",
	subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
	fetchCards: function (chunkSize) {
		// see otions1 for the specifications of this function
	}
}; */
//var carousel2 = new Carousel(options2);