const express = require('express');
const cp = require('child_process');
const next =require('next');

const PORT = '3006';
const dev = true


const app = next({ dev });

const handle = app.getRequestHandler();

app.prepare()
    .then(() => {
        const server = express();

        // 处理语言包
        const LangExp = new RegExp(/^(\/zh-CN)|(\/en-US)/i);
        server.get(LangExp, (req, res) => {
            let path = req.path;
            let lang = path.match(LangExp)[0];
            let url = path.replace(lang, '');
            lang = lang.slice(1, lang.length);
            // // 跳转默认主页
            // if (!url){
            //     url = `/home`;
            // }
            const queryParams = {
                lang: lang
            };
            console.log(url, lang, '----------route-----------');
            return app.render(req, res, url,queryParams);
        });


        // 重定向默认路径
        server.get('/', (req, res) => {
            res.redirect("/en-US/home");
        });

        server.get('*', (req, res) => {
            return handle(req, res);
        });



        server.listen(PORT, err => {
            if (err) throw err;
            const serverUrl = `http://localhost:${PORT}`;
            console.log(`> Ready on ${serverUrl}`);
        });
    });
