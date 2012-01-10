Titanium.UI.currentWindow.setBackgroundColor('#000');

var currentProject = Titanium.UI.currentWindow.project;

var label1 = Ti.UI.createLabel({
  text: currentProject,
  top: 20,
  width: "80%",
  height: 32,
  left: "10%",
  color: '#fff',
  textAlign: 'center',
})

var data = [
	{person:'Tanja', taskname:'Databank aanmaken', deadline:'15-01-2012', important:false, hasChild:true},
	{person:'Barbara', taskname:'Layout opmaken', deadline:'12-01-2012', important:true, hasChild:true},
	{person:'Tanja', taskname:'PHP-paginas aanmaken', deadline:'05-01-2012', important:false, hasChild:true}
	];

var table = Ti.UI.createTableView({
  top: 80,
  headerTitle:"Projects",
})

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
  		url: 'images/uitroepteken.png'
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

//Ti.include('taskdetail.js');

table.addEventListener("click", function(e) {
  var winDetail = Titanium.UI.createWindow({  
    url:'taskdetail.js',
    backgroundColor:'000',
    person: e.rowData.persoon, 
    taskname: e.rowData.taaknaam, 
    deadline: e.rowData.deadline
  });
  
  winDetail.open();
});

table.setData(datarows);
Titanium.UI.currentWindow.add(label1);
Titanium.UI.currentWindow.add(table);
