(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{80:function(a,e,n){"use strict";n.r(e),n.d(e,"frontMatter",(function(){return f})),n.d(e,"metadata",(function(){return g})),n.d(e,"toc",(function(){return v})),n.d(e,"default",(function(){return h}));var t=n(3),l=n(7),o=n(0),s=n.n(o),i=n(87),r=n(90),c=n(82),u=n(73),b=n.n(u),p=37,m=39;var d=function(a){var e=a.lazy,n=a.block,t=a.defaultValue,l=a.values,i=a.groupId,u=a.className,d=Object(r.a)(),j=d.tabGroupChoices,f=d.setTabGroupChoices,g=Object(o.useState)(t),v=g[0],O=g[1],h=o.Children.toArray(a.children);if(null!=i){var y=j[i];null!=y&&y!==v&&l.some((function(a){return a.value===y}))&&O(y)}var N=function(a){O(a),null!=i&&f(i,a)},w=[];return s.a.createElement("div",null,s.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(c.a)("tabs",{"tabs--block":n},u)},l.map((function(a){var e=a.value,n=a.label;return s.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":v===e,className:Object(c.a)("tabs__item",b.a.tabItem,{"tabs__item--active":v===e}),key:e,ref:function(a){return w.push(a)},onKeyDown:function(a){!function(a,e,n){switch(n.keyCode){case m:!function(a,e){var n=a.indexOf(e)+1;a[n]?a[n].focus():a[0].focus()}(a,e);break;case p:!function(a,e){var n=a.indexOf(e)-1;a[n]?a[n].focus():a[a.length-1].focus()}(a,e)}}(w,a.target,a)},onFocus:function(){return N(e)},onClick:function(){N(e)}},n)}))),e?Object(o.cloneElement)(h.filter((function(a){return a.props.value===v}))[0],{className:"margin-vert--md"}):s.a.createElement("div",{className:"margin-vert--md"},h.map((function(a,e){return Object(o.cloneElement)(a,{key:e,hidden:a.props.value!==v})}))))};var j=function(a){var e=a.children,n=a.hidden,t=a.className;return s.a.createElement("div",{role:"tabpanel",hidden:n,className:t},e)},f={id:"installation",title:"Installation"},g={unversionedId:"installation",id:"installation",isDocsHomePage:!1,title:"Installation",description:"You can install the plugin using grafana-cli, or by downloading the plugin manually.",source:"@site/docs/installation.md",slug:"/installation",permalink:"/grafana-json-datasource/installation",editUrl:"https://github.com/marcusolsson/grafana-json-datasource/edit/main/website/docs/installation.md",version:"current",sidebar:"someSidebar",previous:{title:"Introduction",permalink:"/grafana-json-datasource/"},next:{title:"Configuration",permalink:"/grafana-json-datasource/configuration"}},v=[{value:"Install using grafana-cli",id:"install-using-grafana-cli",children:[]},{value:"Install manually",id:"install-manually",children:[]}],O={toc:v};function h(a){var e=a.components,n=Object(l.a)(a,["components"]);return Object(i.b)("wrapper",Object(t.a)({},O,n,{components:e,mdxType:"MDXLayout"}),Object(i.b)("p",null,"You can install the plugin using ",Object(i.b)("a",{parentName:"p",href:"https://grafana.com/docs/grafana/latest/administration/cli/"},"grafana-cli"),", or by downloading the plugin manually."),Object(i.b)("h2",{id:"install-using-grafana-cli"},"Install using grafana-cli"),Object(i.b)("p",null,"To install the latest version of the plugin, run the following command on the Grafana server:"),Object(i.b)(d,{groupId:"operating-systems",defaultValue:"linux",values:[{label:"Linux",value:"linux"},{label:"macOS",value:"macos"},{label:"Windows",value:"windows"}],mdxType:"Tabs"},Object(i.b)(j,{value:"linux",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"grafana-cli plugins install marcusolsson-json-datasource\n"))),Object(i.b)(j,{value:"macos",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"grafana-cli plugins install marcusolsson-json-datasource\n"))),Object(i.b)(j,{value:"windows",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"grafana-cli.exe plugins install marcusolsson-json-datasource\n")))),Object(i.b)("h2",{id:"install-manually"},"Install manually"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Go to ",Object(i.b)("a",{parentName:"p",href:"https://github.com/marcusolsson/grafana-json-datasource/releases"},"Releases")," on the GitHub project page")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Find the release you want to install")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Download the release by clicking the release asset called ",Object(i.b)("inlineCode",{parentName:"p"},"marcusolsson-json-datasource-<version>.zip"),". You may need to uncollapse the ",Object(i.b)("strong",{parentName:"p"},"Assets")," section to see it.")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Unarchive the plugin into the Grafana plugins directory"),Object(i.b)(d,{groupId:"operating-systems",defaultValue:"linux",values:[{label:"Linux",value:"linux"},{label:"macOS",value:"macos"},{label:"Windows",value:"windows"}],mdxType:"Tabs"},Object(i.b)(j,{value:"linux",mdxType:"TabItem"},Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",{parentName:"pre"},"unzip marcusolsson-json-datasource-<version>.zip\nmv marcusolsson-json-datasource /var/lib/grafana/plugins\n"))),Object(i.b)(j,{value:"macos",mdxType:"TabItem"},Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",{parentName:"pre"},"unzip marcusolsson-json-datasource-<version>.zip\nmv marcusolsson-json-datasource /usr/local/var/lib/grafana/plugins\n"))),Object(i.b)(j,{value:"windows",mdxType:"TabItem"},Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",{parentName:"pre"},"Expand-Archive -Path marcusolsson-json-datasource-<version>.zip -DestinationPath C:\\grafana\\data\\plugins\n"))))),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Restart the Grafana server to load the plugin"))))}h.isMDXComponent=!0}}]);