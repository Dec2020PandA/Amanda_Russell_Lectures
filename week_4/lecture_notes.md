#### 12/21/2020 Lecture

## Group Projects - Git Overview on Branching and Merging
    - Project owner: create initial repo (standard steps) and push repo to github
        Set other members as contributors on Github
    - Other project members: accept invite, clone the repo down to your computer (git clone <repo link>)
    - ALL MEMBERS: create branches with your own name so you know who is doing what
        git checkout -b my_name_here
        the "-b" part makes a new "branch" (an independent line of development)
        make changes based on your line of work (front-end, back-end, styling, etc)
        Now when you push, you will run "git push origin my_name_here"
        Note that this makes NEW BRANCHES over on github!
    - Project owner: Pull and Merge on Github so everyone's content gets combined on the remote master branch
        select "compare and pull request"
        if branch is designated as "able to merge" -> choose "create pull request", then "merge pull request" and "confirm merge"
        if conflicts -> utilize github to choose which parts of each branch to keep, then merge
    - Post remote merge: individual contributors need to update their local master branches
        git checkout master
        git pull origin master (update your master branch with the new changes in the remote repo)
        git checkout my_name_here to return to local branch
        git merge master -> make your local branch match the master repo (or alternatively delete old branch make a new one)

##### Binary Search Trees

## What is a Binary Search Tree (BST)?
    - Binary Search Tree is a node-based binary tree data structure which has the following properties:
        * The left subtree of a node contains only nodes with keys lesser than the node’s key.
        * The right subtree of a node contains only nodes with keys greater than the node’s key.
        * The left and right subtree each must also be a binary search tree (we can use recursion!)

## Examples of BST used in Programming
    - Used in many search applications where data is constantly entering/leaving
        - the "map" and "set" objects in many languages' libraries
    - breaks you into other concepts (Binary Space Partition, Binary Tries, etc)

## Let's Code!
    - Make a BST
    - add (iterative)
    - contains (iterative)
    - size (recursive)