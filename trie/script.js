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

}
