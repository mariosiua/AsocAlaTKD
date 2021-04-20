document.oncontextmenu /*el "document"el es que se activa en todo el documento HTML y el evento "oncontextmenu" se activa cuando se utiliza el clic derecho*/ = function()/*Define que es una funcion*/ {
      return false /*define que cuando finaliza la funcion, se devuelvo a un valor que especifica*/
   }
   function right(e)/*se ejecuta el evento cuando se activa*/ {
      var msg = "El click derecho, Ctrl+C y Ctrl+X estan deshabilitados"; /*esta variable es un mensage que envia el navegador cuando se activa la funcion*/
      if /*condiciona la funcion, si se utiliza:*/(navigator.appName == 'Netscape' && e.which == 3)/*indica que se active cuando se encuentra en esa aplicacion*/ {
         alert(msg);/*manda un mensaje cuando se activa la funcion*/
         return false;
      }
      else if /*se ejecuta si la condicion anterior no se ejecuta*/(navigator.appName == 'Microsoft Internet Explorer' && event.button==2) {
         alert(msg);
      return false;
      }
   return true;
}
document.onmousedown = right;/*Se activa cuando se usa boton derecho del mouse*/