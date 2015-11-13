# LMHT

A project by Team Open Brace in YWebCA.

## Setup

Welcome to LMHT! We are excited for people to contribute in helping Spanish speakers understand the meaning behind HTML tags. With your help, the possibilities are endless, and we can also add other languages. If there is an HTML tag not in our dropdown list, and you feel you can explain what the english tag represents to Spanish speakers, we've made it easy for you to contribute!

1) Copy and paste the template below, adding the relevant information, into a new html file. Save the file using the name of the tag you are adding, and add the file to our 'elements' folder.

2) Add one line to the END of our options list in our index.html. This list begins on line 37 of index.html and looks like below. The .html file you saved and put into our elements folder is the value, and the tag itself goes in between the open and closed `option`.

`<option value='YOURFILE.html'>&lt;YOURTAG></option>`

One last thing. Although you don't style anything when adding an html doc to our project, we recognize that many people prefer to view the rendering of their html doc before pushing their work upstream. Because this project uses `$.ajax`, you must have a local web server in order for this to work properly on a local machine. If you have OS X:

1. `cd` to the project folder
1. Type `python -m SimpleHTTPServer`
1. Go to [http://0.0.0.0:8000/](http://0.0.0.0:8000/)


HTML Template down here:

```
<article class="article">
    <header class="article-header">
      <h2>
        <code>
          <!-- Actual Tag Name; Whatever the tag name is.  -->
          &lt;tagname>
        </code>
        <!-- Audio; You don't need to make your own audio file, but we're cool if you have one.
          Simply name as the same tag name that you're doing and save it as an mp3
          (e.g. anchor.mp3 for anchor). -->
        <audio src="audio/tagname.mp3" controls></audio>
      </h2>
      <div class="base-words">
        <div class="base-word-line">
          <!-- <strong> includes the base word in English -->
          English Base Word: <strong></strong>
        </div>
        <div class="base-word-line">
          <!-- <strong> includes the base word in Spanish -->
          Spanish Word Equivalent: <strong></strong>
        </div>
      </div>
    </header>
    <div class="definition">
      <div class="definition-box definition-spanish">
        <h4>Definici&oacute;n</h4>
        <p></p>
      </div>
      <div class="definition-box definition-english">
        <h4>Definition</h4>
        <p></p>
      </div>
    </div>
    <div class="how-to-remember">
      <div class="how-to-remember-box how-to-remember-spanish">
        <!-- Spanish block heading; no editing needed-->
        <h4>&iquest;C&oacute;mo recordar?</h4>
        <!-- Mnemonic Aid in Spanish -->
        <p></p>
      </div>
      <div class="how-to-remember-box how-to-remember-english">
        <!-- English block heading; no editing needed-->
        <h4>How to Remember</h4>
        <!-- Mnemonic Aid in English -->
        <p></p>
      </div>
    </div>
    <!-- <code> contains the code example. Use <strong> to select the keyword/specific tag -->
    <pre class="code-example">
      <code>
        <!-- Place your awesome code example here :D -->
      </code>
    </pre>
  </article>
```
