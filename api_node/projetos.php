$sql = "SELECT id, nome, descricao, tecnologias, link_github, ano FROM projetos  WHERE status = 'publicado' ORDER BY ano DESC, id";
$projetos = $pdo->query($sql)->fetchAll();
echo json-encode($projetos);