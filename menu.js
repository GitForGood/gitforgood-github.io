/*
var open_menues = [];
var to_be_closed = [];

function close_all_child_menus(has_submenu){
    has_submenu.querySelectorAll('has-submenu.open')
    .forEach.call(menues, function(menu, i){
        menu.className = "has-submenu";
        menu.querySelector('a').setAttribute('aria-expanded', "false");
        menu.querySelector('button').setAttribute('aria-expanded', "false");
    });
}

function lock_parent(has_submenu){
    let supermenu = has_submenu.parentNode.parentNode;
    if (supermenu.className == "has-submenu open")
        has_submenu.removeEventListener("mouseout", close_menu_on_mouse_leave);
}

function close_menu_on_mouse_leave(event){
    timer = setTimeout(function(event){
        let parent = document.querySelectorAll(".has-submenu.open");
        if (open_menues[0] != parent){
            return
        }
        open_menues.pop();
        parent.className = "has-submenu";
        parent.querySelector('a').setAttribute('aria-expanded', "false");
        parent.querySelector('button').setAttribute('aria-expanded', "false");
    }, 1000);
}
*/
function init_menues(){

    var menuItems = document.querySelectorAll('li.has-submenu');
    /*
    Array.prototype.forEach.call(menuItems, function(el, i){
        el.addEventListener("mouseover", function(event){
            this.className = "has-submenu open";
            clearTimeout(timer);
            this.querySelector('a').setAttribute('aria-expanded', "true");
            this.querySelector('button').setAttribute('aria-expanded', "true");
            open_menues.push(this)
        });
        el.addEventListener("mouseout", function(event){
            timer = setTimeout(function(event){
                let parent = document.querySelectorAll(".has-submenu.open");
                if (open_menues[0] != parent){
                    return
                }
                open_menues.pop();
                parent.className = "has-submenu";
                parent.querySelector('a').setAttribute('aria-expanded', "false");
                parent.querySelector('button').setAttribute('aria-expanded', "false");
            }, 1000);
        });
    });
    */
    Array.prototype.forEach.call(menuItems, function(el, i){
        var activatingA = el.querySelector('a');
        var btn = '<button class="foldupbutton"><span><div class="chevron"></div><span class="visuallyhidden">open submenu for “' + activatingA.text + '”</span></span></button>';
        activatingA.insertAdjacentHTML('afterend', btn);

        el.querySelector('button').addEventListener("click",  function(event){
            if (this.parentNode.className == "has-submenu") {
                this.parentNode.className = "has-submenu open";
                this.parentNode.querySelector('a').setAttribute('aria-expanded', "true");
                this.parentNode.querySelector('button').setAttribute('aria-expanded', "true");
            } else {
                this.parentNode.className = "has-submenu";
                this.parentNode.querySelector('a').setAttribute('aria-expanded', "false");
                this.parentNode.querySelector('button').setAttribute('aria-expanded', "false");
            }
            event.preventDefault();
        });
    });
}

init_menues();