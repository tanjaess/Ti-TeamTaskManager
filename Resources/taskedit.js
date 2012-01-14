var win=Titanium.UI.currentWindow
win.setBackgroundColor('#000');

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
win.title="Task "+taskName;

var deadline = taskDeadline.split("-");

/* ======================
 * Elements on the window
 * ====================== */

var lbltaskname = Ti.UI.createLabel({
  text:'Task name:',
  top: 10,
  width: "30%",
  height: 40, 
  left: 5,
  font:{fontSize:11},
  color: '#fff',
  textAlign: 'left'
});

var txttaskname= Ti.UI.createTextField({
	value:taskName,
  top: 10,
  left: 100,
  width: "60%",
  font:{fontSize:11},
  height: 40,
  color: '#000',
  textAlign: 'left'
});

var lbldeadline = Ti.UI.createLabel({
  text:'Deadline',
  top: 100,
  width: "30%",
  height: 40,
  left: 5,
  font:{fontSize:11},
  color: '#fff',
  textAlign: 'left'
});

var daypicker = Titanium.UI.createPicker({
  top: 140,
  width: "25%",
  left: 5,
  font:{fontSize:11},
  color: '#fff'
});
daypicker.selectionIndicator = true;

var dataday = [];

for(var i=0; i<32; i++)
{
	dataday[i]=Titanium.UI.createPickerRow({title:i+""});
};
daypicker.add(dataday);
daypicker.setSelectedRow(0,deadline[2],false);

var monthpicker = Titanium.UI.createPicker({
  top: 140,
  width: "25%",
  left: 80,
  font:{fontSize:11},
  color: '#fff'
});
monthpicker.selectionIndicator = true;

var datamonth = [];
for(var i=0; i<13; i++)
{
	datamonth[i]=Titanium.UI.createPickerRow({title:i+""});
};
monthpicker.add(datamonth);
monthpicker.setSelectedRow(0,deadline[1],false);

var yearpicker = Titanium.UI.createPicker({
  top: 140,
  width: "33%",
  left: 152,
  font:{fontSize:11},
  color: '#fff'
});
yearpicker.selectionIndicator = true;

var datayear = [];
for(var i=0; i<6; i++)
{
	datayear[i]=Titanium.UI.createPickerRow({title:2011+i+""});
};
yearpicker.add(datayear);
switch(deadline[0])
{
case "2011":
	yearpicker.setSelectedRow(0,0,false);
  	break;
case "2012":
  yearpicker.setSelectedRow(0,1,false);
  break;
case "2013":
  yearpicker.setSelectedRow(0,2,false);
  break;
case "2014":
  yearpicker.setSelectedRow(0,3,false);
  break;
case "2014":
  yearpicker.setSelectedRow(0,4,false);
  break;
case "2015":
  yearpicker.setSelectedRow(0,6,false);
  break;
default:
  yearpicker.setSelectedRow(0,0,false);
}


var lbluitleg = Ti.UI.createLabel({
  text:'Task:',
  top: 190,
  width: "30%",
  height: 40,
  left: 5,
  font:{fontSize:11},
  color: '#fff',
  textAlign: 'left'
});

var txtuitleg= Ti.UI.createTextArea({
	value: taskContent,
  top: 240,
  left: 5,
  width: "90%",
  height: 60,
  font:{fontSize:11},
  color: '#000',
  textAlign: 'left'
});

var lblSwitchTaskImportant = Ti.UI.createLabel({
  text:'Is the task important?:',
  top: 310,
  width: "auto",
  height: "auto",
  left: 5,
  font:{fontSize:11},
  color: '#fff',
  textAlign: 'left'
});

var switchTaskImportant = Titanium.UI.createSwitch({
    top: 310, 
    right: 5,
});
if(taskImportant==1)
	switchTaskImportant.value=true;
else
	switchTaskImportant.value=false;

var btnUpdate = Ti.UI.createButton({
  title:"Add",
  bottom: 5,
  width: 50,
  height: 32,
  right: 3
});

var btnBack = Ti.UI.createButton({
  title:"Back",
  bottom: 5,
  width: "auto",
  height: "auto",
  left: 3
});

/* ===================
 * save and sens
 * =================== */

// event listeners pickers
var addTaskDeadlineDay=deadline[2];
var addTaskDeadlineMonth=deadline[1];
var addTaskDeadlineYear=deadline[0];
var addTaskImportant=taskImportant;
var addTaskName=taskName;
var addTaskContent=taskContent;
daypicker.addEventListener('change',function(e)
{
	if(e.row.title<10)
		addTaskDeadlineDay =0+e.row.title+"";
	else
		addTaskDeadlineDay =e.row.title+"";
});
monthpicker.addEventListener('change',function(e)
{
	if(e.row.title<10)
		addTaskDeadlineMonth =0+e.row.title+"";
	else
		addTaskDeadlineMonth =e.row.title+"";
});
yearpicker.addEventListener('change',function(e)
{
	addTaskDeadlineYear =e.row.title+"";
});
switchTaskImportant.addEventListener('change',function(e)
{
	if(e.value==true)
		addTaskImportant=1;
	else
		addTaskImportant=0;
});
// event listener to button
btnUpdate.addEventListener('click', function(e){
	addTaskName=txttaskname.value;
	addTaskContent=txtuitleg.value;
	
	alert('http://esselenstanja2011.dreamhosters.com/mobiele/updateTask.php?taskId='+taskId+'&taskName='+addTaskName+'&taskDeadline='+addTaskDeadlineYear+'-'+addTaskDeadlineMonth+'-'+addTaskDeadlineDay+'&taskContent='+addTaskContent+'&taskImportant='+addTaskImportant);
	
	/* ============================
	 * Call to save task
	 * ============================*/
	
	var overviewReq = Titanium.Network.createHTTPClient();  
	overviewReq.open('GET','http://esselenstanja2011.dreamhosters.com/mobiele/updateTask.php?taskId='+taskId+'&taskName='+addTaskName+'&taskDeadline='+addTaskDeadlineYear+'-'+addTaskDeadlineMonth+'-'+addTaskDeadlineDay+'&taskContent='+addTaskContent+'&taskImportant='+addTaskImportant); 
	overviewReq.send();
	
	overviewReq.onload = function()  
	{  
	    var json = this.responseText; 
	    var response = JSON.parse(json); 
	    if (response.status == true)  
	    {  
	    	alert("Task was updated.");    	
	    }  
	    else  
	    {  
	        alert("Task was not updated.");  
	    }
	};
	
	overviewReq.onerror = function()  
	{ 
		alert("Could not connect to server."); 
	};
	
});

btnBack.addEventListener('click', function(e){
	alert("go back");
	});
	
Titanium.UI.currentWindow.add(lbltaskname);
Titanium.UI.currentWindow.add(txttaskname);
Titanium.UI.currentWindow.add(lbldeadline);
Titanium.UI.currentWindow.add(daypicker);
Titanium.UI.currentWindow.add(monthpicker);
Titanium.UI.currentWindow.add(yearpicker);
Titanium.UI.currentWindow.add(lbluitleg);
Titanium.UI.currentWindow.add(txtuitleg);
Titanium.UI.currentWindow.add(lblSwitchTaskImportant);
Titanium.UI.currentWindow.add(switchTaskImportant);
Titanium.UI.currentWindow.add(btnUpdate);
Titanium.UI.currentWindow.add(btnBack);