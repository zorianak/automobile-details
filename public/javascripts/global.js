$(document).ready(function() {
   // This is where we will call our logic for the autos 
    populateCars();
});

// Some basic functions for our page. Normally, we'd have this in a controller function
// However, this is a very basic application
function populateCars() {
    console.log('popping cars');
    var listItemTemp = '<li>Name: <name>, MPG: <mpg>, Price: <price></li> \n';
    var theList = '';
    var listUl = $('#carList');
    
    // jQuery to call for the JSON
    $.getJSON('/automobile/list', function (data) {
        
            console.log(data);
        // Create a car with the data we receive
        $.each(data, function(){
            var self = this;
            
            // Create our auto object
            var theCar = new Auto(self);
            

            // now we want to add this to our list template
            var tempItem = listItemTemp.replace('<name>', theCar.name)
                                        .replace('<mpg>', theCar.mpg)
                                        .replace('<price>', theCar.price);
            
            // append them into the string to add the list in
            theList += tempItem;
        }); // end json .each
        
        // now stick it in the list!
        listUl.html(theList);
    });
}