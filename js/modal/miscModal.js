function showMiscModal(miscNo) {
    document.getElementById("miscModal").style.display = "grid";
    switch (miscNo) {
        case 1:
            document.getElementById("miscModalImg").style.content = "url(\"images/web/project/Smart_Healthcare_Solution_Poster.png\")";
            break;
        case 2:
            document.getElementById("miscModalImg").style.content = "url(\"images/web/project/10.jpg\")";
            break;
        case 3:
            document.getElementById("miscModalImg").style.content = "url(\"images/web/project/7.jpg\")";
            break;
    }
}