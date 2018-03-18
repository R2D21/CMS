<?php
header("Content-Type: text/plain");
echo "FAIL";
$comment = (isset($_GET["comment"])) ? $_GET["comment"] : NULL;
if ($comment)
{
    $fd = fopen("test.txt", "x");
        if ($fd !== false)
            {
                fwrite($fd, $comment);
                fclose($fd);
            }
        else
            echo "sa bug";
    echo "OK";
}
else
{
    echo "FAIL";
}
 
?>