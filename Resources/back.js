Titanium.UI.currentWindow.setBackgroundColor('#000');


tabGroup = Titanium.UI.currentWindow.tabGroup;
tabGroup.active = true;
tabGroup.animate({top:-60,duration:500});
tabGroup.tabBarVisible = false;
 

var winOverview = Titanium.UI.createWindow({  
  backgroundColor:'000',
  url:'overview.js'
});
winOverview.open();