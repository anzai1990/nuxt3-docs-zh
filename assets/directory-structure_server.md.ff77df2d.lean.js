import{_ as e,c as a,o as s,d as n}from"./app.b94706c5.js";const v='{"title":"\u670D\u52A1\u5668\u76EE\u5F55(server)","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u63A5\u53E3\u8DEF\u7531","slug":"\u63A5\u53E3\u8DEF\u7531"},{"level":3,"title":"\u4F8B\u5B50","slug":"\u4F8B\u5B50"},{"level":2,"title":"\u670D\u52A1\u5668\u4E2D\u95F4\u4EF6","slug":"\u670D\u52A1\u5668\u4E2D\u95F4\u4EF6"}],"relativePath":"directory-structure/server.md","lastUpdated":1638443660829}',t={},o=n(`__VP_STATIC_START__<h1 id="\u670D\u52A1\u5668\u76EE\u5F55-server" tabindex="-1">\u670D\u52A1\u5668\u76EE\u5F55(server) <a class="header-anchor" href="#\u670D\u52A1\u5668\u76EE\u5F55-server" aria-hidden="true">#</a></h1><p>\u670D\u52A1\u5668\u76EE\u5F55\u7528\u4E8E\u4E3A Nuxt \u5E94\u7528\u7A0B\u5E8F\u521B\u5EFA\u4EFB\u4F55\u540E\u7AEF\u903B\u8F91\u3002\u5B83\u652F\u6301 HMR \u548C\u5F3A\u5927\u7684\u529F\u80FD\u3002</p><p><code>server/</code>\u8BE5\u76EE\u5F55\u5305\u542B\u9879\u76EE\u7684 API \u7AEF\u70B9\u548C\u670D\u52A1\u5668\u4E2D\u95F4\u4EF6\u3002</p><h2 id="\u63A5\u53E3\u8DEF\u7531" tabindex="-1">\u63A5\u53E3\u8DEF\u7531 <a class="header-anchor" href="#\u63A5\u53E3\u8DEF\u7531" aria-hidden="true">#</a></h2><p>Nuxt \u5C06\u81EA\u52A8\u8BFB\u53D6<code>~/server/api</code>\u76EE\u5F55\u4E2D\u7684\u4EFB\u4F55\u6587\u4EF6\uFF0C\u4EE5\u521B\u5EFA API \u7AEF\u70B9\u3002</p><p>\u6BCF\u4E2A\u6587\u4EF6\u90FD\u5E94\u5BFC\u51FA\u4E00\u4E2A\u5904\u7406 API \u8BF7\u6C42\u7684\u9ED8\u8BA4\u51FD\u6570\u3002\u5B83\u53EF\u4EE5\u76F4\u63A5\u8FD4\u56DE\u627F\u8BFA\u6216 JSON \u6570\u636E\uFF08\u6216\u4F7F\u7528 \uFF09\u3002<code>res.end()</code></p><h3 id="\u4F8B\u5B50" tabindex="-1">\u4F8B\u5B50 <a class="header-anchor" href="#\u4F8B\u5B50" aria-hidden="true">#</a></h3><h4 id="hello-world" tabindex="-1">Hello world <a class="header-anchor" href="#hello-world" aria-hidden="true">#</a></h4><div class="language-server/api/hello.ts"><pre><code>export default (req, res) =&gt; &#39;Hello World&#39;
</code></pre></div><p><a href="http://localhost:3000/api/hello" target="_blank" rel="noopener noreferrer">http://localhost:3000/api/hello</a><a href="http://localhost:3000/api/hello" target="_blank" rel="noopener noreferrer">\u4E0A\u67E5\u770B</a>\u7ED3\u679C\u3002</p><h4 id="\u5F02\u6B65\u51FD\u6570" tabindex="-1">\u5F02\u6B65\u51FD\u6570 <a class="header-anchor" href="#\u5F02\u6B65\u51FD\u6570" aria-hidden="true">#</a></h4><div class="language-server/api/async.ts"><pre><code>export default async (req, res) =&gt; {
  await someAsyncFunction()

  return {
    someData: true
  }
}
</code></pre></div><p>**\u793A\u4F8B\uFF1A**\u4F7F\u7528 Node.js \u6837\u5F0F</p><div class="language-server/api/node.ts"><pre><code>import type { IncomingMessage, ServerResponse } from &#39;http&#39;

export default async (req: IncomingMessage, res: ServerResponse) =&gt; {
  res.statusCode = 200
  res.end(&#39;Works!&#39;)
}
</code></pre></div><h2 id="\u670D\u52A1\u5668\u4E2D\u95F4\u4EF6" tabindex="-1">\u670D\u52A1\u5668\u4E2D\u95F4\u4EF6 <a class="header-anchor" href="#\u670D\u52A1\u5668\u4E2D\u95F4\u4EF6" aria-hidden="true">#</a></h2><p>Nuxt \u5C06\u81EA\u52A8\u8BFB\u53D6<code>~/server/middleware</code> \u4E2D\u7684\u4EFB\u4F55\u6587\u4EF6\uFF0C\u4EE5\u4FBF\u4E3A\u60A8\u7684\u9879\u76EE\u521B\u5EFA\u670D\u52A1\u5668\u4E2D\u95F4\u4EF6\u3002</p><p>\u8FD9\u4E9B\u6587\u4EF6\u5C06\u5728\u6BCF\u4E2A\u8BF7\u6C42\u4E0A\u8FD0\u884C\uFF0C\u8FD9\u4E0E\u6620\u5C04\u5230\u5176\u81EA\u5DF1\u8DEF\u7531\u7684<a href="https://v3.nuxtjs.org/docs/directory-structure/api" target="_blank" rel="noopener noreferrer">API routes</a>\u4E0D\u540C\u3002\u8FD9\u901A\u5E38\u662F\u4E3A\u4E86\u8BA9\u60A8\u80FD\u591F\u5411\u6240\u6709\u54CD\u5E94\u6DFB\u52A0\u516C\u5171\u6807\u5934\u3001\u8BB0\u5F55\u54CD\u5E94\u6216\u4FEE\u6539\u4F20\u5165\u8BF7\u6C42\u5BF9\u8C61\u4EE5\u4F9B\u4EE5\u540E\u5728\u8BF7\u6C42\u94FE\u4E2D\u4F7F\u7528\u3002</p><p>\u6BCF\u4E2A\u6587\u4EF6\u90FD\u5E94\u8BE5\u5BFC\u51FA\u4E00\u4E2A\u9ED8\u8BA4\u51FD\u6570\u6765\u5904\u7406\u4E00\u4E2A\u8BF7\u6C42\u3002</p><div class="language-js"><pre><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  req<span class="token punctuation">.</span>someValue <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre></div><p>\u5173\u4E8E<code>req\`\`res</code> \u5BF9\u8C61\u6CA1\u6709\u4EC0\u4E48\u4E0D\u540C\uFF0C\u56E0\u6B64\u952E\u5165\u5B83\u4EEC\u5F88\u7B80\u5355\u3002</p><div class="language-ts"><pre><code><span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> IncomingMessage<span class="token punctuation">,</span> ServerResponse <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;http&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">async</span> <span class="token punctuation">(</span>req<span class="token operator">:</span> IncomingMessage<span class="token punctuation">,</span> res<span class="token operator">:</span> ServerResponse<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  req<span class="token punctuation">.</span>someValue <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre></div>__VP_STATIC_END__`,21),r=[o];function p(c,l,d,i,u,h){return s(),a("div",null,r)}var g=e(t,[["render",p]]);export{v as __pageData,g as default};
