System.register(["./p-286eaa2f.system.js","./p-1bc037df.system.js"],(function(i){"use strict";var t,e,l;return{setters:[function(i){t=i.r;e=i.h},function(i){l=i.S}],execute:function(){var n="snt-article-link{display:block}snt-article-link a{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;color:#323232;padding:10px;height:66px;-webkit-box-sizing:border-box;box-sizing:border-box;background-color:#ffffff;overflow:hidden}@media (min-width: 768px){snt-article-link a{padding:15px;height:76px}}@media (min-width: 1024px){snt-article-link a{height:82px}}snt-article-link a:hover{color:#323232;text-decoration:none;outline-width:3px;outline-style:solid;outline-color:#147582;outline-offset:-3px}snt-article-link .article-link{display:block;overflow:hidden;max-height:46px;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical}@media (min-width: 768px){snt-article-link .article-link{max-height:46px}}@media (min-width: 1024px){snt-article-link .article-link{max-height:52px}}";var a=i("snt_article_link",function(){function i(i){t(this,i);this.hiddenTitle=l.empty()}i.prototype.render=function(){return e("a",{href:this.href,"aria-label":this.ariaLabel,"hidden-title":this.hiddenTitle},e("span",{class:"article-link"},this.copy))};return i}());a.TAG_NAME="snt-article-link";a.style=n;var r='snt-article-list .article-list{background-color:#f5f5f5;padding:15px 30px;-webkit-box-sizing:border-box;box-sizing:border-box}@media (min-width: 768px){snt-article-list .article-list{padding:15px 15px}}snt-article-list .article-list a{text-decoration:none}snt-article-list .article-list a:hover{border:2px solid #147582;-webkit-box-sizing:border-box;box-sizing:border-box;padding:15px 13px}@media (max-width: 768px){snt-article-list .article-list a:hover{padding:8px}}snt-article-list .article-list a:focus{outline:2px dotted #323232;outline-offset:3px}snt-article-list .article-list a:hover:focus{outline-offset:3px;border:3px solid #147582;padding:15px 12px}@media (max-width: 768px){snt-article-list .article-list a:hover:focus{padding:7px}}snt-article-list .article-list snt-article-link:not(:last-child){margin-bottom:15px}snt-article-list .article-title{font-family:"Averta-ExtraBold", sans-serif;font-weight:500;margin-bottom:15px}';var s=i("snt_article_list",function(){function i(i){t(this,i);this.articlesJson=l.empty();this.articles=[];this.heading=l.empty()}i.prototype.componentWillLoad=function(){if(l.hasValue(this.articlesJson)){this.articles=JSON.parse(this.articlesJson).articles}};i.prototype.render=function(){return e("div",{class:"article-list"},l.hasValue(this.heading)?e("div",{class:"article-title"},this.heading):null,this.articles.map((function(i){return e("snt-article-link",{copy:i.copy,href:i.href,"aria-label":i.ariaLabel,"hidden-title":i.hiddenTitle})})))};return i}());s.TAG_NAME="snt-article-list";s.style=r}}}));