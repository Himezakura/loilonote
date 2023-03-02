let main = document.getElementById("main");
main.style.background = 'linear-gradient(90deg, rgba(105, 234, 203, 1), rgba(215, 98, 252, 1) 67%, rgba(102, 84, 241, 1))';

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
name.textContent = "テキスト";
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