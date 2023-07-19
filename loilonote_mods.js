let menuButtonIcon = document.querySelectorAll(".menuButtonIcon");
for (let num = 0; num < menuButtonIcon.length; num++) {
    let element = menuButtonIcon[num];
    if(num == 0 || num == 3){
        element.src = "https://cdn.loilonote.app/4.2.0/svg/materialbox/MaterialFolderPrivate.svg";
    }else if(num == 1 || num == 4){
        element.src = "https://cdn.loilonote.app/4.2.0/svg/materialbox/MaterialFolderDistrict.svg";
    }else if(num == 2 || num == 5){
        element.src = "https://cdn.loilonote.app/4.2.0/svg/materialbox/MaterialFolderSchool.svg";
    }
}

let menuTitle = document.querySelectorAll(".menuTitle");
for (let num = 0; num < menuTitle.length; num++) {
    let element = menuTitle[num];
    element.style.color = "red";
}

let name = document.querySelector(".name");
name.textContent = "LoiloNote[using MODs]";
name.style.color = "red";
document.querySelector(".profileIcon").style.backgroundImage = "url(https://cdn.loilonote.app/4.2.0/svg/send_icon.svg)";

let up = document.querySelectorAll(".uploadStatusButtonIcon");
for (let num = 0; num < up.length; num++) {
    let element = up[num];
    element.src = "https://cdn.loilonote.app/4.2.0/img/TrashFull@2x.png";
}

let up_t = document.querySelectorAll(".uploadStatusButtonText");
for(let num=0; num<up_t.length; num++){
    let element = up_t[num];
    element.style.color = "purple";
}

const main_body = document.getElementById("main");
const teacherTool = document.createElement("div");
teacherTool.className = "teacherTool";
const teacherToolContainer = document.createElement("div");
teacherToolContainer.className = "teacherToolContainer";
const teacherToolHandleWrapper = document.createElement("div");
teacherToolHandleWrapper.className = "teacherToolHandleWrapper";
const teacherToolBorder1 = document.createElement("div");
teacherToolBorder1.className = "teacherToolBorder";
const teacherToolBorder2 = document.createElement("div");
teacherToolBorder2.className = "teacherToolBorder";
const internalButton_teacherToolHandle = document.createElement("div");
internalButton_teacherToolHandle.className = "internalButton teacherToolHandle";
const teacherToolInner = document.createElement("div");
teacherToolInner.className = "teacherToolInner";
const teacherToolButtonWrapper1 = document.createElement("div");
teacherToolButtonWrapper1.className = "teacherToolButtonWrapper";
const teacherToolButtonWrapper2 = document.createElement("div");
teacherToolButtonWrapper2.className = "teacherToolButtonWrapper";
const teacherToolButtonWrapper3 = document.createElement("div");
teacherToolButtonWrapper3.className = "teacherToolButtonWrapper";
const internalButton_teacherToolButton_teacherToolTunnelButton_firstTeacherToolButton = document.createElement("div");
internalButton_teacherToolButton_teacherToolTunnelButton_firstTeacherToolButton.className = "internalButton teacherToolButton teacherToolTunnelButton firstTeacherToolButton";
const teacherToolButtonDesc1 = document.createElement("div");
teacherToolButtonDesc1.className = "teacherToolButtonDesc";
const teacherToolButtonDesc2 = document.createElement("div");
teacherToolButtonDesc2.className = "teacherToolButtonDesc";
const teacherToolButtonDesc3 = document.createElement("div");
teacherToolButtonDesc3.className = "teacherToolButtonDesc";
const internalButton_teacherToolButton_teacherToolLockScreenButton = document.createElement("div");
internalButton_teacherToolButton_teacherToolLockScreenButton.className = "internalButton teacherToolButton teacherToolLockScreenButton";
const relative = document.createElement("div");
relative.className = "relative";
const internalButton_teacherToolButton_teacherToolAttendancesButton = document.createElement("div");
internalButton_teacherToolButton_teacherToolAttendancesButton.className = "internalButton teacherToolButton teacherToolAttendancesButton";
teacherTool.setAttribute("data-visible","true");
main_body.appendChild(teacherTool);
teacherTool.appendChild(teacherToolContainer);
teacherToolContainer.appendChild(teacherToolHandleWrapper);
teacherToolHandleWrapper.appendChild(teacherToolBorder1);
internalButton_teacherToolHandle.setAttribute("role","button");
internalButton_teacherToolHandle.onclick = () => {
    if(teacherTool.className=="teacherTool"||teacherTool.className=="teacherTool teacherTool-exit-done"){
        teacherTool.className = "teacherTool teacherTool-enter-done";
    }else if(teacherTool.className=="teacherTool teacherTool-enter-done"){
        teacherTool.className = "teacherTool teacherTool-exit-done";
    }
};
teacherToolHandleWrapper.appendChild(internalButton_teacherToolHandle);
teacherToolHandleWrapper.appendChild(teacherToolBorder2);
teacherToolContainer.appendChild(teacherToolInner);
teacherToolInner.appendChild(teacherToolButtonWrapper1);
internalButton_teacherToolButton_teacherToolTunnelButton_firstTeacherToolButton.setAttribute("role","button");
internalButton_teacherToolButton_teacherToolTunnelButton_firstTeacherToolButton.setAttribute("data-locked","false");
teacherToolButtonWrapper1.appendChild(internalButton_teacherToolButton_teacherToolTunnelButton_firstTeacherToolButton);
teacherToolButtonDesc1.textContent = "生徒間通信";
teacherToolButtonWrapper1.appendChild(teacherToolButtonDesc1);
teacherToolInner.appendChild(teacherToolButtonWrapper2);
internalButton_teacherToolButton_teacherToolLockScreenButton.setAttribute("role","button");
internalButton_teacherToolButton_teacherToolLockScreenButton.setAttribute("data-locked","false");
teacherToolButtonWrapper2.appendChild(internalButton_teacherToolButton_teacherToolLockScreenButton);
teacherToolButtonDesc2.textContent = "画面ロック";
teacherToolButtonWrapper2.appendChild(teacherToolButtonDesc2);
teacherToolInner.appendChild(relative);
relative.appendChild(teacherToolButtonWrapper3);
internalButton_teacherToolButton_teacherToolAttendancesButton.setAttribute("role","button");
internalButton_teacherToolButton_teacherToolAttendancesButton.setAttribute("data-locked","false");
teacherToolButtonWrapper3.appendChild(internalButton_teacherToolButton_teacherToolAttendancesButton);
teacherToolButtonDesc3.textContent = "参加者確認";
teacherToolButtonWrapper3.appendChild(teacherToolButtonDesc3);


const textCardDialog__g = document.getElementsByClassName('textCardDialog');
const textCardDialogCell_purple = document.createElement("div");
textCardDialogCell_purple.className = "textCardDialogCell";
textCardDialogCell_purple.setAttribute("draggable", "true");
textCardDialogCell_purple.setAttribute("style", "background-color: rgb(162, 96, 191); border-bottom: 3px solid rgb(134, 66, 164); cursor: pointer;");
const textCardDialogCell_orange = document.createElement("div");
textCardDialogCell_orange.className = "textCardDialogCell";
textCardDialogCell_orange.setAttribute("draggable", "true");
textCardDialogCell_orange.setAttribute("style", "background-color: #ffa500; border-bottom: 3px solid #cc8400; cursor: pointer;");
const textCardDialogCell_usingMODs_msg = document.createElement("p");
textCardDialogCell_usingMODs_msg.innerText = 'This custom text cards was created by using MODs';
textCardDialogCell_usingMODs_msg.setAttribute("style", "color:#007bff");
const not_show_textCardDialogCell_usingMODs_msg = document.createElement("button");
not_show_textCardDialogCell_usingMODs_msg.innerText = 'Hide this message';
not_show_textCardDialogCell_usingMODs_msg.setAttribute("style", "color:#007bff");
let show_msg = true;
not_show_textCardDialogCell_usingMODs_msg.onclick = ()=> show_msg = false;
document.querySelectorAll('.menuButton')[1].onclick = ()=>{
    let add_custom_textcard = ()=>{
        if(!!document.querySelector('.textCardDialog')){
            textCardDialog__g[0].appendChild(textCardDialogCell_purple);
            textCardDialog__g[0].appendChild(textCardDialogCell_orange);
            if(show_msg){
                textCardDialog__g[0].appendChild(textCardDialogCell_usingMODs_msg);
                textCardDialog__g[0].appendChild(not_show_textCardDialogCell_usingMODs_msg);
            }
        }else{
            alert('Error(01):Failed to process custom text cards generation.');
        }
    }
    setTimeout(add_custom_textcard, 200);
}


//壁紙配列
let set_wallpaper_array_now = 0;
const wallpaper_array = 
    ['linear-gradient(90deg, rgba(105, 234, 203, 1), rgba(215, 98, 252, 1) 67%, rgba(102, 84, 241, 1))',
    'linear-gradient(90deg, rgba(229, 162, 255, 1), rgba(152, 233, 157, 1))',
    'linear-gradient(90deg, rgba(89, 173, 241, 1), rgba(207, 253, 157, 1))',
    'linear-gradient(150deg, rgba(247, 166, 12, 1) 10%, rgba(255, 34, 87, 1) 40%, rgba(154, 39, 238, 1) 68%, rgba(35, 102, 247, 1) 90%)',
    'linear-gradient(90deg, rgba(243, 196, 170, 1), rgba(228, 81, 154, 1) 50%, rgba(77, 84, 224, 1)',
    'linear-gradient(90deg, rgba(226, 221, 217, 1) 3%, rgba(248, 52, 216, 1) 24%, rgba(207, 91, 115, 1) 46%, rgba(195, 38, 96, 1) 59%, rgba(126, 20, 86, 1) 71%, rgba(58, 21, 50, 1) 84%, rgba(23, 21, 31, 1) 99%)',
    'linear-gradient(90deg, rgba(187, 255, 239, 1), rgba(236, 237, 203, 1) 34%, rgba(248, 227, 183, 1) 72%, rgba(255, 155, 252, 1) 97%)',
    'linear-gradient(90deg, rgba(171, 176, 255, 1), rgba(255, 137, 179, 1) 19%, rgba(224, 216, 239, 1) 31%, rgba(216, 237, 255, 1) 61%)'];
const menu = document.getElementsByClassName("menu");
const change_wallpaper_button = document.createElement("div");
change_wallpaper_button.className = "menuButton";
menu[0].appendChild(change_wallpaper_button);
const change_wallpaper_button_icon = document.createElement("img");
change_wallpaper_button_icon.className = "menuButtonIcon";
change_wallpaper_button_icon.src = "https://cdn.loilonote.app/4.9.0/svg/picture_margin_less.svg";
change_wallpaper_button_icon.setAttribute("alt","壁紙を変更");
change_wallpaper_button.appendChild(change_wallpaper_button_icon);
const change_wallpaper_button_title = document.createElement("div");
change_wallpaper_button_title.className = "menuTitle";
change_wallpaper_button_title.innerText = `壁紙を変更(?/?)`;
change_wallpaper_button.appendChild(change_wallpaper_button_title);
//壁紙の状態をロード
let wallpaper_load = ()=>{
    let main = document.getElementById("main");
    change_wallpaper_button_title.innerText = `壁紙を変更(${set_wallpaper_array_now+1}/${wallpaper_array.length})`;
    main.style.background = wallpaper_array[set_wallpaper_array_now];
}
//壁紙の初期化
wallpaper_load();
change_wallpaper_button.onclick = ()=>{
    if(set_wallpaper_array_now < wallpaper_array.length-1){
        set_wallpaper_array_now += 1;
        wallpaper_load();
    }else{
        set_wallpaper_array_now = 0;
        wallpaper_load();
    }
}