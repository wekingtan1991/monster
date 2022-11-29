import{_ as n,o as e,c as i,a as s}from"./app.392b6d9d.js";const d={},l=s(`<h1 id="nginx\u914D\u7F6E\u6587\u4EF6\u9ED8\u8BA4\u4F8B\u5B50-nginx-conf" tabindex="-1"><a class="header-anchor" href="#nginx\u914D\u7F6E\u6587\u4EF6\u9ED8\u8BA4\u4F8B\u5B50-nginx-conf" aria-hidden="true">#</a> nginx\u914D\u7F6E\u6587\u4EF6\u9ED8\u8BA4\u4F8B\u5B50-nginx.conf</h1><div class="language-config ext-config line-numbers-mode"><pre class="language-config"><code>user  nginx;
worker_processes  auto;

error_log  /var/log/nginx/error.log notice;
pid        /var/run/nginx.pid;


events {
    worker_connections  1024;
}


http {
    include       /etc/nginx/mime.types;
    default_type  application/octet-stream;

    log_format  main  &#39;$remote_addr - $remote_user [$time_local] &quot;$request&quot; &#39;
                      &#39;$status $body_bytes_sent &quot;$http_referer&quot; &#39;
                      &#39;&quot;$http_user_agent&quot; &quot;$http_x_forwarded_for&quot;&#39;;

    access_log  /var/log/nginx/access.log  main;

    sendfile        on;
    #tcp_nopush     on;

    keepalive_timeout  65;

    #gzip  on;

    include /etc/nginx/conf.d/*.conf;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),r=[l];function a(c,v){return e(),i("div",null,r)}var t=n(d,[["render",a],["__file","nginx.conf.html.vue"]]);export{t as default};
