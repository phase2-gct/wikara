var labelId, linkButton, divId, primObject, backgroundClose, prevEl;
var submitMessage = "";
var setFailed = "";
var sliderContentWidth = 0;
var sliderBulletTarget = "";
var sliderEl = "";
var queue_parse = '';
primObject = _("generascriptCanvas");
secObject = _("generascriptCanvasPopup");
if(primObject!=null)
{primObject.className="generascriptCanvasNone";}
if(secObject!=null)
{secObject.className="generascriptCanvasNone";}

function _(el)
{
	return document.getElementById(el);
}
function elTag(el)
{
	return document.getElementsByTagName(el);
}
function elClass(el)
{
	return document.getElementsByClassName(el);
}
function count(arr)
{
	return arr.length;
}

function antiSqlData_Sent(chars)
{
	/*encode data*/

	var anti1 = ["\n","%","@","#","$","^","&","+","{","}","|",'"',"<",">","?","`","=","[","]",";","'",",","/","\\"];
	var anti2 = ["<br />","%25","%40","%23","%24","%5E","%26","%2B","%7B","%7D","%7C","%22","%3C","%3E","%3F","%60","%3D","%5B","%5D","%3B","%27","%2C","%2F","%5C"];

	for(var i=0;i<anti1.length;i++)
	{
		chars = chars.split(anti1[i]).join(anti2[i]);
	}

	return chars;
}

function antiSqlUi_HTML(chars)
{
	/*decode html*/

	var anti1 = ["%25","%40","%23","%24","%5E","%26","%2B","%7B","%7D","%7C","%22","%3C","%3E","%3F","%60","%3D","%5B","%5D","%3B","%27","%2C","%2F","%5C","&#60;br /&#62;"];
	var anti2 = ["%","@","#","$","^","&","+","{","}","|",'&#34;',"&#60;","&#62;","?","`","=","[","]",";","&#39;",",","/","&#92;","<br />"];

	var link = "";
	var link2 = "";

	for(var i=0;i<anti1.length;i++)
	{
		chars = chars.split(anti1[i]).join(anti2[i]);
	}

	chars = checkUrl(chars);

	return chars;
}

function antiSqlUi_form(chars)
{
	/*decode form*/

	var anti1 = ["%25","%40","%23","%24","%5E","%26","%2B","%7B","%7D","%7C","%22","%3C","%3E","%3F","%60","%3D","%5B","%5D","%3B","%27","%2C","%2F","%5C","&#60;br /&#62;"];
	var anti2 = ["%","@","#","$","^","&","+","{","}","|",'&#34;',"&#60;","&#62;","?","`","=","[","]",";","&#39;",",","/","&#92;","\n"];

	for(var i=0;i<anti1.length;i++)
	{
		chars = chars.split(anti1[i]).join(anti2[i]);
	}

	return chars;
}
function antiSqlUi_wysiwyg(chars)
{
	/*decode wysiwyg*/

	var anti1 = ["%25","%40","%23","%24","%5E","%26","%2B","%7B","%7D","%7C","%22","%3C","%3E","%3F","%60","%3D","%5B","%5D","%3B","%27","%2C","%2F","%5C","&#60;br /&#62;"];
	var anti2 = ["%","@","#","$","^","&","+","{","}","|",'<',">","?","?","`","=","[","]",";","'",",","/","\\","\n"];

	for(var i=0;i<anti1.length;i++)
	{
		chars = chars.split(anti1[i]).join(anti2[i]);
	}

	return chars;
}
function number_format(num)
{
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")
}
function number_deformat(num)
{
	return num.split(',').join('');
}
function explode(param, obj)
{
	if(obj!=null && param!=null)
	{
		if(obj.indexOf(param)>=0)
		{
			var explode = obj.split(param);
			return explode;
		}
	}
}
function str_replace(from,to,obj)
{
	return obj.split(from).join(to);
}
function date_translate(dateValue)
{
	var dateFormatedParse = php_explode('-',dateValue);
	var Year = dateFormatedParse[0];
	var Month = dateFormatedParse[1];

	if(Month=='01')
	{Month = 'Jan';}
	else if(Month=='02')
	{Month = 'Feb';}
	else if(Month=='03')
	{Month = 'Mar';}
	else if(Month=='04')
	{Month = 'Apr';}
	else if(Month=='05')
	{Month = 'May';}
	else if(Month=='06')
	{Month = 'Jun';}
	else if(Month=='07')
	{Month = 'Jul';}
	else if(Month=='08')
	{Month = 'Aug';}
	else if(Month=='09')
	{Month = 'Sep';}
	else if(Month=='10')
	{Month = 'Oct';}
	else if(Month=='11')
	{Month = 'Nov';}
	else if(Month=='12')
	{Month = 'Dec';}

	var Day = dateFormatedParse[2];
	var dateFormated = Month+' '+Day+', '+Year;
	return dateFormated;
}
function isJson(str)
{
	try
	{JSON.parse(str);return true;}
	catch(e)
	{return false;}
}
function _css_replace(css_from, css_to, divId)
{
	if(divId==null)
	{
		var getObject = elClass(css_from)[0].className+" ";
		elClass(css_from)[0].className=str_replace(css_from+" ", css_to+" ", getObject);
	}
	else
	{
		var getObject = _(divId).className+" ";
		_(divId).className=getObject.split(css_from+" ").join(css_to+" ");
	}
}
function _css_add(css_target, css_added, divId)
{
	if(divId==null)
	{
		elClass(css_target)[0].className=elClass(css_target)[0].className+" "+css_added;
	}
	else
	{
		_(divId).className=_(divId).className+" "+css_added;
	}
}
function _css_remove(css_target, divId)
{_css_replace(css_target, '', divId);}
function myBrowser()
{
	if(navigator.userAgent.indexOf("Chrome") != -1 ) 
	{return "chrome";}
	else if(navigator.userAgent.indexOf("Opera") != -1 )
	{return "opera";}
	else if(navigator.userAgent.indexOf("Firefox") != -1 ) 
	{return "firefox";}
	else if((navigator.userAgent.indexOf("MSIE") != -1 ) || (!!document.documentMode == true )) //IF IE > 10
	{return "ie";}  
	else 
	{return "unknown";}
}
function base64_decode(s)
{
	var e = {}, i, k, v = [], r = '', w = String.fromCharCode;
	var n = [[65, 91], [97, 123], [48, 58], [43, 44], [47, 48]];

	for(z in n)
	{
		for (i = n[z][0]; i < n[z][1]; i++)
		{v.push(w(i));}
	}
	for(i = 0; i < 64; i++)
	{e[v[i]] = i;}

	for(i = 0; i < s.length; i+=72)
	{
		var b = 0, c, x, l = 0, o = s.substring(i, i+72);
		for (x = 0; x < o.length; x++)
		{
			c = e[o.charAt(x)];
			b = (b << 6) + c;
			l += 6;
			while (l >= 8)
			{r += w((b >>> (l -= 8)) % 256);}
		 }
	}
	return r;
}
function base64_encode(data) {
  var b64 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
  var o1, o2, o3, h1, h2, h3, h4, bits, i = 0,
    ac = 0,
    enc = '',
    tmp_arr = [];

  if (!data) {
    return data;
  }

  do { // pack three octets into four hexets
    o1 = data.charCodeAt(i++);
    o2 = data.charCodeAt(i++);
    o3 = data.charCodeAt(i++);

    bits = o1 << 16 | o2 << 8 | o3;

    h1 = bits >> 18 & 0x3f;
    h2 = bits >> 12 & 0x3f;
    h3 = bits >> 6 & 0x3f;
    h4 = bits & 0x3f;

    // use hexets to index into b64, and append result to encoded string
    tmp_arr[ac++] = b64.charAt(h1) + b64.charAt(h2) + b64.charAt(h3) + b64.charAt(h4);
  } while (i < data.length);

  enc = tmp_arr.join('');

  var r = data.length % 3;

  return (r ? enc.slice(0, r - 3) : enc) + '==='.slice(r || 3);
}


doOpening();

function doOpening()
{
/*used for popup - start*/
	linkButton = elClass("generascript_effect");

	for(var i=0;i<linkButton.length;i++)
	{
		linkButton[i].addEventListener("click",function()
		{
			doGctgenerascriptEffect(this.id);
		}
		,false);
	}

	var elementGeneraScript = elTag("generascriptdata");
	for(var gs=0;gs<elementGeneraScript.length;gs++)
	{
		if(elementGeneraScript[gs].innerHTML.charAt(0)!='%')
		{elementGeneraScript[gs].innerHTML=encodeURIComponent(elementGeneraScript[gs].innerHTML);}
	}
/*used for popup - end*/

/*used for slider - start*/
	var elementGeneraScript = elTag("generascriptdata_slider");
	for(var gs=0;gs<elementGeneraScript.length;gs++)
	{
		if(elementGeneraScript[gs].innerHTML.charAt(0)!='%')
		{elementGeneraScript[gs].innerHTML=encodeURIComponent(elementGeneraScript[gs].innerHTML);}
	}

	if(elTag("generascriptdata_slider")!=null)
	{
		sliderData = elTag("generascriptdata_slider");

		for(var i=0;i<sliderData.length;i++)
		{
			/*get slider content - start*/
			sliderEl = sliderEl+'<div id="generascriptSlider_'+i+'" class="generascriptSlider_child">'+decodeURIComponent(sliderData[i].innerHTML)+'</div>';
			/*get slider content - end*/
		}

		if(_("generascriptSlider")!=null)
		{_("generascriptSlider").innerHTML='<div id="sliderPosition" style="position:relative;left:0px;">'+sliderEl+'</div>';}


		for(var i=0;i<sliderData.length;i++)
		{
			/*get bullet target - start*/
			sliderBulletTarget = sliderBulletTarget+'<li class="bulletTarget" id="gsSld'+sliderContentWidth+'" onclick="getSlideMotion(\''+sliderContentWidth+'\')"></li>';
			/*get bullet target - end*/

			/*get content width - start*/
			if(i<(sliderData.length-1))
			{sliderContentWidth = sliderContentWidth+_("generascriptSlider_"+i).offsetWidth;}
			/*get content width - end*/
		}
	}

	if(_("generascriptSliderNavigation")!=null)
	{
		_("generascriptSliderNavigation").innerHTML='<ul class="sliderBulletParent">'+sliderBulletTarget+'</ul>';
		getSlideMotion("0");
	}
}

function getSlideMotion(positionToSet)
{
	var li_length = elClass("bulletActive");
	for(var i=0;i<li_length.length;i++)
	{
		li_length[i].className="bulletTarget";
	}

	_("gsSld"+positionToSet).className="bulletTarget bulletActive";

	var positionNow = _("sliderPosition").style.left;
	_("sliderPosition").style.left="-"+positionToSet+"px";;
}

function doGctgenerascriptEffect2(divId)
{
	var effect = _("target_"+divId).className;

	backgroundFadeBlock = "<a href=\"#\" id=\"generascript_block\" class=\"generascript_unblock\" onclick=\"doGctgenerascriptEffect('"+divId+"');return false;\"></a>";

	if(effect=="fade" || effect=="popup" || effect=="slideDown" || effect=="slideRight" || effect=="slideLeft")
	{
		var obj_doc = decodeURIComponent(_("target_"+divId).innerHTML);

		if(secObject.className=="generascript_"+effect+"_active")
		{
			_("generascript_block").className="generascript_unblock";
			secObject.className="generascript_"+effect+"_deactive";
			setTimeout(function(){
				secObject.innerHTML="";
				secObject.className="generascriptCanvasNone";
			},500);
		}
		else
		{
			secObject.innerHTML=obj_doc+backgroundFadeBlock;
			secObject.className="generascript_"+effect+"_deactive";

			setTimeout(function(){
				_("generascript_block").className="generascript_block";
				secObject.className="generascript_"+effect+"_active";
			},50);
		}
	}

	return false;
}
function doGctgenerascriptEffect(divId)
{
	var effect = _("target_"+divId).className;

	backgroundFadeBlock = "<a href=\"#\" id=\"generascript_block\" class=\"generascript_unblock\" onclick=\"doGctgenerascriptEffect('"+divId+"');return false;\"></a>";

	if(effect=="fade" || effect=="popup" || effect=="slideDown" || effect=="slideRight" || effect=="slideLeft")
	{
		var obj_doc = decodeURIComponent(_("target_"+divId).innerHTML);

		if(primObject.className=="generascript_"+effect+"_active")
		{
			_("generascript_block").className="generascript_unblock";
			primObject.className="generascript_"+effect+"_deactive";
			setTimeout(function(){
				primObject.innerHTML="";
				primObject.className="generascriptCanvasNone";
			},500);
		}
		else
		{
			primObject.innerHTML=obj_doc+backgroundFadeBlock;
			primObject.className="generascript_"+effect+"_deactive";

			setTimeout(function(){
				_("generascript_block").className="generascript_block";
				primObject.className="generascript_"+effect+"_active";
			},50);
		}
	}

	return false;
}
function listenToTheHTML(objectIdentification, objectFunction, buttonFunction, callback)
{
	/*
		objectIdentification = object name/id/class based
		objectFunction = id
						 tagName
						 className
		buttonFunction = click
						 keyup
						 keypress
						 mouseover
						
	*/
	var buttonAccess = false;

	if(objectFunction=="id")
	{var classToListen = _(objectIdentification);}
	else if(objectFunction=="tagName")
	{var classToListen = elTag(objectIdentification);}
	else if(objectFunction=="className")
	{var classToListen = elClass(objectIdentification);}

	if(buttonFunction=="click" || buttonFunction=="keyup" || buttonFunction=="keypress" || buttonFunction=="mouseover")
	{buttonAccess = true;}

	if(classToListen!=null && buttonAccess==true)
	{
		if(objectFunction=="id")
		{classToListen.addEventListener(buttonFunction, function(){callback(this, i);});}
		else
		{
			for(var i=0;i<count(classToListen);i++)
			{classToListen[i].addEventListener(buttonFunction, function(){callback(this, i);});}
		}
	}
}








function xmlReq()
{
	if(window.XMLHttpRequest)
	{return new XMLHttpRequest();}
	else
	{return new ActiveXObject("Microsoft.XMLHTTP");}
}

function ajaxReqGet(url,divId,callback)
{
	var xmlhttp = xmlReq();

	if(_(divId)!=null && callback==null)
	{_(divId).innerHTML='Loading ...';}

	xmlhttp.onreadystatechange=function()
	{
		if(xmlhttp.readyState=="4")
		{
			if(_(divId)!=null && callback==null && xmlhttp.status=="200")
			{_(divId).innerHTML=xmlhttp.responseText;}
			else if(callback!=null)
			{callback(xmlhttp.responseText, xmlhttp.status);}
		}
	};
	xmlhttp.open("GET",url,true);
	xmlhttp.send();
}

function ajaxReqPost(url,data,divId,callback)
{
	var xmlhttp = xmlReq();

	if(_(divId)!=null)
	{_(divId).innerHTML="Loading ...";}

	xmlhttp.onreadystatechange=function()
	{
		if(xmlhttp.readyState=="4")
		{
			if(_(divId)!=null && callback==null && xmlhttp.status=="200")
			{_(divId).innerHTML=xmlhttp.responseText;}
			else if(callback!=null)
			{callback(xmlhttp.responseText, xmlhttp.status);}
		}
	};
	xmlhttp.open("POST",url,true);
	xmlhttp.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
	xmlhttp.send(data);
}


function progressHandler(event)
{
	_("loaded_n_total").innerHTML = "Uploaded "+event.loaded+" bytes of "+event.total;
	var percent = (event.loaded / event.total) * 100;
	_("progressBar").value = Math.round(percent);
	if(submitMessage!=null)
	{_(submitMessage).innerHTML = Math.round(percent)+"% uploaded... please wait";}

	if(Math.round(percent)==100)
	{
		//reloading 5 seconds after upload complete
		
		if(submitMessage!=null)
		{_(submitMessage).innerHTML = "Submit sent, waiting for server response ...";}

		setFailed = setTimeout(function()
		{
			if(submitMessage!=null)
			{_(submitMessage).innerHTML='<font color="red">Connection disconnected, overtime (60 seconds)</font>';}
			setTimeout(function(){
				if(submitMessage!=null)
				{_(submitMessage).innerHTML='';}
			}, 10000);
			
		},120000);
	}
}
function completeHandler(event)
{
	setTimeout(function(){_("progressBar").value = 0;},3000);

	if(event.target.status=="200")
	{
		clearInterval(setFailed);

		setTimeout(function()
		{
			if(submitMessage!=null)
			{_(submitMessage).innerHTML = "";}
		},10000);

		if(submitMessage!=null)
		{_(submitMessage).innerHTML = event.target.responseText;}
	}
}
function errorHandler(event)
{
	if(submitMessage!=null)
	{_(submitMessage).innerHTML = "Submit Failed";}
}
function abortHandler(event)
{
	if(submitMessage!=null)
	{_(submitMessage).innerHTML = "Submit Aborted";}
}

function submit_data(divId, formElement, url)
{
	if(formElement==null)
	{formElement = 0;}

	if(url==null)
	{url = elTag("form")[formElement].action;}

	var formdata = new FormData();
	var elValue = '';

	submitMessage = divId;

	/*get all value from input tags*/
	var inputElement = elTag("form")[formElement].getElementsByTagName("input");
	for(var i=0;i<inputElement.length;i++)
	{
		if(inputElement[i].name!=null)
		{
			if(inputElement[i].type=="file")
			{
				for(var fl=0;fl<inputElement[i].files.length;fl++)
				{
					elValue = inputElement[i].files[fl];
					formdata.append(inputElement[i].name, elValue);
				}
			}
			else
			{
				elValue = inputElement[i].value;
				formdata.append(inputElement[i].name, elValue);
			}
		}
	}


	/*get all value from textarea tags*/
	var inputElement = elTag("form")[formElement].getElementsByTagName("textarea");
	for(var i=0;i<inputElement.length;i++)
	{
		if(inputElement[i].name!=null)
		{
			if(inputElement[i].id!=null && inputElement[i].id!='')
			{
				if(_("cke_"+inputElement[i].id).getElementsByTagName("iframe")[0]!=null)
				{
					elValue = _("cke_"+inputElement[i].id).getElementsByTagName("iframe")[0].contentDocument.body.innerHTML;
					elValue = elValue.replace(/data-cke-saved-src="[^"]*"/g, '');
				}
				else
				{
					elValue = _("cke_"+inputElement[i].id).getElementsByTagName("textarea")[0].value;
					elValue = elValue.replace(/data-cke-saved-src="[^"]*"/g, '');
				}
			}
			else
			{elValue = inputElement[i].value;}

			formdata.append(inputElement[i].name, elValue);
		}
	}


	/*get all value from select tags*/
	var inputElement = elTag("form")[formElement].getElementsByTagName("select");
	for(var i=0;i<inputElement.length;i++)
	{
		if(inputElement[i].name!=null)
		{
			elValue = inputElement[i].value;
			formdata.append(inputElement[i].name, elValue);
		}
	}

	/*alert(file.name+" | "+file.size+" | "+file.type);*/

	var ajax = new XMLHttpRequest();
	ajax.upload.addEventListener("progress", progressHandler, false);
	ajax.addEventListener("load", completeHandler, false);
	ajax.addEventListener("error", errorHandler, false);
	ajax.addEventListener("abort", abortHandler, false);
	ajax.open("POST", url);
	ajax.send(formdata);
}