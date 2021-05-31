(function($) {
	
	$.alerts = {
		
		verticalOffset: 0,     
		horizontalOffset: 0,     
		overlayOpacity: .35,      
		overlayColor: '#000',                
		
		alert: function(message, callback) {
			$.alerts._show(message, function(result) {
				if( callback ) callback(result);
			});
		},
		
		_show: function(message, callback) {
			
			$.alerts._hide();
			
			$.alerts._overlay('show');
			
			$("body").append(
			  '<div id="popup_container">' +
			    '<div id="popup_content">' +
					'<div id="popup_message"></div>' +
				'</div>' +
			  '</div>');

			$("#popup_container").css({
				position: 'fixed',
				zIndex: 99999,
				padding: 0,
				margin: 0
			});

			$("#popup_message").text(message);

			$.alerts._reposition();
			
			$("#popup_message").after(
				'<div id="popup_close">' + 
					'<button id="popup_ok" class="button-ok"><i class="icon-reload"></i></button>' +
				'</div>');
				
			$("#popup_ok").click( function() {
				$.alerts._hide();
				if( callback ) 
				{
					setTimeout(function() {
						callback(true);
					}, 220);
				}
			});
			
			setTimeout(function() {
				$("#popup_ok").focus();
			}, 100);
			
			setTimeout(function() {
				$("#popup_ok").keypress( function(e) {
					if( e.keyCode == 13 || e.keyCode == 27 ) 
					{
						$("#popup_ok").trigger('click');
					}
				});
			}, 100);
		},
		
		_hide: function() {
			$("#popup_container").hide("slide", { direction: "up" }, 200, function() {
				$("#popup_container").remove();
			});
			
			$.alerts._overlay('hide');
		},
		
		_overlay: function(status) {
			switch( status ) {
				case 'show':
					$.alerts._overlay('hide');
					$("body").append('<div id="popup_overlay"></div>');
					$("#popup_overlay").css({
						position: 'absolute',
						zIndex: 99998,
						top: '0px',
						left: '0px',
						width: '100%',
						height: $(document).height(),
						background: $.alerts.overlayColor,
						opacity: $.alerts.overlayOpacity
					});
				break;
				case 'hide':
					$("#popup_overlay").remove();
				break;
			}
		},
		
		_reposition: function() {
			var viewport_height = ($(window).height() / 2);
			var viewport_width = ($(window).width() / 2);
			var popup_height = ($("#popup_container").outerHeight() / 2);
			var popup_width = ($("#popup_container").outerWidth() / 2);
			
			var top = (viewport_height - popup_height) + $.alerts.verticalOffset;
			var left = (viewport_width - popup_width) + $.alerts.horizontalOffset;
			if( top < 0 ) top = 0;
			if( left < 0 ) left = 0;

			$("#popup_container").css({
				top: '70px',
				left: left + 'px'
			});
			
			setTimeout(function(){ 
				$("#popup_container").show("slide", { direction: "up", distance: popup_height }, 200); 
			}, 100);

			$("#popup_overlay").height( $(document).height() );
		}
		
	}
	
	jAlert = function(message, callback) {
		setTimeout(function() { 
			$.alerts.alert(message, callback);
		}, 220);
	}
	
})(jQuery);