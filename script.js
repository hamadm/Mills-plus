<<<<<<< HEAD
function restart()
{
    // reset logic 
    turn = "Black";
    state = "fill_state"
    var possible_Moves_B = []; 
    var possible_Moves_W = []; 
    for(var key in playing_lines)
    {
        playing_lines[key].isFilledByPlayer1 = false;
        playing_lines[key].isFilledByPlayer2 = false;
    }

    // reset document 
    document.getElementById("player1").style.color = "green";
    document.getElementById("player1").style.fontWeight = "bold";
    document.getElementById("player2").style.color = "gray";
    document.getElementById("player2").style.fontWeight = "normal";
    // reset Lines
    for(var key in lines)
    {
        lines[key].stroke('black');
        lines[key].strokeWidth(3);
    }

    //reset outlines
    for(var key in outlines)
    {
        outlines[key].filled = false;
        outlines[key].fill_color = null;
    }
    //destroy all pieces
    //piecesLayer = new Kinetic.Layer();
    for(var i in groupB){
        groupB[i].destroy();
    }
    for(var i in groupW){
        groupW[i].destroy();
    }
    for(var i in groupBInBoard){
        groupBInBoard[i].destroy();
    }
    for(var i in groupWInBoard){
        groupWInBoard[i].destroy();
    }
    groupB = []; // in the filling state
    groupW = []; // in the filling state
    groupBInBoard = []; // in the move state
    groupWInBoard = []; // in the move state
    loadPieces("Black");
    loadPieces("White");

    layer.draw();
    piecesLayer.draw();
    layer.listening(true);
    piecesLayer.listening(true);
    outlinesLayer.listening(true);
    outlinesLayer.draw();
    stage.draw();
    console.log("Restarted");
}
    //Settings
    //postions of the original place of the pieces in the start of the game
    var originalXPosW = 555;
    var originalYPosW = 690;
    var originalXPosB = 45;
    var originalYPosB = 690;
    var state = "fill_state"; // 1- fill_state , 2- move_state , 3- remove_state
    
    // setting who to start
    turn = "Black"; // always the black starts

    //image pieces settings
    var b_piece = new Image();
    b_piece.src = 'img/b-piece.png';

    var w_piece = new Image();
    w_piece.src = 'img/w-piece.png';
    var piece_radius = 25; // the piece radius to set the postion

    //keeping track and state
    var score = {}
    score["Black"] = 0;
    score["White"] = 0;
//Start of initializing board
    // intinalizing the stage  
    var stage = new Kinetic.Stage({
        container: 'container',
        width: 600,
        height: 750
    });
    // creating the layer of the board that has the lines and outlines
    var layer = new Kinetic.Layer(); 
=======

var stage = new Kinetic.Stage({
        container: 'container',
        width: 600,
        height: 800
      });

      var layer = new Kinetic.Layer();
>>>>>>> FETCH_HEAD



    var lines = {};
    //largest box lines
    lines['top_first'] = new Kinetic.Line({
        points: [45, 45, 555, 45]
    });

    lines['bottom_first'] = new Kinetic.Line({
        points: [45, 555, 555, 555]
    });
    lines['left_first'] = new Kinetic.Line({
        points: [45, 45, 45, 555]
    });
    lines['right_first'] = new Kinetic.Line({
        points: [555, 45, 555, 555]
    });

    //medium box lines
    lines['top_second'] = new Kinetic.Line({
        points: [130, 130, 470, 130]
    });
    lines['bottom_second'] = new Kinetic.Line({
        points: [130, 470, 470, 470]
    });
    lines['left_second'] = new Kinetic.Line({
        points: [130, 130, 130, 470]
    });
    lines['right_second'] = new Kinetic.Line({
        points: [470, 130, 470, 470]
    });

    //small box lines
    lines['top_third'] = new Kinetic.Line({
        points: [215, 215, 385, 215]
    });
    lines['bottom_third'] = new Kinetic.Line({
        points: [215, 385, 385, 385]
    });
    lines['left_third'] = new Kinetic.Line({
        points: [215, 215, 215, 385]
    });
    lines['right_third'] = new Kinetic.Line({
        points: [385, 215, 385, 385]
    });

    //intersection lines
    lines['top_inter'] = new Kinetic.Line({
        points: [299, 45, 299, 215]
    });
    lines['bottom_inter'] = new Kinetic.Line({
        points: [299, 555, 299, 385]
    });
    lines['left_inter'] = new Kinetic.Line({
        points: [45, 299, 215, 299]
    });
    lines['right_inter'] = new Kinetic.Line({
        points: [555, 299, 385, 299]
    });


    //initializing the defult lines and adding them
    for(var key in lines)
    {
        layer.add(lines[key]);
        lines[key].stroke('black');
        lines[key].strokeWidth(3);
    }
    
<<<<<<< HEAD
=======
    var radius = 10;
>>>>>>> FETCH_HEAD
    var outlines = {
    point_1: {x: 45,y: 45},
    point_2: {x: 299,y: 45},
    point_3: {x: 555,y: 45},

    point_4: {x: 130,y: 130},
    point_5: {x: 299,y: 130},
    point_6: {x: 470,y: 130},

    point_7: {x: 215,y: 215},
    point_8: {x: 299,y: 215},
    point_9: {x: 385,y: 215},

    point_10: {x: 45,y: 299},
    point_11: {x: 130,y: 299},
    point_12: {x: 215,y: 299},
    point_13: {x: 385,y: 299},
    point_14: {x: 470,y: 299},
    point_15: {x: 555,y: 299},

    point_16: {x: 215,y: 385},
    point_17: {x: 299,y: 385},
    point_18: {x: 385,y: 385},

    point_19: {x: 130,y: 470},
    point_20: {x: 299,y: 470},
    point_21: {x: 470,y: 470},

    point_22: {x: 45,y: 555},
    point_23: {x: 299,y: 555},
    point_24: {x: 555,y: 555},
    };

<<<<<<< HEAD
    
    // adding the small circles outlines
    var outlinesLayer =  new Kinetic.Layer();
=======
    // adding the small circles outlines
>>>>>>> FETCH_HEAD
    for(var key in outlines)
    {
        var c = new Kinetic.Circle({
            x: outlines[key].x,
            y: outlines[key].y,
            radius: 8,
            fill: 'black',
<<<<<<< HEAD
            id: key
            
        });
        c.hitFunc(function(context) {
          context.beginPath();
          context.arc(0,0,40,0,2*Math.PI);
          context.closePath();
          context.fillStrokeShape(this);
        });
        outlinesLayer.draw();
        outlinesLayer.add(c);
    }
    outlinesLayer.on('click',function(evt){
        console.log(state);
        console.log(evt.target.id());
        if(state == "fill_state")
            addInFill(turn,evt.target.id())

    });
    function addInFill(t,o) // turn , outline key
    {
        var piece = null;
        if(t == "Black")
            piece = groupB[groupB.length-1];
        else
            piece = groupW[groupW.length-1];
        movePieceTo(piece,o);
        
    }
    function movePieceTo(p,o) //piece, outline key
    {
        var valid = false;
        var outline = outlines[o];
        var piece = p;
        if(!outline.filled){
            if(piece.name() == "Black"){
                    groupB.pop();
                    groupBInBoard.push(piece);
                }
                else{
                    groupW.pop();
                    groupWInBoard.push(piece);
                }
                piece.setPosition({x:outline.x - piece_radius, y:outline.y - piece_radius});
                piece.inRightPlace = true; //Piece is put in the board(to check later if it's not then return it to original place)
                outline.filled = true;
                outline.fill_color = piece.name();
                piece.id(o);
                
                setTimeout(function() {
                    piece.setDraggable(false);
                    console.log(state);
                    changeTurn();
                    console.log(state);
                    checkFields(piece.name());
                }, 50);
        }
            piecesLayer.draw();
    }
    var piecesLayer = new Kinetic.Layer();

    //groups that has the piceses that are not in the board yet (stat= filling_board)
    var groupB = []; // in the filling state
    var groupW = []; // in the filling state
    var groupBInBoard = []; // in the move state
    var groupWInBoard = []; // in the move state
    b_piece.onload = function() {
        loadPieces("Black");
    }
    w_piece.onload = function() {
        loadPieces("White");
    }
function loadPieces(p) {
    // black pieces
    if(p =="Black"){
        console.log("Black is loaded");
        for(var i=0 ; i<4 ;i++){
            var c = new Kinetic.Image ({
            image: b_piece,
            x: originalXPosB-piece_radius,
            y: originalYPosB-piece_radius,
            draggable: true,
            name: 'Black',
            id:0
            });
            groupB.push(c);
            piecesLayer.add(c);
            c.cache();
            c.filters([Kinetic.Filters.RGB]);
            c.red(100);
            piecesLayer.draw();
          } 
        piecesLayer.draw();
    }
      //white pieces
    else if(p == "White")
    {
        console.log("White is loaded");
          for(var i=0 ; i<4 ;i++){
            var c = new Kinetic.Image ({
            image: w_piece,
            x: originalXPosW-piece_radius,
            y: originalYPosW-piece_radius,
            draggable: false,
            name: 'White',
            id:0
            });
            groupW.push(c);
            piecesLayer.add(c);
            c.cache();
            c.filters([Kinetic.Filters.RGB]);
            c.red(100);
          } 
          piecesLayer.draw();
    }
}
      
//End of initializing board


      // checking if reached outline or not to snap
      function isNearOutline(circle, outline) {
        var a = circle;
        var o = outline;
        var ax = a.getX()+piece_radius;
        var ay = a.getY()+piece_radius;
=======
        });
        layer.add(c);
    }


    var piecesLayer = new Kinetic.Layer();
    
    for(var i=0 ; i<9 ;i++){
        var c = new Kinetic.Circle ({
        x: 45,
        y: 700,
        radius: 25,
        fill: 'black',
        draggable: true,
        name: 'black'
        });
        piecesLayer.add(c);

      } 
      //white pices
      for(var i=0 ; i<9 ;i++){
        var c = new Kinetic.Circle ({
        x: 555,
        y: 700,
        radius: 25,
        fill: 'white',
        draggable: true,
        name: 'White'
        });
        piecesLayer.add(c);
      } 
      stage.add(piecesLayer);
      // checking if reched outline or not to snap
      function isNearOutline(circle, outline) {
        var a = circle;
        var o = outline;
        var ax = a.getX();
        var ay = a.getY();
>>>>>>> FETCH_HEAD
        if(ax >= o.x - 42 && ax <= o.x + 42 && ay >= o.y - 42 && ay <= o.y + 42) {
          return true;
        }
        else {
          return false;
        }
      }
<<<<<<< HEAD
        function dragStartF(piece)
        {
            piece.moveToTop();
            piecesLayer.draw();
        }

        piecesLayer.on('dragstart', function(evt) {
            var piece = evt.target;
            dragStartF(piece);
            
        });
        /*piecesLayer.on('click', function(evt) {
            if(state == "move_state"){
                var piece = evt.target;
                piece.size({ width:70, height:70});
                piecesLayer.draw();
                console.log(piece.width());
                //dragStartF(piece);
            }
            
        });*/
        function dragEndF(piece)
        {
            if(state == "fill_state"){
            for(var key in outlines)
            {
              var outline = outlines[key];
              if(isNearOutline(piece, outline) && !outline.filled) {
                if(piece.name() == "Black"){
                    var piece = groupB.pop();
                    groupBInBoard.push(piece);
                }
                else{
                    var piece = groupW.pop();
                    groupWInBoard.push(piece);
                }
                piece.setPosition({x:outline.x - piece_radius, y:outline.y - piece_radius});
                piece.draw();
                piece.inRightPlace = true; //Piece is put in the board(to check later if it's not then return it to original place)
                outline.filled = true;
                outline.fill_color = piece.name();
                piece.id(key);
                
                setTimeout(function() {
                    piece.setDraggable(false);
                    changeTurn();
                    checkFields(piece.name());
                    
                }, 50);
                
                break;
              }
            }
            // returning the piece to its original place if 
            if(!piece.inRightPlace) {
                piece.setPosition({x:(piece.name()=='White')?originalXPosW- piece_radius:originalXPosB- piece_radius, y:(piece.name()=='White')?originalYPosW - piece_radius:originalYPosB - piece_radius});
              }
          }
          else if(state == "move_state")
          {
            var valid = false;
            for(var key in outlines)
            {
                var outline = outlines[key];
                if(isNearOutline(piece, outline) && !outline.filled)
                {
                    if(isValidMove(piece,outline)){ //isValidMove(piece,outline)
                        outlines[piece.id()].filled = false;
                        outlines[piece.id()].fill_color = null;
                        piece.id(key);
                        valid = true; //set this local variable to true to tell this method that the piece found its right plases and not to return it to original place
                        piece.setPosition({x:outline.x - piece_radius, y:outline.y - piece_radius});
                        piece.draw();
                        outline.filled = true;
                        outline.fill_color = piece.name();
                        changeTurn();
                        checkFields(piece.name());
                        //fillPossibleMoves(piece.name());
                        
                    }
                }
            }
            //return to original place because it's unvalid
            if(!valid)
            {
                piece.setPosition({x:outlines[piece.id()].x - piece_radius, y:outlines[piece.id()].y - piece_radius});
            }

          }
            piecesLayer.draw();
        }
        piecesLayer.on('dragend', function(evt) {
            var piece = evt.target;
            dragEndF(piece);
        });
        /*stage.on('click', function(evt) {
            console.log(stage.getPointerPosition());
            //dragEndF();
        });*/
    var pstate = state;
    function setRemoveState(color)
    {
        pstate = state;
        // do action to show what you could remove
        if(color == "Black")
            group = groupBInBoard;
        else
            group = groupWInBoard;
 
            for(var k in group){
                console.log(group[k].name());
            }

            
        removeDraggable(turn);
        piecesLayer.draw();
        state = "remove_state";
        outlinesLayer.listening(false);
        piecesLayer.on('click', function(evt) {
        if(state == "remove_state")
        {
            var piece = evt.target;
            if(piece.name() == color && piece.id() != 0)
            {
                unsetRemoveState();
                console.log(piece.id()+" Was removed");
                outlines[piece.id()].filled = false;
                outlines[piece.id()].fill_color = null;
                var index = group.indexOf(piece);
                group.splice(index, 1);

                for(var k in group){
                console.log(group[k].id()+" - "+group[k].name());
                }
                piece.destroy();
                // check for winning 
                if(groupW.length+groupWInBoard.length <3)
                {
                    winning("Black","All piece of player2 was removed");
                }
                else if(groupB.length+groupBInBoard.length <3)
                {
                    winning("White","All piece of player1 was removed");
                }
                state = pstate;
                setDraggable(turn);
                console.log(pstate);
                
                piecesLayer.off('click.event1');
                outlinesLayer.listening(true);
                piecesLayer.draw();


            }
        }
      });
        
        return;
    }
    function winning(p,reason)
    {
        console.log("Player won: "+p);
        layer.listening(false);
        piecesLayer.listening(false);
        outlinesLayer.listening(false);
        score[p] = score[p]+1;
        document.getElementById("playerScore").innerHTML = score['Black']+" - "+score['White']+"<br/>";
        console.log(score[p]);
        var winningLayer = new Kinetic.Layer();
        var rematchLayer = new Kinetic.Layer();
        var rect = new Kinetic.Rect({
            x: 70,
            y: 100,
            width: 460,
            height: 350,
            fill: '#9c9c9c',
            stroke: 'green',
            strokeWidth: 2,
            cornerRadius: 15,
            opacity: 0.95
        });
        var rematch_Button = new Kinetic.Rect({
            x: 120,
            y: 260,
            width: 360,
            height: 100,
            fill: '#e2e2e2',
            stroke: 'green',
            strokeWidth: 3,
            cornerRadius: 15,
            opacity: 0.95
        });
        var winning_Text = new Kinetic.Text({
            x: stage.width() / 2,
            y: 120,
            text: 'Player '+p+" Won",
            fontSize: 50,
            fontFamily: 'Calibri',
            fill: 'green',
            stroke: 'white',
            strokeWidth: 1
        });
        var reason_Text = new Kinetic.Text({
            x: stage.width() / 2,
            y: winning_Text.getY()+winning_Text.height()+20,
            text: reason,
            fontSize: 27,
            fontFamily: 'Calibri',
            fill: 'white'
        });
        var rematch_Text = new Kinetic.Text({
            x: stage.width() / 2,
            y: 310,
            text: 'Restart',
            fontSize: 50,
            fontFamily: 'Calibri',
            fill: 'green',
            stroke: 'white',
            strokeWidth: 1
        });
        
        winning_Text.offsetX(winning_Text.width()/2);
        reason_Text.offsetX(reason_Text.width()/2);
        rematch_Text.offsetY(rematch_Text.height()/2);
        rematch_Text.offsetX(rematch_Text.width()/2);
        winningLayer.add(rect);
        winningLayer.add(winning_Text);
        winningLayer.add(reason_Text);
        rematchLayer.add(rematch_Button);
        rematchLayer.add(rematch_Text);
        winningLayer.draw();
        rematchLayer.draw();
        stage.add(winningLayer);
        stage.add(rematchLayer);
        rematchLayer.on('click.event2',function(){
            layer.listening(true);
            piecesLayer.listening(true);
            outlinesLayer.listening(true);
            piecesLayer.off('click.event2');
            winningLayer.destroy();
            rematchLayer.destroy();
            restart();
        });
    }
    function unsetRemoveState()
    {
        // remove the action to show what you could remove
        
    }
    function removeDraggable(t){
        if(t == "Black" && state == "move_state")
        {
            for(var k in groupBInBoard)
                groupBInBoard[k].setDraggable(false);
        }
        else if(t == "White" && state == "move_state")
        {
            for(var k in groupWInBoard)
                groupWInBoard[k].setDraggable(false);
        }
        else if(t == "Black" && state == "fill_state")
        {
            for(var k in groupB)
                groupB[k].setDraggable(false);
        }
        else if(t == "White" && state == "fill_state")
        {
            for(var k in groupW)
                groupW[k].setDraggable(false);
        }
    }
    function setDraggable(t){
        if(t == "Black" && state == "move_state")
        {
            for(var k in groupBInBoard)
                groupBInBoard[k].setDraggable(true);
        }
        else if(t == "White" && state == "move_state")
        {
            for(var k in groupWInBoard)
                groupWInBoard[k].setDraggable(true);
        }
        else if(t == "Black" && state == "fill_state")
        {
            for(var k in groupB)
                groupB[k].setDraggable(true);
        }
        else if(t == "White" && state == "fill_state")
        {
            for(var k in groupW)
                groupW[k].setDraggable(true);
        }
    }
    function changeTurn(){
        if(turn == "White"){
            document.getElementById("player1").style.color = "green";
            document.getElementById("player1").style.fontWeight = "bold";
            document.getElementById("player2").style.color = "gray";
            document.getElementById("player2").style.fontWeight = "normal";
            document.getElementById("player2").innerHTML = "Player2<br/>x"+groupW.length;
        }
        if(turn == "Black"){
            document.getElementById("player2").style.color = "green";
            document.getElementById("player2").style.fontWeight = "bold";
            document.getElementById("player1").style.color = "gray";
            document.getElementById("player1").style.fontWeight = "normal";
            document.getElementById("player1").innerHTML = "Player1<br/>x"+groupB.length;
        }
        if(state == "fill_state"){
            if(turn == "Black"){
                for(var k in groupB)
                    {
                        var o = groupB[k];
                        o.setDraggable(false);
                    }
                for(var k in groupW)
                    {
                        var o = groupW[k];
                        o.setDraggable(true);
                    }
                turn = "White";
            }
            else{
                for(var k in groupW)
                    {
                        var o = groupW[k];
                        o.setDraggable(false);
                    }
                for(var k in groupB)
                    {
                        var o = groupB[k];
                        o.setDraggable(true);
                    }
                    console.log(groupB.length);
                if(groupB.length == 0)
                {
                    state = "move_state";
                    changeToMoveState();
                }
                turn = "Black";   
            }
        }
        else if(state == "move_state")
        {
            if(turn == "Black")
            {
                for(var k in groupBInBoard)
                {
                    groupBInBoard[k].setDraggable(false);
                }
                for(var k in groupWInBoard)
                {
                    groupWInBoard[k].setDraggable(true);
                }
                turn = "White";
            }
            else
            {
                for(var k in groupWInBoard)
                {
                    groupWInBoard[k].setDraggable(false);
                }
                for(var k in groupBInBoard)
                {
                    groupBInBoard[k].setDraggable(true);
                }
                turn = "Black";
            }
        // check for possiable moves for the new player before given him turn
        

        }
        if(groupW.length == 0){
        if(!hasPossibleMoves(turn))
            {
                if(turn == "Black")
                    winning("White","No possible moves for Player1");
                else
                    winning("Black","No possible moves for Player2");
                return;
            }
        }
    }
    // should be replaced by set dragable
    function changeToMoveState()
    {
        state = "move_state";
        for(var k in groupBInBoard)
        {
            var o = groupBInBoard[k];
            o.setDraggable(true);
        }
    }
    stage.add(layer);
    stage.add(outlinesLayer);
    stage.add(piecesLayer);  
=======
      var originalXPostion = 0;
      var originalYPostion = 0;
        piecesLayer.on('dragstart', function(evt) {
              originalXPostion= evt.target.getX();
              originalYPostion= evt.target.getY();
              this.moveToTop();
              piecesLayer.draw();
            });
        piecesLayer.on('dragend', function(evt) {
            var pice = evt.target;
            for(var key in outlines)
            {
              var outline = outlines[key];
              if(isNearOutline(pice, outline) && !pice.inRightPlace && !outline.filled) {
                pice.setPosition({x:outline.x, y:outline.y});
                pice.draw();
                pice.inRightPlace = true;
                outline.filled = true;
                setTimeout(function() {
                pice.setDraggable(false);
                }, 50);
              }
            }
            if(!pice.inRightPlace) {
                pice.setPosition({x:(pice.name=='black')?45:555, y:700});
              }
            piecesLayer.draw();
            });
      


      stage.add(layer);
>>>>>>> FETCH_HEAD
