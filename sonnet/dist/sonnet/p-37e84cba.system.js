System.register([],(function(n){"use strict";return{execute:function(){var r=function(){function n(){}n.isEnglish=function(){return document.documentElement.lang==this.LANGUAGE_CODES.en};n.isFrench=function(){return document.documentElement.lang==this.LANGUAGE_CODES.fr};n.current=function(){return this.isFrench()?this.LANGUAGE_CODES.fr:this.LANGUAGE_CODES.en};n.getVariablesFromString=function(n,r){try{var e=JSON.parse(n);var t=new Map;r.forEach((function(n){if(e.hasOwnProperty(n)){t.set(n,e[n])}else{console.error("Required language variable '"+n+"' not passed through 'language-string' property.")}}));return t}catch(i){throw new Error("Invalid JSON string in language-string attribute.")}};return n}();n("L",r);r.LANGUAGE_CODES={en:"en-us",fr:"fr-ca"};r.LANGUAGE_ID={en:"1",fr:"1584454943708"}}}}));