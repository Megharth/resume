(function(A){function t(t){for(var e,n,c=t[0],M=t[1],o=t[2],r=0,L=[];r<c.length;r++)n=c[r],a[n]&&L.push(a[n][0]),a[n]=0;for(e in M)Object.prototype.hasOwnProperty.call(M,e)&&(A[e]=M[e]);g&&g(t);while(L.length)L.shift()();return s.push.apply(s,o||[]),i()}function i(){for(var A,t=0;t<s.length;t++){for(var i=s[t],e=!0,c=1;c<i.length;c++){var M=i[c];0!==a[M]&&(e=!1)}e&&(s.splice(t--,1),A=n(n.s=i[0]))}return A}var e={},a={app:0},s=[];function n(t){if(e[t])return e[t].exports;var i=e[t]={i:t,l:!1,exports:{}};return A[t].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=A,n.c=e,n.d=function(A,t,i){n.o(A,t)||Object.defineProperty(A,t,{enumerable:!0,get:i})},n.r=function(A){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(A,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(A,"__esModule",{value:!0})},n.t=function(A,t){if(1&t&&(A=n(A)),8&t)return A;if(4&t&&"object"===typeof A&&A&&A.__esModule)return A;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:A}),2&t&&"string"!=typeof A)for(var e in A)n.d(i,e,function(t){return A[t]}.bind(null,e));return i},n.n=function(A){var t=A&&A.__esModule?function(){return A["default"]}:function(){return A};return n.d(t,"a",t),t},n.o=function(A,t){return Object.prototype.hasOwnProperty.call(A,t)},n.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],M=c.push.bind(c);c.push=t,c=c.slice();for(var o=0;o<c.length;o++)t(c[o]);var g=M;s.push([0,"chunk-vendors"]),i()})({0:function(A,t,i){A.exports=i("56d7")},"011c":function(A,t){A.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANIAAAC9CAYAAADGOyPNAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAOxAAADsQBlSsOGwAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAATsSURBVHic7dzPq6Z1Gcfx6/uMEwmtc9VWDAopcBkto1VRIO2iH9Qyoj9AcGEKIi1ahLh2Sp1pURD9xEUgtMqFgxUKurJCXYipDTMfF+ccGcJsZr7X/XyfJ1+v3fnB91zX4g33/XDfp4q9SPKZJI8leTHJO0n+meT3Sb6b5COr54ODluRckkeSXMt/93yST66eFQ5SkvNJnvqAgK73epJ7Vs8MB+U0oos3GNGZ15LcuXp2OAi3GNGZZ5OcW70DLDUZ0Zmvrd4DlmmKKEmeXL0LLJGTT+cuNESUJM+t3oebc9vqAf4fJDlfVT+tqq80HXl70znsyW71AMdug4iqql5qPIs9ENKEjSKqqvpt83lwmJrvia73RpKPr94PNpe+T+fezzdW7web2zii+1fvB5vLdpdzSfLQ6v1gcyKCSSKCSTm5J7okIrhFIoJJIoJJIoJJIoJJIoJJIoJJIoJJIoJJIoJJG0f04Or9YHMigkkigkkigkkigkkigkkigkkigkkigkkigkkigkkigkkigkkigkkigkkigkkigkkigkkigkkigkkigkkigkkigkkigkkigkkigkkigkkigkkigkmnEf1cRHCLRASTRASTRASTRASTRASTRASTRASTRASTRASTRASTRASTRASTRASTRASTRASTRASTRASTRASTRASTRASTRASTRASTRASTRASTRASTRASTRASTRASTNo7ovtX7wRbG9V8kOV9VT1bVlzb4W7+oql9ucC7syztV9UJVPTPGuHr9D94LKclHq+pPVfXp/c4GR+fvVfXDqvrxWVCjqirJ7VX1l6r6xLrZ4Oj8qqq+OsZ4a3f6jV+XiOBmfbGqflJVNZJ8vqqeXjoOHLfP7arqe6ungCP3nZHklaq6Y/UkcMReGkmuVNVtqyeBI3ZlJMnqKeDY7arq36uHgCP39q6q/rF6CjhyL++q6g+rp4Aj97uR5K6qulz/8dwdcEOuVtXduzHG81V1cfU0cKQeGGM8d/as3a6qnq2qT62dCY7Kj6rqB2OMa7uqqjHGtar6bFU9s3QsOHzXquqPVfWFMcb3T9t53/eRnqiqL28wwM+q6rENzoV9ebOq/jrGePV//ubGb8h6zZwPDzFBEzFBEzFBEzFBEzFBEzFBEzFBk9OYLokJJokJmogJmogJmogJmogJmogJmogJmogJmogJmogJmogJmogJmogJmogJmogJmogJmogJmogJmogJmogJmogJmmwc00Or94O9ERM0ERM0ERM0ERM0ERM0ERM0ERM0ERM0ERM0ERM0ERM0ERM0ERM0ERM0ERM0ERM0ERM0SXIuyQUxwSQxQRMxQRMxQRMxQRMxQRMxQRMxQRMxQRMxQRMxQRMxQRMxQRMxQRMxQRMxQRMxQRMxQRMxQRMxQRMxQRMxQRMxQRMxQZOc/BPKixvFdP/q/WBvNo7pm6v3g73JyWXe4xuE9EaSO1bvx83ZrR7gWI0xrlbV16vqUvPRH6uqbzefCYct21zmPb16L9i7DWJ6cfVO3ByXdg3GGFeq6t6qutB05L+azmFPhNSk+Z7pcsMZcLyaLvPuXb0HLDcZ05+TuFKAqluO6bUkd66eHQ7KaUxP3WBErye5Z/XMcJBy8gTEw0mufkBEl5PctXpWOHhJ7k7yaJK/JXk7yStJfpPkW0nOr56POe8C9kMT+I/5ftIAAAAASUVORK5CYII="},15:function(A,t){},"1a88":function(A,t,i){A.exports=i.p+"img/Megharth.e58377e2.png"},"29b2":function(A){A.exports={years:[{name:"2013",education:"Gujarat State Education Board (GSEB)",institute:"Mahan High School, Rajkot",score:"85%",imgUrl:"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0%0D%0Ab3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZl%0D%0AcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8x%0D%0AIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8v%0D%0Ad3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCINCgkgdmlld0JveD0iMCAwIDI5%0D%0ANi45OTkgMjk2Ljk5OSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMjk2Ljk5OSAy%0D%0AOTYuOTk5OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+DQo8Zz4NCgk8Zz4NCgkJPGc+DQoJCQk8cGF0%0D%0AaCBkPSJNNDUuNDMyLDM1LjA0OWMtMC4wMDgsMC0wLjAxNywwLTAuMDI1LDBjLTIuODA5LDAtNS40%0D%0ANTEsMS4wOTUtNy40NDYsMy4wODVjLTIuMDE3LDIuMDEyLTMuMTI4LDQuNjkxLTMuMTI4LDcuNTQz%0D%0ADQoJCQkJdjE1OS4zNjVjMCw1Ljg0NCw0Ljc3MywxMC42MSwxMC42NDEsMTAuNjI1YzI0LjczOCww%0D%0ALjA1OSw2Ni4xODQsNS4yMTUsOTQuNzc2LDM1LjEzNlY4NC4wMjNjMC0xLjk4MS0wLjUwNi0zLjg0%0D%0AMi0xLjQ2MS01LjM4Mg0KCQkJCUMxMTUuMzIyLDQwLjg0OSw3MC4yMjYsMzUuMTA3LDQ1LjQzMiwz%0D%0ANS4wNDl6Ii8+DQoJCQk8cGF0aCBkPSJNMjYyLjE2NywyMDUuMDQyVjQ1LjY3NmMwLTIuODUyLTEu%0D%0AMTExLTUuNTMxLTMuMTI4LTcuNTQzYy0xLjk5NS0xLjk5LTQuNjM5LTMuMDg1LTcuNDQ1LTMuMDg1%0D%0AYy0wLjAwOSwwLTAuMDE4LDAtMC4wMjYsMA0KCQkJCWMtMjQuNzkzLDAuMDU5LTY5Ljg4OSw1Ljgw%0D%0AMS05My4zNTcsNDMuNTkzYy0wLjk1NSwxLjU0LTEuNDYsMy40MDEtMS40Niw1LjM4MnYxNjYuNzc5%0D%0ADQoJCQkJYzI4LjU5Mi0yOS45MjEsNzAuMDM4LTM1LjA3Nyw5NC43NzYtMzUuMTM2QzI1Ny4zOTQs%0D%0AMjE1LjY1MSwyNjIuMTY3LDIxMC44ODUsMjYyLjE2NywyMDUuMDQyeiIvPg0KCQkJPHBhdGggZD0i%0D%0ATTI4Ni4zNzMsNzEuODAxaC03LjcwNnYxMzMuMjQxYzAsMTQuOTIxLTEyLjE1NywyNy4wODgtMjcu%0D%0AMTAxLDI3LjEyNWMtMjAuOTgzLDAuMDUtNTUuNTgxLDQuMTUzLTgwLjA4NCwyNy4zNDQNCgkJCQlj%0D%0ANDIuMzc4LTEwLjM3Niw4Ny4wNTItMy42MzEsMTEyLjUxMiwyLjE3MWMzLjE3OSwwLjcyNCw2LjQ2%0D%0ANC0wLjAyNCw5LjAxMS0yLjA1NGMyLjUzOC0yLjAyNSwzLjk5NC01LjA1MiwzLjk5NC04LjMwMVY4%0D%0AMi40MjcNCgkJCQlDMjk3LDc2LjU2OCwyOTIuMjMyLDcxLjgwMSwyODYuMzczLDcxLjgwMXoiLz4N%0D%0ACgkJCTxwYXRoIGQ9Ik0xOC4zMzIsMjA1LjA0MlY3MS44MDFoLTcuNzA2QzQuNzY4LDcxLjgwMSww%0D%0ALDc2LjU2OCwwLDgyLjQyN3YxNjguODk3YzAsMy4yNSwxLjQ1Niw2LjI3NiwzLjk5NCw4LjMwMQ0K%0D%0ACQkJCWMyLjU0NSwyLjAyOSw1LjgyNywyLjc4LDkuMDExLDIuMDU0YzI1LjQ2LTUuODAzLDcwLjEz%0D%0ANS0xMi41NDcsMTEyLjUxMS0yLjE3MWMtMjQuNTAyLTIzLjE5LTU5LjEtMjcuMjkyLTgwLjA4My0y%0D%0ANy4zNDINCgkJCQlDMzAuNDksMjMyLjEzLDE4LjMzMiwyMTkuOTYzLDE4LjMzMiwyMDUuMDQyeiIv%0D%0APg0KCQk8L2c+DQoJPC9nPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0K%0D%0APGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxn%0D%0APg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4N%0D%0ACjwvZz4NCjxnPg0KPC9nPg0KPC9zdmc+DQo="},{name:"2015",education:"Gujarat State Higher Education Board (GSHEB)",institute:"Utkarsh School of Excellence, Rajkot",score:"85%",imgUrl:"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0%0D%0Ab3I6IEFkb2JlIElsbHVzdHJhdG9yIDE2LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZl%0D%0AcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8v%0D%0ARFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQv%0D%0Ac3ZnMTEuZHRkIj4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4bWxucz0iaHR0cDov%0D%0AL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5%0D%0AL3hsaW5rIiB4PSIwcHgiIHk9IjBweCINCgkgd2lkdGg9IjQwMHB4IiBoZWlnaHQ9IjM5OS45OTlw%0D%0AeCIgdmlld0JveD0iMCAwIDQwMCAzOTkuOTk5IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3%0D%0AIDAgMCA0MDAgMzk5Ljk5OTsiIHhtbDpzcGFjZT0icHJlc2VydmUiDQoJPg0KPGc+DQoJPGc+DQoJ%0D%0ACTxwYXRoIGQ9Ik0zNzYuODY1LDM2MC4wMTFWMTc5LjI2YzAtOS40MzQtNy42NDYtMTcuMDgyLTE3%0D%0ALjA4LTE3LjA4MmgtODEuMTEydi00OS4xNzljMC00LjY0NS0yLjUxNy04LjkyNi02LjU3MS0xMS4x%0D%0AODgNCgkJCWwtNjUuODYtMzYuNzI5Yy0wLjM2My0wLjIwMy0wLjczOC0wLjM4MS0xLjExNS0wLjU0%0D%0ANXYtMjAuOTZoMzUuNDY1YzIuODI5LDAsNS4xMjQtMi4yOTUsNS4xMjQtNS4xMjVWMTIuNTY2DQoJ%0D%0ACQljMC0yLjgzLTIuMjk1LTUuMTI1LTUuMTI0LTUuMTI1aC0zNS40NjVWNS4xMjVjMC0yLjgzLTIu%0D%0AMjkzLTUuMTI1LTUuMTI0LTUuMTI1Yy0yLjgzMSwwLTUuMTI0LDIuMjk1LTUuMTI0LDUuMTI1djU5%0D%0ALjQxMg0KCQkJYy0wLjM3NywwLjE2NS0wLjc1MiwwLjM0My0xLjExNiwwLjU0NWwtNjUuODYsMzYu%0D%0ANzNjLTQuMDU4LDIuMjYxLTYuNTczLDYuNTQzLTYuNTczLDExLjE4OHY0OS4xNzhINDAuMjE2DQoJ%0D%0ACQljLTkuNDM0LDAtMTcuMDgsNy42NDgtMTcuMDgsMTcuMDgydjE4MC43NWMtNy4yNTcsMy4yODQt%0D%0AMTIuMzA4LDEwLjU4My0xMi4zMDgsMTkuMDY0YzAsMTEuNTU4LDkuMzY4LDIwLjkyNSwyMC45MjQs%0D%0AMjAuOTI1DQoJCQloMzM2LjQ5NmMxMS41NTYsMCwyMC45MjQtOS4zNjcsMjAuOTI0LTIwLjkyNUMz%0D%0AODkuMTcxLDM3MC41OTMsMzg0LjEyMSwzNjMuMjk0LDM3Ni44NjUsMzYwLjAxMXogTTMxMC44NDEs%0D%0AMjIxLjcxNg0KCQkJYzAtNS40OTUsNC40NTUtOS45NSw5Ljk1NC05Ljk1SDMzOS40YzUuNDk0LDAs%0D%0AOS45NSw0LjQ1NSw5Ljk1LDkuOTV2MTguNjA3YzAsNS40OTUtNC40NTYsOS45NS05Ljk1LDkuOTVo%0D%0ALTE4LjYwNA0KCQkJYy01LjQ5OSwwLTkuOTU0LTQuNDU1LTkuOTU0LTkuOTVWMjIxLjcxNkwzMTAu%0D%0AODQxLDIyMS43MTZ6IE0zMTAuODQxLDI4MS41YzAtNS40OTUsNC40NTUtOS45NSw5Ljk1NC05Ljk1%0D%0ASDMzOS40DQoJCQljNS40OTQsMCw5Ljk1LDQuNDU1LDkuOTUsOS45NXYxOC42MDVjMCw1LjQ5NS00%0D%0ALjQ1Niw5Ljk1LTkuOTUsOS45NWgtMTguNjA0Yy01LjQ5OSwwLTkuOTU0LTQuNDU1LTkuOTU0LTku%0D%0AOTVWMjgxLjVMMzEwLjg0MSwyODEuNQ0KCQkJeiBNMjUxLjA2LDIyMS43MTZjMC01LjQ5NSw0LjQ1%0D%0AMy05Ljk1LDkuOTQ4LTkuOTVoMTguNjA3YzUuNDkyLDAsOS45NDksNC40NTUsOS45NDksOS45NXYx%0D%0AOC42MDdjMCw1LjQ5NS00LjQ1Nyw5Ljk1LTkuOTQ5LDkuOTUNCgkJCWgtMTguNjA3Yy01LjQ5NSww%0D%0ALTkuOTQ4LTQuNDU1LTkuOTQ4LTkuOTVWMjIxLjcxNnogTTI1MS4wNiwyODEuNWMwLTUuNDk1LDQu%0D%0ANDUzLTkuOTUsOS45NDgtOS45NWgxOC42MDcNCgkJCWM1LjQ5MiwwLDkuOTQ5LDQuNDU1LDkuOTQ5%0D%0ALDkuOTV2MTguNjA1YzAsNS40OTUtNC40NTcsOS45NS05Ljk0OSw5Ljk1aC0xOC42MDdjLTUuNDk1%0D%0ALDAtOS45NDgtNC40NTUtOS45NDgtOS45NVYyODEuNXoNCgkJCSBNMjAwLDExMy4wMzljMTUuNTY2%0D%0ALDAsMjguMTg1LDEyLjYxOCwyOC4xODUsMjguMTg0UzIxNS41NjcsMTY5LjQwNiwyMDAsMTY5LjQw%0D%0ANmMtMTUuNTY2LDAtMjguMTg0LTEyLjYxOC0yOC4xODQtMjguMTg0DQoJCQlTMTg0LjQzNCwxMTMu%0D%0AMDM5LDIwMCwxMTMuMDM5eiBNMTcxLjc3NywyNzQuODM2YzAtNS40OTUsNC40NTQtOS45NSw5Ljk1%0D%0AMy05Ljk1aDM2LjU0MWM1LjQ5NiwwLDkuOTUsNC40NTUsOS45NSw5Ljk1djc4LjM5DQoJCQljMCwx%0D%0ALjc5NC0wLjQ3OSwzLjQ3NS0xLjMxMiw0LjkyOWgtNTMuODE0Yy0wLjgzMy0xLjQ1NC0xLjMxNS0z%0D%0ALjEzNS0xLjMxNS00LjkyOUwxNzEuNzc3LDI3NC44MzZMMTcxLjc3NywyNzQuODM2eg0KCQkJIE0x%0D%0AMTAuNDM0LDIyMS43MTZjMC01LjQ5NSw0LjQ1NC05Ljk1LDkuOTQ5LTkuOTVoMTguNjA2YzUuNDk1%0D%0ALDAsOS45NDksNC40NTUsOS45NDksOS45NXYxOC42MDdjMCw1LjQ5NS00LjQ1NCw5Ljk1LTkuOTQ5%0D%0ALDkuOTUNCgkJCWgtMTguNjA2Yy01LjQ5NSwwLTkuOTQ5LTQuNDU1LTkuOTQ5LTkuOTVWMjIxLjcx%0D%0ANnogTTExMC40MzQsMjgxLjVjMC01LjQ5NSw0LjQ1NC05Ljk1LDkuOTQ5LTkuOTVoMTguNjA2DQoJ%0D%0ACQljNS40OTUsMCw5Ljk0OSw0LjQ1NSw5Ljk0OSw5Ljk1djE4LjYwNWMwLDUuNDk1LTQuNDU0LDku%0D%0AOTUtOS45NDksOS45NWgtMTguNjA2Yy01LjQ5NSwwLTkuOTQ5LTQuNDU1LTkuOTQ5LTkuOTVWMjgx%0D%0ALjV6DQoJCQkgTTUwLjY0NywyMjEuNzE2YzAtNS40OTUsNC40NTQtOS45NSw5Ljk1Mi05Ljk1aDE4%0D%0ALjYwNGM1LjQ5NywwLDkuOTUyLDQuNDU1LDkuOTUyLDkuOTV2MTguNjA3YzAsNS40OTUtNC40NTUs%0D%0AOS45NS05Ljk1Miw5Ljk1DQoJCQlINjAuNmMtNS40OTgsMC05Ljk1Mi00LjQ1NS05Ljk1Mi05Ljk1%0D%0AVjIyMS43MTZ6IE01MC42NDcsMjgxLjVjMC01LjQ5NSw0LjQ1NC05Ljk1LDkuOTUyLTkuOTVoMTgu%0D%0ANjA0DQoJCQljNS40OTcsMCw5Ljk1Miw0LjQ1NSw5Ljk1Miw5Ljk1djE4LjYwNWMwLDUuNDk1LTQu%0D%0ANDU1LDkuOTUtOS45NTIsOS45NUg2MC42Yy01LjQ5OCwwLTkuOTUyLTQuNDU1LTkuOTUyLTkuOTVW%0D%0AMjgxLjV6Ii8+DQoJPC9nPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0K%0D%0APGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxn%0D%0APg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4N%0D%0ACjwvZz4NCjxnPg0KPC9nPg0KPC9zdmc+DQo="},{name:"Current",education:"B. Tech, Information Technology",institute:"Birla Vishvakarma Mahavidyalaya, Vallabh Vidyanagar",score:"9.2 CGPA",imgUrl:"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0%0D%0Ab3I6IEFkb2JlIElsbHVzdHJhdG9yIDE4LjEuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZl%0D%0AcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEi%0D%0AIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93%0D%0Ad3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgMzk4%0D%0ALjk3IDM5OC45NyIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMzk4Ljk3IDM5OC45%0D%0ANzsiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPGc+DQoJPGcgaWQ9IkxheWVyXzVfNTlfIj4NCgkJ%0D%0APGc+DQoJCQk8cGF0aCBkPSJNMjI1LjA5MiwyNzYuNTg2Yy03LjEwMSw0LjM1NS0xNi4xOTUsNi43%0D%0ANTQtMjUuNjA3LDYuNzU0Yy05LjQxMiwwLTE4LjUwNi0yLjM5OC0yNS42MDctNi43NTRMNTcuOTQ2%0D%0ALDIwNS40ODQNCgkJCQljMCwwLTEwLjQ2NC02LjQxNC0xMC40NjQsOC4xMTZjMCwxNi41LDAsNjYs%0D%0AMCw2NmMwLDAuNjYsMCwzLjk3MywwLDVjMCwzNy40MDIsNjguMDUzLDc3LjcyMywxNTIsNzcuNzIz%0D%0AczE1Mi00MC4zMiwxNTItNzcuNzIzDQoJCQkJYzAtMS4wMjcsMC00LjM0LDAtNWMwLDAsMC01Mi41%0D%0AMDIsMC03MC4wMDNjMC0xMS42NjMtNy40MzktNS45NjQtNy40MzktNS45NjRMMjI1LjA5MiwyNzYu%0D%0ANTg2eiIvPg0KCQkJPHBhdGggZD0iTTM5Mi4yODksMTQ4LjkyN2M4LjkwOC01LjQ2Myw4LjkwOC0x%0D%0ANC40MDMsMC0xOS44NjdMMjE1LjY4MSw0MC43NDVjLTguOTA4LTUuNDYzLTIzLjQ4NS01LjQ2My0z%0D%0AMi4zOTMsMEw2LjY4MSwxMjkuMDYNCgkJCQljLTguOTA4LDUuNDYzLTguOTA4LDE0LjQwMywwLDE5%0D%0ALjg2N2wxNzYuNjA3LDEwOC4zMTVjOC45MDgsNS40NjMsMjMuNDg1LDUuNDYzLDMyLjM5MywwIi8+%0D%0ADQoJCQk8cGF0aCBkPSJNMzg0Ljk4NSwzMDkuNDc1YzAtMjkuOTA2LDAtMTE5LjYyNSwwLTExOS42%0D%0AMjVzMC4wODMtNS42NjYtMy4yNzktMy43OTVjLTIuNjk3LDEuNTAxLTkuMzA4LDUuMTg2LTExLjYz%0D%0ANyw3LjIxMg0KCQkJCWMtMi42ODksMi4zMzctMi4wODMsNy41ODMtMi4wODMsNy41ODNzMCw4MS40%0D%0ANjksMCwxMDguNjI1YzAsMS41NDItMS4zMjUsMi4yNzgtMS45NTcsMi42NQ0KCQkJCWMtNi4xMDUs%0D%0AMy41ODktMTAuMjEsMTAuMjE0LTEwLjIxLDE3LjgwOWMwLDExLjQxNCw5LjI1MiwyMC42NjcsMjAu%0D%0ANjY3LDIwLjY2N2MxMS40MTQsMCwyMC42NjYtOS4yNTMsMjAuNjY2LTIwLjY2Nw0KCQkJCWMwLTcu%0D%0ANjI0LTQuMTM1LTE0LjI3LTEwLjI3OS0xNy44NUMzODYuMjYyLDMxMS43MjgsMzg0Ljk4NSwzMTEu%0D%0AMDE2LDM4NC45ODUsMzA5LjQ3NXoiLz4NCgkJPC9nPg0KCTwvZz4NCjwvZz4NCjxnPg0KPC9nPg0K%0D%0APGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxn%0D%0APg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4N%0D%0ACjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjwvc3ZnPg0K"}]}},"2c36":function(A,t){A.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAksAAAEfCAYAAABRSoJ+AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAOxAAADsQBlSsOGwAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAQxSURBVHic7daxbUMxFMBA6cP7b+iMkIzwsoDBzpCKuwlYcs/MLAAAPnpOBwAA3MwsAQAEswQAEMwSAEAwSwAAwSwBAASzBAAQzBIAQDBLAADBLAEABLMEABDMEgBAMEsAAMEsAQAEswQAEMwSAEAwSwAAwSwBAASzBAAQzBIAQDBLAADBLAEABLMEABDMEgBAMEsAAMEsAQAEswQAEMwSAEAwSwAAwSwBAASzBAAQzBIAQDBLAADBLAEABLMEABDMEgBAMEsAAMEsAQAEswQAEMwSAEAwSwAAwSwBAASzBAAQzBIAQDBLAADBLAEABLMEABDMEgBAMEsAAMEsAQAEswQAEMwSAEAwSwAAwSwBAASzBAAQzBIAQDBLAADhtdb6OR0BAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwNfsmfk9HQEAcKs9M3M6AgDgVs/pAACAm5klAIBglgAAglkCAAhmCQAgmCUAgGCWAACCWQIACGYJACCYJQCAYJYAAIJZAgAIZgkAIJglAIBglgAAglkCAAhmCQAgmCUAgGCWAACCWQIACGYJACCYJQCAYJYAAIJZAgAIZgkAIJglAIBglgAAglkCAAhmCQAgmCUAgGCWAACCWQIACGYJACCYJQCAYJYAAIJZAgAIZgkAIJglAIBglgAAglkCAAhmCQAgmCUAgGCWAACCWQIACGYJACCYJQCAYJYAAIJZAgAIZgkAIJglAIBglgAAglkCAAhmCQAgmCUAgGCWAACCWQIACK+11t/pCAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAC+Zs/M+3QEAMCt9szM6QgAgFs9pwMAAG5mlgAAglkCAAhmCQAgmCUAgGCWAACCWQIACGYJACCYJQCAYJYAAIJZAgAIZgkAIJglAIBglgAAglkCAAhmCQAgmCUAgGCWAACCWQIACGYJACCYJQCAYJYAAIJZAgAIZgkAIJglAIBglgAAglkCAAhmCQAgmCUAgGCWAACCWQIACGYJACCYJQCAYJYAAIJZAgAIZgkAIJglAIBglgAAglkCAAhmCQAgmCUAgGCWAACCWQIACGYJACCYJQCAYJYAAIJZAgAIZgkAIJglAIBglgAAglkCAAhmCQAgmCUAgGCWAACCWQIACGYJACCYJQCA8A+QIRbovdG1CgAAAABJRU5ErkJggg=="},"34ee":function(A,t,i){"use strict";var e=i("9c5f"),a=i.n(e);a.a},"3c26":function(A,t){A.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANIAAAC9CAYAAADGOyPNAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAOxAAADsQBlSsOGwAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAASFSURBVHic7dw9q2X1GcbhZ+3DTGIg5XwDXzA4kEa00C8wJIFMo8EyCgaENIE0FipWAQs7wdLGwGhlTDFEUEmVQkhIREUIKARBFGzOGF/uFHpgFGeYmefZrrNyrqvcB/7cq/ix1347VWxaktNJHk7ySpIPk1xK8m6SZ5P8dO19cOwl+UmSt3JlXyR5KsnB2lvhWEpyZ5KPrxLR5S4kObX2ZjhWktyW5KNrjOjIC2KCryU5SPKP64xITHC5JA/cYERigiNJXmyGJCbI1d+lE9NKdmsP4LqdHjrnfFU9L6YZQtqe9wbPEtMQIW3PxeHzxMTJk+RMkk+GXid5zcTJleTXewhJTJw8SZ4QEwxI8riYYICYYIiYYMgeY3opyQ/Wvj743ogJhogJhogJhogJhogJhogJhogJhogJhogJhiR5TEwwQEwwREwwREwwREwwREwwREwwREwwREwwREwwREwwREwwREwwREwwREwwREwwREwwREwwREwwREwwREwwREwwREwwREwwREwwREwwREwwREwwREwwZI8x/UlMnChigiFigiFigiFigiFigiFigiFigiFigiFigiFigiFigiFigiFigiFigiFigiFigiFigiFigiFigiFigiFigiFigiFigiFigiFigiFigiFigiFJfi8mGPB9x7RcYcSZqrqlqn607wuGPbqvqh7cw7kvV9X5ZVk+PXrgGyElOVdVj1bV3d/+G/ANf6uqe49iWqqqkuyq6umqemTFYbA1b1bVHcuyfLn7+oEnS0RwvW6vqj9WVS1JzlbVG1V1sOok2KZU1dldffVMJCK4MUtV/W5J8k5V3bz2Gtiw95Ykh1X1w7WXwIb9d0mStVfA1u2q6rO1R8DGfb6rqv+svQI27sNdVb229grYuFeXJPeWmKDjnt2yLK9X1XNrL4GN+suyLH89+q7dTVV1oarOrbsJNuX9qrplWZZLu6qqZVkOq+oXVfXbqvpgzWWwEf+sqluXZblU9R0/lUhyUFV31VffdvBBLVv286r62R7O/XNV/fLy3yPB/6X43w3QIyJoEhE0iQiaRARNIoImEUGTiKBpjxG9JCJOBBFBk4igSUTQJCJoEhE0iQiaRARNIoImEUGTiKBJRNAkImgSETSJCJpEBE0igiYRQZOIoElE0CQiaBIRNCV5XETQICJoEhE0iQiaRARNIoImEUGTiKBJRNAkImgSETSJCJpEBE0igiYRQZOIoElE0CQiaNpjRC8kObX29cHeiQiaRARNIoImEUGTiKBJRNAkImgSETSJCJpEBE0igiYRQZOIoElE0CQiaBIRNIkImkQETSKCJhFBk4igSUTQJCJoSvKEiKAhyYMigoYkZ5J8IqLjZbf2AK7bb6rqx8NnvlhV9y/L8tnwuXA8JXndMxE0Jfm3iI4ft3bbczh0jtu5QULann8NnCEiTrYkv3I7B01JDpL8XUTQlOTWJB+JCJqS3Jnk42uM6IKI4AqS3J7kzasE9EWSPyQ5WHsrHGtJTiV5KMnFJB8kOUzydpJnkpxde99J8T9+4w1sF0vVZQAAAABJRU5ErkJggg=="},"403b":function(A,t,i){},"4c44":function(A,t,i){},"4fdc":function(A,t,i){"use strict";var e=i("4c44"),a=i.n(e);a.a},5401:function(A,t,i){"use strict";var e=i("672a"),a=i.n(e);a.a},"56d7":function(A,t,i){"use strict";i.r(t);var e=i("9f7b"),a=(i("f9e3"),i("2dd8"),i("2b0e")),s=function(){var A=this,t=A.$createElement,e=A._self._c||t;return e("div",{attrs:{id:"app"}},[e("div",{staticClass:"menu",on:{click:function(t){A.open=!A.open}}},[A._m(0)]),e("transition",{attrs:{name:"open"}},[A.open?e("navbarComponent",{on:{changepage:function(t){A.changePage(t)}}}):A._e()],1),0===A.pageNo?e("mainComponent"):A._e(),1===A.pageNo?e("skillComponent"):A._e(),2===A.pageNo?e("educationComponent"):A._e(),3===A.pageNo?e("projectsComponent"):A._e(),4===A.pageNo?e("contactComponent"):A._e(),e("div",{staticClass:"navigator"},[A.pageNo>0?e("div",{staticClass:"prev-btn"},[e("img",{staticClass:"img-fluid",attrs:{src:i("011c"),alt:"prev"},on:{click:function(t){A.pageNo=A.pageNo-1}}})]):A._e(),A.pageNo<A.pages-1?e("div",{staticClass:"next-btn"},[e("img",{staticClass:"img-fluid",attrs:{src:i("3c26"),alt:"next"},on:{click:function(t){A.pageNo=A.pageNo+1}}})]):A._e()])],1)},n=[function(){var A=this,t=A.$createElement,e=A._self._c||t;return e("div",[e("img",{staticClass:"img-fluid",attrs:{src:i("2c36"),alt:"menu"}})])}],c=function(){var A=this,t=A.$createElement,i=A._self._c||t;return i("div",{attrs:{id:"navbar"}},[i("ul",{staticClass:"bar"},[i("li",[i("a",{attrs:{href:"#"},on:{click:function(t){A.$emit("changepage",0)}}},[A._v("Home")])]),i("li",[i("a",{attrs:{href:"#"},on:{click:function(t){A.$emit("changepage",1)}}},[A._v("Skills")])]),i("li",[i("a",{attrs:{href:"#"},on:{click:function(t){A.$emit("changepage",2)}}},[A._v("Education")])]),i("li",[i("a",{attrs:{href:"#"},on:{click:function(t){A.$emit("changepage",3)}}},[A._v("Projects")])]),i("li",[i("a",{attrs:{href:"#"},on:{click:function(t){A.$emit("changepage",4)}}},[A._v("Contact")])])])])},M=[],o={name:"NavbarComponent",data(){return{open:!1}}},g=o,r=(i("5ea0"),i("2877")),L=Object(r["a"])(g,c,M,!1,null,"12fcf0ba",null);L.options.__file="navbarComponent.vue";var u=L.exports,l=function(){var A=this,t=A.$createElement,i=A._self._c||t;return i("div",{attrs:{id:"mainComponent"}},[A._m(0),i("div",{staticClass:"text"},[A._m(1),i("div",{staticClass:"occupation"},[A._v(A._s(A.content.occupation))])]),i("div",{staticClass:"social"},A._l(A.content.socialHandles,function(A){return i("a",{attrs:{href:A.link}},[i("img",{staticClass:"img-fluid",attrs:{src:A.imgUrl,alt:A.name}})])}))])},C=[function(){var A=this,t=A.$createElement,e=A._self._c||t;return e("div",{staticClass:"img"},[e("img",{staticClass:"image img-fluid",attrs:{src:i("1a88"),alt:"Megharth"}})])},function(){var A=this,t=A.$createElement,i=A._self._c||t;return i("div",[A._v("Hello I'm "),i("span",{staticClass:"name"},[A._v("Megharth Lakhataria")])])}],N=i("c0c1"),j={name:"mainContent",data(){return{content:N}}},w=j,D=(i("34ee"),Object(r["a"])(w,l,C,!1,null,"9a1c5dc8",null));D.options.__file="mainComponent.vue";var k=D.exports,T=function(){var A=this,t=A.$createElement,i=A._self._c||t;return i("div",{attrs:{id:"skillComponent"}},[i("div",{staticClass:"container"},[i("div",{staticClass:"text"},[A._v("\n      Skills and Technologies worked with\n    ")]),i("div",{staticClass:"icons-container"},[i("div",{staticClass:"icons"},[i("svg",{staticClass:"icon svg-inline--fa fa-js-square fa-w-14",attrs:{"aria-hidden":"true","data-prefix":"fab","data-icon":"js-square",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512"}},[i("path",{attrs:{stroke:"#fff","stroke-width":"10px",d:"M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zM243.8 381.4c0 43.6-25.6 63.5-62.9 63.5-33.7 0-53.2-17.4-63.2-38.5l34.3-20.7c6.6 11.7 12.6 21.6 27.1 21.6 13.8 0 22.6-5.4 22.6-26.5V237.7h42.1v143.7zm99.6 63.5c-39.1 0-64.4-18.6-76.7-43l34.3-19.8c9 14.7 20.8 25.6 41.5 25.6 17.4 0 28.6-8.7 28.6-20.8 0-14.4-11.4-19.5-30.7-28l-10.5-4.5c-30.4-12.9-50.5-29.2-50.5-63.5 0-31.6 24.1-55.6 61.6-55.6 26.8 0 46 9.3 59.8 33.7L368 290c-7.2-12.9-15-18-27.1-18-12.3 0-20.1 7.8-20.1 18 0 12.6 7.8 17.7 25.9 25.6l10.5 4.5c35.8 15.3 55.9 31 55.9 66.2 0 37.8-29.8 58.6-69.7 58.6z"}})]),i("svg",{staticClass:"icon svg-inline--fa fa-vuejs fa-w-14",attrs:{"aria-hidden":"true","data-prefix":"fab","data-icon":"vuejs",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512"}},[i("path",{attrs:{stroke:"#fff","stroke-width":"10px",d:"M356.9 64.3H280l-56 88.6-48-88.6H0L224 448 448 64.3h-91.1zm-301.2 32h53.8L224 294.5 338.4 96.3h53.8L224 384.5 55.7 96.3z"}})]),i("svg",{staticClass:"icon svg-inline--fa fa-sass fa-w-20",attrs:{"aria-hidden":"true","data-prefix":"fab","data-icon":"sass",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 640 512"}},[i("path",{attrs:{stroke:"#fff","stroke-width":"10px",d:"M551.1 291.9c-22.4.1-41.8 5.5-58 13.5-5.9-11.9-12-22.3-13-30.1-1.2-9.1-2.5-14.5-1.1-25.3s7.7-26.1 7.6-27.2c-.1-1.1-1.4-6.6-14.3-6.7-12.9-.1-24 2.5-25.3 5.9-1.3 3.4-3.8 11.1-5.3 19.1-2.3 11.7-25.8 53.5-39.1 75.3-4.4-8.5-8.1-16-8.9-22-1.2-9.1-2.5-14.5-1.1-25.3s7.7-26.1 7.6-27.2c-.1-1.1-1.4-6.6-14.3-6.7-12.9-.1-24 2.5-25.3 5.9-1.3 3.4-2.7 11.4-5.3 19.1-2.6 7.7-33.9 77.3-42.1 95.4-4.2 9.2-7.8 16.6-10.4 21.6s-.2.3-.4.9c-2.2 4.3-3.5 6.7-3.5 6.7v.1c-1.7 3.2-3.6 6.1-4.5 6.1-.6 0-1.9-8.4.3-19.9 4.7-24.2 15.8-61.8 15.7-63.1-.1-.7 2.1-7.2-7.3-10.7-9.1-3.3-12.4 2.2-13.2 2.2-.8 0-1.4 2-1.4 2s10.1-42.4-19.4-42.4c-18.4 0-44 20.2-56.6 38.5-7.9 4.3-25 13.6-43 23.5-6.9 3.8-14 7.7-20.7 11.4-.5-.5-.9-1-1.4-1.5-35.8-38.2-101.9-65.2-99.1-116.5 1-18.7 7.5-67.8 127.1-127.4 98-48.8 176.4-35.4 189.9-5.6 19.4 42.5-41.9 121.6-143.7 133-38.8 4.3-59.2-10.7-64.3-16.3-5.3-5.9-6.1-6.2-8.1-5.1-3.3 1.8-1.2 7 0 10.1 3 7.9 15.5 21.9 36.8 28.9 18.7 6.1 64.2 9.5 119.2-11.8C367 196.5 415.1 130.2 401 74.7 386.6 18.3 293.1-.2 204.6 31.2 151.9 49.9 94.9 79.3 53.9 117.6 5.2 163.2-2.6 202.9.6 219.5c11.4 58.9 92.6 97.3 125.1 125.7-1.6.9-3.1 1.7-4.5 2.5-16.3 8.1-78.2 40.5-93.7 74.7-17.5 38.8 2.9 66.6 16.3 70.4 41.8 11.6 84.6-9.3 107.6-43.6s20.2-79.1 9.6-99.5c-.1-.3-.3-.5-.4-.8 4.2-2.5 8.5-5 12.8-7.5 8.3-4.9 16.4-9.4 23.5-13.3-4 10.8-6.9 23.8-8.4 42.6-1.8 22 7.3 50.5 19.1 61.7 5.2 4.9 11.5 5 15.4 5 13.8 0 20-11.4 26.9-25 8.5-16.6 16-35.9 16-35.9s-9.4 52.2 16.3 52.2c9.4 0 18.8-12.1 23-18.3v.1s.2-.4.7-1.2c1-1.5 1.5-2.4 1.5-2.4v-.3c3.8-6.5 12.1-21.4 24.6-46 16.2-31.8 31.7-71.5 31.7-71.5s1.4 9.7 6.2 25.8c2.8 9.5 8.7 19.9 13.4 30-3.8 5.2-6.1 8.2-6.1 8.2s0 .1.1.2c-3 4-6.4 8.3-9.9 12.5-12.8 15.2-28 32.6-30 37.6-2.4 5.9-1.8 10.3 2.8 13.7 3.4 2.6 9.4 3 15.7 2.5 11.5-.8 19.6-3.6 23.5-5.4 6.2-2.2 13.4-5.7 20.2-10.6 12.5-9.2 20.1-22.4 19.4-39.8-.4-9.6-3.5-19.2-7.3-28.2 1.1-1.6 2.3-3.3 3.4-5 19.8-28.9 35.1-60.6 35.1-60.6s1.4 9.7 6.2 25.8c2.4 8.1 7.1 17 11.4 25.7-18.6 15.1-30.1 32.6-34.1 44.1-7.4 21.3-1.6 30.9 9.3 33.1 4.9 1 11.9-1.3 17.1-3.5 6.5-2.2 14.3-5.7 21.6-11.1 12.5-9.2 24.6-22.1 23.8-39.6-.3-7.9-2.5-15.8-5.4-23.4 15.7-6.6 36.1-10.2 62.1-7.2 55.7 6.5 66.6 41.3 64.5 55.8-2.1 14.6-13.8 22.6-17.7 25-3.9 2.4-5.1 3.3-4.8 5.1.5 2.6 2.3 2.5 5.6 1.9 4.6-.8 29.2-11.8 30.3-38.7 1.6-34-31.1-71.4-89-71.1zM121.8 436.6c-18.4 20.1-44.2 27.7-55.3 21.3C54.6 451 59.3 421.4 82 400c13.8-13 31.6-25 43.4-32.4 2.7-1.6 6.6-4 11.4-6.9.8-.5 1.2-.7 1.2-.7.9-.6 1.9-1.1 2.9-1.7 8.3 30.4.3 57.2-19.1 78.3zm134.4-91.4c-6.4 15.7-19.9 55.7-28.1 53.6-7-1.8-11.3-32.3-1.4-62.3 5-15.1 15.6-33.1 21.9-40.1 10.1-11.3 21.2-14.9 23.8-10.4 3.5 5.9-12.2 49.4-16.2 59.2zm111 53c-2.7 1.4-5.2 2.3-6.4 1.6-.9-.5 1.1-2.4 1.1-2.4s13.9-14.9 19.4-21.7c3.2-4 6.9-8.7 10.9-13.9 0 .5.1 1 .1 1.6-.1 17.9-17.3 30-25.1 34.8zm85.6-19.5c-2-1.4-1.7-6.1 5-20.7 2.6-5.7 8.6-15.3 19-24.5 1.2 3.8 1.9 7.4 1.9 10.8-.1 22.5-16.2 30.9-25.9 34.4z"}})]),i("svg",{staticClass:"icon",attrs:{viewBox:"0 0 60.008727 84.869488"}},[i("g",{attrs:{"inkscape:groupmode":"layer",id:"layer2","inkscape:label":"trace",transform:"translate(-51.184159,-87.694374)"}},[i("g",{attrs:{id:"g823"}},[i("rect",{staticStyle:{opacity:"1",fill:"none",stroke:"none","stroke-width":"1.3609165","stroke-linejoin":"miter","stroke-miterlimit":"4","stroke-dasharray":"none"},attrs:{y:"87.694374",x:"38.775303",height:"84.869492",width:"84.869492",id:"rect819"}}),i("path",{attrs:{"inkscape:connector-curvature":"0",id:"path831",d:"m 81.524884,125.86339 c 0,0 3.842,-5.11153 7.65059,-5.57925 3.80859,-0.46772 7.55036,-0.63476 11.926896,2.50565 4.37654,3.14042 9.68852,8.65285 11.05828,9.2208 1.36974,0.56795 3.07359,0.33409 3.07359,0.33409 0,0 3.34087,-0.50113 3.24064,-3.27405 -0.10022,-2.77292 -2.63929,-2.53906 -2.90655,-2.43884 -0.26728,0.10023 -1.25283,0.58466 -1.03567,1.5368 0.21715,0.95215 0.58465,1.38646 0.58465,1.38646 0,0 -1.16339,-0.73895 -1.44687,-1.40041 -0.28348,-0.66146 -0.54095,-1.94046 -0.20686,-2.94272 0.33409,-1.00226 1.83747,-1.921 2.15486,-2.00452 0.31738,-0.0835 3.32416,-0.58465 4.76074,0.45102 1.43657,1.03567 2.87314,2.27179 3.12371,4.64381 0.25056,2.37201 -0.18815,6.08311 -1.29846,7.64226 -1.11031,1.55916 -3.40178,3.44904 -6.68545,3.94513 -3.28366,0.49609 -4.96093,0.8032 -9.00055,-0.25986 -4.03962,-1.06306 -16.607966,-8.15371 -22.454486,-8.18712 -5.84651,-0.0334 -8.55262,-0.0668 -16.80456,3.8086 -8.25195,3.8754 -10.84641,4.85099 -14.43718,4.94549 -3.590784,0.0945 -10.772324,-0.37798 -13.134684,-5.95313 -2.36235,-5.57515 1.01581,-9.23679 1.01581,-9.23679 0,0 1.65365,-1.79539 3.28367,-1.91351 1.63002,-0.11811 3.42541,0.0236 3.99238,0.4961 0.56696,0.47247 1.79538,1.27567 1.55915,3.1183 -0.23624,1.84264 -1.77177,2.78758 -1.77177,2.78758 0,0 0.61422,-1.53553 0.18899,-2.05525 -0.42522,-0.51972 -0.8032,-0.94494 -2.07886,-0.63783 -1.27567,0.3071 -1.39379,2.45684 -1.39379,2.45684 0,0 0.0236,2.19699 2.36235,2.7167 2.33873,0.51972 3.59265,-0.11549 3.59265,-0.11549 l 4.002314,-2.97919 c 0,0 8.06743,-9.37853 15.72144,-8.9533 7.65402,0.42522 11.36303,5.93563 11.36303,5.93563 z"}})])])]),i("svg",{staticClass:"icon svg-inline--fa fa-php fa-w-20",attrs:{"aria-hidden":"true","data-prefix":"fab","data-icon":"php",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 640 512"}},[i("path",{attrs:{stroke:"#fff","stroke-width":"10px",d:"M320 104.5c171.4 0 303.2 72.2 303.2 151.5S491.3 407.5 320 407.5c-171.4 0-303.2-72.2-303.2-151.5S148.7 104.5 320 104.5m0-16.8C143.3 87.7 0 163 0 256s143.3 168.3 320 168.3S640 349 640 256 496.7 87.7 320 87.7zM218.2 242.5c-7.9 40.5-35.8 36.3-70.1 36.3l13.7-70.6c38 0 63.8-4.1 56.4 34.3zM97.4 350.3h36.7l8.7-44.8c41.1 0 66.6 3 90.2-19.1 26.1-24 32.9-66.7 14.3-88.1-9.7-11.2-25.3-16.7-46.5-16.7h-70.7L97.4 350.3zm185.7-213.6h36.5l-8.7 44.8c31.5 0 60.7-2.3 74.8 10.7 14.8 13.6 7.7 31-8.3 113.1h-37c15.4-79.4 18.3-86 12.7-92-5.4-5.8-17.7-4.6-47.4-4.6l-18.8 96.6h-36.5l32.7-168.6zM505 242.5c-8 41.1-36.7 36.3-70.1 36.3l13.7-70.6c38.2 0 63.8-4.1 56.4 34.3zM384.2 350.3H421l8.7-44.8c43.2 0 67.1 2.5 90.2-19.1 26.1-24 32.9-66.7 14.3-88.1-9.7-11.2-25.3-16.7-46.5-16.7H417l-32.8 168.7z"}})]),i("svg",{staticClass:"icon svg-inline--fa fa-laravel fa-w-20",attrs:{"aria-hidden":"true","data-prefix":"fab","data-icon":"laravel",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 640 512"}},[i("path",{attrs:{stroke:"#fff","stroke-width":"10px",d:"M637.5 241.6c-4.2-4.8-62.8-78.1-73.1-90.5-10.3-12.4-15.4-10.2-21.7-9.3-6.4.9-80.5 13.4-89.1 14.8-8.6 1.5-14 4.9-8.7 12.3 4.7 6.6 53.4 75.7 64.2 90.9l-193.7 46.4L161.2 48.7c-6.1-9.1-7.4-12.3-21.4-11.6-14 .6-120.9 9.5-128.5 10.2-7.6.6-16 4-8.4 22s129 279.6 132.4 287.2c3.4 7.6 12.2 20 32.8 15 21.1-5.1 94.3-24.2 134.3-34.7 21.1 38.3 64.2 115.9 72.2 127 10.6 14.9 18 12.4 34.3 7.4 12.8-3.9 199.6-71.1 208-74.5 8.4-3.5 13.6-5.9 7.9-14.4-4.2-6.2-53.5-72.2-79.3-106.8 17.7-4.7 80.6-21.4 87.3-23.3 7.9-2 9-5.8 4.7-10.6zm-352.2 72c-2.3.5-110.8 26.5-116.6 27.8-5.8 1.3-5.8.7-6.5-1.3-.7-2-129-266.7-130.8-270-1.8-3.3-1.7-5.9 0-5.9s102.5-9 106-9.2c3.6-.2 3.2.6 4.5 2.8 0 0 142.2 245.4 144.6 249.7 2.6 4.3 1.1 5.6-1.2 6.1zm306 57.4c1.7 2.7 3.5 4.5-2 6.4-5.4 2-183.7 62.1-187.1 63.6-3.5 1.5-6.2 2-10.6-4.5s-62.4-106.8-62.4-106.8L518 280.6c4.7-1.5 6.2-2.5 9.2 2.2 2.9 4.8 62.4 85.5 64.1 88.2zm12.1-134.1c-4.2.9-73.6 18.1-73.6 18.1l-56.7-77.8c-1.6-2.3-2.9-4.5 1.1-5s68.4-12.2 71.3-12.8c2.9-.7 5.4-1.5 9 3.4 3.6 4.9 52.6 67 54.5 69.4 1.8 2.3-1.4 3.7-5.6 4.7z"}})]),i("svg",{staticClass:"icon",attrs:{viewBox:"0 0 100.23145 98.782089"}},[i("g",{attrs:{"inkscape:groupmode":"layer",id:"layer2","inkscape:label":"Trace",transform:"translate(-47.705941,-100.00809)"}},[i("g",{staticStyle:{fill:"none",stroke:"#000000"},attrs:{id:"g843"}},[i("path",{attrs:{"inkscape:connector-curvature":"0",id:"path829",d:"m 122.27581,120.06757 22.61768,23.38609 c 0,0 2.83974,3.24064 2.90656,5.44561 0.0668,2.20497 -0.50113,3.90882 -2.43884,5.51243 -1.9377,1.60362 -3.90881,2.90656 -8.05149,4.47677 -4.14268,1.57021 -14.43256,5.24516 -14.43256,5.24516 0,0 -4.6438,1.80407 -5.44561,2.77292 -0.80181,0.96886 0.10022,1.87089 1.13589,2.50566 1.03567,0.63476 5.07812,2.83973 5.07812,2.83973 0,0 2.47225,1.60362 2.70611,2.57247 0.23386,0.96886 -0.0367,1.58937 -0.0367,1.58937 0,0 -1.63003,3.90969 -4.8192,4.35854 -3.18917,0.44885 -11.03218,3.40178 -13.04018,6.26023 -2.008,2.85845 0.42338,3.15986 1.39224,3.66099 0.96885,0.50113 2.90655,1.43658 2.03792,2.33861 -0.86862,0.90204 -4.6438,3.67496 -8.68626,4.64381 -4.042448,0.96885 -10.356689,2.37202 -11.559403,-2.27179 -1.202711,-4.64381 -3.775181,-4.77744 -4.376536,-4.9779 -0.601359,-0.20045 -7.182869,-0.63476 -7.851042,-2.93996 -0.668176,-2.3052 0.03341,-2.23838 1.937702,-4.47677 1.904296,-2.23838 4.176088,-4.6104 0.434314,-6.21401 -3.741775,-1.60362 -18.64205,-6.64833 -19.677719,-7.2831 -1.035669,-0.63476 -3.975634,-2.03793 -0.400904,-4.07586 3.57473,-2.03793 7.316504,-3.74177 7.951269,-4.30972 0.634764,-0.56795 1.904293,-1.50339 -2.906557,-3.24064 -4.810852,-1.73725 -12.888957,-3.33599 -15.345804,-4.91877 -2.456844,-1.58277 -6.837566,-3.63386 0.445527,-11.25104 7.283095,-7.61718 36.281838,-37.35091 36.281838,-37.35091 0,0 8.753078,-9.287619 17.907055,-0.33409 9.15399,8.95353 16.23663,16.03617 16.23663,16.03617 z"}}),i("path",{attrs:{"inkscape:connector-curvature":"0",id:"path833",d:"m 78.949777,181.43378 c 0,0 -2.787576,7.0398 -8.409972,5.48065 -5.622396,-1.55915 -1.748139,-5.5279 -0.283483,-6.04762 1.46466,-0.51971 6.000375,-2.3151 8.693455,0.56697 z"}}),i("path",{attrs:{"inkscape:connector-curvature":"0",id:"path835",d:"m 129.45868,180.06958 c 0,0 -2.20498,2.40543 -1.5368,3.70836 0.66817,1.30294 2.03793,2.60588 3.77518,2.3052 1.73725,-0.30067 3.70836,-0.7684 2.47224,-2.80633 -1.23612,-2.03793 -1.36975,-2.03793 -4.71062,-3.20723 z"}}),i("path",{attrs:{"inkscape:connector-curvature":"0",id:"path837",d:"m 131.20498,176.28385 c 0,0 1.08668,-3.77976 5.81139,-4.48847 4.7247,-0.7087 7.89025,1.65365 8.12649,4.48847 0.23623,2.83482 -13.13468,1.7009 -13.93788,0 z"}})])])]),i("svg",{staticClass:"icon svg-inline--fa fa-camera-retro fa-w-16",attrs:{"aria-hidden":"true","data-prefix":"fas","data-icon":"camera-retro",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"}},[i("path",{attrs:{stroke:"#fff","stroke-width":"10px",d:"M48 32C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h416c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48H48zm0 32h106c3.3 0 6 2.7 6 6v20c0 3.3-2.7 6-6 6H38c-3.3 0-6-2.7-6-6V80c0-8.8 7.2-16 16-16zm426 96H38c-3.3 0-6-2.7-6-6v-36c0-3.3 2.7-6 6-6h138l30.2-45.3c1.1-1.7 3-2.7 5-2.7H464c8.8 0 16 7.2 16 16v74c0 3.3-2.7 6-6 6zM256 424c-66.2 0-120-53.8-120-120s53.8-120 120-120 120 53.8 120 120-53.8 120-120 120zm0-208c-48.5 0-88 39.5-88 88s39.5 88 88 88 88-39.5 88-88-39.5-88-88-88zm-48 104c-8.8 0-16-7.2-16-16 0-35.3 28.7-64 64-64 8.8 0 16 7.2 16 16s-7.2 16-16 16c-17.6 0-32 14.4-32 32 0 8.8-7.2 16-16 16z"}})]),i("svg",{staticClass:"icon svg-inline--fa fa-guitar fa-w-16",attrs:{"aria-hidden":"true","data-prefix":"fas","data-icon":"guitar",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"}},[i("path",{attrs:{stroke:"#fff","stroke-width":"10px",d:"M502.6 54.6L457.4 9.4c-12.5-12.5-32.8-12.5-45.3 0l-67.9 67.9c-12.5 12.5-12.5 32.8 0 45.3L290 176.7c-45.4-29-100.4-28.9-133.5 4.2-9.7 9.7-16.4 21.2-20.5 33.9-6.1 18.8-23.5 33.1-42.7 34.9-24 2.3-46.3 11.6-63.4 28.8C-16.3 324.6-8 407.6 48.2 463.8c56.2 56.2 139.2 64.4 185.3 18.3 17.2-17.1 26.5-39.4 28.8-63.5 1.8-19.1 16.1-36.6 34.9-42.7 12.7-4.1 24.2-10.8 33.9-20.5 33.1-33.1 33.1-88.1 4.2-133.5l54.2-54.2c12.5 12.5 32.8 12.5 45.3 0l67.9-67.9c12.4-12.4 12.4-32.7-.1-45.2zM208 352c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48z"}})])])])])])},m=[],Q={name:"skillComponent",data(){return{}}},d=Q,I=(i("7935"),Object(r["a"])(d,T,m,!1,null,"29f27356",null));I.options.__file="skillComponent.vue";var S=I.exports,z=function(){var A=this,t=A.$createElement,i=A._self._c||t;return i("div",{attrs:{id:"educationComponent"}},[A._m(0),i("div",{staticClass:"timeline"}),i("div",{staticClass:"checkpoints"},A._l(A.years,function(t){return i("div",{staticClass:"checkpoint"},[i("div",{staticClass:"timeline-indicator"}),i("div",{staticClass:"name"},[A._v(A._s(t.name))]),i("div",{staticClass:"education"},[A._v(A._s(t.education))]),i("div",{staticClass:"institute"},[A._v(A._s(t.institute))]),i("div",{staticClass:"score"},[A._v(A._s(t.score))])])}))])},h=[function(){var A=this,t=A.$createElement,i=A._self._c||t;return i("div",{staticClass:"heading"},[i("span",{staticClass:"text"},[A._v("Education")])])}],E=i("29b2"),y={name:"educationComponent",data(){return E}},v=y,O=(i("adac"),Object(r["a"])(v,z,h,!1,null,"0a7c8d6b",null));O.options.__file="educationComponent.vue";var p=O.exports,f=function(){var A=this,t=A.$createElement,i=A._self._c||t;return i("div",{attrs:{id:"projectsComponent"}},[A._m(0),i("div",{staticClass:"projects"},A._l(A.repos.slice(0,6),function(t){return i("div",{staticClass:"project"},[i("a",{attrs:{href:t.html_url}},[A._v(A._s(t.name))])])})),i("div",{staticClass:"background"},A._l(A.repos.slice(6),function(t){return i("div",{staticClass:"bg-project"},[A._v("\n      "+A._s(t.name)+"\n    ")])})),A._m(1)])},x=[function(){var A=this,t=A.$createElement,i=A._self._c||t;return i("div",{staticClass:"heading"},[i("h1",[A._v("Projects")])])},function(){var A=this,t=A.$createElement,i=A._self._c||t;return i("div",{staticClass:"info"},[A._v("See all my projects on "),i("a",{attrs:{href:"https://github.com/Megharth"}},[A._v("Github")]),A._v(".")])}],J={data(){return{repos:[]}},updated(){let A=document.querySelectorAll(".bg-project"),t=200/A.length;for(let i=0;i<A.length/2;i++)A[i].style.top=20*Math.random()+10+"%",A[i].style.left=Math.random()*((i+1)*t-i*t-5)+i*t+"%";for(let i=A.length/2;i<A.length;i++)A[i].style.bottom=30*Math.random()+15+"%",A[i].style.left=Math.random()*((i+1-A.length/2)*t-(i-A.length/2)*t-5)+(i-A.length/2)*t+"%"},created(){this.$http.get("https://api.github.com/users/megharth/repos",{params:{sort:"pushed"}}).then(function(A){this.repos=A.body})}},U=J,Y=(i("5401"),Object(r["a"])(U,f,x,!1,null,"fa2e71e6",null));Y.options.__file="projectsComponent.vue";var b=Y.exports,B=function(){var A=this,t=A.$createElement,i=A._self._c||t;return i("div",{attrs:{id:"contact"}},[A._m(0),i("div",{staticClass:"right-side"},[A._m(1),i("div",{staticClass:"social-block"},[i("div",{staticClass:"heading"},[A._v("\n        Connect with me\n      ")]),i("div",{staticClass:"social"},A._l(A.content.socialHandles,function(A){return i("a",{attrs:{href:A.link}},[i("img",{staticClass:"img-fluid",attrs:{src:A.imgUrl,alt:A.name}})])}))])])])},P=[function(){var A=this,t=A.$createElement,i=A._self._c||t;return i("div",{staticClass:"left-side"},[i("div",{staticClass:"heading"},[A._v("\n      Contact Me\n    ")])])},function(){var A=this,t=A.$createElement,i=A._self._c||t;return i("div",{staticClass:"email-block"},[i("div",{staticClass:"heading"},[A._v("I love to talk. Feel free to drop a mail")]),i("a",{staticClass:"email btn",attrs:{href:"mailto: m.c.lakhataria@gmail.com"}},[A._v("Send Email")])])}],R={name:"contactsComponent",data(){return{content:N}}},Z=R,G=(i("4fdc"),Object(r["a"])(Z,B,P,!1,null,"38e7d14b",null));G.options.__file="contactComponent.vue";var V=G.exports,W={name:"app",components:{navbarComponent:u,mainComponent:k,skillComponent:S,educationComponent:p,projectsComponent:b,contactComponent:V},data(){return{open:!1,pages:5,pageNo:0}},methods:{changePage(A){this.pageNo=A,this.open=!1}}},K=W,H=(i("cf25"),Object(r["a"])(K,s,n,!1,null,null,null));H.options.__file="App.vue";var _=H.exports,F=i("9483");Object(F["a"])("/service-worker.js",{ready(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},cached(){console.log("Content has been cached for offline use.")},updated(){console.log("New content is available; please refresh.")},offline(){console.log("No internet connection found. App is running in offline mode.")},error(A){console.error("Error during service worker registration:",A)}});var q=i("28dd");a["a"].use(q["a"]),a["a"].use(e["a"]),a["a"].config.productionTip=!1,new a["a"]({render:A=>A(_)}).$mount("#app")},"5ea0":function(A,t,i){"use strict";var e=i("7cbf"),a=i.n(e);a.a},"672a":function(A,t,i){},7386:function(A,t,i){},7935:function(A,t,i){"use strict";var e=i("d4fc"),a=i.n(e);a.a},"7cbf":function(A,t,i){},"9c5f":function(A,t,i){},adac:function(A,t,i){"use strict";var e=i("403b"),a=i.n(e);a.a},c0c1:function(A){A.exports={name:"Megharth Lakhataria",occupation:"Full stack developer",bio:["I'm a student looking forward for challenging projects in the field of web development or graphic design. ","Currently I'm pursuing my B.Tech (IT) from Birla Vishvakarma Mahavidyalaya. ","I like to take a try on new things and I give my best to achieve the desired target. ","I'm not planning to take a job, instead, I will be completing my masters. "],socialHandles:[{name:"Github",imgUrl:"https://raw.githubusercontent.com/Megharth/megharth.github.io/master/src/assets/github.png",link:"#"},{name:"LinkedIn",imgUrl:"https://raw.githubusercontent.com/Megharth/megharth.github.io/master/src/assets/linkedin.png",link:"#"},{name:"Google",imgUrl:"https://raw.githubusercontent.com/Megharth/megharth.github.io/master/src/assets/google.png",link:"#"},{name:"facebook",imgUrl:"https://raw.githubusercontent.com/Megharth/megharth.github.io/master/src/assets/facebook.png",link:"#"},{name:"Instagram",imgUrl:"https://raw.githubusercontent.com/Megharth/megharth.github.io/master/src/assets/instagram.png",link:"#"}]}},cf25:function(A,t,i){"use strict";var e=i("7386"),a=i.n(e);a.a},d4fc:function(A,t,i){}});
//# sourceMappingURL=app.2f31e7e2.js.map