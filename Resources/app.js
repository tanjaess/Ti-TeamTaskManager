// this sets the background color of the master UIView (when there are no windows/tab groups on it)
Titanium.UI.setBackgroundColor('#000');


var win = Titanium.UI.createWindow({  
    title:'Team task manager',
    backgroundColor:'000'
});

var mainScreen = Ti.UI.createView({
  layout: "portrait",
  height: "100%",
  width: "100%",
  backgroundColor : "#000",
  color: "#fff",
});

var label1 = Ti.UI.createLabel({
  text:"Welcome to TeamTaskManager",
  top: 12,
  width: "80%",
  height: 25,
  left: "10%",
  color: '#fff',
  textAlign: 'center',
})

var labelusername = Ti.UI.createLabel({
  text:"Username:",
  top: 50,
  left: 30,
  width: "30%",
  height: 25,
  color: '#fff',
})

var txtUsername = Ti.UI.createTextField({
  top: 50,
  left: 120,
  width: "30%",
  height: 25,
  color: '#fff',
  textAlign: 'center',
})

var labelpassword = Ti.UI.createLabel({
  text:"Password:",
  top: 90,
  left: 30,
  width: "30%",
  height: 25,
  color: '#fff',
})

var txtPassword = Ti.UI.createTextField({
  top: 90,
  left: 120,
  width: "30%",
  height: 25,
  color: '#fff',
  textAlign: 'center',
})

var btnlogin = Ti.UI.createButton({
  title:"login",
  top: 150,
  width: "80%",
  height: 40,
  left: "10%",
})

btnlogin.addEventListener('click', function(e){
  mainScreen.hide();
  overviewScreen.show();
})

mainScreen.add(label1);
mainScreen.add(btnlogin);
mainScreen.add(txtPassword);
mainScreen.add(txtUsername);
mainScreen.add(labelpassword);
mainScreen.add(labelusername);

win.add(mainScreen);

//Including all the files
Ti.include('overview.js');
Ti.include('project.js');
Ti.include('taskdetail.js');

win.open();