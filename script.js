var t1='<div class="form-group"> <label>Team Name : </label> <input type="text"class="form-control" name="entry.1065554105" placeholder="code Hacker" id="s2" required=""></div><div class="form-group"><label>Member 1 Name:</label><input type="text"class="form-control" name="entry.284987574" placeholder="RAGU G" id="s3" required=""></div><div class="form-group"><label>Member 1 Roll No :</label><input type="text"class="form-control" name="entry.397082385" placeholder="19EER048" id="s4" required=""></div><div class="form-group"> <label>Member 1 Email Id:</label> <input type="email"class="form-control" name="entry.1874789055" placeholder="ragug.19eee@kongu.edu" id="s1"required=""> </div><div class="form-group"><label>Member 2 Name:</label><input type="text"class="form-control" name="entry.274404381" placeholder="RAGU G" id="s5" required=""></div><div class="form-group"><label>Member 2 Roll No :</label><input type="text"class="form-control" name="entry.155031358" placeholder="19EER048" id="s6" required=""></div><div class="form-group"> <label>Member 2 Email Id:</label> <input type="email"class="form-control" name="entry.2123184641" placeholder="ragug.19eee@kongu.edu" id="s1"required=""> </div><div class="form-group"><label>SECTION </label><br><select name="entry.708657212" id="select" class="form-select"  required ><option value="">Select</option><option value="A">A</option><option value="B">B</option></select></div><div class="form-group"><label>Link to join the WhatsApp Group: <a target="_blank"href="https://chat.whatsapp.com/IpDb4sUMoCEEvfrPRMsYoB">click me</a>Have joined the WhatsApp group?</label><input type="radio" name="entry.2031197795"value="Yes" required=""><label for=""> &nbsp;yes</label><br><input type="radio" name="entry.2031197795" value="No" onchange="handle(this)"><labelfor=""> &nbsp;No</label></div></div></div>'
var t2 = `<div class="form-group"><label> Name:</label><input type="text"class="form-control" name="entry.284987574" placeholder="RAGU G" id="s3" required=""></div><div class="form-group"><label>Roll No :</label><input type="text"class="form-control" name="entry.397082385" placeholder="19EER048" id="s4" required=""></div><div class="form-group"> <label> Email Id:</label> <input type="email"class="form-control" name="entry.1874789055" placeholder="ragug.19eee@kongu.edu" id="s1"required=""> </div><div class="form-group"><label>SECTION </label><br><select name="entry.708657212" id="select" class="form-select" required ><option value="">Select</option><option value="A">A</option><option value="B">B</option></select></div><div class="form-group"><label>Link to join the WhatsApp Group: <a target="_blank"href="https://chat.whatsapp.com/IpDb4sUMoCEEvfrPRMsYoB">click me</a>Have joined the WhatsApp group?</label><input type="radio" name="entry.2031197795"value="Yes" required=""><label for=""> &nbsp;yes</label><br><input type="radio" name="entry.2031197795" value="No" onchange="handle(this)"><labelfor=""> &nbsp;No</label></div></div></div>`
function callselect(){
	let yr = document.getElementById('select').value;
	if (yr =="team"){
		document.getElementById('yrss').style.display='none';
		document.getElementById('secyr').innerHTML=t1;
		document.getElementById('submit').disabled=false;
}
	else if(yr=="individual"){
		document.getElementById('yrss').style.display='none';
		document.getElementById('secyr').innerHTML=t2;
		document.getElementById('submit').disabled=false;
}
else{
	document.getElementById('yrss').style.display='block';
		document.getElementById('secyr').innerHTML='';
		document.getElementById('submit').disabled=true;
}
}


const container = document.getElementById('dialog-container');
		var bg_op=document.querySelector(".bg").style;
        const CustomAlert = new function(msg) {
            this.show = function(msg) {
                let content = document.getElementById('dialog-body');
                container.style.opacity = 1;
                content.textContent = msg;
				var hh = document.getElementById("select").value=='III'?'99%':'140%'
				container.style.top = hh;
				bg_op.opacity='30%';
            }

            this.close = function() {
				bg_op.opacity='100%';
                container.style.top = '-30%';
                container.style.opacity = 0;
            }
        }

		function handle(src) {
			// alert("Please join in the whatsapp group to get quick update about the event");
			CustomAlert.show('Please join in the whatsapp group to get quick update about the event');
			}