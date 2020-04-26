module.exports.Initlogin = function(socket)
{
  console.log("Init Login");
  socket.on(Keys.Login, function(data){
    var result = {};
    result.id = data.id;
    result.result = "TRUE";
    socket.emit(Keys.Login,);
  })
};
