import React from 'react';
import './bootstrap.min.css'; // Importálja a CSS fájlt.
import './kavezo.css'; // Importálja a másik CSS fájlt.

function CafeAuLaitApp() {
  return (
    <html lang="hu">
      <head>
      <meta charset="utf-8">
    <title>Cafe Au Lait</title>
      </head>
      <body>
      <h1 class="cim1"><u><b>Cafe Au Lait<u></b></h1>
	<nav class="navbar navbar-expand-lg navbar-dark bg-secondary my-3">
			<div class="" id="navbarNav">
				<ul class="navbar-nav text-white">
					
					<li class="nav-item text-white">
						<a class="nav-link" href="#kavekulonlegessegek">Kávékülönlegességek</a>
					</li>
					
					<li class="nav-item text-white">
						<a class="nav-link" href="#italok">Italok</a>
					</li>
					<li class="nav-item">
						<a class="nav-link" href="#harapnivalok">Harapnivalók</a>
					</li>
					<li class="nav-item text-white">
						<a class="nav-link" href="#elerhetosegek">Elérhetőségek</a>
						
						<li class="nav-item text-white">
						<a class="nav-link" href="#nyitvatartasok">Nyitvatartások</a>
					</li>
					</li>
				</ul>
			</div>
		</nav>



<div class="container">
<div class="row">
<div class="col-md-4">
<h4 class="cim4"> <mark class="mark"><b>Kávékülönlegességek</b></mark></h4>
<ul class="nagy">
<li><b>
	Latte macchiato.......................... 750 Ft</li>
<li>Macchiato.................................... 890 Ft </li>
<li>Cappuccino.................................. 900 Ft</li>
<li>Ristretto....................................... 900 Ft</li>
<li>Tejeskávé..................................... 1000 Ft</li>
<li>Jegeskávé.................................... 1150 Ft</li>
<li>Café de olla................................. 1200 Ft</li>
<li>Ír kávé......................................... 1350 Ft</li>
<li>Galão........................................... 1400 Ft</li>
<li>Bica.............................................. 1450 Ft</li>
<li>Chai Latte.................................... 1500 Ft</li>
<li>Melange...................................... 1500 Ft</li>
<li>Csokis melange.......................... 1450 Ft</li>
<li>Latte macchiato......................... 1450 Ft</li>
<li>Ízeített latte macchiato............. 1300 Ft</li>
<li>Americano.................................. 1200 Ft</li>
<li>Hosszú kávé................................ 1050 Ft</li>
</b>
</ul>
</div>
<div class="col-md-4">
<h4 class="cim4"><mark class="mark"><b>Italok</b></mark></h4>
<ul class="nagy">
<li><b>Limonádé:........................... 1150 Ft</li></b>
<p>citrus/bodza/eper/dinnye/<br>mangó/levendula/gránátalma</p><br><br>
<li><b>Házi citromos jegestea:..... 1690 Ft</li></b><br><br>
<li><b>Üdítők(0.25l):...................... 890 Ft</li></b>
<p>Coca-cola/Coca-cola zero<br>
Fanta narancs <br>
Kinley gyömbér<br>
Kinley tonic<br>
Sprite <br>
Pepsi Max<br>
7up<br>
Sió<br>
Cappy<br>
Apenta</p>

</b>
</ul>
</div>
<div class="col-md-4">
<h4 class="cim4" <a class="harapnivalok" href="#harapnivalok"><mark class="mark"><b>Harapnivalók</font><b></a></mark></h4>
<ul class="nagy">
<li><b>Melegszendvicsek:............................. 1290 Ft</b></li>
<p>sonkás-sajtos/szalámis-sajtos/<br>pizzás-sajtos/sajtos</p>
<li><b>Lepények:.................... 2090 Ft</b></li>
<p>görög-csirkés/chilis marharagus/<br>parajos-fetás/paradicsomos-mozzarellás</p><br><br>
<li><b>Sütemények:......................... 1250 Ft</b></li>
<p>Gyümölcsös túrókrém tortaszelet<br>
Csokoládémousse tortaszelet<br>
Oreo tortaszelet<br>
Sós karamell tortaszelet<br>
Dobos tortaszelet<br>
Sacher tortaszelet<br>
Házi krémes<br><br></p>
<li><b>Sajtos pogácsa(10dkg)................... 890 Ft</b></li>
<li><b>Nachos........................ 1350 Ft</b></li>
<p>sajt/salsa szósszal</p>
<p>Ha megkívántad mi ki is visszük <a href="https://www.foodpanda.hu/"target="_blank"><button type="button" style="font: bold 14px Arial;">Katt ide</button><br /></a></p>
</ul>
</div>





<h4 a id="elerhetosegek" href="elerhetosegek"><mark class="mark"><b>Elérhetőségek</b></a></mark></h4>
	<img src="eler.jpg" alt="Elérhetőség" title="Elérhetőség" class="img-thumbnail">	
		<div class="text"> <b>E-mail:</b> dafelau.lait.gmail.com<br> <b>Telefon:</b>06 20 222 22  <br><b>Cím:</b> 9700,Szombathely Kaffé utca 4.</div>


</div>

<div class="row">
<div class="col-md-4"></div>

<p id="demo"></p>
<div>

<h4 a id="nyitvatartasok" href="nyitvatartasok"><mark class="mark"><b>Nyitvatartások</b></mark></h4></a><table border=1> <tr> <td> Hétfő</td> <td>10:00-20:00</td> <tr> <td>Kedd</td> <td>10:00-20:00</td> </tr> <tr> <td>Szerda</td> <td>10:00-20:00</td> </tr> <tr><td>Csütörtök</td> <td>10:00-20:00</td> </tr> <tr> <td>Péntek</td> <td>10:00-20:00</td> </tr> <tr> <td>Szombat</td> <td>10:00-20:00</td> </tr> <tr> <td>Vasárnap</td> <td colspan=8>zárva</td>  </tr>
</div>
  


</div>

</div>
      </body>
    </html>
  );
}

export default CafeAuLaitApp;
