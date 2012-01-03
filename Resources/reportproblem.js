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

var btnback = Ti.UI.createButton({
  title:"Back",
  top: 20,
  width: 50,
  height: 32,
  left: 3,
})

btnback.addEventListener('click', function(e){
  Titanium.UI.currentWindow.close();
})

var lbluitleg = Ti.UI.createLabel({
  text:'Problem:',
  top: 100,
  width: "30%",
  height: 20,
  left: 5,
  font:{fontSize:11},
  color: '#fff',
  textAlign: 'left',
})

var txtuitleg= Ti.UI.createTextArea({
  top: 130,
  left: 5,
  width: "90%",
  height: 60,
  font:{fontSize:11},
  color: '#000',
  textAlign: 'left',
})

var btnSave = Ti.UI.createButton({
  title:"Save",
  top: 210,
  width: 50,
  height: 32,
  left: 3,
})

Titanium.UI.currentWindow.add(lblName);
Titanium.UI.currentWindow.add(lbluitleg);
Titanium.UI.currentWindow.add(txtuitleg);
Titanium.UI.currentWindow.add(lblDeadline);
Titanium.UI.currentWindow.add(btnback);
Titanium.UI.currentWindow.add(btnSave);