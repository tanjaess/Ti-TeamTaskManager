var win=Titanium.UI.currentWindow
win.setBackgroundColor('#000');

var projectId=1;

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
  top: 10,
  left: 100,
  width: "60%",
  font:{fontSize:11},
  height: 40,
  color: '#000',
  textAlign: 'left'
});

var lblpersoon = Ti.UI.createLabel({
  text:'Person:',
  top: 50,
  width: "30%",
  height: 40,
  left: 5,
  font:{fontSize:11},
  color: '#fff',
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
    value:false,
    top: 310, 
    right: 5,
});

var btnAdd = Ti.UI.createButton({
  title:"Add",
  bottom: 5,
  width: 50,
  height: 32,
  right: 3
});

var peoplePicker = Titanium.UI.createPicker({
  top: 50,
  left: 100,
  width: "50%",
  height: 40,
  font:{fontSize:11},
  color: '#000',
  textAlign: 'left'
});
var people = [];
people[0]=Titanium.UI.createPickerRow({title:"Personenlijst"});
peoplePicker.selectionIndicator = true;

/* ============================
 * Call to get all people
 * ============================ */

var peopleReq = Titanium.Network.createHTTPClient();  
peopleReq.open('GET','http://esselenstanja2011.dreamhosters.com/mobiele/people.php'); 
peopleReq.send();

peopleReq.onload = function()  
{  
    var json = this.responseText; 
    var response = JSON.parse(json); 
    alert(json);
    if (response.status == true)  
    {
		for(var i = 1; i < response.content.length+1; i++)
		{
			people[i]=Titanium.UI.createPickerRow({
					title: response.content[i-1].name,
					personId: response.content[i-1].id
				});
		}
		peoplePicker.add(people);
		Titanium.UI.currentWindow.add(peoplePicker);
    }  
    else  
    {  
        alert("response.content");  
    }
};

peopleReq.onerror = function()  
{ 
	alert("Could not connect to server."); 
};

/* ===================
 * save and sens
 * =================== */

// event listeners pickers
var addTaskDeadlineDay;
var addTaskDeadlineMonth;
var addTaskDeadlineYear;
var addTaskPersonId;
var addTaskImportant;
var addTaskName;
var addTaskContent;
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
peoplePicker.addEventListener('change',function(e)
{
	addTaskPersonId =e.row.personId+"";
});
switchTaskImportant.addEventListener('change',function(e)
{
	if(e.value==true)
		addTaskImportant=1;
	else
		addTaskImportant=0;
});
// event listener to button
btnAdd.addEventListener('click', function(e){
	addTaskName=txttaskname.value;
	addTaskContent=txtuitleg.value;
	
//alert("http://esselenstanja2011.dreamhosters.com/mobiele/addTask.php?projectId="+projectId+"&taskName="+addTaskName+"&taskDeadline="+addTaskDeadlineYear+"-"+addTaskDeadlineMonth+"-"+addTaskDeadlineDay+"&personId="+addTaskPersonId+"&taskContent="+addTaskContent+"&taskImportant="+addTaskImportant); 
	
	/* ============================
	 * Call to save task
	 * ============================*/
	
	var overviewReq = Titanium.Network.createHTTPClient();  
	overviewReq.open('GET','http://esselenstanja2011.dreamhosters.com/mobiele/addTask.php?projectId='+projectId+'&taskName='+addTaskName+'&taskDeadline='+addTaskDeadlineYear+'-'+addTaskDeadlineMonth+'-'+addTaskDeadlineDay+'&personId='+addTaskPersonId+'&taskContent='+addTaskContent+'&taskImportant='+addTaskImportant); 
	overviewReq.send();
	
	overviewReq.onload = function()  
	{  
	    var json = this.responseText; 
	    var response = JSON.parse(json); 
	    if (response.status == true)  
	    {  
	    	alert("Task was saved.");    	
	    }  
	    else  
	    {  
	        alert("Task was not saved.");  
	    }
	};
	
	overviewReq.onerror = function()  
	{ 
		alert("Could not connect to server."); 
	};
	
});

Titanium.UI.currentWindow.add(lbltaskname);
Titanium.UI.currentWindow.add(txttaskname);
Titanium.UI.currentWindow.add(lblpersoon);
Titanium.UI.currentWindow.add(lbldeadline);
Titanium.UI.currentWindow.add(daypicker);
Titanium.UI.currentWindow.add(monthpicker);
Titanium.UI.currentWindow.add(yearpicker);
Titanium.UI.currentWindow.add(lbluitleg);
Titanium.UI.currentWindow.add(txtuitleg);
Titanium.UI.currentWindow.add(lblSwitchTaskImportant);
Titanium.UI.currentWindow.add(switchTaskImportant);
Titanium.UI.currentWindow.add(btnAdd);