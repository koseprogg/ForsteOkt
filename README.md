# ForsteOkt


## Installere git
Hvordan komme i gang med sitt første repository på github:
</br>
1. Lag bruker på github https://github.com/join?source=header-home
2. Installasjon av git lokalt:
   1. Windows:
      1. Følg denne guiden: https://www.linode.com/docs/development/version-control/how-to-install-git-on-linux-mac-and-windows/ 
   2. Mac
      1. I terminalen, kopier og lim ```/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
brew doctor```
      2. ```brew install git```
   1. Linux
      1. ```apt get-install git```

1. Lage sitt eget repository på github
   1. Naviger til https://github.com/new
   2. Kall ditt nye repository \<github-brukernavn>.github.io
   3. Lokalt på datamaskinen din, opprett en mappe, "githubPages".
   4. Naviger til din nye mappe, opprett en fil "index.html", og en fil "style.css"
   5. I terminalen skriv:
      1. ```git init```
      2. ```git add -a```
      3. ```git commit```
      4. ![](/images/gitlabRepo.png)
      1. ```git commit -m "First commit"```
      2. Skal vi bruke https eller ssh for pushing?
         1. Må i så fall velge hva vi skriver tutorial for
      3. 