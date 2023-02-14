//created by Danis 2023/2/14

var cards = [
    {name: "电影票", weight: 504, image: "images/image1.jpg", rarity: "20电池", value:20},
    {name: "棉花糖", weight: 3949, image: "images/image2.jpg", rarity: "90电池", value:90},
    {name: "爱心抱枕", weight: 5050, image: "images/image3.jpg", rarity: "160电池", value:160},
	{name: "绮彩权杖", weight: 450, image: "images/image4.jpg", rarity: "400电池", value:400},
	{name: "时空之站", weight: 30, image: "images/image5.jpg", rarity: "1000电池", value:1000},
	{name: "欢喜萌兔", weight: 13, image: "images/image6.jpg", rarity: "2000电池", value:2000},
	{name: "浪漫城堡", weight: 4, image: "images/image7.jpg", rarity: "22330电池", value:22330}
];

var cardsb = [
    {name: "璀璨钻石", weight: 346, image: "images/image8.jpg", rarity: "200电池", value:200},
    {name: "旅行日记", weight: 3600, image: "images/image9.jpg", rarity: "300电池", value:300},
    {name: "疯狂心动", weight: 5459, image: "images/image10.jpg", rarity: "520电池", value:520},
	{name: "时空之站", weight: 500, image: "images/image11.jpg", rarity: "1000电池", value:1000},
	{name: "欢喜萌兔", weight: 45, image: "images/image12.jpg", rarity: "2000电池", value:2000},
	{name: "喜兔迎新", weight: 40, image: "images/image13.jpg", rarity: "5000电池", value:5000},
	{name: "幻影飞船", weight: 10, image: "images/image14.jpg", rarity: "30000电池", value:30000}
];

var cardsc = [
    {name: "璀璨钻石", weight: 10, image: "images/image15.jpg", rarity: "200电池", value:200},
    {name: "绮彩权杖", weight: 1862, image: "images/image16.jpg", rarity: "400电池", value:400},
    {name: "许愿精灵", weight: 3800, image: "images/image17.jpg", rarity: "888电池", value:888},
	{name: "马戏之王", weight: 4008, image: "images/image18.jpg", rarity: "1060电池", value:1060},
	{name: "欢喜萌兔", weight: 200, image: "images/image19.jpg", rarity: "2000电池", value:2000},
	{name: "喜兔迎新", weight: 92, image: "images/image20.jpg", rarity: "5000电池", value:5000},
	{name: "奇幻之城", weight: 28, image: "images/image21.jpg", rarity: "32000电池", value:32000}
];

var cardsx = [
    {name: "相思豆", weight: 646, image: "images/image22.jpg", rarity: "50电池", value:50},
    {name: "情意锁", weight: 3500, image: "images/image23.jpg", rarity: "190电池", value:190},
    {name: "告白花海", weight: 5500, image: "images/image24.jpg", rarity: "260电池", value:260},
	{name: "心心相印", weight: 300, image: "images/image25.jpg", rarity: "660电池", value:660},
	{name: "缘定三生", weight: 40, image: "images/image26.jpg", rarity: "1880电池", value:1880},
	{name: "桃之夭夭", weight: 10, image: "images/image27.jpg", rarity: "5200电池", value:5200},
	{name: "深海爱恋", weight: 4, image: "images/image28.jpg", rarity: "12000电池", value:12000}
];

var totalWeight = 0;
for (var i = 0; i < cards.length; i++) {
    totalWeight += cards[i].weight;
}

var totalWeightb = 0;
for (var i = 0; i < cardsb.length; i++) {
    totalWeightb += cardsb[i].weight;
}

var totalWeightc = 0;
for (var i = 0; i < cardsc.length; i++) {
    totalWeightc += cardsc[i].weight;
}

var totalWeightx = 0;
for (var i = 0; i < cardsx.length; i++) {
    totalWeightx += cardsx[i].weight;
}

var gold = 0;
document.getElementById("gold").innerHTML = gold;

var cost = 0
document.getElementById("cost").innerHTML = cost;

var get = 0
document.getElementById("get").innerHTML = get;

var addrecharge = document.getElementById("addrecharge");
var add = addrecharge.value;

function drawCard() {
    if (gold >= 150) {
        gold -= 150;
        document.getElementById("gold").innerHTML = gold;
        var randomNum = Math.random() * totalWeight;
        var currentWeight = 0;
        var drawnCard;
        for (var i = 0; i < cards.length; i++) {
            currentWeight += cards[i].weight;
            if (randomNum < currentWeight) {
                drawnCard = cards[i];
                break;
            }
        }
        document.getElementById("card-name").innerHTML = drawnCard.name;
        document.getElementById("card-image").src = drawnCard.image;
        document.getElementById("card-rarity").innerHTML = drawnCard.rarity;
		get += cards[i].value;
		document.getElementById("get").innerHTML = get;
		addRecord(drawnCard.name, drawnCard.rarity, drawnCard.image);
    } else {
        alert("电池不足，请充值。");
    }
	//get += cards[i].value;
	//document.getElementById("get").innerHTML = get;
	//addRecord(drawnCard.name, drawnCard.rarity,drawnCard.image);
}

function drawCards() {
    if (gold >= 1500) {
        gold -= 0;
        document.getElementById("gold").innerHTML = gold;
        for (var i = 0; i < 10; i++) {
            drawCard();
        }
    } else {
        alert("电池不足，请充值。");
    }
}

function drawCardss() {
    if (gold >= 15000) {
        gold -= 0;
        document.getElementById("gold").innerHTML = gold;
        for (var i = 0; i < 100; i++) {
            drawCard();
        }
    } else {
        alert("电池不足，请充值。");
    }
}


function drawCardb() {
    if (gold >= 500) {
        gold -= 500;
        document.getElementById("gold").innerHTML = gold;
        var randomNum = Math.random() * totalWeightb;
        var currentWeight = 0;
        var drawnCardb;
        for (var i = 0; i < cardsb.length; i++) {
            currentWeight += cardsb[i].weight;
            if (randomNum < currentWeight) {
                drawnCardb = cardsb[i];
                break;
            }
        }
        document.getElementById("card-name").innerHTML = drawnCardb.name;
        document.getElementById("card-image").src = drawnCardb.image;
        document.getElementById("card-rarity").innerHTML = drawnCardb.rarity;
		get += cardsb[i].value;
		document.getElementById("get").innerHTML = get;
		addRecordb(drawnCardb.name, drawnCardb.rarity, drawnCardb.image);
    } else {
        alert("电池不足，请充值。");
    }
	//get += cardsb[i].value;
	//document.getElementById("get").innerHTML = get;
	//addRecordb(drawnCardb.name, drawnCardb.rarity, drawnCardb.image);
}

function drawCardbs() {
    if (gold >= 5000) {
        gold -= 0;
        document.getElementById("gold").innerHTML = gold;
        for (var i = 0; i < 10; i++) {
            drawCardb();
        }
    } else {
        alert("电池不足，请充值。");
    }
}

function drawCardbss() {
    if (gold >= 50000) {
        gold -= 0;
        document.getElementById("gold").innerHTML = gold;
        for (var i = 0; i < 100; i++) {
            drawCardb();
        }
    } else {
        alert("电池不足，请充值。");
    }
}

function drawCardc() {
    if (gold >= 1000) {
        gold -= 1000;
        document.getElementById("gold").innerHTML = gold;
        var randomNum = Math.random() * totalWeightc;
        var currentWeight = 0;
        var drawnCardc;
        for (var i = 0; i < cardsc.length; i++) {
            currentWeight += cardsc[i].weight;
            if (randomNum < currentWeight) {
                drawnCardc = cardsc[i];
                break;
            }
        }
        document.getElementById("card-name").innerHTML = drawnCardc.name;
        document.getElementById("card-image").src = drawnCardc.image;
        document.getElementById("card-rarity").innerHTML = drawnCardc.rarity;
		get += cardsc[i].value;
		document.getElementById("get").innerHTML = get;
		addRecordc(drawnCardc.name, drawnCardc.rarity, drawnCardc.image);
    } else {
        alert("电池不足，请充值。");
    }
	//get += cardsb[i].value;
	//document.getElementById("get").innerHTML = get;
	//addRecordb(drawnCardb.name, drawnCardb.rarity, drawnCardb.image);
}

function drawCardcs() {
    if (gold >= 10000) {
        gold -= 0;
        document.getElementById("gold").innerHTML = gold;
        for (var i = 0; i < 10; i++) {
            drawCardc();
        }
    } else {
        alert("电池不足，请充值。");
    }
}

function drawCardcss() {
    if (gold >= 100000) {
        gold -= 0;
        document.getElementById("gold").innerHTML = gold;
        for (var i = 0; i < 100; i++) {
            drawCardc();
        }
    } else {
        alert("电池不足，请充值。");
    }
}

function drawCardx() {
    if (gold >= 250) {
        gold -= 250;
        document.getElementById("gold").innerHTML = gold;
        var randomNum = Math.random() * totalWeightx;
        var currentWeight = 0;
        var drawnCardx;
        for (var i = 0; i < cardsx.length; i++) {
            currentWeight += cardsx[i].weight;
            if (randomNum < currentWeight) {
                drawnCardx = cardsx[i];
                break;
            }
        }
        document.getElementById("card-name").innerHTML = drawnCardx.name;
        document.getElementById("card-image").src = drawnCardx.image;
        document.getElementById("card-rarity").innerHTML = drawnCardx.rarity;
		get += cardsx[i].value;
		document.getElementById("get").innerHTML = get;
		addRecordx(drawnCardx.name, drawnCardx.rarity, drawnCardx.image);
    } else {
        alert("电池不足，请充值。");
    }
	//get += cardsb[i].value;
	//document.getElementById("get").innerHTML = get;
	//addRecordb(drawnCardb.name, drawnCardb.rarity, drawnCardb.image);
}

function drawCardxs() {
    if (gold >= 2500) {
        gold -= 0;
        document.getElementById("gold").innerHTML = gold;
        for (var i = 0; i < 10; i++) {
            drawCardx();
        }
    } else {
        alert("电池不足，请充值。");
    }
}

function drawCardxss() {
    if (gold >= 25000) {
        gold -= 0;
        document.getElementById("gold").innerHTML = gold;
        for (var i = 0; i < 100; i++) {
            drawCardx();
        }
    } else {
        alert("电池不足，请充值。");
    }
}

function addRecord(cardName, cardRarity, cardImage) {
    var recordDiv = document.getElementById("record");
    var newRecord = document.createElement("div");
    newRecord.style.display = "inline-block";
    
    var textNode = document.createTextNode("你开心动盲盒抽到了" + cardName + "，价值" + cardRarity);
    newRecord.appendChild(textNode);
    
    var imageNode = document.createElement("img");
    imageNode.src = cardImage;
    imageNode.style.width = "50px";
    imageNode.style.height = "50px";
    newRecord.appendChild(imageNode);
    
    recordDiv.appendChild(newRecord);
}

function addRecordb(cardName, cardRarity, cardImage) {
    var recordDiv = document.getElementById("record");
    var newRecord = document.createElement("div");
    newRecord.style.display = "inline-block";
    
    var textNode = document.createTextNode("你开闪耀盲盒抽到了" + cardName + "，价值" + cardRarity);
    newRecord.appendChild(textNode);
    
    var imageNode = document.createElement("img");
    imageNode.src = cardImage;
    imageNode.style.width = "50px";
    imageNode.style.height = "50px";
    newRecord.appendChild(imageNode);
    
    recordDiv.appendChild(newRecord);
}

function addRecordc(cardName, cardRarity, cardImage) {
    var recordDiv = document.getElementById("record");
    var newRecord = document.createElement("div");
    newRecord.style.display = "inline-block";
    
    var textNode = document.createTextNode("你开至尊盲盒抽到了" + cardName + "，价值" + cardRarity);
    newRecord.appendChild(textNode);
    
    var imageNode = document.createElement("img");
    imageNode.src = cardImage;
    imageNode.style.width = "50px";
    imageNode.style.height = "50px";
    newRecord.appendChild(imageNode);
    
    recordDiv.appendChild(newRecord);
}

function addRecordx(cardName, cardRarity, cardImage) {
    var recordDiv = document.getElementById("record");
    var newRecord = document.createElement("div");
    newRecord.style.display = "inline-block";
    
    var textNode = document.createTextNode("你开告白盲盒抽到了" + cardName + "，价值" + cardRarity);
    newRecord.appendChild(textNode);
    
    var imageNode = document.createElement("img");
    imageNode.src = cardImage;
    imageNode.style.width = "50px";
    imageNode.style.height = "50px";
    newRecord.appendChild(imageNode);
    
    recordDiv.appendChild(newRecord);
}

//function addRecordb(cardName, cardRarity, cardImage) {
    //var recordDiv = document.getElementById("record");
    //var newRecord = document.createElement("p");
    //newRecord.innerHTML = "你打开闪耀盲盒抽到了 " + cardName + "，价值为 " + cardRarity + "<br>";
    //var newImage = document.createElement("img");
    //newImage.src = cardImage;
	//newImage.width = "50";
    //newRecord.appendChild(newImage);
    //recordDiv.appendChild(newRecord);
//}


function recharge() {
	var addrecharge = document.getElementById("addrecharge");
	var add = addrecharge.value;
	var addd = parseFloat(addrecharge.value) * 10
	if (addd > 0) {
    gold = gold + addd;
	cost = cost + addd;
  } else {
    console.log("请输入正数！");
  }
    //gold = gold + addd;
	//cost = cost + addd;
    document.getElementById("gold").innerHTML = gold;
	document.getElementById("cost").innerHTML = cost;
}

document.getElementById("drawCard").addEventListener("click", drawCard);
document.getElementById("drawCards").addEventListener("click", drawCards);
document.getElementById("drawCardss").addEventListener("click", drawCardss);
document.getElementById("drawCardb").addEventListener("click", drawCardb);
document.getElementById("drawCardbs").addEventListener("click", drawCardbs);
document.getElementById("drawCardbss").addEventListener("click", drawCardbss);
document.getElementById("drawCardc").addEventListener("click", drawCardc);
document.getElementById("drawCardcs").addEventListener("click", drawCardcs);
document.getElementById("drawCardcss").addEventListener("click", drawCardcss);
document.getElementById("drawCardx").addEventListener("click", drawCardx);
document.getElementById("drawCardxs").addEventListener("click", drawCardxs);
document.getElementById("drawCardxss").addEventListener("click", drawCardxss);
document.getElementById("recharge").addEventListener("click", recharge);
