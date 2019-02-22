# read json and yml from _data folder
# {% for article in site.data.feed.articles %}
#	{% include {{ article.ankeiler }} text=article.title image=article.image modifier=article.modifier id=article.id reactions=article.comments time=article.time %}
# {% endfor %}


# Starter Project

Dit starter project bevat volledige setup voor Jekyll, Gulp, SASS en BrowserSync

**Breng geen wijzigingen aan aan dit project. Het dient enkel als starter pakket!** 



## Allereerste opzet
Onderstaande beschrijft de werkwijze en tools die nodig zijn om deze opzet optimaal te gebruiken.
Dit dient eenmalig te gebeuren.

1. [NodeJS](http://nodejs.org) - gebruik de installer.
2. [MAMP](https://www.mamp.info) - gebruik de installer. Niet noodzakelijk. Enkel nog voor gelijke dir structuur.
3. [Git](http://git-scm.com) - gebruik de installer.
4. [SourceTree](http://www.sourcetreeapp.com) - gebruik de installer.
5. [Jekyll](http://jekyllrb.com/) - `$ gem install jekyll`
6. [GulpJS](https://github.com/gulpjs/gulp) - `$ npm install -g gulp` of `$ sudo npm install -g gulp`  


## Git Repository en SourceTree
Als je dit project wil gebruiken, is het niet de bedoeling om op deze repository verder te werken.

Volg onderstaande flow om het starter project binnen te halen en correct te gebruiken in een apart project / repository

**Project Clonen / binnenhalen**

1. Ga naar SourceTree en klik op New Repository => Clone from URL
2. Klik bovenaan op de blauwe link 'remote account'
3. Klik naast het STARTER project op 'Clone'
4. Wijzig het Destination Path naar een nieuwe map achter htdocs `/Applications/MAMP/htdocs/nieuwe-map/` SourceTree maakt die map zelf aan indien ze nog niet bestaat
5. Klik op Clone


**Nieuwe repository maken voor project**

1. Ga op het beginscherm van SourceTree met muis op net aangemaakte lokale repository staan en doe rechter muisklik
2. Selecteer 'New Repository' => 'Create Remote Repository'
3. Geef repository een naam, bij voorkeur dezelfde naam als de map die je in stap 4 hebt gegeven.
4. Ga in het project en klik rechts boven op settings om je lokaal project te linken aan de nieuwe Remote Repository
5. Selecteer de huidige Repository, klik edit en kies de nieuw aangemaakte Repository.
6. Bevestig


Gitignore file is zo geconfigureerd dat enkel de relevante files door git worden bijgehouden. 

## Setup per project

1. Installeer alle packages die nodig zijn om Gulp goed te laten werken: `$ sudo npm install`
2. Als je ook wenst te deployen van Gulp commando, vergeet niet de FTP variabelen binnen package.json aan te passen 


## Gebruik

**development mode**

Watch files, browser synchronisation, auto-rebuild, CSS injectie enz.

```shell
$ gulp
```

**deployen met Gulp**

Als je in de gulpfile de FTP-gegevens hebt ingesteld, kan je makkelijk deployen naar een server met onderstaand commando


```shell
$ gulp ftp
```