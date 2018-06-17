/*
 * something will be here
 */
(function() {
    var template = $('#empty').html();
    var anchor = $('#content');
    var dataURL = "http://localhost:3000/data10.json";
    $.getJSON(dataURL)
        .fail(err => {
            console.log("Error with loading " + dataURL + JSON.stringify(err));
        })
        .done(data => {
            console.log("Loaded " + data.length + " records.");
            var html = data.map( el => {
             	return template
             	      .replace('[NAME]', el.name)
             	      .replace('[RATING]', el.rating)
					.replace(/\[URL\]/g, el.contact.site)
					.replace(/\[EMAIL\]/g, el.contact.email)
					.replace('[PHONE]', el.contact.phone)
					.replace('[STREET]', el.address.street)
						.replace('[CITY]', el.address.city)
						.replace('[STATE]', el.address.state)

             }).join('');
            anchor.html(html);

        });
})();
