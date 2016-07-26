function pug_attr(t,e,n,r){if(e===!1||null==e||!e&&("class"===t||"style"===t))return"";if(e===!0)return" "+(r?t:t+'="'+t+'"');if("function"==typeof e.toISOString)e=e.toISOString();else if("string"!=typeof e&&(e=JSON.stringify(e),!n&&-1!==e.indexOf('"')))return" "+t+"='"+e.replace(/'/g,"&#39;")+"'";return n&&(e=pug_escape(e))," "+t+'="'+e+'"'}
function pug_escape(e){var a=""+e,t=pug_match_html.exec(a);if(!t)return e;var r,c,n,s="";for(r=t.index,c=0;r<a.length;r++){switch(a.charCodeAt(r)){case 34:n="&quot;";break;case 38:n="&amp;";break;case 60:n="&lt;";break;case 62:n="&gt;";break;default:continue}c!==r&&(s+=a.substring(c,r)),c=r+1,s+=n}return c!==r?s+a.substring(c,r):s}
var pug_match_html=/["&<>]/;
function pug_rethrow(n,e,r,t){if(!(n instanceof Error))throw n;if(!("undefined"==typeof window&&e||t))throw n.message+=" on line "+r,n;try{t=t||require("fs").readFileSync(e,"utf8")}catch(i){pug_rethrow(n,null,r)}var a=3,o=t.split("\n"),h=Math.max(r-a,0),s=Math.min(o.length,r+a),a=o.slice(h,s).map(function(n,e){var t=e+h+1;return(t==r?"  > ":"    ")+t+"| "+n}).join("\n");throw n.path=e,n.message=(e||"Pug")+":"+r+"\n"+a+"\n\n"+n.message,n}function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;var pug_debug_filename, pug_debug_line;try {;var locals_for_with = (locals || {});(function (channels) {;pug_debug_line = 1;pug_debug_filename = "\u002FUsers\u002Fvchagaev\u002FWebstormProjects\u002Fshri-task1-tv-gh\u002Ftv-template.pug";
pug_mixins["tv-item"] = pug_interp = function(channelInfo){
var block = (this && this.block), attributes = (this && this.attributes) || {};
;pug_debug_line = 2;pug_debug_filename = "\u002FUsers\u002Fvchagaev\u002FWebstormProjects\u002Fshri-task1-tv-gh\u002Ftv-template.pug";
pug_html = pug_html + "\u003Cdiv class=\"tv-layout__item\"\u003E";
;pug_debug_line = 3;pug_debug_filename = "\u002FUsers\u002Fvchagaev\u002FWebstormProjects\u002Fshri-task1-tv-gh\u002Ftv-template.pug";
pug_html = pug_html + "\u003Cdiv class=\"tv-channel\"\u003E";
;pug_debug_line = 4;pug_debug_filename = "\u002FUsers\u002Fvchagaev\u002FWebstormProjects\u002Fshri-task1-tv-gh\u002Ftv-template.pug";
pug_html = pug_html + "\u003Cdiv class=\"tv-channel__header clearfix\"\u003E";
;pug_debug_line = 5;pug_debug_filename = "\u002FUsers\u002Fvchagaev\u002FWebstormProjects\u002Fshri-task1-tv-gh\u002Ftv-template.pug";
pug_html = pug_html + "\u003Cdiv class=\"tv-channel-icon\"\u003E";
;pug_debug_line = 6;pug_debug_filename = "\u002FUsers\u002Fvchagaev\u002FWebstormProjects\u002Fshri-task1-tv-gh\u002Ftv-template.pug";
pug_html = pug_html + "\u003Cimg" + (" class=\"tv-channel-icon__img\""+pug_attr("src", 'images/' + channelInfo.imgName, true, false)+pug_attr("alt", channelInfo.imgAlt, true, false)) + "\u002F\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 7;pug_debug_filename = "\u002FUsers\u002Fvchagaev\u002FWebstormProjects\u002Fshri-task1-tv-gh\u002Ftv-template.pug";
pug_html = pug_html + "\u003Cdiv class=\"tv-channel-title\"\u003E";
;pug_debug_line = 8;pug_debug_filename = "\u002FUsers\u002Fvchagaev\u002FWebstormProjects\u002Fshri-task1-tv-gh\u002Ftv-template.pug";
pug_html = pug_html + "\u003Cspan class=\"tv-channel-title__name\"\u003E";
;pug_debug_line = 8;pug_debug_filename = "\u002FUsers\u002Fvchagaev\u002FWebstormProjects\u002Fshri-task1-tv-gh\u002Ftv-template.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = channelInfo.title) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 9;pug_debug_filename = "\u002FUsers\u002Fvchagaev\u002FWebstormProjects\u002Fshri-task1-tv-gh\u002Ftv-template.pug";
pug_html = pug_html + "\u003Cdiv class=\"tv-channel__shows\"\u003E";
;pug_debug_line = 10;pug_debug_filename = "\u002FUsers\u002Fvchagaev\u002FWebstormProjects\u002Fshri-task1-tv-gh\u002Ftv-template.pug";
// iterate channelInfo.shows
var pug_obj0 = channelInfo.shows;
if ('number' == typeof pug_obj0.length) {

  for (var pug_index0 = 0, pug_length0 = pug_obj0.length; pug_index0 < pug_length0; pug_index0++) {
    var show = pug_obj0[pug_index0];

;pug_debug_line = 11;pug_debug_filename = "\u002FUsers\u002Fvchagaev\u002FWebstormProjects\u002Fshri-task1-tv-gh\u002Ftv-template.pug";
pug_html = pug_html + "\u003Cdiv class=\"tv-channel-show\"\u003E";
;pug_debug_line = 12;pug_debug_filename = "\u002FUsers\u002Fvchagaev\u002FWebstormProjects\u002Fshri-task1-tv-gh\u002Ftv-template.pug";
pug_html = pug_html + "\u003Cdiv class=\"tv-channel-show__wrapper\"\u003E";
;pug_debug_line = 13;pug_debug_filename = "\u002FUsers\u002Fvchagaev\u002FWebstormProjects\u002Fshri-task1-tv-gh\u002Ftv-template.pug";
pug_html = pug_html + "\u003Ca class=\"link tv-link\" href=\"description.html\"\u003E";
;pug_debug_line = 14;pug_debug_filename = "\u002FUsers\u002Fvchagaev\u002FWebstormProjects\u002Fshri-task1-tv-gh\u002Ftv-template.pug";
pug_html = pug_html + "\u003Cdiv class=\"tv-channel-show__time\"\u003E";
;pug_debug_line = 15;pug_debug_filename = "\u002FUsers\u002Fvchagaev\u002FWebstormProjects\u002Fshri-task1-tv-gh\u002Ftv-template.pug";
pug_html = pug_html + "\u003Cspan class=\"time\"\u003E";
;pug_debug_line = 15;pug_debug_filename = "\u002FUsers\u002Fvchagaev\u002FWebstormProjects\u002Fshri-task1-tv-gh\u002Ftv-template.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = show.time) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 16;pug_debug_filename = "\u002FUsers\u002Fvchagaev\u002FWebstormProjects\u002Fshri-task1-tv-gh\u002Ftv-template.pug";
pug_html = pug_html + "\u003Cdiv class=\"tv-channel-show__title\"\u003E";
;pug_debug_line = 17;pug_debug_filename = "\u002FUsers\u002Fvchagaev\u002FWebstormProjects\u002Fshri-task1-tv-gh\u002Ftv-template.pug";
pug_html = pug_html + "\u003Cspan class=\"show-title\"\u003E";
;pug_debug_line = 17;pug_debug_filename = "\u002FUsers\u002Fvchagaev\u002FWebstormProjects\u002Fshri-task1-tv-gh\u002Ftv-template.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = show.title) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E\u003C\u002Fa\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
  }

} else {
  var pug_length0 = 0;
  for (var pug_index0 in pug_obj0) {
    pug_length0++;
    var show = pug_obj0[pug_index0];

;pug_debug_line = 11;pug_debug_filename = "\u002FUsers\u002Fvchagaev\u002FWebstormProjects\u002Fshri-task1-tv-gh\u002Ftv-template.pug";
pug_html = pug_html + "\u003Cdiv class=\"tv-channel-show\"\u003E";
;pug_debug_line = 12;pug_debug_filename = "\u002FUsers\u002Fvchagaev\u002FWebstormProjects\u002Fshri-task1-tv-gh\u002Ftv-template.pug";
pug_html = pug_html + "\u003Cdiv class=\"tv-channel-show__wrapper\"\u003E";
;pug_debug_line = 13;pug_debug_filename = "\u002FUsers\u002Fvchagaev\u002FWebstormProjects\u002Fshri-task1-tv-gh\u002Ftv-template.pug";
pug_html = pug_html + "\u003Ca class=\"link tv-link\" href=\"description.html\"\u003E";
;pug_debug_line = 14;pug_debug_filename = "\u002FUsers\u002Fvchagaev\u002FWebstormProjects\u002Fshri-task1-tv-gh\u002Ftv-template.pug";
pug_html = pug_html + "\u003Cdiv class=\"tv-channel-show__time\"\u003E";
;pug_debug_line = 15;pug_debug_filename = "\u002FUsers\u002Fvchagaev\u002FWebstormProjects\u002Fshri-task1-tv-gh\u002Ftv-template.pug";
pug_html = pug_html + "\u003Cspan class=\"time\"\u003E";
;pug_debug_line = 15;pug_debug_filename = "\u002FUsers\u002Fvchagaev\u002FWebstormProjects\u002Fshri-task1-tv-gh\u002Ftv-template.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = show.time) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 16;pug_debug_filename = "\u002FUsers\u002Fvchagaev\u002FWebstormProjects\u002Fshri-task1-tv-gh\u002Ftv-template.pug";
pug_html = pug_html + "\u003Cdiv class=\"tv-channel-show__title\"\u003E";
;pug_debug_line = 17;pug_debug_filename = "\u002FUsers\u002Fvchagaev\u002FWebstormProjects\u002Fshri-task1-tv-gh\u002Ftv-template.pug";
pug_html = pug_html + "\u003Cspan class=\"show-title\"\u003E";
;pug_debug_line = 17;pug_debug_filename = "\u002FUsers\u002Fvchagaev\u002FWebstormProjects\u002Fshri-task1-tv-gh\u002Ftv-template.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = show.title) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E\u003C\u002Fa\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
  }

}

pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
};
;pug_debug_line = 19;pug_debug_filename = "\u002FUsers\u002Fvchagaev\u002FWebstormProjects\u002Fshri-task1-tv-gh\u002Ftv-template.pug";
// iterate channels
var pug_obj1 = channels;
if ('number' == typeof pug_obj1.length) {

  for (var pug_index1 = 0, pug_length1 = pug_obj1.length; pug_index1 < pug_length1; pug_index1++) {
    var channel = pug_obj1[pug_index1];

;pug_debug_line = 20;pug_debug_filename = "\u002FUsers\u002Fvchagaev\u002FWebstormProjects\u002Fshri-task1-tv-gh\u002Ftv-template.pug";
pug_mixins["tv-item"](channel);
  }

} else {
  var pug_length1 = 0;
  for (var pug_index1 in pug_obj1) {
    pug_length1++;
    var channel = pug_obj1[pug_index1];

;pug_debug_line = 20;pug_debug_filename = "\u002FUsers\u002Fvchagaev\u002FWebstormProjects\u002Fshri-task1-tv-gh\u002Ftv-template.pug";
pug_mixins["tv-item"](channel);
  }

}
}.call(this,"channels" in locals_for_with?locals_for_with.channels:typeof channels!=="undefined"?channels:undefined));} catch (err) {pug_rethrow(err, pug_debug_filename, pug_debug_line);};return pug_html;}