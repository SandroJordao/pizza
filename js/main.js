/**
 * JS Document. 
 * @author Sandro Jordão.
**/

var score = 0

var lifes = 3

var slice

var time = 10000

var timeout

var clock = 0

var in_game = false

var in_animate = false

/**
 *
**/
function slice_rand()
{
	if (in_game)
	{
		console.log('Slice Rand...')
		
		do {
			slice = Math.floor((Math.random() * 7) + 1)
			
			var len = $(".pizza .slice-" + slice + ":hidden").length
		}
		while (len == 0) 
		
		$("#pizza-rand .slice").hide()
		
		$("#pizza-rand .slice-" + slice).show()
		
		timeout = setTimeout(valid_timeout, time)
	}
	else
	{
		setTimeout(slice_rand, 200)
	}
}

/**
 *
**/ 
function valid_timeout()
{
	if (in_game)
	{
		console.log('Timeout Slices Pulsate...')
		
		$(".pizza .slice-" + slice).hide('pulsate', 1000)
		
		setTimeout(function(){
			$(".pizza .slice-" + slice).hide().removeAttr("style")
			
			valid_game_over()
		}, 1100)
	}
	else
	{
		slice_rand()
	}
}

/**
 *
**/
function pizza_click()
{
	$(".pizza").click(function(){
		
		if (in_game)
		{
			console.log('Pizza Click...')
			
			clearTimeout(timeout)
			
			var pizza = $(this).attr('id')

			if ( $("#" + pizza + " .slice-" + slice).is(":visible") == true )
			{
				valid_game_over()
			}
			else
			{
				animate_slice(pizza)
			}
		}
	})
}

/**
 *
**/
function animate_slice(pizza)
{
	console.log('Animate Slice...')
	
	var positions = {
		"pizza-1": { "left" : "+=0", "top" : "-=240" },
		"pizza-2": { "left" : "+=240", "top" : "-=120" },
		"pizza-3": { "left" : "+=240", "top" : "+=120" },
		"pizza-4": { "left" : "+=0", "top" : "+=240" },
		"pizza-5": { "left" : "-=240", "top" : "+=120" },
		"pizza-6": { "left" : "-=240", "top" : "-=120" }
	}
	
	$("#pizza-rand").addClass('slice-animate')
	
	$("#pizza-rand").animate({
		"left" : positions[pizza].left,
		"top" : positions[pizza].top
	}, 400, "linear", function() {
		$("#pizza-rand").hide().removeAttr("style").removeClass('slice-animate')
		
		$("#" + pizza + " .slice-" + slice).show()
		
		valid_score(pizza)
		
		slice_rand()
	})
}

/**
 *
**/
function valid_score(pizza)
{
	if ($("#" + pizza + " .slice:hidden").length == 0)
	{
		console.log('Add Score...')
		
		$("#" + pizza + " .slice").hide('pulsate', 1000, function(){
			$("#" + pizza + " .slice").hide().removeAttr("style")
		})
		
		$("#" + pizza + " .slice-8").show().hide('pulsate', 1600)
		
		score = parseInt(score) + 1

		$("#score").html(score)
	}
}

/**
 *
**/
function valid_game_over()
{
	$("#life-" + lifes).hide('pulsate', 1600)

	lifes = lifes -1
	
	if (lifes == 0)
	{
		console.log('Game Over!!!')
		
		in_game = false
		
		jAlert('Game Over', function(){
			reload()
			
			slice_rand()
		})
	}
	else
	{
		slice_rand()
	}
	
}

/**
 *
**/
function play()
{
	console.log('.: Play :.')
	
	in_game = true
	
	$("#action-play").hide()
	
	$("#action-stop, #action-reload").show()
}

/**
 *
**/
function stop()
{
	console.log('.: Stop :.')
	
	in_game = false
	
	$("#action-stop").hide()
	
	$("#action-play, #action-reload").show()
}

/**
 *
**/
function reload()
{
	console.log('.: Reload :.')
	
	score = 0
	
	$("#score").html(0)
	
	lifes = 3

	$(".life div").show()

	$(".pizza .slice").hide()
	
	in_game = false
	
	clock = 0
	
	$("#clock").html(sec_to_time(clock))
	
	$("#action-play").show()
	
	$("#action-stop, #action-reload").hide()
}

/**
 *
**/
function clock_add()
{
	if (in_game)
	{
		clock = parseInt(clock) + 1

		$("#clock").html(sec_to_time(clock))
	}
}

/**
 *
**/
function sec_to_time(num)
{
	var hours = Math.floor(num / 3600)
	
	var minutes = Math.floor((num - (hours * 3600)) / 60)
	
	var seconds = num - (hours * 3600) - (minutes * 60)
	
	if (minutes < 10) { minutes = "0" + minutes }
	
	if (seconds < 10) { seconds = "0" + seconds }
	
	return minutes + ':' + seconds
}

/**
 *
**/
function init() 
{
	setInterval(clock_add, 1000)
	
	slice_rand()
	
	pizza_click()
	
	$("#action-play").click(play)
	
	$("#action-stop").click(stop)
	
	$("#action-reload").click(reload)
}

$(document).ready(init) 