$('document').ready(
	$('a').click(function(){
		if(this.attr('href').indexOf('http://') > 0)
		{
			alert('external link');			
		}
	});
);