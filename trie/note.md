# Trie | try |
## What is trie?
1. type of tree used for application involving text
1. sterm from the word retrieval
2. also refered as prefix tree

## What makes a trie?
1. Each node can have any number of children
2. node contain a hash table, each key are english alphabet and values  are other nodes of the trie
3. the bottom level has key as * and value as null. they * indicate end of a word, meaning a meaning full a word can be form when reaches this end. useful when a word is made of a fragment of another meaningful word like "bat" and "batter"

## Search
1. would take O(K), where K is the number of character. kinda close to constant 
##