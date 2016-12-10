// Functions

function randomInputs() {
	$("#name").val(faker.name.findName());
	$("#last-name").val(faker.name.lastName() + " " + faker.name.lastName());
	$("#number").val(faker.phone.phoneNumber());
	$("#address").val(faker.address.streetAddress())
	$("#email").val(faker.internet.email())
}

function generateReport() {
	types = ['Residencial', 'Industrial', 'Servicio de Taxi', 'Hospitales', 'restaurantes', 'Entidades Gubernamentales'] 
	data = "";
	id = faker.random.number();
	
	name = faker.name.findName() + " " + faker.name.lastName() + " " + faker.name.lastName();
	identification = faker.random.number() * 99999;
	email = faker.internet.email()
	address = faker.address.streetAddress()
	date = new Date(Date.parse(faker.date.past()))
	
	data += "<td>" + id + "</td>"
	data += "<td> <h4 class ='ui image header' ><div class='content'>" + name + "<div class='sub header'>Identification: " + identification +  "<br>" + email +  "<br>Dir: "  + address +  "</div> </div> </td>"
	data += "<td>" + types[Math.floor(Math.random() * types.length)] + "</td>"
	data += "<td>" + (date.getDay() + 1) 	 + '/' + date.getMonth() + '/' + date.getFullYear() + "</td>"
	data += "<td>" + (faker.random.number() * 999999) % 10000000 + "</td>"

	return data
}

// ****** Index ***** //

// Sidebar
$(".header.item").click(function() {
 	$(".ui.sidebar").sidebar('show');
});

// Dropdowns
$('.selection.dropdown').dropdown();

$('.search.dropdown').dropdown({
	onChange: function() {
		randomInputs();
	}
});

$('#submit').click(function(evt) {
	evt.preventDefault();
 	$(".ui.form").addClass('loading'); 
	setTimeout(function() { 
		$(".ui.form").removeClass('loading');
		$("#message").text(faker.lorem.paragraphs());
		$('.ui.basic.modal').modal('show');
	}, 1000);
});



// ****** Report ***** //

$('#generate').click(function(evt) {
	evt.preventDefault();
 	$(".ui.button").addClass('loading'); 
	setTimeout(function() {
		limit = faker.random.number() % 101
		for (var i = 0; i < limit; i++) {
				data = generateReport();
				$("tbody").append("<tr>" + data + "</tr>");
		}
	
		$(".ui.button").removeClass('loading');
	}, 1000);
});




