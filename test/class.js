/* brackets-xunit: includes=../src/radial.js */

describe('Exists Radial class', function(){
	
	it('and it\'s in Window', function(){
		expect(window.Radial).toBeDefined();
	});
	
});

var myItems = [
	{
		html: 'testing',
	}
];

var radial = new Radial(myItems);

describe('Pass some items to the constructor', function(){
	
	it('and these items are in array', function(){
		expect(radial.count()).toBeDefined();
	});
	
	it('and Radial extends every item options', function(){
		expect(myItems[0].target).toBeUndefined();
		expect(radial.get(0).target).toEqual('_blank');
	});
	
	it('and item can be rendered', function(){
		expect(typeof radial.renderItem(0)).toEqual('string');
	});

});

describe('Manage the list',function(){
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

/*describe('Showing items', function(){
	it('and can show single item');
	it('and can show all items');
});*/