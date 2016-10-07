( function ( $ ) {
	'use strict';

	var teInScript = {
		id: 'te-inscript',
		name: 'ఇన్\u200dస్క్రిప్ట్',
		description: 'Inscript keyboard for Telugu script',
		date: '2012-10-16',
		author: 'Veeven',
		license: 'GPLv3',
		version: '1.0',
		patterns: [
			[ 'D', 'అ' ],
			[ 'E', 'ఆ' ],
			[ 'F', 'ఇ' ],
			[ 'R', 'ఈ' ],
			[ 'G', 'ఉ' ],
			[ 'T', 'ఊ' ],
			[ '\\+', 'ఋ' ],
			[ 'Z', 'ఎ' ],
			[ 'S', 'ఏ' ],
			[ 'W', 'ఐ' ],
			[ '~', 'ఒ' ],
			[ 'A', 'ఓ' ],
			[ 'Q', 'ఔ' ],

			[ 'k', 'క' ],
			[ 'K', 'ఖ' ],
			[ 'i', 'గ' ],
			[ 'I', 'ఘ' ],
			[ 'U', 'ఙ' ],

			[ '\\;', 'చ' ],
			[ '\\:', 'ఛ' ],
			[ 'p', 'జ' ],
			[ 'P', 'ఝ' ],
			[ '\\}', 'ఞ' ],

			[ '\'', 'ట' ],
			[ '"', 'ఠ' ],
			[ '\\[', '','డ' ],
			[ '\\{', '','ఢ' ],
			[ 'C', 'ణ' ],

			[ 'l', 'త' ],
			[ 'L', 'థ' ],
			[ 'o', 'ద' ],
			[ 'O', 'ధ' ],
			[ 'v', 'న' ],

			[ 'h', 'ప' ],
			[ 'H', 'ఫ' ],
			[ 'y', 'బ' ],
			[ 'Y', 'భ' ],
			[ 'c', 'మ' ],

			[ '/', 'య' ],
			[ 'j', 'ర' ],
			[ 'J', 'ఱ' ],
			[ 'n', 'ల' ],
			[ 'N', 'ళ' ],
			[ 'b', 'వ' ],

			[ 'M', 'శ' ],
			[ '\\<', '','ష' ],
			[ 'm', 'స' ],
			[ 'u', 'హ' ],

			[ 'e', 'ా' ],
			[ 'f', 'ి' ],
			[ 'r', 'ీ' ],
			[ 'g', 'ు' ],
			[ 't', 'ూ' ],
			[ '\\=', 'ృ' ],
			[ 'z', 'ె' ],
			[ 's', 'ే' ],
			[ 'w', 'ై' ],
			[ '`', 'ొ' ],
			[ 'a', 'ో' ],
			[ 'q', 'ౌ' ],
			[ 'x', 'ం' ],
			[ '\\-', 'ః' ],
			[ 'X', 'ఁ' ],
			[ 'd', '్' ],

			[ '0', '','౦' ],
			[ '1', '','౧' ],
			[ '2', '౨' ],
			[ '3', '౩' ],
			[ '4', '౪' ],
			[ '5', '౫' ],
			[ '6', '౬' ],
			[ '7', '౭' ],
			[ '8', '౮' ],
			[ '9', '౯' ],

			[ '\\@', '\u200C' ], // In cases where extended rules do not work
			[ '\\#', '్ర' ],
			[ '\\$', 'ర్' ],
			[ '\\%', 'జ్ఞ' ],
			[ '\\^', 'త్ర' ],
			[ '\\&', 'క్ష' ],
			[ '\\*', 'శ్ర' ],
			[ '\\>', '।' ] ],

		patterns_x: [
			[ 'X', 'ॐ' ],
			[ '\\;', 'ౘ' ],
			[ 'p', 'ౙ' ],
			[ 'f', '\u0C62' ], // vowel sign of alu (volic l)
			[ 'r', '\u0C63' ], // vowel sign of aluu (volic ll)
			[ 'F', 'ఌ' ],
			[ 'R', 'ౡ' ],
			[ '\\.', '॥' ],
			[ '\\>', 'ఽ' ],
			[ '2', '\u200C' ], // ZWNJ
			[ '4', '₹' ],
			[ '\\=', 'ౄ' ],
			[ '\\+', 'ౠ' ] ]
	};
	$.ime.register( teInScript );
}( jQuery ) );
