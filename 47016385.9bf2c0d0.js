(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{128:function(e,t,i){"use strict";var a=i(0),I=i.n(a),s=i(125),n=i(134);i(126),i(55);t.a=function(e){var t=I.a.useState(!1),i=t[0],a=t[1];return I.a.createElement("div",{className:"ri-container"},I.a.createElement("div",{className:"ri-description-short"},I.a.createElement("div",{className:"ri-icon"},I.a.createElement("span",{className:"fe fe-zap"})),I.a.createElement("div",{className:"ri-detail"},I.a.createElement("div",{className:"ri-title"},I.a.createElement("a",{href:e.page},e.title)),I.a.createElement("div",{className:"ri-description"},e.description,I.a.Children.count(e.children)>0&&I.a.createElement("span",{className:"ri-more fe fe-more-horizontal",onClick:function(){return a(!i)}})))),i&&I.a.createElement("div",{className:"ri-description-long"},I.a.createElement(s.a,{components:n.a},e.children)))}},129:function(e,t,i){"use strict";var a=i(0),I=i(130);t.a=function(){var e=Object(a.useContext)(I.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},130:function(e,t,i){"use strict";var a=i(0),I=Object(a.createContext)(void 0);t.a=I},132:function(e,t,i){"use strict";var a=i(0),I=i.n(a),s=i(129),n=i(127),o=i(56),r=i.n(o),c=37,g=39;t.a=function(e){var t=e.lazy,i=e.block,o=e.defaultValue,l=e.values,M=e.groupId,j=e.className,C=Object(s.a)(),u=C.tabGroupChoices,d=C.setTabGroupChoices,b=Object(a.useState)(o),L=b[0],A=b[1],N=a.Children.toArray(e.children);if(null!=M){var p=u[M];null!=p&&p!==L&&l.some((function(e){return e.value===p}))&&A(p)}var m=function(e){A(e),null!=M&&d(M,e)},O=[];return I.a.createElement("div",null,I.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(n.a)("tabs",{"tabs--block":i},j)},l.map((function(e){var t=e.value,i=e.label;return I.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":L===t,className:Object(n.a)("tabs__item",r.a.tabItem,{"tabs__item--active":L===t}),key:t,ref:function(e){return O.push(e)},onKeyDown:function(e){!function(e,t,i){switch(i.keyCode){case g:!function(e,t){var i=e.indexOf(t)+1;e[i]?e[i].focus():e[0].focus()}(e,t);break;case c:!function(e,t){var i=e.indexOf(t)-1;e[i]?e[i].focus():e[e.length-1].focus()}(e,t)}}(O,e.target,e)},onFocus:function(){return m(t)},onClick:function(){m(t)}},i)}))),t?Object(a.cloneElement)(N.filter((function(e){return e.props.value===L}))[0],{className:"margin-vert--md"}):I.a.createElement("div",{className:"margin-vert--md"},N.map((function(e,t){return Object(a.cloneElement)(e,{key:t,hidden:e.props.value!==L})}))))}},133:function(e,t,i){"use strict";var a=i(3),I=i(0),s=i.n(I);t.a=function(e){var t=e.children,i=e.hidden,I=e.className;return s.a.createElement("div",Object(a.a)({role:"tabpanel"},{hidden:i,className:I}),t)}},208:function(e,t,i){"use strict";i.r(t),t.default="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjxzdmcKICAgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIgogICB4bWxuczpjYz0iaHR0cDovL2NyZWF0aXZlY29tbW9ucy5vcmcvbnMjIgogICB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiCiAgIHhtbG5zOnN2Zz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciCiAgIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICAgeG1sbnM6c29kaXBvZGk9Imh0dHA6Ly9zb2RpcG9kaS5zb3VyY2Vmb3JnZS5uZXQvRFREL3NvZGlwb2RpLTAuZHRkIgogICB4bWxuczppbmtzY2FwZT0iaHR0cDovL3d3dy5pbmtzY2FwZS5vcmcvbmFtZXNwYWNlcy9pbmtzY2FwZSIKICAgd2lkdGg9IjIwMG1tIgogICBoZWlnaHQ9IjI4LjcyNjE4OW1tIgogICB2aWV3Qm94PSIwIDAgMjAwIDI4LjcyNjE4OSIKICAgdmVyc2lvbj0iMS4xIgogICBpZD0ic3ZnOCIKICAgaW5rc2NhcGU6dmVyc2lvbj0iMS4wLjEgKGM0OTdiMDNjLCAyMDIwLTA5LTEwKSIKICAgc29kaXBvZGk6ZG9jbmFtZT0icmlvdC5zdmciPgogIDxkZWZzCiAgICAgaWQ9ImRlZnMyIiAvPgogIDxzb2RpcG9kaTpuYW1lZHZpZXcKICAgICBpZD0iYmFzZSIKICAgICBwYWdlY29sb3I9IiNmZmZmZmYiCiAgICAgYm9yZGVyY29sb3I9IiM2NjY2NjYiCiAgICAgYm9yZGVyb3BhY2l0eT0iMS4wIgogICAgIGlua3NjYXBlOnBhZ2VvcGFjaXR5PSIwLjAiCiAgICAgaW5rc2NhcGU6cGFnZXNoYWRvdz0iMiIKICAgICBpbmtzY2FwZTp6b29tPSIwLjciCiAgICAgaW5rc2NhcGU6Y3g9IjMyMCIKICAgICBpbmtzY2FwZTpjeT0iNDU3LjE0Mjg1IgogICAgIGlua3NjYXBlOmRvY3VtZW50LXVuaXRzPSJtbSIKICAgICBpbmtzY2FwZTpjdXJyZW50LWxheWVyPSJsYXllcjEiCiAgICAgaW5rc2NhcGU6ZG9jdW1lbnQtcm90YXRpb249IjAiCiAgICAgc2hvd2dyaWQ9ImZhbHNlIgogICAgIGlua3NjYXBlOndpbmRvdy13aWR0aD0iMTc5MiIKICAgICBpbmtzY2FwZTp3aW5kb3ctaGVpZ2h0PSIxMDc1IgogICAgIGlua3NjYXBlOndpbmRvdy14PSIwIgogICAgIGlua3NjYXBlOndpbmRvdy15PSIyMyIKICAgICBpbmtzY2FwZTp3aW5kb3ctbWF4aW1pemVkPSIwIgogICAgIGZpdC1tYXJnaW4tdG9wPSIwIgogICAgIGZpdC1tYXJnaW4tbGVmdD0iMCIKICAgICBmaXQtbWFyZ2luLXJpZ2h0PSIwIgogICAgIGZpdC1tYXJnaW4tYm90dG9tPSIwIiAvPgogIDxtZXRhZGF0YQogICAgIGlkPSJtZXRhZGF0YTUiPgogICAgPHJkZjpSREY+CiAgICAgIDxjYzpXb3JrCiAgICAgICAgIHJkZjphYm91dD0iIj4KICAgICAgICA8ZGM6Zm9ybWF0PmltYWdlL3N2Zyt4bWw8L2RjOmZvcm1hdD4KICAgICAgICA8ZGM6dHlwZQogICAgICAgICAgIHJkZjpyZXNvdXJjZT0iaHR0cDovL3B1cmwub3JnL2RjL2RjbWl0eXBlL1N0aWxsSW1hZ2UiIC8+CiAgICAgICAgPGRjOnRpdGxlIC8+CiAgICAgIDwvY2M6V29yaz4KICAgIDwvcmRmOlJERj4KICA8L21ldGFkYXRhPgogIDxnCiAgICAgaW5rc2NhcGU6bGFiZWw9IkxheWVyIDEiCiAgICAgaW5rc2NhcGU6Z3JvdXBtb2RlPSJsYXllciIKICAgICBpZD0ibGF5ZXIxIgogICAgIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xMi4wOTUyMzksLTE1Ljg3NSkiPgogICAgPHJlY3QKICAgICAgIHN0eWxlPSJmaWxsOiM1ZDU5NGY7ZmlsbC1vcGFjaXR5OjE7c3Ryb2tlLXdpZHRoOjAuMjY0NTgzIgogICAgICAgaWQ9InJlY3Q4NTUiCiAgICAgICB3aWR0aD0iMTk5LjQ5MTc5IgogICAgICAgaGVpZ2h0PSIyOC43MjYxODkiCiAgICAgICB4PSIxMi4wOTUyMzkiCiAgICAgICB5PSIxNS44NzUiCiAgICAgICByeT0iMTQuMzYzMDk0IgogICAgICAgcng9IjEzLjYxMDA2NSIgLz4KICAgIDxnCiAgICAgICBpZD0iZzEyMTkiCiAgICAgICB0cmFuc2Zvcm09Im1hdHJpeCgxLjE3MTQ0NDgsMCwwLDEuMTcxNDQ0OCwtMjYuNjU5OTE5LC01LjY2OTk2NDUpIgogICAgICAgc3R5bGU9InN0cm9rZS13aWR0aDowLjg1MzY0NiI+CiAgICAgIDxwYXRoCiAgICAgICAgIGQ9Im0gNDMuOTQ2MDQyLDI3LjIwOTkxMiB2IDguMzQzMiBoIDMuMTIyMDg2IHYgLTMuNDU3MjI1IGMgMCwtMS4yODc2MzkgMC4wODgxOSwtMS43NDYyNTEgMC4zODgwNTUsLTIuMTUxOTQ1IDAuMjk5ODYyLC0wLjM4ODA1NiAwLjg4MTk0NSwtMC41OTk3MjMgMS41ODc1MDEsLTAuNTk5NzIzIDEuMjg3NjQsMCAxLjY0MDQxOCwwLjMzNTEzOSAxLjY0MDQxOCwxLjU2OTg2MiBoIDIuOTQ1Njk3IHYgLTAuNTY0NDQ1IGMgMCwtMi41MDQ3MjQgLTAuODQ2NjY4LC0zLjM1MTM5MSAtMy4zNjkwMywtMy4zNTEzOTEgLTEuNzQ2MjUyLDAgLTIuNjI4MTk3LDAuNDA1Njk1IC0zLjIxMDI4LDEuNDY0MDI5IGggLTAuMTU4NzUgdiAtMS4yNTIzNjIgeiIKICAgICAgICAgc3R5bGU9ImZvbnQtc2l6ZToxNy42Mzg5cHg7bGluZS1oZWlnaHQ6MS4yNTtmb250LWZhbWlseTonTWljcm9ncmFtbWEgRCBFeHRlbmRlZCc7LWlua3NjYXBlLWZvbnQtc3BlY2lmaWNhdGlvbjonTWljcm9ncmFtbWEgRCBFeHRlbmRlZCc7ZmlsbDojZmZmZmZmO3N0cm9rZS13aWR0aDowLjIyNTg2MSIKICAgICAgICAgaWQ9InBhdGgxMTA4IiAvPgogICAgICA8cGF0aAogICAgICAgICBkPSJtIDU0LjUyMjQ5MywyNy4yMDk5MTIgdiA4LjM0MzIgaCAzLjEyMjA4NSB2IC04LjM0MzIgeiBtIDAsLTMuNDIxOTQ3IHYgMi4zNDU5NzQgaCAzLjEyMjA4NSB2IC0yLjM0NTk3NCB6IgogICAgICAgICBzdHlsZT0iZm9udC1zaXplOjE3LjYzODlweDtsaW5lLWhlaWdodDoxLjI1O2ZvbnQtZmFtaWx5OidNaWNyb2dyYW1tYSBEIEV4dGVuZGVkJzstaW5rc2NhcGUtZm9udC1zcGVjaWZpY2F0aW9uOidNaWNyb2dyYW1tYSBEIEV4dGVuZGVkJztmaWxsOiNmZmZmZmY7c3Ryb2tlLXdpZHRoOjAuMjI1ODYxIgogICAgICAgICBpZD0icGF0aDExMTAiIC8+CiAgICAgIDxwYXRoCiAgICAgICAgIGQ9Im0gNjQuNzQ5NzQ4LDI2Ljk5ODI0NSBjIC0yLjgzOTg2MywwIC00LjA1Njk0NywwLjE5NDAyOCAtNC44MzMwNTksMC43NTg0NzMgLTAuODI5MDI4LDAuNTk5NzIzIC0xLjA3NTk3MywxLjM5MzQ3MyAtMS4wNzU5NzMsMy4zNTEzOTEgMCwyLjQxNjUyOSAwLjE5NDAyOCwzLjE5MjY0MSAwLjk3MDE0LDMuODI3NjQyIDAuNzkzNzUsMC42NTI2MzkgMS44MzQ0NDUsMC44MjkwMjggNC45NTY1MzEsMC44MjkwMjggMy4wODY4MDcsMCA0LjEyNzUwMiwtMC4xNzYzODkgNC45MjEyNTMsLTAuODI5MDI4IDAuNzU4NDczLC0wLjYzNTAwMSAwLjk3MDE0LC0xLjQxMTExMyAwLjk3MDE0LC0zLjcwNDE3IDAsLTIuMDk5MDI5IC0wLjIyOTMwNiwtMi44NTc1MDIgLTEuMDc1OTczLC0zLjQ3NDg2MyAtMC43NzYxMTIsLTAuNTY0NDQ1IC0xLjk3NTU1NywtMC43NTg0NzMgLTQuODMzMDU5LC0wLjc1ODQ3MyB6IG0gMC4wMTc2NCwyLjM0NTk3NCBjIDAuODgxOTQ1LDAgMS42MjI3NzksMC4wODgxOSAyLjAxMDgzNCwwLjI0Njk0NSAwLjU4MjA4NCwwLjIyOTMwNSAwLjc1ODQ3MywwLjYzNSAwLjc1ODQ3MywxLjc2Mzg5IDAsMS43NjM4OSAtMC40MDU2OTUsMi4wNjM3NTEgLTIuNzY5MzA3LDIuMDYzNzUxIC0xLjAwNTQxOCwwIC0xLjcxMDk3NCwtMC4wODgxOSAtMi4wOTkwMywtMC4yNjQ1ODMgLTAuNTY0NDQ0LC0wLjIyOTMwNiAtMC43MDU1NTYsLTAuNTk5NzIzIC0wLjcwNTU1NiwtMS43MTA5NzQgMCwtMS43ODE1MjkgMC40MjMzMzQsLTIuMDk5MDI5IDIuODA0NTg2LC0yLjA5OTAyOSB6IgogICAgICAgICBzdHlsZT0iZm9udC1zaXplOjE3LjYzODlweDtsaW5lLWhlaWdodDoxLjI1O2ZvbnQtZmFtaWx5OidNaWNyb2dyYW1tYSBEIEV4dGVuZGVkJzstaW5rc2NhcGUtZm9udC1zcGVjaWZpY2F0aW9uOidNaWNyb2dyYW1tYSBEIEV4dGVuZGVkJztmaWxsOiNmZmZmZmY7c3Ryb2tlLXdpZHRoOjAuMjI1ODYxIgogICAgICAgICBpZD0icGF0aDExMTIiIC8+CiAgICAgIDxwYXRoCiAgICAgICAgIGQ9Im0gNzIuOTU4NDUxLDI1LjI4NzI3MiB2IDEuOTIyNjQgaCAtMS42NDA0MTggdiAyLjI0MDE0IGggMS42NDA0MTggdiAyLjQzNDE2OSBjIDAsMC42ODc5MTcgMCwxLjExMTI1IDAuMDE3NjQsMS4yNTIzNjIgMC4wMzUyOCwwLjk1MjUgMC4yMTE2NjcsMS40MTExMTIgMC42NTI2MzksMS44NTIwODQgMC42MTczNjIsMC41OTk3MjMgMS40Mjg3NTEsMC43NzYxMTIgMy40MjE5NDcsMC43NzYxMTIgMi4xNTE5NDYsMCAzLjEwNDQ0NiwtMC4yNjQ1ODQgMy43Mzk0NDcsLTEuMDU4MzM0IDAuNDc2MjUsLTAuNjE3MzYyIDAuNTk5NzIzLC0xLjEyODg5IDAuNjM1LC0yLjcxNjM5MSBoIC0yLjg1NzUwMiBjIDAsMC44NjQzMDYgLTAuMDE3NjQsMC45MzQ4NjIgLTAuMTIzNDcyLDEuMTI4ODkgLTAuMTQxMTExLDAuMjk5ODYxIC0wLjQ5Mzg4OSwwLjQyMzMzMyAtMS4xMjg4OSwwLjQyMzMzMyAtMC41OTk3MjIsMCAtMC45MTcyMjIsLTAuMTIzNDcyIC0xLjA3NTk3MiwtMC40MDU2OTQgLTAuMTQxMTEyLC0wLjIxMTY2NyAtMC4xNTg3NTEsLTAuMzM1MTM5IC0wLjE1ODc1MSwtMS4yNTIzNjIgdiAtMi40MzQxNjkgaCA0LjkzODg5MyB2IC0yLjI0MDE0IGggLTQuOTM4ODkzIHYgLTEuOTIyNjQgeiIKICAgICAgICAgc3R5bGU9ImZvbnQtc2l6ZToxNy42Mzg5cHg7bGluZS1oZWlnaHQ6MS4yNTtmb250LWZhbWlseTonTWljcm9ncmFtbWEgRCBFeHRlbmRlZCc7LWlua3NjYXBlLWZvbnQtc3BlY2lmaWNhdGlvbjonTWljcm9ncmFtbWEgRCBFeHRlbmRlZCc7ZmlsbDojZmZmZmZmO3N0cm9rZS13aWR0aDowLjIyNTg2MSIKICAgICAgICAgaWQ9InBhdGgxMTE0IiAvPgogICAgPC9nPgogICAgPGcKICAgICAgIGlkPSJnNDEiCiAgICAgICB0cmFuc2Zvcm09Im1hdHJpeCgxLjU1NzgxMDEsMCwwLDEsLTMyLjkwMTA3NSwtMC4wNDQ3OTQwOCkiCiAgICAgICBzdHlsZT0ic3Ryb2tlLXdpZHRoOjAuODAxMjAyIj4KICAgICAgPHJlY3QKICAgICAgICAgc3R5bGU9ImZpbGw6I2QxMjYyNTtmaWxsLW9wYWNpdHk6MTtzdHJva2Utd2lkdGg6MC4yMTE5ODQiCiAgICAgICAgIGlkPSJyZWN0ODU3IgogICAgICAgICB3aWR0aD0iNjIuMjk4ODg5IgogICAgICAgICBoZWlnaHQ9IjMiCiAgICAgICAgIHg9IjY5LjY2MTk3MiIKICAgICAgICAgeT0iMTkuNTE2ODA4IiAvPgogICAgICA8cmVjdAogICAgICAgICBzdHlsZT0iZmlsbDojZGE2MjQxO2ZpbGwtb3BhY2l0eToxO3N0cm9rZS13aWR0aDowLjIxMTk4NCIKICAgICAgICAgaWQ9InJlY3Q4NTctNSIKICAgICAgICAgd2lkdGg9IjYyLjI5ODg5NyIKICAgICAgICAgaGVpZ2h0PSIzIgogICAgICAgICB4PSI2OS42NjE5NzIiCiAgICAgICAgIHk9IjI0LjE0OTg0OSIgLz4KICAgICAgPHJlY3QKICAgICAgICAgc3R5bGU9ImZpbGw6I2YxY2IyOTtmaWxsLW9wYWNpdHk6MTtzdHJva2Utd2lkdGg6MC4yMTE5ODQiCiAgICAgICAgIGlkPSJyZWN0ODU3LTUtMSIKICAgICAgICAgd2lkdGg9IjYyLjI5ODkwMSIKICAgICAgICAgaGVpZ2h0PSIzIgogICAgICAgICB4PSI2OS42NjE5NjQiCiAgICAgICAgIHk9IjI4Ljc4Mjg4OCIgLz4KICAgICAgPHJlY3QKICAgICAgICAgc3R5bGU9ImZpbGw6IzRiYjI0OTtmaWxsLW9wYWNpdHk6MTtzdHJva2Utd2lkdGg6MC4yMTE5ODQiCiAgICAgICAgIGlkPSJyZWN0ODU3LTUtMS0xIgogICAgICAgICB3aWR0aD0iNjIuMjk4OTA4IgogICAgICAgICBoZWlnaHQ9IjMiCiAgICAgICAgIHg9IjY5LjY2MTk2NCIKICAgICAgICAgeT0iMzMuNDE1OTI4IiAvPgogICAgICA8cmVjdAogICAgICAgICBzdHlsZT0iZmlsbDojMDA5ZWRhO2ZpbGwtb3BhY2l0eToxO3N0cm9rZS13aWR0aDowLjIxMTk4NCIKICAgICAgICAgaWQ9InJlY3Q4NTctNS0xLTEtOCIKICAgICAgICAgd2lkdGg9IjYyLjI5ODkwOCIKICAgICAgICAgaGVpZ2h0PSIzIgogICAgICAgICB4PSI2OS42NjE5NjQiCiAgICAgICAgIHk9IjM4LjA0ODk2OSIgLz4KICAgIDwvZz4KICAgIDxnCiAgICAgICBpZD0iZzEwODEiCiAgICAgICB0cmFuc2Zvcm09Im1hdHJpeCgxLjI3MTcxNDgsMCwwLDEuMjcxNzE0OCwxNTcuNTg2NzcsLTcuODU3NTI0NikiCiAgICAgICBzdHlsZT0ic3Ryb2tlLXdpZHRoOjAuNzg2MzQxIj4KICAgICAgPGcKICAgICAgICAgaWQ9ImcxMDUyIgogICAgICAgICB0cmFuc2Zvcm09Im1hdHJpeCgwLjAzODA5OTMyLDAsMCwwLjAzODA5OTMyLDE4LjAyMTAxOCwyMC45Njk3MDQpIgogICAgICAgICBzdHlsZT0iZmlsbDojZmZmZmZmO3N0cm9rZS13aWR0aDo1LjQ2MDgiPgogICAgICAgIDxwYXRoCiAgICAgICAgICAgY2xhc3M9InN0MCIKICAgICAgICAgICBkPSJtIDIyOC40LDUwLjQgYyAwLDAuMiAyLjQsNC43IDUuNCwxMC4zIDMsNS41IDUuMSwxMC4yIDQuOCwxMC41IC0wLjMsMC4yIC04LjcsMy40IC0xOC42LDYuOSAtMTAsMy42IC0xNy45LDYuNiAtMTcuOCw2LjcgMC4xLDAuMSAxMS40LDEuMyAyNSwyLjYgMTYuNCwxLjUgMjUsMi42IDI1LjYsMy4zIDAuNSwwLjUgNC4zLDYuNiA4LjQsMTMuNCBsIDcuNCwxMi40IDEuMywtMy4xIGMgMC43LC0xLjYgMywtNy4xIDUsLTEyIGwgMy43LC04LjkgMTkuNywtMi4xIGMgMTAuOCwtMS4yIDIwLjQsLTIuMSAyMS40LC0yLjEgbCAxLjcsLTAuNyBjIDAsLTAuMyAtNy4zLC0zLjMgLTE2LjMsLTYuNyAtOC45LC0zLjMgLTE2LjMsLTYuMiAtMTYuMywtNi4zIDAsLTAuMSAxLjksLTQuOCA0LjMsLTEwLjUgMi4zLC01LjcgNC4xLC0xMC41IDQsLTEwLjYgLTAuMiwtMC4yIC03LjgsMi4xIC0xNi44LDUgTCAyNjQsNjMuOSAyNDYuNSw1NyBDIDIyOS4zLDUwLjIgMjI4LjQsNDkuOSAyMjguNCw1MC40IFogTSAzMzcsMTA5LjUgYyAtMjAuOSw4LjMgLTM4LjEsMTUuMiAtMzguMiwxNS40IC0wLjIsMC4yIDE1LjQsNi41IDM0LjYsMTQuMSBsIDM0LjgsMTMuNyAzLjcsLTEuNSBjIDM4LjgsLTE1LjEgNzQsLTI5LjEgNzMuOSwtMjkuMyBMIDM3NS45LDk0LjQgYyAtMC43LDAuMSAtMTguMSw2LjggLTM4LjksMTUuMSB6IG0gLTIwMC42LC04LjEgYyAtMjAuMSwyLjEgLTM2LjksNy45IC00NCwxNS4zIC00LjksNSAtNS43LDkuMyAtMi42LDE0LjUgNC41LDcuOCAxOS4zLDE0LjMgMzkuNywxNy42IDkuMiwxLjYgMzYuMSwxLjMgNDUuNCwtMC4zIDIxLjgsLTMuOCAzNiwtMTAuOCAzOS4zLC0xOS42IDEuMiwtMy4zIDEuMiwtMy43IDAsLTYuOSAtMy4zLC04LjUgLTE3LjIsLTE1LjYgLTM3LjgsLTE5LjIgLTEwLjQsLTEuNyAtMjkuOCwtMi40IC00MCwtMS40IHogbSAzNzMuMywyNC4yIGMgLTEsMS4zIC00LjcsNC4zIC04LjMsNi43IC0xMC42LDYuOCAtMjQuMiwxMyAtMTA5LjEsNDkuNiAtNTkuNywyNS42IC03NC45LDMyLjQgLTk1LjUsNDIuMyAtMjIuOSwxMC45IC0zMi40LDE0IC00My45LDE0IC0xMC4zLDAgLTE2LjUsLTEuOCAtMzUuNywtMTAuMyBDIDIwOS41LDIyNC41IDE3OCwyMTEuMyAxNDcuMywxOTguNSAxMi44LDE0Mi42IDEwLjMsMTQxLjQgMy4xLDEzMy42IGwgLTMsLTMuMyBWIDE4MyBsIDMuNCwzLjMgYyAzLjMsMy4yIDE0LjQsOS45IDE4LjMsMTEgMS4xLDAuMyA4LjQsMy4zIDE2LjMsNi43IDcuOSwzLjQgNDYuNSwxOS42IDg1LjgsMzYgNjUsMjcuMSA3OS44LDMzLjMgMTAyLDQzIDExLjcsNS4yIDE4LjIsNi41IDI5LjMsNi4xIDguMSwtMC4zIDEwLjUsLTAuOCAxNy42LC0zLjIgNC42LC0xLjUgMTIuNSwtNC45IDE3LjYsLTcuNSAxNi45LC04LjUgMzcuMywtMTcuNSAxMTguNiwtNTIuNSA3Ni41LC0zMyA4Ni41LC0zNy42IDk0LjgsLTQzLjMgOC41LC02LjEgOC4yLC00LjYgOC4yLC0zNCAwLC0xNC4xIC0wLjEsLTI1LjYgLTAuMiwtMjUuNiB6IE0gMjQxLjksMTYwIGMgLTMxLjMsNC44IC01Ny4yLDguOSAtNTcuNyw5LjEgLTAuNywwLjIgNzgsMzMuMyA4MS4zLDM0LjIgbCAzNiwtNTEuNyBjIC0wLjEsLTAuNyAwLC0wLjggLTU5LjYsOC40IHogbSAyNjguMyw1Mi40IGMgLTAuNywxLjIgLTQsNCAtNy4xLDYuMyAtMTAuMiw3IC0yNS41LDE0IC0xMTguNSw1NCAtNTMuNSwyMy4xIC03MC4zLDMwLjUgLTg2LjIsMzguMiAtMjUuOCwxMi41IC0zMiwxNC41IC00NS44LDE0LjUgLTEwLjcsLTAuMSAtMTcuMywtMS44IC0zMS41LC04LjIgLTEzLjcsLTYuMyAtMjksLTEyLjcgLTkwLjQsLTM4LjIgQyAyMy42LDIzNC42IDExLjMsMjI5IDMuNywyMjEuNyBMIDAsMjE4LjIgdiA1MiBsIDQuMiw0IGMgNi44LDYuNCA2LjEsNiAxMjAuOSw1My44IDQyLjEsMTcuNSA4MS44LDM0LjIgODguMiwzNy4xIDE2LjksNy42IDIxLjgsOS40IDI4LjUsMTAuOCAxNS42LDMuMiAyNy4yLDAuNiA1Mi41LC0xMS43IDE2LjUsLTggMzYuNiwtMTYuOSA4NS4zLC0zNy45IDkyLjYsLTM5LjkgMTE1LjQsLTUwLjIgMTIyLjIsLTU0LjcgMi40LC0xLjcgNS43LC00LjQgNy4zLC02LjIgbCAyLjksLTMuMiB2IC0yNiBjIDAsLTE0LjMgLTAuMSwtMjYgLTAuMiwtMjYgeiBtIC0wLjksODUuMiBjIC02LjEsNy43IC0xOC40LDEzLjYgLTExMy45LDU0LjcgLTYyLjMsMjYuOSAtODEuMywzNS4zIC0xMDEuOCw0NSAtMjEuNSwxMC4yIC0yOC42LDEyLjQgLTQxLDEyLjQgLTguNSwwIC0xNy4xLC0yIC0yNi42LC02LjIgLTIyLjMsLTkuOCAtMzcsLTE2IC0xMDIuMSwtNDMuMSBDIDQ5LjksMzI5LjYgMjYuMiwzMTkuNSAxOC4zLDMxNS42IDEwLjksMzExLjkgMy40LDMwNi42IDEuNywzMDMuOSBMIDAsMzAxLjQgdiAyNi41IGMgMCwzMC40IC0wLjUsMjguMSA3LjYsMzMuNiA5LDYgMjIuNCwxMiAxMTEuMyw0OC45IDYyLjEsMjUuOCA4NC41LDM1LjIgOTUuNSw0MC4yIDIyLjUsMTAuMSAyOC41LDExLjcgNDEuMSwxMSAxMS41LC0wLjUgMTksLTMgMzguOSwtMTIuNSAyMC43LC05LjkgMzYsLTE2LjggMTAzLjcsLTQ1LjkgOTQsLTQwLjUgMTA0LjIsLTQ1LjQgMTExLjMsLTUzLjYgbCAyLjUsLTIuOCB2IC0yNS45IGMgMCwtMTQuMyAtMC4xLC0yNiAtMC4yLC0yNiB6IgogICAgICAgICAgIGlkPSJwYXRoMTA1MCIKICAgICAgICAgICBzdHlsZT0iZmlsbDojZmZmZmZmO3N0cm9rZS13aWR0aDo1LjQ2MDgiIC8+CiAgICAgIDwvZz4KICAgIDwvZz4KICA8L2c+Cjwvc3ZnPgo="},87:function(e,t,i){"use strict";i.r(t),i.d(t,"frontMatter",(function(){return r})),i.d(t,"metadata",(function(){return c})),i.d(t,"toc",(function(){return g})),i.d(t,"default",(function(){return M}));var a=i(3),I=i(7),s=(i(0),i(125)),n=i(132),o=i(133),r=(i(126),i(128),{id:"index-riot",title:"RIOT",sidebar_label:"RIOT",slug:"/tools/riot"}),c={unversionedId:"tools/riot/index-riot",id:"tools/riot/index-riot",isDocsHomePage:!1,title:"RIOT",description:"Redis Input/Output Tools (RIOT) is a set of import/export command line utilities for Redis:",source:"@site/docs/tools/riot/index-riot.mdx",slug:"/tools/riot",permalink:"/tools/riot",editUrl:"https://github.com/redis-developer/redis-developer/edit/master/docs/tools/riot/index-riot.mdx",version:"current",sidebar_label:"RIOT",sidebar:"docs",previous:{title:"How to build a Basic Caching Demo app Using NodeJS  & Redis",permalink:"/howtos/caching"}},g=[{value:"1. Getting Started",id:"1-getting-started",children:[]},{value:"2. Build and Run",id:"2-build-and-run",children:[]},{value:"3. Install via Homebrew (macOS)",id:"3-install-via-homebrew-macos",children:[]},{value:"Usage",id:"usage",children:[]},{value:"4. Example",id:"4-example",children:[]},{value:"5. Verification",id:"5-verification",children:[]},{value:"6. Architecture",id:"6-architecture",children:[]},{value:"1. Getting Started",id:"1-getting-started-1",children:[]},{value:"2. Build and Run",id:"2-build-and-run-1",children:[]},{value:"3. Install via Homebrew (macOS)",id:"3-install-via-homebrew-macos-1",children:[]},{value:"4. Usage",id:"4-usage",children:[]},{value:"5. Drivers",id:"5-drivers",children:[]},{value:"6. Import",id:"6-import",children:[]},{value:"7. Export",id:"7-export",children:[]}],l={toc:g};function M(e){var t=e.components,r=Object(I.a)(e,["components"]);return Object(s.b)("wrapper",Object(a.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(s.b)("p",null,"Redis Input/Output Tools (RIOT) is a set of import/export command line utilities for Redis:"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"RIOT DB: migrate from an RDBMS to Redis, RediSearch, RedisJSON, ..."),Object(s.b)("li",{parentName:"ul"},"RIOT File: bulk import/export data from/to files."),Object(s.b)("li",{parentName:"ul"},"RIOT Gen: generate sample Redis datasets for new feature development and proof of concept."),Object(s.b)("li",{parentName:"ul"},"RIOT Redis: live replication from any Redis database (including AWS Elasticache) to another Redis database."),Object(s.b)("li",{parentName:"ul"},"RIOT Stream: import/export messages from/to Kafka topics.")),Object(s.b)("p",null,Object(s.b)("img",{alt:"my image",src:i(208).default})),Object(s.b)(n.a,{defaultValue:"RIOT Redis",values:[{label:"RIOT Redis",value:"RIOT Redis"},{label:"RIOT DB",value:"RIOT DB"}],mdxType:"Tabs"},Object(s.b)(o.a,{value:"RIOT Redis",mdxType:"TabItem"},Object(s.b)("p",null,"Most database migration tools available today are offline in nature. Migrating data from AWS ElastiCache to Redis Enterprise Cloud for example means backing up your Elasticache data to an AWS S3 bucket and importing it into Redis Enterprise Cloud using its UI.This implies some downtime and might result in data loss.\nOther available techniques include creating point-in-time snapshots of the source Redis server & applying the changes to the destination servers to keep both servers in sync.\nIt might sound like a good approach but can be challenging when you have to maintain dozens of scripts to implement the migration strategy."),Object(s.b)("p",null,"RIOT Redis is a migration tool that allows for seamless live replication between two Redis databases."),Object(s.b)("h3",{id:"1-getting-started"},"1. Getting Started"),Object(s.b)("p",null,"Download the ",Object(s.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/redis-developer/riot/releases/latest"}),"latest release")," and unzip the archive."),Object(s.b)("p",null,"Launch the ",Object(s.b)("inlineCode",{parentName:"p"},"bin/riot-redis")," script and follow the usage information provided."),Object(s.b)("h3",{id:"2-build-and-run"},"2. Build and Run"),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{}),"git clone https://github.com/redis-developer/riot.git\ncd riot/riot-redis\n./riot-redis\n")),Object(s.b)("h3",{id:"3-install-via-homebrew-macos"},"3. Install via Homebrew (macOS)"),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{}),"brew install jruaux/tap/riot-redis`\n")),Object(s.b)("h3",{id:"usage"},"Usage"),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{}),"\u276f riot-redis\nUsage: {app} [OPTIONS] [COMMAND]\n      --help                Show this help message and exit.\n  -V, --version             Print version information and exit.\n  -q, --quiet               Log errors only\n  -d, --debug               Log in debug mode (includes normal stacktrace)\n  -i, --info                Set log level to info\n")),Object(s.b)("p",null,"You can use --help on any subcommand:"),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{}),"\u276f riot-redis --help\n\n\u276f riot-redis import --help\n\n\u276f riot-redis import ..  hset --help\n")),Object(s.b)("p",null,"Redis connection options are the same as redis-cli:"),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{}),"  -h, --hostname=<host>     Server hostname (default: 127.0.0.1)\n  -p, --port=<port>         Server port (default: 6379)\n  -s, --socket=<socket>     Server socket (overrides hostname and port)\n      --user=<username>     Used to send ACL style 'AUTH username pass'. Needs password.\n  -a, --pass[=<password>]   Password to use when connecting to the server\n  -u, --uri=<uri>           Server URI\n  -o, --timeout=<sec>       Redis command timeout (default: 60)\n  -n, --db=<int>            Database number (default: 0)\n  -c, --cluster             Enable cluster mode\n  -t, --tls                 Establish a secure TLS connection\n  -l, --latency             Show latency metrics\n  -m, --pool=<int>          Max pool connections (default: 8)\n")),Object(s.b)("p",null,"Redis URI syntax is described here."),Object(s.b)("h3",{id:"4-example"},"4. Example"),Object(s.b)("p",null,"Here is an example of a live replication from a source Redis running on localhost and port 6379, to a target Redis running on localhost and port 6380:"),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{}),"\u276f riot-redis -h source -p 6379 replicate --idle-timeout 500 -h target -p 6380 --live\n")),Object(s.b)("h3",{id:"5-verification"},"5. Verification"),Object(s.b)("p",null,"Once replication is complete RIOT Redis will perform a verification step to compare values and TTLs between source and target databases. The output looks like this:"),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{}),"OK:1000 V:0 >:0 <:0 T:0\n")),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},Object(s.b)("p",{parentName:"li"},"OK: # identical values")),Object(s.b)("li",{parentName:"ul"},Object(s.b)("p",{parentName:"li"},"V: # mismatched values")),Object(s.b)("li",{parentName:"ul"},Object(s.b)("blockquote",{parentName:"li"},Object(s.b)("p",{parentName:"blockquote"},": # keys only present in source database"))),Object(s.b)("li",{parentName:"ul"},Object(s.b)("p",{parentName:"li"},"<: # keys only present in target database")),Object(s.b)("li",{parentName:"ul"},Object(s.b)("p",{parentName:"li"},"T: # keys with TTL difference greater than tolerance"))),Object(s.b)("h3",{id:"6-architecture"},"6. Architecture"),Object(s.b)("p",null,"RIOT Redis implements client-side replication using a producer/consumer approach:"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},Object(s.b)("p",{parentName:"li"},"the producer is connected to the source Redis (e.g. ElastiCache) and iterates over keys to read their corresponding values")),Object(s.b)("li",{parentName:"ul"},Object(s.b)("p",{parentName:"li"},"the consumer is connected to the target Redis (e.g. Redis Enterprise Cloud) and writes the key/value tuples previously created"))),Object(s.b)("ol",null,Object(s.b)("li",{parentName:"ol"},"Key reader: initiates a SCAN and optionally calls SUBSCRIBE to listen for keyspace notifications (live replication)."),Object(s.b)("li",{parentName:"ol"},"Value reader: takes the keys and calls DUMP and TTL."),Object(s.b)("li",{parentName:"ol"},"Key/Value writer: takes key/value/ttl tuples and calls RESTORE and EXPIRE.")),Object(s.b)("p",null,"Note: Live replication makes use of keyspace notifications. Make sure the source Redis database has keyspace notifications enabled using notify-keyspace-events = KA in redis.conf or via CONFIG SET."),Object(s.b)("p",null,"Note: The live replication mechanism does not guarantee data consistency. Redis sends keyspace notifications over pub/sub which does not provide guaranteed delivery. It is possible that RIOT Redis can miss some notifications in case of network failures for example.")),Object(s.b)(o.a,{value:"RIOT DB",mdxType:"TabItem"},Object(s.b)("p",null,"RIOT DB lets you import/export data from relational databases."),Object(s.b)("h3",{id:"1-getting-started-1"},"1. Getting Started"),Object(s.b)("p",null,"Download the ",Object(s.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/redis-developer/riot/releases/latest"}),"latest release")," and unzip the archive."),Object(s.b)("p",null,"Launch the bin/riot-db script and follow the usage information provided."),Object(s.b)("h3",{id:"2-build-and-run-1"},"2. Build and Run"),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{}),"\u276f git clone https://github.com/redis-developer/riot.git\n\u276f cd riot/riot-db\n\u276f ./riot-db\n")),Object(s.b)("h3",{id:"3-install-via-homebrew-macos-1"},"3. Install via Homebrew (macOS)"),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{}),"brew install jruaux/tap/riot-db\n")),Object(s.b)("h3",{id:"4-usage"},"4. Usage"),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{}),"\u276f riot-db\nUsage: riot-db [OPTIONS] [COMMAND]\n      --help                Show this help message and exit.\n  -V, --version             Print version information and exit.\n  -q, --quiet               Log errors only\n  -d, --debug               Log in debug mode (includes normal stacktrace)\n  -i, --info                Set log level to info\n")),Object(s.b)("p",null,"You can use --help on any subcommand:"),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{}),"\u276f riot-db --help\n\u276f riot-db import --help\n\u276f riot-db import \u2026 hset --help\n")),Object(s.b)("p",null,"Redis connection options are the same as redis-cli:"),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{}),"  -h, --hostname=<host>     Server hostname (default: 127.0.0.1)\n  -p, --port=<port>         Server port (default: 6379)\n  -s, --socket=<socket>     Server socket (overrides hostname and port)\n      --user=<username>     Used to send ACL style 'AUTH username pass'. Needs password.\n  -a, --pass[=<password>]   Password to use when connecting to the server\n  -u, --uri=<uri>           Server URI\n  -o, --timeout=<sec>       Redis command timeout (default: 60)\n  -n, --db=<int>            Database number (default: 0)\n  -c, --cluster             Enable cluster mode\n  -t, --tls                 Establish a secure TLS connection\n  -l, --latency             Show latency metrics\n  -m, --pool=<int>          Max pool connections (default: 8)\n\n")),Object(s.b)("h3",{id:"5-drivers"},"5. Drivers"),Object(s.b)("p",null,"RIOT DB includes drivers for the most common RDBMSs:"),Object(s.b)("h4",{id:"oracle"},"Oracle"),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{}),"jdbc:oracle:thin:@myhost:1521:orcl\n")),Object(s.b)("h4",{id:"ibm-db2"},"IBM Db2"),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{}),"jdbc:db2://host:port/database\n")),Object(s.b)("h4",{id:"ms-sql-server"},"MS SQL Server"),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{}),"jdbc:sqlserver://[serverName[\\instanceName][:portNumber]][;property=value[;property=value]]\n")),Object(s.b)("h4",{id:"mysql"},"MySQL"),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{}),"jdbc:mysql://[host]:[port][/database][?properties]\n")),Object(s.b)("h4",{id:"postgresql"},"PostgreSQL"),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{}),"jdbc:postgresql://host:port/database\n")),Object(s.b)("h4",{id:"sqlite"},"SQLite"),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{}),"jdbc:sqlite:sqlite_database_file_path\n")),Object(s.b)("p",null,"For non-included databases you must install the corresponding JDBC driver under the lib directory and modify the RIOT DB CLASSPATH:"),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{}),"*nix: bin/riot-db \u2192 CLASSPATH=$APP_HOME/lib/myjdbc.jar:$APP_HOME/lib/\u2026\nWindows: bin{app}.bat \u2192 set CLASSPATH=%APP_HOME%\\lib\\myjdbc.jar;%APP_HOME%\\lib\\\u2026\n")),Object(s.b)("h3",{id:"6-import"},"6. Import"),Object(s.b)("p",null,"Use the import command to import the result set of a SQL statement."),Object(s.b)("h4",{id:"import-from-postgresql"},"Import from PostgreSQL"),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{}),'\u276f riot-db -h localhost -p 6379 import "SELECT * FROM orders" --url jdbc:postgresql://host:port/database --username appuser --password passwd hset --keyspace order --keys order_id\n')),Object(s.b)("p",null,"You can specify one or many Redis commands as targets of the import:"),Object(s.b)("h4",{id:"import-into-hashes"},"Import into hashes"),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{}),"\u276f riot-db import .. set --keyspace blah --keys id\n")),Object(s.b)("h4",{id:"import-into-hashes-and-set-ttl-on-the-key"},"Import into hashes and set TTL on the key"),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{}),"\u276f riot-db import .. hset --keyspace blah --keys id expire --keyspace blah --keys id\n")),Object(s.b)("h4",{id:"import-into-hashes-and-set-ttl-and-add-to-a-set-named-myset"},"Import into hashes and set TTL and add to a set named myset"),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{}),"\u276f riot-db import .. hset --keyspace blah --keys id expire --keyspace blah --keys id sadd --keyspace myset --members id\n")),Object(s.b)("h3",{id:"7-export"},"7. Export"),Object(s.b)("h4",{id:"export-to-postgresql"},"Export to PostgreSQL"),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{}),'\u276f riot-db export "INSERT INTO mytable (id, field1, field2) VALUES (CAST(:id AS SMALLINT), :field1, :field2)" --url jdbc:postgresql://host:port/database --username appuser --password passwd --scan-match "hash:*" --key-regex "hash:(?<id>.*)"\n')),Object(s.b)("h4",{id:"import-from-postgresql-to-json-strings"},"Import from PostgreSQL to JSON strings"),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{}),'\u276f riot-db -h localhost -p 6379 import "SELECT * FROM orders" --url jdbc:postgresql://host:port/database --username appuser --password passwd set --keyspace order --keys order_id\n')),Object(s.b)("p",null,"This will produce Redis strings that look like this:"),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{}),'{\n        "order_id": 10248,\n        "customer_id": "VINET",\n        "employee_id": 5,\n        "order_date": "1996-07-04",\n        "required_date": "1996-08-01",\n        "shipped_date": "1996-07-16",\n        "ship_via": 3,\n        "freight": 32.38,\n        "ship_name": "Vins et alcools Chevalier",\n        "ship_address": "59 rue de l\'Abbaye",\n        "ship_city": "Reims",\n        "ship_postal_code": "51100",\n        "ship_country": "France"\n}\n')))))}M.isMDXComponent=!0}}]);