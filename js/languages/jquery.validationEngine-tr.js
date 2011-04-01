(function($){
    $.fn.validationEngineLanguage = function(){
    };
    $.validationEngineLanguage = {
        newLang: function(){
            $.validationEngineLanguage.allRules = {
                "required": { // Add your regex rules here, you can take telephone as an example
                    "regex": "none",
                    "alertText": "* Bu alan zorunludur",
                    "alertTextCheckboxMultiple": "* Lütfen bir seçeneði iþaretleyiniz",
                    "alertTextCheckboxe": "* Bu onay kutusu zorunludur"
                },
                "minSize": {
                    "regex": "none",
                    "alertText": "* Bu alana en az ",
                    "alertText2": " karakter girmelisiniz "
                },
                "maxSize": {
                    "regex": "none",
                    "alertText": "* Bu alana en fazla ",
                    "alertText2": " karakter girebilirsiniz"
                },
                "min": {
                    "regex": "none",
                    "alertText": "* Geçerli en küçük deðer: "
                },
                "max": {
                    "regex": "none",
                    "alertText": "* Geçerli en yüksek deðer: "
                },
                "past": {
                    "regex": "none",
                    "alertText": "* Lütfen ",
                    "alertText2": " tarihinden daha ileri bir tarih giriniz "
                },
                "future": {
                    "regex": "none",
                    "alertText": "* Lütfen ",
                    "alertText2": " tarihinden daha geri bir tarih giriniz "

                },	
                "maxCheckbox": {
                    "regex": "none",
                    "alertText": "* Lütfen daha az onay kutusu iþareyleyiniz"
                },
                "minCheckbox": {
                    "regex": "none",
                    "alertText": "* Lütfen en az ",
                    "alertText2": " onay kutusunu iþaretleyiniz"
                },
                "equals": {
                    "regex": "none",
                    "alertText": "* Deðerler ayný olmalý"
                },
                "phone": {
                    // credit: jquery.h5validate.js / orefalo
                    "regex": /^([\+][0-9]{1,3}[ \.\-])?([\(]{1}[0-9]{2,6}[\)])?([0-9 \.\-\/]{3,20})((x|ext|extension)[ ]?[0-9]{1,4})?$/,
                    "alertText": "* Geçersiz telefon numarasý"
                },
                "email": {
                    // Simplified, was not working in the Iphone browser
                    "regex": /^([A-Za-z0-9_\-\.\'])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,6})$/,
                    "alertText": "* Geçersiz eposta adresi"
                },
                "integer": {
                    "regex": /^[\-\+]?\d+$/,
                    "alertText": "* Geçerli bir tam sayý deðil"
                },
                "number": {
                    // Number, including positive, negative, and floating decimal. credit: orefalo
                    "regex": /^[\-\+]?(([0-9]+)([\.,]([0-9]+))?|([\.,]([0-9]+))?)$/,
                    "alertText": "* Geçerli bir noktalý sayý deðil"
                },
                "date": {
                    "regex": /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/,
                    "alertText": "* Geçersiz tarih. Tarih YYYY-MM-DD formatýnda olmalý"
                },
                "ipv4": {
                    "regex": /^((([01]?[0-9]{1,2})|(2[0-4][0-9])|(25[0-5]))[.]){3}(([0-1]?[0-9]{1,2})|(2[0-4][0-9])|(25[0-5]))$/,
                    "alertText": "* Geçersiz IP adresi"
                },
                "url": {
                    "regex": /^(https?|ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/,
                    "alertText": "* Geçersiz URL"
                },
                "onlyNumberSp": {
                    "regex": /^[0-9\ ]+$/,
                    "alertText": "* Bu alanda sadece rakam olmalý"
                },
                "onlyLetterSp": {
                    "regex": /^[a-zA-Z\ \']+$/,
                    "alertText": "* Bu alanda sadece harf olmalý"
                },
                "onlyLetterNumber": {
                    "regex": /^[0-9a-zA-Z]+$/,
                    "alertText": "* Bu alanda özel karakterler olamaz"
                },
                // --- CUSTOM RULES -- Those are specific to the demos, they can be removed or changed to your likings
                "ajaxUserCall": {
                    "url": "ajaxValidateFieldUser",
                    // you may want to pass extra data on the ajax call
                    "extraData": "name=eric",
                    "alertText": "* Bu kullanýcý adý kullanýmda",
                    "alertTextLoad": "* Doðrulanýyor, lütfen bekleyiniz"
                },
				"ajaxUserCallPhp": {
                    "url": "phpajax/ajaxValidateFieldUser.php",
                    // you may want to pass extra data on the ajax call
                    "extraData": "name=eric",
                    // if you provide an "alertTextOk", it will show as a green prompt when the field validates
                    "alertTextOk": "* Bu kullanýcý adýný kullanabilirsiniz",
                    "alertText": "* Bu kullanýcý adý kullanýmda",
                    "alertTextLoad": "* Doðrulanýyor, lütfen bekleyiniz"
                },
                "ajaxNameCall": {
                    // remote json service location
                    "url": "ajaxValidateFieldName",
                    // error
                    "alertText": "* Bu isim kullanýmda",
                    // if you provide an "alertTextOk", it will show as a green prompt when the field validates
                    "alertTextOk": "* Bu isim kullanýlabilir",
                    // speaks by itself
                    "alertTextLoad": "* Doðrulanýyor, lütfen bekleyiniz"
                },
				 "ajaxNameCallPhp": {
	                    // remote json service location
	                    "url": "phpajax/ajaxValidateFieldName.php",
	                    // error
	                    "alertText": "* Bu isim kullanýmda",
	                    // speaks by itself
	                    "alertTextLoad": "* Doðrulanýyor, lütfen bekleyiniz"
	                },
                "validate2fields": {
                    "alertText": "* Lütfen 'HELLO' yazýn"
                }
            };
            
        }
    };
    $.validationEngineLanguage.newLang();
})(jQuery);