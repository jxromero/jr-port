$(document).ready(function() {
	$('#fullpage').fullpage({
		//options here
		autoScrolling:true,
		scrollHorizontally: true,
		licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE'
	});

	//methods
	$.fn.fullpage.setAllowScrolling(true);
});