var GODY = window.GODY || {};
GODY.General = function (argument) {
	var init = function() {
		$(document).on('focus', '.search-form input', function (argument) {
			$('.filter-panel').fadeIn(200);
			$('.filter-backdrop').show();
		});

		$(document).on('click', '.filter-backdrop, .filter-panel [data-toggle="filter"]', function (argument) {
			$('.filter-panel').fadeOut(200);
			$('.filter-backdrop').hide();
		});

		$(document).on('click', '.nav .user', function (argument) {
			var $me = $(this);
			$me.next().fadeToggle(200);
			$me.toggleClass('active');
		})
	}

	return {
		init: init
	}
}();

GODY.General.init();
function openCity(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}
$(document).ready(function(){
	$(".tab .tablinks:first-child").addClass("active");
})