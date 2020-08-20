function valitseIka()
{
  var iat;
  iat = document.getElementById('iat').value;
  if(iat == "15")
  {
    document.write("Voit ajaa polkupyörää");
  }
  else if (iat == "18")
  {
    document.write("Voit ajaa moottoripyörää");
  }
  else {
    document.write("Voit ajaa autoa");
  }
}
