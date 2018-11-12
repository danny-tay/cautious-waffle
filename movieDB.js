var movieDB = [
	{
		title: "In Bruges",
		raiting: 5.0,
		hasWatched: true
	},
	{
		title: "Frozen",
		raiting: 4.5,
		hasWatched: false
	},
	{
		title: "Mad Max Fury Road",
		raiting: 5.0,
		hasWatched: true
	},
	{
		title: "Les Miserables",
		raiting: 3.5,
		hasWatched: false
	}
];

function printMovie(movie){
	if (movie.hasWatched == true){
		console.log("You have watched \"" + movie.title + "\" - " + movie.raiting + " stars");
	}
	else{
		console.log("You have not seen \"" + movie.title + "\" - " + movie.raiting + " stars");
	}
}

function printAllMovies(){
	movieDB.forEach(printMovie);
}