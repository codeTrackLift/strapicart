(self.webpackChunkcartdb=self.webpackChunkcartdb||[]).push([[3552],{80117:(U,Q,g)=>{"use strict";U.exports=g(41706)},41706:function(U,Q,g){(function(t,M){U.exports=M(g(53547),g(78384))})(this,function(t,M){return function(o){var m={};function n(d){if(m[d])return m[d].exports;var i=m[d]={i:d,l:!1,exports:{}};return o[d].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=o,n.c=m,n.d=function(d,i,E){n.o(d,i)||Object.defineProperty(d,i,{enumerable:!0,get:E})},n.r=function(d){typeof Symbol!="undefined"&&Symbol.toStringTag&&Object.defineProperty(d,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(d,"__esModule",{value:!0})},n.t=function(d,i){if(1&i&&(d=n(d)),8&i||4&i&&typeof d=="object"&&d&&d.__esModule)return d;var E=Object.create(null);if(n.r(E),Object.defineProperty(E,"default",{enumerable:!0,value:d}),2&i&&typeof d!="string")for(var v in d)n.d(E,v,function(r){return d[r]}.bind(null,v));return E},n.n=function(d){var i=d&&d.__esModule?function(){return d.default}:function(){return d};return n.d(i,"a",i),i},n.o=function(d,i){return Object.prototype.hasOwnProperty.call(d,i)},n.p="",n(n.s=110)}({0:function(o,m,n){o.exports=n(19)()},1:function(o,m){o.exports=t},10:function(o,m,n){var d=n(25),i=n(26),E=n(22),v=n(27);o.exports=function(r,L){return d(r)||i(r,L)||E(r,L)||v()},o.exports.default=o.exports,o.exports.__esModule=!0},110:function(o,m,n){"use strict";n.r(m),n.d(m,"Main",function(){return w}),n.d(m,"SkipToContent",function(){return X});var d,i=n(5),E=n.n(i),v=n(4),r=n.n(v),L=n(3),P=n.n(L),S=n(1),h=n.n(S),D=n(0),e=n.n(D),l=n(2),y=n.n(l),C=["labelledBy"],F=y.a.main(d||(d=P()([`
  // To prevent global outline on focus visible to force an outline when Main is focused
  &:focus-visible {
    outline: none;
  }
`]))),w=function(I){var N=I.labelledBy,G=r()(I,C),Z=N||"main-content-title";return h.a.createElement(F,E()({"aria-labelledby":Z,id:"main-content",tabIndex:-1},G))};w.defaultProps={labelledBy:void 0},w.propTypes={labelledBy:e.a.string};var H,R=n(6),V=y()(R.Box)(H||(H=P()([`
  text-decoration: none;
  position: absolute;
  z-index: 9999;
  left: -100%;
  top: -100%;

  &:focus {
    left: `,`;
    top: `,`;
  }
`])),function(I){return I.theme.spaces[3]},function(I){return I.theme.spaces[3]}),X=function(I){var N=I.children;return h.a.createElement(V,{as:"a",href:"#main-content",background:"primary600",color:"neutral0",padding:3,hasRadius:!0},N)};X.propTypes={children:e.a.node.isRequired}},13:function(o,m){function n(d){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?(o.exports=n=function(i){return typeof i},o.exports.default=o.exports,o.exports.__esModule=!0):(o.exports=n=function(i){return i&&typeof Symbol=="function"&&i.constructor===Symbol&&i!==Symbol.prototype?"symbol":typeof i},o.exports.default=o.exports,o.exports.__esModule=!0),n(d)}o.exports=n,o.exports.default=o.exports,o.exports.__esModule=!0},19:function(o,m,n){"use strict";var d=n(20);function i(){}function E(){}E.resetWarningCache=i,o.exports=function(){function v(P,S,h,D,e,l){if(l!==d){var y=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw y.name="Invariant Violation",y}}function r(){return v}v.isRequired=v;var L={array:v,bool:v,func:v,number:v,object:v,string:v,symbol:v,any:v,arrayOf:r,element:v,elementType:v,instanceOf:r,node:v,objectOf:r,oneOf:r,oneOfType:r,shape:r,exact:r,checkPropTypes:E,resetWarningCache:i};return L.PropTypes=L,L}},2:function(o,m){o.exports=M},20:function(o,m,n){"use strict";o.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},21:function(o,m){o.exports=function(n,d){(d==null||d>n.length)&&(d=n.length);for(var i=0,E=new Array(d);i<d;i++)E[i]=n[i];return E},o.exports.default=o.exports,o.exports.__esModule=!0},22:function(o,m,n){var d=n(21);o.exports=function(i,E){if(i){if(typeof i=="string")return d(i,E);var v=Object.prototype.toString.call(i).slice(8,-1);return v==="Object"&&i.constructor&&(v=i.constructor.name),v==="Map"||v==="Set"?Array.from(i):v==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(v)?d(i,E):void 0}},o.exports.default=o.exports,o.exports.__esModule=!0},24:function(o,m){o.exports=function(n,d){if(n==null)return{};var i,E,v={},r=Object.keys(n);for(E=0;E<r.length;E++)i=r[E],d.indexOf(i)>=0||(v[i]=n[i]);return v},o.exports.default=o.exports,o.exports.__esModule=!0},25:function(o,m){o.exports=function(n){if(Array.isArray(n))return n},o.exports.default=o.exports,o.exports.__esModule=!0},26:function(o,m){o.exports=function(n,d){var i=n==null?null:typeof Symbol!="undefined"&&n[Symbol.iterator]||n["@@iterator"];if(i!=null){var E,v,r=[],L=!0,P=!1;try{for(i=i.call(n);!(L=(E=i.next()).done)&&(r.push(E.value),!d||r.length!==d);L=!0);}catch(S){P=!0,v=S}finally{try{L||i.return==null||i.return()}finally{if(P)throw v}}return r}},o.exports.default=o.exports,o.exports.__esModule=!0},27:function(o,m){o.exports=function(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)},o.exports.default=o.exports,o.exports.__esModule=!0},3:function(o,m){o.exports=function(n,d){return d||(d=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(d)}}))},o.exports.default=o.exports,o.exports.__esModule=!0},4:function(o,m,n){var d=n(24);o.exports=function(i,E){if(i==null)return{};var v,r,L=d(i,E);if(Object.getOwnPropertySymbols){var P=Object.getOwnPropertySymbols(i);for(r=0;r<P.length;r++)v=P[r],E.indexOf(v)>=0||Object.prototype.propertyIsEnumerable.call(i,v)&&(L[v]=i[v])}return L},o.exports.default=o.exports,o.exports.__esModule=!0},5:function(o,m){function n(){return o.exports=n=Object.assign||function(d){for(var i=1;i<arguments.length;i++){var E=arguments[i];for(var v in E)Object.prototype.hasOwnProperty.call(E,v)&&(d[v]=E[v])}return d},o.exports.default=o.exports,o.exports.__esModule=!0,n.apply(this,arguments)}o.exports=n,o.exports.default=o.exports,o.exports.__esModule=!0},6:function(o,m,n){"use strict";n.r(m),n.d(m,"Box",function(){return D});var d,i=n(3),E=n.n(i),v=n(0),r=n.n(v),L=n(2),P=n.n(L),S=n(7),h={color:!0},D=P.a.div.withConfig({shouldForwardProp:function(e,l){return!h[e]&&l(e)}})(d||(d=E()([`
  // Font
  font-size: `,`;

  // Colors
  background: `,`;
  color: `,`;

  // Spaces
  `,`
  `,`
  `,`
  `,`
  `,`
  `,`
  `,`
  `,`
  `,`

  // Responsive hiding
  `,`
  `,`
  

  // Borders
  border-radius: `,`;
  border-style: `,`;
  border-width: `,`;
  border-color: `,`;
  border: `,`;

  // Shadows
  box-shadow: `,`;

  // Handlers
  pointer-events: `,`;
  &:hover {
    `,`
  }

  // Display
  display: `,`;

  // Position
  position: `,`;
  left: `,`;
  right: `,`;
  top: `,`;
  bottom: `,`;
  z-index: `,`;
  overflow: `,`;
  cursor: `,`;

  // Size
  width: `,`;
  max-width: `,`;
  min-width: `,`;
  height: `,`;
  max-height: `,`;
  min-height: `,`;

  // Animation
  transition: `,`;
  transform: `,`;
  animation: `,`;

  //Flexbox children props
  flex-shrink: `,`;
  flex-grow: `,`;
  flex-basis: `,`;
  flex: `,`;

  // Text
  text-align: `,`;
  text-transform: `,`;
  line-height: `,`;

  // Cursor
  cursor: `,`;
`])),function(e){var l=e.fontSize;return e.theme.fontSizes[l]||l},function(e){var l=e.theme,y=e.background;return l.colors[y]},function(e){var l=e.theme,y=e.color;return l.colors[y]},function(e){var l=e.theme,y=e.padding;return Object(S.a)("padding",y,l)},function(e){var l=e.theme,y=e.paddingTop;return Object(S.a)("padding-top",y,l)},function(e){var l=e.theme,y=e.paddingRight;return Object(S.a)("padding-right",y,l)},function(e){var l=e.theme,y=e.paddingBottom;return Object(S.a)("padding-bottom",y,l)},function(e){var l=e.theme,y=e.paddingLeft;return Object(S.a)("padding-left",y,l)},function(e){var l=e.theme,y=e.marginLeft;return Object(S.a)("margin-left",y,l)},function(e){var l=e.theme,y=e.marginRight;return Object(S.a)("margin-right",y,l)},function(e){var l=e.theme,y=e.marginTop;return Object(S.a)("margin-top",y,l)},function(e){var l=e.theme,y=e.marginBottom;return Object(S.a)("margin-bottom",y,l)},function(e){var l=e.theme;return e.hiddenS?"".concat(l.mediaQueries.tablet," { display: none; }"):void 0},function(e){var l=e.theme;return e.hiddenXS?"".concat(l.mediaQueries.mobile," { display: none; }"):void 0},function(e){var l=e.theme,y=e.hasRadius,C=e.borderRadius;return y?l.borderRadius:C},function(e){return e.borderStyle},function(e){return e.borderWidth},function(e){var l=e.borderColor;return e.theme.colors[l]},function(e){var l=e.theme,y=e.borderColor,C=e.borderStyle,F=e.borderWidth;if(y&&!C&&!F)return"1px solid ".concat(l.colors[y])},function(e){var l=e.theme,y=e.shadow;return l.shadows[y]},function(e){return e.pointerEvents},function(e){var l=e._hover,y=e.theme;return l?l(y):void 0},function(e){return e.display},function(e){return e.position},function(e){var l=e.left;return e.theme.spaces[l]||l},function(e){var l=e.right;return e.theme.spaces[l]||l},function(e){var l=e.top;return e.theme.spaces[l]||l},function(e){var l=e.bottom;return e.theme.spaces[l]||l},function(e){return e.zIndex},function(e){return e.overflow},function(e){return e.cursor},function(e){var l=e.width;return e.theme.spaces[l]||l},function(e){var l=e.maxWidth;return e.theme.spaces[l]||l},function(e){var l=e.minWidth;return e.theme.spaces[l]||l},function(e){var l=e.height;return e.theme.spaces[l]||l},function(e){var l=e.maxHeight;return e.theme.spaces[l]||l},function(e){var l=e.minHeight;return e.theme.spaces[l]||l},function(e){return e.transition},function(e){return e.transform},function(e){return e.animation},function(e){return e.shrink},function(e){return e.grow},function(e){return e.basis},function(e){return e.flex},function(e){return e.textAlign},function(e){return e.textTransform},function(e){return e.lineHeight},function(e){return e.cursor});D.displayName="Box",D.defaultProps={background:void 0,borderColor:void 0,color:void 0,hiddenS:!1,hiddenXS:!1,padding:void 0,paddingTop:void 0,paddingRight:void 0,paddingBottom:void 0,paddingLeft:void 0,hasRadius:!1,shadow:void 0,children:null,shrink:void 0,grow:void 0,basis:void 0,flex:void 0,_hover:function(){}},D.propTypes={_hover:r.a.func,background:r.a.string,basis:r.a.oneOfType([r.a.string,r.a.string]),borderColor:r.a.string,children:r.a.oneOfType([r.a.node,r.a.string]),color:r.a.string,flex:r.a.oneOfType([r.a.string,r.a.string]),grow:r.a.oneOfType([r.a.string,r.a.string]),hasRadius:r.a.bool,hiddenS:r.a.bool,hiddenXS:r.a.bool,padding:r.a.oneOfType([r.a.number,r.a.arrayOf(r.a.number)]),paddingBottom:r.a.oneOfType([r.a.number,r.a.arrayOf(r.a.number)]),paddingLeft:r.a.oneOfType([r.a.number,r.a.arrayOf(r.a.number)]),paddingRight:r.a.oneOfType([r.a.number,r.a.arrayOf(r.a.number)]),paddingTop:r.a.oneOfType([r.a.number,r.a.arrayOf(r.a.number)]),shadow:r.a.string,shrink:r.a.oneOfType([r.a.string,r.a.string])}},7:function(o,m,n){"use strict";var d=n(10),i=n.n(d),E=n(13),v=n.n(E);m.a=function(r,L,P){var S=L;if(Array.isArray(L)||v()(L)!=="object"||(S=[L==null?void 0:L.desktop,L==null?void 0:L.tablet,L==null?void 0:L.mobile]),S!==void 0){if(Array.isArray(S)){var h=S,D=i()(h,3),e=D[0],l=D[1],y=D[2],C="".concat(r,": ").concat(P.spaces[e],";");return l!==void 0&&(C+="".concat(P.mediaQueries.tablet,`{
          `).concat(r,": ").concat(P.spaces[l],`;
        }`)),y!==void 0&&(C+="".concat(P.mediaQueries.mobile,`{
          `).concat(r,": ").concat(P.spaces[y],`;
        }`)),C}var F=P.spaces[S]||S;return"".concat(r,": ").concat(F,";")}}}})})},31701:(U,Q,g)=>{"use strict";g.r(Q),g.d(Q,{default:()=>Ye});var t=g(53547),M=g(68547),o=g(45697),m=g.n(o),n=g(97132),d=g(64459),i=g(80117),E=g(35395),v=g(89326),r=g.n(v),L=g(26485),P=g.n(L),S=g(47235),h=g(68798),D=g(80831),e=g(22754),l=g.n(e),y=g(68991),C=g(1738),F=g(40264),w=g(94117),H=g(97833),R=g(33483),V=g(53209);const I=(0,V.Ry)().shape({code:(0,V.Z_)().required(),displayName:(0,V.Z_)().max(50,"Settings.locales.modal.locales.displayName.error").required(M.translatedErrors.required)});var N=g(37424),G=g(70437),Z=(s,c,a)=>new Promise((u,p)=>{var b=f=>{try{x(a.next(f))}catch(T){p(T)}},O=f=>{try{x(a.throw(f))}catch(T){p(T)}},x=f=>f.done?u(f.value):Promise.resolve(f.value).then(b,O);x((a=a.apply(s,c)).next())});const me=(s,c,a)=>Z(void 0,null,function*(){try{const u=yield(0,M.request)(`/i18n/locales/${s}`,{method:"PUT",body:c});return a({type:"success",message:{id:(0,h.O)("Settings.locales.modal.edit.success")}}),u}catch(u){return a({type:"warning",message:{id:"notification.error"}}),null}}),fe=()=>{const[s,c]=(0,t.useState)(!1),a=(0,N.I0)(),u=(0,M.useNotification)();return{isEditing:s,editLocale:(b,O)=>Z(void 0,null,function*(){c(!0);const x=yield me(b,O,u);a({type:G.OT,editedLocale:x}),c(!1)})}};var z=g(39272),q=g(99136),_=g(2632);const ee=({locale:s})=>{const{formatMessage:c}=(0,n.useIntl)(),{values:a,handleChange:u,errors:p}=(0,D.useFormikContext)();return t.createElement(z.Grid,{gap:4},t.createElement(z.GridItem,{col:6},t.createElement(_.Select,{label:c({id:(0,h.O)("Settings.locales.modal.locales.label"),defaultMessage:"Locales"}),value:s.code,disabled:!0},t.createElement(_.Option,{value:s.code},s.name))),t.createElement(z.GridItem,{col:6},t.createElement(q.TextInput,{name:"displayName",label:c({id:(0,h.O)("Settings.locales.modal.locales.displayName"),defaultMessage:"Locale display name"}),hint:c({id:(0,h.O)("Settings.locales.modal.locales.displayName.description"),defaultMessage:"Locale will be displayed under that name in the administration panel"}),error:p.displayName?c({id:(0,h.O)("Settings.locales.modal.locales.displayName.error"),defaultMessage:"The locale display name can only be less than 50 characters."}):void 0,value:a.displayName,onChange:u})))},pe=ee;ee.propTypes={locale:m().shape({id:m().number.isRequired,name:m().string.isRequired,code:m().string.isRequired,isDefault:m().bool.isRequired}).isRequired};var te=g(43499);const ne=({isDefaultLocale:s})=>{const{values:c,setFieldValue:a}=(0,D.useFormikContext)(),{formatMessage:u}=(0,n.useIntl)();return t.createElement(te.Checkbox,{name:"isDefault",hint:u({id:(0,h.O)("Settings.locales.modal.advanced.setAsDefault.hint"),defaultMessage:"One default locale is required, change it by selecting another one"}),onChange:()=>a("isDefault",!c.isDefault),value:c.isDefault,disabled:s},u({id:(0,h.O)("Settings.locales.modal.advanced.setAsDefault"),defaultMessage:"Set as default locale"}))};ne.propTypes={isDefaultLocale:m().bool.isRequired};const ge=ne;var ve=(s,c,a)=>new Promise((u,p)=>{var b=f=>{try{x(a.next(f))}catch(T){p(T)}},O=f=>{try{x(a.throw(f))}catch(T){p(T)}},x=f=>f.done?u(f.value):Promise.resolve(f.value).then(b,O);x((a=a.apply(s,c)).next())});const $=({locale:s,onClose:c})=>{const{refetchPermissions:a}=(0,M.useRBACProvider)(),{isEditing:u,editLocale:p}=fe(),{formatMessage:b}=(0,n.useIntl)(),O=x=>ve(void 0,[x],function*({displayName:f,isDefault:T}){yield p(s.id,{name:f,isDefault:T}),yield a()});return t.createElement(y.ModalLayout,{onClose:c,labelledBy:"edit-locale-title"},t.createElement(D.Formik,{initialValues:{code:s==null?void 0:s.code,displayName:(s==null?void 0:s.name)||"",isDefault:Boolean(s==null?void 0:s.isDefault)},onSubmit:O,validationSchema:I},t.createElement(M.Form,null,t.createElement(y.ModalHeader,null,t.createElement(R.Typography,{fontWeight:"bold",textColor:"neutral800",as:"h2",id:"edit-locale-title"},b({id:(0,h.O)("Settings.list.actions.edit"),defaultMessage:"Edit a locale"}))),t.createElement(y.ModalBody,null,t.createElement(C.TabGroup,{label:b({id:(0,h.O)("Settings.locales.modal.title"),defaultMessage:"Configurations"}),id:"tabs",variant:"simple"},t.createElement(F.Flex,{justifyContent:"space-between"},t.createElement(R.Typography,{as:"h2"},b({id:(0,h.O)("Settings.locales.modal.title"),defaultMessage:"Configurations"})),t.createElement(C.Tabs,null,t.createElement(C.Tab,null,b({id:(0,h.O)("Settings.locales.modal.base"),defaultMessage:"Base settings"})),t.createElement(C.Tab,null,b({id:(0,h.O)("Settings.locales.modal.advanced"),defaultMessage:"Advanced settings"})))),t.createElement(H.Divider,null),t.createElement(w.Box,{paddingTop:7,paddingBottom:7},t.createElement(C.TabPanels,null,t.createElement(C.TabPanel,null,t.createElement(pe,{locale:s})),t.createElement(C.TabPanel,null,t.createElement(ge,{isDefaultLocale:Boolean(s&&s.isDefault)})))))),t.createElement(y.ModalFooter,{startActions:t.createElement(d.Button,{variant:"tertiary",onClick:c},b({id:"app.components.Button.cancel"})),endActions:t.createElement(d.Button,{type:"submit",startIcon:t.createElement(l(),null),disabled:u},b({id:"global.save"}))}))))};$.defaultProps={locale:void 0},$.propTypes={locale:m().shape({id:m().number.isRequired,name:m().string.isRequired,code:m().string.isRequired,isDefault:m().bool.isRequired}),onClose:m().func.isRequired};const ye=$;var ae=(s,c,a)=>new Promise((u,p)=>{var b=f=>{try{x(a.next(f))}catch(T){p(T)}},O=f=>{try{x(a.throw(f))}catch(T){p(T)}},x=f=>f.done?u(f.value):Promise.resolve(f.value).then(b,O);x((a=a.apply(s,c)).next())});const he=(s,c)=>ae(void 0,null,function*(){try{const a=yield(0,M.request)(`/i18n/locales/${s}`,{method:"DELETE"});return c({type:"success",message:{id:(0,h.O)("Settings.locales.modal.delete.success")}}),a}catch(a){return c({type:"warning",message:{id:"notification.error"}}),a}}),be=()=>{const[s,c]=(0,t.useState)(!1),a=(0,N.I0)(),u=(0,M.useNotification)();return{isDeleting:s,deleteLocale:b=>ae(void 0,null,function*(){c(!0),yield he(b,u),a({type:G.HC,id:b}),c(!1)})}},k=({localeToDelete:s,onClose:c})=>{const{isDeleting:a,deleteLocale:u}=be(),p=Boolean(s),b=()=>u(s.id).then(c);return t.createElement(M.ConfirmDialog,{isConfirmButtonLoading:a,onConfirm:b,onToggleDialog:c,isOpen:p})};k.defaultProps={localeToDelete:void 0},k.propTypes={localeToDelete:m().shape({id:m().number.isRequired}),onClose:m().func.isRequired};const Ee=k;var xe=g(27361),Oe=g.n(xe),oe=(s,c,a)=>new Promise((u,p)=>{var b=f=>{try{x(a.next(f))}catch(T){p(T)}},O=f=>{try{x(a.throw(f))}catch(T){p(T)}},x=f=>f.done?u(f.value):Promise.resolve(f.value).then(b,O);x((a=a.apply(s,c)).next())});const Te=(s,c)=>oe(void 0,[s,c],function*({code:a,name:u,isDefault:p},b){const O=yield(0,M.request)("/i18n/locales",{method:"POST",body:{name:u,code:a,isDefault:p}});return b({type:"success",message:{id:(0,h.O)("Settings.locales.modal.create.success")}}),O}),Le=()=>{const[s,c]=(0,t.useState)(!1),a=(0,N.I0)(),u=(0,M.useNotification)();return{isAdding:s,addLocale:b=>oe(void 0,null,function*(){c(!0);try{const O=yield Te(b,u);a({type:G.xz,newLocale:O})}catch(O){const x=Oe()(O,"response.payload.message",null);throw x&&x.includes("already exists")?u({type:"warning",message:{id:(0,h.O)("Settings.locales.modal.create.alreadyExist")}}):u({type:"warning",message:{id:"notification.error"}}),O}finally{c(!1)}})}};var le=g(88252),Se=g(23724),Ce=g(67422),Me=(s,c,a)=>new Promise((u,p)=>{var b=f=>{try{x(a.next(f))}catch(T){p(T)}},O=f=>{try{x(a.throw(f))}catch(T){p(T)}},x=f=>f.done?u(f.value):Promise.resolve(f.value).then(b,O);x((a=a.apply(s,c)).next())});const Pe=s=>Me(void 0,null,function*(){try{return yield(0,M.request)("/i18n/iso-locales",{method:"GET"})}catch(c){return s({type:"warning",message:{id:"notification.error"}}),[]}}),De=()=>{const{formatMessage:s}=(0,n.useIntl)(),{notifyStatus:c}=(0,Ce.useNotifyAT)(),a=(0,M.useNotification)(),{isLoading:u,data:p}=(0,Se.useQuery)("default-locales",()=>Pe(a).then(b=>(c(s({id:(0,h.O)("Settings.locales.modal.locales.loaded"),defaultMessage:"The locales have been successfully loaded."})),b)));return{defaultLocales:p,isLoading:u}},Y=t.memo(({value:s,onClear:c,onLocaleChange:a,error:u})=>{const{formatMessage:p}=(0,n.useIntl)(),{defaultLocales:b,isLoading:O}=De(),{locales:x}=(0,S.Z)(),f=(b||[]).map(A=>({label:A.name,value:A.code})).filter(({value:A})=>{const j=x.find(({code:W})=>W===A);return!j||j.code===s}),T=s||"";return t.createElement(le.Combobox,{"aria-busy":O,error:u,label:p({id:(0,h.O)("Settings.locales.modal.locales.label"),defaultMessage:"Locales"}),value:T,onClear:s?c:void 0,onChange:A=>{const j=f.find(W=>W.value===A);j&&a({code:j.value,displayName:j.label})},placeholder:p({id:"components.placeholder.select",defaultMessage:"Select"})},f.map(A=>t.createElement(le.ComboboxOption,{value:A.value,key:A.value},A.label)))});Y.defaultProps={error:void 0,value:void 0,onClear:()=>{},onLocaleChange:()=>{}},Y.propTypes={error:m().string,onClear:m().func,onLocaleChange:m().func,value:m().string};const Be=Y,Re=()=>{const{formatMessage:s}=(0,n.useIntl)(),{values:c,handleChange:a,setFieldValue:u,errors:p}=(0,D.useFormikContext)(),b=(0,t.useCallback)(x=>{u("displayName",x.displayName),u("code",x.code)},[u]),O=(0,t.useCallback)(()=>{u("displayName",""),u("code","")},[u]);return t.createElement(z.Grid,{gap:4},t.createElement(z.GridItem,{col:6},t.createElement(Be,{error:p.code,value:c.code,onLocaleChange:b,onClear:O})),t.createElement(z.GridItem,{col:6},t.createElement(q.TextInput,{name:"displayName",label:s({id:(0,h.O)("Settings.locales.modal.locales.displayName"),defaultMessage:"Locale display name"}),hint:s({id:(0,h.O)("Settings.locales.modal.locales.displayName.description"),defaultMessage:"Locale will be displayed under that name in the administration panel"}),error:p.displayName?s({id:(0,h.O)("Settings.locales.modal.locales.displayName.error"),defaultMessage:"The locale display name can only be less than 50 characters."}):void 0,value:c.displayName,onChange:a})))},Ae=()=>{const{values:s,setFieldValue:c}=(0,D.useFormikContext)(),{formatMessage:a}=(0,n.useIntl)();return t.createElement(te.Checkbox,{hint:a({id:(0,h.O)("Settings.locales.modal.advanced.setAsDefault.hint"),defaultMessage:"One default locale is required, change it by selecting another one"}),onChange:()=>c("isDefault",!s.isDefault),value:s.isDefault},a({id:(0,h.O)("Settings.locales.modal.advanced.setAsDefault"),defaultMessage:"Set as default locale"}))};var Ie=(s,c,a)=>new Promise((u,p)=>{var b=f=>{try{x(a.next(f))}catch(T){p(T)}},O=f=>{try{x(a.throw(f))}catch(T){p(T)}},x=f=>f.done?u(f.value):Promise.resolve(f.value).then(b,O);x((a=a.apply(s,c)).next())});const Fe={code:"",displayName:"",isDefault:!1},re=({onClose:s})=>{const{isAdding:c,addLocale:a}=Le(),{formatMessage:u}=(0,n.useIntl)(),{refetchPermissions:p}=(0,M.useRBACProvider)(),b=O=>Ie(void 0,null,function*(){yield a({code:O.code,name:O.displayName,isDefault:O.isDefault}),yield p()});return t.createElement(y.ModalLayout,{onClose:s,labelledBy:"add-locale-title"},t.createElement(D.Formik,{initialValues:Fe,onSubmit:b,validationSchema:I,validateOnChange:!1},t.createElement(M.Form,null,t.createElement(y.ModalHeader,null,t.createElement(R.Typography,{fontWeight:"bold",textColor:"neutral800",as:"h2",id:"add-locale-title"},u({id:(0,h.O)("Settings.list.actions.add"),defaultMessage:"Add new locale"}))),t.createElement(y.ModalBody,null,t.createElement(C.TabGroup,{label:u({id:(0,h.O)("Settings.locales.modal.title"),defaultMessage:"Configurations"}),id:"tabs",variant:"simple"},t.createElement(F.Flex,{justifyContent:"space-between"},t.createElement(R.Typography,{as:"h2",variant:"beta"},u({id:(0,h.O)("Settings.locales.modal.title"),defaultMessage:"Configurations"})),t.createElement(C.Tabs,null,t.createElement(C.Tab,null,u({id:(0,h.O)("Settings.locales.modal.base"),defaultMessage:"Base settings"})),t.createElement(C.Tab,null,u({id:(0,h.O)("Settings.locales.modal.advanced"),defaultMessage:"Advanced settings"})))),t.createElement(H.Divider,null),t.createElement(w.Box,{paddingTop:7,paddingBottom:7},t.createElement(C.TabPanels,null,t.createElement(C.TabPanel,null,t.createElement(Re,null)),t.createElement(C.TabPanel,null,t.createElement(Ae,null)))))),t.createElement(y.ModalFooter,{startActions:t.createElement(d.Button,{variant:"tertiary",onClick:s},u({id:"app.components.Button.cancel",defaultMessage:"Cancel"})),endActions:t.createElement(d.Button,{type:"submit",startIcon:t.createElement(l(),null),disabled:c},u({id:"global.save",defaultMessage:"Save"}))}))))};re.propTypes={onClose:m().func.isRequired};const je=re;var se=g(49549),Ne=g(9524),we=g(19631),B=g(43546),ze=g(56204),He=g.n(ze),Ve=g(62982),Ge=g.n(Ve),We=Object.defineProperty,ie=Object.getOwnPropertySymbols,Ue=Object.prototype.hasOwnProperty,Qe=Object.prototype.propertyIsEnumerable,ce=(s,c,a)=>c in s?We(s,c,{enumerable:!0,configurable:!0,writable:!0,value:a}):s[c]=a,de=(s,c)=>{for(var a in c||(c={}))Ue.call(c,a)&&ce(s,a,c[a]);if(ie)for(var a of ie(c))Qe.call(c,a)&&ce(s,a,c[a]);return s};const J=({locales:s,onDeleteLocale:c,onEditLocale:a})=>{const{formatMessage:u}=(0,n.useIntl)();return t.createElement(B.Table,{colCount:4,rowCount:s.length+1},t.createElement(B.Thead,null,t.createElement(B.Tr,null,t.createElement(B.Th,null,t.createElement(R.Typography,{variant:"sigma",textColor:"neutral600"},u({id:(0,h.O)("Settings.locales.row.id")}))),t.createElement(B.Th,null,t.createElement(R.Typography,{variant:"sigma",textColor:"neutral600"},u({id:(0,h.O)("Settings.locales.row.displayName")}))),t.createElement(B.Th,null,t.createElement(R.Typography,{variant:"sigma",textColor:"neutral600"},u({id:(0,h.O)("Settings.locales.row.default-locale")}))),t.createElement(B.Th,null,t.createElement(we.VisuallyHidden,null,"Actions")))),t.createElement(B.Tbody,null,s.map(p=>t.createElement(B.Tr,de({key:p.id},(0,M.onRowClick)({fn:()=>a(p),condition:a})),t.createElement(B.Td,null,t.createElement(R.Typography,{textColor:"neutral800"},p.id)),t.createElement(B.Td,null,t.createElement(R.Typography,{textColor:"neutral800"},p.name)),t.createElement(B.Td,null,t.createElement(R.Typography,{textColor:"neutral800"},p.isDefault?u({id:(0,h.O)("Settings.locales.default")}):null)),t.createElement(B.Td,null,t.createElement(Ne.Stack,de({horizontal:!0,spacing:1,style:{justifyContent:"flex-end"}},M.stopPropagation),a&&t.createElement(se.IconButton,{onClick:()=>a(p),label:u({id:(0,h.O)("Settings.list.actions.edit")}),icon:t.createElement(He(),null),noBorder:!0}),c&&!p.isDefault&&t.createElement(se.IconButton,{onClick:()=>c(p),label:u({id:(0,h.O)("Settings.list.actions.delete")}),icon:t.createElement(Ge(),null),noBorder:!0})))))))};J.defaultProps={locales:[],onDeleteLocale:void 0,onEditLocale:void 0},J.propTypes={locales:m().array,onDeleteLocale:m().func,onEditLocale:m().func};const Ze=J,K=({canUpdateLocale:s,canDeleteLocale:c,onToggleCreateModal:a,isCreating:u})=>{const[p,b]=(0,t.useState)(),[O,x]=(0,t.useState)(),{locales:f}=(0,S.Z)(),{formatMessage:T}=(0,n.useIntl)();(0,M.useFocusWhenNavigate)();const A=()=>b(void 0),j=c?b:void 0,W=()=>x(void 0),Je=s?x:void 0;return t.createElement(i.Main,{tabIndex:-1},t.createElement(E.HeaderLayout,{primaryAction:t.createElement(d.Button,{startIcon:t.createElement(r(),null),onClick:a,size:"L"},T({id:(0,h.O)("Settings.list.actions.add")})),title:T({id:(0,h.O)("plugin.name")}),subtitle:T({id:(0,h.O)("Settings.list.description")})}),t.createElement(E.ContentLayout,null,(f==null?void 0:f.length)>0?t.createElement(Ze,{locales:f,onDeleteLocale:j,onEditLocale:Je}):t.createElement(E.EmptyStateLayout,{icon:t.createElement(P(),{width:void 0,height:void 0}),content:T({id:(0,h.O)("Settings.list.empty.title")}),action:a?t.createElement(d.Button,{variant:"secondary",startIcon:t.createElement(r(),null),onClick:a},T({id:(0,h.O)("Settings.list.actions.add")})):null})),u&&t.createElement(je,{onClose:a}),O&&t.createElement(ye,{onClose:W,locale:O}),t.createElement(Ee,{localeToDelete:p,onClose:A}))};K.defaultProps={onToggleCreateModal:void 0},K.propTypes={canUpdateLocale:m().bool.isRequired,canDeleteLocale:m().bool.isRequired,onToggleCreateModal:m().func,isCreating:m().bool.isRequired};const Xe=K,ue=({canReadLocale:s,canCreateLocale:c,canDeleteLocale:a,canUpdateLocale:u})=>{const[p,b]=(0,t.useState)(!1),O=c?()=>b(x=>!x):void 0;return s?t.createElement(Xe,{canUpdateLocale:u,canDeleteLocale:a,onToggleCreateModal:O,isCreating:p}):null};ue.propTypes={canReadLocale:m().bool.isRequired,canCreateLocale:m().bool.isRequired,canUpdateLocale:m().bool.isRequired,canDeleteLocale:m().bool.isRequired};const $e=ue;var ke=g(97473);const Ye=()=>{const{isLoading:s,allowedActions:{canRead:c,canUpdate:a,canCreate:u,canDelete:p}}=(0,M.useRBAC)(ke.Z);return s?null:t.createElement($e,{canReadLocale:c,canCreateLocale:u,canUpdateLocale:a,canDeleteLocale:p})}}}]);
