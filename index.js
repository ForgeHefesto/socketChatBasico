var express = require('express');
var app = express();
var http = require('http').createServer(app);
var io = require('socket.io')(http);

app.set("view engine","ejs");

app.get('/', (req,res) => {
  res.render('index');

})

io.on('connection', (socket) => {
  socket.on('msg',(data) => {
    io.emit('showmsg',data);
    console.log(data)
  })

  socket.on('disconnect',() => {
    console.log('Cliente desconectado');
    io.emit('resultado','Cliente desconectado');

  })
})

http.listen(3000, () => {
  console.log('listening on *:3000');
});




