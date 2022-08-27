const { defaultTheme } = require("vuepress");
const { backToTopPlugin } = require("@vuepress/plugin-back-to-top");
const { nprogressPlugin } = require("@vuepress/plugin-nprogress");

// import { navConfig } from "./configs/navbar.js";

module.exports = {
    lang: "zh-CN",
    title: "I'm the Monster",
    description: "这里是全栈学习领域",
    base: "/monster/",
    theme: defaultTheme({
        navbar: [
            {
                text: "首页",
                link: "/",
            },
            {
                text: "链接",
                link: "/link",
            },
            {
                text: "笔记",
                children: ["/handbook/Algorithm.md", "/handbook/Git.md", "/handbook/Java.md", "/handbook/Minio.md", "/handbook/Nexus.md", "/handbook/Nginx.md"],
            },
            {
                text: "GitHub",
                link: "https://github.com/wekingtan1991/Monster",
            },
        ],
        sidebar: {
            "/handbook/":[
                {
                    text: "笔记",
                    collapsible: true,
                    children: [
                        "/handbook/Algorithm.md",
                        "/handbook/Java.md",
                        "/handbook/MySQL.md",
                        "/handbook/Redis.md",
                        "/handbook/Nginx.md",
                        "/handbook/Minio.md",
                        "/handbook/Nexus.md",
                        "/handbook/Linux.md",
                        "/handbook/Git.md",
                        "/handbook/VideoAudio.md"
                    ]
                }
            ]
        },
        editLinkText: "在 GitHub 上编辑此页",
        lastUpdatedText: "上次更新",
    }),
    plugins: [backToTopPlugin(), nprogressPlugin()],
};
