$(document).on('keypress', 'input,select', function (e) {
    if (e.which == 13) {
        e.preventDefault();
        var $next = $('[tabIndex=' + (+this.tabIndex + 1) + ']');
        console.log($next.length);
        if (!$next.length) {
            $next = $('[tabIndex=1]');
        }
        $next.focus();
    }
});

function myFunction() {
  var rootMain = document.getElementById("myRoot").value;
  var rootLeft = document.getElementById("myRootLeft").value;
  var rootRight = document.getElementById("myRootRight").value;
  var rootLeftLeft = document.getElementById("myRootLeftLeft").value;
  var rootLeftRight = document.getElementById("myRootLeftRight").value;
  var rootRightLeft = document.getElementById("myRootRightLeft").value;
  var rootRightRight = document.getElementById("myRootRightRight").value;

  var rootLeftLeftLeft = document.getElementById("myRootLeftLeftLeft").value;
  var rootLeftLeftRight = document.getElementById("myRootLeftLeftRight").value;

  var rootLeftRightLeft = document.getElementById("myRootLeftRightLeft").value;
  var rootLeftRightRight = document.getElementById("myRootLeftRightRight").value;


  var rootRightLeftLeft = document.getElementById("myRootRightLeftLeft").value;
  var rootRightLeftRight = document.getElementById("myRootRightLeftRight").value;

  var rootRightRightLeft = document.getElementById("myRootRightRightLeft").value;
  var rootRightRightRight = document.getElementById("myRootRightRightRight").value;

  const PostOrderArray = []
  const InOrderArray = []
  const PreOrderArray = []



// javascript program for different tree traversals

/* Class containing left and right child of current
node and key value*/
class Node {
	constructor(val) {
		this.key = val;
		this.left = null;
		this.right = null;
	}
}

	// Root of Binary Tree
	var root = null;

	
	/*
	* Given a binary tree, print its nodes according to the "bottom-up" postorder
	* traversal.
	*/
	function printPostorder(node) {
		if (node == null)
			return;

		// first recur on left subtree
		printPostorder(node.left);

		// then recur on right subtree
		printPostorder(node.right);

		// now deal with the node
		PostOrderArray.push(node.key)

	}

	/* Given a binary tree, print its nodes in inorder */
	function printInorder(node) {
		if (node == null)
			return;

		/* first recur on left child */
		printInorder(node.left);

		/* then print the data of node */
		InOrderArray.push(node.key)

		/* now recur on right child */
		printInorder(node.right);

	}

	/* Given a binary tree, print its nodes in preorder */
	function printPreorder(node) {
		if (node == null)
			return;

		/* first print data of node */
		PreOrderArray.push(node.key)

		/* then recur on left subtree */
		printPreorder(node.left);

		/* now recur on right subtree */
		printPreorder(node.right);
		
	}



	// Driver method
	
		// Level 1
		root = new Node(rootMain);

		// Level 2
		root.left = new Node(rootLeft);
		root.right = new Node(rootRight);

		// Level 3
		root.left.left = new Node(rootLeftLeft);
		root.left.right = new Node(rootLeftRight);
		root.right.left = new Node(rootRightLeft);
		root.right.right = new Node(rootRightRight);

		// Level 4
		root.left.left.left = new Node(rootLeftLeftLeft);
		root.left.left.right =  new Node(rootLeftLeftRight);

		root.left.right.left = new Node(rootLeftRightLeft);
		root.left.right.right = new Node(rootLeftRightRight);

		root.right.left.left = new Node(rootRightLeftLeft);
		root.right.left.right = new Node(rootRightLeftRight);

		root.right.right.left = new Node(rootRightRightLeft);
		root.right.right.right =  new Node(rootRightRightRight);


		

		console.log("\n\nNEW PROBLEM\nPreorder traversal of binary tree is ");
		printPreorder(root);
		


		console.log("Inorder traversal of binary tree is");
		printInorder(root);

		console.log("Postorder traversal of binary tree is ");
		printPostorder(root);

		console.log(PreOrderArray)
		console.log(InOrderArray)
		console.log(PostOrderArray)

		document.getElementById("demo").innerHTML = "Preorder: " + PreOrderArray.join(' ');
		document.getElementById("demo1").innerHTML = "Inorder: " + InOrderArray.join(' ');
		document.getElementById("demo2").innerHTML = "Postorder: " + PostOrderArray.join(' ');





}