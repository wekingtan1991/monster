import{_ as a,o as i,c as d,b as l,d as c,w as r,a as e,e as n,r as o}from"./app.392b6d9d.js";const m={},t=e(`<h1 id="mysql" tabindex="-1"><a class="header-anchor" href="#mysql" aria-hidden="true">#</a> MySQL</h1><h2 id="\u90E8\u7F72" tabindex="-1"><a class="header-anchor" href="#\u90E8\u7F72" aria-hidden="true">#</a> \u90E8\u7F72</h2><h3 id="docker-\u90E8\u7F72" tabindex="-1"><a class="header-anchor" href="#docker-\u90E8\u7F72" aria-hidden="true">#</a> docker \u90E8\u7F72</h3><p>1\u3001\u4E0B\u8F7D <code>mysql:8.0.28-oracle</code> \u7684docker\u955C\u50CF\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">docker</span> pull mysql:8.0.28-oracle
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>2\u3001\u4E0A\u4F20 <code>cnf</code> \u6587\u4EF6\u5230 <code>/home/docker/mysql/conf/</code>\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">mkdir</span> -p /home/docker/mysql/conf
<span class="token function">cp</span> mysql8.cnf /home/docker/mysql/conf/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>3\u3001\u8FD0\u884C\u5BB9\u5668\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">docker</span> run -p <span class="token number">3306</span>:3306 --name mysql8 <span class="token punctuation">\\</span>
-v /home/docker/mysql/log:/logs <span class="token punctuation">\\</span>
-v /home/docker/mysql/data:/var/lib/mysql <span class="token punctuation">\\</span>
-v /home/docker/mysql/conf:/etc/mysql/conf.d <span class="token punctuation">\\</span>
-e <span class="token assign-left variable">MYSQL_ROOT_PASSWORD</span><span class="token operator">=</span>root  <span class="token punctuation">\\</span>
-d mysql:8.0.28-oracle
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="docker-compose-\u90E8\u7F72" tabindex="-1"><a class="header-anchor" href="#docker-compose-\u90E8\u7F72" aria-hidden="true">#</a> docker-compose \u90E8\u7F72</h3><p>1\u3001\u4E0B\u8F7D <code>mysql:8.0.28-oracle</code> \u7684docker\u955C\u50CF\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">docker</span> pull mysql:8.0.28-oracle
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>2\u3001\u4E0A\u4F20 <code>cnf</code> \u6587\u4EF6\u5230 <code>/home/docker/mysql/conf/</code>\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">mkdir</span> -p /home/docker/mysql/conf
<span class="token function">cp</span> mysql8.cnf /home/docker/mysql/conf/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>3\u3001\u6267\u884Cdocker-compose-env.yml\u811A\u672C</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>version: <span class="token string">&#39;3&#39;</span>
services:
  mysql:
    <span class="token comment"># \u6307\u5B9A\u670D\u52A1\u4F7F\u7528\u7684\u955C\u50CF</span>
    image: mysql:8.0.28-oracle
    <span class="token comment"># \u6307\u5B9A\u5BB9\u5668\u540D\u79F0</span>
    container_name: mysql8
    command:
      --default-authentication-plugin<span class="token operator">=</span>mysql_native_password
      --character-set-server<span class="token operator">=</span>utf8mb4
      --collation-server<span class="token operator">=</span>utf8mb4_general_ci
      --explicit_defaults_for_timestamp<span class="token operator">=</span>true
    restart: always
    <span class="token comment"># \u6307\u5B9A\u670D\u52A1\u8FD0\u884C\u7684\u7AEF\u53E3</span>
    ports:
      - <span class="token number">3306</span>:3306
    <span class="token comment"># \u6307\u5B9A\u5BB9\u5668\u4E2D\u9700\u8981\u6302\u8F7D\u7684\u6587\u4EF6</span>
    volumes:
      - /home/docker/mysql/log:/logs
      - /home/docker/mysql/data:/var/lib/mysql
      - /home/docker/mysql/conf:/etc/mysql/conf.d
    <span class="token comment"># \u6307\u5B9A\u5BB9\u5668\u7684\u73AF\u5883\u53D8\u91CF</span>
    environment:
      - <span class="token assign-left variable">MYSQL_ROOT_PASSWORD</span><span class="token operator">=</span>root
      - <span class="token assign-left variable">MYSQL_ROOT_HOST</span><span class="token operator">=</span><span class="token string">&#39;%&#39;</span>       <span class="token comment"># \u8BBF\u95EE\u6743\u9650</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u914D\u7F6E\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u914D\u7F6E\u6587\u4EF6" aria-hidden="true">#</a> \u914D\u7F6E\u6587\u4EF6</h3><h4 id="\u67E5\u627E\u914D\u7F6E\u6587\u4EF6\u4F4D\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u67E5\u627E\u914D\u7F6E\u6587\u4EF6\u4F4D\u7F6E" aria-hidden="true">#</a> \u67E5\u627E\u914D\u7F6E\u6587\u4EF6\u4F4D\u7F6E</h4><p>1\u3001\u8FDB\u5165\u5BB9\u5668\u5185\u90E8\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">docker</span> <span class="token builtin class-name">exec</span> -it mysql8 /bin/bash
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>2\u3001\u67E5\u627E\u914D\u7F6E\u6587\u4EF6\u4F4D\u7F6E\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">find</span> / -name <span class="token string">&quot;*.cnf&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>3\u3001\u6839\u636E\u67E5\u627E\u7ED3\u679C\uFF1A</p><p>/etc/my.cnf</p><h4 id="\u914D\u7F6E\u6587\u4EF6\u4F8B\u5B50" tabindex="-1"><a class="header-anchor" href="#\u914D\u7F6E\u6587\u4EF6\u4F8B\u5B50" aria-hidden="true">#</a> \u914D\u7F6E\u6587\u4EF6\u4F8B\u5B50</h4><p>1\u3001<code>mysql8.cnf</code> \u81EA\u5B9A\u4E49\u914D\u7F6E\u6587\u4EF6</p><div class="language-config ext-config line-numbers-mode"><pre class="language-config"><code>[mysqld]
sql_mode=STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,27),v=n("2\u3001"),u=n("mysql8 \u914D\u7F6E\u6587\u4EF6\u9ED8\u8BA4\u4F8B\u5B50"),p=e(`<p>3\u3001\u901A\u8FC7 <code>my.cnf</code> \u53EF\u4EE5\u77E5\u9053\uFF0Cmysql \u8FD8\u5305\u62EC <code>/etc/mysql/conf.d/</code> \u8FD9\u4E2A\u5730\u65B9\u7684\u914D\u7F6E\u6587\u4EF6\u3002\u6240\u4EE5 <code>mysql8.cnf</code> \u53EF\u4EE5\u653E\u5230\u8BE5\u4F4D\u7F6E</p><h3 id="docker-\u5BB9\u5668\u521B\u5EFA\u65B0\u7528\u6237" tabindex="-1"><a class="header-anchor" href="#docker-\u5BB9\u5668\u521B\u5EFA\u65B0\u7528\u6237" aria-hidden="true">#</a> docker \u5BB9\u5668\u521B\u5EFA\u65B0\u7528\u6237</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>1\u3001\u8FDB\u5165 mysql \u5BB9\u5668\u5185\u90E8
docker exec -it \u5BB9\u5668ID /bin/bash

2\u3001\u767B\u5F55 mysql
mysql -u root -p
\u8F93\u5165 password\uFF1A123qweasdzxc

3\u3001\u521B\u5EFA\u65B0\u7528\u6237
CREATE USER &#39;lz&#39;@&#39;%&#39; IDENTIFIED BY &#39;technical&#39;;

4\u3001\u6388\u6743\u65B0\u7528\u6237
GRANT ALL PRIVILEGES ON  *.* TO &#39;lz&#39;@&#39;%&#39;;

5\u3001\u5237\u65B0
FLUSH PRIVILEGES;

6\u3001\u9000\u51FAmysql
exit

7\u3001\u9000\u51FA\u5BB9\u5668
exit
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3);function b(h,k){const s=o("RouterLink");return i(),d("div",null,[t,l("p",null,[v,c(s,{to:"/handbook/assets/my.cnf.html"},{default:r(()=>[u]),_:1})]),p])}var g=a(m,[["render",b],["__file","MySQL.html.vue"]]);export{g as default};
