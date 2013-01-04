Ext.data.JsonP.CanvasRenderingContext2D({"tagname":"class","name":"CanvasRenderingContext2D","extends":null,"mixins":[],"alternateClassNames":[],"aliases":{},"singleton":false,"requires":[],"uses":[],"enum":null,"override":null,"inheritable":null,"inheritdoc":null,"meta":{},"private":null,"id":"class-CanvasRenderingContext2D","members":{"cfg":[],"property":[],"method":[{"name":"circle","tagname":"method","owner":"CanvasRenderingContext2D","meta":{},"id":"method-circle"},{"name":"clear","tagname":"method","owner":"CanvasRenderingContext2D","meta":{},"id":"method-clear"},{"name":"drawBkgdRadialGradient","tagname":"method","owner":"CanvasRenderingContext2D","meta":{},"id":"method-drawBkgdRadialGradient"},{"name":"drawCheckered","tagname":"method","owner":"CanvasRenderingContext2D","meta":{},"id":"method-drawCheckered"},{"name":"drawImage","tagname":"method","owner":"CanvasRenderingContext2D","meta":{},"id":"method-drawImage"},{"name":"drawPattern","tagname":"method","owner":"CanvasRenderingContext2D","meta":{},"id":"method-drawPattern"},{"name":"drawSmiley","tagname":"method","owner":"CanvasRenderingContext2D","meta":{},"id":"method-drawSmiley"}],"event":[],"css_var":[],"css_mixin":[]},"linenr":909,"files":[{"filename":"utilities.js","href":"utilities.html#CanvasRenderingContext2D"}],"html_meta":{},"statics":{"cfg":[],"property":[],"method":[],"event":[],"css_var":[],"css_mixin":[]},"component":false,"superclasses":[],"subclasses":[],"mixedInto":[],"parentMixins":[],"html":"<div><pre class=\"hierarchy\"><h4>Files</h4><div class='dependency'><a href='source/utilities.html#CanvasRenderingContext2D' target='_blank'>utilities.js</a></div></pre><div class='doc-contents'><p>The native JavaScript canvas graphics context class.</p>\n\n<p>This class has been extended with custom methods (and one overridden\nmethod).</p>\n\n<p>The canvas graphics context for the main canvas is stored in the\n<a href=\"#!/api/global-property-context\" rel=\"global-property-context\" class=\"docClass\">context</a> global variable.</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-circle' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='CanvasRenderingContext2D'>CanvasRenderingContext2D</span><br/><a href='source/utilities.html#CanvasRenderingContext2D-method-circle' target='_blank' class='view-source'>view source</a></div><a href='#!/api/CanvasRenderingContext2D-method-circle' class='name expandable'>circle</a>( <span class='pre'>x, y, r, [fillStyle], [strokeStyle]</span> )</div><div class='description'><div class='short'>Draw a circle. ...</div><div class='long'><p>Draw a circle.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>x</span> : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a><div class='sub-desc'><p>The x-coordinate of the center of the circle.</p>\n</div></li><li><span class='pre'>y</span> : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a><div class='sub-desc'><p>The y-coordinate of the center of the circle.</p>\n</div></li><li><span class='pre'>r</span> : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a><div class='sub-desc'><p>The radius of the circle.</p>\n</div></li><li><span class='pre'>fillStyle</span> : Mixed (optional)<div class='sub-desc'><p>A canvas fillStyle used to fill the circle. If not specified, the circle\n  uses the current fillStyle. If null, the circle is not filled.</p>\n</div></li><li><span class='pre'>strokeStyle</span> : Mixed (optional)<div class='sub-desc'><p>A canvas strokeStyle used to draw the circle's border. If not specified,\n  no border is drawn on the circle. If null, the border uses the current\n  strokeStyle.</p>\n</div></li></ul></div></div></div><div id='method-clear' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='CanvasRenderingContext2D'>CanvasRenderingContext2D</span><br/><a href='source/utilities.html#CanvasRenderingContext2D-method-clear' target='_blank' class='view-source'>view source</a></div><a href='#!/api/CanvasRenderingContext2D-method-clear' class='name expandable'>clear</a>( <span class='pre'>[fillStyle]</span> )</div><div class='description'><div class='short'>Clear the canvas. ...</div><div class='long'><p>Clear the canvas.</p>\n\n<p>If the rendering context is the <a href=\"#!/api/global-property-context\" rel=\"global-property-context\" class=\"docClass\">global context</a> for\nthe main canvas or if it belongs to a <a href=\"#!/api/Layer\" rel=\"Layer\" class=\"docClass\">Layer</a>, the visible area of the\nrelevant canvas will be cleared. Otherwise, the context doesn't know its\ntransformation matrix, so we have to temporarily reset it to clear the\ncanvas. This has the effect of clearing the visible area of the canvas, but\nif the fillStyle is being used to draw something, it will not scroll with\nthe rest of the canvas.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>fillStyle</span> : Mixed (optional)<div class='sub-desc'><p>If this parameter is passed, the visible area of the canvas will be filled\n  in with the specified style. Otherwise, the canvas is simply wiped.</p>\n</div></li></ul></div></div></div><div id='method-drawBkgdRadialGradient' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='CanvasRenderingContext2D'>CanvasRenderingContext2D</span><br/><a href='source/utilities.html#CanvasRenderingContext2D-method-drawBkgdRadialGradient' target='_blank' class='view-source'>view source</a></div><a href='#!/api/CanvasRenderingContext2D-method-drawBkgdRadialGradient' class='name expandable'>drawBkgdRadialGradient</a>( <span class='pre'></span> )</div><div class='description'><div class='short'>Draws a blue-and-yellow radial gradient across the entire background of the\nworld. ...</div><div class='long'><p>Draws a blue-and-yellow radial gradient across the entire background of the\nworld. This is mainly useful to demonstrate that scrolling works if the\nworld is bigger than the canvas.</p>\n</div></div></div><div id='method-drawCheckered' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='CanvasRenderingContext2D'>CanvasRenderingContext2D</span><br/><a href='source/utilities.html#CanvasRenderingContext2D-method-drawCheckered' target='_blank' class='view-source'>view source</a></div><a href='#!/api/CanvasRenderingContext2D-method-drawCheckered' class='name expandable'>drawCheckered</a>( <span class='pre'>[squareSize], [x], [y], [w], [h], [color1], [color2]</span> ) : CanvasPattern</div><div class='description'><div class='short'>Draw a checkerboard pattern. ...</div><div class='long'><p>Draw a checkerboard pattern.</p>\n\n<p>This method can be invoked in two ways:</p>\n\n<ul>\n<li><code>drawCheckered(squareSize, x, y, w, h, color1, color2);</code></li>\n<li><code>drawCheckered(color1, color2, squareSize, x, y, w, h);</code></li>\n</ul>\n\n\n<p>All parameters are optional either way.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>squareSize</span> : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a> (optional)<div class='sub-desc'><p>The width and height, in pixels, of each square in the checkerboard\n  pattern.</p>\n<p>Defaults to: <code>80</code></p></div></li><li><span class='pre'>x</span> : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a> (optional)<div class='sub-desc'><p>The x-coordinate of where the pattern's upper-left corner should be drawn\n  on the canvas.</p>\n<p>Defaults to: <code>0</code></p></div></li><li><span class='pre'>y</span> : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a> (optional)<div class='sub-desc'><p>The y-coordinate of where the pattern's upper-left corner should be drawn\n  on the canvas.</p>\n<p>Defaults to: <code>0</code></p></div></li><li><span class='pre'>w</span> : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a> (optional)<div class='sub-desc'><p>The width of the pattern to draw onto the canvas.</p>\n<p>Defaults to: <code>squareSize*2</code></p></div></li><li><span class='pre'>h</span> : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a> (optional)<div class='sub-desc'><p>The height of the pattern to draw onto the canvas.</p>\n<p>Defaults to: <code>squareSize*2</code></p></div></li><li><span class='pre'>color1</span> : String (optional)<div class='sub-desc'><p>The color of one set of squares in the checkerboard.</p>\n<p>Defaults to: <code>&quot;silver&quot;</code></p></div></li><li><span class='pre'>color2</span> : String (optional)<div class='sub-desc'><p>The color of the other set of squares in the checkerboard.</p>\n<p>Defaults to: <code>&quot;lightGray&quot;</code></p></div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>CanvasPattern</span><div class='sub-desc'><p>The CanvasPattern object for the pattern that was drawn. It can be helpful\n  for performance to store this return value and use it to call\n  <a href=\"#!/api/CanvasRenderingContext2D-method-drawPattern\" rel=\"CanvasRenderingContext2D-method-drawPattern\" class=\"docClass\">drawPattern</a>() in the future if you need\n  to draw this same pattern repeatedly. (Another option is to cache the\n  drawn pattern in a <a href=\"#!/api/Layer\" rel=\"Layer\" class=\"docClass\">Layer</a>.)</p>\n</div></li></ul></div></div></div><div id='method-drawImage' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='CanvasRenderingContext2D'>CanvasRenderingContext2D</span><br/><a href='source/utilities.html#CanvasRenderingContext2D-method-drawImage' target='_blank' class='view-source'>view source</a></div><a href='#!/api/CanvasRenderingContext2D-method-drawImage' class='name expandable'>drawImage</a>( <span class='pre'>src, [sx], [sy], [sw], [sh], x, y, [w], [h], [finished]</span> )</div><div class='description'><div class='short'>Draws an image onto the canvas. ...</div><div class='long'><p>Draws an image onto the canvas.</p>\n\n<p>This method is better than the original <code>drawImage()</code> for several reasons:</p>\n\n<ul>\n<li>It uses a cache to allow images to be drawn immediately if they were\npre-loaded and to store images that were not pre-loaded so that they can\nbe drawn immediately later.</li>\n<li>It can draw <a href=\"#!/api/Sprite\" rel=\"Sprite\" class=\"docClass\">Sprite</a>, <a href=\"#!/api/SpriteMap\" rel=\"SpriteMap\" class=\"docClass\">SpriteMap</a>, and <a href=\"#!/api/Layer\" rel=\"Layer\" class=\"docClass\">Layer</a> objects\nas well as the usual images, videos, and canvases. (Note that when Layers\nare drawn using this method, their \"relative\" property IS taken into\naccount.)</li>\n<li>It allows drawing an image by passing in the file path instead of an\nImage object.</li>\n</ul>\n\n\n<p>Additionally, this method has an optional <code>finished</code> parameter which is a\ncallback that runs when the image passed in the <code>src</code> parameter is finished\nloading (or immediately if the image is already loaded or is a video). The\ncallback's context (its <code>this</code> object) is the canvas graphics object. Having\nthis callback is useful because if you do not pre-load images, the image\nwill not be loaded (and therefore will not be drawn) for at least the first\ntime that drawing it is attempted. You can use the <code>finished</code> callback to\ndraw the image after it has been loaded if you want.</p>\n\n<p>Apart from the additions above, this method works the same way as the\n<a href=\"http://www.w3.org/TR/2dcontext/#drawing-images-to-the-canvas\">original in the spec</a>.</p>\n\n<p>As a summary, this method can be invoked three ways:</p>\n\n<ul>\n<li><code>drawImage(src, x, y[, finished])</code></li>\n<li><code>drawImage(src, x, y, w, h[, finished])</code></li>\n<li><code>drawImage(src, sx, sy, sw, sh, x, y, w, h[, finished])</code></li>\n</ul>\n\n\n<p>In each case, the <code>src</code> parameter accepts one of the following:</p>\n\n<ul>\n<li>The file path of an image to draw</li>\n<li>A <a href=\"#!/api/Sprite\" rel=\"Sprite\" class=\"docClass\">Sprite</a> or <a href=\"#!/api/SpriteMap\" rel=\"SpriteMap\" class=\"docClass\">SpriteMap</a> object</li>\n<li>A <a href=\"#!/api/Layer\" rel=\"Layer\" class=\"docClass\">Layer</a> object</li>\n<li>An HTMLCanvasElement</li>\n<li>An HTMLImageElement (same thing as an Image)</li>\n<li>An HTMLVideoElement</li>\n</ul>\n\n\n<p>The <code>x</code> and <code>y</code> parameters indicate the coordinates of the canvas graphics\ncontext at which to draw the top-left corner of the image. (Often this is\nthe number of pixels from the top-left corner of the canvas, though the\ncontext can be larger than the canvas if the viewport has scrolled, e.g.\nwith context.translate().)</p>\n\n<p>The <code>w</code> and <code>h</code> parameters indicate the width and height of the image,\nrespectively. Defaults to the image width and height, respectively (or, for\na Sprite or SpriteMap, defaults to the projectedW and projectedH,\nrespectively).</p>\n\n<p>The <code>sx</code>, <code>sy</code>, <code>sw</code>, and <code>sh</code> parameters define a rectangle within the\nimage that will be drawn onto the canvas. <code>sx</code> and <code>sy</code> are the x- and y-\ncoordinates (within the image) of the upper-left corner of the source\nrectangle, respectively, and <code>sw</code> and <code>sh</code> are the width and height of the\nsource rectangle, respectively. These parameters are ignored when drawing a\nSprite or SpriteMap. The W3C provides a helpful image to understand these\nparameters:</p>\n\n<p><img src=\"http://www.w3.org/TR/2dcontext/images/drawImage.png\" alt=\"drawImage\" /></p>\n\n<p>See also <a href=\"#!/api/CanvasRenderingContext2D-method-drawPattern\" rel=\"CanvasRenderingContext2D-method-drawPattern\" class=\"docClass\">drawPattern</a>() and\n<a href=\"#!/api/Caches-static-method-preloadImages\" rel=\"Caches-static-method-preloadImages\" class=\"docClass\">Caches.preloadImages</a>().</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>src</span> : Mixed<div class='sub-desc'>\n</div></li><li><span class='pre'>sx</span> : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a> (optional)<div class='sub-desc'>\n</div></li><li><span class='pre'>sy</span> : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a> (optional)<div class='sub-desc'>\n</div></li><li><span class='pre'>sw</span> : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a> (optional)<div class='sub-desc'>\n</div></li><li><span class='pre'>sh</span> : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a> (optional)<div class='sub-desc'>\n</div></li><li><span class='pre'>x</span> : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a><div class='sub-desc'>\n</div></li><li><span class='pre'>y</span> : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a><div class='sub-desc'>\n</div></li><li><span class='pre'>w</span> : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a> (optional)<div class='sub-desc'>\n</div></li><li><span class='pre'>h</span> : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a> (optional)<div class='sub-desc'>\n</div></li><li><span class='pre'>finished</span> : Function (optional)<div class='sub-desc'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>args</span> : <a href=\"#!/api/Array\" rel=\"Array\" class=\"docClass\">Array</a> (optional)<div class='sub-desc'><p>An array containing the arguments passed to the drawImage() invocation.</p>\n</div></li><li><span class='pre'>drawn</span> : Boolean (optional)<div class='sub-desc'><p>Whether the image was actually drawn (it will not be drawn if the image\n  wasn't loaded before drawImage() attempted to draw it).</p>\n</div></li></ul></div></li></ul></div></div></div><div id='method-drawPattern' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='CanvasRenderingContext2D'>CanvasRenderingContext2D</span><br/><a href='source/utilities.html#CanvasRenderingContext2D-method-drawPattern' target='_blank' class='view-source'>view source</a></div><a href='#!/api/CanvasRenderingContext2D-method-drawPattern' class='name expandable'>drawPattern</a>( <span class='pre'>src, [x], [y], [w], [h], [rpt], [finished]</span> ) : CanvasPattern</div><div class='description'><div class='short'>Draws a pattern onto the canvas. ...</div><div class='long'><p>Draws a pattern onto the canvas.</p>\n\n<p>This function is preferred over createPattern() with fillRect() for drawing\npatterns for several reasons:</p>\n\n<ul>\n<li>It uses a cache to allow images to be drawn immediately if they were\npre-loaded and to store images that were not pre-loaded so that they can\nbe drawn immediately later.</li>\n<li>It can draw <a href=\"#!/api/Layer\" rel=\"Layer\" class=\"docClass\">Layer</a> objects as well as the usual images, videos, and\ncanvases. (Note that when Layers are drawn using this method, their\n\"relative\" property IS taken into account.)</li>\n<li>It allows drawing an image by passing in the file path instead of an\nImage object.</li>\n</ul>\n\n\n<p>Unlike our modified <code>drawImage()</code>, this method cannot draw <a href=\"#!/api/Sprite\" rel=\"Sprite\" class=\"docClass\">Sprite</a>s\nor <a href=\"#!/api/SpriteMap\" rel=\"SpriteMap\" class=\"docClass\">SpriteMap</a>s. If you need to draw a Sprite or SpriteMap as a\npattern, draw the part you want onto a Layer or a new canvas and then pass\nthat as the src.</p>\n\n<p>See also <a href=\"#!/api/CanvasRenderingContext2D-method-drawImage\" rel=\"CanvasRenderingContext2D-method-drawImage\" class=\"docClass\">drawImage</a>() and\n<a href=\"#!/api/Caches-static-method-preloadImages\" rel=\"Caches-static-method-preloadImages\" class=\"docClass\">Caches.preloadImages</a>().</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>src</span> : Mixed<div class='sub-desc'><p>The image to draw as a pattern. Accepts one of the following types:</p>\n\n<ul>\n<li>The file path of an image to draw</li>\n<li>A <a href=\"#!/api/Layer\" rel=\"Layer\" class=\"docClass\">Layer</a> object</li>\n<li>An HTMLCanvasElement</li>\n<li>An HTMLImageElement (same thing as an Image)</li>\n<li>An HTMLVideoElement</li>\n<li>A CanvasPattern</li>\n</ul>\n\n</div></li><li><span class='pre'>x</span> : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a> (optional)<div class='sub-desc'><p>The x-coordinate at which to draw the top-left corner of the pattern.</p>\n<p>Defaults to: <code>0</code></p></div></li><li><span class='pre'>y</span> : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a> (optional)<div class='sub-desc'><p>The y-coordinate at which to draw the top-left corner of the pattern.</p>\n<p>Defaults to: <code>0</code></p></div></li><li><span class='pre'>w</span> : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a> (optional)<div class='sub-desc'><p>The width of the pattern. Defaults to the canvas width.</p>\n</div></li><li><span class='pre'>h</span> : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a> (optional)<div class='sub-desc'><p>The height of the pattern. Defaults to the canvas height.</p>\n</div></li><li><span class='pre'>rpt</span> : \"repeat\"/\"repeat-x\"/\"repeat-y\"/\"no-repeat\" (optional)<div class='sub-desc'><p>The repeat pattern type. This parameter can be omitted even if a finished\n  callback is passed, so the call <code>drawPattern(src, x, y, w, h, finished)</code>\n  is legal.</p>\n<p>Defaults to: <code>&quot;repeat&quot;</code></p></div></li><li><span class='pre'>finished</span> : Function (optional)<div class='sub-desc'><p>A callback that runs when the image passed in the \"src\" parameter is\n  finished loading (or immediately if the image is already loaded or is a\n  video). The callback's context (its <code>this</code> object) is the canvas graphics\n  object. Having this callback is useful because if you do not pre-load\n  images, the image will not be loaded (and therefore will not be drawn) for\n  at least the first time that drawing it is attempted. You can use the\n  finished callback to draw the image after it has been loaded if you want.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>args</span> : <a href=\"#!/api/Array\" rel=\"Array\" class=\"docClass\">Array</a> (optional)<div class='sub-desc'><p>An array containing the arguments passed to the drawPattern() invocation.</p>\n</div></li><li><span class='pre'>drawn</span> : Boolean (optional)<div class='sub-desc'><p>Whether the image was actually drawn (it will not be drawn if the image\n  wasn't loaded before drawPattern() attempted to draw it).</p>\n</div></li></ul></div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>CanvasPattern</span><div class='sub-desc'><p>The CanvasPattern object for the pattern that was drawn, if possible; or\n  undefined if a pattern could not be drawn (usually because the image\n  specified for drawing had not yet been loaded). If your source parameter\n  is anything other than an image or a file path, the image and pattern\n  drawn cannot be cached, so it can be helpful for performance to store this\n  return value and pass it in as the src parameter in the future if you need\n  to draw the same pattern repeatedly. (Another option is to cache the\n  drawn pattern in a <a href=\"#!/api/Layer\" rel=\"Layer\" class=\"docClass\">Layer</a>.)</p>\n</div></li></ul></div></div></div><div id='method-drawSmiley' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='CanvasRenderingContext2D'>CanvasRenderingContext2D</span><br/><a href='source/utilities.html#CanvasRenderingContext2D-method-drawSmiley' target='_blank' class='view-source'>view source</a></div><a href='#!/api/CanvasRenderingContext2D-method-drawSmiley' class='name expandable'>drawSmiley</a>( <span class='pre'>x, y, r, [fillStyle]</span> )</div><div class='description'><div class='short'>Draw a smiley face. ...</div><div class='long'><p>Draw a smiley face.</p>\n\n<p>The <a href=\"#!/api/Actor\" rel=\"Actor\" class=\"docClass\">Actor</a> class uses this as a placeholder image.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>x</span> : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a><div class='sub-desc'><p>The x-coordinate of the center of the smiley face.</p>\n</div></li><li><span class='pre'>y</span> : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a><div class='sub-desc'><p>The y-coordinate of the center of the smiley face.</p>\n</div></li><li><span class='pre'>r</span> : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a><div class='sub-desc'><p>The radius of the smiley face.</p>\n</div></li><li><span class='pre'>fillStyle</span> : Mixed (optional)<div class='sub-desc'><p>The color of the smiley face.</p>\n</div></li></ul></div></div></div></div></div></div></div>"});