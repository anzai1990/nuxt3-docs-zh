import{_ as n,c as s,o as a,d as t}from"./app.69e6102b.js";const f='{"title":"\u8FD0\u884C\u65F6\u914D\u7F6E Runtime Config","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u516C\u5F00\u8FD0\u884C\u65F6\u914D\u7F6E Exposing runtime config","slug":"\u516C\u5F00\u8FD0\u884C\u65F6\u914D\u7F6E-exposing-runtime-config"},{"level":3,"title":"\u73AF\u5883\u53D8\u91CF Environment Variables","slug":"\u73AF\u5883\u53D8\u91CF-environment-variables"},{"level":2,"title":"\u8BBF\u95EE\u8FD0\u884C\u65F6\u914D\u7F6E Accessing runtime config","slug":"\u8BBF\u95EE\u8FD0\u884C\u65F6\u914D\u7F6E-accessing-runtime-config"},{"level":3,"title":"Vue \u5B9E\u4F8B\u4E2D","slug":"vue-\u5B9E\u4F8B\u4E2D"},{"level":3,"title":"API \u8DEF\u7531 API routes","slug":"api-\u8DEF\u7531-api-routes"},{"level":3,"title":"\u8F93\u5165\u8FD0\u884C\u65F6\u914D\u7F6E Typing runtime config","slug":"\u8F93\u5165\u8FD0\u884C\u65F6\u914D\u7F6E-typing-runtime-config"}],"relativePath":"usage/runtime-config.md","lastUpdated":1638315604413}',e={},o=t(`__VP_STATIC_START__<h1 id="\u8FD0\u884C\u65F6\u914D\u7F6E-runtime-config" tabindex="-1">\u8FD0\u884C\u65F6\u914D\u7F6E <a href="https://v3.nuxtjs.org/docs/usage/runtime-config/" target="_blank" rel="noopener noreferrer">Runtime Config</a> <a class="header-anchor" href="#\u8FD0\u884C\u65F6\u914D\u7F6E-runtime-config" aria-hidden="true">#</a></h1><p>Nuxt \u63D0\u4F9B\u4E86\u4E00\u4E2A API\uFF0C\u7528\u4E8E\u5728\u5E94\u7528\u7A0B\u5E8F\u548C API \u8DEF\u7531\u4E2D\u5B9A\u4E49\u8FD0\u884C\u65F6\u914D\u7F6E\u3002</p><h2 id="\u516C\u5F00\u8FD0\u884C\u65F6\u914D\u7F6E-exposing-runtime-config" tabindex="-1">\u516C\u5F00\u8FD0\u884C\u65F6\u914D\u7F6E Exposing runtime config <a class="header-anchor" href="#\u516C\u5F00\u8FD0\u884C\u65F6\u914D\u7F6E-exposing-runtime-config" aria-hidden="true">#</a></h2><p>\u4E3A\u4E86\u5411\u5E94\u7528\u7A0B\u5E8F\u7684\u5176\u4ED6\u90E8\u5206\u516C\u5F00\u914D\u7F6E\u548C\u73AF\u5883\u53D8\u91CF\uFF0C\u60A8\u9700\u8981\u5728 <code>nuxt.config</code> \u6587\u4EF6\u4E2D\u5B9A\u4E49\u8FD0\u884C\u65F6\u914D\u7F6E\uFF0C\u53EF\u4EE5\u4F7F\u7528 <a href="https://v3.nuxtjs.org/docs/directory-structure/nuxt.config#privateruntimeconfig" target="_blank" rel="noopener noreferrer"><code>privateRuntimeConfig</code> \u6216 <code>publicRuntimeConfig</code> \u9009\u9879</a>(\u6839\u636E\u60A8\u662F\u5426\u5E0C\u671B\u5728\u5E94\u7528\u7A0B\u5E8F\u7684\u5BA2\u6237\u7AEF\u90E8\u5206\u53EF\u4EE5\u8BBF\u95EE\u5B83\u6765\u9009\u62E9\u4F7F\u7528)\u3002</p><p><strong>\u793A\u4F8B\uFF1A</strong></p><div class="language-ts [nuxt.config.ts]"><pre><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineNuxtConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    publicRuntimeConfig<span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token constant">API_BASE</span><span class="token operator">:</span> <span class="token string">&#39;/api&#39;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    privateRuntimeConfig<span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token constant">API_SECRET</span><span class="token operator">:</span> <span class="token string">&#39;123&#39;</span> <span class="token comment">// \u4EC5\u670D\u52A1\u7AEF\u53EF\u7528\uFF0C\u4F1A\u8986\u76D6publicRuntimeConfig\u7684\u914D\u7F6E</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><p>\u5728\u5C06 <code>API_BASE</code> \u6DFB\u52A0\u5230 <code>publicRuntimeConfig</code> \u65F6\uFF0CNuxt \u4F1A\u5C06\u5176\u6DFB\u52A0\u5230\u9875\u9762\u7684\u6709\u6548\u8D1F\u8F7D\u4E2D\u3002\u8FD9\u6837\u6211\u4EEC\u5C31\u53EF\u4EE5\u5728\u670D\u52A1\u5668\u548C\u6D4F\u89C8\u5668\u4E2D\u8BBF\u95EE <code>API_BASE</code>\u3002</p><h3 id="\u73AF\u5883\u53D8\u91CF-environment-variables" tabindex="-1">\u73AF\u5883\u53D8\u91CF Environment Variables <a class="header-anchor" href="#\u73AF\u5883\u53D8\u91CF-environment-variables" aria-hidden="true">#</a></h3><p>\u63D0\u4F9B\u914D\u7F6E\u7684\u6700\u5E38\u7528\u65B9\u6CD5\u662F\u4F7F\u7528 <a href="https://medium.com/chingu/an-introduction-to-environment-variables-and-how-to-use-them-f602f66d15fa" target="_blank" rel="noopener noreferrer">\u73AF\u5883\u53D8\u91CF</a> \u3002 Nuxt CLI \u5185\u7F6E <a href="https://github.com/motdotla/dotenv" target="_blank" rel="noopener noreferrer">dotenv</a> \u652F\u6301\u3002</p><p>\u9664\u4E86\u4E00\u4E9B\u8FDB\u7A0B(process)\u73AF\u5883\u53D8\u91CF\u4E4B\u5916\uFF0C\u5982\u679C\u5728\u9879\u76EE\u7684\u6839\u76EE\u5F55\u4E2D\u6709\u4E00\u4E2A <code>.env</code> \u6587\u4EF6\uFF0C\u5B83\u5C06\u81EA\u52A8\u52A0\u8F7D\u5230 <code>process.<wbr>env</code> \u4E2D\uFF0C\u5E76\u4E14\u53EF\u4EE5\u5728 <code>nuxt.config</code> \u6587\u4EF6\u548C\u6A21\u5757\u4E2D\u8BBF\u95EE\u3002</p><p><strong>\u793A\u4F8B\uFF1A</strong></p><div class="language-sh [.env]"><pre><code>BASE_URL=https://nuxtjs.org
API_SECRET=api_secret_token
</code></pre></div><div class="language-ts [nuxt.config.ts]"><pre><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineNuxtConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    publicRuntimeConfig<span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token constant">BASE_URL</span><span class="token operator">:</span> process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">BASE_URL</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    privateRuntimeConfig<span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token constant">API_SECRET</span><span class="token operator">:</span> process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">API_SECRET</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><div class="tip custom-block"><p class="custom-block-title">\u{1F4A1} \u63D0\u793A\uFF1A</p><p>\u867D\u7136\u6CA1\u6709\u5FC5\u8981\uFF0C\u4F46\u662F\u901A\u8FC7\u4F7F\u7528\u76F8\u540C\u7684\u8FD0\u884C\u65F6\u914D\u7F6E\u540D\u79F0\u4F5C\u4E3A env \u53D8\u91CF\uFF0C\u60A8\u53EF\u4EE5\u5728\u751F\u4EA7\u73AF\u5883\u4E2D\u4F7F\u7528\u5E73\u53F0\u73AF\u5883\u53D8\u91CF\u8F7B\u677E\u5730\u8986\u76D6\u5B83\u4EEC\u3002</p></div><h2 id="\u8BBF\u95EE\u8FD0\u884C\u65F6\u914D\u7F6E-accessing-runtime-config" tabindex="-1">\u8BBF\u95EE\u8FD0\u884C\u65F6\u914D\u7F6E Accessing runtime config <a class="header-anchor" href="#\u8BBF\u95EE\u8FD0\u884C\u65F6\u914D\u7F6E-accessing-runtime-config" aria-hidden="true">#</a></h2><h3 id="vue-\u5B9E\u4F8B\u4E2D" tabindex="-1">Vue \u5B9E\u4F8B\u4E2D <a class="header-anchor" href="#vue-\u5B9E\u4F8B\u4E2D" aria-hidden="true">#</a></h3><p>\u5728 Nuxt \u5E94\u7528\u7A0B\u5E8F\u7684 Vue \u5B9E\u4F8B\u4E2D\uFF0C\u9700\u8981\u8C03\u7528 <code>useRuntimeConfig()</code> \u6765\u8BBF\u95EE\u8FD0\u884C\u65F6\u914D\u7F6E\u3002</p><div class="info custom-block"><p class="custom-block-title">\u6CE8\u610F\uFF1A\u5BA2\u6237\u7AEF\u548C\u670D\u52A1\u5668\u7AEF\u7684\u884C\u4E3A\u662F\u4E0D\u540C\u7684</p><ul><li>\u5728\u5BA2\u6237\u7AEF\uFF0C\u53EA\u6709 <code>publicRuntimeConfig</code> \u53EF\u7528\uFF0C\u5E76\u4E14\u8BE5\u5BF9\u8C61\u662F<strong>\u53EF\u4FEE\u6539\u7684\u54CD\u5E94\u5F0F\u5BF9\u8C61</strong>\u3002</li><li>\u5728\u670D\u52A1\u5668\u7AEF\uFF0C<code>publicRuntimeConfig</code> \u548C <code>privateRuntimeConfig</code> \u88AB\u5408\u5E76\u5E76\u4E14\u5BF9\u8C61\u662F<strong>\u53EA\u8BFB\u7684</strong>\u4EE5\u907F\u514D\u4E0A\u4E0B\u6587\u5171\u4EAB\u3002</li></ul></div><div class="language-vue"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>Token: {{ config.API_AUTH_TOKEN }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">const</span> config <span class="token operator">=</span> <span class="token function">useRuntimeConfig</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><div class="warning custom-block"><p class="custom-block-title">\u5B89\u5168\u6CE8\u610F\uFF1A</p><p>\u5982\u679C<code>API_AUTH_TOKEN</code> \u662F\u79C1\u6709\u914D\u7F6E\uFF0C\u8BF7\u4E0D\u8981\u4F7F\u7528\u4E0A\u9762\u7684\u793A\u4F8B\u3002 \u5373\u4F7F\u60A8\u4F7F\u7528<code>privateRuntimeConfig</code>\uFF0C\u60A8\u4ECD\u7136\u5FC5\u987B\u5C0F\u5FC3\u4E0D\u8981\u5C06\u6B64\u7C7B\u914D\u7F6E\u66B4\u9732\u7ED9<strong>\u6709\u6548\u8D1F\u8F7D</strong>\u6216<strong>html</strong>\uFF01</p></div><div class="info custom-block"><p class="custom-block-title">\u6CE8\u610F\uFF1A</p><p>\u{1F449} <strong><code>useRuntimeConfig</code> \u4EC5\u5728 <code>setup\u51FD\u6570</code> \u6216 <code>\u751F\u547D\u5468\u671F\u94A9\u5B50</code> \u5185\u6709\u6548</strong></p></div><h3 id="api-\u8DEF\u7531-api-routes" tabindex="-1">API \u8DEF\u7531 API routes <a class="header-anchor" href="#api-\u8DEF\u7531-api-routes" aria-hidden="true">#</a></h3><p>\u5728 API \u8DEF\u7531\u4E2D\uFF0C\u60A8\u53EF\u4EE5\u901A\u8FC7\u76F4\u63A5\u4ECE\u865A\u62DF <code>#config</code> \u5BFC\u5165\u6765\u8BBF\u95EE\u8FD0\u884C\u65F6\u914D\u7F6E\u3002</p><div class="language-ts"><pre><code><span class="token keyword">import</span> config <span class="token keyword">from</span> <span class="token string">&#39;#config&#39;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> result <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">$fetch</span><span class="token punctuation">(</span><span class="token string">&#39;https://my.api.com/test&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
        headers<span class="token operator">:</span> <span class="token punctuation">{</span>
            Authorization<span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">Bearer </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>config<span class="token punctuation">.</span><span class="token constant">API_AUTH_TOKEN</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> result
<span class="token punctuation">}</span>
</code></pre></div><h3 id="\u8F93\u5165\u8FD0\u884C\u65F6\u914D\u7F6E-typing-runtime-config" tabindex="-1">\u8F93\u5165\u8FD0\u884C\u65F6\u914D\u7F6E Typing runtime config <a class="header-anchor" href="#\u8F93\u5165\u8FD0\u884C\u65F6\u914D\u7F6E-typing-runtime-config" aria-hidden="true">#</a></h3><p>\u76EE\u524D\u53EF\u4EE5\u624B\u52A8\u8F93\u5165\u8FD0\u884C\u65F6\u914D\u7F6E\u6587\u4EF6\u3002</p><div class="language-ts [index.d.ts]"><pre><code><span class="token keyword">declare</span> <span class="token keyword">module</span> <span class="token string">&#39;@nuxt/schema&#39;</span> <span class="token punctuation">{</span>
    <span class="token keyword">interface</span> <span class="token class-name">PublicRuntimeConfig</span> <span class="token punctuation">{</span>
        testConfig<span class="token operator">:</span> <span class="token builtin">string</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">interface</span> <span class="token class-name">PrivateRuntimeConfig</span> <span class="token punctuation">{</span>
        token<span class="token operator">:</span> <span class="token builtin">string</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token comment">// \u786E\u4FDD\u5728\u6269\u5145\u7C7B\u578B\u65F6 import/export \u67D0\u4E9B\u6BD4\u8F83\u91CD\u8981\u7684\u5185\u5BB9</span>
<span class="token keyword">export</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
</code></pre></div>__VP_STATIC_END__`,27),p=[o];function c(i,l,u,r,k,d){return a(),s("div",null,p)}var m=n(e,[["render",c]]);export{f as __pageData,m as default};
