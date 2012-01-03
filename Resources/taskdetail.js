Titanium.UI.currentWindow.setBackgroundColor('#000');

var lblName = Ti.UI.createLabel({
  text:Titanium.UI.currentWindow.taskname,
  top: 20,
  width: "70%",
  left: 55,
  font:{fontSize:14,fontWeight:'bold'},
  color: '#fff',
  textAlign: 'center',
})

var lblDeadline = Ti.UI.createLabel({
  text:'Deadline : ' + Titanium.UI.currentWindow.deadline,
  top: 60,
  width: "80%",
  height: 20,
  left: 5,
  font:{fontSize:12,fontWeight:'bold'},
  color: '#fff',
  textAlign: 'left',
})

var lblPerson = Ti.UI.createLabel({
  text: Titanium.UI.currentWindow.person,
  top: 85,
  width: "80%",
  height: 20,
  left: 5,
  fontSize:11,
  color: '#fff',
  textAlign: 'left',
})

var lblUitleg = Ti.UI.createLabel({
  text:'Uitleg over het volledige project, m.a.w. de complete tekst met alle richtlijnen over de taak waar het op dit moment over gaat',
  top: 120,
  width: "80%",
  left: 5,
  fontSize:11,
  color: '#fff',
  textAlign: 'left',
})

var btnproject = Ti.UI.createButton({
  title:"Back",
  top: 20,
  width: 50,
  height: 32,
  left: 3,
})

btnproject.addEventListener('click', function(e){
  Titanium.UI.currentWindow.close();
})

var btnReport = Ti.UI.createButton({
  title:"Report Problem",
  bottom: 5,
  width: 100,
  height: 32,
  left: 3,
})

btnReport.addEventListener('click', function(e){
  var winProblem = Titanium.UI.createWindow({  
    url:'reportproblem.js',
    backgroundColor:'000',
    // Variabelen doorgeven naar de report problem pagina
    taskname: Titanium.UI.currentWindow.taskname, 
    deadline: Titanium.UI.currentWindow.deadline
  });
  // moet eerst gesloten worden, wanneer een probleem wordt toegevoegd 
  //en men komt terug op deze pagina, dan werkt de "back"-button niet meer
  Titanium.UI.currentWindow.close();
  winProblem.open();
})

var btnEdit = Ti.UI.createButton({
  title:"Edit",
  bottom: 5,
  width: 50,
  height: 32,
  right: 3,
})

btnEdit.addEventListener('click', function(e){
  var winEdit = Titanium.UI.createWindow({  
    url:'taskedit.js',
    backgroundColor:'000',
    // Variabelen doorgeven naar de edit pagina
    taskname: Titanium.UI.currentWindow.taskname, 
    deadline: Titanium.UI.currentWindow.deadline,
    person: Titanium.UI.currentWindow.person
  });
  // moet eerst gesloten worden, wanneer een task wordt veranderd
  // en men komt terug op deze pagina, dan werkt de "back"-button niet meer
  Titanium.UI.currentWindow.close();
  winEdit.open();
})

Titanium.UI.currentWindow.add(lblName);
Titanium.UI.currentWindow.add(lblPerson);
Titanium.UI.currentWindow.add(lblUitleg);
Titanium.UI.currentWindow.add(lblDeadline);
Titanium.UI.currentWindow.add(btnproject);
Titanium.UI.currentWindow.add(btnReport);
Titanium.UI.currentWindow.add(btnEdit);