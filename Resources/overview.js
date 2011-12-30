Titanium.UI.currentWindow.setBackgroundColor('#000');

var label1 = Ti.UI.createLabel({
  text:"Projects overview",
  top: 20,
  width: "80%",
  height: 32,
  left: "10%",
  color: '#fff',
  textAlign: 'center',
})

var data = [
	{title:"Project 1", hasChild:true},
	{title:"Project 2", hasChild:true},
	{title:"Project 3", hasChild:true}
	];
 
var table = Ti.UI.createTableView({
  top: 80,
  headerTitle:"Projects",
  data:data,
})

table.addEventListener("click", function(e) {

  var tabGroup = Titanium.UI.createTabGroup({id:'tabGroup1'});
  
  var winBack = Titanium.UI.createWindow({  
    url:'back.js',
    backgroundColor:'000'
  });

  var winProject = Titanium.UI.createWindow({  
    url:'project.js',
    backgroundColor:'000'
  });
  
  var winAddProject = Titanium.UI.createWindow({
	url:'addTask.js',
	backgroundColor:'000'
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
  width: 50,
  height: 32,
  left: 3,
})

btnloguit.addEventListener('click', function(e){
  var winLogin = Titanium.UI.createWindow({  
    backgroundColor:'000',
    url:'login.js'
  });
  winLogin.open();
})

Titanium.UI.currentWindow.add(label1);
Titanium.UI.currentWindow.add(table);
Titanium.UI.currentWindow.add(btnloguit);
