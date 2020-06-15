sap.ui.controller("IBSO.ALP_DEMO.controller.App", {

	onInit: function () {
	/*	var oModelVariantO1 = new sap.ui.model.odata.ODataModel(
			"https://webidetesting0521047-i310681trial.dispatcher.hanatrial.ondemand.com/sap/opu/odata/sap/SEPMRA_PROD_MAN/", true);
		//var oJsonModel1 = new sap.ui.model.json.JSONModel();
		sap.ui.core.BusyIndicator.show(0);
		var url = "SEPMRA_C_PD_ProductSalesData?$top=100";
		// DynamicFieldSet?$filter=tablename eq '" + this.byId("tablename").getValue() + "' &$expand=DataSet";
		oModelVariantO1.read(url, {
			success: function (oData, response) {
				//            console.log(oData);
				sap.ui.core.BusyIndicator.hide();
				this.odata = oData;
				var row_array = [];
				var array = this.odata.results;
				var no_of_rows = this.odata.results;
				this.byId("count").setText(no_of_rows.length + 'Records');
				no_of_rows.forEach(function (entry1, j) {
					var obj = {};
					var j_value = j;
					array.forEach(function (entry, i) {
						var field = this.odata.results[i].DataSet.results[j_value];
						var fieldvalue = field.value;
						var fieldname = field.name;
						Object.defineProperty(obj, fieldname, {
							value: fieldvalue //set data1 and data 2 accordingly
						});
					});
					row_array.push(obj);
					var jsonmodel = new sap.ui.model.json.JSONModel();
					jsonmodel.setData({
						rows: row_array,
						columns: this.odata.results
					});
					var oTable = this.getView().byId("tableid");
					oTable.setModel(jsonmodel);
					oTable.bindColumns("/columns", function (sId, oContext) {
						var columnName = oContext.getObject().name;
						return new sap.ui.table.Column({
							label: columnName,
							template: columnName,
							sortProperty: columnName,
							filterProperty: columnName
						});
					});
					oTable.bindRows("/rows");
				});
			},
			error: function (err) {
				sap.ui.core.BusyIndicator.hide();
			}
		});
*/
	}
});