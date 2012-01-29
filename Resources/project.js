win=Titanium.UI.currentWindow;
win.setBackgroundColor('NONE');
win.setBackgroundImage('images/headReverse.png');
/* =======================================
 * Data from overview.js as currentWindow
 * ======================================= */

var ProjectName = Titanium.UI.currentWindow.projecName;
var projectId = Titanium.UI.currentWindow.projectId;

var strSortMethod="Created";

/* ======================
 * isAndroid?
 * ====================== */

var isAndroid = false;

if (Ti.Platform.name == 'android') {
	isAndroid = true;
};

 /* ==========================
  * Table
  * ========================== */

var table = Ti.UI.createTableView({
	top: 60,
});

var imgImportant = Titanium.UI.createImageView({
  		right: 40,
  		height: 20,
  		width: 20,
  		image:"images/bolt.png",
  	});

 /* ==========================
  * Sort
  * ========================== */

var sortView = Titanium.UI.createView({
   backgroundColor:'black',
   width: "100%",
   height:60,
   top: 0
});
win.add(sortView);

var lblSort = Ti.UI.createLabel({
  text:"Change sort",
  top: 10,
  width: "30%",
  height: 40, 
  left: 5,
  font:{fontSize:12,fontWeight:'bold'},
  color: '#fff',
  textAlign: 'left',
  borderRadius: 10
});
sortView.add(lblSort);

var btnSortPerson= Ti.UI.createButton({
  title: "Person",
  top: 10,
  width: "20%",
  left: "30%",
  height: 35,
  font:{fontFamily:'Arial',fontWeight:'bold',fontSize:12},
  color: "#fff" 
});
if (isAndroid) {
	btnSortPerson.setBackgroundColor("#097ab5");
	btnSortPerson.setBackgroundFocusedColor("#097ab5");
	btnSortPerson.setBorderRadius(10);
} else
{
	btnSortPerson.setColor("NONE");
};
sortView.add(btnSortPerson);

btnSortPerson.addEventListener('click', function(e){
	strSortMethod="persoonId";
	alert("The list is now sorted by"+btnSortPerson.title);
	Ti.App.fireEvent('fillTable', {  
            strSortMethod:strSortMethod
    });
});
var btnSortId= Ti.UI.createButton({
  title: "Task ID",
  top: 10,
  width: "20%",
  left: "50%",
  height: 35,
  font:{fontFamily:'Arial',fontWeight:'bold',fontSize:12},
  color: "#fff" 
});
if (isAndroid) {
	btnSortId.setBackgroundColor("#097ab5");
	btnSortId.setBackgroundFocusedColor("#097ab5");
	btnSortId.setBorderRadius(10);
} else
{
	btnSortId.setColor("NONE");
};
sortView.add(btnSortId);

btnSortId.addEventListener('click', function(e){
	strSortMethod="taakId";
	alert("The list is now sorted by "+btnSortId.title);
	Ti.App.fireEvent('fillTable', {  
            strSortMethod:strSortMethod
    });
});
var btnSortDate= Ti.UI.createButton({
  title: "Date",
  top: 10,
  width: "20%",
  left: "70%",
  height: 35,
  font:{fontFamily:'Arial',fontWeight:'bold',fontSize:12},
  color: "#fff" 
});
if (isAndroid) {
	btnSortDate.setBackgroundColor("#097ab5");
	btnSortDate.setBackgroundFocusedColor("#097ab5");
	btnSortDate.setBorderRadius(10);
} else
{
	btnSortDate.setColor("NONE");
};
sortView.add(btnSortDate);

btnSortDate.addEventListener('click', function(e){
	strSortMethod="taakDeadline";
	alert("The list is now sorted by "+btnSortDate.title);
	Ti.App.fireEvent('fillTable', {  
            strSortMethod:strSortMethod
    });
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
var myDatabase = Ti.Database.open('myDatabase');
tasksReq.onload = function()  
{  
    var json = this.responseText; 
    var response = JSON.parse(json); 
    if (response.status == true)  
    {  
    	//var rows = [];
    	myDatabase = Ti.Database.open('myDatabase');
    	myDatabase.execute('DROP TABLE IF EXISTS taken');
		var sql = 'CREATE TABLE IF NOT EXISTS taken('+'taakId INT, persoonId INT, taakBelangrijk INT, taakNaam TEXT, taakPersoon TEXT, taakUitleg TEXT, taakDeadline TEXT, taakProbleem TEXT'+')';
		myDatabase.execute(sql);
		var query = 'INSERT INTO taken (taakId,persoonId,taakBelangrijk,taakNaam,taakPersoon,taakUitleg,taakDeadline,taakProbleem) VALUES (?,?,?,?,?,?,?,?)';
		for(var i = 0; i < response.content.length; i++)
		{
			/*
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
  				row.add(imgImportant);
  			};
			rows.push(row);
			*/
			
			// for the db
			myDatabase.execute(query, response.content[i].taskId, response.content[i].personId, response.content[i].taskImportant, response.content[i].taskName, response.content[i].personName, response.content[i].taskContent, response.content[i].taskDeadline, response.content[i].taskProblem);
			//var query = 'INSERT INTO taken (taakId,persoonId,taakBelangrijk,taakNaam,taakPersoon,taakUitleg,taakDeadline,taakProbleem) VALUES (?,?,?,?,?,?,?,?)';
		}
		//table.setData(rows);
		strSortMethod="taakId"
		Ti.App.fireEvent('fillTable', {  
            strSortMethod:strSortMethod
   		 });
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

Ti.App.addEventListener('fillTable', function(event)  
{
	myDatabase = Ti.Database.open('myDatabase');
		var dbrows = myDatabase.execute('SELECT * FROM taken ORDER BY '+event.strSortMethod);
		var rows = [];
		while(dbrows.isValidRow())
		{
		var row = Titanium.UI.createTableViewRow({
				className: 'tasksTableClass',
				taskId:dbrows.fieldByName('taakId'),
				personId:dbrows.fieldByName('persoonId'),
				taskContent:dbrows.fieldByName('taakUitleg'),
				taskImportant:dbrows.fieldByName('taakBelangrijk'),
				taskName:dbrows.fieldByName('taakNaam'),
				personName: dbrows.fieldByName('taakpersoon'),
				taskDeadline:dbrows.fieldByName('taakDeadline'),
				taskProblem:dbrows.fieldByName('taakProbleem'),
			});
			
			var lblPerson =  Titanium.UI.createLabel({
				text:dbrows.fieldByName('taakPersoon'),
			    font:{fontSize:11},
			    width:'auto',
			    textAlign:'left',
			    bottom:2,
			    left:22,
			    height:15
			}); 
			
			var lblTaskname =  Titanium.UI.createLabel({
				text:dbrows.fieldByName('taakNaam'),
			    font:{fontSize:13,fontWeight:'bold'},
			    width:'auto',
			    textAlign:'left',
			    top:1,
			    left:22,
			    height:17
			  });
			  
			var lblDeadline =  Titanium.UI.createLabel({
				text:dbrows.fieldByName('taakDeadline'),
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
  			
  			if(dbrows.fieldByName('taakBelangrijk')==1)
  			{
  				row.add(imgImportant);
  			};
			rows.push(row);
	
     	//alert(dbrows.fieldByName('taakId')+" "+dbrows.fieldByName('persoonId'));
     	dbrows.next();
		};
		table.setData(rows);
		dbrows.close();
		myDatabase.close();
		win.add(table);
});
