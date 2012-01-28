Titanium.UI.currentWindow.setBackgroundColor('#000');

/* =======================================
 * Data from overview.js as currentWindow
 * ======================================= */

var id = Titanium.UI.currentWindow.id;

/* ============================
 * Content of the window
 * ============================ */

var label1 = Ti.UI.createLabel({
  text:"Projects overview",
  top: 20,
  width: "80%",
  height: 32,
  left: "10%",
  color: '#fff',
  textAlign: 'center',
});


var table = Ti.UI.createTableView({
  top: 80,
});


/* ============================
 * Tabs and functionality 
 * ============================ */

table.addEventListener("click", function(e) {
	
var tabGroup = Titanium.UI.createTabGroup({id:'tabGroup1'});

  var winBack = Titanium.UI.createWindow({  
    url:'back.js',
    backgroundColor:'000',
    id: id,
  });

  var winProject = Titanium.UI.createWindow({  
    url:'project.js',
    backgroundColor:'000',
    projectName: "Tasks for"+e.rowData.title,
    projectId: e.rowData.projectId,
    title: e.rowData.title
  });

  var winAddProject = Titanium.UI.createWindow({
	url:'addTask.js',
	backgroundColor:'000',
	projectId: e.rowData.projectId,
  });

  var tab1 = Titanium.UI.createTab({
	id:'tab1',
	title:'Project',
	window:winProject
  });

  var tab2 = Titanium.UI.createTab({
	id:'tab2',
	title:'Add task',
	window:winAddProject
  });
  
  var tab3 = Titanium.UI.createTab({
	id:'tab3',
	title:'Overview',
	window:winBack
  });

  tabGroup.addTab(tab1);
  tabGroup.addTab(tab2);
  tabGroup.addTab(tab3);

  tabGroup.setActiveTab(0);
  tabGroup.open();

});


var btnloguit = Ti.UI.createButton({
  title:"log uit",
  top: 20,
  width: 70,
  height: 32,
  left: 3,
});

btnloguit.addEventListener('click', function(e){
  var winLogin = Titanium.UI.createWindow({  
    backgroundColor:'000',
    url:'login.js'
  });
  winLogin.open();
});

/* ============================
 * Call to get projects
 * ============================ */

var overviewReq = Titanium.Network.createHTTPClient();  
overviewReq.open('GET','http://esselenstanja2011.dreamhosters.com/mobiele/overview.php?id='+id); 
overviewReq.send();

overviewReq.onload = function()  
{  
    var json = this.responseText; 
    var response = JSON.parse(json); 
    if (response.status == true)  
    {  
    	var rows = [];
		for(var i = 0; i < response.content.length; i++)
		{
				var row = Titanium.UI.createTableViewRow({
					className: 'table1Class',
					title: response.content[i].name,
					projectId: response.content[i].id
				});
				rows.push(row);
		}
		table.setData(rows);
    }  
    else  
    {  
        alert("response.content");  
    }
};

overviewReq.onerror = function()  
{ 
	alert("Could not connect to server."); 
};

Titanium.UI.currentWindow.add(label1);
Titanium.UI.currentWindow.add(table);
Titanium.UI.currentWindow.add(btnloguit);

