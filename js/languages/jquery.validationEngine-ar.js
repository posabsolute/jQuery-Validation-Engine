(function($){
    $.fn.validationEngineLanguage = function(){
    };
    $.validationEngineLanguage = {
        newLang: function(){
            $.validationEngineLanguage.allRules = {
                "required": { // Add your regex rules here, you can take telephone as an example
                    "regex": "none",
                    "alertText": "* هذا الحقل مطلوب",
                    "alertTextCheckboxMultiple": "* الرجاء تحديد خيار",
                    "alertTextCheckboxe": "* مربع الاختيار هذا مطلوب",
                    "alertTextDateRange": "* كلا حقلي نطاق التاريخ مطلوبان"
                },
                "requiredInFunction": { 
                    "func": function(field, rules, i, options){
                        return (field.val() == "test") ? true : false;
                    },
                    "alertText": "* الحقل يجب أن يساوي test"
                },
                "dateRange": {
                    "regex": "none",
                    "alertText": "* غير صالح",
                    "alertText2": "نطاق التاريخ"
                },
                "dateTimeRange": {
                    "regex": "none",
                    "alertText": "* غير صالح",
                    "alertText2": "نطاق التاريخ الوقت"
                },
                "minSize": {
                    "regex": "none",
                    "alertText": "* الحد الأدنى",
                    "alertText2": "الأحرف المطلوبة"
                },
                "maxSize": {
                    "regex": "none",
                    "alertText": "* الحد الأقصى",
                    "alertText2": "الأحرف المسموح بها"
                },
				"groupRequired": {
                    "regex": "none",
                    "alertText": "* يجب ملء أحد الحقول التالية"
                },
                "min": {
                    "regex": "none",
                    "alertText": "* الحد الأدنى للقيمة"
                },
                "max": {
                    "regex": "none",
                    "alertText": "* الحد الأقصى للقيمة"
                },
                "past": {
                    "regex": "none",
                    "alertText": "* حتى الآن من قبل"
                },
                "future": {
                    "regex": "none",
                    "alertText": "* تاريخ بعد"
                },	
                "maxCheckbox": {
                    "regex": "none",
                    "alertText": "* الحد الأقصى",
                    "alertText2": "الخيارات المسموح بها"
                },
                "minCheckbox": {
                    "regex": "none",
                    "alertText": "* من فضلك اختر",
                    "alertText2": "خيارات"
                },
                "equals": {
                    "regex": "none",
                    "alertText": "* الحقول لا تطابق"
                },
                "creditCard": {
                    "regex": "none",
                    "alertText": "* رقم بطاقة الائتمان غير صالح"
                },
                "phone": {
                    // credit: jquery.h5validate.js / orefalo
                    "regex": /^([\+][0-9]{1,3}[\ \.\-])?([\(]{1}[0-9]{2,6}[\)])?([0-9\ \.\-\/]{3,20})((x|ext|extension)[\ ]?[0-9]{1,4})?$/,
                    "alertText": "* رقم الهاتف غير صالح"
                },
                "email": {
                    // HTML5 compatible email regex ( http://www.whatwg.org/specs/web-apps/current-work/multipage/states-of-the-type-attribute.html#    e-mail-state-%28type=email%29 )
                    "regex": /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                    "alertText": "* عنوان البريد الإلكتروني غير صالح"
                },
                "integer": {
                    "regex": /^[\-\+]?\d+$/,
                    "alertText": "* ليس عددا صحيحاً صالحاً"
                },
                "number": {
                    // Number, including positive, negative, and floating decimal. credit: orefalo
                    "regex": /^[\-\+]?((([0-9]{1,3})([,][0-9]{3})*)|([0-9]+))?([\.]([0-9]+))?$/,
                    "alertText": "* عدد عشري غير صالح"
                },
                "date": {                    
                    //	Check if date is valid by leap year
			"func": function (field) {
					var pattern = new RegExp(/^(\d{4})[\/\-\.](0?[1-9]|1[012])[\/\-\.](0?[1-9]|[12][0-9]|3[01])$/);
					var match = pattern.exec(field.val());
					if (match == null)
					   return false;
	
					var year = match[1];
					var month = match[2]*1;
					var day = match[3]*1;					
					var date = new Date(year, month - 1, day); // because months starts from 0.
	
					return (date.getFullYear() == year && date.getMonth() == (month - 1) && date.getDate() == day);
				},                		
			"alertText": "* تاريخ غير صحيح، ويجب أن يكون بتنسيق YYYY-MM-DD"
                },
                "ipv4": {
                    "regex": /^((([01]?[0-9]{1,2})|(2[0-4][0-9])|(25[0-5]))[.]){3}(([0-1]?[0-9]{1,2})|(2[0-4][0-9])|(25[0-5]))$/,
                    "alertText": "* عنوان آي بي غير صحيح"
                },
                "url": {
                    "regex": /^(https?|ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i,
                    "alertText": "* عنوان ويب غير صالح"
                },
                "onlyNumberSp": {
                    "regex": /^[0-9\ ]+$/,
                    "alertText": "* أرقام فقط"
                },
                "onlyLetterSp": {
                    "regex": /^[\u0600-\u065F\u066A-\u06EF\u06FA-\u06FFa-zA-Z\ \']+[\u0600-\u065F\u066A-\u06EF\u06FA-\u06FFa-zA-Z-_\ \']+$/,
                    "alertText": "* حروف فقط"
                },
                "onlyLetterNumber": {
                    "regex": /^[0-9\u0600-\u065F\u066A-\u06EF\u06FA-\u06FFa-zA-Z]+[0-9\u0600-\u065F\u066A-\u06EF\u06FA-\u06FFa-zA-Z-_]+$/,
                    "alertText": "* الأحرف الخاصة والمسافات غير مسموح بها"
                },
                // --- CUSTOM RULES -- Those are specific to the demos, they can be removed or changed to your likings
                "ajaxUserCall": {
                    "url": "ajaxValidateFieldUser",
                    // you may want to pass extra data on the ajax call
                    "extraData": "name=eric",
                    "alertText": "* هذا المستخدم مأخوذ بالفعل",
                    "alertTextLoad": "* التحقق من صحة، الرجاء الانتظار"
                },
				"ajaxUserCallPhp": {
                    "url": "phpajax/ajaxValidateFieldUser.php",
                    // you may want to pass extra data on the ajax call
                    "extraData": "name=eric",
                    // if you provide an "alertTextOk", it will show as a green prompt when the field validates
                    "alertTextOk": "* هذا المستخدم متاح",
                    "alertText": "* هذا المستخدم مأخوذ بالفعل",
                    "alertTextLoad": "* التحقق من صحة، الرجاء الانتظار"
                },
                "ajaxNameCall": {
                    // remote json service location
                    "url": "ajaxValidateFieldName",
                    // error
                    "alertText": "* هذا الاسم مأخوذ بالفعل",
                    // if you provide an "alertTextOk", it will show as a green prompt when the field validates
                    "alertTextOk": "* هذا الاسم متاح",
                    // speaks by itself
                    "alertTextLoad": "* التحقق من صحة، الرجاء الانتظار"
                },
				 "ajaxNameCallPhp": {
	                    // remote json service location
	                    "url": "phpajax/ajaxValidateFieldName.php",
	                    // error
	                    "alertText": "* هذا الاسم مأخوذ بالفعل",
	                    // speaks by itself
	                    "alertTextLoad": "* التحقق من صحة، الرجاء الانتظار"
	                },
                "validate2fields": {
                    "alertText": "* الرجاء إدخال HELLO"
                },
	            //tls warning:homegrown not fielded 
                "dateFormat":{
                    "regex": /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$|^(?:(?:(?:0?[13578]|1[02])(\/|-)31)|(?:(?:0?[1,3-9]|1[0-2])(\/|-)(?:29|30)))(\/|-)(?:[1-9]\d\d\d|\d[1-9]\d\d|\d\d[1-9]\d|\d\d\d[1-9])$|^(?:(?:0?[1-9]|1[0-2])(\/|-)(?:0?[1-9]|1\d|2[0-8]))(\/|-)(?:[1-9]\d\d\d|\d[1-9]\d\d|\d\d[1-9]\d|\d\d\d[1-9])$|^(0?2(\/|-)29)(\/|-)(?:(?:0[48]00|[13579][26]00|[2468][048]00)|(?:\d\d)?(?:0[48]|[2468][048]|[13579][26]))$/,
                    "alertText": "* تاريخ غير صالح"
                },
                //tls warning:homegrown not fielded 
				"dateTimeFormat": {
	                "regex": /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])\s+(1[012]|0?[1-9]){1}:(0?[1-5]|[0-6][0-9]){1}:(0?[0-6]|[0-6][0-9]){1}\s+(am|pm|AM|PM){1}$|^(?:(?:(?:0?[13578]|1[02])(\/|-)31)|(?:(?:0?[1,3-9]|1[0-2])(\/|-)(?:29|30)))(\/|-)(?:[1-9]\d\d\d|\d[1-9]\d\d|\d\d[1-9]\d|\d\d\d[1-9])$|^((1[012]|0?[1-9]){1}\/(0?[1-9]|[12][0-9]|3[01]){1}\/\d{2,4}\s+(1[012]|0?[1-9]){1}:(0?[1-5]|[0-6][0-9]){1}:(0?[0-6]|[0-6][0-9]){1}\s+(am|pm|AM|PM){1})$/,
	                "alertText": "* تاريخ غير صالح أو تنسيق التاريخ",
	                "alertText2": "التنسيق المتوقع:",
                    "alertText3": "mm/dd/yyyy hh:mm:ss AM|PM or ", 
                    "alertText4": "yyyy-mm-dd hh:mm:ss AM|PM"
	            }
            };
            
        }
    };

    $.validationEngineLanguage.newLang();
    
})(jQuery);
