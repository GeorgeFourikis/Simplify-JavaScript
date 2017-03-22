What is Boolean Logic?
===========================================================================

	-->Everything starts with the idea that a statement is either True or False.

	-->If we combine those initial statements to create complex structures , stil those structures would evaluate to True or False.

	Lets say i have a variable:
		var x = 5;

	>	| Greater than======================x > 10==========false
	>=	| Greater than or equal to==========x >= 5==========true
	<	| Less than=========================x < -50========false
	<=	| Less than or equal to=============x <= 100========true
	==	| Equal to==========================x == "5"========true
	!=	| Not equal to======================x != "b"========true
	===	| Equal value and type==============x === "5"=======false
	!==	| Not equal value or equal type=====x !== "5"=======true

Equality Operators
===========================================================================
    == vs ===

    var x = 99;
    ===========

	x == "99"  //true

	x === "99" //false


	var y = null;

	y == undefined //true

	y === undefined //false

Food for thought!!
===========================================================================
	true == "1"          //true

	0 == false           //true

	null == undefined    //true

	NaN == NaN           //false


Logical Operators!
===========================================================================
	assume that x=5 and y=9
	=======================

	&&	| AND	| x < 10 && x !== 5		false
	||	| OR	| y > 9 || x === 5		true
	!	| NOT	| !(x === y)			true

Try yourself now.First see the statement and evaluate,then run it and see if you were close!
===========================================================================
	A) 	var x = 10;
		var y = "a"

		y === "b" || x >= 10

	B)  var x = 3;
		var y = 8;

		!(x == "3" || x === y) && !(y != 8 && x <= y)

Truthy and Falsy Values
===========================================================================

	Values that are not actually true or false are still inherently "truthy" or "falsy" when evaluated in Boolean Context.

	Try the following on the console:

	!"Hello World"

	!""

	!null

	!0

	!-1

	!NaN

So what is Truthy and what Falsy?
===========================================================================
	FALSY VALUES:
	=============
	false
	0
	""
	null
	undefined
	NaN 

	Everything else is Truthy!!!===========================================


One last exercise before you move on!!
===========================================================================
	C)	var str = ""
		var msg = "haha!"
		var isFunny = "false"

		!(( str || msg ) && isFunny)