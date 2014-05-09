	function Line(p1,p2,p3) {
			this.p1 = p1;
			this.p2 = p2;
			this.p3 = p3;
		}

	var testing = 'good' 


//defining the game's lines <<< this is the start point of defining the game's rules
	var playing_lines = {}; // this an array to ease the search of the completed lines in the game by a player
    //largest box lines
    playing_lines['top_first'] 	=   new Line(outlines['point_1'],outlines['point_2'] , outlines['point_3']);
 	console.log(playing_lines['top_first'].p1.fill_color)
 	console.log(playing_lines['top_first'].p2.fill_color)
 	console.log(playing_lines['top_first'].p3.fill_color)
    /*playing_lines['bottom_first']= 	new Line();
    playing_lines['left_first'] =   new  Line();
    playing_lines['right_first'] =	new Line();

    //medium box playing_lines
    playing_lines['top_second'] =	new Line();
    playing_lines['bottom_second']=	new Line();
    playing_lines['left_second'] =	new  Line();
    playing_lines['right_second']=	new Line();

    //small box playing_lines
    playing_lines['top_third'] = 	new Line();
    playing_lines['bottom_third'] = new Line();
    playing_lines['left_third'] = 	new  Line();
    playing_lines['right_third'] = 	new Line();

    //intersection playing_lines
    playing_lines['top_inter'] = 	new Line();
    playing_lines['bottom_inter'] = new Line();
    playing_lines['left_inter'] = 	new  Line();
    playing_lines['right_inter'] = 	new Line();*/

function checkFields()
{
	for(var key in playing_lines){
	if(playing_lines[key].p1.fill_color == playing_lines[key].p2.fill_color &&
	 playing_lines[key].p2.fill_color == playing_lines[key].p3.fill_color && playing_lines[key].p1.fill_color == 'Black'){
		console.log('OK');
		layer.add(lines[key]);
        lines[key].stroke('white');
        layer.draw();
        lines[key].strokeWidth(3);
	}
	else
		console.log('nope');
}
}