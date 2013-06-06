/* ------------------------
About the Template:
 jQuery Plugin Template v1.0
 https://github.com/RaphaelDDL/jQuery-Plugin-Template
 Copyright (c) 2013 Raphael "DDL" Oliveira
 
 Change the [[TEXTS]] to your liking.
 Also read the comments to know more.
 
 The name, url and copyright have a ! on it's block
 to be kept when minified
------------------------ */


/*!
 * jQuery [[YOUR PLUGIN NAME]] v[[VERSION]]
 * [[URL TO PLUGIN WITH HTTP(S)]]
 * Copyright (c) [[YEAR MADE]] [[AUTHOR NAME]]
 */
 /*
 * ===============
 * Basic Usage:
 * 
 * [[EXAMPLE FUNCTION, E.G.:]]
 * $(element).pluginName({
 *   	some_option1: 'some value',
 *	some_option2: 'some other value'
 * });
 *
 * ===============
 * LICENSE:
 * 
 * Permission is hereby granted, free of charge, to any person obtaining
 * a copy of this software and associated documentation files (the
 * "Software"), to deal in the Software without restriction, including
 * without limitation the rights to use, copy, modify, merge, publish,
 * distribute, sublicense, and/or sell copies of the Software, and to
 * permit persons to whom the Software is furnished to do so, subject to
 * the following conditions:
 * 
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
 * OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
 * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
 * WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
 * OTHER DEALINGS IN THE SOFTWARE.
 * ===============
 */
 ;(function($, window, document, undefined) {
	$.fn.extend({
		/* ------------------------
		>	CHANGE `pluginName` TO THE
			NAME OF YOUR PLUGIN. USAGE WILL BE

			$(element).pluginName({options});
		------------------------ */
		pluginName: function(options) {

			/* ------------------------
			>	DEFINE THE DEFAULT OPTIONS
				FOR YOUR PLUGIN (WHEN USER
				DO NOT PASS ANY/SOME WHEN
				CALLING YOUR PLUGIN)
			------------------------ */
			var defaults = {
				some_option1: 'some value',
				some_option2: 'some other value'
			}
			var options = $.extend(defaults, options);


			/* FOR EACH `$(element)` FOUND, APPLY THE PLUGIN  */
			return this.each(function() {
				var o = options;
				var that = $(this);
				/* ------------------------
				>	RETRIEVING OPTION VALUES:
					`o.some_option1`,
					`o.some_option2`, ETC
					USER DECLARED OPTIONS OVERWRITES 
					DEFAULTS ONES

				>	THAT:
					`that` IS THE `$(element)`
					WHICH THE PLUGIN WAS CALLED ON
				---------------------------
				>	YOUR CODE BELOW
				------------------------ */
				

				//your magic


				/* ------------------------
				>	END OF YOUR CODE
				------------------------ */
			}); /* END OF RETURN EACH */
		} /* END OF FN.EXTEND */
	});
})(jQuery, window, document);
