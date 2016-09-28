$(document).ready(function(){
// перемешивание
function shuffle(o){
    for(var j, x, k = o.length; k; j = Math.floor(Math.random() * k), x = o[--k], o[k] = o[j], o[j] = x);
    return o;
};
function randd(min, max) {
	var rnd = Math.floor(arguments.length > 1 ? (max - min + 1) * Math.random() + min : (min + 1) * Math.random());

	return rnd;
};
function rand_sign()
{
	if(randd(0,99)>50)
		return 1;
	else
		return -1;
}
function rand_line(num){
	if(num === undefined)
		num = 89;
	var arr=[];
	for(var t=0; t<num; t++)
	{
		arr[t]=+t + +10;
	}
	return shuffle(arr);
}
// Константы //


var IMF_RF="<i class='fa  fa-refresh'></i>";
var IMF_QW="<i class='fa fa-question-circle'></i>";
//////////////
var bg_blur = 1, milepost_visible = 1;
if(localStorage.getItem("flag_blur")!= null)
	bg_blur = localStorage.getItem("flag_blur");

	function make_generator(){

		generator="<a href='http://youknowwho.ru/dnd' class='bt'><i class='fa fa-home'></i></a><!--button class='bt' id='go'>Сгенерировать улицу</button--><button class='bt' id='town_name'>Сгенерировать название</button><!--button id='rnd' class='bt'>Перегенерировать</button--><a class='bt' href='http://www.youknowwho.ru/message/?theme=dndstreet' target='_blank'>Написать отзыв или предложение</a>";
		$("#panel").html(generator);


	}
	function add_info_spoiler(){
		$(".description").after("<a href='#' class='info_toggle'>Скрыть описание</a>");
	}

	function d(max){
		return randd(1, max);
	}

	///////////////////

	function make_street() {
		var shops = "Оружейная, Мясная лавка, Лавка зелий, Кафе, Цветочная лавка, Портной, Хиромант, Молочный магазин, Сгорел!, Сапожник, Маг Иллюзионист, Лавка диковинок, Тату и Пирсинг, Мебельщик, Карты и наборы путешественников, Луки и стрелы, Винзавод, Строительные материалы, Свечи и Ароматы, Часовщик, Туристическое снаряжение, Бакалейная лавка, Женская обувь и Платья, Кондитерская, Пивоварня, Лавка алхимика, Лавка Травника, Лавка Пекаря, Книжная лавка, Храм, Оружейная лавка, Лавка старьевщика, Цирюльник, Гончарная мастерская, Мастерская скорняка, Мастерская каменщика, Лавка тканей, Лавка шляпника, Рыбная лавка, Мастерская художника, Мастерская скульптора, Мастерская краснодеревщика, Лавка зеленщика, Ломбард, Лавка красильщика, Мастерская переписчика, Столярная мастерская, Плотницкая мастерская, Мастерская слесаря, Лавка жестянщика";
		var houses = "Частный дом";
		var taverns = "Таверна";
		var objects = "Фонтан, Статуя, Киоск, Башня, Арка, Нищий, Сквер, Лестница, Колодец, Патруль стражников, Часовня, Площадь, Тупик";
		var buildings = "Игорный дом, Банк, Склад, Клуб, Гильхолл, Учебное заведение, Почта, Базар, Арена, Бордель, Библиотека, Архив, Муниципалитет, Бродячие артисты, Баня, Больница, Тюрьма, Приют, Антикаварная Лавка, Адвокатская контора, Охранное агентство, Ипподром";

		shops = shops.split(",");
		shops = shuffle(shops);
		houses = houses.split(",");
		houses = shuffle(houses);
		taverns = taverns.split(",");
		taverns = shuffle(taverns);
		objects = objects.split(",");
		objects = shuffle(objects);
		buildings = buildings.split(",");
		buildings = shuffle(buildings);

		var d100;
		var ret = "";
		var tmp='';
		for(var i=1; i<20; i++)
			{
			d100=randd(1,100);
			console.log("d100: "+d100);

			if(d100<3)
				{
					// buildings
					if(buildings.length>i)
						tmp=buildings[i]+"<br>";
					else
						{
						buildings = shuffle(buildings);
						tmp=buildings[0]+"<br>";
						}
				}
			else if(d100<10)
				{
					// objects
					if(objects.length>i)
						tmp=objects[i]+"<br>";
					else
						{
						objects = shuffle(objects);
						tmp=objects[0]+"<br>";
						}
				}
			else if(d100<50)
				{
					// houses
					console.log(houses.length);
					if(houses.length>i)
						tmp=houses[i]+"<br>";
					else
						{
						houses = shuffle(houses);
						tmp=houses[0]+"<br>";
						}
				}
			else if(d100<54)
				{
					// taverns
					if(taverns.length>i)
						tmp=taverns[i]+"<br>";
					else
						{
						taverns = shuffle(taverns);
						tmp=taverns[0]+"<br>";
						}
				}
			else
				{
					// shops
					tmp="Магазин: ";
					if(shops.length>i)
						tmp=shops[i]+"<br>";
					else
						{
						shops = shuffle(shops);
						tmp=shops[0]+"<br>";
						}
				}
				ret+=tmp.trim();
			}
		return ret;
	}
	function make_town() {
		var name_line_1_he = "Ясный, Светлый, Дальний, Старый, Большой, Малый, Новый, Ближний, Темный, Стылый, Быков, Кривой, Крутой, Лысый, Верхний, Веселый, Степной, Лесной, Сухой, Лебяжий, Песчаный";
		var name_line_1_she = "Ясная, Светлая, Дальняя, Старая, Большая, Малая, Новая, Ближняя, Темная, Стылая, Быкова, Кривая, Крутая, Лысая, Верхняя, Веселая, Степная, Лесная, Сухая, Лебяжья, Песчаная";
		var name_line_1_it = "Ясное, Светлое, Дальнее, Старое, Большое, Малое, Новое, Ближнее, Темное, Стылое, Быково, Кривое, Крутое, Лысое, Верхнее, Хреновое, Веселое, Степное, Лесное, Сухое, Лебяжье, Полное, Песчаное, Забавное, Круглое";
		var name_line_1_they = "Козьи, Ясные, Светлые, Дальние, Старые, Большие, Малые, Новые, Ближние, Темные, Стылые, Быковы, Кривые, Кривые, Крутые, Лысые, Верхние, Синие, Веселые, Степные, Лесные, Сухие, Песчаные, Пустые";
		var name_line_2_he = "Яр, Бор, Лес, Овраг, Овражек, Ручей, Рог, Гусь, Брод, Камень, Холм, Выселок, Хуторок, Тыкмык, Сук, Кум, Калач, Хомутец, Лоб, Котёл, Жбан, Лог, Рудник, Чумыш, Курган, Ракит, Исток, Склон, Вал, Берег, Мыс, Ковш";
		var name_line_2_she = "Холмовка, Бобровка, Падь, Куща, Балка, Горка, Скала, Грязь, Куриловка, Башня, Дубовка, Муходёровка, Бородёнка, Волчатка, Рыбушка, Вышенка, Дубрава, Капустинка, Калуженка, Гать, Речка, Долинка, Хорошавка, Калиновка, Нечаевка, Рожковка, Утянка, Глушинка, Пустынь, Кедровка, Шумиха, Травка, Отмель, Бурлинка";
		var name_line_2_she_2 = "Холм, Бобр, Кущ, Гряз, Курил, Дуб, Муходёр, Волч, Рыб, Выш, Дубр, Капуст, Калуж, Гат, Реч, Дол, Хорош, Калин, Рож, Глуш, Пуст, Кедр, Шум, Трав, Отмел, Бурл, Греч, Бык, Бур, Бук, Верст, Перст, Чум, Крап, Хам, Руд, Кур, Истр, Ковш, Кус, Жбан, Яр, Бор, Овраж, Руч, Брод, Холм, Хутор, Калач, Хомут, Лоб, Руд, Гнезд, Нерест, Дупл, Камыш, Омут, Цап, Хряп, Жук, Брас, Бук, Штыр, Бег, Бед, Бир, Бес, Бод, Бок, Вал, Вед, Вест, Воз, Вяз, Вык, Гад, Год, Дух, Зоб, Зод, Зад, Зуб, Лаг, Мех, Мен, Мет, Меш, Мор, Мир, Мер, Мыс, Нов, Нос, Пер, Пик, Рад, Раз, Ров, Рог, Род, Рок, Сор, Суд, Тер, Ток, Хот";
		var name_line_2_she_end = "авка, инка, енька, янка, овка, иха, ица, ушка, ница, ишка";
		var name_line_2_it = "Гадюкино, Кукуево, Кудыкино, Овнище, Дно, Камышино, Займище, Суково, Такое, Подберезье, Заречье, Борово, Мохово, Заборово, Осколково, Орехово, Ложкино,  Брагино, Чесноково, Комарово, Луговое, Совино, Соколово, Сошниково, Озеро, Стуково, Рыбное, Столбово, Ручьево, Место, Курочкино, Дупло, Гнездо";
		var name_line_2_they = "Попрыгушки, Овражки, Ручьи, Кочки, Столбы, Ели, Дубы, Омутищи, Камни, Выселки, Горшки, Рожки, Воробьи, Комары, Бодунищи, Бабенки, Огурцы, Пчелы, Змейки, Грязи, Винищи, Козляки, Мураши, Кобылки, Лепяги, Бельдяжки, Мурлы, Ломы, Чащи, Козлы, Лужи, Кобеляки, Кошки, Усищи, Раки, Полянки, Завалинки, Бочаги, Ключи, Рожки, Копытца, Сросты, Хутора, Балки, Конюхи, Горошки, Петухи, Мормышки, Мураши, Журавли, Окуньки, Бугры, Холмы, Омуты, Озерки, Камыши, Мысы, Табуны";

		var name_1_he = name_line_1_he.split(",");
		name_1_he = shuffle(name_1_he);
		var name_1_she = name_line_1_she.split(",");
		name_1_she = shuffle(name_1_she);
		var name_1_it = name_line_1_it.split(",");
		name_1_it = shuffle(name_1_it);
		var name_1_they = name_line_1_they.split(",");
		name_1_they = shuffle(name_1_they);

		var name_2_he = name_line_2_he.split(",");
		name_2_he = shuffle(name_2_he);
		var name_2_she = name_line_2_she.split(",");
		name_2_she = shuffle(name_2_she);
		var name_2_she_2 = name_line_2_she_2.split(",");
		name_2_she_2 = shuffle(name_2_she_2);
		var name_2_she_end = name_line_2_she_end.split(",");
		name_2_she_end = shuffle(name_2_she_end);
		var name_2_it = name_line_2_it.split(",");
		name_2_it = shuffle(name_2_it);
		var name_2_they = name_line_2_they.split(",");
		name_2_they = shuffle(name_2_they);


		var he_num = name_1_he.length * name_2_he.length;
		var she_num = name_1_she.length * name_2_she.length *2;
		var	she_num2=name_line_2_she_2.length * name_line_2_she_end.length;
		var it_num = name_1_it.length * name_2_it.length;
		var they_num = name_1_they.length * name_2_they.length;
		console.log("he_num: "+he_num);
		console.log("she_num: "+she_num);
		console.log("it_num: "+it_num);
		console.log("they_num: "+they_num);

		var dX=randd(4, he_num + she_num + it_num + they_num);
		var r1 = randd(0,4);
		var r2 = randd(0,4);
		var r3 = randd(0,6);
		console.log("dX: "+dX);
		console.log("r1: "+r1);
		console.log("r2: "+r2);
		console.log("r3: "+r3);
		var ret = "";
		if(dX <= he_num)
			{
			if(r1 != 0)
				{
				if(r2 != 0)
					{
					if(r3 !=0)
						ret = name_1_he[0]+" "+name_2_he[0];
					else
						ret = name_2_he[0]+" "+name_1_he[0];
					}
				else
					{
					ret = name_1_he[0];
					}
				}
			else
				{
				ret = name_2_he[0];
				}
			}
		else if(he_num + she_num)
			{
			var tmp_she = name_2_she[0];
			if(r1+r2 > 2)
				tmp_she = name_2_she_2[0].trim()+name_2_she_end[0].trim();

			if(r1 != 0)
				{
				if(r2 != 0)
					{
					if(r3 !=0)
						ret = name_1_she[0]+" "+tmp_she;
					else
						ret = tmp_she+" "+name_1_she[0];
					}
				else
					{
					ret = name_1_she[0];
					}
				}
			else
				{
					ret = tmp_she;
				}
			}
		else if(he_num + she_num + it_num)
			{
			if(r1 != 0)
				{
				if(r2 != 0)
					{
					if(r3 !=0)
						ret = name_1_it[0]+" "+name_2_it[0];
					else
						ret = name_2_it[0]+" "+name_1_it[0];
					}
				else
					{
					ret = name_1_it[0];
					}
				}
			else
				{
				ret = name_2_it[0];
				}
			}
		else
			{
			if(r1 != 0)
				{
				if(r2 != 0)
					{
					if(r3 !=0)
						ret = name_1_they[0]+" "+name_2_they[0];
					else
						ret = name_2_they[0]+" "+name_1_they[0];
					}
				else
					{
					ret = name_1_they[0];
					}
				}
			else
				{
				ret = name_2_they[0];
				}
			}



		return ret;
	}

	function make_texture(color) {
		var deg = randd(-9,9);
		var tx = randd(1,19);
		var ty = randd(1,19);
		var tz = randd(1,19);


		var cr = 200-10;
		var cg = 140-10;
		var cb = 70-10;

		//console.log("color1: "+color.clr1 + " color2: "+color.clr2);
		var m_color1 = "rgba("+(cr+tx-deg)+", "+(cg+ty-deg)+", "+(cb+tz-deg)+", .9)";
		var m_color2 = "rgba(234, 171, 104, 1)";
		var s_color1 = color.clr1;
		var s_color2 = color.clr2;

		m_color1 = rgba_average(m_color1, s_color1);
		m_color2 = rgba_average(m_color2, s_color2);
		/*
		var grad = "linear-gradient(135deg, transparent, rgba(234, 171, 104, 1) 80%),"+
		"linear-gradient(135deg, rgba(183, 126, 65, .9), transparent 2em),"+
		"repeating-linear-gradient("+(tz-1)+"deg, transparent, transparent 5px, rgba("+(cr+tx-deg)+", "+(cg+ty-deg)+", "+(cb+tz-deg)+", .9) 23px) 0 "+tx*deg+"px,"+
		"repeating-linear-gradient("+(tz-3)+"deg, transparent, transparent 7px, rgba("+(cr+ty-deg)+", "+(cg+tz-deg)+", "+(cb+tx-deg)+", .9) 19px) 0 "+ty*deg+"px,"+
		"repeating-linear-gradient("+(tz-2)+"deg, transparent, transparent 11px, rgba("+(cr+tz-deg)+", "+(cg+tx-deg)+", "+(cb+ty-deg)+", .9) 17px) 0 "+tz*deg+"px,"+
		"rgba("+(cr-tx-ty)+", "+(cg-tx-ty)+", "+(cb-tx-ty)+", 1)";
		*/

		//console.log("grad: "+grad);
		function set_grad(clr1, clr2)
			{
			function get_grad(color1, color2){
				var st_color1 = "rgba(183, 120, 53, 1)"; //"#b77835"; // dark
				var st_color2 = "rgba(234, 171, 104, 1)"; //"#eaab68"; // light
				var text_color = st_color1;
				//color1 = st_color1;
				//color2 = st_color2;
				var color_new = rgba_average(color1, st_color2, 3);

				text_color = color1 = rgba_average(color1, st_color1, 3);
				color2 = rgba_average(color1, st_color2, 7);
				var grad =
				"linear-gradient(to left, "+color_new+" 3px, transparent 15px),"+
				"linear-gradient(125deg, transparent 40%, "+color_new+" 85%),"+
				"linear-gradient(135deg, "+color1+", transparent 2em),"+
				"repeating-linear-gradient("+(tz-1)+"deg, transparent, transparent 5px, "+color2+" 23px) 0 "+tx*deg+"px,"+
				"repeating-linear-gradient("+(tz-3)+"deg, transparent, transparent 7px, "+color2+" 19px) 0 "+ty*deg+"px,"+
				"repeating-linear-gradient("+(tz-2)+"deg, transparent, transparent 11px, "+color2+" 17px) 0 "+tz*deg+"px,"+
				color1;

			$("#milepost_label").attr('style', "transform: rotate3d("+tx+", "+ty+", "+tz+", "+deg+"deg); background: "+grad + "; border-color: "+color_new+"; color: "+text_color+";");

			//$("#milepost_label").after("<div style='background: "+rgba_average(color1, st_color1, 9)+"'> _ </div> <div style='background: "+rgba_average(color1, st_color1, 5)+"'> _ </div> <div style='background: "+rgba_average(color1, st_color1, 5)+"'> _ </div> <div style='background: "+rgba_average(color1, st_color1, 1)+"'> _ </div> ");

			}
			var grad = get_grad(clr1, clr2);


		}
		set_grad(color.clr1, color.clr2);

		$("#milepost_pole").attr('style', "background: linear-gradient(135deg, "+rgba_change(color.clr2, 0, 0.3)+", "+rgba_change(color.clr1, 0, 0.3)+" 80%), linear-gradient(to top, transparent 70%, #b77435), repeating-linear-gradient("+(tx+83)+"deg, transparent, transparent 5px, rgba("+(cr+tz-deg)+", "+(cg+tx-deg)+", "+(cb+ty-deg)+", .3) 17px) "+tz*deg+"px 0, repeating-linear-gradient("+(tx+80)+"deg, transparent, transparent 3px, rgba("+(cr+tx-deg)+", "+(cg+ty-deg)+", "+(cb+tz-deg)+", .6) 19px) "+ty*deg+"px 0, rgba(234, 171, 104, 1)");
		//bbc = rgba_change(color.clr1, 0, 0.3);
		//$("#milepost #milepost_label:before").css('top', 0);

		var b_sky = randd(1,4);
		var b_land = randd(1,4);
		}

	function point(x, y) {
		if(x != undefined)
			this.x=x;
		else
			this.x=0;
		if(y != undefined)
			this.y=y;
		else
			this.y=0;
	}
	point.prototype.set = function(x,y) {
		this.x=parseInt(x);
		this.y=parseInt(y);
	}

	function rgba_change(color, num, alpha, c_r, c_g, c_b) {
		if(alpha<0)
			alpha*=-1;
		if(alpha === undefined || alpha>1)
			alpha = 1;
		if(c_r === undefined)
			c_r=0;
		if(c_g === undefined)
			c_g=0;
		if(c_b === undefined)
			c_b=0;

		var cl1 = color.match(/([0-9\s,\.]+)/i);
		var cl1_1=cl1[1].split(",");
		if(num!=0 || c_r!=0 || c_g!=0 || c_b!=0)
			{

			for(var p=0; p<3; p++)
				{
				cl1_1[p]=+cl1_1[p] + +num;

				if(p==0 && c_r!=0)
					cl1_1[p]=+cl1_1[p] + +c_r;
				if(p==1 && c_g!=0)
					cl1_1[p]=+cl1_1[p] + +c_g;
				if(p==2 && c_b!=0)
					cl1_1[p]=+cl1_1[p] + +c_b;

				if(cl1_1[p]<0)
					cl1_1[p]=0;
				if(cl1_1[p]>255)
					cl1_1[p]=255;
				}
			}
		cl1_1[3]=alpha;
		color = "rgba("+cl1_1.join(",")+")";
		return color;
	}

	function rgba_average(color1, color2, prc) {
		if(prc === undefined|| prc<1 || prc>9)
			prc = 5;
		var cl1 = color1.match(/([0-9\s,\.]+)/i);
		var cl1_1=cl1[1].split(",");
		var cl2 = color2.match(/([0-9\s,\.]+)/i);
		var cl2_1=cl2[1].split(",");

		var c_r, c_g, c_b, c_a, color;

		/*
		c_r = ~~((+cl1_1[0]+ +cl2_1[0])/2);
		c_g = ~~((+cl1_1[1]+ +cl2_1[1])/2);
		c_b = ~~((+cl1_1[2]+ +cl2_1[2])/2);
		*/

		c_r = ~~(cl1_1[0]/(10/prc) + cl2_1[0]/(10/(10-prc)));
		c_g = ~~(cl1_1[1]/(10/prc) + cl2_1[1]/(10/(10-prc)));
		c_b = ~~(cl1_1[2]/(10/prc) + cl2_1[2]/(10/(10-prc)));

		al1 = parseFloat(cl1_1[3]);
		al2 = parseFloat(cl2_1[3]);
		al_r = (+al1+ +al2 );
		c_a = parseFloat(al_r/2);

		color = "rgba("+c_r+", "+c_g+", "+c_b+", "+c_a+")";
		return color;
	}

	function make_back_2() {
		//$("#background").css({'background': 'url("img/f1.jpg") center center', 'background-size': 'cover', "opacity": ".8"});

		var b_width = $("#background").width();
		var b_height = $("#background").height();

		if($("#canva").length<1)
			$("#background").append("<canvas id='canva'></canvas>");
		$("#canva").attr('width', b_width).attr('height', b_height)
		if($("#c_work").length<1)
			$("#background").append("<canvas id='c_work'></canvas>");

		var canvas = document.getElementById('canva');
		var work_canva = document.getElementById('c_work');
		if (canvas.getContext){
			var ctx = canvas.getContext('2d');
			var c_work = work_canva.getContext('2d');

			var c_width = $("#canva").width();
			var c_height = $("#canva").height();
			var hor_height = c_height/10*6;
			var cw_width = $("#c_work").width();
			var cw_height = $("#c_work").height();

			var sun_pos_h, sun_pos_hor, f_day=1, f_desert=0, f_cave=0;

			// очищаем холст
			ctx.clearRect(0, 0, c_width, c_height);
			c_work.clearRect(0, 0, cw_width, cw_height);

			var r_line = rand_line();

			var colors_day = [
			'rgba(97, 202, 188, 1)',
			'rgba(242, 246, 221, 1)',
			'rgba(254, 224, 152, 1)',
			'rgba(253, 243, 194, 1)',
			'rgba(195, 177, 189, 1)',
			'rgba(253, 220, 211, 1)',
			'rgba(204, 129, 116, 1)',
			'rgba(236, 177, 111, 1)',
			'rgba(177, 50, 59, 1)',
			'rgba(255, 246, 102, 1)',
			'rgba(180, 207, 234, 1)',
			'rgba(214, 224, 225, 1)',
			'rgba(79, 54, 16, 1)',
			'rgba(133, 182, 182, 1)',
			'rgba(92, 28, 1, 1)',
			'rgba(131, 70, 93, 1)',
			'rgba(62, 39, 35, 1)',
			'rgba(255, 202, 40, 1)'
			];
			var colors_night = [
			'rgba(70, 57, 101, 1)',
			'rgba(142, 172, 236, 1)',
			'rgba(89, 87, 134, 1)',
			'rgba(157, 199, 215, 1)',
			'rgba(51, 0, 69, 1)',
			'rgba(250, 168, 118, 1)',
			'rgba(0, 26, 53, 1)',
			'rgba(205, 189, 251, 1)',
			'rgba(0, 29, 40, 1)',
			'rgba(158, 174, 135, 1)',
			'rgba(54, 88, 56, 1)',
			'rgba(146, 151, 151, 1)',
			'rgba(78, 59, 69, 1)',
			'rgba(254, 206, 146, 1)',
			'rgba(29, 18, 43, 1)',
			'rgba(27, 84, 96, 1)'
			];
			for(var q=0; q<colors_day.length; q+=2)
			{
				console.log("%c     " + "%c     ", "background: "+colors_day[q]+";", "background: "+colors_day[q+1]+";");
			}
			for(var q=0; q<colors_night.length; q+=2)
			{
				console.log("%c     " + "%c     ", "background: "+colors_night[q]+";", "background: "+colors_night[q+1]+";");
			}

			var i, main_color1, main_color2;
			if(randd(0,2)>0)
			{
				i = randd(0, ~~((colors_day.length-1)/2))*2;
				main_color1 = rgba_change(colors_day[i], randd(-15,15));
				main_color2 =  rgba_change(colors_day[+i + +1], randd(-15,15));
				f_day=1;
			}
			else
			{
				i = randd(0, ~~((colors_night.length-1)/2))*2;
				main_color1 = rgba_change(colors_night[i], randd(-15,15));
				main_color2 =  rgba_change(colors_night[+i + +1], randd(-15,15));
				f_day=0;
			}

			if(randd(-3,1)>0) f_desert=1;
			if(randd(-7,1)>0) f_cave=1;

			console.log("Выбрано: ["+i+"]"+"%c     " + "%c     ", "background: "+main_color1+";", "background: "+main_color2+";");

			function mountain_point(p1,p2, randp) {
				//console.log(Math.pow((p2.x - p1.x),2));
				//console.log(Math.pow((p2.y - p1.y),2));
				//console.log(Math.sqrt(Math.pow((p2.x - p1.x),2)+Math.pow((p2.y - p1.y),2))/2);
				//console.log(Math.pow((p2.x−p1.x), 2));
				//console.log(Math.pow((p2.y−p1.y), 2));
				var rr=randp;
				if (!(randp >0 && randp<100)) {
					rr = parseInt(Math.sqrt(Math.pow((p2.x - p1.x),2)+Math.pow((p2.y - p1.y),2))/10);
				}

					//var rr=parseInt(Math.sqrt(Math.pow((p2.x - p1.x),2)+Math.pow((p2.y - p1.y),2))/5);
					x_r=randd(-rr,rr);
					y_r=randd(-rr,rr);

					pn = new point();
					pn.x = parseInt((p1.x+p2.x)/2-x_r);
					pn.y = parseInt((p1.y+p2.y)/2-y_r);
					//console.log("pn.x: "+pn.x);
					//	console.log("pn.y: "+pn.y);
					return pn;
			}

			function make_line(arry, max_i) {
				if(max_i === undefined)
					max_i = 7;
				var arry2=[];
				var distance_k=1, distance=0;;
				ar_l=0;
				for(p=0; p < max_i; p++)
					{
					ar_l=0;
					for(var key in arry){
						ar_l++;
					}

					arry2.push(arry[0]);
					for(k=0; k < ar_l-1; k++)
					{
						//distance = Math.sqrt(Math.pow(arry[k+1].x - arry[k].x) + Math.pow(arry[k+1].y - arry[k].y]));

						arry2.push(mountain_point(arry[k], arry[(k+1)], 5));
						arry2.push(arry[k+1]);
					}
					arry=[];
					arry=arry2;
					arry2=[];
					}
				return arry;
				}

			function make_sky(cl1, cl2){
				function print_sky(color1, color2){
					if(color1 === undefined)
						color1 = 'rgba(97, 202, 188, 1)';
					if(color2 === undefined)
						color2 = 'rgba(242, 246, 221, 1)';

					var sky = ctx.createLinearGradient(0,0,0, c_height);
					sky.addColorStop(0, color1);
					sky.addColorStop(.5, color2);
					sky.addColorStop(1, color2);
					ctx.fillStyle = sky;
					ctx.fillRect(0,0,c_width,c_height);
				}
				//var i = randd(0, colors.length/2)
				print_sky(cl1, cl2);
			}

			function make_sun(){
				function print_sun(pos, radius, color)
				{
					if(radius === undefined)
						radius = parseInt(c_height/9);
					if(pos === undefined)
					{
						pos = new point();
						pos.set(~~c_width/2, ~~c_height/4);
					}
					if(color === undefined)
						color = 'rgba(255,255,250, 1)';

					function get_moon(cx, cy, r, d){
						var vert_d=0;
						var px, py1, py2;
						vert_d= Math.sqrt(r*r-(d/2)*(d/2));
						px = cx;
						py1 =  cy - vert_d;
						py1 = +cy+ +vert_d;
					}

					color_start = rgba_change(color, 0, .8, 30, 30, 30);
					color_end = rgba_change(color, 0, .8, 0, -10, -10);

					var r_x1=pos.x-radius;
					var r_y1=pos.y-radius;
					var r_w=radius*2;
					var r_h=radius*2;

					var sun = ctx.createRadialGradient(pos.x, pos.y, 0, pos.x, pos.y, radius);
					if(f_day==1)
					{

						sun.addColorStop(0, color_start);
						sun.addColorStop(.51, color_start);
						sun.addColorStop(.6, color_start);
						sun.addColorStop(.61, rgba_change(color_end, 0, .8));
						sun.addColorStop(.7, rgba_change(color_end, 0, .8));
						sun.addColorStop(.71, rgba_change(color_end, 0, .6));
						sun.addColorStop(.8, rgba_change(color_end, 0, .6));
						sun.addColorStop(.81, rgba_change(color_end, 0, .3));
						sun.addColorStop(.9, rgba_change(color_end, 0, .3));
						sun.addColorStop(.91, rgba_change(color_end, 0, .0));
						sun.addColorStop(1, rgba_change(color_end, 0, 0));
						ctx.fillStyle = sun;
						ctx.fillRect(r_x1, r_y1, r_w, r_h);
					}
					else
					{
						// get moon
						// cx, cy, r, d
						if(randd(0,2)==0)
							{
							var sign = rand_sign();
							radius = radius*2/3;
							var d= radius; //randd(radius*2/3, radius*3/2);
							vert_d= Math.sqrt(radius*radius-(d/2)*(d/2)); // длина вертикальная
							px = +pos.x + +d/2*sign; // x перечечения
							py1 =  pos.y - vert_d; // у1 пересечения
							py2 = +pos.y+ +vert_d; // у2 пересечения

							ctx.beginPath();
							ctx.moveTo(px, py1);
							ctx.bezierCurveTo(pos.x - radius*2*sign, pos.y-radius-d, pos.x - radius*2*sign, +pos.y + +radius + +d, px, py2);
							ctx.bezierCurveTo(pos.x - radius*sign, +pos.y + +d, pos.x - radius*sign, pos.y -d, px, py1);

							ctx.fillStyle =  rgba_change(color_start, 40, 1);
							ctx.fill();
							}
						else
							{
							sun.addColorStop(0, rgba_change(color_start, 40, 1));
							sun.addColorStop(.89, rgba_change(color_start, 40, 1));
							sun.addColorStop(.9, rgba_change(color_start, 40, 0));
							sun.addColorStop(1, rgba_change(color_start, 40, 0));
							ctx.fillStyle = sun;
							ctx.fillRect(r_x1, r_y1, r_w, r_h);
							}
						// /getmoon

						/*/
						sun.addColorStop(0, rgba_change(color_start, 40, 1));
						sun.addColorStop(.89, rgba_change(color_start, 40, 1));
						sun.addColorStop(.9, rgba_change(color_start, 40, 0));
						sun.addColorStop(1, rgba_change(color_start, 40, 0));
						/**/
					}
					//ctx.fillStyle = sun;

					/*
					if(f_day==1)
						{
						ctx.fillStyle = sun;
						ctx.fillRect(r_x1, r_y1, r_w, r_h);
						}
					else
						{

							//ctx.stroke();
						//ctx.fillRect(r_x1, r_y1, r_w, r_h);
						}
					*/
					/*/
					ctx.beginPath();
					ctx.rect(pos.x-5, pos.y-5, 10, 10);
					ctx.fillStyle = "red";
					ctx.fill();
					/**/

				}
				var sun_pos = new point();
				var k_h = c_height/(3*6);
				var k_red = randd(1, 6);
				var s_px = ~~(c_width/2-randd(-c_width/4, c_width/4));
				//var s_px = ~~(c_width/2);
				var s_py = k_h*k_red;
				sun_pos_hor = s_px;
				sun_pos.set(s_px, s_py);
				//console.log(k_h+" "+k_red);
				var radius = parseInt((c_height/8) * (k_h*k_red * 0.01));
				//var color = rgba_change('rgba(255,255,250, 1)', 0, 0, 0, -(k_red*7), -(k_red*9));
				var color = rgba_change(main_color2, 0, 0, (k_red), -(k_red*3), -(k_red*8));
				print_sun(sun_pos, radius, color);
				return rgba_change(color, 0, 1);
			}

		    /// do not insert in...
			function make_cloud(pos, height, width, color) {
				var count = randd(3,7);
				var radius, cloud;
				if(height === undefined)
					height = 100;
				if(width === undefined)
					width = 300;
				if(pos === undefined)
					{
					pos = new point();
					pos.set(0, 90);
					}
				if(color === undefined)
					color = "#fff";
				for(var q=0; q<count; q++)
				{
					tmp = width/count;


					if(q<count/2){
						pos.x+=~~(width/count)*((q+1)*0.2);
						radius=randd(tmp*1.2,tmp*1.7)*((q+1)*0.2);
					}
					else{
						pos.x+=~~(width/count)*((q)*0.2);
						radius=randd(tmp*1.2,tmp*1.7)*((count-q)*0.2);
					}
					if(radius>height)
						radius=height;

					if(radius<0)
						radius*=-1;

					cloud = ctx.createRadialGradient(+pos.x+ +radius, pos.y, 1, +pos.x+ +radius, pos.y, radius);
					cloud.addColorStop(0, color);
					cloud.addColorStop(.99, color);
					cloud.addColorStop(1, rgba_change(color, 0, 0));
					//cloud.addColorStop(1, 'rgba(0,0,0,.2)');
					ctx.fillStyle = cloud;

					var r_x1=pos.x;
					var r_y1=pos.y - height;
					var r_w=width;
					var r_h=height;
					ctx.fillRect(r_x1, r_y1, r_w, r_h);
				}
			}

			function draw_clouds() {
				var cloud_pos = new point();
				var w, h, x, y, n_max=randd(2,6), m_max=randd(4,29);
				for(var n = 0; n<n_max; n++)
				{
					for(var m=0; m<m_max; m++)
					{
					if(randd(0,3)==0){
						w = ~~(c_width/(4*(n+1)));
						h = ~~(c_height/20*(n_max-n));
						x = ~~(c_width/m_max*(m+1)-randd(-c_width/m_max, c_width/m_max));
						y = ~~(c_height/20*(n+1)*3-randd(-c_height/m_max, c_height/m_max));
						cloud_pos.set(x, y);
						make_cloud(cloud_pos, h, w, main_color2);
						}
					}
				}
			}

			function print_hills(color1, color2, width, height) {
				if(color1 === undefined)
					color1 = 'rgba(246, 178, 139, 1)';
				if(color2 === undefined)
					color2 = 'rgba(249, 184, 156, 1)';
				if(width === undefined)
					width = randd(c_width*.3, c_width*1.8);//r_line[0]*10;//randd(200, 600);
				if(width>c_width*2)
					width = width/2;
				if(width<600)
					width += 100;
				if(height === undefined)
					height = parseInt(Math.min(width/randd(10,15), randd(30, 80)));

				var start_p = new point(), end_p = new point();


				function make_hill_line(offset, range, color1, color2)
				{
					if(offset === undefined)
						offset = 0;
					if(range === undefined)
						range = 0;

					start_p.set(randd(-c_width/1.7,0), parseInt(c_height*5/7 + offset));

					function make_hill(start, height, width, range, color1, color2)
					{
						if(range === undefined)
							range = 0;
						width = width - (randd(-50, 50) - range*20);
						var mid = new point(), end = new point(), r_sid = 10;
						mid.set(parseInt(+start.x+ +width/2 + +randd(-r_sid,r_sid)), start.y-height + +randd(-r_sid,r_sid));
						end.set(parseInt(+start.x+ +width), start.y);
						ctx.moveTo(start.x, start.y);
						ctx.bezierCurveTo(+start.x + +parseInt(width/4), start.y, +start.x + +parseInt(width/4), mid.y, mid.x, mid.y);
						//ctx.stroke();

						// make cactus here
						var k_cactus = ((range+1)*0.2).toFixed(1);
						if(randd(0,1)>0 && f_desert==1)
							make_cactus(mid, ~~((15-randd(-2,2))*k_cactus), ~~((50-randd(-20,20))*k_cactus));
						//ctx.stroke();

						ctx.bezierCurveTo(+start.x + +parseInt(width/4*3), mid.y, +start.x + +parseInt(width/4*3), start.y, end.x, end.y);
						//ctx.stroke();

						if(end.x<c_width)
							make_hill(end, height, width, range, color1, color2);
						else{
							ctx.lineTo(c_width, c_height);
							ctx.lineTo(0, c_height);
							ctx.lineTo(start_p.x, start_p.y);

							var lingrad = ctx.createLinearGradient(0, +c_height/3 + +offset,0, +c_height + +offset);
							/*var color1=colors[i];
							var color2=colors[+i + +1];*/

							lingrad.addColorStop(0, color1);
							lingrad.addColorStop(1, color2);
							ctx.fillStyle = lingrad;

							ctx.fill();
						}
					}
					ctx.beginPath();
					make_hill(start_p, height, width, range, color1, color2);
				}

					//var i = randd(0, colors.length/2);
					//var color1=colors[i];
					//var color2=colors[+i + +1];
					var max_line = randd(3,7);
					var color_offset = -(~~(randd(60, 90)/max_line));
				for(var r=0; r<max_line; r++)
				{
					color1 = rgba_change(color1, color_offset);
					color2 = rgba_change(color2, color_offset);
					make_hill_line(r*20, r, color1, color2);
				}
			}

			function make_cave() {
				function make_cave_line(k) {
					// count columns amount
					cave_k=k*0.2;
					var height_k = 40*cave_k;
					var columt_center_distance = 90*cave_k;
					var columns_amount = ~~(c_width/columt_center_distance);
					columt_center_distance= ~~(c_width/columns_amount);
					var up_arr=[], down_arr=[];
					for(var i=0; i < (c_width-columt_center_distance*2)/columt_center_distance; i++) {
						up_arr[i] = new point((i+1)*columt_center_distance, c_height/2-randd(c_height/6*cave_k, c_height/2*cave_k));
						down_arr[i] = new point((i+1)*columt_center_distance, c_height/2-randd(c_height/6*cave_k, c_height/2*cave_k)*-1);
					}
					var main_arr = up_arr.reverse().concat(new point(columt_center_distance/2-randd(0,height_k), c_height/2-randd(-height_k,height_k)), down_arr, new point(c_width-columt_center_distance/2-randd(-height_k,0), c_height/2-randd(-height_k,height_k)), up_arr[0]);

					if(k>3)
						main_arr = make_line(main_arr, 2);

					ctx.strokeStyle="green";
					ctx.lineWidth=5;
					/**/
					ctx.beginPath();
					ctx.moveTo(0,0);
					ctx.lineTo(c_width, 0);
					ctx.lineTo(c_width, c_height);
					ctx.lineTo(0, c_height);
					ctx.lineTo(0, 0);
					ctx.closePath();


					ctx.moveTo(main_arr[0].x, main_arr[0].y);
					for (var i = 1; i < main_arr.length; i++) {
						ctx.lineTo(main_arr[i].x, main_arr[i].y);
						//ctx.stroke();
					}
					//ctx.lineTo(main_arr[0].x, main_arr[0].y);
					//ctx.stroke();

					var lingrad = ctx.createLinearGradient(0, 0, 0, c_height );

					lingrad.addColorStop(0, rgba_change(main_color1, -(~~(150*cave_k))));
					lingrad.addColorStop(1, rgba_change(main_color2, -(~~(150*cave_k))));
					ctx.fillStyle = lingrad;

					ctx.fill();
					/**/
				}
				var amount= randd(1,5);
				for(var t=amount; t<8; t++)
				 make_cave_line(t);
			}

			function make_buildings() {
				if(randd(-5,1)>0) {
					ctx.strokeStyle = "green"; // Green path
					ctx.fillStyle = rgba_change(main_color1, -60);

					function make_building (building_base, k_height, k_size) {
						var base = new point();
						if (building_base == undefined) {
							base.set(c_width/2, c_height/3*2);
						} else {
							base.set(building_base.x, building_base.y);
						}

						function make_base(base_p, base_w, base_h) {
							ctx.fillStyle = rgba_change(main_color1, -60);
							ctx.beginPath();
							ctx.moveTo(base_p.x, base_p.y);
							ctx.lineTo(base_p.x-base_w/2, base_p.y);
							ctx.lineTo(base_p.x-base_w/2, base_p.y-base_h);
							ctx.lineTo(+base_p.x+ +base_w/2, base_p.y - base_h);
							ctx.lineTo(+base_p.x+ +base_w/2, base_p.y);
							ctx.lineTo(base_p.x, base_p.y);

							//ctx.stroke();
							ctx.fill();

							make_windows(base_p, base_w, base_h);
						}

						function make_roof(roof_p, roof_w, roof_h) {
							ctx.fillStyle = rgba_change(main_color1, -60);
							ctx.beginPath();
							tx.moveTo(roof_p.x, roof_p.y);

							if (randd(-2, 1)>0) { // расширяющийся верх
								ctx.lineTo(roof_p.x - base_w/2, roof_p.y);
								ctx.lineTo(roof_p.x - base_w/2 - base_w/6, roof_p.y-base_h);
								ctx.lineTo(+roof_p.x+ +base_w/2 + +base_w/6, roof_p.y - base_h);
								ctx.lineTo(+roof_p.x+ +base_w/2, roof_p.y);

								if (randd(-2, 1)>0) { // добалвяем гребень
									make_walls(roof_p.set(roof_p.x, roof_p.y - roof_h), roof_w, Math.min(20, roof_h));
								}
							} else { // конический верх
								ctx.lineTo(roof_p.x-roof_w/2, roof_p.y);
								ctx.lineTo(roof_p.x, roof_p.y - roof_h);
								ctx.lineTo(+roof_p.x+ +roof_w/2, roof_p.y);
							}
							ctx.lineTo(roof_p.x, roof_p.y);

							//ctx.stroke();
							ctx.fill();
						}

						function make_windows (base_p, base_w, base_h) {
							var tmp_p = new point();
							tmp_p.set(base_p.x, base_p.y);
							ctx.fillStyle = rgba_change(main_color2, -60);

							function make_window(win_p, win_w, win_h) {
								ctx.beginPath();
								win_w=win_w/2;
								win_h=win_h/2;

								ctx.moveTo(win_p.x-win_w/2, win_p.y);
								ctx.lineTo(win_p.x-win_w/2, win_p.y - win_h);
								ctx.lineTo(+win_p.x+ +win_w/2, win_p.y - win_h);
								ctx.lineTo(+win_p.x+ +win_w/2, win_p.y);
								ctx.lineTo(win_p.x-win_w/2, win_p.y);
								ctx.fill();
							}
							var w_h = randd(10, 14);
							var w_w = ~~(w_h/1.5);
							var w_amount_x = ~~(base_w/w_w); // количество окон на этаже
							var w_amount_y = ~~(base_h/w_h); // количество этажей

							var w_coord_x = ~~(base_w/w_amount_x);
							var w_coord_y = ~~(base_h/w_amount_y);


							for (var i = 0; i < w_amount_y; i++) { // этаж
								for (var j = 0; j < w_amount_x; j++) { // по этажу
									tmp_p.set(
										base_p.x - base_w/2 + w_w/2 + base_w/w_amount_x*j,
										base_p.y - base_h + w_h/2+ base_h/w_amount_y*i
										);
									if(randd(-w_amount_y*w_amount_x,w_amount_y)>0)
										make_window(tmp_p, w_w, w_h);
								}
							}

						} /// windows

						//base.set(c_width/2, c_height/3*2);
						var b_width =  ~~(randd(3, 4)*10*k_size);
						var b_height = ~~(randd(10, 11)*10*k_size/(k_height/3));
						var r_width = ~~(randd(b_width/10, b_width/9)*10);
						var r_height = ~~(randd(b_height/30, b_height/10)*10);
						b_height+=80;

						var floor_max = randd(1, 3);
						for (var i = 0; i < floor_max; i++) {
							make_base(base, b_width, b_height);
							//make_windows(base, b_width, b_height);

							base.set(base.x, base.y - b_height);
							make_roof(base, r_width, r_height);

							base.set(base.x, base.y - b_height);
							b_width =  ~~(randd(3, 4)*10*k_size);
							b_height = ~~(randd(3, 6)*10*k_size/(k_height/3));
							r_width = ~~(randd(b_width/10, b_width/9)*10);
							r_height = ~~(randd(b_height/30, b_height/10)*10);
						}
					} /// make building

					function make_walls (p_base, width, height) {
						var indent_size = 20;
						var indent_amount = ~~(width/indent_size);
						indent_size = ~~(width/indent_amount);
						var p = new point(p_base.x, p_base.y);

						ctx.beginPath();
						ctx.moveTo(p.x - width/2, p.y);
						ctx.lineTo(p.x - width/2, p.y - height);
						ctx.lineTo(p.x - width/2, p.y - height);
						//p.set(p.x - width/2, +p.y+ +(~~(indent_size/2)))
						p.set(p_base.x - width/2, +p.y+ +(~~(indent_size/2)));
						ctx.lineTo(p.x, p.y);

						while (p.x < +p_base.x + +width/2) {
							p.set(p.x +indent_size/2, +p.y+ +(~~(indent_size/2)));
							ctx.lineTo(p.x, p.y);

							p.set(p.x, p.y + indent_size);
							ctx.lineTo(p.x, p.y);

							p.set(p.x + indent_size, p.y);
							ctx.lineTo(p.x, p.y);

							p.set(p.x, p.y - indent_size);
							ctx.lineTo(p.x, p.y);

							p.set(p.x +indent_size/2, p.y);
							ctx.lineTo(p.x, p.y);
						}

						p.set(p_base.x - width/2, p.y);
						ctx.lineTo(p.x, p.y);

						p.set(p_base.x, p.y-height);
						ctx.lineTo(p.x, p.y);

						p.set(p_base.x - width, p.y);
						ctx.lineTo(p.x, p.y);

						ctx.fill();
					} /// make walls


					var building_base = new point();
					var b_max = 10;

					for (var i = 0; i < b_max; i++) {
						var b_center_x = c_width/2 - randd(-c_width/40, c_width/40)*i/2;
						var b_center_y = c_height/4*3;
						building_base.set(b_center_x, b_center_y);

						make_building(building_base, b_max-i+1, 0.7);
					}

					make_walls(new point(c_width/2, c_height/4*3), c_width/40, Math.max(30, c_height/15));
				}
			}

			function make_land(color1, color2) {
				var grd=ctx.createLinearGradient(0, c_height*4/5, 0, c_height);
				grd.addColorStop(0, rgba_change(color1, -60));
				grd.addColorStop(1, rgba_change(color2, -60));

				ctx.fillStyle=grd;
				ctx.fillRect(0,c_height*4/5,c_width,c_height/5);
			}

			function print_stars(ps_color) {
				if(ps_color === undefined)
					var ps_color = "rgba(255,255,255,1)";

				function make_star(ms_pos, rad, color){
					var pos = new point();
					if(ms_pos === undefined)
					{
						pos.set(100, 100);
					}
					else
					{
						pos.set(ms_pos.x, ms_pos.y);
					}
					if(rad === undefined)
					{
						var rad = 6;
					}
					if(color === undefined)
					{
						var color = rgba_change(main_color2, 50);
					}

					ctx.beginPath();
					ctx.moveTo(pos.x, pos.y-rad);//top
					ctx.lineTo(pos.x-(~~(rad/2)), pos.y);//left
					ctx.lineTo(pos.x, +pos.y + +rad);//bottom
					ctx.lineTo(+pos.x + +(~~(rad/2)), pos.y);//right
					ctx.fillStyle = color;
					ctx.fill();
				}

				if(f_day==0)
				{
				var hor_space = 50;
				var ver_space = 50;
				var	max_hor_count = c_width/hor_space;
				var max_ver_count = c_height/ver_space;
				var s_pos = new point();
				var s_x, s_y, s_r;
				for(var i=0; i<max_ver_count; i++)
				{
					for(var j=0; j<max_hor_count; j++)
					{
					if(randd(0,2)==0)
						{
						s_x = j*hor_space - ~~randd(-hor_space/3, hor_space/3);
						s_y = i*ver_space - ~~randd(-ver_space/3, ver_space/3);
						s_r= ~~(6-i*0.3 - randd(-1, 1));
						s_pos.set(s_x, s_y);
						ps_color = rgba_change(ps_color, 0 , randd(50,100)/100);
						make_star(s_pos, s_r, ps_color);
						}
					}
				}
				}
			}

			function make_forest(cl1, cl2) {
				function make_tree_1(cl1, cl2, basis, width, f_leafs){
					if(basis === undefined)
					{
						basis = new point();
						basis.set(100, c_height-100);
					}
					if(width === undefined)
						width = 50;
					var root = ~~(width/2.2);
					var pnt = new point();

					function make_trunk_up(get_point){
						var to_point = new point();
						var br = 20-randd(-10,10);
						var tr_height = 130-randd(-50,50);
						var new_p = new point();

						new_p.x = get_point.x;
						new_p.y = get_point.y - tr_height;
						ctx.lineTo(new_p.x, new_p.y);
						new_p.x = new_p.x-br;
						new_p.y = new_p.y-br;
						ctx.lineTo(new_p.x, new_p.y);
						new_p.x = +new_p.x+ +br;
						new_p.y = + new_p.y + +br/2;
						ctx.lineTo(new_p.x, new_p.y);

						if(new_p.y>0)
							make_trunk_up(new_p);
						else
							return new_p;
					}

					function make_trunk_down(get_point, end_point){
						var to_point = new point();
						var br = 20-randd(-10,10);
						var tr_height = 130-randd(-50,50);
						var new_p = new point();


						new_p.x = + get_point.x + +br;
						new_p.y = get_point.y - br/2;
						ctx.lineTo(new_p.x, new_p.y);
						new_p.x = new_p.x - br;
						new_p.y = +new_p.y + +br;
						ctx.lineTo(new_p.x, new_p.y);
						new_p.x = new_p.x;
						new_p.y = +new_p.y + +tr_height;
						ctx.lineTo(new_p.x, new_p.y);

						if(new_p.y<basis.y - (+root+ +tr_height*1.5))
							make_trunk_down(new_p);
						else
						{
							//new_p.x = new_p.x;
							new_p.y = basis.y-root;//+new_p.y + +tr_height;
							ctx.lineTo(new_p.x, new_p.y);
							new_p.x = +new_p.x + +root;
							new_p.y = +new_p.y + +root;
							ctx.lineTo(new_p.x, new_p.y);
						}
					}
					function make_leafs (ls_p, ls_h) {
					var l_p=new point();
					var ls_w=500;
						for (var i=0; i<11; i++) {
							for (var j=0; j<6; j++) {
								if(randd(0, 3)>i) {
									//l_p.set(ls_p.x - (ls_h/2)/(i*0.4) + +ls_h/6*i/(i*0.4) - randd(-1,1)*i*15, ls_p.y + +ls_h/11*j)
									var j_c = ~~((ls_w/6)* (j+1));
									var k = ~~((i*0.6)+1);
									l_p.set(ls_p.x -10 - (ls_w/2)/k + +(j_c)/k, ls_p.y + +(ls_h/11)*i - randd(3,3)/k);

									make_leaf(l_p, 70);
								}
							}
						}
					}

					function make_leaf (l_p, l_w) {
						l_p.set(l_p.x-randd(-10,10), l_p.y-randd(-30,30));
						l_w = l_w - randd(-5,5)*3;
						ctx.beginPath();
						ctx.moveTo(l_p.x, l_p.y);
						ctx.lineTo(l_p.x-l_w/2, l_p.y + +l_w/2);
						ctx.lineTo(+l_p.x+ +l_w/2, l_p.y + +l_w/2);
						ctx.lineTo(l_p.x, l_p.y);
						//ctx.stroke();
						ctx.fillStyle = rgba_change(main_color1, randd(-15,15), randd(3,10)*0.1, -randd(1,5)*3, randd(1,5)*3, -randd(1,5)*3);
						ctx.fill();
					}

					ctx.beginPath();
					var root_x1 = ~~(basis.x-width/2-root);
					var root_y1 = basis.y;
					var root_x2 = ~~(basis.x-width/2);
					var root_y2 = basis.y-root;
					ctx.moveTo(root_x1, root_y1);
					ctx.lineTo(root_x2, root_y2);
					pnt.set(root_x2, root_y2);
					make_trunk_up(pnt);
					pnt.set(basis.x, 0);
					make_trunk_down(pnt, basis);

					var tree = ctx.createLinearGradient(0,0,0,basis.y);
					tree.addColorStop(0, rgba_change(cl1, 10));
					tree.addColorStop(.99, rgba_change(cl2, 30));
					tree.addColorStop(1, rgba_change(cl2, 30, 0));
					ctx.fillStyle = tree;
					ctx.fill();
					if(f_leafs==1)
						make_leafs(pnt, 200);
				}

				var f_leafs = (randd(-1,1)>0)?1:0;
				var s_max = randd(2, 6), d_max = randd(7, 13);
				//var s_max = 3, d_max = 4;
				var tree_point = new point();
				for(var s=0; s<s_max; s++)
				{
					for(var d=0; d<d_max; d++)
					{

						x = ~~(c_width/d_max*(d+1) - c_width/(d_max*2) - randd(-c_width/(d_max*4), c_width/(d_max*3)));
						//y = ~~((c_height*4/5)+ 40 + c_height/(3*s_max*1.2)*s - randd(c_height/(0, c_height/(3*s_max*2))));
						y = ~~((c_height*4/5)+ 40 + c_height/(3*s_max*1.2)*s - randd(-10, 10));

						/*
						x = ~~(c_width/d_max*(d+1) - c_width/(d_max*2) );
						y = ~~((c_height*2/3)+ 50 + c_height/(3*s_max*1.2)*s);
						*/
						tree_point.set(x, y);
						var cl1 = rgba_change(cl1, randd(-15, 10));
						var cl2 = rgba_change(cl2, randd(-15, 10));
						var wid = randd(30, 70);
						var rnd = randd(0,5);
						if(rnd<2)
						{
							make_tree_1(cl1, cl2, tree_point, wid, f_leafs);
							tree_point.x-=randd(90, 150);
							tree_point.y-=-15;
							make_cloud(tree_point, randd(80, 120), randd(250, 350), rgba_change(cl1, -30, 1));
						}
						/*/
						if(rnd==5){
							tree_point.x-=70;
							tree_point.y-=15;
							make_cloud(tree_point, 100, 300, rgba_change(cl1, -30, 0.95));
						}
						/**/
					}
				}
			}

			function draw_rocks()	{
				function make_rock(mr_point, mr_height, mr_width, mr_color1, mr_color2)
					{
					function print_rock(color1, color2, r_pos, r_height, r_width){
						if(r_pos === null)
						{
							var r_pos = new point();
							r_pos.set(~~(c_width/2), ~~(c_height/3));
						}
						if(r_height === undefined)
						{
							r_height = ~~(c_height/2);
						}
						if(r_width === undefined)
						{
							r_width = +r_height + +r_height/2;
						}
						var rock_start_point = new point();
						rock_start_point.set(r_pos.x, r_pos.y - r_height);
						//console.log("sun_x: "+sun_pos_hor+" < mount_x: "+rock_start_point.x+ " c_width: "+c_width);
						//console.log("c_width: "+c_width);
						if(sun_pos_hor < rock_start_point.x)
						{
							//console.log("color change __");
							/**/
							var tmp_color0 = color1;
							color1 = color2;
							color2 = tmp_color0;
							/**/
						}

						var arry_left = [], arry_mid = [], arry_right = [], arry = [];
						var tmp_p1 = new point(), tmp_p2 = new point(), tmp_p3 = new point();

						function rock_point(p1, p2, randp, mod, h){
							var rr=randp;
							if (!(randp >0 && randp<100)) {
								rr = parseInt(Math.sqrt(Math.pow((p2.x - p1.x),2)+Math.pow((p2.y - p1.y),2))/10);
							}
							if(mod === undefined)
								mod=1;

							x_r=~~(randd(-rr,-rr/2)*mod);
							y_r=~~(randd(rr,rr/2));


							//x_r= -rr*mod;
							//y_r= -rr;
							if(h>0)
							{
								y_r	-= rr;
							}

							pn = new point();
							pn.x = parseInt((p1.x+p2.x)/2-x_r);
							pn.y = parseInt((p1.y+p2.y)/2-y_r);
							return pn;
							}

						function line_left(arry, max_i)
							{
							if(max_i === undefined)
								max_i = 7;
							var arry2=[];
							ar_l=0;
							for(p=0; p < max_i; p+=1)
								{
								ar_l = arry.length;
								arry2.push(arry[0]);
								for(k=0; k < ar_l-1; k++)
								{
									if(k%2==0)
									{
										arry2.push(rock_point(arry[k], arry[(k+1)], 9, 1, 1));
										arry2.push(rock_point(arry[k], arry[(k+1)], 9, -1));
									}
									arry2.push(arry[k+1]);
								}
								arry=[];
								arry=arry2;
								arry2=[];
								//console.log(arry);
								}
							return arry;
							}

							arry_left[0] = rock_start_point;
							var tl_x = ~~(rock_start_point.x - r_width/2);
							var tl_y = ~~(+rock_start_point.y + +r_height);
							tmp_p1.set(tl_x, tl_y);
							arry_left[1] = tmp_p1;
							arry_left = line_left(arry_left, 2);

						function line_mid(arry, max_i)
							{
							if(max_i === undefined)
								max_i = 2;
							max_i*=3;
							var arry2=[], new_p_x, new_p_y, new_p_x2, new_p_y2, new_p = new point(), rr=10, tmp_step;
							ar_l=0;
							var step = -(~~((arry[1].y-arry[0].y)/max_i));
							arry2[0]=arry[0];
							for(p=1; p < max_i; p+=1)
								{
								new_p_x = ~~(arry[0].x - randd(-rr, rr)*p*0.3);
								new_p_y = ~~(arry2[p-1].y - step);
								new_p_x2 = ~~(arry[0].x - randd(-rr, rr)*2*p*0.3);
								new_p_y2 = ~~(arry2[p-1].y - step*2.5);

								arry2[p] = new point();
								arry2[p].set(new_p_x, new_p_y);

								p++;
								arry2[p] = new point();
								arry2[p].set(new_p_x2, new_p_y2);

								p++;
								new_p_y = ~~(arry2[p-1].y - step);
								arry2[p] = new point();
								arry2[p].set(new_p_x, new_p_y2);
								}
							arry2[p]=arry[1];
							arry2[p].x-=randd(-step, step);
								arry=[];
								arry=arry2;
								arry2=[];
							return arry;
							}
							/**/
							arry_mid[0] = rock_start_point;
							var tm_x = ~~(rock_start_point.x);
							var tm_y = ~~(+rock_start_point.y + +r_height);
							tmp_p3.set(tm_x, tm_y);
							arry_mid[1] = tmp_p3;
							arry_mid = line_mid(arry_mid, 4);
							/**/

						function line_right(arry, max_i)
							{
							if(max_i === undefined)
								max_i = 7;
							var arry2=[];
							ar_l=0;
							for(p=0; p < max_i; p++)
								{
								ar_l=arry.length;
								arry2.push(arry[0]);
								for(k=0; k < ar_l-1; k++)
								{
									if(k%2==0)
									{
										arry2.push(rock_point(arry[k], arry[(k+1)], 9, -1, 1));
										arry2.push(rock_point(arry[k], arry[(k+1)], 9, 1));
									}
									arry2.push(arry[k+1]);
								}
								arry=[];
								arry=arry2;
								arry2=[];
								//console.log(arry);
								}
							return arry;
							}

							/**/
							arry_right[0] = rock_start_point;
							var tr_x = ~~(+rock_start_point.x + +r_width/2);
							var tr_y = ~~(+rock_start_point.y + +r_height);
							tmp_p2.set(tr_x, tr_y);
							arry_right[1] = tmp_p2; /**/
							arry_right = line_right(arry_right, 2);


							ctx.beginPath();

							var rock_rr = 0; //randd(-4,-1) * 5;
							arry = arry_left.reverse().concat(arry_right);

							for(e=0; e< arry.length; e++)
								{
								ctx.lineTo(arry[e].x, arry[e].y);
								//console.log("P: "+arry[e].x+" "+arry[e].y);

								}
							ctx.lineTo(arry[0].x, arry[0].y);

							ctx.fillStyle = rgba_change(color1, rock_rr);
							ctx.fill();


							arry = [];
							arry = arry_mid.reverse().concat(arry_right);

							ctx.beginPath();
							for(e=0; e< arry.length; e++)
								{
								ctx.lineTo(arry[e].x, arry[e].y);
								//console.log("P: "+arry[e].x+" "+arry[e].y);

								}
							ctx.lineTo(arry[0].x, arry[0].y);

							ctx.fillStyle = rgba_change(color2, rock_rr);
							ctx.fill();
							ctx.strokeStyle=rgba_change(color2, rock_rr);
							ctx.stroke();

							/*/
							ctx.beginPath();
							ctx.rect(r_pos.x-5, r_pos.y-5, 10, 10);
							ctx.fillStyle = "green";
							ctx.fill();
							/**/
					}

					var r_bott = new point();
					if(mr_point === undefined)
						{
						r_bott.set(~~(c_width/2), ~~(c_height*2/3));
						}
					else
						r_bott.set(mr_point.x, mr_point.y);

					print_rock(mr_color1, mr_color2, r_bott, mr_height);
				}
				var dr_bottom = new point(), dr_h, dr_w, dr_h_rnd;
				//dr_bottom.set(~~(c_width/2), ~~(c_height/3));
				var cl_rr = randd(-4,-1) * 5;
				var clr11 = rgba_change(main_color1, cl_rr);
				var clr22 = rgba_change(main_color2, cl_rr);
				var t_max = randd(0,9);
				var dr_b_x, dr_b_y;

				for(t=0; t<t_max; t++)
					{
					dr_b_x = ~~(c_width/2 - randd(-c_width/40, c_width/40)*10);
					dr_b_y = ~~(c_height*4/5 );
					dr_bottom.set(dr_b_x, dr_b_y);
					dr_h_rnd = randd(-c_height/6, c_height/6);
					dr_h = ~~(c_height/2 - dr_h_rnd);
					console.log("r height: "+dr_h);
					dr_w = ~~(dr_h*1.4 - randd(-c_width/6, c_width/46));
					make_rock(dr_bottom, dr_h, dr_w, clr11, clr22);
					}
			}

			/**
			 * @param {point} start point
			 * @param {number} main diametr
			 * @param {number} main height
			 *
			 */
			function make_cactus(mc_p1, mc_dt, mc_h){
				var mc_1 = new point(), mc_2 = new point(), mc_w;
				var db, rb;
				var f_direction = 1;
				var gap = 20;
				var m_x, m_y, bc1_x, bc1_y, bc2_x, bc2_y;

				if(mc_dt === undefined) // diameter trunk
					mc_dt = 20;
				db = ~~(mc_dt/3*2);     // inner diameter branch
				rb = ~~(db/5*2);        // outer radius branch

				if(mc_p1 === undefined)
					mc_1.set(100, 200);
				else
					mc_1.set(mc_p1.x, mc_p1.y)

				mc_2.set(+mc_1.x + +mc_dt, mc_1.y)

				if(mc_h === undefined)
					mc_h = 50;
				if(mc_w === undefined)
					mc_w = mc_2.x - mc_1.x;

				var rl = ~~(mc_h/10);
				var lb_line = mc_h/3*2 - randd(-rl, rl);
				var t1_line = +mc_h + +randd(rl, ~~(mc_h/5));
				var t2_line = randd(-rl*2, rl*2);
				var rb_line = mc_h/3*2 - randd(-rl, rl);
				var f_line = ~~randd(rl, mc_h/4*5);

				//ctx.beginPath();
				//ctx.moveTo(mc_1.x, mc_1.y); //strt
					m_x = mc_1.x; m_y = mc_1.y - f_line;
				ctx.lineTo(m_x, m_y); //fst line

					bc1_x = m_x - db -rb; bc1_y = m_y;
					bc2_x = bc1_x; bc2_y = bc1_y;
					m_x = m_x - db -rb; m_y = m_y  - db -rb;
				ctx.bezierCurveTo(bc1_x, bc1_y, bc2_x, bc2_y, m_x, m_y); // left branch outer arc

					m_y = m_y-lb_line;
				ctx.lineTo(m_x, m_y); //left branch left line

					bc1_x = m_x; bc1_y = m_y - db/3*2;
					bc2_x = +m_x + +db; bc2_y = bc1_y;
					m_x = +m_x + +db;
				ctx.bezierCurveTo(bc1_x, bc1_y, bc2_x, bc2_y, m_x, m_y); // left branch top arc

					m_y = +m_y + +lb_line;
				ctx.lineTo(m_x, m_y); //left branch right line

					bc1_x = m_x; bc1_y = +m_y + +rb;
					bc2_x = bc1_x; bc2_y = bc1_y
					m_x = +m_x + +rb; m_y = +m_y + +rb;
				ctx.bezierCurveTo(bc1_x, bc1_y, bc2_x, bc2_y, m_x, m_y); // left branch inner arc

					m_y = m_y -t1_line;
				ctx.lineTo(m_x, m_y); //trunk left line

					bc1_x = m_x; bc1_y = m_y - mc_dt/3*2;
					bc2_x = +m_x + +mc_dt; bc2_y = bc1_y;
					m_x = +m_x + +mc_dt;
				ctx.bezierCurveTo(bc1_x, bc1_y, bc2_x, bc2_y, m_x, m_y); // trunk top arc

					m_y = +m_y + +t1_line-t2_line;
				ctx.lineTo(m_x, m_y); //trunk right line

					bc1_x = +m_x + rb; bc1_y = m_y;
					bc2_x = bc1_x; bc2_y = bc1_y;
					m_x = +m_x + +rb; m_y = m_y - rb
				ctx.bezierCurveTo(bc1_x, bc1_y, bc2_x, bc2_y, m_x, m_y); // right branch inner arc

					m_y = m_y -rb_line;
				ctx.lineTo(m_x, m_y); //right branch left line

					bc1_x = m_x; bc1_y = m_y - db/3*2;
					bc2_x = +m_x + +db; bc2_y = bc1_y;
					m_x = +m_x + +db;
				ctx.bezierCurveTo(bc1_x, bc1_y, bc2_x, bc2_y, m_x, m_y); // right branch top arc

					m_y = +m_y + +rb_line;
				ctx.lineTo(m_x, m_y); //right branch right line

					bc1_x = m_x; bc1_y = +m_y + +rb + +db;
					bc2_x = bc1_x; bc2_y = bc1_y;
					m_x = m_x - rb - db; m_y = +m_y + +rb + +db
				ctx.bezierCurveTo(bc1_x, bc1_y, bc2_x, bc2_y, m_x, m_y); // right branch outer arc

					m_y = mc_1.y;
				ctx.lineTo(m_x, m_y); //right trunk line
				//ctx.stroke();
			}

			make_sky(main_color1, main_color2);
			print_stars(main_color2);
			var sun_color = make_sun();

			draw_clouds();
			draw_rocks();
			make_buildings();

			print_hills(main_color1, main_color2);

			if(randd(0,1)==1 && f_desert!=1 && f_cave!=1)
			{
				make_land(main_color1, main_color2);
				make_forest(main_color1, main_color2);
			}
			if (f_cave==1) {
				make_cave();
			}

			/**/

			return {
				clr1: main_color1,
				clr2: main_color2
				};
		} else {
			// canvas-unsupported code here
		}
		}
	function show_milepost(name, id){
		// показать background
		$("body").css("background", "#fff");
		if($("#background").length<1)
			$("body").prepend("<div id='background'></div>");

		var label = "<div id='milepost_label'>"+name+"</div>";
		var pole = "<div id='milepost_pole'></div>";
		var milepost = "<div id='milepost'>"+label+pole+"</div>";
		$("#"+id).html(milepost);

		var color_overlay = make_back_2();
		//console.log("c_o: "+color_overlay);
		make_texture(color_overlay);
		if(bg_blur ==1)
			$("#background").attr('class', 'blur');
	}

	$(window).resize(function(){
		make_back_2();
	});

	$('body').keyup(function(eventObject){
	 //alert('Клавиша клавиатуры приведена в нажатое состояние. Код вводимого символа - ' + eventObject.which);
	 if(eventObject.which == 16) // Shift
	 {
		 if($("#background").attr('class') == 'blur')
		 {
			 $("#background").removeAttr('class');
			 bg_blur = 0;
		 }
		 else
		 {
			 $("#background").attr('class', 'blur');
			 bg_blur = 1;
		 }
		localStorage.setItem("flag_blur", bg_blur);
	 }
	 if(eventObject.which == 192) //~
	 {
		 if($("#result").is(':visible'))
		 {
			 $("#result").hide();
			 milepost_visible = 0;
		 }
		 else
		 {
			 $("#result").show();
			 milepost_visible = 1;
		 }
		localStorage.setItem("flag_milepost", milepost_visible);
	 }
	 if(eventObject.which == 32 || eventObject.which == 13) //Space Enter
	 {
		$("#town_name").click();
	 }
	});

	$("body").on("click", "#go", function(){


		$("#result").html("");

		$("#result").append(make_street);

	});
	$("body").on("click", "#town_name", function(){


		$("#result").html("");
		show_milepost(make_town(), 'result');


	});
	make_generator();
	show_milepost(make_town(), 'result');




	$("body").on("click", "#info", function(){
		if($("#dbg").length<1)
		{
			$("body").append("<div id='dbg'></div>");
		}
		$("#dbg").show();
		if($(".mod_win").length<1)
		{
			$("body").append("<div class='mod_win'></div>");
		}
		$(".mod_win").show();


		$(".mod_win").html(info);
	});
	$("body").on("click", "#dbg", function(){
		$("#dbg").hide();
		$(".mod_win").hide();
	});
	$("body").on("click", ".info_toggle", function(){
		if($(this).text()=="Скрыть описание")
		{
			$(this).text("Показать описание");
			$(".description").slideUp();
		}
		else
		{
			$(this).text("Скрыть описание");
			$(".description").slideDown();
		}

		return false;
	});

});
