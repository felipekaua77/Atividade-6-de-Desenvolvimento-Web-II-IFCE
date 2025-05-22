const http = require('http');
const url = require('url');

const PORT = 3000;
const server = http.createServer((req, res) => {
    const parsedUrl = url.parse(req.url, true);
    const pathName = parsedUrl.pathname;
    const query = parsedUrl.query;

    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    //res.write('Olá, ' + req.url + '!\n');

    if (pathName == '/index') {
        res.end(`
        <h1>Calcular a área de um retângulo</h1>
        <form action="/calcular-area" method="get"> 
            Base<input name="base" type="number"><br>
            Altura<input name="altura" type="number"><br>
            <Button type="submit">Calcular</Button>
        </form>
        `)
    } else if (pathName == '/calcular-area') {
        const base = query.base
        const altura = query.altura
        const area = base * altura
        res.end(<p>Resultado: ${area}</p>)
    } else if (pathName == '/autor') {
        res.end(`
            <h1>Autor</h1>
            <p>Nome: Hugo</p>
            <h3>Formação academica</h3>
            <ul>
                <li></li>
            </ul>
            <a href="index">Voltar</a>
        `);
    } else {
        res.end('<h1>404 - Página não encontrada.</h1>')
    }

    res.end();
});

server.listen(PORT, () => {
    console.log(Servidor rodando na porta ${PORT});
});
