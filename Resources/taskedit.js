Titanium.UI.currentWindow.setBackgroundColor('#000');

var lblName = Ti.UI.createLabel({
  text:'Edit a task',
  top: 20,
  width: "80%",
  height: 20,
  left: "10%",
  font:{fontSize:14,fontWeight:'bold'},
  color: '#fff',
  textAlign: 'center',
})

var lbltaskname = Ti.UI.createLabel({
  text:'Taskname:',
  top: 50,
  width: "30%",
  height: 20, 
  left: 5,
  font:{fontSize:11},
  color: '#fff',
  textAlign: 'left',
})

var txttaskname= Ti.UI.createTextField({
  value: Titanium.UI.currentWindow.taskname,
  top: 50,
  left: 100,
  width: "50%",
  font:{fontSize:11},
  height: 25,
  color: '#000',
  textAlign: 'left',
})

var lblpersoon = Ti.UI.createLabel({
  text:'Person:',
  top: 80,
  width: "30%",
  height: 20,
  left: 5,
  font:{fontSize:11},
  color: '#fff',
  textAlign: 'left',
})

var txtperson= Ti.UI.createTextField({
  value: Titanium.UI.currentWindow.person,
  top: 80,
  left: 100,
  width: "50%",
  height: 25,
  font:{fontSize:11},
  color: '#000',
  textAlign: 'left',
})

var lbldeadline = Ti.UI.createLabel({
  text:'Deadline',
  top: 110,
  width: "30%",
  height: 20,
  left: 5,
  font:{fontSize:11},
  color: '#fff',
  textAlign: 'left',
})

var daypicker = Titanium.UI.createPicker({
  top: 140,
  width: "25%",
  left: 5,
  font:{fontSize:11},
  color: '#fff',
});

var dataday = [];
dataday[0]=Titanium.UI.createPickerRow({title:'1'});
dataday[1]=Titanium.UI.createPickerRow({title:'2'});
dataday[2]=Titanium.UI.createPickerRow({title:'3'});
dataday[3]=Titanium.UI.createPickerRow({title:'4'});
dataday[4]=Titanium.UI.createPickerRow({title:'5'});
dataday[5]=Titanium.UI.createPickerRow({title:'6'});
dataday[6]=Titanium.UI.createPickerRow({title:'7'});
dataday[7]=Titanium.UI.createPickerRow({title:'8'});
dataday[8]=Titanium.UI.createPickerRow({title:'9'});
dataday[9]=Titanium.UI.createPickerRow({title:'10'});
dataday[10]=Titanium.UI.createPickerRow({title:'11'});
dataday[11]=Titanium.UI.createPickerRow({title:'12'});
dataday[12]=Titanium.UI.createPickerRow({title:'13'});
dataday[13]=Titanium.UI.createPickerRow({title:'14'});
dataday[14]=Titanium.UI.createPickerRow({title:'15'});
dataday[15]=Titanium.UI.createPickerRow({title:'16'});
dataday[16]=Titanium.UI.createPickerRow({title:'17'});
dataday[17]=Titanium.UI.createPickerRow({title:'18'});
dataday[18]=Titanium.UI.createPickerRow({title:'19'});
dataday[19]=Titanium.UI.createPickerRow({title:'20'});
dataday[20]=Titanium.UI.createPickerRow({title:'21'});
dataday[21]=Titanium.UI.createPickerRow({title:'22'});
dataday[22]=Titanium.UI.createPickerRow({title:'23'});
dataday[24]=Titanium.UI.createPickerRow({title:'25'});
dataday[25]=Titanium.UI.createPickerRow({title:'26'});
dataday[26]=Titanium.UI.createPickerRow({title:'27'});
dataday[27]=Titanium.UI.createPickerRow({title:'28'});
dataday[28]=Titanium.UI.createPickerRow({title:'29'});
dataday[29]=Titanium.UI.createPickerRow({title:'30'});
dataday[30]=Titanium.UI.createPickerRow({title:'31'});
daypicker.add(dataday);

var monthpicker = Titanium.UI.createPicker({
  top: 140,
  width: "25%",
  left: 80,
  font:{fontSize:11},
  color: '#fff',
});

var datamonth = [];
datamonth[0]=Titanium.UI.createPickerRow({title:'1'});
datamonth[1]=Titanium.UI.createPickerRow({title:'2'});
datamonth[2]=Titanium.UI.createPickerRow({title:'3'});
datamonth[3]=Titanium.UI.createPickerRow({title:'4'});
datamonth[4]=Titanium.UI.createPickerRow({title:'5'});
datamonth[5]=Titanium.UI.createPickerRow({title:'6'});
datamonth[6]=Titanium.UI.createPickerRow({title:'7'});
datamonth[7]=Titanium.UI.createPickerRow({title:'8'});
datamonth[8]=Titanium.UI.createPickerRow({title:'9'});
datamonth[9]=Titanium.UI.createPickerRow({title:'10'});
datamonth[10]=Titanium.UI.createPickerRow({title:'11'});
datamonth[11]=Titanium.UI.createPickerRow({title:'12'});
datamonth[12]=Titanium.UI.createPickerRow({title:'13'});
monthpicker.add(datamonth);


var yearpicker = Titanium.UI.createPicker({
  top: 140,
  width: "33%",
  left: 152,
  font:{fontSize:11},
  color: '#fff',
});

var datayear = [];
datayear[0]=Titanium.UI.createPickerRow({title:'2012'});
datayear[1]=Titanium.UI.createPickerRow({title:'2013'});
datayear[2]=Titanium.UI.createPickerRow({title:'2014'});
datayear[3]=Titanium.UI.createPickerRow({title:'2015'});
datayear[4]=Titanium.UI.createPickerRow({title:'2016'});
yearpicker.add(datayear);


var lbluitleg = Ti.UI.createLabel({
  text:'Task:',
  top: 180,
  width: "30%",
  height: 20,
  left: 5,
  font:{fontSize:11},
  color: '#fff',
  textAlign: 'left',
})

var txtuitleg= Ti.UI.createTextArea({
  top: 210,
  left: 5,
  width: "90%",
  height: 60,
  font:{fontSize:11},
  color: '#000',
  textAlign: 'left',
})

var btnEdit = Ti.UI.createButton({
  title:"Save",
  bottom: 5,
  width: 50,
  height: 32,
  right: 3,
})

Titanium.UI.currentWindow.add(lblName);
Titanium.UI.currentWindow.add(lbltaskname);
Titanium.UI.currentWindow.add(txttaskname);
Titanium.UI.currentWindow.add(lblpersoon);
Titanium.UI.currentWindow.add(txtperson);
Titanium.UI.currentWindow.add(lbldeadline);
Titanium.UI.currentWindow.add(daypicker);
Titanium.UI.currentWindow.add(monthpicker);
Titanium.UI.currentWindow.add(yearpicker);
Titanium.UI.currentWindow.add(lbluitleg);
Titanium.UI.currentWindow.add(txtuitleg);
Titanium.UI.currentWindow.add(btnEdit);