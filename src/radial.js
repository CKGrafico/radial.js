(function(g){
	var options = {
		
	};
	
	var el = {
		classList: ' ',
		disabled: false,
		href: null,
		html: '',
		target: '_blank',
	};
	
	var _items = [];
	
	// Some functions
	var template = function(item) {
		if(item.href) {
			return '<a href="' + item.href + '" target="' + item.target + '" class="' + item.classList + '">' + item.html + '</a>';
		}else{
			return '<span class="' + item.classList + '">' + item.html + '</span>';
		}
	};
	
	var extendEl = function(obj, source){
		var tObj = {};
		for (var prop in obj) {
			tObj[prop] = source[prop] || obj[prop];
		}
		
		return tObj;
	};
	
	var extendOptions = function(arr) {
		var tArr = [];
		for (var i = 0; i< arr.length; i++) {
			tArr[i] = extendEl(el, arr[i]);
		}
		
		return tArr;
	};
	
	var Radial = function(items) {
		_items = extendOptions(items);
	};
	
	Radial.prototype = {
		
		// Render single item
		renderItem: function(position) {
			var item = _items[position];
			return template(item);
		},
		
		// Get single item
		get: function(index){
			return _items[index];
		},
		
		// Items length
		count: function(){
			return _items.length;
		},
		
		// Add new Items to the list
		add: function(items) {
			if(items.length) {
				_items = _items.concat(extendOptions(items));
			}else{
				_items.push(extendEl(el, items));
			}
		},
		
		// Remove an element
		remove: function(index) {
			_items.splice(index,1);
		}
	};
	
	g.Radial = Radial;
	
})(this);