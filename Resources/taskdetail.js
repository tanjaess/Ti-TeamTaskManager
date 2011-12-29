
var detailScreen = Ti.UI.createView({
  layout: "portrait",
  height: "100%",
  width: "100%",
  backgroundColor : "#000",
  color: "#fff",
  visible: "false",
});

var label1 = Ti.UI.createLabel({
  text:'Detail view',
  top: 20,
  width: "80%",
  height: 32,
  left: "10%",
  color: '#fff',
  textAlign: 'center',
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

detailScreen.add(label1);
detailScreen.add(btnproject);
win.add(detailScreen);