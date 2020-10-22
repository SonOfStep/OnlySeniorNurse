// ==UserScript==
// @name OnlySeniorNurse
// @name:ru Только кабинет старшей мед сестры
// @description Hacking the transfer to a nursing station in another Department
// @description:ru Взлом перевода на сестринский пост в другое отделении
// @namespace Да, да я
// @version 0.2
// @updateURL    https://raw.githubusercontent.com/SonOfStep/OnlySeniorNurse/master/index.js
// @author Omar "SonOfStep" Nurmakhanov
// @match *://172.30.149.11:8282/OE/appointment/remsandapps*
// @grant none
// ==/UserScript==
// 

const SETTINGS_URL = "/OE/appointment/getplacespl";

$.ajaxSetup({
  beforeSend: function(jqXHR, settings) {
    if ( settings.url === SETTINGS_URL ) {


      $( document ).ajaxComplete( function( e ) {

        $("#add_movem_placeless #placeid_pl option").each( ( item, elem ) => {
          if ( !( 
            ( $(elem).is( '[value="0"]' ) ) || 
            (  $( elem ).text() === "Место хранения..." ) || 
          	( $( elem ).text() === 'Каб. ст. медицинской сестры' ) ) ) {
            $(elem).remove();
          }
        } )

      } )
    }
  }
});
