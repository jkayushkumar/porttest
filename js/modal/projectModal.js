function showProjectModal(projNo) {
    document.getElementById("projectModal").style.display = "grid";
    switch (projNo) {
        case 1:
            document.getElementById("prjModalImg").style.content = "url(\"images/web/project/Smart_Healthcare_Solution_Poster.png\")";
            break;
        case 2:
            document.getElementById("prjModalImg").style.content = "url(\"images/web/project/10.jpg\")";
            break;
        case 3:
            document.getElementById("prjModalImg").style.content = "url(\"images/web/project/7.jpg\")";
            break;
    }
}