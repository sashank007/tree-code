export default class TreeNode {
  constructor(currentTree) {
    console.log("current tree : ", currentTree);

    this.title =
      currentTree && currentTree.hasOwnProperty("title")
        ? currentTree.title
        : "";
    this.children =
      currentTree && currentTree.hasOwnProperty("children")
        ? currentTree.children
        : [];
    this.problems =
      currentTree && currentTree.hasOwnProperty("problems")
        ? currentTree.problems
        : [];
  }
}
