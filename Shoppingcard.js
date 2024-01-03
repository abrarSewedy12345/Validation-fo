
var value = 0 ;
function slider()
{
    ++value;
    if(value>3)
    {
        value==0
    }
    var slid = document.getElementById('slidd');
    slid.style.marginLeft=`${-1536*value}px` ;
}