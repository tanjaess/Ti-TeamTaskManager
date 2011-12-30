Titanium.UI.currentWindow.setBackgroundColor('#000');

var lblName = Ti.UI.createLabel({
  text:'Add a task!',
  top: 20,
  width: "80%",
  height: 20,
  left: "10%",
  font:{fontSize:14,fontWeight:'bold'},
  color: '#fff',
  textAlign: 'center',
})

Titanium.UI.currentWindow.add(lblName);