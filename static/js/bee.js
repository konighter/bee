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
	    $dropdown = $('.menu .dropdown'),
	    // alias
	    handler = {

	      activate: function() {
	        if(!$(this).hasClass('dropdown')) {
	          $(this).addClass('active').closest('.ui.menu').find('.item').not($(this)).removeClass('active');
	        }
	      }

	    } ;

	  $dropdown.dropdown({
	      on: 'click',
	    }) ;

	  $menuItem.on('click', handler.activate);
}

bee.login = {}
bee.login.ready = function(){
	
	
}
bee.ready = function(){
	bee.menu.ready();
	
}
$(document).ready(bee.ready);
