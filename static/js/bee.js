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
	    $dropdown = $('.ui.dropdown'),
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
	    });

	  $menuItem.on('click', handler.activate);
}

bee.form = {}
bee.form.ready = function(){
	var $checkbox = $('.ui.checkbox');
	
	$checkbox.checkbox();
	
}
bee.ready = function(){
	bee.menu.ready();
	bee.form.ready();
}
$(document).ready(bee.ready);
