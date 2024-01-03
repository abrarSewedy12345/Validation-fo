
var newAccount = [{user_name:"abc",Pass_word:"abc"}];

function Add()
{
var containletters = /[A-z]/;
var containdigites = /[0-9]/;
var containchars = /[~!@#$%^&*()_{}:"?><]/;

var UserrName=document.getElementById('UserrName');
var Pasword =document.getElementById('Pasword');

    
    for (var i=0;i<newAccount.length;i++)
{
    if (newAccount[i].user_name!==UserrName.value)
    {
        if (UserrName!=="" && Pasword!=="")
        {
        console.log(newAccount);

        if(containletters.test(Pasword)&&containdigites.test(Pasword)&&containchars.test(Pasword)) 
        {
            newAccount.user_name=UserrName.value ;
            newAccount.Pass_word=Pasword.value;
            alert('Data Saved') ;
            return true ;
        }
        else
        {
            alert('Error') ;
            return false ;
        }

    }
    else
        {
            alert('name Error') ;
            return false ;
        }
 }
}
}


function checkuser()
{
    for(i=0;i<newAccount.length;i++)
    {
        if (newAccount[i].user_name==UserrName.value && newAccount[i].Pass_word==Pasword.value)
        {
            alert('login cuss');
            return true ;
        }
        else 
        {
            alert('login falied ');
            return false ;
        }
    }
  
}


var reseat = [];
function reseat_pass ()
{
    var UserrName=document.getElementById('UserrName').value;
    var Pasword =document.getElementById('Pasword').value;

    var found = false ;
    for(i=0;i<reseat.length;i++)
    {
        if(newAccount[i].user_name==UserrName.value)
        {
            newAccount[i].Pass_word=Pasword.value;
            found =true ;
            return true ;
            alert ('password has changed') ;
        }
        else
        {
            return false ;
            alert ('Invalied User Name') ;
        }
    }
}
/**function checkData ()
{
    var username =document.getElementById('UserrName')[0].value;
    var password = document.getElementById('Pasword')[0].value;
    if(username==username_data&&password==pass_data)
    {
        alert("Login compeleted") ;
        return true;
    }
    else
    {
        alert("invaild Email or password");
        return false ;
    }
} */