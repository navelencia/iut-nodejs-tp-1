/**
 * Importer la librairie Axios
 * Optionnellement, importer une libraire de gestion CSV
 * 
 * Faire une requete GET sur https://people.sc.fsu.edu/~jburkardt/data/csv/deniro.csv
 * Il s'agit d'un fichier CSV contenant plein de films de Robert de Niro avec leurs dates et scores rotten tomatoes
 * 
 * On decode le CSV, soit a la main soit en se servant d'une librairie
 * - Si a la main
 * - Enlever la premiere et derniere ligne, couper par "\n", puis par ","
 * 
 * On trie et regroupe par annee les films
 * Une facon serait d'initialiser un tableau,
 * de parcourir les films, de regarder si l'annee existe dans le tableau,
 * si oui, ajouter le film a l'annee
 * si non, creer l'annee avec le film
 * 
 * On convertir le tableau au format json
 * On ecrit la chaine json sur le disque dans un fichier
 */