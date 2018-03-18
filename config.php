<?php
if (isset($_POST['configuration']) && $_POST['configuration'] == 'Configuration') {
    // on teste l'existence de nos variables. On teste également si elles ne sont pas vides
    if ((isset($_POST['login']) && !empty($_POST['login'])) && (isset($_POST['pass']) && !empty($_POST['pass'])) && (isset($_POST['bdd']) && !empty($_POST['bdd'])) && (isset($_POST['server']) && !empty($_POST['server'])) )
    {
      include('fonctions/functions.php');
      $bdd = connect($_POST['login'], $_POST['pass'], $_POST['bdd'], $_POST['server']);
      $req = $bdd->prepare('INSERT INTO membre(login, pass,bdd,server) VALUES(:login, :pass,:date_inscription,:date_connec, :email,:avatar)');
      $req->execute(array(
        'login' => $_POST['login'],
        'pass' => crypt($_POST['pass'],'bo81re47la96ni20oc07da12hi20'),
        'date_inscription' => date('ymd'),
        'date_connec' => date('ymd'),
        'email' => $_POST['email'],
        'avatar' => $_POST['avatar']
      ));
      // Faut créer une fonction qui écrit les paramètres de configuration.
    }
}
else {
  echo "string";
}
?>
<html>
<head>
<title>Configuration</title>
</head>
    <body>
    configuration du CMS :<br />
    <form action="config.php" method="post">
    Login : <input type="text" name="login" value="<?php if (isset($_POST['login'])) echo htmlentities(trim($_POST['login'])); ?>"><br />
    Mot de passe : <input type="password" name="pass" value="<?php if (isset($_POST['pass'])) echo htmlentities(trim($_POST['pass'])); ?>"><br />
    Nom de la base de donnée : <input type="text" name="bdd" value="<?php if (isset($_POST['bdd'])) echo htmlentities(trim($_POST['\
bdd'])); ?>"><br />
    server : <input type="text" name="server" value="<?php if (isset($_POST['server'])) echo htmlentities(trim($_POST['server'])); ?>"><br />
      <input type="submit" name="configuration" value="Configuration">
    </form>
    <?php
    if (isset($erreur)) echo '<br />',$erreur;
    ?>
    </body>
    </html>
