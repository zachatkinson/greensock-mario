/**
 *
 * Date: 11/12/2013
 * Author: Zach Atkinson
 * Project: greensock
 * File:
 * © Zach Atkinson 2013. All Rights Reserved
 *
 */
/* DOCUMENT OBJECTS*/
//create javascript object smbMario to hold DOM object with id "smbMario"
var smbMario = Sizzle('#smbMario');

//create javascript object pipe to hold DOM object with id "pipe"
var pipe = Sizzle("#pipe");

//create javascript object box1 to hold DOM object with id "box1"
var box1 = Sizzle("#box1");
/*END DOCUMENT OBJECTS*/

/*ANIMATION OBJECTS*/


//create javascrpt array smbFirstJump to contain the first jump for smb slide
var smbFirstJump = [{right:"-855px", bottom:"-100px"}, {right:"-750px", bottom: "-296px"}];
//create javascript array smbSecondJump to contain the second jump for smb slide
var smbSecondJump = [{right: "-650px", bottom: "-100px"},{right: "-500px", bottom:"-296px"}];
//create javascript array smbThirdJump to contain the third jump for smb slide
var smbThirdJump = [{right:"-250px", bottom:"50px"}, {right: "-35px", bottom:"0px"}];
//create javascript variable frameWidth to contain the width of frames for walking animation
var frameWidth = 162;
//create javascript variable numFrames to contain the number of frames for walking animation
var numFrames = 3;


var steppedEase = new SteppedEase(numFrames);
/*END ANIMATION OBJECTS*/

/*TIMELINE*/
//create timeline object to sequence animation
var tl = new TimelineMax({});
      //animate pipe in from bottom of slide
    tl.fromTo(pipe, 4.0, {bottom: "-360px"}, {bottom: "0px"})
    //animate in box1
    //tl.fromTo(box1, 2.0, )
    //create variable to store walking animation
    var walk = TweenMax.to(smbMario, 0.4, { backgroundPosition: '-'+(frameWidth*numFrames)+'px 0px', ease:steppedEase, repeat:-1})
   //move smbMario to the left from offscreen
    tl.to(smbMario, 3.0, {right:"-960px", bottom:"-296px", ease:Power0.easeInOut, onComplete:function(){
        //pause walking animation once smbMario is in jumping position
        walk.pause();
        }
    })
    //set jump frame
    tl.to(smbMario, 0.0, {backgroundPosition: "-648px -0px", ease:steppedEase})
     //first jump to coinbox
    tl.to(smbMario, 1.0, {bezier:smbFirstJump})
    //second jump to coinbox
    tl.to(smbMario, 1.0, {bezier: smbSecondJump})
    //thid jump to pipe
    tl.to(smbMario, 1.5, {bezier: smbThirdJump})
    //set mario on pipe facing right    tl.to(smbMario, 0.0, {backgroundPosition: "-486px -0px", ease:steppedEase})
/*END TIMELINE */


