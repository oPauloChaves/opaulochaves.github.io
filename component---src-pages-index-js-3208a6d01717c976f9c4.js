(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"3dzV":function(e,a,t){e.exports={hero:"hero-module--hero--S__gH",heroImage:"hero-module--heroImage--DciWV",heroDetails:"hero-module--heroDetails--3uv8x",heroHeadline:"hero-module--heroHeadline--jhgHQ",heroTitle:"hero-module--heroTitle--2LulU"}},"D1b+":function(e,a,t){e.exports={previewTitle:"article-preview-module--previewTitle--16pYm",tag:"article-preview-module--tag--27JAs"}},RXBc:function(e,a,t){"use strict";t.r(a),t.d(a,"pageQuery",(function(){return E}));t("a1Th"),t("Btvt"),t("I5cv");var r=t("q1tI"),l=t.n(r),n=t("mwIZ"),o=t.n(n),i=t("TJpk"),c=t.n(i),s=(t("f3/d"),t("9eSz")),m=t.n(s),u=t("3dzV"),p=t.n(u),d=function(e){var a=e.data;return l.a.createElement("div",{className:p.a.hero},l.a.createElement(m.a,{className:p.a.heroImage,alt:a.name,fluid:a.heroImage.fluid}),l.a.createElement("div",{className:p.a.heroDetails},l.a.createElement("h3",{className:p.a.heroHeadline},a.name),l.a.createElement("p",{className:p.a.heroTitle},a.title),l.a.createElement("p",null,a.shortBio.shortBio)))},h=t("Bl7J"),f=t("aWpR");var v=function(e){var a,t;t=e,(a=n).prototype=Object.create(t.prototype),a.prototype.constructor=a,a.__proto__=t;var r;r=n;function n(){return e.apply(this,arguments)||this}return n.prototype.render=function(){var e=o()(this,"props.data.site.siteMetadata.title"),a=o()(this,"props.data.allContentfulBlogPost.edges"),t=o()(this,"props.data.allContentfulPerson.edges")[0];return l.a.createElement(h.a,{location:this.props.location},l.a.createElement("div",{style:{background:"#fff"}},l.a.createElement(c.a,{title:e}),l.a.createElement(d,{data:t.node}),l.a.createElement("div",{className:"wrapper"},l.a.createElement("h2",{className:"section-headline"},"Recent articles"),l.a.createElement("ul",{className:"article-list"},a.map((function(e){var a=e.node;return l.a.createElement("li",{key:a.slug},l.a.createElement(f.a,{article:a}))}))))))},n}(l.a.Component),E=(a.default=v,"3250844143")},aWpR:function(e,a,t){"use strict";var r=t("q1tI"),l=t.n(r),n=t("Wbzz"),o=t("9eSz"),i=t.n(o),c=t("D1b+"),s=t.n(c);a.a=function(e){var a=e.article;return l.a.createElement("div",{className:s.a.preview},l.a.createElement(i.a,{alt:"",fluid:a.heroImage.fluid}),l.a.createElement("h3",{className:s.a.previewTitle},l.a.createElement(n.a,{to:"/blog/"+a.slug},a.title)),l.a.createElement("small",null,a.publishDate),l.a.createElement("p",{dangerouslySetInnerHTML:{__html:a.description.childMarkdownRemark.html}}),a.tags&&a.tags.map((function(e){return l.a.createElement("p",{className:s.a.tag,key:e},e)})))}}}]);
//# sourceMappingURL=component---src-pages-index-js-3208a6d01717c976f9c4.js.map