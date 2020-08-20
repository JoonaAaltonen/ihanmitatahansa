function valitseKieli()
{
  var kieli;
  kieli = document.getElementById('kielet').value;
  if(kieli == "eng")
  {
    document.write("Hello world");
  }
  else if (kieli == "sve")
  {
    document.write("Hej världen");
  }
  else {
    document.write("Hola mundo");
  }
}
