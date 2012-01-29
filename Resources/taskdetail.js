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

var personName = Titanium.UI.currentWindow.personName;
var projectId = Titanium.UI.currentWindow.projectId;
var taskName = Titanium.UI.currentWindow.taskName;
var taskDeadline = Titanium.UI.currentWindow.taskDeadline;
var projectMake = Titanium.UI.currentWindow.projectMake;
var taskId = Titanium.UI.currentWindow.taskId;
var personId= Titanium.UI.currentWindow.personId;
var taskContent = Titanium.UI.currentWindow.taskContent;
var taskImportant = Titanium.UI.currentWindow.taskImportant;
var taskProblem = Titanium.UI.currentWindow.taskProblem;
Titanium.UI.currentWindow.title="Task "+taskName;

/* =======================================
 * window elements
 * ======================================= */

var lblName = Ti.UI.createLabel({
  text:"Task: "+taskName,
  top: 20,
  width: "70%",
  left: 55,
  font:{fontSize:14,fontWeight:'bold'},
  color: '#fff',
  textAlign: 'center',
})

var lblDeadline = Ti.UI.createLabel({
  text:'Deadline: ' + taskDeadline,
  top: 60,
  width: "80%",
  height: 20,
  left: 5,
  font:{fontSize:12,fontWeight:'bold'},
  color: '#fff',
  textAlign: 'left',
})

var lblPerson = Ti.UI.createLabel({
  text: "Person: "+personName,
  top: 85,
  width: "80%",
  height: 20,
  left: 5,
  fontSize:11,
  color: '#fff',
  textAlign: 'left',
})

var lblUitleg = Ti.UI.createLabel({
  text: "Task content: "+taskContent,
  top: 120,
  width: "80%",
  left: 5,
  fontSize:11,
  color: '#fff',
  textAlign: 'left',
})

var lblProblem = Ti.UI.createLabel({
  text: "Task problem: "+taskProblem,
  top: 200,
  width: "80%",
  left: 5,
  fontSize:11,
  color: '#fff',
  textAlign: 'left'
});

var btnProject = Ti.UI.createButton({
  font:{fontWeight:'bold',fontSize:14},
  title:"Back",
  top: 20,
  width: 50,
  height: 40,
  left: 3,
  color: "#fff"
});

btnProject.addEventListener('click', function(e){
  Titanium.UI.currentWindow.close();
});

var btnReport = Ti.UI.createButton({
  title:"Report Problem",
  bottom: 5,
  width: 150,
  height: 40,
  left: 3,
  color: "#fff"
});

btnReport.addEventListener('click', function(e){
  var winProblem = Titanium.UI.createWindow({  
    url:'reportproblem.js',
    backgroundColor:'000',
    // Variabelen doorgeven naar de report problem pagina
    taskId: taskId, 
    taskName: taskName, 
    taskDeadline: taskDeadline,
    taskProblem: taskProblem

  });
  // moet eerst gesloten worden, wanneer een probleem wordt toegevoegd 
  //en men komt terug op deze pagina, dan werkt de "back"-button niet meer
  Titanium.UI.currentWindow.close();
  winProblem.open();
})

var btnEdit = Ti.UI.createButton({
  title:"Edit",
  bottom: 5,
  width: 50,
  height: 40,
  right: 3,
  font:{fontWeight:'bold',fontSize:14},
  color: "#fff"
});
	
btnEdit.addEventListener('click', function(e){
  var winEdit = Titanium.UI.createWindow({  
    url:'taskedit.js',
    backgroundColor:'000',
	personName:personName,
	projectId:projectId,
	taskName:taskName, 
	taskDeadline:taskDeadline,
	taskId:taskId, 
	personId:personId, 
	taskContent:taskContent,  
	taskImportant:taskImportant 
  });
  /*// moet eerst gesloten worden, wanneer een task wordt veranderd
  // en men komt terug op deze pagina, dan werkt de "back"-button niet meer*/
  Titanium.UI.currentWindow.close();
  winEdit.open();
});

if (isAndroid) {
	btnReport.setBackgroundColor('#011723');
	btnReport.setBackgroundFocusedColor('#011723');
	btnReport.setBorderRadius(10);
	btnEdit.setBackgroundColor('#011723');
	btnEdit.setBackgroundFocusedColor('#011723');
	btnEdit.setBorderRadius(10);
	btnProject.setBackgroundColor("#011723");
	btnProject.setBackgroundFocusedColor("#011723");
	btnProject.setBorderRadius(10);
} else{
	btnProject.setColor("NONE");
	btnReport.setColor("NONE");
	btnEdit.setColor("NONE");
};

Titanium.UI.currentWindow.add(lblName);
Titanium.UI.currentWindow.add(lblPerson);
Titanium.UI.currentWindow.add(lblUitleg);
Titanium.UI.currentWindow.add(lblDeadline);
Titanium.UI.currentWindow.add(lblProblem);
Titanium.UI.currentWindow.add(btnProject);
Titanium.UI.currentWindow.add(btnReport);
Titanium.UI.currentWindow.add(btnEdit);