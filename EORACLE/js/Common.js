//Global Attributes
var activeTabStyle = "background-color: #c02;border-bottom: 1.5px solid #ff1a25;";
var deactivateTabStyle = "background-color:black;1.5px solid #ff1a25;";
var currTab = "";
var slideIndex = 0;

$(document).ready(function(){
  $("#flip1").click(function(){
    $("#panel1").slideToggle("slow");
  });
  $("#flip2").click(function(){
    $("#panel2").slideToggle("slow");
  });
  $("#flip3").click(function(){
    $("#panel3").slideToggle("slow");
  });
  $("#flip4").click(function(){
    $("#panel4").slideToggle("slow");
  });
  
  $("#flip11").click(function(){
    $("#panel11").slideToggle("slow");
  });
   $("#flip12").click(function(){
    $("#panel12").slideToggle("slow");
  });
   $("#flip13").click(function(){
    $("#panel13").slideToggle("slow");
  });
   $("#flip14").click(function(){
    $("#panel14").slideToggle("slow");
  });
   $("#flip15").click(function(){
    $("#panel15").slideToggle("slow");
  });
   $("#flip16").click(function(){
    $("#panel16").slideToggle("slow");
  });
  
  
  $('#panel1,#panel2,#panel3,#panel4,#panel11,#panel12,#panel13,#panel14,#panel15,#panel16').slideUp();

  
});




function loadTab(obj,masterTab){
	hideLayouts();
	if(currTab == ""){
		if(document.getElementById("useri").value != "admin"){
			var homeTab = document.getElementById("delNav");
			homeTab.setAttribute("style", deactivateTabStyle);
			currTab = obj;
		}else{
			var homeTab = document.getElementById("homeNav");
			homeTab.setAttribute("style", deactivateTabStyle);
			currTab = obj;
		}
		
	}else{
		currTab.setAttribute("style", deactivateTabStyle);
		currTab = obj;
	}
	
	
	obj.setAttribute("style", activeTabStyle);
	document.getElementById(masterTab).style.display="block";
}



function hideLayouts(){
	document.getElementById("homeMasterDiv").style.display="none";
	document.getElementById("monitorMasterDiv").style.display="none";
	document.getElementById("systemMasterDiv").style.display="none";
	document.getElementById("commsMasterDiv").style.display="none";
	document.getElementById("userMasterDiv").style.display="none";
	document.getElementById("serviceMasterDiv").style.display="none";
	document.getElementById("factoryMasterDiv").style.display="none";
	
	document.getElementById("delMasterDiv").style.display="none";
	document.getElementById("milestoneMasterDiv").style.display="none";
	document.getElementById("deliverMasterDiv").style.display="none";
	
}


function editUserData(obj){
	//obj.parentElement.parentElement.cells[1].firstElementChild.style.backgroundColor="#ffffbd";
	obj.parentElement.parentElement.cells[1].firstElementChild.style.border="0.5px solid #d3d3d3";
	obj.parentElement.parentElement.cells[1].firstElementChild.contentEditable="true";
	obj.parentElement.parentElement.cells[2].firstElementChild.classList.remove("disable");
	obj.parentElement.parentElement.cells[2].firstElementChild.setAttribute("onmousedown","")
}

function preventNewLine(e){
    if (window.event.keyCode != 13 ) return false;
	window.event.preventDefault();
	e.innerText = e.innerText.trim();
	
}

function addNewUser(){
	  var xTable=document.getElementById('userListTab');
	  var sno = document.getElementById('userListTab').rows.length + 1;
      var tr=document.createElement('tr');
      tr.innerHTML ='<td class="snoUserInnertd">'+sno+'</td><td class="usernameUserInnertd"><div class="userNameDiv" onkeydown="preventNewLine(this)" contenteditable="true" style="border: 0.5px solid rgb(211, 211, 211);"></div></td><td class="roleUserInnertd"><select class="med_dropdown" onmousedown=""><option>Read</option><option>Read/Write</option><option>Admin</option></select></td><td class="editbutUserInnertd"></td>'
      xTable.appendChild(tr);
}

function loginPS(){
	showInfoBox("Logged in Successfully !!");
	document.getElementById("logoutdiv").style.display="";
	if(document.getElementById("useri").value != "admin"){
		document.getElementsByClassName("centeredMainLayoutTabsOuter1")[0].style.display="";
		document.getElementsByClassName("centeredMainLayout")[0].style.display="";
		document.getElementsByClassName("centeredLoginMainLayout")[0].style.display="none";
		document.getElementById('delNav').click();
	}else{
		document.getElementsByClassName("centeredMainLayoutTabsOuter")[0].style.display="";
		document.getElementsByClassName("centeredMainLayout")[0].style.display="";
		document.getElementsByClassName("centeredLoginMainLayout")[0].style.display="none";
		document.getElementById('homeNav').click();
	}
	
}

function showInfoBox(info){
	document.getElementById("infoboxtxt").innerText=info;
	document.getElementById("infoBox").style.display="block";
	document.getElementById("infoBox").style.opacity="1";
	setTimeout(function(){document.getElementById("infoBox").style.opacity="0.6";setTimeout(function(){document.getElementById("infoBox").style.display="none";},3000);},3000);
	
}

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 3000); // Change image every 2 seconds
}

function broadcast(){
	setTimeout(a1, 1000);
	
	
	
	
}

function a1(){
	document.getElementById("a1").style.fontSize="35px";
	document.getElementById("a1").style.color="#e60027";
	document.getElementById("a1").style.fontWeight="bolder";
	setTimeout(a2, 1000);
	
}

function a2(){
	/*font-size: 35px;
    color: #e60027;
    font-weight: bolder;*/
	document.getElementById("a2").style.fontSize="35px";
	document.getElementById("a2").style.color="#e60027";
	document.getElementById("a2").style.fontWeight="bolder";
	setTimeout(a3, 1000);
	
}

function a3(){
	/*font-size: 35px;
    color: #e60027;
    font-weight: bolder;*/
	document.getElementById("a3").style.fontSize="35px";
	document.getElementById("a3").style.color="#e60027";
	document.getElementById("a3").style.fontWeight="bolder";
	setTimeout(a4, 1000);
	
}

function a4(){
	/*font-size: 35px;
    color: #e60027;
    font-weight: bolder;*/
	document.getElementById("a4").style.fontSize="35px";
	document.getElementById("a4").style.color="#e60027";
	document.getElementById("a4").style.fontWeight="bolder";
	setTimeout(function() { alert("Deliverables Broadcasted !"); }, 1000);
	
}

function submitMilestone(str){
		showInfoBox("Mail notification is sent !");
		document.getElementById(str).style.backgroundColor='#5fc792';
}

function startMilestone(str){
	showInfoBox("Milestone started !");
	document.getElementById(str).style.backgroundColor='#ff964b';
}

function deliverMilestone(){
	showInfoBox("Completion Status Notified !");
}