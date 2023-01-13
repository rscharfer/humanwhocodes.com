(function(a,b){if(a===b||a.registerLanguage===b){throw"Include sunlight.js before including language files";}a.registerLanguage("lua",{keywords:["and","break","do","elseif","else","end","false","for","function","if","in","local","nil","not","or","repeat","return","then","true","until","while"],scopes:{string:[['"','"',['\\"',"\\\\"]],["'","'",["\\'","\\\\"]]],comment:[["--[[","]]"],["--","\n",null,true]]},customTokens:{globalVariable:{values:["_G","_VERSION"],boundary:"\\b"}},customParseRules:[function(){var c=a.util.createHashMap(["assert","collectgarbage","dofile","error","getfenv","getmetatable","ipairs","load","loadfile","loadstring","next","pairs","pcall","print","rawequal","rawget","rawset","select","setfenv","setmetatable","tonumber","tostring","type","unpack","xpcall","module","require"],"\\b");return function(d){var e=d.token(d.count()-1);if(e&&e.name==="operator"&&e.value==="."){return null;}return a.util.matchWord(d,c,"function");};}(),function(){var c=a.util.createHashMap(["close","flush","lines","read","seek","setvbuf","write"],"\\b");return function(d){var e=d.token(d.count()-1);if(!e||e.name!=="operator"||e.value!==":"){return null;}return a.util.matchWord(d,c,"function");};}(),function(e){var h=0,d,g=0,i,c=e.reader.getLine(),f=e.reader.getColumn(),j;if(e.reader.current()!=="["){return null;}while((d=e.reader.peek(++g))&&d.length===g){if(!/=$/.test(d)){if(!/\[$/.test(d)){return null;}h=d.length-1;break;}}i="["+d;e.reader.read(d.length);j="]"+new Array(h+1).join("=")+"]";while(d=e.reader.peek()){if(d==="]"&&e.reader.peek(j.length)===j){i+=e.reader.read(j.length);break;}i+=e.reader.read();}return e.createToken("verbatimString",i,c,f);}],identFirstLetter:/[A-Za-z_]/,identAfterFirstLetter:/\w/,namedIdentRules:{custom:[function(){var c=["coroutine","package","string","table","math","io","os","debug"];return function(e){var d;if(!a.util.contains(c,e.tokens[e.index].value)){return false;}d=a.util.getNextNonWsToken(e.tokens,e.index);return d&&(d.name!=="operator"||d.value!==":");};}()],follows:[[{token:"keyword",values:["function"]},{token:"default"}]]},operators:["+","-","*","/","%","^","#","==","~=","=","<=","<",">=",">",":","...","..","."]});}(this["Sunlight"]));