            // import
// import { firstName,secondName } from "./start.js";

// document.getElementById('u1').innerHTML=firstName;
// document.getElementById('u2').innerHTML=secondName;

var dd=0;
var dd1=0;
var t=0;

            var rtrtrt=0;
            // after the result tun off the key event
var resOk=0;
            // load time up
var loadTime=0;
var i=0;
var u1=-1;
var u2=-1;
                //set interval variable
var loop;
var loop2;
                //set timout variable
var time1;
var time2;
                //individual result var
var u1Indi=0; 
var u2Indi=0; 
                //total result of individual variable
var u1Result=0;
var u2Result=0;
var tResult=0
                //cancel the game
var cancel=false;


                                 // user 1 automatic
function user1()
{
    document.getElementById("u2Timer").src='../image/200.gif';
    document.getElementById("u1Timer").style.visibility="visible";
    document.getElementById("u1Timer").src='../image/200.gif';
    document.getElementById('u1Detail').style.boxShadow="1px 1px 10px 2px black";
                                 // for 3 second up
    time1=setTimeout(() => {
        
        dd=1;
        console.log("-------time out 1--------------");
        document.getElementById("u1Timer").style.visibility="hidden";
        document.getElementById('u1Detail').style.boxShadow="1px 1px 4px 0px black";
        console.log("img is hidden of user 1");
    }, 3000);
    
    var ty=document.getElementById('lbl');
    
                        //time interval for check the key and pick random no for USER 1
     loop=setInterval(() => {
        if(t!=1 && dd===1)
        {
            var randm= Math.trunc( Math.random()*3);
            console.log(randm);
            console.log(u1);
            u1=randm;
            console.log(u1);
            i++;
            t=1;
            rtrtrt++;
            result();
            user2();
        }
        if(dd===1)
        {
            
            clearInterval(loop);
            clearTimeout(time1);
            dd=0;
        } 
        // if()
        // {
            console.log("call user 2");
        //     // user2();

        // }
    }, 100);
}
                                               //key events
function strt(event)
{
    
   
    if((event.key==='a' || event.key==='A') && t===0  && cancel!=true && loadTime===1 && resOk===0)
    {
        // document.getElementById('lbl1').innerHTML="user 1 select rock";
        console.log("user 1 select rock");
        t=1;
        U1r();
        clearInterval(loop);
        clearTimeout(time1);
        document.getElementById("u1Timer").style.visibility="hidden";
        document.getElementById('u1Detail').style.boxShadow="1px 1px 4px 0px black";
        user2();
    }
    else if((event.key==='s' || event.key==='S') && t===0  && cancel!=true && loadTime===1 && resOk===0)
    {
        // document.getElementById('lbl1').innerHTML="user 1 select scissor";
        console.log("user 1 select scissor");
        t=1;
        U1s();
        clearInterval(loop);
        clearTimeout(time1);
        document.getElementById("u1Timer").style.visibility="hidden";
        document.getElementById('u1Detail').style.boxShadow="1px 1px 4px 0px black";
        user2();
    }
    else if((event.key==='d' || event.key==='D') && t===0  && cancel!=true && loadTime===1 && resOk===0)
    {
        // document.getElementById('lbl1').innerHTML="user 1 select paper";
        console.log("user 1 select paper");
        t=1;
        U1p();
        clearInterval(loop);
        clearTimeout(time1);
        document.getElementById("u1Timer").style.visibility="hidden";
        document.getElementById('u1Detail').style.boxShadow="1px 1px 4px 0px black";
        user2();
    }
    else if((event.key==='j' || event.key==='J') && t===1  && cancel!=true && loadTime===1 && resOk===0)
    {
        // document.getElementById('lbl1').innerHTML="user 2 select rock";
        console.log("user 2 select rock");
        t=0;
        U2r();
        clearInterval(loop2);
        clearTimeout(time2);
        document.getElementById("u2Timer").style.visibility="hidden";
        document.getElementById('u2Detail').style.boxShadow="1px 1px 4px 0px black";
    }
    else if((event.key==='k' || event.key==='K') && t===1 && cancel!=true && loadTime===1 && resOk===0)
    {
        // document.getElementById('lbl1').innerHTML="user 2 select scissor";
        console.log("user 2 select scissor");
        t=0;
        U2s();
        clearInterval(loop2);
        clearTimeout(time2);
        document.getElementById("u2Timer").style.visibility="hidden";
        document.getElementById('u2Detail').style.boxShadow="1px 1px 4px 0px black";
    }
    else if((event.key==='l' || event.key==='L') && t===1 && cancel!=true && loadTime===1 && resOk===0)
    {
        // document.getElementById('lbl1').innerHTML="user 2 select paper";
        console.log("user 2 select paper");
        t=0;
        U2p();
        clearInterval(loop2);
        clearTimeout(time2);
        document.getElementById("u2Timer").style.visibility="hidden";
        document.getElementById('u2Detail').style.boxShadow="1px 1px 4px 0px black";
    }
    else if(cancel!=true && loadTime===1 && resOk===0)
    {
        // document.getElementById('lbl1').innerHTML="you enter the wrong option";
        document.getElementById('lbl').innerHTML="you enter the wrong option";
    }
    if(t===1)
    {
        // document.getElementById('lbl0').innerHTML="user 2 enter your choice";
        document.getElementById('lbl').innerHTML="user 2 enter your choice";
    }

}

                                        //function for the user 2



function user2()
{
//     if(rtrtrt<=2)
// {
    console.log("user2 is called");

    // document.getElementById("u2Timer").style.visibility="visible";
    document.getElementById("u2Timer").src='../image/200.gif';
    document.getElementById("u2Timer").style.visibility="visible";
    document.getElementById('u2Detail').style.boxShadow="1px 1px 10px 2px black";

    // document.getElementById('u2Timer').style.position="relative";
    // document.getElementById('u2Timer').style.top="-7px";
    // document.getElementById('u2Timer').style.left="-62px";

    if(t===1)
    {
        // console.log("this is a time of user 2 function");

                                          // for 3 second up
        time2=setTimeout(() => {
            
            dd1=1;
            console.log("--------------------time out 2 -----------------");
            document.getElementById("u2Timer").style.visibility="hidden";
            document.getElementById('u2Detail').style.boxShadow="1px 1px 4px 0px black";
            console.log("img is hidden of user 2");
            
        }, 3000);

                              //time interval for check the key and pick random no for USER 2
         loop2=setInterval(() => {
            if(t!=0 && dd1===1)
            {
                // console.log(Math.trunc( Math.random()*3));
                var randm2= Math.trunc( Math.random()*3);
                console.log("random = "+randm2);
                console.log("before u2 = "+u2);
                u2=randm2;
                console.log("after u2 = "+u2);
                i++;
                t=0;
                result();
            }
            if(dd1===1)
            {
            
                clearInterval(loop2);
                clearTimeout(time2);
                dd1=0;
            } 
        }, 100);
    }
                        
}
// }
                                          //set no to the key event
function U1r()
{
    u1=1;
    i++;
    result();
    // console.log("jk");
    // return r;
}
function U1p()
{
    u1=2;
    i++;
    result();
}
function U1s()
{
    u1=0;
    i++;
    result();
}
function U2r()
{
    u2=1;
    i++;
    result();
}
function U2p()
{
    u2=2;
    i++;
    result();
}
function U2s()
{
    u2=0;
    i++;
    result();
}
                                    //on load
function result1()
{
    
    document.getElementById("u1Timer").style.visibility="hidden";
    document.getElementById("u2Timer").style.visibility="hidden";
    setTimeout(() => {
        
        result();
        user1();
        loadTime=1;
    }, 2000);
}
                                    //calculating the result
function result()
{
    // user1();
    if((u1===-1)&&(u2===-1))
    {
        // document.getElementById('lbl2').innerHTML="no body enter the choice";
        // document.getElementById('lbl').innerHTML=" 1 no body enter the choice";
        document.getElementById('lbl').innerHTML="user 1 enter your choice";
    }
    else if(u1===-1)
    {
        // document.getElementById('lbl2').innerHTML="user 1 enter your choice";
        document.getElementById('lbl').innerHTML="user 1 enter your choice";
    }
    else if(u2===-1)
    {
        // document.getElementById('lbl2').innerHTML="user 2 enter your choice";
        document.getElementById('lbl').innerHTML="user 2 enter your choice";
    }
    else if(i===2)
    {

        if((u1===0)&&(u2===2))
        {
            document.getElementById('rslt').innerHTML="user 1 is winner";
            document.getElementById('lbl').innerHTML=" ";

            resOk=1;
            u1Indi=1;
            u1Result++;
        }
        else if((u2===0)&&(u1===2))
        {
            document.getElementById('rslt').innerHTML="user 2 is winner";
            document.getElementById('vsBlock').style.boxShadow="1px 1px 10px 2px black";
            document.getElementById('lbl').innerHTML=" ";

            resOk=1;
            u2Indi=1;
            u2Result++;
        }
        else if(u1>u2)
        {
            document.getElementById('rslt').innerHTML="user 1 is winner";
            document.getElementById('vsBlock').style.boxShadow="1px 1px 10px 2px black";
            document.getElementById('lbl').innerHTML=" ";

            resOk=1;
            u1Indi=1;
            u1Result++;
        }
        else if(u1===u2)
        {
            document.getElementById('rslt').innerHTML="Tie";
            document.getElementById('vsBlock').style.boxShadow="1px 1px 10px 2px black";
            document.getElementById('lbl').innerHTML=" ";

            resOk=1;
            u1Indi="-";
            u2Indi="-";
            tResult++;
        }
        else if(u2>u1)
        {
            document.getElementById('rslt').innerHTML="user 2 is winner";
            document.getElementById('vsBlock').style.boxShadow="1px 1px 10px 2px black";
            document.getElementById('lbl').innerHTML=" ";

            resOk=1;
            u2Indi=1;
            u2Result++;
        }
        i=0;
        setTimeout(() => {
            
            if(confirm("click OK for continue and \n click CANCEL for view result"))
            {
                // document.getElementById('lbl2').innerHTML="no body enter the choice";
                // document.getElementById('lbl').innerHTML=" in TIME  no body enter the choice";
                document.getElementById('lbl').innerHTML="user 1 enter your choice";
                document.getElementById('rslt').innerHTML=" ";
                i=0;
                u1=-1;
                u2=-1;
                resOk=0;
                // document.getElementById('u1-total').innerHTML=u1Result;
                // document.getElementById('u2-total').innerHTML=u2Result;

                // document.getElementById('u1-5').innerHTML=u1Indi;
                // document.getElementById('u2-5').innerHTML=u2Indi;

                // u1Indi=0;
                // u2Indi=0;

                user1();
            }
            else
            {
                document.getElementById('table').style.boxShadow="1px 1px 10px 2px black";
                document.getElementById('lbl').innerHTML=" ";
                document.getElementById('rslt').innerHTML=" ";
                // alert("jjjjj");
                cancel=true;

                    // document.getElementById('u1-total').innerHTML=u1Result;
                    // document.getElementById('u2-total').innerHTML=u2Result;


                // alert("USER 1 WINNER = "+u1Result+"\nUSER 2 WINNER = "+u2Result+"\nTIE MATCHES = "+tResult);
                // if(cancel===true)
                // {
                //     alert("hello");
                // }
            }
            document.getElementById('vsBlock').style.boxShadow="1px 1px 4px 0px black";
            let j;
            let u1scoredetail;
            let u2scoredetail;
            u1scoredetail=document.getElementsByClassName('u1Res');
            u2scoredetail=document.getElementsByClassName('u2Res');
                document.getElementById('u1-total').innerHTML=u1Result;
                document.getElementById('u2-total').innerHTML=u2Result;

                // document.getElementById('u1-5').innerHTML=u1Indi;
                // document.getElementById('u2-5').innerHTML=u2Indi;
                for(j=0;j<u1scoredetail.length-1;j++)
                {
                    u1scoredetail[j].innerHTML=u1scoredetail[j+1].innerHTML;
                    u2scoredetail[j].innerHTML=u2scoredetail[j+1].innerHTML;
                }
                u1scoredetail[u1scoredetail.length-1].innerHTML=u1Indi;
                u2scoredetail[u2scoredetail.length-1].innerHTML=u2Indi;
                
                u1Indi=0;
                u2Indi=0;
            
        }, 900);
    }
}
