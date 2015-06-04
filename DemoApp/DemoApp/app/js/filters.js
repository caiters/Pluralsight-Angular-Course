'use strict';

eventsApp.filter('duration', function(){
  return function(duration){
    switch(duration){
      case 1:
        return "Half hour";
      case 2:
        return "Half Day";
      case 4:
        return "Full Day";
    };
  };
});
