Titanium.UI.currentWindow.setBackgroundColor('#000');
var userId = Titanium.UI.currentWindow.id;

tabGroup = Titanium.UI.currentWindow.tabGroup;
tabGroup.active = true;
tabGroup.animate({top:-60,duration:500});
tabGroup.tabBarVisible = false;
 

var winOverview = Titanium.UI.createWindow({  
  backgroundColor:'000',
  url:'overview.js',
  id: userId,
  tabBarVisible:false,
});
winOverview.open();