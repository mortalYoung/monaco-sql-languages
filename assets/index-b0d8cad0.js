import{u,r as a,h as B,j as s,I as j,b as P,A,M as D,c as I,s as E,E as R}from"./index-fc391d71.js";import{u as C,W as T}from"./index-65f064bc.js";import{P as W}from"./index-2d087329.js";const M=u.div`
	background: var(--editor-background);
	height: 100%;
	width: 100%;
`,N=u.div`
	height: 100%;
	position: relative;
	width: 100%;
`,V=u.div`
	line-height: 24px;
	font-size: 14px;
	padding: 6px 0;
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 6px;
	flex: 1;
`,O=u.div`
	height: calc(100% - 38px);
`,_=u.div`
	padding: 0 6px;
`,$=u.div`
	display: flex;
	width: 100%;
`,k=u.div`
	cursor: pointer;
	max-width: 400px;
`,z=u.div`
	border: 1px solid transparent;
	padding: 0 6px;
	border-radius: 5px;
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;

	&:hover {
		border-color: var(--inputOption-activeBorder);
	}
`;function F(){const[e,o]=a.useState(""),[x,p]=a.useState(!1);function i(t){p(!0),o(t)}function d(){p(!1),o("")}function l(t){o(t)}return{editing:x,data:e,start:i,stop:d,dispatch:l}}function H({data:e,groupId:o,toolbar:x,instance:p,options:i,onModelMount:d,onMount:l,onToolbarClick:t,onSubmit:h}){const c=F(),r=a.useRef(null),g=a.useRef(new WeakMap),w=n=>{l==null||l(o,n),n.onDidChangeModel(()=>{const f=n.getModel();if(f){const v=g.current.get(f);v&&(n.restoreViewState(v),n.focus())}}),n.onDidBlurEditorText(()=>{const f=n.getModel();f&&g.current.set(f,n.saveViewState())})},y=n=>{e&&(e.model||d==null||d(e.id,o,n))},m=()=>{c.stop(),r.current&&r.current.style.removeProperty("width"),h==null||h(c.data)},b=()=>{if(r.current){const{width:n}=r.current.getBoundingClientRect();r.current.style.setProperty("width",`${n}px`)}c.start(e.name||"")};a.useEffect(()=>{c.stop(),r.current&&r.current.style.removeProperty("width")},[e]);const S=a.useMemo(()=>a.createElement(B(e.language)),[e]);return s.jsxs(N,{children:[s.jsxs($,{children:[s.jsxs(V,{children:[s.jsx(j,{type:S}),s.jsx(k,{ref:r,children:c.editing?s.jsx(P,{autoFocus:!0,value:c.data,onChange:c.dispatch,onBlur:m,onSubmit:m}):s.jsx(z,{title:e.name,onClick:b,children:e.name})}),e.modified&&s.jsx(j,{type:"primitive-dot"})]}),s.jsx(_,{children:s.jsx(A,{data:x,onClick:n=>t==null?void 0:t(n,o)})})]}),s.jsx(O,{children:s.jsx(D,{options:{...i,automaticLayout:!0},instance:p,model:e==null?void 0:e.model,value:e==null?void 0:e.value,language:e==null?void 0:e.language,onMount:w,onModelMount:y})})]})}function G({onMount:e,onModelMount:o,onToolbarClick:x,emit:p}){const i=I("editor"),d=C(),l=a.useMemo(()=>({...d.editor,...i.options}),[i.options,d.editor]),t=i.groups.find(E(i.current)),h=t==null?void 0:t.data.find(E(t.activeTab)),c=r=>{p(R.EDITOR_UPDATE_NAME,r)};return s.jsxs(M,{children:[s.jsx(W,{active:i.loading}),h?s.jsx(H,{data:h,groupId:t.id,instance:t==null?void 0:t.editorInstance,toolbar:i.toolbar,options:l,onMount:e,onModelMount:o,onToolbarClick:x,onSubmit:c}):i.entry||s.jsx(T,{})]})}export{G as default};
