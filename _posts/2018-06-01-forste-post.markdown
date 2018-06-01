---
layout: post
title:  "Første post"
date:   2018-06-01 08:21:55 +0200
categories: info jekyll prose blog
---

Dette er den første offisielle posten til nettsidene til Fagskolens Designlab, aka Designlabben. Denne nettsiden er bygget på rammeverket [Jekyll](https://jekyllrb.com/), som er en såkalt static site generator. Dvs at Jekyll genererer html, css og js-filer fra flere små biter med kode, slik at vi kan enklere håndtere og opprettholde siten. Du kan feks dele CSS'en din opp i små .scss-filer og Jekyll tar seg av resten! 

Det kule med Jekyll er at det er som laget for å kunne brukes sammen med GitHub Pages. Vet du ikke hva GitHub Pages er? Jo, det er en funksjon som GitHub har som gjør at du kan gratis(!) hoste siten din på GitHub. Den eneste forutsetningen er at siten er statisk. Du kan selvfølgelig skrive litt javascript for å spice opp sitens dynamiske innhold, men du kan feks ikke ta i bruk PHP eller lignende server-spesifik kode for å kjøre på serveren deres. GitHub Pages er rett og slett en ganske enkel server som gir deg plain HTML, CSS og JS. 

## Blogg-innlegg
Denne siten er konfigurert slik at vi kan ta i bruk verktøyet [Prose.io](https://prose.io/) for å skrive nye blogg-innlegg. Vet du ikke hva Prose.io? Da skal jeg fortelle deg.

Prose er rett og slett bare en MarkDown-editor som du med litt kode i _config.yml-fila kan konfigurere som du vil. Om du er en av de som har skrive/admin-rettigheter til dette repoet på GitHub, så kan du gå til [prose.io](https://prose.io/) og klikke deg inn på Designlabbens repo og trykke på knappen "New File". Prose lager da en ny fil i `_posts`-mappa, som da trigger at Jekyll bygger siten vår på nytt i GitHub Pages. Voila!


## Ressurser

[jekyll-docs]: https://jekyllrb.com/docs/home
[jekyll-gh]:   https://github.com/jekyll/jekyll
[jekyll-talk]: https://talk.jekyllrb.com/
