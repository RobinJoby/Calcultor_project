function display(val)
{
    document.getElementById("screen").value += val
}
function backspace()
{
    var text = document.getElementById("screen").value
    var newValue = text.substring(0,text.length-1)
    document.getElementById("screen").value = newValue
}
function clearScreen()
{
    document.getElementById("screen").value = ""
}
function buttonEqualTo(){
    var text = document.getElementById("screen").value
    var result = eval(text)
    document.getElementById("screen").value = result
}