$(function() {

	var quotes;
	$.ajax({
		beforeSend: function(xhr) {
			if (xhr.overrideMimeType) {
				xhr.overrideMimeType('application/json');
			}
		}
	});

	// Generate a random number
	function rangeNumber(minNum, maxNum) {
		return Math.floor(Math.random() * (maxNum - minNum + 1) + minNum);
	}

	// Function that collects data from the json file
	function loadQuotes() {
		$.getJSON('https://bolwilson.github.io/data/quotes.json')
		.done( function(data) {
			quotes = data;
			$('#getMessage').on('click', function() {
				$('#quote').fadeIn().html(quotes[rangeNumber(2, 64)].quote);
			});
		}).fail( function() {
			$('#getMessage').html('Sorry! We could not load the quotes at the moment');
		});
	}

	loadQuotes();

});