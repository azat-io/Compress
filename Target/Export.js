const{default:u}=await import("./Option/Index.js"),{Merge:n,Default:c}=await import("files-pipe"),{default:p}=await import("sharp");var d=(o={})=>{for(const a in o)Object.prototype.hasOwnProperty.call(o,a)&&o[a]===!0&&(o[a]=u[a]);const e=n(u,o),f=new Set;if(typeof e.Path<"u"&&(e.Path instanceof Array||e.Path instanceof Set))for(const a of e.Path)f.add(a);return{name:"astro-compress",hooks:{"astro:build:done":async({dir:a})=>{f.size||f.add(a),c.Cache&&e.Cache&&e.Cache.Search===c.Cache.Search&&(e.Cache.Search=a);for(const[s,r]of Object.entries(e))if(r)for(const m of f)await(await(await(await new(await import("files-pipe")).default(e.Cache,e.Logger).In(m)).By(typeof e.Map=="object"?e.Map[s]:"")).Not(e.Exclude)).Pipe(n(e.Action,n(e.Action,{Wrote:async t=>{switch(s){case"CSS":return(await import("csso")).minify(t.Buffer.toString(),r).css;case"HTML":return await(await import("html-minifier-terser")).minify(t.Buffer.toString(),r);case"JavaScript":{const{code:i}=await(await import("terser")).minify(t.Buffer.toString(),r);return i||t.Buffer}case"Image":return(await import("./Fn/Image.js")).default(r,t);case"SVG":{const{data:i}=(await import("svgo")).optimize(t.Buffer.toString(),r);return typeof i<"u"?i:t.Buffer}default:return t.Buffer}},Read:async t=>{switch(s){case"Image":{const{format:i}=await p(t.Input).metadata();return p(t.Input,{failOn:"none",sequentialRead:!0,unlimited:!0,animated:i==="webp"||i==="gif"})}default:return await c.Action.Read(t)}},Fulfilled:async t=>t.Files>0?`Successfully compressed a total of ${t.Files} ${s} ${t.Files===1?"file":"files"} for ${await(await import("files-pipe/Target/Fn/Bytes.js")).default(t.Info.Total)}.`:!1})))}}}};export{u as Default,n as Merge,c as _Default,d as default,p as sharp};