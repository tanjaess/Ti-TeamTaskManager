
var detailScreen = Ti.UI.createView({
  layout: "portrait",
  height: "100%",
  width: "100%",
  backgroundColor : "#000",
  color: "#fff",
  visible: "false",
});

var lblName = Ti.UI.createLabel({
  text:'Task name',
  top: 20,
  width: "80%",
  height: 20,
  left: "10%",
  font:{fontSize:14,fontWeight:'bold'},
  color: '#fff',
  textAlign: 'center',
})

var lblDeadline = Ti.UI.createLabel({
  text:'Deadline : 31-01-2012',
  top: 60,
  width: "80%",
  height: 20,
  left: 5,
  font:{fontSize:12,fontWeight:'bold'},
  color: '#fff',
  textAlign: 'left',
})

var lblPerson = Ti.UI.createLabel({
  text:'Persoon',
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
  detailScreen.hide();
  projectScreen.show();
})

detailScreen.add(lblName);
detailScreen.add(lblPerson);
detailScreen.add(lblUitleg);
detailScreen.add(lblDeadline);
detailScreen.add(btnproject);
win.add(detailScreen);