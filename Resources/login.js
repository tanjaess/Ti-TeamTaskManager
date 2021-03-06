var win=Titanium.UI.currentWindow;
win.setBackgroundColor('#000');
win.backgroundImage = 'images/bg.png'; 
win.title="TeamTaskManager";

var isAndroid = false;

if (Ti.Platform.name == 'android') {
	isAndroid = true;
}

var lblWelcome = Ti.UI.createLabel({
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
  top: 60,
  left: 30,
  width: "30%",
  height: 25,
  color: '#fff',  
})

// username textfield
var txtUsername = Ti.UI.createTextField({
  height:45,
  top: 50,
  left: 120,
  width: "60%",
  color: '#000',
  textAlign: 'left',
  hintText : 'username',
  backgroundColor: '#fff',
  borderRadius: 10,
  borderStyle:Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,
  keyboardType:Titanium.UI.KEYBOARD_DEFAULT,  
  returnKeyType:Titanium.UI.RETURNKEY_DEFAULT
})

var labelpassword = Ti.UI.createLabel({
  text:"Password:",
  top: 110,
  left: 30,
  width: "30%",
  height: 25,
  color: '#fff',
})
// password textfield
var txtPassword = Ti.UI.createTextField({
	height:45,
	top : 100,
	left : 120,
	width : '60%',
	hintText : 'password',
	color: '#000',
  	textAlign: 'left',
  	backgroundColor: '#fff',
  	passwordMask: true,
  	borderRadius: 10,
  	borderStyle:Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,
  	keyboardType:Titanium.UI.KEYBOARD_DEFAULT,  
    returnKeyType:Titanium.UI.RETURNKEY_DEFAULT
});

if (isAndroid) {
	var btnlogin = Ti.UI.createButton({
		backgroundColor: "#011723",
		backgroundFocusedColor: "#011723",
		color: "#fff",
		borderRadius: 10,
	  	title:"login",
	  	top: 170,
	  	width: "80%",
	  	height: 40,
	  	left: "10%",
  		font:{fontFamily:'Arial',fontWeight:'bold',fontSize:14}  
	});
} else {
	var btnlogin = Ti.UI.createButton({
	  	title:"login",
	  	top: 170,
	  	width: "80%",
	  	height: 40,
	  	left: "10%",
  		font:{fontFamily:'Arial',fontWeight:'bold',fontSize:14}  
	});
};


var loginReq = Titanium.Network.createHTTPClient();  

loginReq.onload = function()  
{  
    var json = this.responseText;  
    var response = JSON.parse(json);  
    if (response.logged == true)  
    {  
        alert("You are logged in " + response.name);
        txtUsername.blur();  
        txtPassword.blur();  
        Ti.App.fireEvent('gotoOverview', {  
            name:response.name,  
            email:response.email, 
            id:response.id 
        });
        /*
       Ti.App.fireEvent('gotoAddTask', {  
        });
       */
    }  
    else  
    {  
        alert(response.message);  
    }  
};
loginReq.onerror = function()  
{ 
	alert("Could not connect to server."); 
};
btnlogin.addEventListener('click',function(e)  
{  
    if (txtUsername.value != '' && txtPassword.value != '')  
    {  
    	/*
        Werk niet in Android!
        -- reden onbekend, headers getest en geen verschil bij android of iphone 
        -- code aangepast aan voorbeeld op toledo en t werkt voor iphone werkt niet meer...
        
        loginReq.open("POST","http://esselenstanja2011.dreamhosters.com/mobiele/login.php");  
        var params = {  
            username: txtUsername.value,  
            password: Ti.Utils.md5HexDigest(txtPassword.value)  
        };  
        loginReq.send(params);
        */
       
       loginReq.open('GET','http://esselenstanja2011.dreamhosters.com/mobiele/login.php?username='+txtUsername.value+'&password='+Ti.Utils.md5HexDigest(txtPassword.value)); 
       loginReq.send();
    }  
    else  
    {  
        alert("Username/Password are required");  
    }  
}); 

Ti.App.addEventListener('gotoOverview', function(event)  
{   
    var win = Titanium.UI.createWindow({url:'overview.js'});
    //win.modal=true;
    win.title="Welcome, "+event.name;
    win.id=event.id;
    win.open();
    //winLogin.close();
}); 
/*
Ti.App.addEventListener('gotoAddTask', function(event)  
{   
    var win = Titanium.UI.createWindow({url:'addTask.js'});
    win.open();
});
*/
Titanium.UI.currentWindow.add(lblWelcome);
Titanium.UI.currentWindow.add(btnlogin);
Titanium.UI.currentWindow.add(txtPassword);
Titanium.UI.currentWindow.add(txtUsername);
Titanium.UI.currentWindow.add(labelpassword);
Titanium.UI.currentWindow.add(labelusername);


