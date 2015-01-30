Ti.UI.setBackgroundColor('#c2c2c2');
var tabGroup = Ti.UI.createTabGroup();

var win1 = Ti.UI.CreateWindow({
});

var tab1 = Ti.UI.createTab({
	title:'Tab1',
	window:win1
});

//var navWin = Ti.UI.createWindow({
//	navBarHidden:true,
//	backgroundColor:'#E480C3'
//});

//var win2 = Ti.UI.createWindow({
//	title:''
//});

//var nav = Ti.UI.createNavigationGroup({window:'win2'});

//navWin.add(nav);

//var tab2 = Ti.UI.createTab({
//	window:navWin,
//	title:'Tab2'
//});

tabGroup.addTab(tab1);
//tabGroup.addTab(tab2);
tabGroup.open();

win1.open();






