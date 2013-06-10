$(document).ready(function() 
{
	$("#weather").html('<h1>Welcome</h1><h1>to</h1><h2>My Weather</h2>').addClass("title");
	
		$('#getZip').click(function()
		{
			
			$("#weather").fadeOut('slow',function()
			{
				var zip = $('#zip').val();
  				console.log(zip);
		
		
				$.simpleWeather({
		  			zipcode: zip,
		  			woeid: '',
		  			location: '',
		  			unit: 'f',
		  			success: function(weather) {
						html = '<h2>'+weather.temp+'&deg;'+weather.units.temp+'</h2>';
						html += '<ul><li>'+weather.city+', '+weather.region+'</li>';
						html += '<li class="currently">'+weather.currently+'</li>';
						html += '<li>'+weather.tempAlt+'&deg;C</li></ul>';
			
			
						$("#weather").removeClass();
						$("#weather").addClass("bg"+weather.code);
						console.log(weather.code);
			
		
						$("#weather").html(html);
		  			},
		  			error: function(error) {
						$("#weather").html('<p>'+error+'</p>');
		  			}
				});
			});  
			
			$("#weather").fadeIn('slow');		
		
	});
	
			$('#getLoc').click(function()
		{
			
			$("#weather").fadeOut('slow',function()
			{
				var loc = $('#loc').val();
  				console.log(loc);
		
		
				$.simpleWeather({
		  			zipcode: '',
		  			woeid: '',
		  			location: loc,
		  			unit: 'f',
		  			success: function(weather) {
						html = '<h2>'+weather.temp+'&deg;'+weather.units.temp+'</h2>';
						html += '<ul><li>'+weather.city+', '+weather.region+'</li>';
						html += '<li class="currently">'+weather.currently+'</li>';
						html += '<li>'+weather.tempAlt+'&deg;C</li></ul>';
			
			
						$("#weather").removeClass();
						$("#weather").addClass("bg"+weather.code);
						console.log(weather.code);
			
		
						$("#weather").html(html);
		  			},
		  			error: function(error) {
						$("#weather").html('<p>'+error+'</p>');
		  			}
				});
			});  
			
			$("#weather").fadeIn('slow');	
	});
	
/*			$('.submenu>li').click(function()
		{
			
			$("#weather").fadeOut('slow',function()
			{
				var zip = $(this .code).text();
  				console.log(zip);
		
		
				$.simpleWeather({
		  			zipcode: zip,
		  			woeid: '',
		  			location: '',
		  			unit: 'f',
		  			success: function(weather) {
						html = '<h2>'+weather.temp+'&deg;'+weather.units.temp+'</h2>';
						html += '<ul><li>'+weather.city+', '+weather.region+'</li>';
						html += '<li class="currently">'+weather.currently+'</li>';
						html += '<li>'+weather.tempAlt+'&deg;C</li></ul>';
			
			
						$("#weather").removeClass();
						$("#weather").addClass("bg"+weather.code);
						console.log(weather.code);
			
		
						$("#weather").html(html);
		  			},
		  			error: function(error) {
						$("#weather").html('<p>'+error+'</p>');
		  			}
				});
			});  
			
			$("#weather").fadeIn('slow');		
		
	});*/
		

  
});	