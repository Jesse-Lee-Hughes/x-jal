function g(){}const ut=t=>t;function lt(t,e){for(const n in e)t[n]=e[n];return t}function U(t){return t()}function J(){return Object.create(null)}function v(t){t.forEach(U)}function T(t){return typeof t=="function"}function Wt(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let C;function Gt(t,e){return C||(C=document.createElement("a")),C.href=e,t===C.href}function at(t){return Object.keys(t).length===0}function ft(t,...e){if(t==null)return g;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function It(t,e,n){t.$$.on_destroy.push(ft(e,n))}function Jt(t,e,n,i){if(t){const r=V(t,e,n,i);return t[0](r)}}function V(t,e,n,i){return t[1]&&i?lt(n.ctx.slice(),t[1](i(e))):n.ctx}function Kt(t,e,n,i){if(t[2]&&i){const r=t[2](i(n));if(e.dirty===void 0)return r;if(typeof r=="object"){const u=[],o=Math.max(e.dirty.length,r.length);for(let s=0;s<o;s+=1)u[s]=e.dirty[s]|r[s];return u}return e.dirty|r}return e.dirty}function Qt(t,e,n,i,r,u){if(r){const o=V(e,n,i,u);t.p(o,r)}}function Ut(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let i=0;i<n;i++)e[i]=-1;return e}return-1}function Vt(t){const e={};for(const n in t)n[0]!=="$"&&(e[n]=t[n]);return e}function Xt(t,e){const n={};e=new Set(e);for(const i in t)!e.has(i)&&i[0]!=="$"&&(n[i]=t[i]);return n}function Yt(t){const e={};for(const n in t)e[n]=!0;return e}function Zt(t){return t&&T(t.destroy)?t.destroy:g}function te(t){const e=typeof t=="string"&&t.match(/^\s*(-?[\d.]+)([^\s]*)\s*$/);return e?[parseFloat(e[1]),e[2]||"px"]:[t,"px"]}const X=typeof window<"u";let _t=X?()=>window.performance.now():()=>Date.now(),W=X?t=>requestAnimationFrame(t):g;const w=new Set;function Y(t){w.forEach(e=>{e.c(t)||(w.delete(e),e.f())}),w.size!==0&&W(Y)}function dt(t){let e;return w.size===0&&W(Y),{promise:new Promise(n=>{w.add(e={c:t,f:n})}),abort(){w.delete(e)}}}let P=!1;function ht(){P=!0}function mt(){P=!1}function pt(t,e,n,i){for(;t<e;){const r=t+(e-t>>1);n(r)<=i?t=r+1:e=r}return t}function yt(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const c=[];for(let l=0;l<e.length;l++){const _=e[l];_.claim_order!==void 0&&c.push(_)}e=c}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let r=0;for(let c=0;c<e.length;c++){const l=e[c].claim_order,_=(r>0&&e[n[r]].claim_order<=l?r+1:pt(1,r,h=>e[n[h]].claim_order,l))-1;i[c]=n[_]+1;const a=_+1;n[a]=c,r=Math.max(a,r)}const u=[],o=[];let s=e.length-1;for(let c=n[r]+1;c!=0;c=i[c-1]){for(u.push(e[c-1]);s>=c;s--)o.push(e[s]);s--}for(;s>=0;s--)o.push(e[s]);u.reverse(),o.sort((c,l)=>c.claim_order-l.claim_order);for(let c=0,l=0;c<o.length;c++){for(;l<u.length&&o[c].claim_order>=u[l].claim_order;)l++;const _=l<u.length?u[l]:null;t.insertBefore(o[c],_)}}function gt(t,e){t.appendChild(e)}function Z(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function $t(t){const e=et("style");return xt(Z(t),e),e.sheet}function xt(t,e){return gt(t.head||t,e),e.sheet}function bt(t,e){if(P){for(yt(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function ee(t,e,n){P&&!n?bt(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function tt(t){t.parentNode&&t.parentNode.removeChild(t)}function ne(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function et(t){return document.createElement(t)}function wt(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function G(t){return document.createTextNode(t)}function ie(){return G(" ")}function re(){return G("")}function se(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function I(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}const Et=["width","height"];function vt(t,e){const n=Object.getOwnPropertyDescriptors(t.__proto__);for(const i in e)e[i]==null?t.removeAttribute(i):i==="style"?t.style.cssText=e[i]:i==="__value"?t.value=t[i]=e[i]:n[i]&&n[i].set&&Et.indexOf(i)===-1?t[i]=e[i]:I(t,i,e[i])}function oe(t,e){for(const n in e)I(t,n,e[n])}function kt(t,e){Object.keys(e).forEach(n=>{Nt(t,n,e[n])})}function Nt(t,e,n){e in t?t[e]=typeof t[e]=="boolean"&&n===""?!0:n:I(t,e,n)}function ce(t){return/-/.test(t)?kt:vt}function At(t){return Array.from(t.childNodes)}function jt(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function nt(t,e,n,i,r=!1){jt(t);const u=(()=>{for(let o=t.claim_info.last_index;o<t.length;o++){const s=t[o];if(e(s)){const c=n(s);return c===void 0?t.splice(o,1):t[o]=c,r||(t.claim_info.last_index=o),s}}for(let o=t.claim_info.last_index-1;o>=0;o--){const s=t[o];if(e(s)){const c=n(s);return c===void 0?t.splice(o,1):t[o]=c,r?c===void 0&&t.claim_info.last_index--:t.claim_info.last_index=o,s}}return i()})();return u.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,u}function it(t,e,n,i){return nt(t,r=>r.nodeName===e,r=>{const u=[];for(let o=0;o<r.attributes.length;o++){const s=r.attributes[o];n[s.name]||u.push(s.name)}u.forEach(o=>r.removeAttribute(o))},()=>i(e))}function ue(t,e,n){return it(t,e,n,et)}function le(t,e,n){return it(t,e,n,wt)}function Ct(t,e){return nt(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>G(e),!0)}function ae(t){return Ct(t," ")}function fe(t,e){e=""+e,t.data!==e&&(t.data=e)}function _e(t,e,n,i){n==null?t.style.removeProperty(e):t.style.setProperty(e,n,i?"important":"")}function St(t,e,{bubbles:n=!1,cancelable:i=!1}={}){const r=document.createEvent("CustomEvent");return r.initCustomEvent(t,n,i,e),r}function de(t,e){const n=[];let i=0;for(const r of e.childNodes)if(r.nodeType===8){const u=r.textContent.trim();u===`HEAD_${t}_END`?(i-=1,n.push(r)):u===`HEAD_${t}_START`&&(i+=1,n.push(r))}else i>0&&n.push(r);return n}function he(t,e){return new t(e)}const O=new Map;let D=0;function Ot(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}function Dt(t,e){const n={stylesheet:$t(e),rules:{}};return O.set(t,n),n}function K(t,e,n,i,r,u,o,s=0){const c=16.666/i;let l=`{
`;for(let y=0;y<=1;y+=c){const $=e+(n-e)*u(y);l+=y*100+`%{${o($,1-$)}}
`}const _=l+`100% {${o(n,1-n)}}
}`,a=`__svelte_${Ot(_)}_${s}`,h=Z(t),{stylesheet:f,rules:d}=O.get(h)||Dt(h,t);d[a]||(d[a]=!0,f.insertRule(`@keyframes ${a} ${_}`,f.cssRules.length));const m=t.style.animation||"";return t.style.animation=`${m?`${m}, `:""}${a} ${i}ms linear ${r}ms 1 both`,D+=1,a}function Mt(t,e){const n=(t.style.animation||"").split(", "),i=n.filter(e?u=>u.indexOf(e)<0:u=>u.indexOf("__svelte")===-1),r=n.length-i.length;r&&(t.style.animation=i.join(", "),D-=r,D||Tt())}function Tt(){W(()=>{D||(O.forEach(t=>{const{ownerNode:e}=t.stylesheet;e&&tt(e)}),O.clear())})}let A;function N(t){A=t}function R(){if(!A)throw new Error("Function called outside component initialization");return A}function me(t){R().$$.on_mount.push(t)}function pe(t){R().$$.after_update.push(t)}function ye(t,e){return R().$$.context.set(t,e),e}function ge(t){return R().$$.context.get(t)}function $e(t,e){const n=t.$$.callbacks[e.type];n&&n.slice().forEach(i=>i.call(this,e))}const b=[],Q=[];let E=[];const H=[],rt=Promise.resolve();let L=!1;function st(){L||(L=!0,rt.then(ot))}function xe(){return st(),rt}function M(t){E.push(t)}function be(t){H.push(t)}const B=new Set;let x=0;function ot(){if(x!==0)return;const t=A;do{try{for(;x<b.length;){const e=b[x];x++,N(e),Pt(e.$$)}}catch(e){throw b.length=0,x=0,e}for(N(null),b.length=0,x=0;Q.length;)Q.pop()();for(let e=0;e<E.length;e+=1){const n=E[e];B.has(n)||(B.add(n),n())}E.length=0}while(b.length);for(;H.length;)H.pop()();L=!1,B.clear(),N(t)}function Pt(t){if(t.fragment!==null){t.update(),v(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(M)}}function Rt(t){const e=[],n=[];E.forEach(i=>t.indexOf(i)===-1?e.push(i):n.push(i)),n.forEach(i=>i()),E=e}let k;function qt(){return k||(k=Promise.resolve(),k.then(()=>{k=null})),k}function F(t,e,n){t.dispatchEvent(St(`${e?"intro":"outro"}${n}`))}const S=new Set;let p;function we(){p={r:0,c:[],p}}function Ee(){p.r||v(p.c),p=p.p}function zt(t,e){t&&t.i&&(S.delete(t),t.i(e))}function ve(t,e,n,i){if(t&&t.o){if(S.has(t))return;S.add(t),p.c.push(()=>{S.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}else i&&i()}const Bt={duration:0};function ke(t,e,n,i){const r={direction:"both"};let u=e(t,n,r),o=i?0:1,s=null,c=null,l=null;function _(){l&&Mt(t,l)}function a(f,d){const m=f.b-o;return d*=Math.abs(m),{a:o,b:f.b,d:m,duration:d,start:f.start,end:f.start+d,group:f.group}}function h(f){const{delay:d=0,duration:m=300,easing:y=ut,tick:$=g,css:q}=u||Bt,z={start:_t()+d,b:f};f||(z.group=p,p.r+=1),s||c?c=z:(q&&(_(),l=K(t,o,f,m,d,y,q)),f&&$(0,1),s=a(z,m),M(()=>F(t,f,"start")),dt(j=>{if(c&&j>c.start&&(s=a(c,m),c=null,F(t,s.b,"start"),q&&(_(),l=K(t,o,s.b,s.duration,0,y,u.css))),s){if(j>=s.end)$(o=s.b,1-o),F(t,s.b,"end"),c||(s.b?_():--s.group.r||v(s.group.c)),s=null;else if(j>=s.start){const ct=j-s.start;o=s.a+s.d*y(ct/s.duration),$(o,1-o)}}return!!(s||c)}))}return{run(f){T(u)?qt().then(()=>{u=u(r),h(f)}):h(f)},end(){_(),s=c=null}}}function Ne(t,e){const n={},i={},r={$$scope:1};let u=t.length;for(;u--;){const o=t[u],s=e[u];if(s){for(const c in o)c in s||(i[c]=1);for(const c in s)r[c]||(n[c]=s[c],r[c]=1);t[u]=s}else for(const c in o)r[c]=1}for(const o in i)o in n||(n[o]=void 0);return n}function Ae(t){return typeof t=="object"&&t!==null?t:{}}function je(t,e,n){const i=t.$$.props[e];i!==void 0&&(t.$$.bound[i]=n,n(t.$$.ctx[i]))}function Ce(t){t&&t.c()}function Se(t,e){t&&t.l(e)}function Ft(t,e,n,i){const{fragment:r,after_update:u}=t.$$;r&&r.m(e,n),i||M(()=>{const o=t.$$.on_mount.map(U).filter(T);t.$$.on_destroy?t.$$.on_destroy.push(...o):v(o),t.$$.on_mount=[]}),u.forEach(M)}function Ht(t,e){const n=t.$$;n.fragment!==null&&(Rt(n.after_update),v(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Lt(t,e){t.$$.dirty[0]===-1&&(b.push(t),st(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function Oe(t,e,n,i,r,u,o,s=[-1]){const c=A;N(t);const l=t.$$={fragment:null,ctx:[],props:u,update:g,not_equal:r,bound:J(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(c?c.$$.context:[])),callbacks:J(),dirty:s,skip_bound:!1,root:e.target||c.$$.root};o&&o(l.root);let _=!1;if(l.ctx=n?n(t,e.props||{},(a,h,...f)=>{const d=f.length?f[0]:h;return l.ctx&&r(l.ctx[a],l.ctx[a]=d)&&(!l.skip_bound&&l.bound[a]&&l.bound[a](d),_&&Lt(t,a)),h}):[],l.update(),_=!0,v(l.before_update),l.fragment=i?i(l.ctx):!1,e.target){if(e.hydrate){ht();const a=At(e.target);l.fragment&&l.fragment.l(a),a.forEach(tt)}else l.fragment&&l.fragment.c();e.intro&&zt(t.$$.fragment),Ft(t,e.target,e.anchor,e.customElement),mt(),ot()}N(c)}class De{$destroy(){Ht(this,1),this.$destroy=g}$on(e,n){if(!T(n))return g;const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(n),()=>{const r=i.indexOf(n);r!==-1&&i.splice(r,1)}}$set(e){this.$$set&&!at(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}export{vt as $,Ft as A,Ht as B,Xt as C,ye as D,lt as E,Vt as F,g as G,$e as H,Jt as I,ce as J,Zt as K,se as L,Qt as M,Ut as N,Kt as O,Ne as P,T as Q,v as R,De as S,M as T,ke as U,wt as V,le as W,oe as X,te as Y,ut as Z,ge as _,ie as a,bt as a0,Ae as a1,de as a2,Yt as a3,je as a4,be as a5,It as a6,ne as a7,Gt as a8,ee as b,ae as c,ve as d,re as e,Ee as f,zt as g,tt as h,Oe as i,pe as j,et as k,ue as l,At as m,I as n,me as o,_e as p,G as q,Ct as r,Wt as s,xe as t,fe as u,we as v,Q as w,he as x,Ce as y,Se as z};
