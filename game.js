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
    playing_lines['bottom_first']= 	new Line(outlines['point_22'],outlines['point_23'] , outlines['point_24']);
    playing_lines['left_first'] =   new  Line(outlines['point_1'],outlines['point_10'] , outlines['point_22']);
    playing_lines['right_first'] =	new Line(outlines['point_3'],outlines['point_15'] , outlines['point_24']);

    //medium box playing_lines
    playing_lines['top_second'] =	new Line(outlines['point_4'],outlines['point_5'] , outlines['point_6']);
    playing_lines['bottom_second']=	new Line(outlines['point_19'],outlines['point_20'] , outlines['point_21']);
    playing_lines['left_second'] =	new  Line(outlines['point_4'],outlines['point_11'] , outlines['point_19']);
    playing_lines['right_second']=	new Line(outlines['point_6'],outlines['point_14'] , outlines['point_21']);

    //small box playing_lines
    playing_lines['top_third'] = 	new Line(outlines['point_7'],outlines['point_8'] , outlines['point_9']);
    playing_lines['bottom_third'] = new Line(outlines['point_16'],outlines['point_17'] , outlines['point_18']);
    playing_lines['left_third'] = 	new  Line(outlines['point_7'],outlines['point_12'] , outlines['point_16']);
    playing_lines['right_third'] = 	new Line(outlines['point_9'],outlines['point_13'] , outlines['point_18']);

    //intersection playing_lines
    playing_lines['top_inter'] = 	new Line(outlines['point_2'],outlines['point_5'] , outlines['point_8']);
    playing_lines['bottom_inter'] = new Line(outlines['point_17'],outlines['point_20'] , outlines['point_23']);
    playing_lines['left_inter'] = 	new  Line(outlines['point_10'],outlines['point_11'] , outlines['point_12']);
    playing_lines['right_inter'] = 	new Line(outlines['point_13'],outlines['point_14'] , outlines['point_15']);

function checkFields()
{
	for(var key in playing_lines){
	if(playing_lines[key].p1.fill_color == playing_lines[key].p2.fill_color &&
	 playing_lines[key].p2.fill_color == playing_lines[key].p3.fill_color){
		console.log('OK');
		layer.add(lines[key]);
        if(playing_lines[key].p1.fill_color == 'Black')
            lines[key].stroke('blue');
        if(playing_lines[key].p1.fill_color == 'White')
            lines[key].stroke('red');
        layer.draw();
        lines[key].strokeWidth(3);
	}
	else
		console.log('nope');
}
}
/*function isValidMove(original, target){
    console.log[ "print"];
    if(playing_lines['top_first'].p1 == original.id() && playing_lines['top_first'].p2 == target ){
        return true;
        console.log[target];
    }
    else
        return false;
    console.log[target];

}*/ 

function isValidMove(piece, target){
    console.log(outlines[piece.id()]);
    console.log(target);

    if(playing_lines['top_first'].p1 == outlines[piece.id()] &&playing_lines['top_first'].p2 == target)
     return true;

    else
        return false;
}
