/**
 * 
 */

window.bee = {
	handler:{}
}

bee.menu = {}

bee.menu.ready = function(){
	 // selector cache
	  var
	    $menuItem = $('.menu a.item, .menu .link.item'),
	    $dropdown = $('.main.container .menu .dropdown'),
	    // alias
	    handler = {

	      activate: function() {
	        if(!$(this).hasClass('dropdown')) {
	          $(this).addClass('active').closest('.ui.menu').find('.item').not($(this)).removeClass('active');
	        }
	      }

	    } ;

	  $dropdown.dropdown({
	      on: 'hover',
	      action: 'hide',
	    }) ;

	  $menuItem.on('click', handler.activate);
}

bee.ready = function(){
	bee.menu.ready();
	
}
$(document).ready(bee.ready);
