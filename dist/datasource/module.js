/*! For license information please see module.js.LICENSE.txt */
define(["react","@grafana/ui","@grafana/runtime","@grafana/data","lodash"],(function(e,t,n,r,a){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var a=t[r]={i:r,l:!1,exports:{}};return e[r].call(a.exports,a,a.exports,n),a.l=!0,a.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)n.d(r,a,function(t){return e[t]}.bind(null,a));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/",n(n.s=54)}({0:function(t,n){t.exports=e},12:function(e,t){e.exports=a},13:function(e,t,n){"use strict";var r=n(2),a=n(0),o=n.n(a),i=n(3),c=n(6),u=function(e){var t=e.info,n=c.config.datasources[t.grafanaName];return n?o.a.createElement("div",{className:"add-data-source-item",onClick:function(){"synthetic-monitoring-datasource"===(null==n?void 0:n.type)?Object(c.getLocationSrv)().update({partial:!1,path:"a/grafana-synthetic-monitoring-app/"}):Object(c.getLocationSrv)().update({partial:!1,path:"datasources/edit/"+(null==n?void 0:n.id)+"/",query:{}})}},o.a.createElement("img",{className:"add-data-source-item-logo",src:n.meta.info.logos.small}),o.a.createElement("div",{className:"add-data-source-item-text-wrapper"},o.a.createElement("span",{className:"add-data-source-item-text"},n.name),o.a.createElement("span",{className:"add-data-source-item-desc"},n.type))):o.a.createElement(i.Spinner,null)},s=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return Object(r.c)(t,e),t.prototype.render=function(){var e=this.props.settings;return e?o.a.createElement("div",null,o.a.createElement("h2",null,"Linked Data Sources"),o.a.createElement(i.Container,{margin:"sm"},o.a.createElement(u,{info:e.metrics}),o.a.createElement(u,{info:e.logs}))):o.a.createElement("div",null,"Loading...")},t}(a.PureComponent);n.d(t,"a",(function(){return s}))},2:function(e,t,n){"use strict";n.d(t,"c",(function(){return a})),n.d(t,"a",(function(){return o})),n.d(t,"g",(function(){return i})),n.d(t,"b",(function(){return c})),n.d(t,"d",(function(){return u})),n.d(t,"i",(function(){return s})),n.d(t,"f",(function(){return l})),n.d(t,"h",(function(){return d})),n.d(t,"e",(function(){return f}));var r=function(e,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)};function a(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}var o=function(){return(o=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)};function i(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n}function c(e,t,n,r){return new(n||(n=Promise))((function(a,o){function i(e){try{u(r.next(e))}catch(e){o(e)}}function c(e){try{u(r.throw(e))}catch(e){o(e)}}function u(e){var t;e.done?a(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,c)}u((r=r.apply(e,t||[])).next())}))}function u(e,t){var n,r,a,o,i={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return o={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function c(o){return function(c){return function(o){if(n)throw new TypeError("Generator is already executing.");for(;i;)try{if(n=1,r&&(a=2&o[0]?r.return:o[0]?r.throw||((a=r.return)&&a.call(r),0):r.next)&&!(a=a.call(r,o[1])).done)return a;switch(r=0,a&&(o=[2&o[0],a.value]),o[0]){case 0:case 1:a=o;break;case 4:return i.label++,{value:o[1],done:!1};case 5:i.label++,r=o[1],o=[0];continue;case 7:o=i.ops.pop(),i.trys.pop();continue;default:if(!(a=i.trys,(a=a.length>0&&a[a.length-1])||6!==o[0]&&2!==o[0])){i=0;continue}if(3===o[0]&&(!a||o[1]>a[0]&&o[1]<a[3])){i.label=o[1];break}if(6===o[0]&&i.label<a[1]){i.label=a[1],a=o;break}if(a&&i.label<a[2]){i.label=a[2],i.ops.push(o);break}a[2]&&i.ops.pop(),i.trys.pop();continue}o=t.call(e,i)}catch(e){o=[6,e],r=0}finally{n=a=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,c])}}}function s(e){var t="function"==typeof Symbol&&Symbol.iterator,n=t&&e[t],r=0;if(n)return n.call(e);if(e&&"number"==typeof e.length)return{next:function(){return e&&r>=e.length&&(e=void 0),{value:e&&e[r++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}function l(e,t){var n="function"==typeof Symbol&&e[Symbol.iterator];if(!n)return e;var r,a,o=n.call(e),i=[];try{for(;(void 0===t||t-- >0)&&!(r=o.next()).done;)i.push(r.value)}catch(e){a={error:e}}finally{try{r&&!r.done&&(n=o.return)&&n.call(o)}finally{if(a)throw a.error}}return i}function d(){for(var e=[],t=0;t<arguments.length;t++)e=e.concat(l(arguments[t]));return e}function f(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e}},3:function(e,n){e.exports=t},54:function(e,t,n){"use strict";n.r(t);var r,a=n(7),o=n(2);!function(e){e.Probes="probes",e.Checks="checks"}(r||(r={}));var i={queryType:r.Probes},c=n(6),u=function(e){function t(t){var n=e.call(this,t)||this;return n.instanceSettings=t,n}return Object(o.c)(t,e),t.prototype.getMetricsDS=function(){return c.config.datasources[this.instanceSettings.jsonData.metrics.grafanaName]},t.prototype.query=function(e){return Object(o.b)(this,void 0,Promise,(function(){var t,n,i,c,u,s,l,d,f,p,h;return Object(o.d)(this,(function(b){switch(b.label){case 0:t=[],b.label=1;case 1:b.trys.push([1,8,9,10]),n=Object(o.i)(e.targets),i=n.next(),b.label=2;case 2:return i.done?[3,7]:(c=i.value).queryType!==r.Probes?[3,4]:[4,this.listProbes()];case 3:return u=b.sent(),(l=new a.ArrayDataFrame(u)).setFieldType("onlineChange",a.FieldType.time,(function(e){return 1e3*e})),l.setFieldType("created",a.FieldType.time,(function(e){return 1e3*e})),l.setFieldType("modified",a.FieldType.time,(function(e){return 1e3*e})),l.refId=c.refId,t.push(l),[3,6];case 4:return c.queryType!==r.Checks?[3,6]:[4,this.listChecks()];case 5:s=b.sent(),(l=new a.ArrayDataFrame(s)).setFieldType("created",a.FieldType.time,(function(e){return 1e3*e})),l.setFieldType("modified",a.FieldType.time,(function(e){return 1e3*e})),l.refId=c.refId,d=Object(o.a)(Object(o.a)({},l),{fields:l.fields,length:s.length}),t.push(d),b.label=6;case 6:return i=n.next(),[3,2];case 7:return[3,10];case 8:return f=b.sent(),p={error:f},[3,10];case 9:try{i&&!i.done&&(h=n.return)&&h.call(n)}finally{if(p)throw p.error}return[7];case 10:return[2,{data:t}]}}))}))},t.prototype.listProbes=function(){return Object(o.b)(this,void 0,Promise,(function(){return Object(o.d)(this,(function(e){return[2,Object(c.getBackendSrv)().datasourceRequest({method:"GET",url:this.instanceSettings.url+"/sm/probe/list"}).then((function(e){return e.data}))]}))}))},t.prototype.addProbe=function(e){return Object(o.b)(this,void 0,Promise,(function(){return Object(o.d)(this,(function(t){return[2,Object(c.getBackendSrv)().datasourceRequest({method:"POST",url:this.instanceSettings.url+"/sm/probe/add",data:e}).then((function(e){return e.data}))]}))}))},t.prototype.deleteProbe=function(e){return Object(o.b)(this,void 0,Promise,(function(){return Object(o.d)(this,(function(t){return[2,Object(c.getBackendSrv)().datasourceRequest({method:"DELETE",url:this.instanceSettings.url+"/sm/probe/delete/"+e}).then((function(e){return e.data}))]}))}))},t.prototype.updateProbe=function(e){return Object(o.b)(this,void 0,Promise,(function(){return Object(o.d)(this,(function(t){return[2,Object(c.getBackendSrv)().datasourceRequest({method:"POST",url:this.instanceSettings.url+"/sm/probe/update",data:e}).then((function(e){return e.data}))]}))}))},t.prototype.resetProbeToken=function(e){return Object(o.b)(this,void 0,Promise,(function(){return Object(o.d)(this,(function(t){return[2,Object(c.getBackendSrv)().datasourceRequest({method:"POST",url:this.instanceSettings.url+"/sm/probe/update?reset-token=true",data:e}).then((function(e){return e.data}))]}))}))},t.prototype.listChecks=function(){return Object(o.b)(this,void 0,Promise,(function(){return Object(o.d)(this,(function(e){return[2,Object(c.getBackendSrv)().datasourceRequest({method:"GET",url:this.instanceSettings.url+"/sm/check/list"}).then((function(e){return Array.isArray(e.data)?e.data:[]}))]}))}))},t.prototype.addCheck=function(e){return Object(o.b)(this,void 0,Promise,(function(){return Object(o.d)(this,(function(t){return[2,Object(c.getBackendSrv)().datasourceRequest({method:"POST",url:this.instanceSettings.url+"/sm/check/add",data:e}).then((function(e){return e.data}))]}))}))},t.prototype.deleteCheck=function(e){return Object(o.b)(this,void 0,Promise,(function(){return Object(o.d)(this,(function(t){return[2,Object(c.getBackendSrv)().datasourceRequest({method:"DELETE",url:this.instanceSettings.url+"/sm/check/delete/"+e}).then((function(e){return e.data}))]}))}))},t.prototype.updateCheck=function(e){return Object(o.b)(this,void 0,Promise,(function(){return Object(o.d)(this,(function(t){return[2,Object(c.getBackendSrv)().datasourceRequest({method:"POST",url:this.instanceSettings.url+"/sm/check/update",data:e}).then((function(e){return e.data}))]}))}))},t.prototype.getTenant=function(){return Object(o.b)(this,void 0,Promise,(function(){return Object(o.d)(this,(function(e){return[2,Object(c.getBackendSrv)().datasourceRequest({method:"GET",url:this.instanceSettings.url+"/sm/tenant"}).then((function(e){return e.data}))]}))}))},t.prototype.disableTenant=function(){return Object(o.b)(this,void 0,Promise,(function(){var e;return Object(o.d)(this,(function(t){switch(t.label){case 0:return[4,this.getTenant()];case 1:return e=t.sent(),[2,Object(c.getBackendSrv)().datasourceRequest({method:"POST",url:this.instanceSettings.url+"/sm/tenant/update",data:Object(o.a)(Object(o.a)({},e),{status:1})}).then((function(e){return e.data}))]}}))}))},t.prototype.normalizeURL=function(e){return e.startsWith("http://")||e.startsWith("https://")?e:"https://"+e},t.prototype.registerInit=function(e,t){return Object(o.b)(this,void 0,Promise,(function(){var n,r;return Object(o.d)(this,(function(a){switch(a.label){case 0:return n=Object(c.getBackendSrv)(),r=Object(o.a)(Object(o.a)({},this.instanceSettings),{jsonData:{apiHost:this.normalizeURL(e)},access:"proxy"}),[4,n.put("api/datasources/"+this.instanceSettings.id,r)];case 1:return a.sent(),[2,n.datasourceRequest({method:"POST",url:this.instanceSettings.url+"/sm/register/init",data:{apiToken:t},headers:{"X-Grafana-NoCache":"true"}}).then((function(e){return e.data}))]}}))}))},t.prototype.onOptionsChange=function(e){return Object(o.b)(this,void 0,void 0,(function(){var t;return Object(o.d)(this,(function(n){switch(n.label){case 0:return t=Object(o.a)(Object(o.a)({},this.instanceSettings),{jsonData:e,access:"proxy"}),[4,Object(c.getBackendSrv)().put("api/datasources/"+this.instanceSettings.id,t)];case 1:return n.sent(),[2]}}))}))},t.prototype.registerSave=function(e,t,n){return Object(o.b)(this,void 0,Promise,(function(){var r;return Object(o.d)(this,(function(a){switch(a.label){case 0:return r=Object(o.a)(Object(o.a)({},this.instanceSettings),{jsonData:t,secureJsonData:{accessToken:n},access:"proxy"}),[4,Object(c.getBackendSrv)().put("api/datasources/"+this.instanceSettings.id,r)];case 1:return a.sent(),[4,Object(c.getBackendSrv)().datasourceRequest({method:"POST",url:this.instanceSettings.url+"/sm/register/save",headers:{"X-Grafana-NoCache":"true"},data:{apiToken:e,metricsInstanceId:t.metrics.hostedId,logsInstanceId:t.logs.hostedId}})];case 2:return[2,a.sent()]}}))}))},t.prototype.getViewerToken=function(e,t){return Object(o.b)(this,void 0,Promise,(function(){return Object(o.d)(this,(function(n){return[2,Object(c.getBackendSrv)().datasourceRequest({method:"POST",url:this.instanceSettings.url+"/sm/register/viewer-token",data:{apiToken:e,id:t.id,type:t.type}}).then((function(e){var t;return null===(t=e.data)||void 0===t?void 0:t.token}))]}))}))},t.prototype.testDatasource=function(){return Object(o.b)(this,void 0,void 0,(function(){var e;return Object(o.d)(this,(function(t){switch(t.label){case 0:return[4,this.listProbes()];case 1:return(e=t.sent()).length?[2,{status:"OK",mesage:"Found "+e.length+" probes"}]:[2,{status:"Error",mesage:"unable to connect"}]}}))}))},t}(a.DataSourceApi),s=n(0),l=n.n(s),d=n(3),f=n(13),p=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.onAccessTokenChange=function(e){var n=t.props,r=n.onOptionsChange,a=n.options;r(Object(o.a)(Object(o.a)({},a),{secureJsonData:{accessToken:e.target.value}}))},t.onResetAccessToken=function(){var e=t.props,n=e.onOptionsChange,r=e.options;n(Object(o.a)(Object(o.a)({},r),{secureJsonFields:Object(o.a)(Object(o.a)({},r.secureJsonFields),{accessToken:!1}),secureJsonData:Object(o.a)(Object(o.a)({},r.secureJsonData),{accessToken:""})}))},t}return Object(o.c)(t,e),t.prototype.render=function(){var e=this.props.options,t=e.secureJsonFields,n=e.secureJsonData||{};function r(){return t&&t.accessToken}return l.a.createElement("div",null,function(e){if(!e)return!1;var t=e.apiHost,n=e.metrics,r=e.logs;if(!(t&&n&&n.grafanaName&&n.hostedId))return!1;if(!r||!r.grafanaName||!r.hostedId)return!1;return!0}(e.jsonData)&&r()&&l.a.createElement(f.a,{settings:e.jsonData}),l.a.createElement("br",null),l.a.createElement("div",{className:"gf-form-group"},l.a.createElement("div",{className:"gf-form-inline"},l.a.createElement("div",{className:"gf-form"},l.a.createElement(d.LegacyForms.SecretFormField,{isConfigured:r(),value:n.accessToken||"",label:"Access Token",placeholder:"access token saved on the server",labelWidth:10,inputWidth:20,onReset:this.onResetAccessToken,onChange:this.onAccessTokenChange})))))},t}(s.PureComponent);var h=n(12),b=[{label:"Probes",value:r.Probes},{label:"Checks",value:r.Checks}],m=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.onQueryTypeChanged=function(e){var n=t.props,r=n.onChange,a=n.onRunQuery,i=n.query;r(Object(o.a)(Object(o.a)({},i),{queryType:e.value})),a()},t}return Object(o.c)(t,e),t.prototype.onComponentDidMount=function(){},t.prototype.render=function(){var e=Object(h.defaults)(this.props.query,i);return l.a.createElement("div",{className:"gf-form"},l.a.createElement(d.Select,{options:b,value:b.find((function(t){return t.value===e.queryType})),onChange:this.onQueryTypeChanged}))},t}(s.PureComponent);n.d(t,"plugin",(function(){return y}));var y=new a.DataSourcePlugin(u).setConfigEditor(p).setQueryEditor(m)},6:function(e,t){e.exports=n},7:function(e,t){e.exports=r}})}));
//# sourceMappingURL=module.js.map