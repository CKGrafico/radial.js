JavaScript library to make Radial menus.. or anything.. 
========

With this library you can create a list of items, with different properties and transform it in a circle.
###Examples of items
```
var items = [
	{html: 1},
	{html: 2},
	{html: 3}
];
```

```
var items = [
	{className: 'icon icon-a', html: 1},
	{className: 'icon icon-b', html: 2},
	{className: 'icon icon-c', html: 3}
];
```

You can also add custom degrees. 0 will lead to the default angle
###Example of degrees
```
var degrees = [
	10,
	10,
	10
];
```
You do not need to specify degrees for all nodes, but because each item directly corresponds to each degree, items[0] is degrees[0] degrees, if the nodes you want to be defaulted aren't the last nodes, you will need to declare that index as 0. So if you have 6 items, and you want to make only item 3 and 4 a custom angle, you would need to declare it like so or else it would change the first and second item to 10 degrees:
```
var degrees = [
	0,
	0,
	10,
	10
];
```
Also be aware that if you have a button as one of your nodes, that the first index does not count and you would need to put your custom value starting in the second index (degrees[1]) in this case as long as it is a number, you can put anything in degrees[0] but it is best practice to use 0.

###Radial default options
```
var options = {
		// True if the first element is a button
		button: false,
		// 360 degrees = circle
		deg: 360,
		// left to right = +180
		direction: 180,
		// Container dimensions
		container: {
			width: '100px',
			height: '100px'
		}
	};
```

###Radial item options (default options)
```
var el = {
		// List of classes to an element
		className: ' ',
		// Link (this option convert span into a)
		href: null,
		// Item content
		html: '',
		// Link target (only if you use href)
		target: '_blank',
		// Zindex for this element
		index: 0
	};
```
###Methods
```
/**
* Get single item
* @param {Number} index
* @return {Object} item
*/
get: function(index){...}

/**
* Get alfa of an item
* @param {Object} / {Number} item
* @return {Number} alfa
*/
getAlfa: function(item) {...}

/**
* Get Items length
* @return {Number} length
*/
count: function(){...}

/**
* Add new Items to the list
* @param {Array} items
* @return void
*/
add: function(items) {...}

/**
* Remove item from list
* @param {Number} index
* @return void
*/
remove: function(index) {...}

/**
* Calc correct angle to each element
* @return void
*/
calc: function() {...}

/**
* Render radial menu
* @return {DOMElement} container
*/
render: function() {...}

/**
* Show animation, be free to override 'show function'
* @return void
*/
show: function() {...}

/**
* Hide animation, be free to override 'hide function'
* @return void
*/
hide: function() {...}

/**
* Toggle between show and hide state
* @return void
*/
toggle: function() {...}

```
###Example of use
```
var items = [
	{className: 'glyphicon glyphicon-plus'},
	{className: 'glyphicon glyphicon-move'},
	{className: 'glyphicon glyphicon-edit'},
	{className: 'glyphicon glyphicon-check'},
	{className: 'glyphicon glyphicon-share'},
	{className: 'glyphicon glyphicon-cloud-download'},
	{className: 'glyphicon glyphicon-shopping-cart'},
	{className: 'glyphicon glyphicon-folder-open'},
	{className: 'glyphicon glyphicon-transfer'}

];


var options = {
	button: true,
	container: {
		height: '200px',
		width: '200px'
	}
};
radial = new Radial(items, options);
document.getElementById('menu').appendChild(radial.render());
```
####Result
![Alt text](http://i.imgur.com/yUnwOPv.png "Radial example")

##Play on CodePen [demo + controls](http://codepen.io/CKGrafico/pen/uFogw)
##More info [radial.js.org](http://radial.js.org)
