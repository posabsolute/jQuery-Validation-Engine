jQuery.validationEngine v2.0
=====

Summary
---

jQuery validation engine is a Javascript plugin aiming the validation of form fields in the browser (IE 6-8, Chrome, Firefox, Safari, Opera 10).
The plugin provides visual appealing prompts that grab user attention on the subject matter.

Validations range from email, phone, url to more complex calls such as ajax processing.
Bundled in several locales, the error prompts can be translated in the locale of your choice. 

Forum Support: http://validationengine.vanillaforums.com/ 

![Screenshot](https://github.com/orefalo/jQuery-Validation-Engine/raw/master/css/screenshot.png)

**Important**: v2 is a significant rewrite of the original 1.7 branch. Please read the documentation as the API has changed!




Installation
---

### What's in the archive?

The archive holds of course the core library along with translations in different languages.
It also comes with a set of demo pages and a simple ajax server (built in Java).

1. Unpack the archive
2. Include the script jquery.validationEngine.closure.js in your page 
3. Pick the locale of the choice, include it in your page: jquery.validationEngine-XX.js
4. **Read this manual** and understand the API


### Running the Demos

Most demos are functional by opening their respective HTML file. However, the Ajax demos require the use of Java6 to launch a lightweight http server. 

1. Run the script `runDemo.bat` (Windows) or `runDemo.sh` (Unix) from the folder
2. Open a browser pointing at [http://localhost:9173](http://localhost:9173)

Demos
---

TODO


Usage
---

### References

First link jQuery to the page

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.4.4/jquery.js" type="text/javascript"></script>
    
Attach *jquery.validationEngine* and its locale

    <script src="js/jquery.validationEngine-en.js" type="text/javascript" charset="utf-8"></script>
    <script src="js/jquery.validationEngine.js" type="text/javascript" charset="utf-8"></script>

Finally link the desired theme

    <link rel="stylesheet" href="css/validationEngine.jquery.css" type="text/css"/>


### Field validations

Validations are defined using the field's **class** attribute. Here are a few examples showing how it happens:

    <input value="someone@nowhere.com" class="validate[required,custom[email]]" type="text" name="email" id="email" />
    <input value="2010-12-01" class="validate[required,custom[date]]" type="text" name="date" id="date" />
    <input value="too many spaces obviously" class="validate[required,custom[onlyLetterNumber]]" type="text" name="special" id="special" />

For more details about validators, please refer to the section below.

### Instantiation

The validator is typically instantiated by using a call of the following forms:

    $("#form.id").validationEngine();

Without any parameters, the init() and attach() methods are automatically called.

    $("#form.id").validationEngine(action or options);

The method may take one or several parameters, either an action (and parameters) or a list of options to customize the behavior of the engine.

Here comes a glimpse: say you have a form as such:

    <form id="formID" method="post" action="submit.action">
        <input value="2010-12-01" class="validate[required,custom[date]]" type="text" name="date" id="date" />
    </form>

The code below will instance the validation engine and attach it to the form:
    <script>
    $(document).ready(function(){
        $("#formID").validationEngine();
       });
    </script>

But using options it will only initialize by default, attachment needs to be done manually.

    <script>
    $(document).ready(function(){
        $("#formID").validationEngine('attach', {promptPosition : "centerRight", scroll: false});
       });
    </script>


Actions
---

### init

Initializes the engine with default settings

    $("#formID1").validationEngine({promptPosition : "centerRight", scroll: false});
    $("#formID1").validationEngine('init', {promptPosition : "centerRight", scroll: false});

### attach

Attaches jQuery.validationEngine to form.submit and field.blur events.

    $("#formID1").validationEngine('attach');

### detach

Unregisters any bindings that may point to jQuery.validaitonEngine.

    $("#formID1").validationEngine('detach');

### validate

Validates the form and displays prompts accordingly. 
Returns *true* if the form validates, *false* if it contains errors. Note that if you use an ajax form validator, the actual result will be delivered asynchronously to the function *options.onAjaxFormComplete*.

    alert( $("#formID1").validationEngine('validate') );
    
### validate one field

Validates one field and displays the prompt accordingly. 
Returns *false* if the input validates, *true* if it contains errors. 

    alert( $("#formID1").validationEngine('validateField', "#emailInput") );

### showPrompt (promptText, type, promptPosition, showArrow)

Displays a prompt on a given element. Note that the prompt can be displayed on any element an id.

The method takes four parameters: 
1. the text of the prompt itself
2. a type which defines the visual look of the prompt: 'pass' (green), 'load' (black) anything else (red)
3. an optional position: either "topLeft", "topRight", "bottomLeft", "centerRight", "bottomRight". Defaults to *"topRight"*
4. an optional boolean which tells if the prompt should display a directional arrow

    <fieldset>
       <legend id="legendid">Email</legend>
       <a href="#" onclick="$('#legendid').validationEngine('showPrompt', 'This a custom msg', 'load')">Show prompt</a>
    </fieldset>

### hidePrompt

Closes the prompt linked to the input.

    $('#inputID').validationEngine('hidePrompt');\


### hide

Closes error prompts in the current form (in case you have more than one form on the page)

    $('#formID1').validationEngine('hide')">Hide prompts

### hideAll

Closes **all** error prompts on the page.

    $('#formID1').validationEngine('hideAll');

    
Options
---

Options are typically passed to the init action as a parameter.
    $("#formID1").validationEngine({promptPosition : "centerRight", scroll: false});

### validationEventTrigger
Name of the event triggering field validation, defaults to *blur*.
                
### scroll
Tells if we should scroll the page to the first error, defaults to *true*.

### promptPosition
Where should the prompt show ? Possible values are "topLeft", "topRight", "bottomLeft", "centerRight", "bottomRight". Defaults to *"topRight"*.

### ajaxFormValidation
If set to true, turns Ajax form validation logic on. defaults to *false*.
form validation takes place when the validate() action is called or when the form is submitted.

### onBeforeAjaxFormValidation(form, options)
When ajaxFormValidation is turned on, function called before the asynchronous AJAX form validation call. May return false to stop the Ajax form validation
            
### onAjaxFormComplete: function(form, status, errors, options)
When ajaxFormValidation is turned on, function is used to asynchronously process the result of the validation.

### isOverflown
Set to true when the form shows in a scrolling div, defaults to *false*.

### overflownDIV
Selector used to pick the overflown container, defaults to *""*.

### onValidationComplete
Stop the form from submitting, and let you handle it after it validated via a function

### bindMethod (defaut: bind)
By default the engine bind the form and the field with bind. If you need a persistant you can also use 'live'

Validators
---

Validators are encoded in the field's class attribute, as such

### required

Speaks by itself, fails if the element has no value. this validator can apply to pretty much any kind of input field.

    <input value="" class="validate[required]" type="text" name="email" id="email" />
    <input class="validate[required]" type="checkbox" id="agree" name="agree"/>

    <select name="sport" id="sport" class="validate[required]" id="sport">
       <option value="">Choose a sport</option>
       <option value="option1">Tennis</option>
       <option value="option2">Football</option>
       <option value="option3">Golf</option>
    </select>

### custom[regex_name]

Validates the element's value to a predefined list of regular expressions.

    <input value="someone@nowhere.com" class="validate[required,custom[email]]" type="text" name="email" id="email" />

Please refer to the section Custom Regex for a list of available regular expressions.

### function[methodName]

Validates a field using a third party function call. If a validation error occurs, the function must return an error message that will automatically show in the error prompt.

    function checkHELLO(field, rules, i, options){
      if (field.val() != "HELLO") {
         // this allows the use of i18 for the error msgs
         return options.allrules.validate2fields.alertText;
      }
    }

The following declaration will do            
    <input value="" class="validate[required,funcCall[checkHELLO]]" type="text" id="lastname" name="lastname" />
 
### ajax[selector]

Delegates the validation to a server URL using an asynchronous Ajax request. The selector is used to identify a block of properties in the translation file, take the following example.

    <input value="" class="validate[required,custom[onlyLetterNumber],maxSize[20],ajax[ajaxUserCall]] text-input" type="text" name="user" id="user" />
                 

    "ajaxUserCall": {
        "url": "ajaxValidateFieldUser",
        "extraData": "name=eric",
        "alertText": "* This user is already taken",
        "alertTextOk": "All good!",
        "alertTextLoad": "* Validating, please wait"
    },

* url - is the remote restful service to call
* extraData - optional parameters to sent
* alertText - error prompt message is validation fails
* alertTextOk - optional prompt is validation succeeds (shows green)
* alertTextLoad - message displayed while the validation is being performed

This validator is explained in further details in the Ajax section.

### equals[field.id]

Check if the current field's value equals the value of the specified field.

### min[float]

Validates when the field's value if less or equal to the given parameter.

### max[float]

Validates when the field's value if more or equal to the given parameter.

### minSize[integer]

Validates if the element content size (in characters) is more or equal to the given *integer*. integer <= input.value.length

### maxSize[integer]

Validates if the element content size (in characters) is less or equal to the given *integer*. input.value.length <= integer

### past[NOW or a date]

Checks if the element's value (which is implicitly a date) is earlier than the given *date*. When "NOW" is used as a parameter, the date will be calculate in the browser. Note that this may be different that the server date. Dates use the ISO format YYYY-MM-DD

    <input value="" class="validate[required,custom[date],past[now]]" type="text" id="birthdate" name="birthdate" />
    <input value="" class="validate[required,custom[date],past[2010-01-01]]" type="text" id="appointment" name="appointment" />

### future[NOW or a date]

Checks if the element's value (which is implicitly a date) is greater than the given *date*. When "NOW" is used as a parameter, the date will be calculate in the browser. Note that this may be different that the server date. Dates use the ISO format YYYY-MM-DD

    <input value="" class="validate[required,custom[date],future[now]]" type="text" id="appointment" name="appointment" />
    // a date in 2009
    <input value="" class="validate[required,custom[date],future[2009-01-01],past[2009-12-31]]" type="text" id="d1" name="d1" />


### minCheckbox[integer]

Validates when a minimum of *integer* checkboxes are selected.
The validator uses a special naming convention to identify the checkboxes part of the group.

The following example, enforces a minimum of two selected checkboxes
    <input class="validate[minCheckbox[2]]" type="checkbox" name="group1" id="maxcheck1" value="5"/>
    <input class="validate[minCheckbox[2]]" type="checkbox" name="group1" id="maxcheck2" value="3"/>
    <input class="validate[minCheckbox[2]]" type="checkbox" name="group1" id="maxcheck3" value="9"/>

Note how the input.name is identical across the fields. 

### maxCheckbox[integer]

Same as above but limits the maximum number of selected check boxes.

Selectors
---

We've introduced the notion of selectors without giving much details about them: A selector is a string which is used as a key to match properties in the translation files.
Take the following example:

    "onlyNumber": {
        "regex": /^[0-9\ ]+$/,
        "alertText": "* Numbers only"
    },
    "ajaxUserCall": {
        "url": "ajaxValidateFieldUser",
        "extraData": "name=eric",
        "alertText": "* This user is already taken",
        "alertTextLoad": "* Validating, please wait"
    },
    "validate2fields": {
        "alertText": "* Please input HELLO"
    }


onlyNumber, onlyLetter and validate2fields are all selectors. jQuery.validationEngine comes with a standard set but you are welcome to add you own to define AJAX backend services, error messages and/or new regular expressions.

Ajax
---

Ajax validation comes in two flavors:

1. Field Ajax validations, which takes place when the user inputs a value in a field and moves away.
2. Form Ajax validation, which takes place when the form is submitted or when the validate() action is called.

Both options are optional.

### Field ajax validation


####Protocol

The client sends the fieldId and the fieldValue as a GET request to the server url.

    Client calls url?fieldId=id1&fieldValue=value1 ==> Server

Server responds with **one** tuple: field1, status: either true (validation succeeded) or false.

    Client receives <== ["id1", boolean] Server


### Form ajax validation


####Protocol

The client sends the form fields and values as a GET request to the form.action url.

    Client calls url?fieldId=id1&fieldValue=value1&...etc ==> Server (form.action)

Server responds with a list of arrays: [fieldid, status, errorMsg].

* fieldid is the name (id) of the field
* status is the result of the validation, true if it passes, false if it fails
* errorMsg is an error string (or a selector) to the prompt text

    Client receives <== [["id1", boolean,"errorMsg"],["id2", false, "there is an error "],["id3", true, "this field is good"]] Server

Note that only errors (status=false) shall be returned from the server. However you may also decide to return an entry with a status=true in which case the errorMsg will show as a green prompt.


####Callbacks

Since the form validation is asynchronously delegated to the form action, we provide two callback methods:

**onBeforeAjaxFormValidation(form, options)** is called before the ajax form validation call, it may return false to stop the request

**onAjaxFormComplete: function(form, status, json_response_from_server, options)** is called after the ajax form validation call

Custom Regex
---

jQuery.validationEngine comes with a lot of predefined expressions. Regex are specified as such:
    
    <input value="" class="validate[custom[email]]" type="text" name="email" id="email" />
    
Note that the selector identifies a given regular expression in the translation file, but also its associated error prompt messages and optional green prompt message.    

### phone

a typical phone number with an optional country code and extension. Note that the validation is **relaxed**, please add extra validations for your specific country.

    49-4312 / 777 777
    +1 (305) 613-0958 x101
    (305) 613 09 58 ext 101
    3056130958
    +33 1 47 37 62 24 extension 3
    (016977) 1234
    04312 - 777 777
    91-12345-12345
    +58 295416 7216

### url

matched a url such as http://myserver.com, https://www.crionics.com or ftp://myserver.ws 

### email

easy, an email : username@hostname.com

### date

an ISO date, YYYY-MM-DD

### number

floating points with an optional sign. ie. -143.22 or .77 but also +234,23

### integer

integers with an optional sign. ie. -635 +2201 738

### ipv4

an IP address (v4) ie. 127.0.0.1

### onlyNumberSp

Only numbers and spaces characters

### onlyLetterSp

Only letters and space characters

### onlyLetterNumber

Only letters and numbers, no space 


Overflow
---

Validation in overflown div and lightbox with scrollable content

To get the supported mode you need to add these options when instancing your plugin:

      $("#formID").validationEngine({
        isOverflown: true,
        overflownDIV: ".inputContainer"
      })

The big change in this method is that normally the engine will append every error boxes to the body. In this case it will append every error boxes before the input validated. This add a bit of complexity, if you want the error box to behave correctly you need to wrap the input in a div being position relative, and exactly wrapping the input width and height. The easiest way to do that is by adding float:left, like in the example provided.

The default top right position is currently the only supported position. Please use this mode only in overflown div and in scollable boxes, it is slower and a bit less stable (I have been using the engine for 2 years, but only one 1 month with this method). Also, the scrolling will be applied to the overflown parent, not the document body.

Customizations
---

What would be a good library without customization ?

### Adding regular expressions

Adding new regular expressions is easy: open your translation file and add a new entry to the list

    "onlyLetter": {
        "regex": /^[a-zA-Z\ \']+$/,
        "alertText": "* Letters only"
    },

* "onlyLetter" is a sample selector name
* "regex" is a javascript regular expression
* "alertText" is the message to display when the validation fails

You can now use the new regular expression as such

    <input type="text" id="myid" name="myid" class="validation[custom[onlyLetter]]"/>

Don't forget to contribute!

### Customizing the look and feel

Edit the file *validationEngine.jquery.css* and customize the stylesheet to your likings. it's trivial if you know CSS.

### Adding more locales

You can easy add a locale by taking *jquery.validationEngine-en.js* as an example. 
Feel free to share the translation ;-)

Rules of thumb
---

* field.id are **unique** across the page
* for simplicity and consistency field.id and field.name should match (except with minCheckbox and maxCheckbox validators)
* spaces or special chars should be avoided in field.id or field.name
* use lower cases for input.type  ie. *text, password, textarea, checkbox, radio*
* use the Ajax validator last ie. validate[custom[onlyLetter],length[0,100],**ajax[ajaxNameCall]**]
* use only one Ajax validator per field!
* JSON services should live on the same server (or you will get into browser security issues)
* in a perfect RESTful world, http **GET** is used to *READ* data, http **POST** is used to *WRITE* data: which translates into -> Ajax validations should use GET, the actual form post should use a POST request.

Contribution
---
Contributions are always welcome, you may refer to the latest stable project at [GitHub](https://github.com/posabsolute/jQuery-Validation-Engine)
We use [Aptana](http://www.aptana.com/) as a Javascript editor and the Rockstart JSLint & Closure plugins http://update.rockstarapps.com/site.xml

Support
---
We offer limited support at http://validationengine.vanillaforums.com/

License
---
Licensed under the MIT License


Authors
---

 Copyright(c) 2011 [Cedric Dugas](https://github.com/posabsolute) [http://www.position-absolute.com](http://www.position-absolute.com)
 
 v2.0 Rewrite by [Olivier Refalo](https://github.com/orefalo) [http://www.crionics.com](http://www.crionics.com)