require('dotenv').config();

const express = require('express');
const app = express();
const port = 8000;

app.use(express.static('public'));
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

// 루트 경로 요청 처리
app.get('/', (req, res) => {
    res.render('index', { apiKey: process.env.API_KEY, clientId: process.env.CLIENT_ID, originId: process.env.ORIGIN_ID });
});

// 서버 시작
app.listen(port, () => {
    console.log(`서버가 http://127.0.0.1:${port} 에서 실행 중입니다.`);
});
