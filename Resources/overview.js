var overviewScreen = Ti.UI.createView({
  layout: "portrait",
  height: "100%",
  width: "100%",
  backgroundColor : "#000",
  color: "#fff",
  visible: "false",
});

var label1 = Ti.UI.createLabel({
  text:"Choose a project",
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
  overviewScreen.hide();
  projectScreen.show();
});

var btnloguit = Ti.UI.createButton({
  title:"log uit",
  top: 20,
  width: 50,
  height: 32,
  left: 3,
})

btnloguit.addEventListener('click', function(e){
  overviewScreen.hide();
  mainScreen.show();
})

overviewScreen.add(label1);
overviewScreen.add(table);
overviewScreen.add(btnloguit);
win.add(overviewScreen);
