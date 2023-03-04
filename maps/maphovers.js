/* map hovers . Functions needed to link to the grave maps to show text + grve pics */
/* with the calls above the 2nd parm: 1 means there is a picture, 0 means there is none */

setuparray()

var myback
var myerrmes = "nb remaining stones in this area do not match map"

function myout(myoutparm)
   {
   win = parent.frames[0]
   win.document.location = "blank" + myoutparm + ".htm"
   }

function myover( myparm, mygotpic )
   {
   for ( y = 1 ; y < array.length ; y++)
      {
      var myline = array[y]
      if (myline.indexOf(">" + myparm + "</TD>") != -1)
         {
          mystart = myline.indexOf("class='td4'>")
          myend   = myline.indexOf("class='td6'>")
          var mytext = myline.substring(mystart + 12 ,myend - 4)
          mytext = mytext.replace(/<\/TD>/ig,"")

           /*mytext = mytext.replace(/<BR><BR>/ig,"<BR>")
           */
           mytext = mytext.replace(/<BR>/ig," ")

          if (length.mytext > 100 )
             {
             mytext = substring(1,100)  + "..."
             }
          win = parent.frames[0]
          win.document.write("</HTML></HEAD><TITLE>DETAILS FOR GRAVE:" + myparm + "</TITLE>")
          win.document.write("<LINK REL='STYLESHEET' TYPE='text/CSS' HREF='../records/style.css'></HEAD>")
          win.document.write("<BODY><TABLE ALIGN='CENTER'><TR ALIGN='CENTER'><TD><B>" + myparm + "</B></TD></TR>")
          win.document.write("<TR><TD><i>" + mytext + "</i></TD></TR>")

          if (  isNaN(mygotpic) == false )
             {
             if ( mygotpic == 2 ) { myparm = "154-166" }

             win.document.write("<TR><TD ALIGN='CENTER'>")
             win.document.write("<IMG BORDER=1 ALT='" + myparm + "' SRC='thumb/" + myparm + ".jpg'></TD></TR>")
             if ( mygotpic == 2 ) { win.document.write("<tr><td>" + myerrmes + "</td></tr>") }

             }

          win.document.write("</TABLE></BODY></HTML>")
         }
      }
   }



function myhit( myback, myparm, mygotpic )
   {
     /* myback must be new or old */
   for ( y = 1 ; y < array.length ; y++)
      {
      var myline = array[y]
      if (myline.indexOf(">" + myparm + "</TD>") != -1)
         {
          mystart = myline.indexOf("class='td4'>")
          myend   = myline.indexOf("class='td6'>")
          var mytext = myline.substring(mystart + 12 ,myend - 4)
          mytext = mytext.replace(/<\/TD>/ig,"")
          /*
          mytext = mytext.replace(/<BR><BR>/ig,"<BR>")
          */
          mytext = mytext.replace(/<BR>/ig," ")

          if (length.mytext > 100 )
             {
             mytext = substring(1,100)  + "..."
             }
          win = parent
          win.document.write("</HTML></HEAD><TITLE>DETAILS FOR GRAVE:" + myparm + "</TITLE>\n")
          win.document.write("<LINK REL='STYLESHEET' TYPE='text/CSS' HREF='style.css'></HEAD><BODY>\n")

          win.document.write("<CENTER><A HREF='" + myback + ".htm'>BACK</A></CENTER>\n")

          win.document.write("<BODY><TABLE ALIGN='CENTER'><TR ALIGN='CENTER'><TD><B>" + myparm + "</B></TD></TR>\n")
          win.document.write("<TR><TD><font size='+1'>" + mytext + "</font></TD></TR>\n")

          if (  isNaN(mygotpic) == false )
             {
              if (mygotpic == 2) { myparm = "154-166" }
              win.document.write("<TR><TD ALIGN='CENTER'>")
              win.document.write("<IMG BORDER=1 ALT=' GRAVE: " + myparm + "' SRC='gravepics/" + myparm + ".jpg'></TD></TR>\n")
             }

          if (mygotpic == 2)
             {
             win.document.write("<TR><TD ALIGN='CENTER'>" + myerrmes + "</td></tr>")
             }
          win.document.write("</TABLE></BODY></HTML>")
         }
      }
   }
