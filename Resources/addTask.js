var win=Titanium.UI.currentWindow;
win.setBackgroundColor('#000');
win.setBackgroundImage('images/headReverse.png');

var projectId= win.projectId;

/* ======================
 * isAndroid?
 * ====================== */

var isAndroid = false;

if (Ti.Platform.name == 'android') {
	isAndroid = true;
};

/* ======================
 * Elements on the window
 * ====================== */

var lbltaskname = Ti.UI.createLabel({
  text:'Task name:',
  top: 10,
  width: "30%",
  height: 40, 
  left: 5,
  font:{fontSize:16,fontWeight:'bold'},
  color: '#fff',
  textAlign: 'left',
  borderRadius: 10
});

var txttaskname= Ti.UI.createTextField({
  top: 10,
  left: 100,
  width: "60%",
  font:{fontSize:14,fontWeight:'bold'},
  textAlign: 'left',
  height: 45,
  backgroundColor: "#fff",
  color: "#000"
});

if(isAndroid)
{
	txttaskname.setHeight("auto");
};

var lblpersoon = Ti.UI.createLabel({
  text:'Person:',
  top: 60,
  width: "30%",
  height: 40,
  left: 5,
  font:{fontSize:16,fontWeight:'bold'},
  color: '#fff',
  textAlign: 'left'
});

var lbldeadline = Ti.UI.createLabel({
  text:'Deadline:',
  top: 105,
  width: "30%",
  height: 40,
  left: 5,
  font:{fontSize:16,fontWeight:'bold'},
  color: '#fff',
  textAlign: 'left'
});

if (isAndroid) {
	var daypicker = Titanium.UI.createPicker({
	  top: 140,
	  width: "25%",
	  left: 5,
	  font:{fontSize:14,fontWeight:'bold'},
	  color: '#fff'
	});
	daypicker.selectionIndicator = true;
	
	var dataday = [];
	
	for(var i=1; i<32; i++)
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
	for(var i=1; i<13; i++)
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
		datayear[i]=Titanium.UI.createPickerRow({title:2012+i+""});
	};
	yearpicker.add(datayear);
	
	Titanium.UI.currentWindow.add(daypicker);
	Titanium.UI.currentWindow.add(monthpicker);
	Titanium.UI.currentWindow.add(yearpicker);
} else
{
	var txtDate= Ti.UI.createTextField({
	  top: 115,
	  left: 100,
	  width: "60%",
	  font:{fontSize:14,fontWeight:'bold'},
	  textAlign: 'left',
	  height: 45,
	  backgroundColor: "#fff",
	  color: "#000",
	  hintText: "13-01-2012"
	});
	win.add(txtDate);
}

var lbluitleg = Ti.UI.createLabel({
  text:'Task:',
  top: 190,
  width: "30%",
  height: 40,
  left: 5,
  font:{fontSize:16,fontWeight:'bold'},
  color: '#fff',
  textAlign: 'left'
});

var txtuitleg= Ti.UI.createTextArea({
  top: 230,
  left: 5,
  width: "90%",
  height: 60,
  font:{fontSize:16,fontWeight:'bold'},
  color: '#000',
  textAlign: 'left'
});

var lblSwitchTaskImportant = Ti.UI.createLabel({
  text:'Is the task important?:',
  top: 300,
  width: "auto",
  height: "auto",
  left: 5,
  font:{fontSize:16,fontWeight:'bold'},
  color: '#fff',
  textAlign: 'left'
});

var switchTaskImportant = Titanium.UI.createSwitch({
    value:false,
    top: 300, 
    right: 5,
});

var btnAdd = Ti.UI.createButton({
  title:"Add task",
  bottom: 5,
  width: "80%",
  left: "10%",
  height: 32,
  font:{fontFamily:'Arial',fontWeight:'bold',fontSize:14} ,
  color: "#fff" 
});

if (isAndroid) {
	btnAdd.setBackgroundColor("#011723");
	btnAdd.setBackgroundFocusedColor("#011723");
	btnAdd.setBorderRadius(10);
} else
{
	btnAdd.setColor("NONE");
};

if(isAndroid)
{
	var peoplePicker = Titanium.UI.createPicker({
	  top: 60,
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
		var txtPerson= Ti.UI.createTextField({
		  top: 60,
		  left: 100,
		  width: "60%",
		  font:{fontSize:14,fontWeight:'bold'},
		  textAlign: 'left',
		  height: "auto",
		  backgroundColor: "#fff",
		  color: "#000",
		  hintText: "id of the person"
		});
		win.add(txtPerson);
	};
} else
{
	var txtPerson= Ti.UI.createTextField({
	  top: 62,
	  left: 100,
	  width: "60%",
	  font:{fontSize:14,fontWeight:'bold'},
	  textAlign: 'left',
	  height: 45,
	  backgroundColor: "#fff",
	  color: "#000",
	  hintText: "id of the person"
	});
	win.add(txtPerson);
}

/* ===================
 * save and send
 * =================== */

// event listeners pickers
var addTaskDeadlineDay = "01";
var addTaskDeadlineMonth = "01";
var addTaskDeadlineYear = "2012";
var addTaskPersonId="";
var addTaskImportant=0;
var addTaskName="";
var addTaskContent="";
if(isAndroid)
{
	daypicker.addEventListener('change',function(e)
	{
		if(e.row.title<10)
			addTaskDeadlineDay =0+""+e.row.title;
		else
			addTaskDeadlineDay =e.row.title+"";
	});
	monthpicker.addEventListener('change',function(e)
	{
		if(e.row.title<10)
			addTaskDeadlineMonth =0+""+e.row.title;
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
}
// event listener to button
btnAdd.addEventListener('click', function(e){
	addTaskName=txttaskname.value;
	addTaskContent=txtuitleg.value;
	if(!isAndroid)
	{
		var date = txtDate.value.split("-");
		if(date[2]!=null)
		{
			addTaskDeadlineDay = date[0];
			addTaskDeadlineMonth = date[1];
			addTaskDeadlineYear = date[2];
		} else
		{
			alert("Fill in the date for example: 13th of January 2012 is 13-01-2012");
		}
		if(txtPerson.varlue!="")
		{
			addTaskPersonId=txtPerson.value;
		} else
		{
			alert("Fill in the person id.");
		}
	}
	if(addTaskName=="")
	{
		alert("Please fill in a task name.");
	}
	else if(addTaskPersonId == "")
	{
		alert("Please select a person.");
	} 
	else 
	{
		alert("http://esselenstanja2011.dreamhosters.com/mobiele/addTask.php?projectId="+projectId+"&taskName="+addTaskName+"&taskDeadline="+addTaskDeadlineYear+"-"+addTaskDeadlineMonth+"-"+addTaskDeadlineDay+"&personId="+addTaskPersonId+"&taskContent="+addTaskContent+"&taskImportant="+addTaskImportant); 
		/* ============================
		 * Call to save task
		 * ============================*/
		
		var overviewReq = Titanium.Network.createHTTPClient();  
		if(isAndroid)
			overviewReq.open('GET','http://esselenstanja2011.dreamhosters.com/mobiele/addTask.php?projectId='+projectId+'&taskName='+addTaskName+'&taskDeadline='+addTaskDeadlineYear+'-'+addTaskDeadlineMonth+'-'+addTaskDeadlineDay+'&personId='+addTaskPersonId+'&taskContent='+addTaskContent+'&taskImportant='+addTaskImportant); 
		else
		{
			overviewReq.open('POST','http://esselenstanja2011.dreamhosters.com/mobiele/addTask.php?projectId='+projectId+'&taskName='+addTaskName+'&taskDeadline='+addTaskDeadlineYear+'-'+addTaskDeadlineMonth+'-'+addTaskDeadlineDay+'&personId='+addTaskPersonId+'&taskContent='+addTaskContent+'&taskImportant='+addTaskImportant); 
			overviewReq.setRequestHeader('content-type','application/json');
		}
		overviewReq.send();
		
		overviewReq.onload = function()  
		{  
		    var json = this.responseText; 
		    var response = JSON.parse(json); 
		    if (response.status == true)  
		    {  
		    	alert("Task was saved."); 
		    	txttaskname.value="";
		    	if(isAndroid)
		    	{
					peoplePicker.setSelectedRow(0,0,true);
					daypicker.setSelectedRow(0,0,true);
					monthpicker.setSelectedRow(0,0,true);
					yearpicker.setSelectedRow(0,0,true);
				}else{
					txtPerson.value="";
					txtDate.value="";
				}
				txtuitleg.value="";
				switchTaskImportant=false;
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
	};
});

Titanium.UI.currentWindow.add(lbltaskname);
Titanium.UI.currentWindow.add(txttaskname);
Titanium.UI.currentWindow.add(lblpersoon);
Titanium.UI.currentWindow.add(lbldeadline);
Titanium.UI.currentWindow.add(lbluitleg);
Titanium.UI.currentWindow.add(txtuitleg);
Titanium.UI.currentWindow.add(lblSwitchTaskImportant);
Titanium.UI.currentWindow.add(switchTaskImportant);
Titanium.UI.currentWindow.add(btnAdd);