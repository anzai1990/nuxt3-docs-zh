import{_ as n,c as s,o as a,d as t}from"./app.b94706c5.js";const h='{"title":"\u63D2\u4EF6 plugins","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u521B\u5EFA\u63D2\u4EF6","slug":"\u521B\u5EFA\u63D2\u4EF6"},{"level":2,"title":"\u81EA\u52A8\u63D0\u4F9B helper \u529F\u80FD","slug":"\u81EA\u52A8\u63D0\u4F9B-helper-\u529F\u80FD"},{"level":2,"title":"\u81EA\u52A8\u731C\u6D4B\u7C7B\u578B\u7684\u63D2\u4EF6","slug":"\u81EA\u52A8\u731C\u6D4B\u7C7B\u578B\u7684\u63D2\u4EF6"},{"level":3,"title":"\u9AD8\u7EA7\u7528\u6CD5","slug":"\u9AD8\u7EA7\u7528\u6CD5"},{"level":2,"title":"Vue \u63D2\u4EF6","slug":"vue-\u63D2\u4EF6"}],"relativePath":"directory-structure/plugins.md","lastUpdated":1638443660829}',p={},e=t(`__VP_STATIC_START__<h1 id="\u63D2\u4EF6-plugins" tabindex="-1">\u63D2\u4EF6 <a href="https://v3.nuxtjs.org/docs/directory-structure/plugins" target="_blank" rel="noopener noreferrer">plugins</a> <a class="header-anchor" href="#\u63D2\u4EF6-plugins" aria-hidden="true">#</a></h1><h1 id="\u63D2\u4EF6\u76EE\u5F55" tabindex="-1">\u63D2\u4EF6\u76EE\u5F55 <a class="header-anchor" href="#\u63D2\u4EF6\u76EE\u5F55" aria-hidden="true">#</a></h1><p>Nuxt \u5C06\u81EA\u52A8\u8BFB\u53D6&quot;plugins&quot;\u76EE\u5F55\u4E2D\u7684\u6587\u4EF6\u5E76\u52A0\u8F7D\u5B83\u4EEC\u3002\u5982\u679C\u4EC5\u60F3\u5728\u670D\u52A1\u5668\u7AEF\u6216\u5BA2\u6237\u7AEF\u52A0\u8F7D\u63D2\u4EF6\u65F6,\u53EF\u4EE5\u5728\u6587\u4EF6\u540D\u4E2D\u4F7F\u7528<code>.server</code>\u6216<code>.client</code>\u540E\u7F00\u3002</p><p>::alert{type=warning} <code>plugins/</code>\u76EE\u5F55\u4E2D\u7684\u6240\u6709\u63D2\u4EF6\u90FD\u662F\u81EA\u52A8\u6CE8\u518C\u7684\uFF0C\u56E0\u6B64\u60A8\u4E0D\u5E94\u5C06\u5B83\u4EEC\u5355\u72EC\u6DFB\u52A0\u5230&quot;nuxt.config&quot;\u4E2D\u3002 ::</p><h2 id="\u521B\u5EFA\u63D2\u4EF6" tabindex="-1">\u521B\u5EFA\u63D2\u4EF6 <a class="header-anchor" href="#\u521B\u5EFA\u63D2\u4EF6" aria-hidden="true">#</a></h2><p>\u4F20\u9012\u7ED9\u63D2\u4EF6\u7684\u552F\u4E00\u53C2\u6570\u662F <a href="https://v3.nuxtjs.org/docs/usage/nuxt-app" target="_blank" rel="noopener noreferrer"><code>nuxtApp</code></a>.</p><div class="language-ts"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> defineNuxtPlugin <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;#app&quot;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineNuxtPlugin</span><span class="token punctuation">(</span><span class="token punctuation">(</span>nuxtApp<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token comment">// Doing something with nuxtApp</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><h2 id="\u81EA\u52A8\u63D0\u4F9B-helper-\u529F\u80FD" tabindex="-1">\u81EA\u52A8\u63D0\u4F9B helper \u529F\u80FD <a class="header-anchor" href="#\u81EA\u52A8\u63D0\u4F9B-helper-\u529F\u80FD" aria-hidden="true">#</a></h2><p>\u5982\u679C\u60A8\u60F3\u5728<code>NuxtApp</code>\u5B9E\u4F8B\u4E0A\u63D0\u4F9B helper \u529F\u80FD\uFF0C\u53EA\u9700\u5728\u63D2\u4EF6\u4E2D<code>provide</code>\u952E\u503C\u8FD4\u56DE\u5373\u53EF\u3002\u4F8B\u5982\uFF1A</p><div class="language-ts"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> defineNuxtPlugin <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;#app&quot;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineNuxtPlugin</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">{</span>
    provide<span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token function-variable function">hello</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token string">&quot;world&quot;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><p>\u5728\u53E6\u4E00\u4E2A\u6587\u4EF6\u4E2D\uFF0C\u60A8\u53EF\u4EE5\u4F7F\u7528\u4EE5\u4E0B\u5185\u5BB9\uFF1A</p><div class="language-vue"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>
    {{ $hello() }}
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ts<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token comment">// alternatively, you can also use it here</span>
<span class="token keyword">const</span> <span class="token punctuation">{</span> $hello <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useNuxtApp</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h2 id="\u81EA\u52A8\u731C\u6D4B\u7C7B\u578B\u7684\u63D2\u4EF6" tabindex="-1">\u81EA\u52A8\u731C\u6D4B\u7C7B\u578B\u7684\u63D2\u4EF6 <a class="header-anchor" href="#\u81EA\u52A8\u731C\u6D4B\u7C7B\u578B\u7684\u63D2\u4EF6" aria-hidden="true">#</a></h2><p>\u5982\u679C\u60A8\u4ECE\u63D2\u4EF6\u8FD4\u56DE helpers\uFF0C\u5B83\u4EEC\u5C06\u88AB\u81EA\u52A8\u52A0\u4E0A\u7C7B\u578B;\u5982\u679C\u8C03\u7528<code>useNuxtApp()</code>,\u4F60\u4F1A\u5728\u8FD9\u4E2A\u8FD4\u56DE\u503C\u53D1\u73B0\u5B83\u4EEC\u7684\u7C7B\u578B\uFF0C\u5728\u60A8\u7684\u6A21\u677F\u4E2D\u4E5F\u662F\u8FD9\u6837\u81EA\u52A8\u5904\u7406\u3002</p><p>::alert \u5982\u679C\u60A8\u9700\u8981<em>\u5728</em>\u53E6\u4E00\u4E2A\u63D2\u4EF6\u4E2D\u4F7F\u7528\u63D0\u4F9B\u7684 helper\uFF0C\u5219\u53EF\u4EE5\u8C03\u7528<code>useNuxtApp()</code>\u6765\u83B7\u53D6\u7C7B\u578B\u7684\u7248\u672C\u3002\u4F46\u4E00\u822C\u6765\u8BF4\u5E94\u907F\u514D\u8FD9\u79CD\u60C5\u51B5\uFF0C\u9664\u975E\u60A8\u786E\u5B9A\u63D2\u4EF6\u7684\u8C03\u7528\u987A\u5E8F\u3002 ::</p><h3 id="\u9AD8\u7EA7\u7528\u6CD5" tabindex="-1">\u9AD8\u7EA7\u7528\u6CD5 <a class="header-anchor" href="#\u9AD8\u7EA7\u7528\u6CD5" aria-hidden="true">#</a></h3><p>\u5BF9\u4E8E\u9AD8\u7EA7\u7528\u4F8B\uFF0C\u60A8\u53EF\u4EE5\u58F0\u660E\u6CE8\u5165\u5C5E\u6027\u7684\u7C7B\u578B\uFF0C\u5982\u4E0B\u6240\u793A\uFF1A</p><div class="language-ts [index.d.ts]"><pre><code><span class="token keyword">declare</span> <span class="token keyword">module</span> <span class="token string">&quot;#app&quot;</span> <span class="token punctuation">{</span>
  <span class="token keyword">interface</span> <span class="token class-name">NuxtApp</span> <span class="token punctuation">{</span>
    <span class="token function">$hello</span><span class="token punctuation">(</span>msg<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">string</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">declare</span> <span class="token keyword">module</span> <span class="token string">&quot;@vue/runtime-core&quot;</span> <span class="token punctuation">{</span>
  <span class="token keyword">interface</span> <span class="token class-name">ComponentCustomProperties</span> <span class="token punctuation">{</span>
    <span class="token function">$hello</span><span class="token punctuation">(</span>msg<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">string</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
</code></pre></div><h2 id="vue-\u63D2\u4EF6" tabindex="-1">Vue \u63D2\u4EF6 <a class="header-anchor" href="#vue-\u63D2\u4EF6" aria-hidden="true">#</a></h2><p>\u5982\u679C\u4F60\u60F3\u4F7F\u7528 Vue \u63D2\u4EF6\uFF0C\u6BD4\u5982 <a href="https://github.com/MatteoGabriele/vue-gtag" target="_blank" rel="noopener noreferrer">vue-gtag</a> \u6765\u6DFB\u52A0 Google Analytics \u6807\u7B7E\uFF0C\u4F60\u53EF\u4EE5\u4F7F\u7528 Nuxt \u63D2\u4EF6\u6765\u505A\u5230\u8FD9\u4E00\u70B9\u3002</p><blockquote><p>\u6709\u4E00\u4E2A\u5F00\u653E\u7684 RFC \u53EF\u4EE5\u4F7F\u8FD9\u66F4\u5BB9\u6613\uFF01\u53C2\u89C1 <a href="https://github.com/nuxt/framework/discussions/1175" target="_blank" rel="noopener noreferrer">nuxt/framework#1175</a></p></blockquote><p>\u9996\u5148\u5B89\u88C5\u6240\u9700\u7684\u63D2\u4EF6\u3002</p><div class="language-bash"><pre><code><span class="token function">yarn</span> <span class="token function">add</span> --dev vue-gtag-next
</code></pre></div><p>\u7136\u540E\u521B\u5EFA\u4E00\u4E2A\u63D2\u4EF6\u6587\u4EF6<code>plugins/vue-gtag.client.js</code>\u3002</p><div class="language-ts"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> defineNuxtPlugin <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;#app&quot;</span>
<span class="token keyword">import</span> VueGtag <span class="token keyword">from</span> <span class="token string">&quot;vue-gtag-next&quot;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineNuxtPlugin</span><span class="token punctuation">(</span><span class="token punctuation">(</span>nuxtApp<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  nuxtApp<span class="token punctuation">.</span>vueApp<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>VueGtag<span class="token punctuation">,</span> <span class="token punctuation">{</span>
    property<span class="token operator">:</span> <span class="token punctuation">{</span>
      id<span class="token operator">:</span> <span class="token string">&quot;GA_MEASUREMENT_ID&quot;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div>__VP_STATIC_END__`,25),o=[e];function c(u,l,r,i,k,d){return a(),s("div",null,o)}var f=n(p,[["render",c]]);export{h as __pageData,f as default};
