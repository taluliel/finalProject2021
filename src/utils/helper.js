
import { db } from "../main";
export function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }
  export function CreateGuid() {  
    function _p8(s) {  
       var p = (Math.random().toString(16)+"000000000").substr(2,8);  
       return s ? "-" + p.substr(0,4) + "-" + p.substr(4,4) : p ;  
    }  
    return _p8() + _p8(true) + _p8(true) + _p8();  
 }
 export function setCookie(cname, cvalue, exdays) {
        var d = new Date();
        d.setTime(d.getTime() + (exdays*24*60*60*1000));
        var expires = "expires="+ d.toUTCString();
        document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
    }

    export  async function logUser(action){
    
      let user = getCookie('hechtUser');
      let t = new Date();
      if(user===''){
         setCookie('hechtUser',CreateGuid(),1);
         user = getCookie('hechtUser');
      }
      const log = {"action":action,timestamp:t.toJSON()};
      const userDocRef = db.collection("logs").doc(user);
      userDocRef.get().then((docSnapshot)=>{
        if(docSnapshot.exists){
          let userLogs = docSnapshot.data();
          console.log(userLogs);
          if(userLogs.actions && userLogs.actions.length){
            userLogs.actions.push(log);
            userDocRef.update(userLogs).then((result)=>console.log(result));
          }
        } else{
          const action={actions:[log]};
          userDocRef.set(action).then((result)=>{
            console.log(result);
          })
        }
      })
    }
