(()=>{"use strict";(()=>{const e=window.wp.i18n,t=window.wp.hooks,o=window.wp.element,r=window.wp.blockEditor,n=window.wp.compose,i=window.wp.components,d=(0,n.createHigherOrderComponent)((t=>n=>{const{attributes:d,setAttributes:c,isSelected:l}=n,{className:p}=d,a=()=>void 0!==p&&p.match(/(?<!\S)hide-from-print(?!\S)/);return React.createElement(o.Fragment,null,React.createElement(t,n),l&&React.createElement(r.InspectorAdvancedControls,null,React.createElement(i.ToggleControl,{label:(0,e.__)("Hide from print"),checked:a(),onChange:()=>{c({className:void 0===p?"hide-from-print":a()?p.replace(" hide-from-print","").replace("hide-from-print ","").replace("hide-from-print",""):p?p+" hide-from-print":"hide-from-print"})},help:a()?(0,e.__)("Hidden from print."):(0,e.__)("Visible from print.")})))}),"addBlockControls");(0,t.addFilter)("editor.BlockEdit","block-print-options/add-block-controls",d)})()})();