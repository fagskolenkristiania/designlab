# Fagskolens Designlab-nettsider

Denne siten tar i bruk [GitHub Pages](https://pages.github.com/) og [Jekyll](https://jekyllrb.com/). For å kjøre siten lokalt gjør følgende:

```
$ gem install bundler jekyll
$ bundle exec jekyll serve
```

Det skal nå være tilgjengelig i port `:4000/`

## Plugins / tredjeparts tjenester
For å ikke finne opp hjulet på nytt tar vi i bruk et par tredjeparts-løsninger:

### Medium
Vi bruker Medium som blogg-platform og henter dynamisk inn alle posts som gjøres fra [@designlabben](https://medium.com/@designlabben)-kontoen. Dette gjøres ved hjelp av javascript og mellomleddet [RSS-to-JSON](https://www.clay.run/services/nicoslepicos/rss-to-json) for å parse RSS til JSON.

### Facebook-events
Vi bruker Facebook-events som hovedkilde til event-håndtering. Alle events fra [Designlabben-siden](https://www.facebook.com/designlabben/) blir ved hjelp av [SociableKit](https://www.sociablekit.com/) importert på /events-siden. 

