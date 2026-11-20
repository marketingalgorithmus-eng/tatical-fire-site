# Tatical Fire — Site

Site institucional + plataforma do aluno da **Tatical Fire · Instrutor Cláudio** (Armamento e Tiro, Xanxerê - SC).

## Páginas
- `site/index.html` — Início
- `site/cursos.html` — Cursos (vitrine estilo streaming + catálogo com avaliações)
- `site/sobre.html` — Quem Somos
- `site/contato.html` — Contato
- `site/cadastro.html` — Cadastro de alunos e associados
- `site/aluno.html` — Área do Aluno (demonstração)

## Rodar localmente
```powershell
python -m http.server 5173 --directory site
```
Abra http://localhost:5173

## Conteúdo de exemplo a substituir
- WhatsApp: `site/assets/js/main.js` (`WHATS`)
- Cursos, avaliações e preços: `site/assets/js/data.js`
- Números, depoimentos e valores de planos nas páginas
