<!DOCTYPE html>
<html>
  <head>
    <title>Test</title>
  </head>
  <body>
    <h1>Test</h1>
    <p>This is a test.</p>

<?php
      $test = "Mohamed sbissi" ;
        echo $test;
        $maVariable = 123;
        $maVariable = false ;
        $maVariable = 3.14;
        echo $maVariable;
        $t=[2,3,4,5,6,7,8,9,10];
        print_r($t);
?> 

<br><br><br> 
<?php
    $personne =array ('Nom'=>'ali' , 'Prenom'=>'salah') ;
    print_r($personne);
    ?>
<br><br><br> 
<?php
   Define('AFFICHE','chl');
   $chl='<p>hello</p>' ;
   $ch2= '<p>bonjour</p> ' ;
   $ch3='<p>Salut </p>' ;
  ?>
<br><br><br> 
<?php
if(AFFICHE == 'ch1') {
  echo $ch1 ;
   } 
   elseif(AFFICHE == 'ch2') {
    echo $ch2 ;
     }
     elseif(AFFICHE == 'ch3') {
      echo $ch3 ;
      }    
  ?> 
   
  </body>
</html>
