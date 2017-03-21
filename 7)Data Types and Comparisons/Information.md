*Javascript Data Types*
	* Objects 
		==> { }
	* Primitives - Building Blocks
		==> String   // 'Hello World!'
		==> Number   // 34, 67, 1098
		==> Boolean  // true, false
		==>Undefined // Value that has not been set yet
		==>Null      // Literally NOTHING


======================================================
*Comparisons with Primitives
======================================================
	'george' === 'george'  //true
	'george' === 32        //false

	1 === 1                //true
	1 === 127865           //false

	true === true          //true
	true === false         //false

	undefined === undefined //true
	null === null           //true


======================================================
*Comparisons with Objects --way more different from the above.
======================================================

	{} === {}                //false
	[1, 2, 3] === [1, 2, 3]  //false
	
	Note: Although in both cases the objects and the arrays are identical,
	still they are not equal.The reason is because each object and each array takes a different place inside the Computer's memory.So the Computer will noy identify them as equals,since it knows that they exist in different places.
