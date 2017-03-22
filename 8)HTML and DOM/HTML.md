So what is HTML?
=============================================================
	HTML is one of the building blocks of the web.If we think that in an imaginary sentence Javascript represents the VERB(what our website does),
	the HTML is the NOUN(what our website is/has) and the last is the CSS which is the adjective(Defines how our website looks).

HTML boilerplate
=============================================================
	<!DOCTYPE html>
	<html> 

		<head>
			<title>My Todo Application</title>
			<link rel="stylesheet" href="style.css">
			<script src="script.js" />
		</head>

		<body>
			<h1>Hello World!</h1>

		</body>
	</html>


Whatever you can see inside the boilerplate that is surrounded by angle brackets ( < ... > ), is called tag.For example, "<html>" is the opening tag and "</html>"is the closing tag.Notice also,that there are some elements that are self closing which practically means that they dont need a closing tag. 
"<script src='.....' />" .
Also, when i have an opening and a closing tag,then its safe to sy that i have an element. "<h1>Hello World!</h1>", this is an element.
So for examplein my boilerplate lets take a look of my elements.
	1)HTML element has:
		1.a)Head element
		1.b)Body element
	2)Head element has:
		2.a)title element
		2.a)link element
		2.a)script self enclosing tag - element
	3)Body element has:
		3.a)Header element (h1)	

Note: "<!DOCTYPE html>" is the version of HTML we need to include.

