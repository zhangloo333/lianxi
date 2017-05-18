/**
 * Created by leizha on 5/18/17.
 */
function getElementsByAttribute(attribute){
    var allElements = document.getElementsByTagName('*'),
        elm,
        found=[];
    for (var i = 0; i < allElements.length; i++)
    {
        elm = allElements[i];
        if (elm.className == attribute)
        {
            found.push(elm);
        }
    }
    return found;
}


function getElementsByAttribute(attribute){
    var allElements = document.getElementsByTagName('*'),
        elm,
        found=[];
    for (var i = 0; i < allElements.length; i++)
    {
        elm = allElements[i];
        if (elm.getAttribute(attribute))
        {
            found.push(elm);
        }
    }
    return found;
}