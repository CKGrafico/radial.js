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
##More info in [demo page](ckgrafico.github.io/radial.js) 