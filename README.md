# MILLET_MATHIEU-ECF202012_1
Projet d'évaluation en cours de formation, création d'une maquette graphique sur les demandes d'un clients.

le site n'est pas fonctionnel mais contient 2 pages.
cliquez sur "acceder a mes artistes" pour ouvrir la page 2.
cliquez sur le logo en haut de page pour revenir a la page d'accueil.

#convention de nommage : camelCase
#police : Raleway
#palette de couleur : theme sombre avec du rose et du bleu

j'ai choisi une refonte graphique complete de la premiere maquette proposé par le client tant sur le design 
que sur le placement des blocs tout en gardant ce qui a été demandé de l'etre :

- structure generale de la page: 
header, 
footer, 
bloc de recherche

- le nom du site: "MY MUSIC"

- les images des artistes

- usage du dégradé: 
j'ai utiliser le dégradé sur differents éléments, soit en bordure, soit en backgroud-color
je m'en suis servi pour colorer la page avec du rose et du bleu

- un bloc "biographie":
!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
il été demander un extrait biographique de l’artiste "SÉLECTIONNÉ", avec un encart affichant ses prochaines
dates de concert.
ayant mal compris, j'ai juste implémenter un bloc statique "artiste du moment" ne prenant en compte la biographie 
d'un seul artiste. (-1 point (T_T) )
mais j'ai fait exactement le travail qui aurait du etre fait ici dans la partie "video" avec des "iframe" et 
en utilisant du javascript.
!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

**************************************************************************************************************
----------------------------------------- RESPONSIVE ---------------------------------------------------------

j'ai choisi un developpement en "mobile first" en utilisant que du flexbox, je n'ai pas trouver 
ici necessaire l'utilisation du grid (simple avis personnel)
j'ai utilisé des "@media screen min-width" a 640px pour les tablettes et 1024px pour les desktops

MOBILE:
pour la page d'accueil, quasiment tout les elements se trouve dans le flux normal, les un en dessous des autres.
a l'exeption des "cards" artiste ou j'ai utilisé du flexbox pour avoir 2 cards par ligne.

pour la page "mes artistes", pareil.
un artiste puis sa video, un autre artiste puis sa video...

TABLETTE:
page d'accueil, 4 cards par ligne.

page "mes artiste", je decide d'aligné les cards sur la meme ligne et de rendre uniquement la video
de l'artiste selectionné.
j'ai pour cela créé un autre bloc "mes artistes" dans le html que je rend visible avec un "display : bloc"
a partir de cette largeur d'écran.
je rend l'acien bloc invisble avec un "display : none".

DESKTOP:
page d'accueil, 5 cards par ligne.

page "mes artiste", je garde le meme concept pour la lecture des videos.
ce qui change ici, c'est la partie "artiste du moment"/"biographie".
je fait une refonte du placement des blocs pour jouer avec la largeur des ecran desktop.
pour cela j'ai utilisé le meme principe que pour les videos, j'ai créé un autre bloc html que je rend visible 
que a partir d'une largeur d'écran de type desktop.

**************************************************************************************************************
------------------------------------UTILISATION DE JAVASCRIPT ------------------------------------------------

sur la page "mes artiste" je joue avec l'ajout et le retrait de classe css. 
(tout est détaillé dans le fichier "app.js")
en cliquant sur un artiste on fait apparaitre la video associé et on entour l'image
de l'artiste selectionné avec une bordure .

**************************************************************************************************************
----------------------------------------- TRICKS ---------------------------------------------------------

toutes les image du site (a l'exception du logo) sont en fait des "background-image"
j'ai choisi de faire ca pour pouvoir travailler le positionement de l'image plus facilement 
tout en gardant le ratio de l'image sans la deformer.
pour exemple, sur la version mobile, dans la page "mes artistes", j'ai choisi d'afficher les image des artiste 
dans un format de "bandeau" qui prend toute la largeur de l'ecran et tres peu de hauteur.
j'ai joué avec le background-position pour afficher la partie de la photo que je voulais.

j'ai tout de meme utiliser la balise "img" avec les meme images, que j'ai mis en "display : none"
pour le referencement.
                        
