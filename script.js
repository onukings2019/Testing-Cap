$(document).ready(function(){
	$('.toggle-nav').click(function(){
		$('.menu ul li').slideToggle(1000);

	});
});

$(document).ready(function(){
	$('#btn').click(function(){
		let location = $('#search').val();
		if(location == ''){
			$('#error').html('Please enter a loaction');
		}else{
			$.ajax({
				url: 'http://api.openweathermap.org/data/2.5/weather?q=' +location + '&units=metric' + '&APPID=1a3d68088228d76d61fa392c2a9ade0a',	

				type: "GET",
				datatype: JSON,
				success: function(data){
					console.log(data);
				}
			});
		}
	});
});