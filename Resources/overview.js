var win = Titanium.UI.currentWindow;
win.setBackgroundColor('#000');
win.title="Team Task Manager";
win.setBackgroundImage('images/headReverse.png');

/* =======================================
 * isAndroid?
 * ======================================= */

var isAndroid = false;

if (Ti.Platform.name == 'android') {
	isAndroid = true;
};

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
  left: "20%",
  color: '#fff',
  textAlign: 'center',
  font:{fontSize:20,fontWeight:'bold'},
});


var table = Ti.UI.createTableView({
  top: 80,
});


/* ============================
 * Tabs and functionality 
 * ============================ */

table.addEventListener("click", function(e) {
	
var tabGroup = Titanium.UI.createTabGroup({
	id:'tabGroup1',
  });

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

if (isAndroid) 
{
	var btnloguit = Ti.UI.createButton({
	  title:"log uit",
	  borderWidth: 2,
	  borderRadius: 10,
	  borderColor: '#097ab5',
	  backgroundColor: '#011723',
	  color: '#fff',
	  top: 20,
	  width: 70,
	  height: 32,
	  left: 3,
	});
}
else
{
	var btnloguit = Ti.UI.createButton({
	  title:"log uit",
	  borderWidth: 2,
	  borderRadius: 10,
	  borderColor: '#097ab5',
	  top: 20,
	  width: 70,
	  height: 32,
	  left: 3,
	});
}
btnloguit.addEventListener('click', function(e){
  var winLogin = Titanium.UI.createWindow({ 
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
						projectId: response.content[i].id,
					});
			if (isAndroid) 
			{
				if(i%2==0)
				{
					row.setBackgroundColor('#097ab5');
				} 
				else
				{
					row.setBackgroundColor('#011723');
				}
				var name =  Titanium.UI.createLabel({
					text:response.content[i].name,
					font:{fontSize:16,fontWeight:'bold'},
					width:'auto',
					textAlign:'left',
					top:13,
					left:10,
					height:'auto',
					color:"#fff"
				});
				var arrow =  Titanium.UI.createImageView({
					url:"app://images/arrow_right.png",
					width:30,
					height:30,
					right:4,
					top:10
				});
				row.add(arrow);
				row.add(name);
			} 
			else
			{
				row.hasChild=true;
			}
			rows.push(row);
		};
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

