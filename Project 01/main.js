/*######################################################################
|>>> Project : 'Opening Act' (React.js 'Learn-To-Command' Ops)
+-----------------------------------------------------------------------
| Description: Several sentence blurb
| Author:      Steven Eiselen, <affiliations as/applicable>
| Resource 01: 'Beginner's Tutorial for React JavaScript Library [2022]'
| Res 01 Link: https://www.youtube.com/watch?v=bMknfKXIFA8
| Libraries:   React (16.7.0 - development) | [https://reactjs.org/]
+-----------------------------------------------------------------------
| Implementation Notes:
|  > Blank CodePen: https://codepen.io/pen
+-----------------------------------------------------------------------
| Questions:
|  > Are we using JSX or no?
|  > Common/Suggested means of creating [local] server to run webpages
|    as to please the 'CORS Gods'?
+-----------------------------------------------------------------------
|            < OIC/OEC : Praise Be The Honourable Mentors! >            
+#####################################################################*/




const element = React.createElement('div', {
  className: 'container',
  children: Date.now().toLocaleString()
});