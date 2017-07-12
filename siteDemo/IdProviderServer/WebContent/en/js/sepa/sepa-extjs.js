

Ext.onReady(function (){
	setTimeout (function(){
		if(Ext.get("loader") != null){
			Ext.get("loader").remove();
		}
		
		Ext.get("sepaMainContent").show(true);
	}, 800 );
	
	Ext.MessageBox.buttonText.yes = lang.extjs_button_yes;
    Ext.MessageBox.buttonText.no = lang.extjs_button_no;
	Ext.MessageBox.buttonText.ok = lang.extjs_button_ok;
    Ext.MessageBox.buttonText.cancel = lang.extjs_button_cancel;
	Ext.BLANK_IMAGE_URL = "../../js/ext-2.2/resources/images/default/s.gif";
});

Ext.override(Ext.form.Field, {
    setReadOnly: function(readOnly) {
        if (readOnly == this.readOnly) {
            return;
        }
        this.readOnly = readOnly;

        if (readOnly) {
            this.el.dom.setAttribute('readOnly', true);
        } else {
            this.el.dom.removeAttribute('readOnly');
        }
    }
});
