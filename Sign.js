
var newAccount = [{user_name:"abc",Pass_word:"abc"}];

function Add()
{
var containletters = /[A-z]/;
var containdigites = /[0-9]/;
var containchars = /[~!@#$%^&*()_{}:"?><]/;

var UserrName=document.getElementById('UserrName');
var Pasword =document.getElementById('Pasword');
var Age =document.getElementById('Age');
var phone =document.getElementById('Phone');

for (var i=0;i<newAccount.length;i++)
{
    if (UserrName!=="" && Pasword!=="")
    {
        if(Age>18 && Age<60)
        {
            if(phone.length==11)
            {
                if (newAccount[i].user_name!==UserrName.value)
                {
                    if(containletters.test(Pasword)&&containdigites.test(Pasword)&&containchars.test(Pasword)) 
                    {
                        /*newAccount.user_name=UserrName.value ;
                        newAccount.Pass_word=Pasword.value;*/
            
                        var input ={us_name : user_name , passs:Pasword };
                        input.push(newAccount);
                        alert('Data Saved') ;
                        return true ;
                    }
                    else
                    {
                        alert('Error') ;
                        return false ;
                    }
                }
            }
            else
            {
                alert('Your Age muxt be 11 number') ;
                return false ;
            }
        }
        else
        {
            alert('Your Age muxt be beween 18 and 60') ;
            return false ;
        }
    }
    else
    {
        alert('name or pass is null') ;
        return false ;
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
/**function check ()
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
}

function isStrong (Password)
{
    var containalpha =/[A-Za-z]/;
    var containdigit = /[0-9]/;
    var containchar = /[~!@#$%^&*(){}]/ ;

    if(!Password.match(containalpha))
    {
        alert('Password must contain alphabets');
        return false ;
    }
    if(!Password.match(containdigit))
    {
        alert('Password must contain 1 number atleast');
        return false ;
    }
    if(!Password.match(containchar))
    {
        alert('Password must contain Char');
        return false;
    }
    else
    {
        return true;
    }
}
function pass (event)
{
    var name = document.getElementById('UserName').value;
    var Password = document.getElementById ('Password').value;
  

    if (name!== ""  && Password!== "")
    {
    }
    else
    {
        alert('Fieldes must not be empety !');
        return false ;
    }

}
*/