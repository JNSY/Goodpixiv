function basicFunction(){
    var menu=document.getElementsByClassName("menu-item")[0];

    /*作品管理ページへのリンクを作る*/
    var li1=document.createElement("li");
    var cr=document.createElement("a");
    cr.href="https://www.pixiv.net/manage/illusts/"
    li1.appendChild(cr);

    /*ブックマークへのリンクを作る*/
    var li2=document.createElement("li");
    var bk=document.createElement("a");
    bk.href="https://www.pixiv.net/bookmark.php"
    li2.appendChild(bk);

    var saktex=document.createElement("span");
    saktex.innerText="作品管理";
    cr.appendChild(saktex);

    var bkm=document.createElement("span");
    bkm.innerText="ブックマーク";
    bk.appendChild(bkm);

    /*メニューに上記2つのリンクを追加する */
    menu.appendChild(li1);
    menu.appendChild(li2);
};

basicFunction();

    
