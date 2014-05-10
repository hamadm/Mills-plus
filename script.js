
    //Settings
    //postions of the original place of the pieces in the start of the game
    var originalXPosW = 555;
    var originalYPosW = 700;
    var originalXPosB = 45;
    var originalYPosB = 700;
    var state = "fill_state"; // 1- fill_state , 2- move_state , 3- remove_state
    
    // setting who to start
    turn = "Black"; // always the black starts

    //image pieces settings
    var b_piece = new Image();
    b_piece.src = 'img/b-piece.png';

    var w_piece = new Image();
    w_piece.src = 'img/w-piece.png';
    var piece_radius = 25; // the piece radius to set the postion

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
    b_piece.onload = function() {
        for(var i=0 ; i<3 ;i++){
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
      w_piece.onload = function() {
          for(var i=0 ; i<3 ;i++){
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
      
//End of initializing board


      // checking if reached outline or not to snap
      function isNearOutline(circle, outline) {
        var a = circle;
        var o = outline;
        var ax = a.getX()+piece_radius;
        var ay = a.getY()+piece_radius;
        if(ax >= o.x - 42 && ax <= o.x + 42 && ay >= o.y - 42 && ay <= o.y + 42) {
          return true;
        }
        else {
          return false;
        }
      }
        function dragStartF(piece)
        {
            piece.moveToTop();
            piecesLayer.draw();
        }

        piecesLayer.on('dragstart', function(evt) {
            var piece = evt.target;
            dragStartF(piece);
            
        });
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
                    checkFields();
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
                        checkFields();
                        
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
        piecesLayer.on('click.event1', function(evt) {
        if(state == "remove_state")
        {
            var piece = evt.target;
            if(piece.name() == color)
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
                state = pstate;
                setDraggable(turn);
                console.log(pstate);
                
                piecesLayer.off('click.event1');
                piecesLayer.draw();


            }
        }
      });
        
        return;
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


        }
    }
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