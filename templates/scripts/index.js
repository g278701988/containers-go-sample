
function initOnload() {
	createTable();
	setCellOnClick();
}
function createTable() {
	let Hiragana =
		[

			["あ", "い", "う", "え", "お"], ["か", "き", "く", "け", "こ"], ["さ", "し", "す", "せ", "そ"], //1
			["た", "ち", "つ", "て", "と"], ["な", "に", "ぬ", "ね", "の"], ["は", "ひ", "ふ", "へ", "ほ"],//2
			["ま", "み", "む", "め", "も"], ["や", "", "ゆ", "", "よ"], ["ら", "り", "る", "れ", "ろ"],//3
			["わ", "", "", "", "を"], ["", "", "", "", "ん"], ["が", "ぎ", "ぐ", "げ", "ご"],//4
			["ざ", "じ", "ず", "ぜ", "ぞ"], ["だ", "ぢ", "づ", "で", "ど"], ["ば", "び", "ぶ", "べ", "ぼ"],//5
			["ぱ", "ぴ", "ぷ", "ぺ", "ぽ"], ["きゃ", "", "きゅ", "", "きょ"], ["しゃ", "", "しゅ", "", "しょ"], //6
			["ちゃ", "", "ちゅ", "", "ちょ"], ["にゃ", "", "にゅ", "", "にょ"], ["ひゃ", "", "ひゅ", "", "ひょ"], //7
			["みゃ", "", "みゅ", "", "みょ"], ["りゃ", "", "りゅ", "", "りょ"], ["ぎゃ", "", "ぎゅ", "", "ぎょ"], //8
			["じゃ", "", "じゅ", "", "じょ"], ["びゃ", "", "びゅ", "", "びょ"], ["ぴゃ", "", "ぴゅ", "", "ぴょ"]//9
		];
	let Katakana =
		[

			["ア", "イ", "ウ", "エ", "オ"], ["カ", "キ", "ク", "ケ", "コ"], ["サ", "シ", "ス", "セ", "ソ"],//1
			["タ", "チ", "ツ", "テ", "ト"], ["ナ", "ニ", "ヌ", "ネ", "ノ"], ["ハ", "ヒ", "フ", "ヘ", "ホ"], //2
			["マ", "ミ", "ム", "メ", "モ"], ["ヤ", "", "ユ", "", "ヨ"], ["ラ", "リ", "ル", "レ", "ロ"], //3
			["ワ", "", "", "", "ヲ"], ["", "", "", "", "ン"], ["ガ", "ギ", "グ", "ゲ", "ゴ"], //4
			["ザ", "ジ", "ズ", "ゼ", "ゾ"], ["ダ", "ヂ", "ヅ", "デ", "ド"], ["バ", "ビ", "ブ", "ベ", "ボ"],//5 
			["パ", "ピ", "プ", "ペ", "ポ"], ["キャ", "", "キュ", "", "キョ"], ["シャ", "", "シュ", "", "ショ"], //6
			["チャ", "", "チュ", "", "チョ"], ["ニャ", "", "ニュ", "", "ニョ"], ["ヒャ", "", "ヒュ", "", "ヒョ"], //7
			["ミャ", "", "ミュ", "", "ミョ"], ["リャ", "", "リュ", "", "リョ"], ["ギャ", "", "ギュ", "", "ギョ"], //8
			["ジャ", "", "ジュ", "", "ジョ"], ["ビャ", "", "ビュ", "", "ビョ"], ["ピャ", "", "ピュ", "", "ピョ"]//9

		];
	let pronunciation =
		[
			["a", "i", "u", "e", "o"], ["ka", "ki", "ku", "ke", "ko"], ["sa", "shi", "su", "se", "so"],//1
			["ta", "chi", "tsu", "te", "to"], ["na", "ni", "nu", "ne", "no"], ["ha", "hi", "fu", "he", "ho"],//2
			["ma", "mi", "mu", "me", "mo"], ["ya", "", "yu", "", "yo"], ["ra", "ri", "ru", "re", "ro"], //3
			["wa", "", "", "", "o"], ["", "", "", "", "n"], ["ga", "gi", "gu", "ge", "go"], //4
			["za", "ji", "zu", "ze", "zo"], ["da", "ji", "zu", "de", "do"], ["ba", "bi", "bu", "be", "bo"],//5
			["pa", "pi", "pu", "pe", "po"], ["kya", "", "kyu", "", "kyo"], ["sha", "", "shu", "", "sho"], //6
			["cha", "", "chu", "", "cho"], ["nya", "", "nyu", "", "nyo"], ["hya", "", "hyu", "", "hyo"], //7
			["mya", "", "myu", "", "myo"], ["rya", "", "ryu", "", "ryo"], ["gya", "", "gyu", "", "gyo"], //8
			["ja", "", "ju", "", "jo"], ["bya", "", "byu", "", "byo"], ["pya", "", "pyu", "", "pyo"]//9

		];
		var n = document.createElement("table");
		n.id = "tableID";
		var tbody = document.createElement("tbody");
		
		for(var  i = 0; i < pronunciation.length; i++){
			//tr
			var tr = document.createElement("tr");
			for(var j = 0 ; j < pronunciation[i].length;j++){
				//td
				div = document.createElement("div");
				td = document.createElement("td");
				
				// console.log("before: "+div.innerHTML);
				if(Hiragana[i][j]+Katakana[i][j]+pronunciation[i][j]===""){
					div.innerHTML = "";
					td.className ="empty";
				}else{
					div.innerHTML=" <span class='Hiragana'>"+Hiragana[i][j]+"</span> "+Katakana[i][j]+"<br>"+pronunciation[i][j];
					td.appendChild(div);
				}
				// console.log("after: "+div.innerHTML);
				
				
				
				tr.appendChild(td);
				// console.log("["+i+"]"+"["+j+"] "+Hiragana[i][j]+"-"+Katakana[i][j]+"-"+pronunciation[i][j]);
				// console.log("\n");
			}
			tbody.appendChild(tr);
		}
		n.appendChild(tbody);
		document.body.appendChild(n);
		for(var i = 0 ; i < 5;i++){
			div = document.createElement("div");
			div.innerHTML="<br>";
			document.body.append(div);
		}
		
}

function setCellOnClick() {
	var table = document.getElementById("tableID");
	if (table != null) {
		for (var i = 0; i < table.rows.length; i++) {
			for (var j = 0; j < table.rows[i].cells.length; j++) {
				if (table.rows[i].cells[j].innerHTML.length > 0) {
					table.rows[i].cells[j].onclick = function () {
						tableText(this);
					};
					table.rows[i].cells[j].onmouseover = function () {
						this.style.backgroundColor = '#029220';
					};
					table.rows[i].cells[j].onmouseout = function () {
						this.style.backgroundColor = '#ffffff';
					};
				}

			}


		}
	}
}


function tableText(tableCell) {
	if (tableCell.innerHTML.length > 0) {
		let text = tableCell.innerHTML;
		let brTag = "<br>";
		let divEndTag = "</div>"
		let begIndex = text.indexOf(brTag);
		let endIndex = text.indexOf(divEndTag);
		if (begIndex != -1 && endIndex != -1) {
			let e = text.substring(begIndex + brTag.length, endIndex);
			var n = document.getElementById("audio-" + e) || document.createElement("audio");
			n.id = "audio-" + e;
			document.body.appendChild(n);
			n.src = "tts/".concat(e, ".mp3");
			n.loop = !1;
			n.play();
		} else {
			console.log(text);
		}

	}

}



