import React from 'react'
import { useReducer} from 'react';
export default function SubTreeComponent(props) {


    const findAnchorNode = () => {

        //Get the value of the node
        //Traverse through the tree to find the Tree node and return it's value if treeNode.value == current_anchor_category and return treeNode.children
    }
    
    //Fetch the sub tree from the subTree action
    //this traverses through the tree finding the required node.
    //Display children of those
    const displaySubTree = () => {

        // const { subTreeNodes } = props;
        const subTreeCategories = ["Sorting" , "Searching", "Binary Search"];

        return <ul>{subTreeCategories.map(category =><li><button>{category}</button></li> )}</ul>
    }

    //For each node, we find all the children and return it

    return (
        <div>
            {displaySubTree()}
        </div>
    )
}
