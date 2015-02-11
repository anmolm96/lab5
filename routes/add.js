var data = require("../data.json");

exports.addFriend = function(req, res)
{ 
	// Your code goes here
	res.render('add');
	var name = req.query.name;
	var description = req.query.description;
	var image = "http://lorempixel.com/400/400/people"
	var newFriend = {"name": name, "description": description, "imageURL": image};
	console.log(newFriend);
	data["friends"].push(newFriend);
	var fs = require('fs');
	var outputFilename = 'data.json';
	fs.writeFile(outputFilename,JSON.stringify(data,null,4),function(err) {
		if (err) {
			console.log(err);
		}
	});
 }
