import{_ as a,c as n,o as s,d as t}from"./app.b94706c5.js";const m='{"title":"\u5143\u6807\u7B7E","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u7EC4\u5408\u5F0Fapi useMeta","slug":"\u7EC4\u5408\u5F0Fapi-usemeta"},{"level":2,"title":"\u5143\u7EC4\u4EF6","slug":"\u5143\u7EC4\u4EF6"}],"relativePath":"usage/meta.md","lastUpdated":1638443660829}',p={},e=t(`__VP_STATIC_START__<h1 id="\u5143\u6807\u7B7E" tabindex="-1">\u5143\u6807\u7B7E <a class="header-anchor" href="#\u5143\u6807\u7B7E" aria-hidden="true">#</a></h1><p>\u60A8\u53EF\u4EE5\u901A\u8FC7\u51E0\u79CD\u4E0D\u540C\u7684\u65B9\u5F0F\u4E3A\u60A8\u7684\u7F51\u7AD9\u81EA\u5B9A\u4E49\u5143\u6807\u7B7E\uFF1A</p><h2 id="\u7EC4\u5408\u5F0Fapi-usemeta" tabindex="-1">\u7EC4\u5408\u5F0Fapi useMeta <a class="header-anchor" href="#\u7EC4\u5408\u5F0Fapi-usemeta" aria-hidden="true">#</a></h2><p>\u5728\u60A8\u7684<code>setup</code>\u51FD\u6570\u4E2D\uFF0C\u60A8\u53EF\u4EE5<code>useMeta</code>\u4F7F\u7528\u5143\u5C5E\u6027\u7684\u5BF9\u8C61\u8C03\u7528\u4E0E\u5143\u6807\u8BB0\u5BF9\u5E94\u7684\u952E\uFF1A<code>title</code>, <code>base</code>, <code>script</code>, <code>style</code>, <code>meta</code>and <code>link</code>, \u4EE5\u53CA<code>htmlAttrs</code>\u548C <code>bodyAttrs</code>\u3002\u6216\u8005\uFF0C\u60A8\u53EF\u4EE5\u4F20\u9012\u4E00\u4E2A\u8FD4\u56DE\u54CD\u5E94\u5F0F\u5143\u6570\u636E\u5BF9\u8C61\u7684\u51FD\u6570\u3002</p><p>\u4F8B\u5982\uFF1A</p><div class="language-vue"><pre><code>export default {
  setup () {
    useMeta({
      meta: [
        { name: &#39;viewport&#39;, content: &#39;width=device-width, initial-scale=1, maximum-scale=1&#39; }
      ],
      bodyAttrs: {
        class: &#39;test&#39;
      }
    })
  }
}
</code></pre></div><h2 id="\u5143\u7EC4\u4EF6" tabindex="-1">\u5143\u7EC4\u4EF6 <a class="header-anchor" href="#\u5143\u7EC4\u4EF6" aria-hidden="true">#</a></h2><p>Nuxt\u63D0\u4F9B<code>&lt;Title&gt;</code>\uFF0C<code>&lt;Base&gt;</code>\uFF0C<code>&lt;Script&gt;</code>\uFF0C<code>&lt;Style&gt;</code>\uFF0C<code>&lt;Meta&gt;</code>\uFF0C<code>&lt;Link&gt;</code>\uFF0C<code>&lt;Body&gt;</code>\uFF0C<code>&lt;Html&gt;</code>\u548C<code>&lt;Head&gt;</code>\u7EC4\u4EF6\uFF0C\u4EE5\u4FBF\u60A8\u53EF\u4EE5\u76F4\u63A5\u4E0E\u60A8\u7684\u7EC4\u4EF6\u7684\u6A21\u677F\u4E2D\u7684\u5143\u6570\u636E\u8FDB\u884C\u4EA4\u4E92\u3002</p><p>\u7531\u4E8E\u8FD9\u4E9B\u7EC4\u4EF6\u540D\u79F0\u4E0E\u539F\u751F HTML \u5143\u7D20\u5339\u914D\uFF0C\u56E0\u6B64\u5728 <strong>\u6A21\u677F\u4E2D\u5C06\u5B83\u4EEC\u5927\u5199\u975E\u5E38\u91CD\u8981</strong>\u3002</p><p><code>&lt;Head&gt;</code>\u548C<code>&lt;Body&gt;</code>\u53EF\u4EE5\u63A5\u53D7\u5D4C\u5957\u5143\u6807\u8BB0\uFF08\u51FA\u4E8E\u5BA1\u7F8E\u539F\u56E0\uFF09\uFF0C\u4F46\u8FD9\u5BF9\u5D4C\u5957\u5143\u6807\u8BB0\u5728\u6700\u7EC8 HTML \u4E2D\u7684\u5448\u73B0<em>\u4F4D\u7F6E</em>\u6CA1\u6709\u5F71\u54CD\u3002</p><p>\u4F8B\u5982\uFF1A</p><div class="language-vue"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>
    Hello World
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Html</span> <span class="token attr-name">:lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>dynamic &gt; 50 ? <span class="token punctuation">&#39;</span>en-GB<span class="token punctuation">&#39;</span> : <span class="token punctuation">&#39;</span>en-US<span class="token punctuation">&#39;</span><span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Head</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Title</span><span class="token punctuation">&gt;</span></span>{{ dynamic }} title<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Title</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>description<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>\`My page<span class="token punctuation">&#39;</span>s \${dynamic} description\`<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Link</span> <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>preload<span class="token punctuation">&quot;</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>/test.txt<span class="token punctuation">&quot;</span></span> <span class="token attr-name">as</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>script<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Head</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Html</span><span class="token punctuation">&gt;</span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>blue<span class="token punctuation">&quot;</span></span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>dynamic = Math.random() * 100<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
      Click me
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token function-variable function">data</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span><span class="token punctuation">{</span> dynamic<span class="token operator">:</span> <span class="token number">49</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre></div>__VP_STATIC_END__`,12),o=[e];function c(l,u,i,k,d,r){return s(),n("div",null,o)}var h=a(p,[["render",c]]);export{m as __pageData,h as default};
