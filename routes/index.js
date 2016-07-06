var vd = require('../json_local.json');
// going out from directory
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', 
		  { 
	  		title: 'Express',
	  		name: 'Jeya',
	  		localdata: vd
	  	  }
  );
};