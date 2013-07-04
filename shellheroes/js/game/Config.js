var Config={};
Config.gameName="ShellHeroes";
Config.siteUrl="";
Config.level=1;
Config.score=0;
Config.playedLevels=0;
Config.developer=false;
Config.gameSpeed=1;


Config.levelMax=25;
Config.canvasWidth=650;
Config.canvasHeight=550;
Config.middleX=Config.canvasWidth/2;
Config.middleY=Config.canvasHeight/2;


Config.leftEdge=-50;
Config.topEdge=10;
Config.CELL_WIDTH=50;
Config.CELL_HEIGHT=50;

//Performance settings
Config.animateSmoke=false;

Config.boxes={
	1:"woodenBox",
	2:"ironBox",
	3:"spike",
	4:"ladderBoxBottom",
	5:"ladderBoxTop",
	6:"stepBox",
	7:"ropeBox",
	8:"halfBridgeBox",
	9:"bridgeBoxLeft",
	10:"bridgeBoxRight",
	11:"axeBox",
	12:"jumpBox",
	13:"bombBox",
	
	51:"ladderActionBox",
	52:"stepActionBox",
	53:"ropeActionBox",
	54:"halfBridgeActionBox",
	55:"bridgeActionBox",
	56:"axeActionBox",
	57:"jumpActionBox",
	58:"bombActionBox",
	
	59:"stepClickBox",
	60:"ladderClickBox",
	61:"ropeClickBox",
	62:"jumpClickBox",
	63:"axeClickBox",
	64:"bombClickBox",
	65:"halfBridgeClickBox",
	66:"bridgeClickBox",
	
	
	99:"invisible"
};
Config.helpBoxes={
	59:"stepBoxHelp",
	60:"ladderBoxHelp",
	61:"bungeeBoxHelp",
	62:"springBoxHelp",
	63:"axeBoxHelp",
	64:"bombBoxHelp",
	65:"halfBridgeBoxHelp",
	66:"fullBridgeBoxHelp"
};
Config.boxProperties={
	/**
	 * block	-	walkable
	 * breakable-	breakable by bomb
	 * action	-	is action box
	 * Defaults to false if not specified
	 */
	"woodenBox":{
		block:true,
		breakable:true
	},
	"ironBox":{
		block:true,
	},
	"spike":{
		block:true,
		breakable:true,
		spike:true
	},
	"ladderBoxBottom":{
		regX:2,
		regY:49
	},
	"ladderBoxTop":{
		block:true,
		fake:true
	},
	"stepBox":{
		block:true,
		breakable:true,
		regX:1,
		regY:0
	},
	"ropeBox":{
		regX:-10
	},
	"halfBridgeBox":{
		block:true,
		breakable:true
	},
	"bridgeBoxLeft":{
		block:true,
	},
	"bridgeBoxRight":{
		block:true,
		fake:true
	},
	"axeBox":{//Axe box is another action box which destroys the spike
		action:true
	},
	"jumpBox":{
		block:true,
		animated:true,
		regY:-5
	},
	"bombBox":{//Bomb box is another action box which destroys other boxes
		action:true
	},
	
	
	"stepEffect":{
		regY:-2
	},
	"ropeEffect":{
		regY:-52,
		regX:-11
	},
	"bridgeEffect":{
		regX:-1,
		regY:-1
	},
	"axeEffect":{//The axe effect :)
		regX:21,
		regY:16
	},
	"springEffect":{
		regY:-4,
		regX:1
	},
	"bombEffect":{
		regX:19,
		regY:8
	},
	"explodeEffect":{
		regX:40,
		regY:35
	},
	
	
	
	"stepActionBox":{
		action:true
	},
	"ladderActionBox":{
		action:true
	},
	"ropeActionBox":{
		action:true
	},
	"halfBridgeActionBox":{
		action:true
	},
	"bridgeActionBox":{
		action:true
	},
	"axeActionBox":{
		action:true
	},
	"jumpActionBox":{
		action:true
	},
	"bombActionBox":{
		action:true
	},
	
	
	"invisible":{
		block:true,
		fake:true
	},
	
	//Clickboxes..
	//dragBox - draggingBox to be created when dragged
	"stepClickBox":{
		dragBox:52
	},
	"ladderClickBox":{
		dragBox:51
	},
	"ropeClickBox":{
		dragBox:53
	},
	"jumpClickBox":{
		dragBox:57
	},
	"axeClickBox":{
		dragBox:56
	},
	"bombClickBox":{
		dragBox:58
	},
	"halfBridgeClickBox":{
		dragBox:54
	},
	"bridgeClickBox":{
		dragBox:55
	}
	
}

Config.levelData=[
{//Level1
	data:[
	[0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ],
	[0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ],
	[0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ],
	[0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ],
	[0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ],
	[0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ],
	[0 ,0 ,0 ,0 ,0 ,0 ,0 ,1 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ],
	[0 ,0 ,0 ,0 ,0 ,0 ,0 ,2 ,0 ,0 ,1 ,1, 0 ,0 ,0 ],
	[99,99,99,99,99,99,99,99,99,99,99,99,99,99,99]
	],
	start:[0,7],//Character spawning cell
	exit:[14,7],//Character exit cell
	exitLabel:[11.5,8.0],//Cell where exit label to place (Use floating point values to align the label)
	//Click buttons - {count:<count>, id:count, id:count}
	directional:{},//Directional buttons available in this level
	build:{59:1},//Building buttons available in this level
	special:{},//Special action buttons available in this level
	
	characters:1,//Number of characters to spawn in this level, This excludes the king.
	time:40//Time available for this level
	/**....**/
},
{//Level2
	data:[
	[0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ],
	[0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ],
	[0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ],
	[0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ],
	[0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ],
	[1 ,1 ,1 ,1 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ],
	[0 ,1 ,2 ,1 ,0 ,0 ,0 ,0 ,0 ,1 ,0 ,0 ,0 ,0 ,0 ],
	[0 ,1 ,1 ,1 ,0 ,0 ,0 ,0 ,2 ,1 ,0 ,0, 0 ,0 ,0 ],
	[99,99,99,99,99,99,99,99,99,99,99,99,99,99,99]
	],
	start:[0,4],
	exit:[14,7],
	exitLabel:[11.5,8],
	directional:{61:1},
	build:{},
	special:{},
	characters:1,
	time:40
},
{//Level3
	data:[
	[0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ],
	[0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ],
	[0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ],
	[0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ],
	[0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ],
	[0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,1 ,1 ,0 ,0 ,0 ,0 ,0 ],
	[0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,1 ,1 ,0 ,0 ,0 ,0 ,0 ],
	[0 ,0 ,0 ,0 ,0 ,0 ,1 ,1 ,2 ,1 ,0 ,0, 0 ,0 ,0 ],
	[99,99,99,99,99,99,99,99,99,99,99,99,99,99,99]
	],
	start:[0,7],
	exit:[14,7],
	exitLabel:[11.5,8],
	directional:{61:1,60:1},
	build:{},
	special:{},	
	characters:4,
	time:70
},
{//Level4
	data:[
	[0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ],
	[0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ],
	[0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ],
	[0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ],
	[0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ],
	[0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,1 ,0 ,0 ,0 ,0 ,0 ],
	[0 ,0 ,0 ,0 ,0 ,0 ,0 ,1 ,0 ,1 ,2 ,0 ,0 ,0 ,0 ],
	[0 ,0 ,0 ,0 ,0 ,0 ,0 ,1 ,3 ,1 ,1 ,0, 0 ,0 ,0 ],
	[99,99,99,99,99,99,99,99,99,99,99,99,99,99,99]
	],
	start:[0,7],
	exit:[14,7],
	exitLabel:[11.5,8],
	directional:{60:1},
	build:{65:1},
	special:{},	
	characters:4,
	time:80
},
{//Level5
	data:[
	[0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ],
	[0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ],
	[0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ],
	[0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ],
	[0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ],
	[0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ],
	[0 ,0 ,0 ,0 ,0 ,1 ,0 ,0 ,1 ,0 ,0 ,0 ,1 ,2 ,1 ],
	[0 ,0 ,0 ,0 ,0 ,2 ,3 ,3 ,2 ,3 ,0 ,0, 1 ,1 ,1 ],
	[99,99,99,99,99,99,99,99,99,99,99,99,99,99,99]
	],
	start:[0,7],
	exit:[14,5],
	exitLabel:[11.5,6],
	directional:{60:1},
	build:{59:1,65:1,66:1},
	special:{},	
	characters:6,
	time:90
},
{//Level6
	data:[
	[0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ],
	[0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ],
	[0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ],
	[0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ],
	[0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ],
	[0 ,0 ,1 ,0 ,0 ,1 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,1 ,1 ],
	[1 ,1 ,1 ,0 ,0 ,1 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,2 ,0 ],
	[1 ,1 ,1 ,0 ,0 ,1 ,2 ,0 ,3 ,2 ,0 ,1, 1 ,1 ,0 ],
	[99,99,99,99,99,99,99,99,99,99,99,99,99,99,99]
	],
	start:[0,5],
	exit:[14,4],
	exitLabel:[11.5,5],
	directional:{60:1},
	build:{66:1},
	special:{63:1},	
	characters:6,
	time:90
},
{//Level7
	data:[
	[0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ],
	[0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ],
	[0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ],
	[0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ],
	[0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,1 ,0 ,0 ,0 ,0 ],
	[0 ,0 ,0 ,0 ,0 ,1 ,0 ,0 ,0 ,0 ,1 ,0 ,0 ,0 ,0 ],
	[0 ,0 ,0 ,0 ,0 ,1 ,0 ,0 ,0 ,0 ,1 ,1 ,0 ,0 ,0 ],
	[0 ,0 ,0 ,0 ,0 ,2 ,3 ,0 ,0 ,0 ,2 ,2, 0 ,0 ,0 ],
	[99,99,99,99,99,99,99,99,99,99,99,99,99,99,99]
	],
	start:[0,7],
	exit:[14,7],
	exitLabel:[11.5,8],
	directional:{61:1},
	build:{59:3,65:1},
	special:{62:1},	
	characters:9,
	time:100
},
{//Level8
	data:[
	[0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ],
	[0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ],
	[0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ],
	[0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ],
	[0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,1 ,1 ,0 ,1 ,1 ,1 ],
	[0 ,0 ,0 ,0 ,0 ,0 ,1 ,0 ,0 ,1 ,2 ,0 ,1 ,2 ,0 ],
	[0 ,0 ,0 ,0 ,1 ,0 ,1 ,0 ,0 ,1 ,1 ,0 ,1 ,1 ,0 ],
	[0 ,0 ,0 ,0 ,2 ,0 ,1 ,0 ,0 ,1 ,2 ,3, 2 ,1 ,0 ],
	[99,99,99,99,99,99,99,99,99,99,99,99,99,99,99]
	],
	start:[0,7],
	exit:[14,3],
	exitLabel:[11.5,4],
	directional:{},
	build:{59:1,65:1},
	special:{62:1,64:1},	
	characters:9,
	time:120
},
{//Level9
	data:[
	[0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ],
	[0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ],
	[0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ],
	[0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ],
	[0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,1 ,0 ,0 ,0 ],
	[1 ,1 ,1 ,0 ,0 ,0 ,0 ,0 ,1 ,0 ,0 ,1 ,0 ,0 ,0 ],
	[0 ,1 ,2 ,0 ,0 ,0 ,1 ,1 ,1 ,0 ,0 ,1 ,0 ,1 ,1 ],
	[0 ,1 ,1 ,0 ,0 ,0 ,1 ,2 ,1 ,0 ,0 ,1, 3 ,2 ,0 ],
	[99,99,99,99,99,99,99,99,99,99,99,99,99,99,99]
	],
	start:[0,4],
	exit:[14,5],
	exitLabel:[11.5,6],
	directional:{61:1},
	build:{59:1,65:1},
	special:{62:1,64:1},	
	characters:9,
	time:120
},
{//Level10
	data:[
	[0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ],
	[0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ],
	[0 ,0 ,0 ,0 ,0 ,0 ,0 ,1 ,1 ,0 ,0 ,0 ,0 ,0 ,0 ],
	[0 ,0 ,0 ,0 ,0 ,0 ,0 ,1 ,1 ,0 ,0 ,0 ,0 ,0 ,0 ],
	[0 ,0 ,0 ,0 ,0 ,0 ,0 ,1 ,2 ,0 ,0 ,0 ,0 ,0 ,0 ],
	[0 ,0 ,0 ,0 ,0 ,0 ,0 ,1 ,1 ,0 ,1 ,0 ,1 ,1 ,1 ],
	[0 ,0 ,0 ,0 ,0 ,0 ,1 ,2 ,1 ,0 ,2 ,0 ,2 ,1 ,0 ],
	[0 ,0 ,0 ,0 ,0 ,1 ,1 ,1 ,1 ,3 ,1 ,3, 1 ,1 ,0 ],
	[99,99,99,99,99,99,99,99,99,99,99,99,99,99,99]
	],
	start:[0,7],
	exit:[14,4],
	exitLabel:[11.5,5],
	directional:{},
	build:{59:2,65:2},
	special:{62:1,64:1},	
	characters:9,
	time:120
},
{//Level11
	data:[
	[0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ],
	[0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ],
	[0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ],
	[1 ,1 ,1 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,1 ,0 ,0 ,0 ],
	[0 ,1 ,2 ,1 ,0 ,0 ,0 ,0 ,1 ,0 ,0 ,1 ,0 ,0 ,0 ],
	[0 ,2 ,1 ,2 ,0 ,0 ,0 ,0 ,1 ,0 ,0 ,1 ,1 ,0 ,0 ],
	[0 ,1 ,2 ,1 ,0 ,0 ,1 ,1 ,1 ,0 ,0 ,1 ,2 ,0 ,0 ],
	[0 ,1 ,1 ,1 ,1 ,0 ,2 ,1 ,2 ,1 ,0 ,1 ,1 ,1 ,1 ],
	[99,99,99,99,99,99,99,99,99,99,99,99,99,99,99]
	],
	start:[0,2],
	exit:[14,6],
	exitLabel:[12,7],
	directional:{60:1,61:2},
	build:{59:2},
	special:{62:1},	
	characters:9,
	time:120
},
{//Level12
	data:[
	[0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ],
	[0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ],
	[0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ],
	[0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ],
	[0 ,0 ,0 ,0 ,0 ,0 ,0 ,1 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ],
	[0 ,0 ,0 ,0 ,0 ,1 ,0 ,1 ,0 ,1 ,0 ,0 ,0 ,0 ,0 ],
	[0 ,0 ,0 ,0 ,0 ,1 ,0 ,1 ,2 ,1 ,0 ,0 ,0 ,0 ,0 ],
	[0 ,0 ,0 ,1 ,0 ,1 ,0 ,2 ,1 ,2 ,3 ,3 ,1 ,0 ,0 ],
	[99,99,99,99,99,99,99,99,99,99,99,99,99,99,99]
	],
	start:[0,7],
	exit:[14,7],
	exitLabel:[12,8],
	directional:{},
	build:{59:5,65:2},
	special:{64:1},	
	characters:11,
	time:120
},
{//Level13
	data:[
	[0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ],
	[0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ],
	[0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ],
	[0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ],
	[0 ,0 ,0 ,0 ,1 ,0 ,0 ,0 ,1 ,0 ,0 ,2 ,0 ,0 ,0 ],
	[0 ,0 ,0 ,0 ,1 ,0 ,0 ,0 ,1 ,0 ,0 ,1 ,1 ,0 ,0 ],
	[0 ,0 ,0 ,2 ,1 ,0 ,0 ,0 ,1 ,1 ,0 ,1 ,1 ,0 ,0 ],
	[0 ,0 ,0 ,1 ,1 ,3 ,0 ,0 ,1 ,1 ,2 ,1 ,1 ,0 ,0 ],
	[99,99,99,99,99,99,99,99,99,99,99,99,99,99,99]
	],
	start:[0,7],
	exit:[14,7],
	exitLabel:[12,8],
	directional:{},
	build:{59:3,65:1},
	special:{64:2,62:1},	
	characters:11,
	time:120
},
{//Level14
	data:[
	[0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ],
	[0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ],
	[0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ],
	[0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,1 ,0 ,0 ,0 ,0 ,0 ,0 ],
	[0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,2 ,0 ,0 ,0 ,0 ,0 ,0 ],
	[0 ,0 ,0 ,0 ,0 ,0 ,0 ,1 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ],
	[0 ,0 ,0 ,0 ,1 ,0 ,0 ,1 ,1 ,0 ,0 ,0 ,0 ,0 ,0 ],
	[0 ,0 ,2 ,0 ,1 ,3 ,3 ,1 ,2 ,3 ,3 ,0 ,3 ,0 ,0 ],
	[99,99,99,99,99,99,99,99,99,99,99,99,99,99,99]
	],
	start:[0,7],
	exit:[14,7],
	exitLabel:[11.5,8],
	directional:{},
	build:{59:1,65:2,66:1},
	special:{64:1,63:1},	
	characters:10,
	time:120
},
{//Level15
	data:[
	[0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ],
	[0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ],
	[1 ,1 ,1 ,1 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ],
	[0 ,1 ,2 ,2 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,1 ,0 ,1 ,1 ],
	[0 ,1 ,1 ,1 ,1 ,0 ,0 ,0 ,0 ,0 ,0 ,1 ,0 ,1 ,0 ],
	[0 ,0 ,0 ,1 ,1 ,0 ,0 ,0 ,0 ,0 ,0 ,1 ,1 ,1 ,0 ],
	[0 ,0 ,0 ,1 ,1 ,0 ,0 ,0 ,0 ,0 ,0 ,1 ,2 ,1 ,0 ],
	[0 ,0 ,0 ,1 ,1 ,3 ,3 ,3 ,3 ,2 ,1 ,1 ,1 ,1 ,0 ],
	[99,99,99,99,99,99,99,99,99,99,99,99,99,99,99]
	],
	start:[0,1],
	exit:[14,2],
	exitLabel:[11.5,3],
	directional:{},
	build:{59:1,65:4},
	special:{64:2,62:1},	
	characters:12,
	time:120
},
{//Level16
	data:[
	[0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ],
	[0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ],
	[1 ,1 ,1 ,2 ,1 ,1 ,1 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ],
	[0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,2 ,0 ,0 ,0 ,0 ,0 ,0 ],
	[0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,2 ,0 ,0 ,0 ,0 ,1 ,1 ],
	[1 ,0 ,1 ,1 ,1 ,1 ,1 ,2 ,1 ,1 ,1 ,0 ,0 ,1 ,0 ],
	[1 ,0 ,0 ,0 ,0 ,0 ,1 ,0 ,0 ,0 ,1 ,0 ,0 ,1 ,0 ],
	[1 ,2 ,0 ,3 ,0 ,0 ,1 ,0 ,3 ,0 ,1 ,0 ,0 ,2 ,0 ],
	[99,99,99,99,99,99,99,99,99,99,99,99,99,99,99]
	],
	start:[0,1],
	exit:[14,3],
	exitLabel:[11.5,4],
	directional:{61:1},
	build:{},
	special:{63:2,64:2,62:1},	
	characters:12,
	time:140
},
{//Level17
	data:[
	[0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ],
	[0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ],
	[0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ],
	[0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,1 ,0 ,0 ,0 ],
	[0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,1 ,0 ,0 ,0 ],
	[1 ,1 ,1 ,0 ,1 ,0 ,0 ,1 ,0 ,0 ,0 ,2 ,1 ,0 ,0 ],
	[0 ,1 ,2 ,0 ,2 ,0 ,0 ,2 ,0 ,0 ,0 ,1 ,1 ,1 ,1 ],
	[0 ,1 ,1 ,1 ,1 ,3 ,3 ,1 ,3 ,1 ,0 ,2 ,1 ,1 ,0 ],
	[99,99,99,99,99,99,99,99,99,99,99,99,99,99,99]
	],
	start:[0,4],
	exit:[14,5],
	exitLabel:[12,6],
	directional:{},
	build:{59:2,65:1,66:1},
	special:{62:1},	
	characters:9,
	time:100
},
{//Level18
	data:[
	[0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ],
	[0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ],
	[0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ],
	[1 ,1 ,1 ,1 ,1 ,0 ,0 ,1 ,1 ,1 ,0 ,2 ,0 ,0 ,0 ],
	[0 ,0 ,0 ,2 ,0 ,0 ,0 ,0 ,1 ,0 ,0 ,2 ,0 ,2 ,1 ],
	[0 ,0 ,0 ,1 ,1 ,0 ,1 ,0 ,1 ,0 ,1 ,1 ,0 ,1 ,0 ],
	[0 ,0 ,0 ,1 ,1 ,0 ,2 ,0 ,2 ,0 ,1 ,0 ,0 ,2 ,0 ],
	[0 ,0 ,0 ,1 ,1 ,3 ,1 ,3 ,1 ,2 ,1 ,0 ,0 ,1 ,0 ],
	[99,99,99,99,99,99,99,99,99,99,99,99,99,99,99]
	],
	start:[0,2],
	exit:[14,3],
	exitLabel:[11.5,4],
	directional:{60:1},
	build:{65:1},
	special:{64:2,62:1},	
	characters:9,
	time:100
},
{//Level19
	data:[
	[0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ],
	[0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ],
	[0 ,0 ,0 ,0 ,0 ,0 ,0 ,1 ,0 ,1 ,0 ,0 ,0 ,0 ,0 ],
	[0 ,0 ,0 ,0 ,0 ,0 ,0 ,1 ,0 ,1 ,0 ,0 ,1 ,1 ,1 ],
	[1 ,1 ,2 ,1 ,1 ,1 ,1 ,1 ,2 ,1 ,1 ,0 ,2 ,0 ,0 ],
	[0 ,0 ,0 ,2 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,1 ,0 ,0 ],
	[0 ,0 ,0 ,1 ,1 ,0 ,0 ,0 ,1 ,0 ,0 ,0 ,2 ,0 ,0 ],
	[0 ,0 ,0 ,0 ,1 ,3 ,0 ,0 ,1 ,0 ,1 ,1 ,1 ,0 ,0 ],
	[99,99,99,99,99,99,99,99,99,99,99,99,99,99,99]
	],
	start:[0,3],
	exit:[14,2],
	exitLabel:[11.5,3],
	directional:{},
	build:{59:1,65:1},
	special:{64:1,62:1},
	characters:9,
	time:90
},
{//Level20
	data:[
	[0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ],
	[0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ],
	[1 ,1 ,1 ,1 ,1 ,2 ,2 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ],
	[0 ,0 ,1 ,0 ,0 ,0 ,1 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ],
	[0 ,0 ,1 ,0 ,2 ,1 ,1 ,0 ,0 ,0 ,1 ,0 ,0 ,2 ,1 ],
	[0 ,1 ,2 ,0 ,1 ,0 ,2 ,0 ,0 ,0 ,1 ,0 ,0 ,1 ,0 ],
	[0 ,0 ,1 ,2 ,1 ,0 ,1 ,0 ,0 ,0 ,1 ,1 ,2 ,1 ,0 ],
	[0 ,0 ,0 ,0 ,1 ,0 ,1 ,0 ,0 ,0 ,1 ,1 ,1 ,1 ,0 ],
	[99,99,99,99,99,99,99,99,99,99,99,99,99,99,99]
	],
	start:[0,1],
	exit:[14,3],
	exitLabel:[11.5,4],
	directional:{},
	build:{59:1},
	special:{64:3,62:1},
	characters:9,
	time:90
},
{//Level21
	data:[
	[0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,1 ,0 ,0 ,0 ,0 ,0 ,0 ],
	[0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,2 ,0 ,0 ,0 ,0 ,0 ,0 ],
	[0 ,0 ,0 ,0 ,0 ,1 ,1 ,1 ,1 ,0 ,0 ,0 ,0 ,0 ,0 ],
	[0 ,0 ,0 ,0 ,0 ,2 ,2 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ],
	[1 ,1 ,1 ,2 ,1 ,1 ,0 ,2 ,0 ,2 ,0 ,0 ,0 ,0 ,0 ],
	[0 ,0 ,0 ,0 ,0 ,2 ,0 ,0 ,1 ,2 ,0 ,0 ,0 ,0 ,0 ],
	[0 ,0 ,0 ,0 ,0 ,1 ,0 ,1 ,1 ,1 ,0 ,0 ,0 ,1 ,1 ],
	[0 ,0 ,0 ,0 ,0 ,2 ,0 ,0 ,3 ,3 ,0 ,1 ,0 ,1 ,0 ],
	[99,99,99,99,99,99,99,99,99,99,99,99,99,99,99]
	],
	start:[0,3],
	exit:[14,5],
	exitLabel:[11.5,6],
	directional:{},
	build:{59:2},
	special:{64:2,63:2},	
	characters:12,
	time:120
},
{//Level22
	data:[
	[0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ],
	[0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ],
	[0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ],
	[0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ],
	[0 ,0 ,0 ,0 ,0 ,0 ,2 ,0 ,2 ,0 ,0 ,0 ,0 ,0 ,0 ],
	[1 ,1 ,1 ,2 ,0 ,1 ,2 ,1 ,2 ,0 ,1 ,0 ,0 ,0 ,0 ],
	[0 ,0 ,0 ,0 ,1 ,0 ,0 ,0 ,0 ,0 ,1 ,1 ,0 ,0 ,0 ],
	[0 ,0 ,0 ,0 ,2 ,1 ,0 ,0 ,2 ,1 ,1 ,1 ,1 ,0 ,0 ],
	[99,99,99,99,99,99,99,99,99,99,99,99,99,99,99]
	],
	start:[0,4],
	exit:[14,7],
	exitLabel:[11.5,8],
	directional:{},
	build:{59:1,66:1},
	special:{64:1},	
	characters:8,
	time:100
},
{//Level23
	data:[
	[0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ],
	[0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ],
	[1 ,1 ,1 ,2 ,1 ,1 ,2 ,1 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ],
	[1 ,0 ,0 ,0 ,0 ,0 ,1 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ],
	[1 ,0 ,0 ,2 ,0 ,2 ,2 ,0 ,0 ,1 ,2 ,1 ,1 ,1 ,1 ],
	[1 ,2 ,0 ,1 ,0 ,1 ,0 ,0 ,0 ,2 ,0 ,0 ,0 ,0 ,0 ],
	[0 ,1 ,0 ,0 ,2 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ],
	[0 ,1 ,2 ,0 ,0 ,0 ,0 ,2 ,2 ,0 ,0 ,0 ,0 ,0 ,0 ],
	[99,99,99,99,99,99,99,99,99,99,99,99,99,99,99]
	],
	start:[0,1],
	exit:[14,3],
	exitLabel:[11.5,4],
	directional:{61:1},
	build:{59:5},
	special:{64:1},	
	characters:10,
	time:110
},
{//Level24
	data:[
	[0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ],
	[0 ,0 ,0 ,0 ,1 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ],
	[0 ,0 ,0 ,1 ,2 ,0 ,0 ,0 ,0 ,1 ,0 ,0 ,0 ,0 ,0 ],
	[0 ,0 ,0 ,2 ,0 ,0 ,0 ,1 ,0 ,2 ,0 ,1 ,2 ,1 ,1 ],
	[1 ,1 ,1 ,2 ,0 ,0 ,2 ,1 ,0 ,0 ,0 ,1 ,0 ,0 ,0 ],
	[0 ,1 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,2 ,2 ,0 ,0 ,0 ,0 ],
	[0 ,1 ,1 ,2 ,1 ,2 ,1 ,0 ,1 ,0 ,0 ,0 ,0 ,0 ,0 ],
	[0 ,2 ,1 ,0 ,0 ,0 ,0 ,0 ,2 ,0 ,0 ,0 ,0 ,0 ,0 ],
	[99,99,99,99,99,99,99,99,99,99,99,99,99,99,99]
	],
	start:[0,3],
	exit:[14,2],
	exitLabel:[11.5,3],
	directional:{},
	build:{59:6},
	special:{64:1},	
	characters:12,
	time:110
},
{//Level25
	data:[
	[0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ],
	[0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ],
	[0 ,0 ,0 ,0 ,0 ,0 ,0 ,2 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ],
	[0 ,0 ,0 ,0 ,0 ,2 ,0 ,2 ,0 ,2 ,0 ,0 ,2 ,0 ,0 ],
	[0 ,0 ,0 ,2 ,0 ,2 ,0 ,0 ,0 ,2 ,0 ,2 ,0 ,2 ,0 ],
	[0 ,0 ,0 ,2 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,1 ,0 ],
	[1 ,2 ,1 ,2 ,1 ,2 ,1 ,1 ,2 ,0 ,2 ,0 ,0 ,2 ,0 ],
	[0 ,2 ,0 ,0 ,2 ,0 ,0 ,0 ,2 ,0 ,0 ,0 ,1 ,1 ,1 ],
	[99,99,99,99,99,99,99,99,99,99,99,99,99,99,99]
	],
	start:[0,5],
	exit:[14,3],
	exitLabel:[12,4],
	directional:{},
	build:{59:10},
	special:{},	
	characters:14,
	time:120
}


];

/*
{//Level16
	data:[
	[0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ],
	[0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ],
	[0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ],
	[0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ],
	[0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ],
	[0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ],
	[0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ],
	[0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ],
	[99,99,99,99,99,99,99,99,99,99,99,99,99,99,99]
	],
	start:[0,1],
	exit:[14,2],
	exitLabel:[11.5,1.5],
	directional:{},
	build:{},
	special:{},	
	characters:12,
	time:120
}
*/

Config.clickBoxPos={
	directional:[[132],[90,175],[65,132,199]],//x positions of clickboxes[singlebox,two boxes, three boxes]
	build:[[332],[290,375],[267,332,397]],
	special:[[542],[500,585],[475,542,609]],
}

Config.tutorials={
	"1":[
		{text:"1.点击这个箱子并拖动。",x:150,y:300,arrowX:280,arrowY:460},
		{text:"2.将箱子放在这个位置。",x:350,y:250,arrowX:270,arrowY:360}
	],
	"2":[
		{text:"将弹跳箱子放置到这里。",x:250,y:150,arrowX:140,arrowY:220},
		{text:"长按加快游戏速度",textiOS:"变换游戏速度",textAnd:"变换游戏速度", x:450,y:110,arrowX:590,arrowY:60}
	],
	"3":[
		{text:"将梯子箱子放置到这里。",x:350,y:150,arrowX:320,arrowY:320}
	],
	"4":[
		{text:"将桥梁箱子放置到这里。",x:360,y:180,arrowX:330,arrowY:270}
	],
	"6":[
		{text:"将斧头箱子放置到这里。",x:350,y:210,arrowX:320,arrowY:370}
	]
}