
var stage = new Kinetic.Stage({
        container: 'container',
        width: 600,
        height: 600
      });

      var layer = new Kinetic.Layer();
      //largest box lines
      var top_first = new Kinetic.Line({
        points: [45, 45, 555, 45],
        stroke: 'black',
        strokeWidth: 3,
      });
      var bottom_first = new Kinetic.Line({
        points: [45, 555, 555, 555],
        stroke: 'black',
        strokeWidth: 3,
      });
      var left_first = new Kinetic.Line({
        points: [45, 45, 45, 555],
        stroke: 'black',
        strokeWidth: 3,
      });
      var right_first = new Kinetic.Line({
        points: [555, 45, 555, 555],
        stroke: 'black',
        strokeWidth: 3,
      });

      layer.add(top_first);
      layer.add(bottom_first);
      layer.add(left_first);
      layer.add(right_first);

      //medium box lines
      var top_second = new Kinetic.Line({
        points: [130, 130, 470, 130],
        stroke: 'black',
        strokeWidth: 3,
      });
      var bottom_second = new Kinetic.Line({
        points: [130, 470, 470, 470],
        stroke: 'black',
        strokeWidth: 3,
      });
      var left_second = new Kinetic.Line({
        points: [130, 130, 130, 470],
        stroke: 'black',
        strokeWidth: 3,
      });
      var right_second = new Kinetic.Line({
        points: [470, 130, 470, 470],
        stroke: 'black',
        strokeWidth: 3,
      });

      layer.add(top_second);
      layer.add(bottom_second);
      layer.add(left_second);
      layer.add(right_second);


      //small box lines
      var top_third = new Kinetic.Line({
        points: [215, 215, 385, 215],
        stroke: 'black',
        strokeWidth: 3,
      });
      var bottom_third = new Kinetic.Line({
        points: [215, 385, 385, 385],
        stroke: 'black',
        strokeWidth: 3,
      });
      var left_third = new Kinetic.Line({
        points: [215, 215, 215, 385],
        stroke: 'black',
        strokeWidth: 3,
      });
      var right_third = new Kinetic.Line({
        points: [385, 215, 385, 385],
        stroke: 'black',
        strokeWidth: 3,
      });

      layer.add(top_third);
      layer.add(bottom_third);
      layer.add(left_third);
      layer.add(right_third);


      //intersection lines
      var top_inter = new Kinetic.Line({
        points: [299, 45, 299, 215],
        stroke: 'black',
        strokeWidth: 3,
      });
      var bottom_inter = new Kinetic.Line({
        points: [299, 555, 299, 385],
        stroke: 'black',
        strokeWidth: 3,
      });
      var left_inter = new Kinetic.Line({
        points: [45, 299, 215, 299],
        stroke: 'black',
        strokeWidth: 3,
      });
      var right_inter = new Kinetic.Line({
        points: [555, 299, 385, 299],
        stroke: 'black',
        strokeWidth: 3,
      });

      layer.add(top_inter);
      layer.add(bottom_inter);
      layer.add(left_inter);
      layer.add(right_inter);

      stage.add(layer);