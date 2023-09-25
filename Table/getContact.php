<?php

include 'databaseConnect.php';

$sql = "SELECT lastName, firstName, email, contactNumber FROM contactlist";
$result = mysqli_query($connect,$sql);

while($row = mysqli_fetch_assoc($result)){
    echo "<tr>
    <td>". $row.['lastName'] ."</td>
    <td>". $row.['firstName'] ."</td>
    <td>". $row.['email'] ."</td>
    <td>". $row.['contactNumber'] ."</td>
    </tr>";
}


?>