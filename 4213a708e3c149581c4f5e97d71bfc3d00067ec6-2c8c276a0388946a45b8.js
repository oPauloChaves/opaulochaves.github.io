(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"0mN4":function(e,t,n){"use strict";n("OGtf")("fixed",(function(e){return function(){return e(this,"tt","","")}}))},"1w3K":function(e,t,n){"use strict";var r=s(n("Si88")),a=s(n("PAGr")),i=s(n("UnXY")),o=s(n("S3Uj"));function s(e){return e&&e.__esModule?e:{default:e}}e.exports={Transition:o.default,TransitionGroup:i.default,ReplaceTransition:a.default,CSSTransition:r.default}},"33Jr":function(e,t,n){"use strict";n.d(t,"e",(function(){return o})),n.d(t,"f",(function(){return s})),n.d(t,"g",(function(){return l})),n.d(t,"h",(function(){return u})),n.d(t,"c",(function(){return p})),n.d(t,"a",(function(){return f})),n.d(t,"b",(function(){return d})),n.d(t,"d",(function(){return h}));n("pIFo"),n("a1Th"),n("h7Nl"),n("LK8F"),n("V+eJ"),n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),n("8+KV"),n("KKXr"),n("bWfx");var r,a=n("17x9"),i=n.n(a);function o(e,t){return void 0===e&&(e=""),void 0===t&&(t=r),t?e.split(" ").map((function(e){return t[e]||e})).join(" "):e}function s(e,t){var n={};return Object.keys(e).forEach((function(r){-1===t.indexOf(r)&&(n[r]=e[r])})),n}function l(e,t){for(var n,r=Array.isArray(t)?t:[t],a=r.length,i={};a>0;)i[n=r[a-=1]]=e[n];return i}var c="object"==typeof window&&window.Element||function(){};i.a.oneOfType([i.a.string,i.a.func,function(e,t,n){if(!(e[t]instanceof c))return new Error("Invalid prop `"+t+"` supplied to `"+n+"`. Expected prop to be an instance of Element. Validation failed.")},i.a.shape({current:i.a.any})]);var u=i.a.oneOfType([i.a.func,i.a.string,i.a.shape({$$typeof:i.a.symbol,render:i.a.func}),i.a.arrayOf(i.a.oneOfType([i.a.func,i.a.string,i.a.shape({$$typeof:i.a.symbol,render:i.a.func})]))]),p={Fade:150,Collapse:350,Modal:300,Carousel:600},f=["in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","onEnter","onEntering","onEntered","onExit","onExiting","onExited"],d={ENTERING:"entering",ENTERED:"entered",EXITING:"exiting",EXITED:"exited"};"undefined"==typeof window||!window.document||window.document.createElement;function h(e){var t=typeof e;return null!=e&&("object"===t||"function"===t)}},"8PcY":function(e,t,n){"use strict";n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),n("2Spj"),n("bWfx"),n("8+KV"),n("hHhE"),t.__esModule=!0,t.getChildMapping=a,t.mergeChildMappings=i,t.getInitialChildMapping=function(e,t){return a(e.children,(function(n){return(0,r.cloneElement)(n,{onExited:t.bind(null,n),in:!0,appear:o(n,"appear",e),enter:o(n,"enter",e),exit:o(n,"exit",e)})}))},t.getNextChildMapping=function(e,t,n){var s=a(e.children),l=i(t,s);return Object.keys(l).forEach((function(a){var i=l[a];if((0,r.isValidElement)(i)){var c=a in t,u=a in s,p=t[a],f=(0,r.isValidElement)(p)&&!p.props.in;!u||c&&!f?u||!c||f?u&&c&&(0,r.isValidElement)(p)&&(l[a]=(0,r.cloneElement)(i,{onExited:n.bind(null,i),in:p.props.in,exit:o(i,"exit",e),enter:o(i,"enter",e)})):l[a]=(0,r.cloneElement)(i,{in:!1}):l[a]=(0,r.cloneElement)(i,{onExited:n.bind(null,i),in:!0,exit:o(i,"exit",e),enter:o(i,"enter",e)})}})),l};var r=n("q1tI");function a(e,t){var n=Object.create(null);return e&&r.Children.map(e,(function(e){return e})).forEach((function(e){n[e.key]=function(e){return t&&(0,r.isValidElement)(e)?t(e):e}(e)})),n}function i(e,t){function n(n){return n in t?t[n]:e[n]}e=e||{},t=t||{};var r,a=Object.create(null),i=[];for(var o in e)o in t?i.length&&(a[o]=i,i=[]):i.push(o);var s={};for(var l in t){if(a[l])for(r=0;r<a[l].length;r++){var c=a[l][r];s[a[l][r]]=n(c)}s[l]=n(l)}for(r=0;r<i.length;r++)s[i[r]]=n(i[r]);return s}function o(e,t,n){return null!=n[t]?n[t]:e.props[t]}},Aw06:function(e,t,n){"use strict";n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),n("91GP");var r=n("q1tI"),a=n.n(r),i=n("Wbzz");t.a=function(e){var t=e.children,n=e.to,r=e.activeClassName,o=e.partiallyActive,s=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,["children","to","activeClassName","partiallyActive"]);return/^\/(?!\/)/.test(n)?a.a.createElement(i.Link,Object.assign({to:n,activeClassName:r,partiallyActive:o},s),t):a.a.createElement("a",Object.assign({href:n,target:"_blank",rel:"noopener noreferrer"},s),t)}},"HAE/":function(e,t,n){var r=n("XKFU");r(r.S+r.F*!n("nh4g"),"Object",{defineProperty:n("hswa").f})},"I/Ru":function(e,t,n){"use strict";n.d(t,"a",(function(){return H}));var r=n("a2bI"),a=n("q1tI"),i=n.n(a),o=(n("qHiR"),n("sQfG"),n("0mN4"),n("wx14")),s=n("zLVn"),l=n("17x9"),c=n.n(l),u=n("TSYQ"),p=n.n(u),f=n("33Jr"),d={light:c.a.bool,dark:c.a.bool,full:c.a.bool,fixed:c.a.string,sticky:c.a.string,color:c.a.string,role:c.a.string,tag:f.h,className:c.a.string,cssModule:c.a.object,expand:c.a.oneOfType([c.a.bool,c.a.string])},h=function(e){var t,n=e.expand,r=e.className,a=e.cssModule,l=e.light,c=e.dark,u=e.fixed,d=e.sticky,h=e.color,E=e.tag,v=Object(s.a)(e,["expand","className","cssModule","light","dark","fixed","sticky","color","tag"]),g=Object(f.e)(p()(r,"navbar",function(e){return!1!==e&&(!0===e||"xs"===e?"navbar-expand":"navbar-expand-"+e)}(n),((t={"navbar-light":l,"navbar-dark":c})["bg-"+h]=h,t["fixed-"+u]=u,t["sticky-"+d]=d,t)),a);return i.a.createElement(E,Object(o.a)({},v,{className:g}))};h.propTypes=d,h.defaultProps={tag:"nav",expand:!1};var E=h,v={tag:f.h,fluid:c.a.oneOfType([c.a.bool,c.a.string]),className:c.a.string,cssModule:c.a.object},g=function(e){var t=e.className,n=e.cssModule,r=e.fluid,a=e.tag,l=Object(s.a)(e,["className","cssModule","fluid","tag"]),c="container";!0===r?c="container-fluid":r&&(c="container-"+r);var u=Object(f.e)(p()(t,c),n);return i.a.createElement(a,Object(o.a)({},l,{className:u}))};g.propTypes=v,g.defaultProps={tag:"div"};var m=g,x=(n("bHtr"),{tabs:c.a.bool,pills:c.a.bool,vertical:c.a.oneOfType([c.a.bool,c.a.string]),horizontal:c.a.string,justified:c.a.bool,fill:c.a.bool,navbar:c.a.bool,card:c.a.bool,tag:f.h,className:c.a.string,cssModule:c.a.object}),b=function(e){var t=e.className,n=e.cssModule,r=e.tabs,a=e.pills,l=e.vertical,c=e.horizontal,u=e.justified,d=e.fill,h=e.navbar,E=e.card,v=e.tag,g=Object(s.a)(e,["className","cssModule","tabs","pills","vertical","horizontal","justified","fill","navbar","card","tag"]),m=Object(f.e)(p()(t,h?"navbar-nav":"nav",!!c&&"justify-content-"+c,function(e){return!1!==e&&(!0===e||"xs"===e?"flex-column":"flex-"+e+"-column")}(l),{"nav-tabs":r,"card-header-tabs":E&&r,"nav-pills":a,"card-header-pills":E&&a,"nav-justified":u,"nav-fill":d}),n);return i.a.createElement(v,Object(o.a)({},g,{className:m}))};b.propTypes=x,b.defaultProps={tag:"ul",vertical:!1};var y=b,O={tag:f.h,active:c.a.bool,className:c.a.string,cssModule:c.a.object},C=function(e){var t=e.className,n=e.cssModule,r=e.active,a=e.tag,l=Object(s.a)(e,["className","cssModule","active","tag"]),c=Object(f.e)(p()(t,"nav-item",!!r&&"active"),n);return i.a.createElement(a,Object(o.a)({},l,{className:c}))};C.propTypes=O,C.defaultProps={tag:"li"};var N=C,j={tag:f.h,type:c.a.string,className:c.a.string,cssModule:c.a.object,children:c.a.node},w=function(e){var t=e.className,n=e.cssModule,r=e.children,a=e.tag,l=Object(s.a)(e,["className","cssModule","children","tag"]),c=Object(f.e)(p()(t,"navbar-toggler"),n);return i.a.createElement(a,Object(o.a)({"aria-label":"Toggle navigation"},l,{className:c}),r||i.a.createElement("span",{className:Object(f.e)("navbar-toggler-icon",n)}))};w.propTypes=j,w.defaultProps={tag:"button",type:"button"};var T=w;n("2Spj"),n("8+KV");function M(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function S(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?Object(arguments[t]):{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){M(e,t,n[t])}))}return e}var _,k=n("1w3K"),A=S({},k.Transition.propTypes,{isOpen:c.a.bool,children:c.a.oneOfType([c.a.arrayOf(c.a.node),c.a.node]),tag:f.h,className:c.a.node,navbar:c.a.bool,cssModule:c.a.object,innerRef:c.a.oneOfType([c.a.func,c.a.string,c.a.object])}),P=S({},k.Transition.defaultProps,{isOpen:!1,appear:!1,enter:!0,exit:!0,tag:"div",timeout:f.c.Collapse}),V=((_={})[f.b.ENTERING]="collapsing",_[f.b.ENTERED]="collapse show",_[f.b.EXITING]="collapsing",_[f.b.EXITED]="collapse",_);function I(e){return e.scrollHeight}var G=function(e){var t,n;function r(t){var n;return(n=e.call(this,t)||this).state={height:null},["onEntering","onEntered","onExit","onExiting","onExited"].forEach((function(e){n[e]=n[e].bind(function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(n))})),n}n=e,(t=r).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n;var a=r.prototype;return a.onEntering=function(e,t){this.setState({height:I(e)}),this.props.onEntering(e,t)},a.onEntered=function(e,t){this.setState({height:null}),this.props.onEntered(e,t)},a.onExit=function(e){this.setState({height:I(e)}),this.props.onExit(e)},a.onExiting=function(e){e.offsetHeight;this.setState({height:0}),this.props.onExiting(e)},a.onExited=function(e){this.setState({height:null}),this.props.onExited(e)},a.render=function(){var e=this,t=this.props,n=t.tag,r=t.isOpen,a=t.className,l=t.navbar,c=t.cssModule,u=t.children,d=(t.innerRef,Object(s.a)(t,["tag","isOpen","className","navbar","cssModule","children","innerRef"])),h=this.state.height,E=Object(f.g)(d,f.a),v=Object(f.f)(d,f.a);return i.a.createElement(k.Transition,Object(o.a)({},E,{in:r,onEntering:this.onEntering,onEntered:this.onEntered,onExit:this.onExit,onExiting:this.onExiting,onExited:this.onExited}),(function(t){var r=function(e){return V[e]||"collapse"}(t),s=Object(f.e)(p()(a,r,l&&"navbar-collapse"),c),d=null===h?null:{height:h};return i.a.createElement(n,Object(o.a)({},v,{style:S({},v.style,{},d),className:s,ref:e.props.innerRef}),u)}))},r}(a.Component);G.propTypes=A,G.defaultProps=P;var R=G,D=n("Aw06"),q=n("yfZV"),U=n("esZA"),L=n("d6Sx"),X=[{href:"/",text:"Home",className:"nav-link"}],F=function(e){var t=e.site,n=e.width;return i.a.createElement("ul",{className:"list-inline"},i.a.createElement("li",{className:"list-inline-item"},i.a.createElement(D.a,{to:"https://github.com/"+t.social.github},i.a.createElement(q.a,{style:{width:n,color:"#222"}}))),i.a.createElement("li",{className:"list-inline-item"},i.a.createElement(D.a,{to:"https://twitter.com/"+t.social.twitter},i.a.createElement(L.a,{style:{width:n,color:"#222"}}))),i.a.createElement("li",{className:"list-inline-item"},i.a.createElement(D.a,{to:"https://linkedin.com/in/"+t.social.linkedin},i.a.createElement(U.a,{style:{width:n,color:"#222"}}))))};function H(e){var t=e.children,n=r.data.site.siteMetadata,a=i.a.useState(!1),o=a[0],s=a[1];return i.a.createElement(i.a.Fragment,null,i.a.createElement("header",null,i.a.createElement(E,{color:"light",light:!0,expand:"md"},i.a.createElement(m,{fluid:"md"},i.a.createElement(D.a,{to:"/",className:"navbar-brand"},"Paulo Chaves"),i.a.createElement(y,{className:"mr-auto",navbar:!0},i.a.createElement(N,null,i.a.createElement(F,{width:20,site:n}))),i.a.createElement(T,{onClick:function(){return s(!o)}}),i.a.createElement(R,{isOpen:o,navbar:!0},i.a.createElement(y,{className:"ml-auto",navbar:!0},X.map((function(e,t){return i.a.createElement(N,{key:t},i.a.createElement(D.a,{to:e.href,className:e.className},e.text))}))))))),i.a.createElement("main",{role:"main"},i.a.createElement(m,{fluid:"md"},t)),i.a.createElement("footer",{style:{padding:"1.5rem",color:"#999",textAlign:"center",backgroundColor:"#f9f9f9",borderTop:".05rem solid #e5e5e5"}},i.a.createElement(m,{fluid:"md"},i.a.createElement(F,{site:n,width:20}),i.a.createElement("div",null,"© ",n.title," - ",(new Date).getFullYear(),", Built with"," ",i.a.createElement(D.a,{to:"https://www.gatsbyjs.org"},"Gatsby")))))}},Nr18:function(e,t,n){"use strict";var r=n("S/j/"),a=n("d/Gc"),i=n("ne8i");e.exports=function(e){for(var t=r(this),n=i(t.length),o=arguments.length,s=a(o>1?arguments[1]:void 0,n),l=o>2?arguments[2]:void 0,c=void 0===l?n:a(l,n);c>s;)t[s++]=e;return t}},OGtf:function(e,t,n){var r=n("XKFU"),a=n("eeVq"),i=n("vhPU"),o=/"/g,s=function(e,t,n,r){var a=String(i(e)),s="<"+t;return""!==n&&(s+=" "+n+'="'+String(r).replace(o,"&quot;")+'"'),s+">"+a+"</"+t+">"};e.exports=function(e,t){var n={};n[e]=t(s),r(r.P+r.F*a((function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3})),"String",n)}},Oyvg:function(e,t,n){var r=n("dyZX"),a=n("Xbzi"),i=n("hswa").f,o=n("kJMx").f,s=n("quPj"),l=n("C/va"),c=r.RegExp,u=c,p=c.prototype,f=/a/g,d=/a/g,h=new c(f)!==f;if(n("nh4g")&&(!h||n("eeVq")((function(){return d[n("K0xU")("match")]=!1,c(f)!=f||c(d)==d||"/a/i"!=c(f,"i")})))){c=function(e,t){var n=this instanceof c,r=s(e),i=void 0===t;return!n&&r&&e.constructor===c&&i?e:a(h?new u(r&&!i?e.source:e,t):u((r=e instanceof c)?e.source:e,r&&i?l.call(e):t),n?this:p,c)};for(var E=function(e){e in c||i(c,e,{configurable:!0,get:function(){return u[e]},set:function(t){u[e]=t}})},v=o(u),g=0;v.length>g;)E(v[g++]);p.constructor=c,c.prototype=p,n("KroJ")(r,"RegExp",c)}n("elZq")("RegExp")},PAGr:function(e,t,n){"use strict";n("hHhE"),n("V+eJ"),n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),t.__esModule=!0,t.default=void 0;o(n("17x9"));var r=o(n("q1tI")),a=n("i8i4"),i=o(n("UnXY"));function o(e){return e&&e.__esModule?e:{default:e}}var s=function(e){var t,n;function o(){for(var t,n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];return(t=e.call.apply(e,[this].concat(r))||this).handleEnter=function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];return t.handleLifecycle("onEnter",0,n)},t.handleEntering=function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];return t.handleLifecycle("onEntering",0,n)},t.handleEntered=function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];return t.handleLifecycle("onEntered",0,n)},t.handleExit=function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];return t.handleLifecycle("onExit",1,n)},t.handleExiting=function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];return t.handleLifecycle("onExiting",1,n)},t.handleExited=function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];return t.handleLifecycle("onExited",1,n)},t}n=e,(t=o).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n;var s=o.prototype;return s.handleLifecycle=function(e,t,n){var i,o=this.props.children,s=r.default.Children.toArray(o)[t];s.props[e]&&(i=s.props)[e].apply(i,n),this.props[e]&&this.props[e]((0,a.findDOMNode)(this))},s.render=function(){var e=this.props,t=e.children,n=e.in,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,["children","in"]),o=r.default.Children.toArray(t),s=o[0],l=o[1];return delete a.onEnter,delete a.onEntering,delete a.onEntered,delete a.onExit,delete a.onExiting,delete a.onExited,r.default.createElement(i.default,a,n?r.default.cloneElement(s,{key:"first",onEnter:this.handleEnter,onEntering:this.handleEntering,onEntered:this.handleEntered}):r.default.cloneElement(l,{key:"second",onEnter:this.handleExit,onEntering:this.handleExiting,onEntered:this.handleExited}))},o}(r.default.Component);s.propTypes={};var l=s;t.default=l,e.exports=t.default},S3Uj:function(e,t,n){"use strict";n("hHhE"),n("V+eJ"),n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),n("HAE/"),t.__esModule=!0,t.default=t.EXITING=t.ENTERED=t.ENTERING=t.EXITED=t.UNMOUNTED=void 0;var r=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var r=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};r.get||r.set?Object.defineProperty(t,n,r):t[n]=e[n]}return t.default=e,t}(n("17x9")),a=s(n("q1tI")),i=s(n("i8i4")),o=n("94VI");n("xfxO");function s(e){return e&&e.__esModule?e:{default:e}}t.UNMOUNTED="unmounted";t.EXITED="exited";t.ENTERING="entering";t.ENTERED="entered";t.EXITING="exiting";var l=function(e){var t,n;function r(t,n){var r;r=e.call(this,t,n)||this;var a,i=n.transitionGroup,o=i&&!i.isMounting?t.enter:t.appear;return r.appearStatus=null,t.in?o?(a="exited",r.appearStatus="entering"):a="entered":a=t.unmountOnExit||t.mountOnEnter?"unmounted":"exited",r.state={status:a},r.nextCallback=null,r}n=e,(t=r).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n;var o=r.prototype;return o.getChildContext=function(){return{transitionGroup:null}},r.getDerivedStateFromProps=function(e,t){return e.in&&"unmounted"===t.status?{status:"exited"}:null},o.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},o.componentDidUpdate=function(e){var t=null;if(e!==this.props){var n=this.state.status;this.props.in?"entering"!==n&&"entered"!==n&&(t="entering"):"entering"!==n&&"entered"!==n||(t="exiting")}this.updateStatus(!1,t)},o.componentWillUnmount=function(){this.cancelNextCallback()},o.getTimeouts=function(){var e,t,n,r=this.props.timeout;return e=t=n=r,null!=r&&"number"!=typeof r&&(e=r.exit,t=r.enter,n=void 0!==r.appear?r.appear:t),{exit:e,enter:t,appear:n}},o.updateStatus=function(e,t){if(void 0===e&&(e=!1),null!==t){this.cancelNextCallback();var n=i.default.findDOMNode(this);"entering"===t?this.performEnter(n,e):this.performExit(n)}else this.props.unmountOnExit&&"exited"===this.state.status&&this.setState({status:"unmounted"})},o.performEnter=function(e,t){var n=this,r=this.props.enter,a=this.context.transitionGroup?this.context.transitionGroup.isMounting:t,i=this.getTimeouts(),o=a?i.appear:i.enter;t||r?(this.props.onEnter(e,a),this.safeSetState({status:"entering"},(function(){n.props.onEntering(e,a),n.onTransitionEnd(e,o,(function(){n.safeSetState({status:"entered"},(function(){n.props.onEntered(e,a)}))}))}))):this.safeSetState({status:"entered"},(function(){n.props.onEntered(e)}))},o.performExit=function(e){var t=this,n=this.props.exit,r=this.getTimeouts();n?(this.props.onExit(e),this.safeSetState({status:"exiting"},(function(){t.props.onExiting(e),t.onTransitionEnd(e,r.exit,(function(){t.safeSetState({status:"exited"},(function(){t.props.onExited(e)}))}))}))):this.safeSetState({status:"exited"},(function(){t.props.onExited(e)}))},o.cancelNextCallback=function(){null!==this.nextCallback&&(this.nextCallback.cancel(),this.nextCallback=null)},o.safeSetState=function(e,t){t=this.setNextCallback(t),this.setState(e,t)},o.setNextCallback=function(e){var t=this,n=!0;return this.nextCallback=function(r){n&&(n=!1,t.nextCallback=null,e(r))},this.nextCallback.cancel=function(){n=!1},this.nextCallback},o.onTransitionEnd=function(e,t,n){this.setNextCallback(n);var r=null==t&&!this.props.addEndListener;e&&!r?(this.props.addEndListener&&this.props.addEndListener(e,this.nextCallback),null!=t&&setTimeout(this.nextCallback,t)):setTimeout(this.nextCallback,0)},o.render=function(){var e=this.state.status;if("unmounted"===e)return null;var t=this.props,n=t.children,r=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(t,["children"]);if(delete r.in,delete r.mountOnEnter,delete r.unmountOnExit,delete r.appear,delete r.enter,delete r.exit,delete r.timeout,delete r.addEndListener,delete r.onEnter,delete r.onEntering,delete r.onEntered,delete r.onExit,delete r.onExiting,delete r.onExited,"function"==typeof n)return n(e,r);var i=a.default.Children.only(n);return a.default.cloneElement(i,r)},r}(a.default.Component);function c(){}l.contextTypes={transitionGroup:r.object},l.childContextTypes={transitionGroup:function(){}},l.propTypes={},l.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:c,onEntering:c,onEntered:c,onExit:c,onExiting:c,onExited:c},l.UNMOUNTED=0,l.EXITED=1,l.ENTERING=2,l.ENTERED=3,l.EXITING=4;var u=(0,o.polyfill)(l);t.default=u},Si88:function(e,t,n){"use strict";n("KKXr"),n("8+KV"),n("hHhE"),n("91GP"),n("HAE/"),t.__esModule=!0,t.default=void 0;!function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var r=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};r.get||r.set?Object.defineProperty(t,n,r):t[n]=e[n]}t.default=e}(n("17x9"));var r=s(n("ycFn")),a=s(n("VOcB")),i=s(n("q1tI")),o=s(n("S3Uj"));n("xfxO");function s(e){return e&&e.__esModule?e:{default:e}}function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var c=function(e,t){return e&&t&&t.split(" ").forEach((function(t){return(0,r.default)(e,t)}))},u=function(e,t){return e&&t&&t.split(" ").forEach((function(t){return(0,a.default)(e,t)}))},p=function(e){var t,n;function r(){for(var t,n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];return(t=e.call.apply(e,[this].concat(r))||this).onEnter=function(e,n){var r=t.getClassNames(n?"appear":"enter").className;t.removeClasses(e,"exit"),c(e,r),t.props.onEnter&&t.props.onEnter(e,n)},t.onEntering=function(e,n){var r=t.getClassNames(n?"appear":"enter").activeClassName;t.reflowAndAddClass(e,r),t.props.onEntering&&t.props.onEntering(e,n)},t.onEntered=function(e,n){var r=t.getClassNames("appear").doneClassName,a=t.getClassNames("enter").doneClassName,i=n?r+" "+a:a;t.removeClasses(e,n?"appear":"enter"),c(e,i),t.props.onEntered&&t.props.onEntered(e,n)},t.onExit=function(e){var n=t.getClassNames("exit").className;t.removeClasses(e,"appear"),t.removeClasses(e,"enter"),c(e,n),t.props.onExit&&t.props.onExit(e)},t.onExiting=function(e){var n=t.getClassNames("exit").activeClassName;t.reflowAndAddClass(e,n),t.props.onExiting&&t.props.onExiting(e)},t.onExited=function(e){var n=t.getClassNames("exit").doneClassName;t.removeClasses(e,"exit"),c(e,n),t.props.onExited&&t.props.onExited(e)},t.getClassNames=function(e){var n=t.props.classNames,r="string"==typeof n,a=r?(r&&n?n+"-":"")+e:n[e];return{className:a,activeClassName:r?a+"-active":n[e+"Active"],doneClassName:r?a+"-done":n[e+"Done"]}},t}n=e,(t=r).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n;var a=r.prototype;return a.removeClasses=function(e,t){var n=this.getClassNames(t),r=n.className,a=n.activeClassName,i=n.doneClassName;r&&u(e,r),a&&u(e,a),i&&u(e,i)},a.reflowAndAddClass=function(e,t){t&&(e&&e.scrollTop,c(e,t))},a.render=function(){var e=l({},this.props);return delete e.classNames,i.default.createElement(o.default,l({},e,{onEnter:this.onEnter,onEntered:this.onEntered,onEntering:this.onEntering,onExit:this.onExit,onExiting:this.onExiting,onExited:this.onExited}))},r}(i.default.Component);p.defaultProps={classNames:""},p.propTypes={};var f=p;t.default=f,e.exports=t.default},TSYQ:function(e,t,n){var r;n("LK8F"),function(){"use strict";var n={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var i=typeof r;if("string"===i||"number"===i)e.push(r);else if(Array.isArray(r)&&r.length){var o=a.apply(null,r);o&&e.push(o)}else if("object"===i)for(var s in r)n.call(r,s)&&r[s]&&e.push(s)}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(r=function(){return a}.apply(t,[]))||(e.exports=r)}()},UExd:function(e,t,n){var r=n("nh4g"),a=n("DVgA"),i=n("aCFj"),o=n("UqcF").f;e.exports=function(e){return function(t){for(var n,s=i(t),l=a(s),c=l.length,u=0,p=[];c>u;)n=l[u++],r&&!o.call(s,n)||p.push(e?[n,s[n]]:s[n]);return p}}},UnXY:function(e,t,n){"use strict";n("2Spj"),n("bWfx"),n("hhXQ"),n("hHhE"),n("91GP"),n("V+eJ"),n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),t.__esModule=!0,t.default=void 0;var r=s(n("17x9")),a=s(n("q1tI")),i=n("94VI"),o=n("8PcY");function s(e){return e&&e.__esModule?e:{default:e}}function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function c(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var u=Object.values||function(e){return Object.keys(e).map((function(t){return e[t]}))},p=function(e){var t,n;function r(t,n){var r,a=(r=e.call(this,t,n)||this).handleExited.bind(c(c(r)));return r.state={handleExited:a,firstRender:!0},r}n=e,(t=r).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n;var i=r.prototype;return i.getChildContext=function(){return{transitionGroup:{isMounting:!this.appeared}}},i.componentDidMount=function(){this.appeared=!0,this.mounted=!0},i.componentWillUnmount=function(){this.mounted=!1},r.getDerivedStateFromProps=function(e,t){var n=t.children,r=t.handleExited;return{children:t.firstRender?(0,o.getInitialChildMapping)(e,r):(0,o.getNextChildMapping)(e,n,r),firstRender:!1}},i.handleExited=function(e,t){var n=(0,o.getChildMapping)(this.props.children);e.key in n||(e.props.onExited&&e.props.onExited(t),this.mounted&&this.setState((function(t){var n=l({},t.children);return delete n[e.key],{children:n}})))},i.render=function(){var e=this.props,t=e.component,n=e.childFactory,r=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,["component","childFactory"]),i=u(this.state.children).map(n);return delete r.appear,delete r.enter,delete r.exit,null===t?i:a.default.createElement(t,r,i)},r}(a.default.Component);p.childContextTypes={transitionGroup:r.default.object.isRequired},p.propTypes={},p.defaultProps={component:"div",childFactory:function(e){return e}};var f=(0,i.polyfill)(p);t.default=f,e.exports=t.default},VOcB:function(e,t,n){"use strict";function r(e,t){return e.replace(new RegExp("(^|\\s)"+t+"(?:\\s|$)","g"),"$1").replace(/\s+/g," ").replace(/^\s*|\s*$/g,"")}n("Oyvg"),n("pIFo"),e.exports=function(e,t){e.classList?e.classList.remove(t):"string"==typeof e.className?e.className=r(e.className,t):e.setAttribute("class",r(e.className&&e.className.baseVal||"",t))}},a2bI:function(e){e.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"title":"Paulo Chaves","social":{"twitter":"opaulochaves","github":"opaulochaves","linkedin":"opaulochaves"}}}}}')},bHtr:function(e,t,n){var r=n("XKFU");r(r.P,"Array",{fill:n("Nr18")}),n("nGyu")("fill")},d6Sx:function(e,t,n){"use strict";n("91GP");var r=n("q1tI"),a=n.n(r);t.a=function(e){return a.a.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},e),a.a.createElement("path",{fill:"currentColor",d:"M22.46,6C21.69,6.35 20.86,6.58 20,6.69C20.88,6.16 21.56,5.32 21.88,4.31C21.05,4.81 20.13,5.16 19.16,5.36C18.37,4.5 17.26,4 16,4C13.65,4 11.73,5.92 11.73,8.29C11.73,8.63 11.77,8.96 11.84,9.27C8.28,9.09 5.11,7.38 3,4.79C2.63,5.42 2.42,6.16 2.42,6.94C2.42,8.43 3.17,9.75 4.33,10.5C3.62,10.5 2.96,10.3 2.38,10C2.38,10 2.38,10 2.38,10.03C2.38,12.11 3.86,13.85 5.82,14.24C5.46,14.34 5.08,14.39 4.69,14.39C4.42,14.39 4.15,14.36 3.89,14.31C4.43,16 6,17.26 7.89,17.29C6.43,18.45 4.58,19.13 2.56,19.13C2.22,19.13 1.88,19.11 1.54,19.07C3.44,20.29 5.7,21 8.12,21C16,21 20.33,14.46 20.33,8.79C20.33,8.6 20.33,8.42 20.32,8.23C21.16,7.63 21.88,6.87 22.46,6Z"}))}},esZA:function(e,t,n){"use strict";n("91GP");var r=n("q1tI"),a=n.n(r);t.a=function(e){return a.a.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},e),a.a.createElement("path",{fill:"currentColor",d:"M19 3A2 2 0 0 1 21 5V19A2 2 0 0 1 19 21H5A2 2 0 0 1 3 19V5A2 2 0 0 1 5 3H19M18.5 18.5V13.2A3.26 3.26 0 0 0 15.24 9.94C14.39 9.94 13.4 10.46 12.92 11.24V10.13H10.13V18.5H12.92V13.57C12.92 12.8 13.54 12.17 14.31 12.17A1.4 1.4 0 0 1 15.71 13.57V18.5H18.5M6.88 8.56A1.68 1.68 0 0 0 8.56 6.88C8.56 5.95 7.81 5.19 6.88 5.19A1.69 1.69 0 0 0 5.19 6.88C5.19 7.81 5.95 8.56 6.88 8.56M8.27 18.5V10.13H5.5V18.5H8.27Z"}))}},h7Nl:function(e,t,n){var r=Date.prototype,a=r.toString,i=r.getTime;new Date(NaN)+""!="Invalid Date"&&n("KroJ")(r,"toString",(function(){var e=i.call(this);return e==e?a.call(this):"Invalid Date"}))},hhXQ:function(e,t,n){var r=n("XKFU"),a=n("UExd")(!1);r(r.S,"Object",{values:function(e){return a(e)}})},qHiR:function(e,t,n){},sQfG:function(e,t,n){},wx14:function(e,t,n){"use strict";function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}n.d(t,"a",(function(){return r}))},xfxO:function(e,t,n){"use strict";t.__esModule=!0,t.classNamesShape=t.timeoutsShape=void 0;var r;(r=n("17x9"))&&r.__esModule;t.timeoutsShape=null;t.classNamesShape=null},yD6e:function(e,t,n){"use strict";n("V+eJ"),t.__esModule=!0,t.default=function(e,t){return e.classList?!!t&&e.classList.contains(t):-1!==(" "+(e.className.baseVal||e.className)+" ").indexOf(" "+t+" ")},e.exports=t.default},ycFn:function(e,t,n){"use strict";var r=n("TqRt");t.__esModule=!0,t.default=function(e,t){e.classList?e.classList.add(t):(0,a.default)(e,t)||("string"==typeof e.className?e.className=e.className+" "+t:e.setAttribute("class",(e.className&&e.className.baseVal||"")+" "+t))};var a=r(n("yD6e"));e.exports=t.default},yfZV:function(e,t,n){"use strict";n("91GP");var r=n("q1tI"),a=n.n(r);t.a=function(e){return a.a.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},e),a.a.createElement("path",{fill:"currentColor",d:"M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z"}))}},zLVn:function(e,t,n){"use strict";function r(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}n.d(t,"a",(function(){return r}))}}]);
//# sourceMappingURL=4213a708e3c149581c4f5e97d71bfc3d00067ec6-2c8c276a0388946a45b8.js.map