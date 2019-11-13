$(document).ready(function(){
	$('.toggle-nav').click(function(){
		$('.menu ul li').slideToggle(1000);

	});
});

$(document).ready(function(){
	$('#btn').click(function(){
			let location = $('#search').val();
			if (location != '') {
				$.ajax({
					url: 'https://api.openweathermap.org/data/2.5/weather?q=' + location + '&units=metric' + '&APPID=1a3d68088228d76d61fa392c2a9ade0a',	

				type: "GET",
				datatype: JSON,
				success: function(data){
					let display = displayData(data);
					$('#display').html(display);
					$('#search').val('');
				}
				});
			}else{
				$('#error').html('Please enter a valid loaction name');
			}
	});

});
function displayData(data){
	return "<h4> Current weather:</h4>"  + "<h5>  </h5>" + data.weather[0].main;
	

}