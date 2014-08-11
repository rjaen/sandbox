app.directive('domManipulation', function () {
    return {
      link: function ($scope, element, attrs) {
        element.bind('click', function () {
          element.html('Click detected!');
        });
        element.bind('mouseenter', function () {
          element.css('background-color', 'orange');
        });
        element.bind('mouseleave', function () {
          element.css('background-color', 'white');
        });
      }
    };
  });
