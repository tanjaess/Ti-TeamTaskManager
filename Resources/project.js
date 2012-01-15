Titanium.UI.currentWindow.setBackgroundColor('#000');

/* =======================================
 * Data from overview.js as currentWindow
 * ======================================= */

var ProjectName = Titanium.UI.currentWindow.projecNamet;
var projectId = Titanium.UI.currentWindow.projectId;

 /* ==========================
  * Tabel
  * ========================== */

var table = Ti.UI.createTableView();

var imgImportant = Titanium.UI.createImageView({
  		right: 40,
  		height: 20,
  		width: 20,
  		image:"/images/uitroepteken.png"
  	});
/*
var datarows =[];

for (var i = data.length - 1; i >= 0; i--){
  var row = Titanium.UI.createTableViewRow();
  
  var taaknaam =  Titanium.UI.createLabel({
    text:data[i].taskname,
    font:{fontSize:13,fontWeight:'bold'},
    width:'auto',
    textAlign:'left',
    top:1,
    left:22,
    height:17
  });  
  
  var persoon =  Titanium.UI.createLabel({
    text:data[i].person,
    font:{fontSize:11},
    width:'auto',
    textAlign:'left',
    bottom:2,
    left:22,
    height:15
  }); 
  
  var deadline =  Titanium.UI.createLabel({
    text:data[i].deadline,
    font:{fontSize:11},
    width:'70%',
    textAlign:'right',
    bottom:2,
    right:35,
    height:15
  }); 
  
  if (data[i].important = true) {
  	var important = Titanium.UI.createImageView({
  		right:2,
  		height: 20,
  		width: 20,
  		url:'images/uitroepteken.png'
  	});
  	row.add(important);
  };
  
  row.add(persoon);
  row.add(taaknaam);
  row.add(deadline);
  row.hasChild=data[i].hasChild;
  
  row.persoon = data[i].person;
  row.deadline = data[i].deadline;
  row.taaknaam = data[i].taskname;
  row.important = data[i].important;
  
  row.className = 'tasks_row';
  
  datarows.push(row);
};
*/
//Ti.include('taskdetail.js');

 /* ==========================
  * Eventlistener for table
  * ========================== */


table.addEventListener("click", function(e) {
  var winDetail = Titanium.UI.createWindow({  
    url:'taskdetail.js',
    backgroundColor:'000',
    personName: e.rowData.personName, 
    taskName: e.rowData.taskName, 
    taskDeadline: e.rowData.taskDeadline,
	taskId: e.rowData.taskId,
	personId: e.rowData.personId,
	taskContent: e.rowData.taskContent,
	taskImportant: e.rowData.taskImportant,
	taskProblem: e.rowData.taskProblem,
	projectId:projectId,
  });
  winDetail.open();
});

 /* ==========================
  * call to db for tasks
  * ========================== */

var tasksReq = Titanium.Network.createHTTPClient();  
tasksReq.open('GET','http://esselenstanja2011.dreamhosters.com/mobiele/tasks.php?id='+projectId); 
tasksReq.send();

tasksReq.onload = function()  
{  
    var json = this.responseText; 
    var response = JSON.parse(json); 
    if (response.status == true)  
    {  
    	var rows = [];
		for(var i = 0; i < response.content.length; i++)
		{
			var row = Titanium.UI.createTableViewRow({
				className: 'tasksTableClass',
				taskId:response.content[i].taskId,
				personId: response.content[i].personId,
				taskContent: response.content[i].taskContent,
				taskImportant: response.content[i].taskImportant,
				taskName: response.content[i].taskName,
				personName: response.content[i].personName,
				taskDeadline: response.content[i].taskDeadline,
				taskProblem: response.content[i].taskProblem,
			});
			
			var lblPerson =  Titanium.UI.createLabel({
				text:response.content[i].personName,
			    font:{fontSize:11},
			    width:'auto',
			    textAlign:'left',
			    bottom:2,
			    left:22,
			    height:15
			}); 
			
			var lblTaskname =  Titanium.UI.createLabel({
				text:response.content[i].taskName,
			    font:{fontSize:13,fontWeight:'bold'},
			    width:'auto',
			    textAlign:'left',
			    top:1,
			    left:22,
			    height:17
			  });
			  
			var lblDeadline =  Titanium.UI.createLabel({
				text:response.content[i].taskDeadline,
			    font:{fontSize:11},
			    width:'70%',
			    textAlign:'right',
			    bottom:2,
			    right:35,
			    height:15
			}); 
			
			row.add(lblPerson);
  			row.add(lblTaskname);
  			row.add(lblDeadline);
  			
  			if(response.content[i].taskImportant==1)
  			{
  				row.add(imgImportant)
  			};
  			
  			//row.hasChild=row[i].hasChild;
			rows.push(row);
		}
		table.setData(rows);
    }  
    else  
    {  
        alert("response.content");  
    }
};

tasksReq.onerror = function()  
{ 
	alert("Could not connect to server."); 
};

Titanium.UI.currentWindow.add(table);
