<template>
  <ul class="jp_map">
    <li><a href="https://stopcovid19.hokkaido.dev/" target="_blank">{{ $t('hokkaido') }}</a></li>
    <li><a href="https://covid19.codeforaomori.org/" target="_blank">{{ $t('aomori') }}</a></li>
    <li><a href="https://iwate.stopcovid19.jp/" target="_blank">{{ $t('iwate') }}</a></li>
    <li><a href="https://miyagi.stopcovid19.jp/" target="_blank">{{ $t('miyagi') }}</a></li>
    <li><a target="_blank">{{ $t('akita') }}</a></li>
    <li><a href='https://stopcovid19-yamagata.netlify.com/' target="_blank">{{ $t('yamagata') }}</a></li>
    <li><a href="https://fukushima-covid19.firebaseapp.com/" target="_blank">{{ $t('hukushima') }}</a></li>
    <li><a href="https://covid19-ibaraki.netlify.com/" target="_blank">{{ $t('ibaraki') }}</a></li>
    <li><a href="https://covid19-tochigi.netlify.com/" target="_blank">{{ $t('tochigi') }}</a></li>
    <li><a href="https://stopcovid19-gunma.netlify.com/" target="_blank">{{ $t('gumma') }}</a></li>
    <li><a href="https://saitama.stopcovid19.jp/" target="_blank">{{ $t('saitama') }}</a></li>
    <li><a href="https://chiba-covid19.mypl.net/" target="_blank">{{ $t('chiba') }}</a></li>
    <li><a href="https://stopcovid19.metro.tokyo.lg.jp/" target="_blank">{{ $t('tokyo') }}</a></li>
    <li><a href="https://www.pref.kanagawa.jp/osirase/1369/" target="_blank">{{ $t('kanagawa') }}</a></li>
    <li><a href="https://niigata.stopcovid19.jp/" target="_blank">{{ $t('nigata') }}</a></li>
    <li><a target="_blank">{{ $t('toyama') }}</a></li>
    <li><a href="https://ishikawa-covid19.netlify.com/" target="_blank">{{ $t('ishikawa') }}</a></li>
    <li><a href="https://covid19-fukui.bosai-signal.jp/" target="_blank">{{ $t('hukui') }}</a></li>
    <li><a href="https://stopcovid19.yamanashi.dev/" target="_blank">{{ $t('yamanashi') }}</a></li>
    <li><a href="https://stop-covid19-nagano.netlify.com/" target="_blank">{{ $t('nagano') }}</a></li>
    <li><a href="https://covid19-gifu.netlify.com/" target="_blank">{{ $t('gifu') }}</a></li>
    <li><a target="_blank">{{ $t('shizuoka') }}</a></li>
    <li><a href="https://stopcovid19.code4.nagoya/" target="_blank">{{ $t('aichi') }}</a></li>
    <li><a href="https://mie.stopcovid19.jp/" target="_blank">{{ $t('mie') }}</a></li>
    <li><a href="https://stopcovid19.pref.shiga.jp/" target="_blank">{{ $t('shiga') }}</a></li>
    <li><a href="https://stopcovid19-kyoto.netlify.com/" target="_blank">{{ $t('kyoto') }}</a></li>
    <li><a href="https://covid19-osaka.info/" target="_blank">{{ $t('osaka') }}</a></li>
    <li><a href="https://stop-covid19-hyogo.org/" target="_blank">{{ $t('hyogo') }}</a></li>
    <li><a href="https://stopcovid19.code4nara.org/" target="_blank">{{ $t('nara') }}</a></li>
    <li><a target="_blank">{{ $t('wakayama') }}</a></li>
    <li><a target="_blank">{{ $t('tottori') }}</a></li>
    <li><a href='https://shimane-covid19.netlify.com/' target="_blank">{{ $t('shimane') }}</a></li>
    <li><a href="https://okayama.stopcovid19.jp/" target="_blank">{{ $t('okayama') }}</a></li>
    <li><a href="https://covid19-hiroshima.netlify.com/" target="_blank">{{ $t('hiroshima') }}</a></li>
    <li><a href="https://covid19-yamaguchi.netlify.com/" target="_blank">{{ $t('yamaguchi') }}</a></li>
    <li><a target="_blank">{{ $t('tokushima') }}</a></li>
    <li><a href="https://covid19-kagawa.netlify.com/" target="_blank">{{ $t('kagawa') }}</a></li>
    <li><a href="https://ehime-covid19.com/" target="_blank">{{ $t('ehime') }}</a></li>
    <li><a href="https://covid19-kochi.netlify.com/" target="_blank">{{ $t('kochi') }}</a></li>
    <li><a href="https://stopcovid19.codeforfukuoka.org/" target="_blank">{{ $t('hukuoka') }}</a></li>
    <li><a target="_blank">{{ $t('saga') }}</a></li>
    <li><a href="https://stopcovid19-nagasaki.netlify.com/" target="_blank">{{ $t('nagasaki') }}</a></li>
    <li><a href="https://kumamoto.stopcovid19.jp/" target="_blank">{{ $t('kumamoto') }}</a></li>
    <li><a href="https://oita.stopcovid19.jp/" target="_blank">{{ $t('oita') }}</a></li>
    <li><a href="https://covid19-miyazaki.netlify.com/" target="_blank">{{ $t('miyazaki') }}</a></li>
    <li><a href="https://covid19.codeforkagoshima.dev/" target="_blank">{{ $t('kagoshima') }}</a></li>
    <li><a target="_blank">{{ $t('okinawa') }}</a></li>
  </ul>
</template>
<style>
.JapanMap {
  /* height: 85vh; */
}

ul.jp_map {
  position: relative;
  list-style-type: none;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

ul.jp_map a {
  color: #000;
  text-shadow: #fff 2px 0px,
  #fff -2px 0px,
  #fff 0px -2px,
  #fff 0px 2px,
  #fff 2px 2px,
  #fff -2px 2px,
  #fff 2px -2px,
  #fff -2px -2px,
  #fff 1px 2px,
  #fff -1px 2px,
  #fff 1px -2px,
  #fff -1px -2px,
  #fff 2px 1px,
  #fff -2px 1px,
  #fff 2px -1px,
  #fff -2px -1px;
  text-decoration:none;
}

.jp_map li a {
  box-sizing: border-box;
  width: calc(50% - 6px);
  float: left;
  padding: 7px 0;
  border-radius: 10px;
  text-align: center;
  margin: 3px;
}

.jp_map li a:hover {
  text-decoration: none;
  opacity: 0.8;
}

.jp_map li:nth-child(1) a {
  background-color: #0083F5;
}

.jp_map li:nth-child(2) a {
  background-color: #94C012;
}

.jp_map li:nth-child(3) a {
  background-color: #005C00;
}

.jp_map li:nth-child(4) a {
  background-color: #32653A;
}

.jp_map li:nth-child(5) a {
  background-color: #DDDDDD;
}

.jp_map li:nth-child(6) a {
  background-color: #63DC76;
}

.jp_map li:nth-child(7) a {
  background-color: #22B573;
}

.jp_map li:nth-child(8) a {
  background-color: #113E9A;
}

.jp_map li:nth-child(9) a {
  background-color: #00A040;
}

.jp_map li:nth-child(10) a {
  background-color: #019900;
}

.jp_map li:nth-child(11) a {
  background-color: #97C511;
}

.jp_map li:nth-child(12) a {
  background-color: #026DB8;
}

.jp_map li:nth-child(13) a {
  background-color: #00A03F;
}

.jp_map li:nth-child(14) a {
  background-color: #187FC3;
}

.jp_map li:nth-child(15) a {
  background-color: #065AA5;
}

.jp_map li:nth-child(16) a {
  background-color: #DDDDDD;
}

.jp_map li:nth-child(17) a {
  background-color: #00A03F;
}

.jp_map li:nth-child(18) a {
  background-color: #11AE67;
}

.jp_map li:nth-child(19) a {
  background-color: #694E84;
}

.jp_map li:nth-child(20) a {
  height: 20%;
  background-color: #85C300;
}

.jp_map li:nth-child(21) a {
  background-color: #7AC3DD;
}

.jp_map li:nth-child(22) a {
  background-color: #DDDDDD;
}

.jp_map li:nth-child(23) a {
  background-color: #A83945;
}

.jp_map li:nth-child(24) a {
  background-color: #FF4F00;
}

.jp_map li:nth-child(25) a {
  background-color: #00B7FF;
}

.jp_map li:nth-child(26) a {
  background-color: #008549;
}

.jp_map li:nth-child(27) a {
  background-color: #1E219A;
}

.jp_map li:nth-child(28) a {
  height: 20%;
  background-color: #00A0C7;
}

.jp_map li:nth-child(29) a {
  background-color: #7B3551;
}

.jp_map li:nth-child(30) a {
  background-color: #DDDDDD;
}

.jp_map li:nth-child(31) a {
  background-color: #DDDDDD;
}

.jp_map li:nth-child(32) a {
  background-color: #92C3DC;
}

.jp_map li:nth-child(33) a {
  background-color: #EB4079;
}

.jp_map li:nth-child(34) a {
  background-color: #992F3B;
}

.jp_map li:nth-child(35) a {
  background-color: #13B840;
}

.jp_map li:nth-child(36) a {
  background-color: #DDDDDD;
}

.jp_map li:nth-child(37) a {
  background-color: #25A69A;
}

.jp_map li:nth-child(38) a {
  background-color: #FA8900;
}

.jp_map li:nth-child(39) a {
  background-color: #F44335;
}

.jp_map li:nth-child(40) a {
  background-color: #2F2A60;
}

.jp_map li:nth-child(41) a {
  background-color: #DDDDDD;
}

.jp_map li:nth-child(42) a {
  background-color: #8C2943;
}

.jp_map li:nth-child(43) a {
  background-color: #A4292C;
}

.jp_map li:nth-child(44) a {
  background-color: #009A01;
}

.jp_map li:nth-child(45) a {
  background-color: #FABD02;
}

.jp_map li:nth-child(46) a {
  background-color: #E5752A;
}

.jp_map li:nth-child(47) a {
  background-color: #DDDDDD;
}

@media screen and (min-width: 768px) {
  ul.jp_map {
    padding: 84% 0 0;
  }
  .jp_map li a {
    width: 7%;
    height: 10%;
    border: solid #ffffff 2px;
    box-sizing: border-box;
    padding: 2px 2px;
    float: none;
    font-size: 12px;
    margin: 0;
    word-break: break-all;
  }
  .jp_map li a:hover {
    text-decoration: none;
    opacity: 0.8;
  }
  .jp_map li:nth-child(1) a {
    position: absolute;
    top: 0;
    left: 85%;
    width: 15%;
    background-color: #0083F5;
  }

  .jp_map li:nth-child(2) a {
    position: absolute;
    top: 11%;
    left: 85%;
    width: 14%;
    height: 5.5%;
    background-color: #94C012;

  }

  .jp_map li:nth-child(3) a {
    position: absolute;
    top: 16.5%;
    left: 92%;
    background-color: #005C00;
  }

  .jp_map li:nth-child(4) a {
    position: absolute;
    top: 26.5%;
    left: 92%;
    background-color: #32653A;
  }

  .jp_map li:nth-child(5) a {
    position: absolute;
    top: 16.5%;
    left: 85%;
    background-color: #DDDDDD;
  }

  .jp_map li:nth-child(6) a {
    position: absolute;
    top: 26.5%;
    left: 85%;
    background-color: #63DC76;
  }

  .jp_map li:nth-child(7) a {
    position: absolute;
    top: 36.5%;
    left: 92%;
    background-color: #22B573;
  }

  .jp_map li:nth-child(8) a {
    position: absolute;
    top: 46.5%;
    left: 92%;
    background-color: #113E9A;
  }

  .jp_map li:nth-child(9) a {
    position: absolute;
    top: 46.5%;
    left: 85%;
    background-color: #00A040;
  }

  .jp_map li:nth-child(10) a {
    position: absolute;
    top: 46.5%;
    left: 78%;
    background-color: #019900;
  }

  .jp_map li:nth-child(11) a {
    position: absolute;
    top: 56.5%;
    left: 85%;
    background-color: #97C511;
  }

  .jp_map li:nth-child(12) a {
    position: absolute;
    top: 56.5%;
    left: 92%;
    background-color: #026DB8;
  }

  .jp_map li:nth-child(13) a {
    left: 85%;
    position: absolute;
    top: 66.5%;
    background-color: #00A03F;
  }

  .jp_map li:nth-child(14) a {
    left: 78%;
    position: absolute;
    top: 66.5%;
    background-color: #187FC3;
  }

  .jp_map li:nth-child(15) a {
    position: absolute;
    top: 36.5%;
    left: 78%;
    width: 14%;
    background-color: #065AA5;
  }

  .jp_map li:nth-child(16) a {
    position: absolute;
    top: 36.5%;
    left: 71%;
    background-color: #DDDDDD;
  }

  .jp_map li:nth-child(17) a {
    position: absolute;
    top: 36.5%;
    left: 64%;
    background-color: #00A03F;
  }

  .jp_map li:nth-child(18) a {
    left: 64%;
    position: absolute;
    top: 46.5%;
    background-color: #11AE67;
  }

  .jp_map li:nth-child(19) a {
    position: absolute;
    top: 56.5%;
    left: 78%;
    background-color: #694E84;
  }

  .jp_map li:nth-child(20) a {
    left: 71%;
    position: absolute;
    top: 46.5%;
    height: 20%;
    background-color: #85C300;
  }

  .jp_map li:nth-child(21) a {
    left: 64%;
    position: absolute;
    top: 56.5%;
    background-color: #7AC3DD;
  }

  .jp_map li:nth-child(22) a {
    left: 71%;
    position: absolute;
    top: 66.5%;
    background-color: #DDDDDD;
  }

  .jp_map li:nth-child(23) a {
    left: 64%;
    position: absolute;
    top: 66.5%;
    background-color: #A83945;
  }

  .jp_map li:nth-child(24) a {
    left: 57%;
    position: absolute;
    top: 66.5%;
    background-color: #FF4F00;
  }

  .jp_map li:nth-child(25) a {
    left: 57%;
    position: absolute;
    top: 46.5%;
    background-color: #00B7FF;
  }

  .jp_map li:nth-child(26) a {
    left: 50%;
    position: absolute;
    top: 46.5%;
    background-color: #008549;
  }

  .jp_map li:nth-child(27) a {
    left: 50%;
    position: absolute;
    top: 56.5%;
    background-color: #1E219A;
  }

  .jp_map li:nth-child(28) a {
    left: 43%;
    position: absolute;
    top: 46.5%;
    height: 20%;
    background-color: #00A0C7;
  }

  .jp_map li:nth-child(29) a {
    left: 57%;
    position: absolute;
    top: 56.5%;
    background-color: #7B3551;
  }

  .jp_map li:nth-child(30) a {
    left: 50%;
    position: absolute;
    top: 66.5%;
    background-color: #DDDDDD;
  }

  .jp_map li:nth-child(31) a {
    left: 36%;
    position: absolute;
    top: 46.5%;
    background-color: #DDDDDD;
  }

  .jp_map li:nth-child(32) a {
    left: 29%;
    position: absolute;
    top: 46.5%;
    background-color: #92C3DC;
  }

  .jp_map li:nth-child(33) a {
    left: 36%;
    position: absolute;
    top: 56.5%;
    background-color: #EB4079;
  }

  .jp_map li:nth-child(34) a {
    left: 29%;
    position: absolute;
    top: 56.5%;
    background-color: #992F3B;
  }

  .jp_map li:nth-child(35) a {
    left: 22%;
    position: absolute;
    top: 51.5%;
    background-color: #13B840;
  }

  .jp_map li:nth-child(36) a {
    left: 36%;
    position: absolute;
    top: 78.5%;
    background-color: #DDDDDD;
  }

  .jp_map li:nth-child(37) a {
    left: 36%;
    position: absolute;
    top: 68.5%;
    background-color: #25A69A;
  }

  .jp_map li:nth-child(38) a {
    left: 29%;
    position: absolute;
    top: 68.5%;
    background-color: #FA8900;
  }

  .jp_map li:nth-child(39) a {
    left: 29%;
    position: absolute;
    top: 78.5%;
    background-color: #F44335;
  }

  .jp_map li:nth-child(40) a {
    left: 14%;
    position: absolute;
    top: 46.5%;
    background-color: #2F2A60;
  }

  .jp_map li:nth-child(41) a {
    left: 7%;
    position: absolute;
    top: 46.5%;
    background-color: #DDDDDD;
  }

  .jp_map li:nth-child(42) a {
    left: 0;
    position: absolute;
    top: 46.5%;
    background-color: #8C2943;
  }

  .jp_map li:nth-child(43) a {
    left: 7%;
    position: absolute;
    top: 56.5%;
    background-color: #A4292C;
  }

  .jp_map li:nth-child(44) a {
    left: 14%;
    position: absolute;
    top: 56.5%;
    background-color: #009A01;
  }

  .jp_map li:nth-child(45) a {
    left: 14%;
    position: absolute;
    top: 66.5%;
    background-color: #FABD02;
  }

  .jp_map li:nth-child(46) a {
    left: 7%;
    position: absolute;
    top: 66.5%;
    background-color: #E5752A;
  }

  .jp_map li:nth-child(47) a {
    left: 0;
    position: absolute;
    top: 76.5%;
    background-color: #DDDDDD;
  }
}
</style>
