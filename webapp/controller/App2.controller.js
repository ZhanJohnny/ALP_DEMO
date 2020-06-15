sap.ui.controller("IBSO.ALP_DEMO.controller.App2", {
	onInit: function () {
		var arr = [{
			"Country": "CN",
			"City": "ShangHai",
			"Amount": 10
		}, {
			"Country": "CN",
			"City": "BeiJing",
			"Amount": 2
		}, {
			"Country": "CN",
			"City": "HangZhou",
			"Amount": 0
		}, {
			"Country": "US",
			"City": "Huston",
			"Amount": 10
		},
		{
			"Country": "US",
			"City": "NewYork",
			"Amount": 20
		}];
		
		var demoModel = new sap.ui.model.json.JSONModel({
			"results": arr
		});
		this.getView().byId("ID_DEMO").setModel(demoModel, "demoModel");
	},
	myFactory :function(sId,oContext){
		
		var Value = oContext.getProperty("Amount");
		var element;
		if(Value > 0){
			 element = new sap.m.Text({
				text:"{demoModel>Amount}"
			});	
		}
		else{
			element = new sap.m.Input({
				value:"{demoModel>Amount}"
			});
		}
		
		return new sap.m.ColumnListItem({
			cells:[new sap.m.Text({
				text:"{demoModel>Country}"
			}),
			new sap.m.Text({
				text:"{demoModel>City}"
			}),
			element
			]
		});
	}
});