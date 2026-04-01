class TrieNode {
    construction() {
        this.children = {};
    }
}
class Trie {
    constructor() {
        this.root = new TrieNode();
    }
    search(word) {
        let currentNode = this.root;
      for (let char of word) {
            if (!currentNode.children[char]) {
                return null;
            }
            currentNode = currentNode.children[char];
      }
        return currentNode;
    }
    insert(word) {
        let curretNode = this.root;
        for (let char of word) {
            if(!curretNode.children[char]) {
                curretNode.children[char] = new TrieNode();
            } 
            curretNode = curretNode.children[char];            
        }
        currentNode.children["*"] = null;
    }
    collectAllWords(node = null, words = [], word = "") {
        let currentNode = node || this.root;
        //we did not make the node default to root since it will collect all the words in the trie. we want to be able to collect the words at the specified node. if we make it default to root, it will always collect all the words in the trie.
        for (let key in currentNode.children) {
            if (key === "*") {
                words.push(word);
            } else {
                this.collectAllWords(currentNode.children[key], word + key, words);
            }
        }
        return words;
    }
    autoComplete(prefix) {
        let currentNode = this.search(prefix);
        if (currentNode === null) {
            return null;
        } else {
            return this.collectAllWords(currentNode, []);
        }
    }
}
