function Line(p1,p2,p3) {
		this.p1 = p1;
		this.p2 = p2;
		this.p3 = p3;
	}
function possibleMove(from,to) {
    this.from = from;
    this.to = to;
}


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

function checkFields(name)
{
	for(var key in playing_lines){
    	if(playing_lines[key].p1.fill_color == name &&
    	 playing_lines[key].p2.fill_color == name && playing_lines[key].p3.fill_color == name ){
            console.log(key+" - ");

            if(playing_lines[key].p1.fill_color == 'Black' && !playing_lines[key].isFilledByPlayer1 ){
                console.log(key+" - before - "+playing_lines[key].isFilledByPlayer1);
                playing_lines[key].isFilledByPlayer1 = true;
                console.log(key+" - after - "+playing_lines[key].isFilledByPlayer1);
                lines[key].stroke('blue');
                setRemoveState("White");
            }
            else if(playing_lines[key].p1.fill_color == 'White' && !playing_lines[key].isFilledByPlayer2 ){
                console.log("2 - before - "+playing_lines[key].isFilledByPlayer2);
                playing_lines[key].isFilledByPlayer2 = true;
                console.log("2 - after - "+playing_lines[key].isFilledByPlayer2);
                lines[key].stroke('red');
                setRemoveState("Black");
            }

            layer.draw();
    	}
    }
    console.log("---"+(groupW.length+groupWInBoard.length)+"---");
    // check for winning 
    if(groupW.length+groupWInBoard.length <3)
    {
        console.log("Player1 won (Black)");
    }
    else if(groupB.length+groupBInBoard.length <3)
    {
        console.log("Player2 won (White)");
    }
}

function isValidMove(piece, target){

for(var key in playing_lines){
    //console.log(playing_lines[key].p1);
    //console.log(outlines[piece.id()]);
    //console.log(key);
    if(playing_lines[key].p1 == outlines[piece.id()] && playing_lines[key].p2 == target)
        return true;
    if(playing_lines[key].p3 == outlines[piece.id()] && playing_lines[key].p2 == target)
        return true;

    if(playing_lines[key].p2 == outlines[piece.id()] && playing_lines[key].p1 == target)
        return true;

    if(playing_lines[key].p2 == outlines[piece.id()] && playing_lines[key].p3 == target)
        return true;
    }
    return false;
}
var possible_Moves_B = []; 
var possible_Moves_W = []; 
function printPossibleMoves(player)
{
    var possible_Moves;
    if(player == "Black"){
        possible_Moves = possible_Moves_B;
    }
    else{
        possible_Moves = possible_Moves_W;
    }
    for(var i in possible_Moves)
        console.log(i+"- From: X:"+possible_Moves[i].from.x + "Y:"+possible_Moves[i].from.y+" , To: X:"+possible_Moves[i].to.x + "Y:"+possible_Moves[i].to.y);
}
function hasPossibleMoves(player)
{
    fillPossibleMoves(player);
    console.log("//////// checking for possible moves //////////");
    printPossibleMoves(player);
    if(player =="Black" && possible_Moves_B.length == 0)
        return false;
    else if(player =="White" && possible_Moves_W.length == 0)
        return false;
    return true;
}
function fillPossibleMoves(player)
{
    var possible_Moves = [];
    console.log("Player: "+player);
    var group;
    if(player == "Black"){
        group = groupBInBoard;
        possible_Moves_B = [];
        possible_Moves = possible_Moves_B;
    }
    else{
        group = groupWInBoard;
        possible_Moves_W = [];
        possible_Moves = possible_Moves_W;
    }
    for(var key in group)
    {
        var piece = group[key];
        console.log("piece: "+piece+" At: "+piece.id());
        
        for(var k in playing_lines)
        {
            console.log("Line: "+k);
            if(playing_lines[k].p1 == outlines[piece.id()]){
                console.log("p1: "+ piece.id());
                if(!playing_lines[k].p2.filled)
                    possible_Moves.push(new possibleMove(playing_lines[k].p1,playing_lines[k].p2));
            }
            else if(playing_lines[k].p2 == outlines[piece.id()])
            {
                console.log("p2: "+ piece.id());
                if(!playing_lines[k].p1.filled)
                    possible_Moves.push(new possibleMove(playing_lines[k].p2,playing_lines[k].p1));
                if(!playing_lines[k].p3.filled)
                    possible_Moves.push(new possibleMove(playing_lines[k].p2,playing_lines[k].p3));
            }
            else if(playing_lines[k].p3 == outlines[piece.id()]){
                console.log("p1: "+ piece.id());
                if(!playing_lines[k].p2.filled)
                    possible_Moves.push(new possibleMove(playing_lines[k].p3,playing_lines[k].p2));
            }
        }
    }
    console.log("Finished");
    
}