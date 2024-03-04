Esercizio 04/03/2024
Carousel Autoplay
===
Riprendendo il carousel realizzato in passato  e con le Timeng Function rendete lo scroll automatico ogni 3 secondi.<br>
Attenzione: dopo l’ultima slide deve riapparire la prima e così via<br>
BONUS
Per evitare conflitti con lo scroll manuale, quando il mouse si trova sopra lo slider lo scroll automatico si interrompe per poi ripartire all’uscita del mouse
## Svolgimento
1. vado ad integrare il mio vecchio codice inserendo l'autoplay 
2. dichiarlo la costante per l'intervallo di tempo tra le immagini e la variabile autoplayTimer
3. seguo la stessa logica utilizzata per i bottoni di avanzamento ma con delle modifiche: incrementa il contatore dell'immagine attuale. Se l'immagine corrente è l'ultima nell'array, il contatore viene resettato a zero per ricominciare dall'inizio.