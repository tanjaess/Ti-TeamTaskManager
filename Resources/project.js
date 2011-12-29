var projectScreen = Ti.UI.createView({
  layout: "portrait",
  height: "100%",
  width: "100%",
  backgroundColor : "#000",
  color: "#fff",
  visible: "false",
});

var addScreen = Ti.UI.createView({
  layout: "portrait",
  height: "100%",
  width: "100%",
  backgroundColor : "#000",
  color: "#fff",
  visible: "false",
});

/*var bb1 = Titanium.UI.createButtonBar({
    labels:['Project', 'Add Task'],
    backgroundColor:'#336699',
    top:0,
    height:20,
    width:'100%'
});*/

//win.add(bb1);

var label1 = Ti.UI.createLabel({
  text:"Overview of a project",
  top: 20,
  width: "80%",
  height: 32,
  left: "10%",
  color: '#fff',
  textAlign: 'center',
})

var lbladdTitle = Ti.UI.createLabel({
  text:"Add a new task",
  top: 20,
  width: "80%",
  height: 32,
  left: "10%",
  color: '#fff',
  textAlign: 'center',
})

var data = [
	{person:'Tanja', taskname:'Databank aanmaken', deadline:'15-01-2012', hasChild:true},
	{person:'Barbara', taskname:'Layout opmaken', deadline:'12-01-2012', hasChild:true},
	{person:'Tanja', taskname:'PHP-paginas aanmaken', deadline:'05-01-2012', hasChild:true}
	];

var table = Ti.UI.createTableView({
  top: 80,
  headerTitle:"Projects"
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
    left:5,
    height:17
  });  
  
  var persoon =  Titanium.UI.createLabel({
    text:data[i].person,
    font:{fontSize:11},
    width:'auto',
    textAlign:'left',
    bottom:2,
    left:5,
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

  row.add(persoon);
  row.add(taaknaam);
  row.add(deadline);
  row.hasChild=data[i].hasChild;
  
  row.className = 'tasks_row';
  
  datarows.push(row);
};

var btnoverview = Ti.UI.createButton({
  title:"Back",
  top: 20,
  width: 50,
  height: 32,
  left: 3,
})

table.addEventListener("click", function(e) {
  projectScreen.hide();
  detailScreen.show();
});

btnoverview.addEventListener('click', function(e){
  projectScreen.hide();
  overviewScreen.show();
})

table.setData(datarows);
projectScreen.add(label1);
projectScreen.add(table);
projectScreen.add(btnoverview);
win.add(projectScreen);
