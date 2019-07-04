(function($){
    $.fn.validationEngineLanguage = function(){
    };
    $.validationEngineLanguage = {
        newLang: function(){
            $.validationEngineLanguage.allRules = {
                "required": { // Add your regex rules here, you can take telephone as an example
                    "regex": "none",
                    "alertText": "* Това поле е задължително",
                    "alertTextCheckboxMultiple": "* Моля, изберете от списъка",
                    "alertTextCheckboxe": "* Трябва да отметнeте",
                    "alertTextDateRange": "* И двете полета за дата са задължителни"
                },
                "requiredInFunction": { 
                    "func": function(field, rules, i, options){
                        return (field.val() == "test") ? true : false;
                    },
                    "alertText": "* Полето трябва да е test"
                },
                "dateRange": {
                    "regex": "none",
                    "alertText": "* Невалиден ",
                    "alertText2": "период"
                },
                "dateTimeRange": {
                    "regex": "none",
                    "alertText": "* Невалиден ",
                    "alertText2": "дата/час период"
                },
                "minSize": {
                    "regex": "none",
                    "alertText": "* Минимум ",
                    "alertText2": " символа"
                },
                "maxSize": {
                    "regex": "none",
                    "alertText": "* Максимум ",
                    "alertText2": " символа"
                },
                "groupRequired": {
                    "regex": "none",
                    "alertText": "* Трябва да попълните едно от следните полета"
                },
                "min": {
                    "regex": "none",
                    "alertText": "* Мин. стойност е "
                },
                "max": {
                    "regex": "none",
                    "alertText": "* Макс. стойност е "
                },
                "past": {
                    "regex": "none",
                    "alertText": "* Дата преди "
                },
                "future": {
                    "regex": "none",
                    "alertText": "* Дата след "
                },	
                "maxCheckbox": {
                    "regex": "none",
                    "alertText": "* Най-много ",
                    "alertText2": " опции са позволени"
                },
                "minCheckbox": {
                    "regex": "none",
                    "alertText": "* Моля, изберете ",
                    "alertText2": " опции"
                },
                "equals": {
                    "regex": "none",
                    "alertText": "* Полетата не съвпадат"
                },
                "creditCard": {
                    "regex": "none",
                    "alertText": "* Невалиден номер на кредитна карта"
                },
                "phone": {
                    // credit: jquery.h5validate.js / orefalo
                    "regex": /^([\+][0-9]{1,3}[\ \.\-])?([\(]{1}[0-9]{2,6}[\)])?([0-9\ \.\-\/]{3,20})((x|ext|extension)[\ ]?[0-9]{1,4})?$/,
                    "alertText": "* Невалиден телефонен номер"
                },
                "email": {
                    // HTML5 compatible email regex ( http://www.whatwg.org/specs/web-apps/current-work/multipage/states-of-the-type-attribute.html#    e-mail-state-%28type=email%29 )
                    "regex": /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                    "alertText": "* Невалиден адрес на ел.поща"
                },
                "integer": {
                    "regex": /^[\-\+]?\d+$/,
                    "alertText": "* Не е цяло число"
                },
                "number": {
                    // Number, including positive, negative, and floating decimal. credit: orefalo
                    "regex": /^[\-\+]?((([0-9]{1,3})([,][0-9]{3})*)|([0-9]+))?([\.]([0-9]+))?$/,
                    "alertText": "* Невалидно десетично число"
                },
                "date": {                    
                    //Check if date is valid by leap year
                "func": function (field) {
                    var pattern = new RegExp(/^(\d{4})[\/\-\.](0?[1-9]|1[012])[\/\-\.](0?[1-9]|[12][0-9]|3[01])$/);
                    var match = pattern.exec(field.val());
                    if (match === null)
                       return false;
                    
                    var year = match[1];
                    var month = match[2]*1;
                    var day = match[3]*1;
                    var date = new Date(year, month - 1, day); // because months starts from 0.
                    
                    return (date.getFullYear() == year && date.getMonth() == (month - 1) && date.getDate() == day);
                    },
                    "alertText": "* Невалидна дата, трябва да бъде във формат: YYYY-MM-DD"
                },
                "ipv4": {
                    "regex": /^((([01]?[0-9]{1,2})|(2[0-4][0-9])|(25[0-5]))[.]){3}(([0-1]?[0-9]{1,2})|(2[0-4][0-9])|(25[0-5]))$/,
                    "alertText": "* Невалиден IP адрес"
                },
                "url": {
                    "regex": /^(https?|ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i,
                    "alertText": "* Невалиден URL"
                },
                "onlyNumberSp": {
                    "regex": /^[0-9\ ]+$/,
                    "alertText": "* Само цифри и интервал"
                },
                "onlyLetterSp": {
                    "regex": /^[a-zA-Z\ \']+$/,
                    "alertText": "* Само букви"
                },
                // --- Bulgarian NAMES in cyrillic alphabet
                "onlyBGname": {
                    "regex": /^[а-яА-Я\-]+$/,
                    "alertText": "* Без латиница, цифри и спец. символи"
                    },
                // --- Only numbers, no space
                "onlyDigits": {
                    "regex": /^[0-9]+$/,
                    "alertText": "* Само цифри"
                },
                
                "onlyLetterNumber": {
                    "regex": /^[0-9a-zA-Z]+$/,
                    "alertText": "* Не са позволени спец. символи"
                },
                // --- CUSTOM RULES -- Those are specific to the demos, they can be removed or changed to your likings
                "ajaxUserCall": {
                    "url": "ajaxValidateFieldUser",
                    // you may want to pass extra data on the ajax call
                    "extraData": "name=eric",
                    "alertText": "* Потребителското име е заето",
                    "alertTextLoad": "* Проверява се, моля почакайте"
                },
                "ajaxUserCallPhp": {
                    "url": "phpajax/ajaxValidateFieldUser.php",
                    // you may want to pass extra data on the ajax call
                    "extraData": "name=eric",
                    // if you provide an "alertTextOk", it will show as a green prompt when the field validates
                    "alertTextOk": "* Името е свободно",
                    "alertText": "* Името е заето",
                    "alertTextLoad": "* Проверява се, моля почакайте"
                },
                "ajaxNameCall": {
                    // remote json service location
                    "url": "ajaxValidateFieldName",
                    // error
                    "alertText": "* Това име е заето",
                    // if you provide an "alertTextOk", it will show as a green prompt when the field validates
                    "alertTextOk": "* Това име е свободно",
                    // speaks by itself
                    "alertTextLoad": "* Проверява се, моля почакайте"
                },
                "ajaxNameCallPhp": {
                        // remote json service location
                        "url": "phpajax/ajaxValidateFieldName.php",
                        // error
                        "alertText": "* Името е заето",
                        // speaks by itself
                        "alertTextLoad": "* Проверява се, моля почакайте"
                    },
                "validate2fields": {
                    "alertText": "*Моля, въведете HELLO"
                },
                //tls warning:homegrown not fielded 
                "dateFormat":{
                    "regex": /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$|^(?:(?:(?:0?[13578]|1[02])(\/|-)31)|(?:(?:0?[1,3-9]|1[0-2])(\/|-)(?:29|30)))(\/|-)(?:[1-9]\d\d\d|\d[1-9]\d\d|\d\d[1-9]\d|\d\d\d[1-9])$|^(?:(?:0?[1-9]|1[0-2])(\/|-)(?:0?[1-9]|1\d|2[0-8]))(\/|-)(?:[1-9]\d\d\d|\d[1-9]\d\d|\d\d[1-9]\d|\d\d\d[1-9])$|^(0?2(\/|-)29)(\/|-)(?:(?:0[48]00|[13579][26]00|[2468][048]00)|(?:\d\d)?(?:0[48]|[2468][048]|[13579][26]))$/,
                    "alertText": "* Невалидна дата"
                },
                //tls warning:homegrown not fielded 
                "dateTimeFormat": {
                "regex": /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])\s+(1[012]|0?[1-9]){1}:(0?[1-5]|[0-6][0-9]){1}:(0?[0-6]|[0-6][0-9]){1}\s+(am|pm|AM|PM){1}$|^(?:(?:(?:0?[13578]|1[02])(\/|-)31)|(?:(?:0?[1,3-9]|1[0-2])(\/|-)(?:29|30)))(\/|-)(?:[1-9]\d\d\d|\d[1-9]\d\d|\d\d[1-9]\d|\d\d\d[1-9])$|^((1[012]|0?[1-9]){1}\/(0?[1-9]|[12][0-9]|3[01]){1}\/\d{2,4}\s+(1[012]|0?[1-9]){1}:(0?[1-5]|[0-6][0-9]){1}:(0?[0-6]|[0-6][0-9]){1}\s+(am|pm|AM|PM){1})$/,
                    "alertText": "* Невалидна дата или грешен формат за дата",
                    "alertText2": "Очакван формат: ",
                    "alertText3": "mm/dd/yyyy hh:mm:ss AM|PM or ", 
                    "alertText4": "yyyy-mm-dd hh:mm:ss AM|PM"
                    }
            };
            
        }
    };

    $.validationEngineLanguage.newLang();
    
})(jQuery);
