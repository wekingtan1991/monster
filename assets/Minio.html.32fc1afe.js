import{_ as n,o as a,c as s,a as e}from"./app.392b6d9d.js";const i={},d=e(`<h1 id="minio" tabindex="-1"><a class="header-anchor" href="#minio" aria-hidden="true">#</a> Minio</h1><h2 id="\u90E8\u7F72" tabindex="-1"><a class="header-anchor" href="#\u90E8\u7F72" aria-hidden="true">#</a> \u90E8\u7F72</h2><h3 id="docker-\u90E8\u7F72" tabindex="-1"><a class="header-anchor" href="#docker-\u90E8\u7F72" aria-hidden="true">#</a> docker \u90E8\u7F72</h3><p>1\u3001\u4E0B\u8F7D <code>bitnami/minio</code> \u7684docker\u955C\u50CF\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">docker</span> pull bitnami/minio
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>2\u3001\u8FD0\u884C\u5BB9\u5668\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">docker</span> run -d -p <span class="token number">9000</span>:9000 -p <span class="token number">9001</span>:9001 <span class="token punctuation">\\</span>
--name<span class="token operator">=</span>minio --restart<span class="token operator">=</span>always <span class="token punctuation">\\</span>
-e <span class="token string">&quot;MINIO_ROOT_USER=admin&quot;</span> <span class="token punctuation">\\</span>
-e <span class="token string">&quot;MINIO_ROOT_PASSWORD=admin123456&quot;</span> <span class="token punctuation">\\</span>
-v /home/docker/minio/data:/data <span class="token punctuation">\\</span>
-v /home/docker/minio/config:/root/.minio <span class="token punctuation">\\</span>
minio/minio server /data <span class="token punctuation">\\</span>
--console-address <span class="token string">&quot;:9000&quot;</span> --address <span class="token string">&quot;:9001&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="docker-compose-\u90E8\u7F72" tabindex="-1"><a class="header-anchor" href="#docker-compose-\u90E8\u7F72" aria-hidden="true">#</a> docker-compose \u90E8\u7F72</h3><p>1\u3001\u4E0B\u8F7D <code>bitnami/minio</code> \u7684docker\u955C\u50CF\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">docker</span> pull bitnami/minio
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>2\u3001\u6267\u884Cdocker-compose-env.yml\u811A\u672C</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>version: <span class="token string">&#39;3&#39;</span>
services:
  minio:
    image: minio/minio
    container_name: minio
    restart: always
    ports:
      - <span class="token number">9000</span>:9000
      - <span class="token number">9001</span>:9001
    volumes:
      - /home/docker/minio/config:/root/.minio
      - /home/docker/minio/data:/data
    environment:
      - <span class="token assign-left variable">MINIO_ROOT_USER</span><span class="token operator">=</span>lzadmin
      - <span class="token assign-left variable">MINIO_ROOT_PASSWORD</span><span class="token operator">=</span>lzadmin2022P@ssowrd
    command: server /data --console-address <span class="token string">&quot;:9000&quot;</span> --address <span class="token string">&quot;:9001&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u95EE\u9898" tabindex="-1"><a class="header-anchor" href="#\u95EE\u9898" aria-hidden="true">#</a> \u95EE\u9898</h2><h3 id="_1\u3001\u6700\u65B0\u7248\u672Clatest" tabindex="-1"><a class="header-anchor" href="#_1\u3001\u6700\u65B0\u7248\u672Clatest" aria-hidden="true">#</a> 1\u3001\u6700\u65B0\u7248\u672Clatest\uFF1A</h3><p>MINIO_ACCESS_KEY \u66FF\u6362\u4E3A MINIO_ROOT_USER, MINIO_SECRET_KEY \u66FF\u6362\u4E3A MINIO_ROOT_PASSWORD</p><h2 id="\u53C2\u8003" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003" aria-hidden="true">#</a> \u53C2\u8003</h2>`,16),o=[d];function r(c,l){return a(),s("div",null,o)}var p=n(i,[["render",r],["__file","Minio.html.vue"]]);export{p as default};
