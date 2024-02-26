<?php

class EmployeC {

    function show($employe) {

        echo '
        <table border="1">
        <tr>
        <td>lastname</td>
        <td>firstname</td>
        <td>password</td>
        
        </tr>
        <tr>
        <td>'. $employe->getLastName() .'</td>
        <td>'. $employe->getFirstName() .'</td>
        <td>'. $employe->getPassword() .'</td>
        </tr>
        </table>
        ';
    }
}



?>