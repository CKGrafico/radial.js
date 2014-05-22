(function(g){
	var radials = 0;
	
	var containerOptions = {
		// Container
		classList: 'radial-container',
		width: '100px',
		height: '100px'
	};
	
	var el = {
		classList: ' ',
		disabled: false,
		href: null,
		html: '',
		target: '_blank',
		show: true,
		_alfa: 0,
	};
	
	// Some functions
	var template = function(item) {
		var element = document.createElement('span');
		if(item.href) {
			element = document.createElement('a')
			element.href = item.href;
			element.target = item.target;
		}
		element.className = item.classList;
		element.innerHTML = item.html;
		element.style.position = 'absolute';
		element.style.top = Math.round(item._top) + 'px';
		element.style.left = Math.round(item._left) + 'px';
		element.style.display = (item.show) ? 'block' : 'none';
		
		return element;
	};
	
	var createContainer = function(options) {
		var container = document.createElement('div');
		container.className = options.classList;
		container.style.width = options.width;
		container.style.height = options.height;
		container.style.position = 'relative';
		
		return container;
	};
	
	var extendOpt = function(obj, source){
		var tObj = {};
		for (var prop in obj) {
			tObj[prop] = source[prop] || obj[prop];
		}
		
		return tObj;
	};
	
	var extendOptions = function(arr) {
		var tArr = [];
		for (var i = 0; i< arr.length; i++) {
			tArr[i] = extendOpt(el, arr[i]);
		}
		
		return tArr;
	};
	
	var radians = function(degrees) {
	  return degrees * Math.PI / 180;
	};
	
	var getPosition = function(container, item) {
		var r = radians(item._alfa);
		var height = Math.round(parseInt(container.style.height)/2);
		var width =  Math.round(parseInt(container.style.width)/2);
		return {
			top: height + Math.sin(r) * height,
			left: width + Math.cos(r) * width
		};
	}
	
	// Class
	var Radial = function(items, newOptions) {
		radials++;
		this._items = extendOptions(items);
		this._container = createContainer(extendOpt(containerOptions, newOptions || {}));
		this.calc();
	};
	
	Radial.prototype = {
		
		// Get single item
		get: function(index){
			return this._items[index];
		},
		
		// Get alfa of an item
		getAlfa: function(item) {
			if(typeof item === 'number') {
				item = this.get(item);
			}
			
			return item._alfa;
		},
		
		// Items length
		count: function(){
			return this._items.length;
		},
		
		// Add new Items to the list
		add: function(items) {
			if(items.length) {
				this._items = this._items.concat(extendOptions(items));
			}else{
				this._items.push(extendOpt(el, items));
			}
			
			this.calc();
		},
		
		// Remove an element
		remove: function(index) {
			this._items.splice(index,1);
			this.calc();
		},
		
		// Calc correct angle to each element
		calc: function() {
			var count = this.count();
			var alfa = 360/count;
			var i = -alfa;
			for(var j = 0; j < count; j++) {
				var newalfa = Math.round(i + alfa);
				this._items[j]._alfa = newalfa;
				i = newalfa;
			}
		},
		
		// Show all items
		showAll: function(hide) {
			for(var i = 0; i < this.count(); i++) {
				this._items[i].show = !hide;
			}
		},
		
		// Hide all items
		hideAll: function() {
			this.showAll(true);
		},
		
		// Render radial menu
		render: function() {
			this._container.innerHTML = '';
			
			for(var i = 0; i < this.count(); i++) {
				var calculated = getPosition(this._container, this._items[i]);
				this._items[i]._top = calculated.top;
				this._items[i]._left = calculated.left;
				this._container.appendChild(template(this._items[i]));
			}
			return this._container;
		},
		
		// Hide radial menu
	};
	
	g.Radial = Radial;
	
})(this);