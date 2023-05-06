# WcagCompliantApp

Projekat je radjen sa Angular verzijom 11.2.14 i Node verzijom 16.14.2. Koristen je windows PowerShell kao terminal


# Pokretanje json servera

Aplikacija koristi json server kao pseudo backend. Da bi se pokrenuo mora se download json server, naći u terminalu gdje je db.json fajl i zatim pokrenuti sljedece komande


Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass  (ovo u slucaju da komanda ispod ne uspije pokrenuti server)

json-server --watch db.json  


# Pokretanje aplikacije

Da bi se pokrenula poželjno je da Node i Angular budu gore pomenute verzije, potrebno je odraditi (unutar wcag-compliant-app foldera)

npm install

ng build

ng serve 


Stranica se nalazi na http://localhost:4200/ adresi