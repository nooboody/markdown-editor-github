var cheatSheetExample = '   ##### [](#table-of-contents)Table of Contents  '  + 
'     '  + 
'   [Headers](#headers)    '  + 
'   [Emphasis](#emphasis)    '  + 
'   [Lists](#lists)    '  + 
'   [Links](#links)    '  + 
'   [Images](#images)    '  + 
'   [Code and Syntax Highlighting](#code)    '  + 
'   [Tables](#tables)    '  + 
'   [Blockquotes](#blockquotes)    '  + 
'   [Inline HTML](#html)    '  + 
'   [Horizontal Rule](#hr)    '  + 
'   [Line Breaks](#lines)    '  + 
'   [YouTube Videos](#videos)  '  + 
'     '  + 
'   [](#headers)Headers  '  + 
'   -------------------  '  + 
'     '  + 
'       # H1  '  + 
'       ## H2  '  + 
'       ### H3  '  + 
'       #### H4  '  + 
'       ##### H5  '  + 
'       ###### H6  '  + 
'         '  + 
'       Alternatively, for H1 and H2, an underline-ish style:  '  + 
'         '  + 
'       Alt-H1  '  + 
'       ======  '  + 
'         '  + 
'       Alt-H2  '  + 
'       ------  '  + 
'         '  + 
'     '  + 
'   [](#h1)H1  '  + 
'   =========  '  + 
'     '  + 
'   [](#h2)H2  '  + 
'   ---------  '  + 
'     '  + 
'   ### [](#h3)H3  '  + 
'     '  + 
'   #### [](#h4)H4  '  + 
'     '  + 
'   ##### [](#h5)H5  '  + 
'     '  + 
'   ###### [](#h6)H6  '  + 
'     '  + 
'   Alternatively, for H1 and H2, an underline-ish style:  '  + 
'     '  + 
'   [](#alt-h1)Alt-H1  '  + 
'   =================  '  + 
'     '  + 
'   [](#alt-h2)Alt-H2  '  + 
'   -----------------  '  + 
'     '  + 
'   [](#emphasis)Emphasis  '  + 
'   ---------------------  '  + 
'     '  + 
'       Emphasis, aka italics, with *asterisks* or _underscores_.  '  + 
'         '  + 
'       Strong emphasis, aka bold, with **asterisks** or __underscores__.  '  + 
'         '  + 
'       Combined emphasis with **asterisks and _underscores_**.  '  + 
'         '  + 
'       Strikethrough uses two tildes. ~~Scratch this.~~  '  + 
'         '  + 
'     '  + 
'   Emphasis, aka italics, with _asterisks_ or _underscores_.  '  + 
'     '  + 
'   Strong emphasis, aka bold, with **asterisks** or **underscores**.  '  + 
'     '  + 
'   Combined emphasis with **asterisks and _underscores_**.  '  + 
'     '  + 
'   Strikethrough uses two tildes. Scratch this.  '  + 
'     '  + 
'   [](#lists)Lists  '  + 
'   ---------------  '  + 
'     '  + 
'   (In this example, leading and trailing spaces are shown with with dots: ⋅)  '  + 
'     '  + 
'       1. First ordered list item  '  + 
'       2. Another item  '  + 
'       ⋅⋅* Unordered sub-list.   '  + 
'       1. Actual numbers dont matter, just that its a number  '  + 
'       ⋅⋅1. Ordered sub-list  '  + 
'       4. And another item.  '  + 
'         '  + 
'       ⋅⋅⋅You can have properly indented paragraphs within list items. Notice the blank line above, and the leading spaces (at least one, but well use three here to also align the raw Markdown).  '  + 
'         '  + 
'       ⋅⋅⋅To have a line break without a paragraph, you will need to use two trailing spaces.⋅⋅  '  + 
'       ⋅⋅⋅Note that this line is separate, but within the same paragraph.⋅⋅  '  + 
'       ⋅⋅⋅(This is contrary to the typical GFM line break behaviour, where trailing spaces are not required.)  '  + 
'         '  + 
'       * Unordered list can use asterisks  '  + 
'       - Or minuses  '  + 
'       + Or pluses  '  + 
'         '  + 
'     '  + 
'   1.  First ordered list item  '  + 
'   2.  Another item  '  + 
'     '  + 
'   *   Unordered sub-list.  '  + 
'     '  + 
'   1.  Actual numbers dont matter, just that its a number  '  + 
'         '  + 
'   2.  Ordered sub-list  '  + 
'         '  + 
'   3.  And another item.  '  + 
'         '  + 
'       You can have properly indented paragraphs within list items. Notice the blank line above, and the leading spaces (at least one, but well use three here to also align the raw Markdown).  '  + 
'         '  + 
'       To have a line break without a paragraph, you will need to use two trailing spaces.    '  + 
'       Note that this line is separate, but within the same paragraph.    '  + 
'       (This is contrary to the typical GFM line break behaviour, where trailing spaces are not required.)  '  + 
'         '  + 
'     '  + 
'   *   Unordered list can use asterisks  '  + 
'     '  + 
'   *   Or minuses  '  + 
'     '  + 
'   *   Or pluses  '  + 
'     '  + 
'   [](#links)Links  '  + 
'   ---------------  '  + 
'     '  + 
'   There are two ways to create links.  '  + 
'     '  + 
'       [Im an inline-style link](https://www.google.com)  '  + 
'         '  + 
'       [Im an inline-style link with title](https://www.google.com "Googles Homepage")  '  + 
'         '  + 
'       [Im a reference-style link][Arbitrary case-insensitive reference text]  '  + 
'         '  + 
'       [Im a relative reference to a repository file](../blob/master/LICENSE)  '  + 
'         '  + 
'       [You can use numbers for reference-style link definitions][1]  '  + 
'         '  + 
'       Or leave it empty and use the [link text itself].  '  + 
'         '  + 
'       URLs and URLs in angle brackets will automatically get turned into links.   '  + 
'       http://www.example.com or <http://www.example.com> and sometimes   '  + 
'       example.com (but not on Github, for example).  '  + 
'         '  + 
'       Some text to show that the reference links can follow later.  '  + 
'         '  + 
'       [arbitrary case-insensitive reference text]: https://www.mozilla.org  '  + 
'       [1]: http://slashdot.org  '  + 
'       [link text itself]: http://www.reddit.com  '  + 
'         '  + 
'     '  + 
'   [Im an inline-style link](https://www.google.com)  '  + 
'     '  + 
'   [Im an inline-style link with title](https://www.google.com "Googles Homepage")  '  + 
'     '  + 
'   [Im a reference-style link](https://www.mozilla.org)  '  + 
'     '  + 
'   [Im a relative reference to a repository file](../blob/master/LICENSE)  '  + 
'     '  + 
'   [You can use numbers for reference-style link definitions](http://slashdot.org)  '  + 
'     '  + 
'   Or leave it empty and use the [link text itself](http://www.reddit.com).  '  + 
'     '  + 
'   URLs and URLs in angle brackets will automatically get turned into links. [http://www.example.com](http://www.example.com) or [http://www.example.com](http://www.example.com) and sometimes example.com (but not on Github, for example).  '  + 
'     '  + 
'   Some text to show that the reference links can follow later.  '  + 
'     '  + 
'   [](#images)Images  '  + 
'   -----------------  '  + 
'     '  + 
'       Heres our logo (hover to see the title text):  '  + 
'         '  + 
'       Inline-style:   '  + 
'       ![alt text](https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png "Logo Title Text 1")  '  + 
'         '  + 
'       Reference-style:   '  + 
'       ![alt text][logo]  '  + 
'         '  + 
'       [logo]: https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png "Logo Title Text 2"  '  + 
'         '  + 
'     '  + 
'   Heres our logo (hover to see the title text):  '  + 
'     '  + 
'   Inline-style: ![alt text](https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png "Logo Title Text 1")  '  + 
'     '  + 
'   Reference-style: ![alt text](https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png "Logo Title Text 2")  '  + 
'     '  + 
'   [](#code-and-syntax-highlighting)Code and Syntax Highlighting  '  + 
'   -------------------------------------------------------------  '  + 
'     '  + 
'   Code blocks are part of the Markdown spec, but syntax highlighting isnt. However, many renderers -- like Githubs and _Markdown Here_ \-\- support syntax highlighting. Which languages are supported and how those language names should be written will vary from renderer to renderer. _Markdown Here_ supports highlighting for dozens of languages (and not-really-languages, like diffs and HTTP headers); to see the complete list, and how to write the language names, see the [highlight.js demo page](http://softwaremaniacs.org/media/soft/highlight/test.html).  '  + 
'     '  + 
'       Inline `code` has `back-ticks around` it.  '  + 
'         '  + 
'     '  + 
'   Inline `code` has `back-ticks around` it.  '  + 
'     '  + 
'   Blocks of code are either fenced by lines with three back-ticks ` ``` `, or are indented with four spaces. I recommend only using the fenced code blocks -- theyre easier and only they support syntax highlighting.  '  + 
'     '  + 
'       ```javascript  '  + 
'       var s = "JavaScript syntax highlighting";  '  + 
'       alert(s);  '  + 
'       ```  '  + 
'          '  + 
'       ```python  '  + 
'       s = "Python syntax highlighting"  '  + 
'       print s  '  + 
'       ```  '  + 
'          '  + 
'       `````  '  + 
'       No language indicated, so no syntax highlighting.   '  + 
'       But lets throw in a <b>tag</b>.  '  + 
'       ````  '  + 
'         '  + 
'     '  + 
'   var s = "JavaScript syntax highlighting";  '  + 
'   alert(s);  '  + 
'     '  + 
'   s = "Python syntax highlighting"  '  + 
'   print s  '  + 
'     '  + 
'       No language indicated, so no syntax highlighting in Markdown Here (varies on Github).   '  + 
'       But lets throw in a <b>tag</b>.  '  + 
'         '  + 
'     '  + 
'   [](#tables)Tables  '  + 
'   -----------------  '  + 
'     '  + 
'   Tables arent part of the core Markdown spec, but they are part of GFM and _Markdown Here_ supports them. They are an easy way of adding tables to your email -- a task that would otherwise require copy-pasting from another application.  '  + 
'     '  + 
'       Colons can be used to align columns.  '  + 
'         '  + 
'       | Tables        | Are           | Cool  |  '  + 
'       | ------------- |:-------------:| -----:|  '  + 
'       | col 3 is      | right-aligned | $1600 |  '  + 
'       | col 2 is      | centered      |   $12 |  '  + 
'       | zebra stripes | are neat      |    $1 |  '  + 
'         '  + 
'       There must be at least 3 dashes separating each header cell.  '  + 
'       The outer pipes (|) are optional, and you dont need to make the   '  + 
'       raw Markdown line up prettily. You can also use inline Markdown.  '  + 
'         '  + 
'       Markdown | Less | Pretty  '  + 
'       --- | --- | ---  '  + 
'       *Still* | ```renders``` | **nicely**  '  + 
'       1 | 2 | 3  '  + 
'         '  + 
'     '  + 
'   Colons can be used to align columns.  '  + 
'     '  + 
'   Tables  '  + 
'     '  + 
'   Are  '  + 
'     '  + 
'   Cool  '  + 
'     '  + 
'   col 3 is  '  + 
'     '  + 
'   right-aligned  '  + 
'     '  + 
'   $1600  '  + 
'     '  + 
'   col 2 is  '  + 
'     '  + 
'   centered  '  + 
'     '  + 
'   $12  '  + 
'     '  + 
'   zebra stripes  '  + 
'     '  + 
'   are neat  '  + 
'     '  + 
'   $1  '  + 
'     '  + 
'   There must be at least 3 dashes separating each header cell. The outer pipes (|) are optional, and you dont need to make the raw Markdown line up prettily. You can also use inline Markdown.  '  + 
'     '  + 
'   Markdown  '  + 
'     '  + 
'   Less  '  + 
'     '  + 
'   Pretty  '  + 
'     '  + 
'   _Still_  '  + 
'     '  + 
'   `renders`  '  + 
'     '  + 
'   **nicely**  '  + 
'     '  + 
'   1  '  + 
'     '  + 
'   2  '  + 
'     '  + 
'   3  '  + 
'     '  + 
'   [](#blockquotes)Blockquotes  '  + 
'   ---------------------------  '  + 
'     '  + 
'       > Blockquotes are very handy in email to emulate reply text.  '  + 
'       > This line is part of the same quote.  '  + 
'         '  + 
'       Quote break.  '  + 
'         '  + 
'       > This is a very long line that will still be quoted properly when it wraps. Oh boy lets keep writing to make sure this is long enough to actually wrap for everyone. Oh, you can *put* **Markdown** into a blockquote.   '  + 
'         '  + 
'     '  + 
'   > Blockquotes are very handy in email to emulate reply text. This line is part of the same quote.  '  + 
'     '  + 
'   Quote break.  '  + 
'     '  + 
'   > This is a very long line that will still be quoted properly when it wraps. Oh boy lets keep writing to make sure this is long enough to actually wrap for everyone. Oh, you can _put_ **Markdown** into a blockquote.  '  + 
'     '  + 
'   [](#inline-html)Inline HTML  '  + 
'   ---------------------------  '  + 
'     '  + 
'   You can also use raw HTML in your Markdown, and itll mostly work pretty well.  '  + 
'     '  + 
'       <dl>  '  + 
'         <dt>Definition list</dt>  '  + 
'         <dd>Is something people use sometimes.</dd>  '  + 
'         '  + 
'         <dt>Markdown in HTML</dt>  '  + 
'         <dd>Does *not* work **very** well. Use HTML <em>tags</em>.</dd>  '  + 
'       </dl>  '  + 
'         '  + 
'     '  + 
'   Definition list  '  + 
'     '  + 
'   Is something people use sometimes.  '  + 
'     '  + 
'   Markdown in HTML  '  + 
'     '  + 
'   Does \*not\* work \*\*very\*\* well. Use HTML _tags_.  '  + 
'     '  + 
'   [](#horizontal-rule)Horizontal Rule  '  + 
'   -----------------------------------  '  + 
'     '  + 
'       Three or more...  '  + 
'         '  + 
'       ---  '  + 
'         '  + 
'       Hyphens  '  + 
'         '  + 
'       ***  '  + 
'         '  + 
'       Asterisks  '  + 
'         '  + 
'       ___  '  + 
'         '  + 
'       Underscores  '  + 
'         '  + 
'     '  + 
'   Three or more...  '  + 
'     '  + 
'   * * *  '  + 
'     '  + 
'   Hyphens  '  + 
'     '  + 
'   * * *  '  + 
'     '  + 
'   Asterisks  '  + 
'     '  + 
'   * * *  '  + 
'     '  + 
'   Underscores  '  + 
'     '  + 
'   [](#line-breaks)Line Breaks  '  + 
'   ---------------------------  '  + 
'     '  + 
'   My basic recommendation for learning how line breaks work is to experiment and discover -- hit <Enter> once (i.e., insert one newline), then hit it twice (i.e., insert two newlines), see what happens. Youll soon learn to get what you want. "Markdown Toggle" is your friend.  '  + 
'     '  + 
'   Here are some things to try out:  '  + 
'     '  + 
'       Heres a line for us to start with.  '  + 
'         '  + 
'       This line is separated from the one above by two newlines, so it will be a *separate paragraph*.  '  + 
'         '  + 
'       This line is also a separate paragraph, but...  '  + 
'       This line is only separated by a single newline, so its a separate line in the *same paragraph*.  '  + 
'         '  + 
'     '  + 
'   Heres a line for us to start with.  '  + 
'     '  + 
'   This line is separated from the one above by two newlines, so it will be a _separate paragraph_.  '  + 
'     '  + 
'   This line is also begins a separate paragraph, but...    '  + 
'   This line is only separated by a single newline, so its a separate line in the _same paragraph_.  '  + 
'     '  + 
'   (Technical note: _Markdown Here_ uses GFM line breaks, so theres no need to use MDs two-space line breaks.)  '  + 
'     '  + 
'   [](#youtube-videos)YouTube Videos  '  + 
'   ---------------------------------  '  + 
'     '  + 
'   They cant be added directly but you can add an image with a link to the video like this:  '  + 
'     '  + 
'       <a href="http://www.youtube.com/watch?feature=player_embedded&v=YOUTUBE_VIDEO_ID_HERE  '  + 
'       " target="_blank"><img src="http://img.youtube.com/vi/YOUTUBE_VIDEO_ID_HERE/0.jpg"   '  + 
'       alt="IMAGE ALT TEXT HERE" width="240" height="180" border="10" /></a>  '  + 
'         '  + 
'     '  + 
'   Or, in pure Markdown, but losing the image sizing and border:  '  + 
'     '  + 
'       [![IMAGE ALT TEXT HERE](http://img.youtube.com/vi/YOUTUBE_VIDEO_ID_HERE/0.jpg)](http://www.youtube.com/watch?v=YOUTUBE_VIDEO_ID_HERE)  '  + 
'         '  + 
'     '  + 
'  Referencing a bug by #bugID in your git commit links it to the slip. For example #1.  ' ; 


var markdownString =
  '# Markdown Editor \n \n' +
  ' Markdown is a lightweight markup language with plain text formatting syntax.  \n \n' +
  '#### Features \n \n' +
  '- Tables \n' +
  '- Fenced code blocks \n' +
  '- Even More \n\n' +
  '````javascript \n\n' +
  'function javascriptIsWild(){ \n \n' +
  'parseInt("Infinity", 10) // -> NaN \n\n' +
  '}\n' +
  '````' +
  ' \n\n ![alt text](https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png "Logo Title Text 1")\n\n' +
  '\n\n ### Support my work? \n\n 1. [My Donate Page](https://www.robertgabriel.ninja/donate) \n\n 2. [Patreon](https://www.patreon.com/robertjgabriel) ' +
  '\n\n ### Premium Version \n\n 1. Auto save your work!! \n\n 2. Only 1.99 cent \n\n 3. Download your work to the desktop';