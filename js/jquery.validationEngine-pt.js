

(function($) {
	$.fn.validationEngineLanguage = function() {};
	$.validationEngineLanguage = {
		newLang: function() {
			$.validationEngineLanguage.allRules = 	{"required":{    			// Add your regex rules here, you can take telephone as an example
					"regex":"none",
						"alertText":"* Campo obrigat�rio",
						"alertTextCheckboxMultiple":"* Selecione uma op��o",
						"alertTextCheckboxe":"* Campo obrigat�rio"},
					"length":{
						"regex":"none",
						"alertText":"*Entre ",
						"alertText2":" e ",
						"alertText3": " carateres permitidos"},
					"maxCheckbox":{
						"regex":"none",
						"alertText":"* Foi atingido o m�ximo n�mero de escolhas"},	
					"minCheckbox":{
						"regex":"none",
						"alertText":"* Selecione ",
						"alertText2":" op��es"},	
					"confirm":{
						"regex":"none",
						"alertText":"* Os campos n�o correspondem"},		
					"telephone":{
						// credit: jquery.h5validate.js / orefalo
						"regex": /([\+][0-9]{1,3}([ \.\-])?)?([\(]{1}[0-9]{3}[\)])?([0-9A-Z \.\-]{1,32})((x|ext|extension)[ ]?[0-9]{1,4})?/,
						"alertText":"* N�mero de telefone inv�lido"},	
					"email":{
						// Shamelessly lifted from Scott Gonzalez via the Bassistance Validation plugin http://projects.scottsplayground.com/email_address_validation/
						"regex": /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/,
						"alertText":"* Endere�o de email inv�lido"},
					"integer":{
						"regex": /^[-+]?\d+$/,
						"alertText":"* N�o � um n�mero inteiro"},
					"number":{
						// Number, including positive, negative, and floating decimal. Credit: bassistance
						"regex": /^[-+]?(?:\d+|\d{1,3}(?:,\d{3})+)(?:\.\d+)$/,
						"alertText":"* N�o � um n�mero decimal"},
					"date":{
						// Date in ISO format. Credit: bassistance
                         "regex":/^\d{4}[\/\-]\d{1,2}[\/\-]\d{1,2}$/,
                         "alertText":"* Data inv�lida, o formato deve de ser AAAA-MM-DD"},
                         
                    "ip":{
                    	"regex": /^([1-9][0-9]{0,2})+\.([1-9][0-9]{0,2})+\.([1-9][0-9]{0,2})+\.([1-9][0-9]{0,2})+$/,
                    	"alertText":"* N�mero IP inv�lido"},      
                    "url":{
                    	"regex":/^(https?|ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/,
                    	"alertText":"* URL inv�lido"},
					"onlyNumber":{
						"regex":/^[0-9\ ]+$/,
						"alertText":"* S� � permitido n�meros"},	
					"noSpecialCaracters":{
						"regex":/^[0-9a-zA-Z]+$/,
						"alertText":"* N�o s�o permitidos carateres especiais"},	
					"ajaxUser":{
						"file":"validateUser.php",
						"extraData":"name=eric",
						"alertTextOk":"* Nome de utilizador dispon�vel",	
						"alertTextLoad":"* Em carregamento, aguarde...",
						"alertText":"* Nome de utilizador n�o dispon�vel"},	
					"ajaxName":{
						"file":"validateUser.php",
						"alertText":"* Nome n�o dispon�vel",
						"alertTextOk":"* Nome dispon�vel",	
						"alertTextLoad":"* Em carregamento, aguarde..."},		
					"onlyLetter":{
						"regex":/^[a-zA-Z\ \']+$/,
						"alertText":"* S� s�o permitidas letras"},
					"validate2fields":{
    					"nname":"validate2fields",
    					"alertText":"* Deve inserir o primeiro e �ltimo nome"}	
					}	
					
		}
	}
})(jQuery);

$(document).ready(function() {	
	$.validationEngineLanguage.newLang()
});