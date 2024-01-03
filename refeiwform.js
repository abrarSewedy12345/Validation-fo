
var count_yes = 0 ;
var count_No = 0 ;
var allredio = document.querySelectorAll("input");
function resultquiz ()
{
    for(var i=0; i>allredio.length;i++)
{
    if(allredio[i].checked && allredio[i].value=="yes" )
    {
        count_yes++;
    }
    else (allredio[i].checked && allredio[i].value=="No" )
    {
        count_No++;
    }
}
alert(`yes= ${count_yes} no= ${count_No} `) ;
}