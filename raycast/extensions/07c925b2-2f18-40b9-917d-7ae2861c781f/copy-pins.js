"use strict";var i=Object.defineProperty;var m=Object.getOwnPropertyDescriptor;var g=Object.getOwnPropertyNames;var d=Object.prototype.hasOwnProperty;var x=(o,t)=>{for(var n in t)i(o,n,{get:t[n],enumerable:!0})},P=(o,t,n,s)=>{if(t&&typeof t=="object"||typeof t=="function")for(let e of g(t))!d.call(o,e)&&e!==n&&i(o,e,{get:()=>t[e],enumerable:!(s=m(t,e))||s.enumerable});return o};var f=o=>P(i({},"__esModule",{value:!0}),o);var S={};x(S,{default:()=>l});module.exports=f(S);var r=require("@raycast/api");var p=require("react"),a=require("@raycast/api");var c=async o=>{let t=await a.LocalStorage.getItem(o),n=typeof t>"u"?"":t;return n==""?[]:JSON.parse(n)};var u=async()=>{let o=await c("localPins"),n={groups:await c("localGroups"),pins:o},s=JSON.stringify(n);return await a.Clipboard.copy(s),s};async function l(){let o=await u();await r.Clipboard.readText()==o?await(0,r.showToast)({title:"Copied pin data to clipboard!"}):await(0,r.showToast)({title:"Failed to copy pins to clipboard.",style:r.Toast.Style.Failure})}0&&(module.exports={});