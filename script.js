
var stage = new Kinetic.Stage({
        container: 'container',
        width: 600,
        height: 800
      });

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
    
    var radius = 10;
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
    for(var key in outlines)
    {
        var c = new Kinetic.Circle({
            x: outlines[key].x,
            y: outlines[key].y,
            radius: 8,
            fill: 'black',
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
        if(ax >= o.x - 42 && ax <= o.x + 42 && ay >= o.y - 42 && ay <= o.y + 42) {
          return true;
        }
        else {
          return false;
        }
      }
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