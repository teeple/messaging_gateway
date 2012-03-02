Ext.define('ClientWindow', {
	extend: 'Ext.window.Window',
    id:'ClientWindow',

    height: 374,
    width: 632,

    layout: {
        type: 'absolute'
    },
    title: 'Client Simulator',

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
        	items: [
        	        {
        	            xtype: 'form',
        	            height: 300,
        	            width: 280,
        	            bodyPadding: 10,
        	            collapsible: true,
        	            title: 'Sender',
        	            x: 20,
        	            y: 20,
        	            items: [
        	                {
        	                	id:'sender.senderMDN',
        	                    xtype: 'textfield',
        	                    fieldLabel: 'Sender MDN',
        	                    anchor: '100%'
        	                },
        	                {
        	                	id:'sender.receiverMDN',
        	                    xtype: 'textfield',
        	                    fieldLabel: 'Receiver MDN',
        	                    anchor: '100%'
        	                },
        	                {
        	                	id:'sender.message',
        	                    xtype: 'textareafield',
        	                    height: 158,
        	                    fieldLabel: 'SMS Message',
        	                    anchor: '100%'
        	                },
        	                {
        	                    xtype: 'button',
        	                    text: 'Send',
        	                    anchor: '100%',
        	                    handler: me.sendRequest
        	                }
        	            ]
        	        },
        	        {
        	            xtype: 'form',
        	            height: 300,
        	            width: 280,
        	            bodyPadding: 10,
        	            collapsible: true,
        	            title: 'Receiver',
        	            x: 320,
        	            y: 20,
        	            items: [
        	                {
        	                	id:'receiver.senderMDN',
        	                    xtype: 'textfield',
        	                    fieldLabel: 'Sender MDN',
        	                    anchor: '100%'
        	                },
        	                {
        	                	id:'receiver.receiverMDN',
        	                    xtype: 'textfield',
        	                    fieldLabel: 'Receiver MDN',
        	                    anchor: '100%'
        	                },
        	                {
        	                	id:'receiver.message',
        	                    xtype: 'textareafield',
        	                    height: 158,
        	                    fieldLabel: 'SMS Message',
        	                    anchor: '100%'
        	                }
        	            ]
        	        }
        	    ]
        });

        me.callParent(arguments);
    },

    sendRequest : function(){
    	Ext.MessageBox.alert('Sender:  ' + Ext.getCmp('sender.senderMDN').value
    			+'<br/> Receiver:  '+ Ext.getCmp('sender.receiverMDN').value
    			+'<br/> Message:  ' + Ext.getCmp('sender.message').value);
    }
});

