/* Map */

function loadScript() {
	$.ajax({
		type: "GET",
		url: "https://maps.googleapis.com/maps/api/js?key=AIzaSyDJ6apCT_bhlnBNpUJxJ5_qVr4nHdL-FkQ&callback=initMap",
		dataType: "script"
	});
}

var map;
function initMap() {
    var latitute;
    var langiture;
	map = new google.maps.Map(document.getElementById('google-maps'), {
		center: {
            lat: 46.929417, lng: 9.719417   
        },
        zoom: 15,
        styles: [
            {
                "featureType": "all",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "saturation": 12
                    },
                    {
                        "color": "#0a3d62"
                    },
                    {
                        "lightness": 80
                    }
                ]
            },
            {
                "featureType": "all",
                "elementType": "labels.text.stroke",
                "stylers": [
                    {
                        "visibility": "on"
                    },
                    {
                        "color": "#0a3d62"
                    },
                    {
                        "lightness": 16
                    }
                ]
            },
            {
                "featureType": "all",
                "elementType": "labels.icon",
                "stylers": [
                    {
                        "visibility": "on"
                    },
                    {
                        "Lightness": -20
                    }
                ] 
            },
            {
                "featureType": "administrative",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "color": "#0a3d62"
                    },
                    {
                        "lightness": 20
                    }
                ]
            },
            {
                "featureType": "administrative",
                "elementType": "geometry.stroke",
                "stylers": [
                    {
                        "color": "#0a3d62"
                    },
                    {
                        "lightness": 17
                    },
                    {
                        "weight": 1.2
                    }
                ]
            },
            {
                "featureType": "landscape",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#0a3d62"
                    },
                    {
                        "lightness": 20
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#0a3d62"
                    },
                    {
                        "lightness": 25
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "color": "#0a3d62"
                    },
                    {
                        "lightness": 10
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "geometry.stroke",
                "stylers": [
                    {
                        "color": "#0a3d62"
                    },
                    {
                        "lightness": 100
                    },
                    {
                        "weight": 0.2
                    }
                ]
            },
            {
                "featureType": "road.arterial",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#0a3d62"
                    },
                    {
                        "lightness": 1
                    }
                ]
            },
            {
                "featureType": "road.local",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#0a3d62"
                    },
                    {
                        "lightness": 1
                    }
                ]
            },
            {
                "featureType": "transit",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#0a3d62"
                    },
                    {
                        "lightness": 100
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#0a3d62"
                    },
                    {
                        "lightness": 100
                    }
                ]
            }
        ]
	});

    if($(window).width() > 810 ){
        var ardorPin = {
            url: 'img/maps-image.png'
        };

    }

    else{
        var ardorPin = {
            url: 'img/maps-image.png'
        };
    }

    var marker = new google.maps.Marker({
    position: map.getCenter(),
    icon: ardorPin,
    map: map
    });
}

$(window).on('load', function() {
	setTimeout(function() {
        try{
            loadScript();
        }catch(err){
            console.log(err);
        }
	}, 4000);
});

/* Back to Top Button */

$(function() {
    var btn = $(".backtotop");
    
    $(window).scroll (function() {
        if ($(window).scrollTop()<100) {
            btn.addClass("hidden");
        } else {
            btn.removeClass("hidden");
        }
    });
});

/* Hamburger Menu */

$(document).ready(function() {
    // Hamburger Menu animation
    $(".open-button").click(function() {
        $(this).toggleClass(".open");
    });
    $(".open-button").click(function(e) {
        e.preventDefault();
        $(".nav-menu").toggleClass(".open");
    });
});
