### CONFIGURANDO O GIT
 Primeiro é preciso configurar o git, adicionando o **nome** e o **email** que estão cadastrados
no GitHub
```
git config --global user.name "nome-do-github" 
git config --global user.email "email-do-github"
```
Existe um comando que "salva" sua senha, assim só é preciso digitar/logar uma vez
```
git config --global credential.helper store
```
<hr>

### CRIANDO PRIMEIRO REPOSITÓRIO E PRIMEIRO COMMIT
O seguinte passo a passo é realizado utilizando o terminal do próprio VSCode, mas é possível fazer pelo prompt de comando do windows
- Primeiramente é necessário iniciar um novo repositório 
- Depois é preciso adicionar todos os arquivos, ou apenas o que deseja commitar, para adicionar todos basta colocar apenas um "." 
- Depois, crie um commit, comentando o que foi alterado no projeto entre "aspas duplas"
- Depois é preciso renomear de master(padrão) para main(recomendado)
- Para enviar o código para o Github/remoto, é preciso copiar o link do diretório e adicione um (.git) no final
- Finalmente envie as alterações feitas, através do push
```
git init
git add .
git commit -m "Projeto criado"
git branch -M main
git push -u origin main
```
Ao fazer o passo a passo pela primeira vez será necessário logar no Github, depois disso será apenas necessário digitar os códigos no terminal

<hr>

### CLONAR REPOSITÓRIO PARA O LOCAL
basta ir no repositório que deseja clonar -> ir em code -> copiar o código presente na parte HTTPS

feito isso abre o vscode -> abra a pasta que deseja clonar o repositório -> abra o terminal e digite

```
git clone link-copiado
```
obs: ao apertar botão direito do mouse no terminal, ele cola direto o link, ou qualquer coisa que você copiar

<hr>