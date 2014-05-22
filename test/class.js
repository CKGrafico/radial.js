/* brackets-xunit: includes=../src/radial.js */

describe('Exists Radial class', function(){
	
	it('and it\'s in Window', function(){
		expect(window.Radial).toBeDefined();
	});
	
});

describe('Pass some items to the constructor', function(){
	var myItems = [{html: 'testing'}];
	var radial = new Radial(myItems);
	
	it('and these items are in array', function(){
		expect(radial.count()).toBeDefined();
	});
	
	it('and Radial extends every item options', function(){
		expect(myItems[0].target).toBeUndefined();
		expect(radial.get(0).target).toEqual('_blank');
	});
	
	/* deprecated
	it('and item can be rendered', function(){
		expect(typeof radial.renderItem(0)).toEqual('object');
		expect(radial.renderItem(0).innerHTML).toEqual('testing');
	});*/

});

describe('Manage the list', function(){
	var myItems = [{html: 'testing'}];
	var radial = new Radial(myItems);
	
	it('and can add new item', function(){
		expect(radial.count()).toEqual(1);
		radial.add({html: 'second test'});
		expect(radial.count()).toEqual(2);
	});
	
	it('and can add some items', function(){
		expect(radial.count()).toEqual(2);
		radial.add([{html: 'third test'}, {html: 'last test'}]);
		expect(radial.count()).toEqual(4);
	});
	
	it('and can edit an item', function(){
		expect(radial.get(3).html).toEqual('last test');
		radial.get(3).html = 'edited';
		expect(radial.get(3).html).toEqual('edited');
	});
	
	it('and can remove an item', function(){
		expect(radial.count()).toEqual(4);
		radial.remove(3);
		expect(radial.count()).toEqual(3);
	});
});

describe('Calculate positions', function(){
	var myItems = [{html: 1},{html: 2},{html: 3},{html: 4}];
	var radial = new Radial(myItems);

	it('and 4 items paint a cross', function(){
		expect(radial.count()).toEqual(4);
		expect(radial.getAlfa(0)).toEqual(0);
		expect(radial.getAlfa(0)).toEqual(0);
		expect(radial.getAlfa(1)).toEqual(90);
		expect(radial.getAlfa(2)).toEqual(180);
		expect(radial.getAlfa(3)).toEqual(270);
	});
	
	it('and 8 items paint a circle', function(){
		var myItems2 = [{html: 5},{html: 6},{html: 7},{html: 8}];
		radial.add(myItems2);
		expect(radial.count()).toEqual(8);
		expect(radial.getAlfa(0)).toEqual(0);
		expect(radial.getAlfa(1)).toEqual(45);
		expect(radial.getAlfa(2)).toEqual(90);
		expect(radial.getAlfa(3)).toEqual(135);
		expect(radial.getAlfa(4)).toEqual(180);
		expect(radial.getAlfa(5)).toEqual(225);
		expect(radial.getAlfa(6)).toEqual(270);
		expect(radial.getAlfa(7)).toEqual(315);
	});
});

describe('Showing items', function(){
	var myItems = [{html: 1},{html: 2},{html: 3},{html: 4}];
	var radial = new Radial(myItems);
	var result = radial.render();
	
	it('and can show all items', function() {
		expect(result.childNodes.length).toEqual(4);
		expect(result.childNodes[0].innerHTML).toEqual('1');
	});
	
	it('and all items have correct position respect container', function() {
		var nodes = result.childNodes;
		expect(nodes[0].style.top).toEqual('50px');
		expect(nodes[0].style.left).toEqual('100px');
		
		expect(nodes[1].style.top).toEqual('100px');
		expect(nodes[1].style.left).toEqual('50px');
		
		expect(nodes[2].style.top).toEqual('50px');
		expect(nodes[2].style.left).toEqual('0px');
		
		expect(nodes[3].style.top).toEqual('0px');
		expect(nodes[3].style.left).toEqual('50px');
	});
	
	
});