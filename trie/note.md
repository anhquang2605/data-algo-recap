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
## Insertion
1. search for the char among the tree children as usual
2. if found, we move on deeper
3. if not found, we create new Node as this char, add this node as child of current node, then update this current Node as this node. then we move on with a new character in the search string
4. when we get to the final char in the string, we add a "*" as a child  to the last node to indicate end of word.
## Additional note
1. extra value for the termination node current is null (node that has key of "*"), we can change this null to number value representing the importance of the word so we can priority popular words etc.