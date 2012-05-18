/*
 This file contains validations that are too specific to be part of the core
 Please reference the file AFTER the translation file or the rules will be overwritten
 Use at your own risk. We can't provide support for most of the validations
*/
(function($){
	if($.validationEngineLanguage == undefined || $.validationEngineLanguage.allRules == undefined )
		alert("Please include other-validations.js AFTER the translation file");
	else {
		$.validationEngineLanguage.allRules["postcodeUK"] = {
		        // UK zip codes
		        "regex": /^([A-PR-UWYZ0-9][A-HK-Y0-9][AEHMNPRTVXY0-9]?[ABEHMNPRVWXY0-9]? {1,2}[0-9][ABD-HJLN-UW-Z]{2}|GIR 0AA)$/,
				"alertText": "* Invalid postcode"
		};
		$.validationEngineLanguage.allRules["postcodeUS"] = {
		        // US zip codes | Accepts 12345 and 12345-1234 format zipcodes
                "regex": /^\d{5}(-\d{4})?$/,
                "alertText": "* Invalid zipcode"
		};
		$.validationEngineLanguage.allRules["postcodeDE"] = {
		        // Germany zip codes | Accepts 12345 format zipcodes
                "regex": /^\d{5}?$/,
                "alertText": "* Invalid zipcode"
		};
		$.validationEngineLanguage.allRules["postcodeAT"] = {
		        // Austrian zip codes | Accepts 1234 format zipcodes
                "regex": /^\d{4}?$/,
                "alertText": "* Invalid zipcode"
		};
    $.validationEngineLanguage.allRules["postcodeJP"] = {
      // JP zip codes | Accepts 123 and 123-1234 format zipcodes
      "regex": /^\d{3}(-\d{4})?$/,
      "alertText": "* 郵便番号が正しくありません"
    };
		$.validationEngineLanguage.allRules["onlyLetNumSpec"] = {
				// Good for database fields
				"regex": /^[0-9a-zA-Z_-]+$/,
				"alertText": "* Only Letters, Numbers, hyphen(-) and underscore(_) allowed"
		};
	//	# more validations may be added after this point
	}
})(jQuery);
