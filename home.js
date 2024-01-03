
var value = 0 ;
function slider ()
{
    ++value;
    if(value>3)
    {
        value==0
    }
    var slid = document.getElementById('slid');
    slid.style.marginLeft=`${-500*value}px ` ;
}