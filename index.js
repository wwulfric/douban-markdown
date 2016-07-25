// ==UserScript==
// @name         douban marked
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       haidao
// @include      https://book.douban.com/review/*
// @grant        none
// @require      https://cdnjs.cloudflare.com/ajax/libs/marked/0.3.5/marked.js
// ==/UserScript==

(function() {
  var content = $('#link-report span').html();
  content = content.replace(/<br>/g,'\n').replace(/&gt;/g,'>');
  var marked_content = marked(content);
  $('#link-report span').html(marked_content);

  var head = document.getElementsByTagName("head")[0], script;
  script = document.createElement("script");
  script.type = "text/x-mathjax-config";
  script[(window.opera ? "innerHTML" : "text")] =
    "MathJax.Hub.Config({\n" +
    "  tex2jax: { inlineMath: [['$','$'], ['\\\\(','\\\\)']] }\n" +
    "});";
  head.appendChild(script);
  script = document.createElement("script");
  script.type = "text/javascript";
  script.src  = "https://cdn.mathjax.org/mathjax/latest/MathJax.js?config=TeX-AMS-MML_HTMLorMML";
  head.appendChild(script);
})();

