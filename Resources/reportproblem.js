var win=Titanium.UI.currentWindow;
win.setBackgroundColor('#000');
win.setBackgroundImage('images/headReverse.png');

/* ======================
 * isAndroid?
 * ====================== */

var isAndroid = false;

if (Ti.Platform.name == 'android') {
	isAndroid = true;
}

/* =======================================
 * Data from project.js as currentWindow
 * ======================================= */

var taskId = Titanium.UI.currentWindow.taskId;
var taskName = Titanium.UI.currentWindow.taskName;
var taskDeadline = Titanium.UI.currentWindow.taskDeadline;
var taskProblem = Titanium.UI.currentWindow.taskProblem;

/* =======================================
 * window elements
 * ======================================= */

var lblName = Ti.UI.createLabel({
  text:taskName,
  top: 5,
  width: "70%",
  left: 55,
  font:{fontSize:14,fontWeight:'bold'},
  color: '#fff',
  textAlign: 'center',
});

var lblDeadline = Ti.UI.createLabel({
  text:'Deadline : ' + taskDeadline,
  top: 45,
  width: "80%",
  height: 20,
  left: 5,
  font:{fontSize:12,fontWeight:'bold'},
  color: '#fff',
  textAlign: 'left',
});

var lbluitleg = Ti.UI.createLabel({
  text:'Problem:',
  top: 85,
  width: "30%",
  height: 20,
  left: 5,
  font:{fontSize:12,fontWeight:'bold'},
  color: '#fff',
  textAlign: 'left',
});

var txtuitleg= Ti.UI.createTextArea({
  value: taskProblem,	
  top: 120,
  left: 5,
  width: "90%",
  height: 60,
  font:{fontSize:12},
  color: '#000',
  textAlign: 'left',
});

var btnBack = Ti.UI.createButton({
  font:{fontFamily:'Arial',fontWeight:'bold',fontSize:14},
  title:"Back",
  bottom: 10,
  width: 50,
  height: 40,
  right: 5,
  color: "#fff"
});

var btnSave = Ti.UI.createButton({
  font:{fontFamily:'Arial',fontWeight:'bold',fontSize:14},
  title:"Save",
  bottom: 10,
  width: 50,
  height: 40,
  left: 5,
  color: "#fff"
});
	
if (isAndroid) {
	btnBack.setBackgroundColor("#011723");
	btnBack.setBackgroundFocusedColor("#011723");
	btnBack.setBorderRadius(10);
	btnSave.setBackgroundColor('#011723');
	btnSave.setBackgroundFocusedColor('#011723');
	btnSave.setBorderRadius(10);
} else {
	btnSave.setColor("NONE");
	btnBack.setColor("NONE");
}

btnBack.addEventListener('click', function(e){
  win.close();
});

/* =======================================
 * save problem
 * ======================================= */

btnSave.addEventListener('click', function(e){
	var overviewReq = Titanium.Network.createHTTPClient();  
	overviewReq.open('GET','http://esselenstanja2011.dreamhosters.com/mobiele/addProblemToTask.php?taskId='+taskId+'&taskProblem='+txtuitleg.value); 
	overviewReq.send();
	overviewReq.onload = function()  
	{  
	    var json = this.responseText; 
	    var response = JSON.parse(json); 
	    if (response.status == true)  
	    {  
	    	alert("Problem was added.");    
	    	win.close();	
	    }  
	    else  
	    {  
	        alert("Problem was not added.");  
	    }
	};
	
	overviewReq.onerror = function()  
	{ 
		alert("Could not connect to server."); 
	};
	
});
Titanium.UI.currentWindow.add(lblName);
Titanium.UI.currentWindow.add(lbluitleg);
Titanium.UI.currentWindow.add(txtuitleg);
Titanium.UI.currentWindow.add(lblDeadline);
Titanium.UI.currentWindow.add(btnBack);
Titanium.UI.currentWindow.add(btnSave);