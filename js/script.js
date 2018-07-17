$(document).ready(function() {
	$('#fullpage').fullpage({
		//options here
		navigation: true,
		autoScrolling:true,
		scrollHorizontally: true,
		anchors: ['slide1', 'slide2', 'slide3', 'slide4'],
		licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE'
	});

	//methods
	$.fn.fullpage.setAllowScrolling(true);
	
	var typed = new Typed('.typed', {
		strings: [
					"Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
					"Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris",
					"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum",
				],
		backSpeed: 10,
		typeSpeed: 30,
		loop: true,
		showCursor: true
	});
});

//particlesJS('particles-js',{
//	"particles": {
//		"number": {
//			"value": 80,
//			"density": {
//				"enable": true,
//				"value_area": 800
//			}
//		},
//		"color": {
//			"value": "#000"
//		},
//		"shape": {
//			"type": "circle",
//			"stroke": {
//				"width": 0,
//				"color": "#000000"
//			},
//			"polygon": {
//				"nb_sides": 5
//			},
//			"image": {
//				"src": "img/github.svg",
//				"width": 100,
//				"height": 100
//			}
//		},
//		"opacity": {
//			"value": 0.5,
//			"random": false,
//			"anim": {
//				"enable": false,
//				"speed": 1,
//				"opacity_min": 0.1,
//				"sync": false
//			}
//		},
//		"size": {
//			"value": 3,
//			"random": true,
//			"anim": {
//				"enable": false,
//				"speed": 40,
//				"size_min": 0.1,
//				"sync": false
//			}
//		},
//		"line_linked": {
//			"enable": true,
//			"color": "#000",
//			"opacity": 0.5
//		},
//		"move": {
//			"enable": true,
//			"speed": 6,
//			"direction": "none",
//			"random": false,
//			"straight": false,
//			"out_mode": "out",
//			"attract": {
//				"enable": false,
//				"rotateX": 600,
//				"rotateY": 1200
//			}
//		}
//	},
//	"interactivity": {
//		"detect_on": "canvas",
//		"events": {
//			"onhover": {
//				"enable": false
//			},
//			"onclick": {
//				"enable": false
//			},
//			"resize": true
//		},
//		"modes": {
//			"grab": {
//				"distance": 400,
//				"line_linked": {
//					"opacity": 1
//				}
//			},
//			"bubble": {
//				"distance": 400,
//				"size": 40,
//				"duration": 2,
//				"opacity": 8,
//				"speed": 3
//			},
//			"repulse": {
//				"distance": 200
//			},
//			"push": {
//				"particles_nb": 4
//			},
//			"remove": {
//				"particles_nb": 2
//			}
//		}
//	},
//	"retina_detect": true,
//	"config_demo": {
//		"hide_card": false,
//		"background_color": "transparent",
//		"background_image": "",
//		"background_position": "50% 50%",
//		"background_repeat": "no-repeat",
//		"background_size": "cover",
//	}
//});