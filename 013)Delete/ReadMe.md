Before we start here we should know something really important.
================================================================================

	the `return` statement.
	=======================
	As until now we were doing this:
		function addThose(a, b){
			var result = a + b;
		}

		and then this:
		var newNum = addThose(2, 3);
		newNum  //and then undefined.

	Now we will use this:
		function addThose(a, b){
			return a + b;
		}

		var newNum = addThose(1, 2);
		newNum // 3
