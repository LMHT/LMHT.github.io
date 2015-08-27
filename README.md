# LMHT

A project by Team Open Brace in YWebCA.

## Setup

Welcome to LMHT!! We are exicited for people to contribute in helping Spanish speakers understand the meaning behind HTML tags. With your help, the possibilities are endless, and we can also add other languages. If there is an HTML tag not in our dropdown list, and you feel you can explain what the english tag represents to spanish speakers, we've made it easy for you to contribute! 

1) Copy and paste the template below, adding the relevant information, into a new html file. Save the file using the name of the tag you are adding, and add the file to our 'elements' folder. 

2) Add one line to the END of our options list in our index.html. This list begins on line 37 of index.html and looks like below. The .html file you saved and put into our elements folder is the value, and the tag itself goes inbetween the open and closed 'option.'

<!--   <option value='YOURFILE.html'>&lt;YOURTAG></option>    -->

One last thing. Although you don't style anything when adding an html doc to our project, we recognize that many people prefer to view the rendering of their html doc before pushing their work upstream. Because this project uses `$.ajax`, you must have a local webserver in order for this to work properly on a local machine. If you have OS X:

1. `cd` to the project folder
1. Type `python -m SimpleHTTPServer`
1. Go to [http://0.0.0.0:8000/](http://0.0.0.0:8000/)

