
    //Settings
    //postions of the original place of the pieces in the start of the game
    var originalXPosW = 555;
    var originalYPosW = 700;
    var originalXPosB = 45;
    var originalYPosB = 700;
    var state = "fill_state"; // 1- fill_state , 2- move_state , 3- remove_state
    
    // setting who to start
    turn = "Black"; // always the black starts


//Start of initializing board
    // intinalizing the stage
    var stage = new Kinetic.Stage({
        container: 'container',
        width: 600,
        height: 800
    });
    // creating the layer of the board that has the lines and outlines
    var layer = new Kinetic.Layer(); 



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

    
    // adding the small circles outlines
    var outlinesLayer =  new Kinetic.Layer();
    for(var key in outlines)
    {
        var c = new Kinetic.Circle({
            x: outlines[key].x,
            y: outlines[key].y,
            radius: 8,
            fill: 'black',
        });
        outlinesLayer.add(c);
    }


    var piecesLayer = new Kinetic.Layer();

    //groups that has the piceses that are not in the board yet (stat= filling_board)
    var groupB = []; // in the filling state
    var groupW = []; // in the filling state
    var groupBInBoard = []; // in the move state
    var groupWInBoard = []; // in the move state
    // black pieces
    for(var i=0 ; i<3 ;i++){
        var c = new Kinetic.Circle ({
        x: originalXPosB,
        y: originalYPosB,
        radius: 25,
        fill: 'black',
        draggable: true,
        name: 'Black',
        id:0
        });
        groupB.push(c);
        piecesLayer.add(c);

      } 
      //white pieces
      for(var i=0 ; i<3 ;i++){
        var c = new Kinetic.Circle ({
        x: originalXPosW,
        y: originalYPosW,
        radius: 25,
        fill: 'white',
        draggable: false,
        name: 'White',
        id:0
        });
        groupW.push(c);
        piecesLayer.add(c);
        
      } 
      
//End of initializing board


      // checking if reached outline or not to snap
      function isNearOutline(circle, outline) {
        var a = circle;
        var o = outline;
        var ax = a.getX();
        var ay = a.getY();
        if(ax >= o.x - 42 && ax <= o.x + 42 && ay >= o.y - 42 && ay <= o.y + 42) {
          return true;
        }
        else {
          return false;
        }
      }
        

        piecesLayer.on('dragstart', function(evt) {
            var piece = evt.target;
            piece.moveToTop();
            piecesLayer.draw();
        });
        piecesLayer.on('dragend', function(evt) {
            var piece = evt.target;
            if(state == "fill_state"){
            for(var key in outlines)
            {
              var outline = outlines[key];
              if(isNearOutline(piece, outline) && !outline.filled) {
                piece.setPosition({x:outline.x, y:outline.y});
                piece.draw();
                piece.inRightPlace = true; //Piece is put in the board(to check later if it's not then return it to original place)
                outline.filled = true;
                outline.fill_color = piece.name();
                piece.id(key);
                checkFields();
                updateLogic(key,piece.name());
                changeTurn();
                setTimeout(function() {
                    if(piece.name() == "Black"){
                        groupB.pop(piece);
                        groupBInBoard.push(piece);
                    }
                    else{
                        groupW.pop(piece);
                        groupWInBoard.push(piece);
                    }
                    piece.setDraggable(false);
                }, 50);
                break;
              }
            }
            // returning the piece to its original place if 
            if(!piece.inRightPlace) {
                piece.setPosition({x:(piece.name()=='White')?originalXPosW:originalXPosB, y:(piece.name()=='White')?originalYPosW:originalYPosB});
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
                        piece.setPosition({x:outline.x, y:outline.y});
                        piece.draw();
                        outline.filled = true;
                        outline.fill_color = piece.name();
                        checkFields();
                        changeTurn();
                    }
                }
            }
            //return to original place because it's unvalid
            if(!valid)
            {
                piece.setPosition({x:outlines[piece.id()].x, y:outlines[piece.id()].y});
            }

          }
            piecesLayer.draw();
        });
    var pstate = state;
    function setRemoveState(color)
    {
        pstate = state;
        if(color == "Black")
            for(var k in groupBInBoard)
                groupBInBoard[k].fill("red");
        else
            for(var k in groupWInBoard)
                groupWInBoard[k].fill("red");
        piecesLayer.draw();
        state = "remove_state";
    }
    function unsetRemoveState()
    {
        for(var k in groupBInBoard)
            groupBInBoard[k].fill("black");
        for(var k in groupWInBoard)
            groupWInBoard[k].fill("white");
        piecesLayer.draw();
    }
    piecesLayer.on('click', function(evt) {
        if(state == "remove_state")
        {
            var piece = evt.target;
            if(piece.fill() == "red")
            {
                outlines[piece.id()].filled = false;
                outlines[piece.id()].fill_color = null;
                piece.destroy();
                state = pstate;
                console.log(pstate);
                unsetRemoveState();
                piecesLayer.off('click');
                piecesLayer.draw();

            }
        }
        else if(state == "move_state")
        {

        }
      });
    function changeTurn(){
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
                if(groupB.length == 0)
                {
                    state = "move_state";
                    for(var k in groupBInBoard)
                    {
                        var o = groupBInBoard[k];
                        o.setDraggable(true);
                    }
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


        }
    }
    function updateLogic(point_name,player)
    {
        
        
    }
    stage.add(layer);
    stage.add(outlinesLayer);
    stage.add(piecesLayer);  
      