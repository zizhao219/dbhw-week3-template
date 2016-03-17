var assert = require('assert');
var testFile = require('./single-linked-list.js');
// var testFile = require('./single-linked-answer.js');

var SinglyLinkedList = testFile.SinglyLinkedList;
var Node = testFile.Node;

describe('Node', function() {
  describe('#new Node(data)', function () {
  	var node = new Node("TEST");
    it('should has data with value equal to input', function () {
      assert.equal("TEST", node.data);
    });

    it('should has next with null value', function () {
      assert.equal(null, node.next);
    });
  });
});


describe('SinglyLinkedList', function() {

  //init
  describe('#new SinglyLinkedList()', function () {
  	var singlyLinkedList = new SinglyLinkedList();
    it('should has head with null value', function () {
      assert.equal(null, singlyLinkedList.head);
    });

    it('should has tail with null value', function () {
      assert.equal(null, singlyLinkedList.tail);
    });

    it('should has numberOfValues with 0 as initial value', function () {
      assert.equal(0, singlyLinkedList.numberOfValues);
    });
  });

  //add
  describe('#add()', function() {
  	it('tail and head should be instance of Node and have same value after adding a first element and numberOfValues will be 1', function() {
		var singlyLinkedList = new SinglyLinkedList();
	  	var data = 123;
	  	singlyLinkedList.add(data);
  		assert.equal(1, singlyLinkedList.numberOfValues);
  		assert.equal(data, singlyLinkedList.head.data);
  		assert.equal(data, singlyLinkedList.tail.data);
  		assert.equal(true, singlyLinkedList.head instanceof Node);
  		assert.equal(true, singlyLinkedList.tail instanceof Node);
    	});

  	it('add 3 elements in a list', function() {
		var singlyLinkedList = new SinglyLinkedList();
	  	singlyLinkedList.add(1);
	  	singlyLinkedList.add(2);
	  	singlyLinkedList.add(3);
  		assert.equal(3, singlyLinkedList.numberOfValues);
  		assert.equal(1, singlyLinkedList.head.data);
  		assert.equal(3, singlyLinkedList.tail.data);
  		assert.equal(true, singlyLinkedList.head instanceof Node);
  		assert.equal(true, singlyLinkedList.tail instanceof Node);
    	});
  });



  //print
  describe('#print()', function() {
    it("should return a empty string after initial a list", function() {
  		var singlyLinkedList = new SinglyLinkedList();
  		assert.equal("", singlyLinkedList.print());
  	});

    it("should return string with space as delimiter", function() {
  		var singlyLinkedList = new SinglyLinkedList();
	  	singlyLinkedList.add("a");
	  	singlyLinkedList.add("b");
	  	singlyLinkedList.add("c");
  		assert.equal("a b c", singlyLinkedList.print());
  	});
  });

  //length
  describe('#length()', function() {
  	it("should return number current list length ", function() {
  		var singlyLinkedList = new SinglyLinkedList();
	  	singlyLinkedList.add("a");
	  	singlyLinkedList.add("b");
	  	singlyLinkedList.add("c");
  		assert.equal(3, singlyLinkedList.numberOfValues);
  	});
  });

  //insertAfter
  describe('#insertAfter(data, toNodeData)', function() {

  	it('should keep current status after insertAfter a non existing node', function() {
  		var singlyLinkedList = new SinglyLinkedList();
	  	singlyLinkedList.add("a");
	  	singlyLinkedList.insertAfter("non", 20);
  		assert.equal(1, singlyLinkedList.numberOfValues);
  		assert.equal("a", singlyLinkedList.head.data);
  		assert.equal("a", singlyLinkedList.tail.data);
  		assert.equal(true, singlyLinkedList.head instanceof Node);
  		assert.equal(true, singlyLinkedList.tail instanceof Node);
  	});

  	it('should insert a data after a given existing node', function() {
  		var singlyLinkedList = new SinglyLinkedList();
	  	singlyLinkedList.add("a");
	  	singlyLinkedList.add("b");
	  	singlyLinkedList.add("c");
	  	singlyLinkedList.insertAfter("after b", "b");
		assert.equal(4, singlyLinkedList.numberOfValues);
		assert.equal("after b", singlyLinkedList.head.next.next.data);
		assert.equal("c", singlyLinkedList.tail.data);
  	});

  	it('should insert multiple node when we have duplicate node data in the list', function() {
  		var singlyLinkedList = new SinglyLinkedList();
	  	singlyLinkedList.add("a");
	  	singlyLinkedList.add("b");
	  	singlyLinkedList.add("c");
	  	singlyLinkedList.add("b");
	  	singlyLinkedList.insertAfter("after b", "b");
  		assert.equal(6, singlyLinkedList.numberOfValues);
  		assert.equal("after b", singlyLinkedList.head.next.next.data);
  		assert.equal("after b", singlyLinkedList.tail.data);
  	});

  });

  //remove
  describe('#remove(data)', function() {
  	it('should keep current status after remove a non existing node', function() {
  		var singlyLinkedList = new SinglyLinkedList();
	  	singlyLinkedList.add("a");
	  	singlyLinkedList.remove("non");
  		assert.equal(1, singlyLinkedList.numberOfValues);
  		assert.equal("a", singlyLinkedList.head.data);
  		assert.equal("a", singlyLinkedList.tail.data);
  		assert.equal(true, singlyLinkedList.head instanceof Node);
  		assert.equal(true, singlyLinkedList.tail instanceof Node);
  	});

  	it('should remove a data', function() {
  		var singlyLinkedList = new SinglyLinkedList();
	  	singlyLinkedList.add("a");
	  	singlyLinkedList.add("b");
	  	singlyLinkedList.add("c");
	  	singlyLinkedList.remove("b");
	  	singlyLinkedList.remove("c");
  		assert.equal(1, singlyLinkedList.numberOfValues);
  		assert.equal("a", singlyLinkedList.head.data);
  		assert.equal("a", singlyLinkedList.tail.data);
  	});

    it('when data is head', function() {
  		var singlyLinkedList = new SinglyLinkedList();
	  	singlyLinkedList.add("a");
	  	singlyLinkedList.add("b");
	  	singlyLinkedList.add("c");
	  	singlyLinkedList.remove("a");
  		assert.equal(2, singlyLinkedList.numberOfValues);
  		assert.equal("b", singlyLinkedList.head.data);
  		assert.equal("c", singlyLinkedList.tail.data);
  	});

    it('when data is tail', function() {
  		var singlyLinkedList = new SinglyLinkedList();
	  	singlyLinkedList.add("a");
	  	singlyLinkedList.add("b");
	  	singlyLinkedList.add("c");
	  	singlyLinkedList.remove("c");
  		assert.equal(2, singlyLinkedList.numberOfValues);
  		assert.equal("a", singlyLinkedList.head.data);
  		assert.equal("b", singlyLinkedList.tail.data);
  	});

  	it('should remove all nodes when we have duplicate node data in the list', function() {
  		var singlyLinkedList = new SinglyLinkedList();
	  	singlyLinkedList.add("a");
	  	singlyLinkedList.add("b");
	  	singlyLinkedList.add("c");
	  	singlyLinkedList.add("b");
	  	singlyLinkedList.remove("b");
  		assert.equal(2, singlyLinkedList.numberOfValues);
  		assert.equal("a", singlyLinkedList.head.data);
  		assert.equal("c", singlyLinkedList.tail.data);
  	});

  });


});
