/*
 * magic can happen here 
 */


$("#ratingSort").click(() => {
    console.log("Rating sort");

    var anchor = document.querySelector('#content');
    var address = document.querySelectorAll('#content .address')

    Array.from(address).sort((a, b) => {
            // a.dataset.title.toLowerCase().localeCompare(b.dataset.title.toLowerCase())
            var startA = parseInt(a.dataset.rating);
            var startB = parseInt(b.dataset.rating);
            return startB - startA;
        })
        .forEach(el => anchor.appendChild(el));

});

$("#nameSort").click(() => {
    var anchor = document.querySelector('#content');
    var address = document.querySelectorAll('#content .address')

    Array.from(address).sort((a, b) => {
            // a.dataset.title.toLowerCase().localeCompare(b.dataset.title.toLowerCase())
        var textA = a.dataset.name.toUpperCase();
        var textB = b.dataset.name.toUpperCase();

        return textA.localeCompare(textB);
        })
        .forEach(el => anchor.appendChild(el));
});

//var map;

(function() {
    var template = $('#empty').html();
    var anchor = $('#content');
    // var dataURL = "https://s3-us-west-2.amazonaws.com/lgoveabucket/data_melp.json"
    var dataURL = "http://localhost:3000/data10.json";

    $.getJSON(dataURL)
        .fail(err => {
            console.log("Error with loading " + dataURL + JSON.stringify(err));
        })
        .done(data => {
            console.log("Loaded " + data.length + " records.");
            var html = data.map(el => {
                return template
                    .replace('[ID]', el.id)
                    .replace(/\[NAME\]/g, el.name)
                    .replace(/\[RATING\]/g, el.rating)
                    .replace(/\[URL\]/g, el.contact.site)
                    .replace(/\[EMAIL\]/g, el.contact.email)
                    .replace('[PHONE]', el.contact.phone)
                    .replace('[STREET]', el.address.street)
                    .replace('[CITY]', el.address.city)
                    .replace('[STATE]', el.address.state)

            }).join('');
            anchor.html(html);
            /*
                        var latitude =  24.016667; // YOUR LATITUDE VALUE
                        var longitude = -104.666667; // YOUR LONGITUDE VALUE
                        
                        var myLatLng = {lat: latitude, lng: longitude};
                        
                        map = new google.maps.Map(document.getElementById("851f799f-0852-439e-b9b2-df92c43e7672"), {
                          center: myLatLng,
                          zoom: 14                    
                        });
                                
                        var marker = new google.maps.Marker({
                          position: myLatLng,
                          map: map,
                          //title: 'Hello World'
                          
                          // setting latitude & longitude as title of the marker
                          // title is shown when you hover over the marker
                          title: latitude + ', ' + longitude 
                        });            
              */

        });
})();
