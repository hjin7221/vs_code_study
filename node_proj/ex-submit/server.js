// index 페이지에서 회원이름을 입력받아 (like)
// 회원 정보를 출력하는 기능을 구현하세요
// 회원 정보는 id, name , email

const express = require('express')
const app = express();
const db = require('./db');
console.log(db);

app.set('view engine', 'ejs')
app.set('views', './views')

async function run(){
    const conn = await db.getConn();
    try{
        const sql1 = `SELECT mem_id, mem_name, mem_mail
                      FROM member
                      WHERE mem_name LIKE :1`
        const result = await db.selectDataArr(conn, sql1, ['%은%']);
        console.log(result.rows);
        app.get('/', async(req, res)=>{
            res.render('index');
        });
    }catch(err) {
        console.log('error:',err);
    }finally{
         await db.closeConn(conn);
    }
}
run();