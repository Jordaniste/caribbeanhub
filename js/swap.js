$(function() { // DOM ready
  
  var txt = ['Martinique', 'Guadeloupe', 'Barbados', 'Haiti', 'Puerto Rico', 'St Lucia', 'Trinidad & Tobago', 'Jamaica', 'Cuba', 'The US Virgin Islands', 'St Barthelemy', 'The Bahamas', 'Dominica', 'Curaçao', 'St Martin', 'The Cayman Islands', 'Anguilla', 'Dominican Republic', 'Grenada', 'St Vincent & The Grenadines', 'The British Virgin Islands', 'Aruba', 'St Kitts & Nevis', 'Antigua & Barbuda', 'The Turks & Caicos Islands', 'The BES Islands'],
      n = txt.length,
      $swap = $('#swap'),
			$span,
      c = -1;
  
  // CREATE SPANS INSIDE SPAN
  for(var i=0; i<txt.length; i++) $swap.append($('<span />',{text:txt[i]}));
  // HIDE AND COLLECT THEM
  $span = $("span", $swap).hide(); 

  (function loop(){
		c = ++c % n;
    $swap.animate({width: $span.eq( c ).width() });
    $span.stop().fadeOut().eq(c).fadeIn().delay(1000).show(0, loop);
  }()); 

});