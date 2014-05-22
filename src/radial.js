(function(g){
	var options = {
		
	};
	
	var el = {
		classList: ' ',
		disabled: false,
		href: null,
		html: '',
		target: '_blank',
		_alfa: 0
	};
	
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
		this._items = extendOptions(items);
	};
	
	Radial.prototype = {
		
		// Render single item
		renderItem: function(position) {
			var item = this._items[position];
			return template(item);
		},
		
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
				this._items.push(extendEl(el, items));
			}
		},
		
		// Remove an element
		remove: function(index) {
			this._items.splice(index,1);
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
		}
	};
	
	g.Radial = Radial;
	
})(this);