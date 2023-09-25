import fetch from "node-fetch";
    const API = "https://raw.githubusercontent.com/raphacall/saman_fifa_api/main/landing-page-async-js-course-platzi.json";
    function binary_encode( s ){
        s = unescape( encodeURIComponent( s ) );
        var chr, i = 0, l = s.length, out = '';
        for( ; i < l; i ++ ){
            chr = s.charCodeAt( i ).toString( 2 );
            while( chr.length % 8 != 0 ){ chr = '0' + chr; }
            out += chr;
        }
        return out;
    }
    function binary_decode( s ){
        var i = 0, l = s.length, chr, out = '';
        for( ; i < l; i += 8 ){
            chr = parseInt( s.substr( i, 8 ), 2 ).toString( 16 );
            out += '%' + ( ( chr.length % 2 == 0 ) ? chr : '0' + chr );
        }
        return decodeURIComponent( out );
    }

    const aja = async (url) => {
        try {
            const response = await fetch(url);
            const result = await response.json();
            return result;
    
        } catch (error) {
	        console.error(error);
        }
    }

const aja2 = async (url,callback) => {
    const json1 = await callback(url);

    for (let i = 1; i < Object.keys(json1.words[0]).length; i++) {
        console.log(json1.words[0][i]);
        console.log(binary_encode(json1.words[0][i]));
        console.log(binary_decode(binary_encode(json1.words[0][i])));
    }
}

aja2(API,aja);