function myJavascriptFunction()
{
    document.getElementById('firstname').innerHTML=document.getElementById('fname').value;
    document.getElementById('lastname').innerHTML=document.getElementById('lname').value;
    document.getElementById('d1').innerHTML=document.getElementById('designation1').value;
    document.getElementById('d2').innerHTML=document.getElementById('designation2').value;
    document.getElementById('d3').innerHTML=document.getElementById('designation3').value;
    document.getElementById('pro').innerHTML=document.getElementById('profile').value;
    document.getElementById('pn').innerHTML=document.getElementById('phone_number').value;
    document.getElementById('inbox').innerHTML=document.getElementById('email').value;
    document.getElementById('site').innerHTML=document.getElementById('website').value;
    document.getElementById('sk1').innerHTML=document.getElementById('skill1').value;
    document.getElementById('sk2').innerHTML=document.getElementById('skill2').value;
    document.getElementById('sk3').innerHTML=document.getElementById('skill3').value;
    document.getElementById('sk4').innerHTML=document.getElementById('skill4').value;
    document.getElementById('sk5').innerHTML=document.getElementById('skill5').value;
    document.getElementById('sk6').innerHTML=document.getElementById('skill6').value;
    document.getElementById('sk7').innerHTML=document.getElementById('skill7').value;
    document.getElementById('dom').innerHTML=document.getElementById('domain').value;
    document.getElementById('exp_dom_dur').innerHTML=document.getElementById('duration').value;
    document.getElementById('exp').innerHTML=document.getElementById('experience').value;
    document.getElementById('coll_edu').innerHTML=document.getElementById('college_edu').value;
    document.getElementById('coll_years').innerHTML=document.getElementById('college_years').value;
    document.getElementById('a_c').innerHTML=document.getElementById('abt_clg').value;
    document.getElementById('uni_edu').innerHTML=document.getElementById('university_edu').value;
    document.getElementById('uni_years').innerHTML=document.getElementById('university_years').value;
    document.getElementById('a_u').innerHTML=document.getElementById('abt_uni').value;
}

function hide_show(id)
{
    var x=document.getElementById(id);
    if(x.style.display=='none')
    {
        x.style.display="block";
    }
    else
    {
        x.style.display="none";
    }
}