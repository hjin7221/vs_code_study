const express = require('express');
const app = express();
app.set('view engine', 'ejs');
// cross origin???? 뜨면 cors로 전체허용
// json형태로 request 데이터 받기
app.use(express.json());
app.get('/', async(req,res)=>{
    res.render('index');
});

app.get('/test', async(req,res)=>{
    console.log('요청: ',req.query);
    console.log('요청: ',req.query.nm);
    res.send({ flag : 'Y'});
});

app.post('/test', async(req,res)=>{
    console.log(req.body);
    res.send({ flag : 'Y'});
})

app.listen(3000, ()=>{
    console.log('start');
})