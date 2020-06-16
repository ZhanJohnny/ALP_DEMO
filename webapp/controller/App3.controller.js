sap.ui.controller("IBSO.ALP_DEMO.controller.App3", {
	onInit: function () {

		var columnData = [{
			columnName: "supplier"
		}, {
			columnName: "street"
		}, {
			columnName: "city"
		}, {
			columnName: "phone"
		}];

		var rowData = [{
			supplier: "Titanium",
			street: "401 23rd St",
			city: "Port Angeles",
			phone: "5682-121-828"
		}, {
			supplier: "Technocom",
			street: "51 39th St",
			city: "Smallfield",
			phone: "5682-121-826"
		}, {
			supplier: "Titanium",
			street: "40 21st St",
			city: "Meridian",
			phone: "5682-121-827"
		}, {
			supplier: "Red Point Stores",
			street: "451 55th St",
			city: "Bethesda",
			phone: "5682-121-829"
		}, {
			supplier: "Very Best Screens",
			street: "123 72nd St",
			city: "McLean",
			phone: "5682-121-829"
		}];

		var oTable = this.getView().byId("DYNTAB");
		/*var oTable = new sap.ui.table.Table({
				title: "OData Model dynamic column and data binding",
				showNoData: true,
				columnHeaderHeight: 10,
				visibleRowCount: 7
			});*/

		var oModel = new sap.ui.model.json.JSONModel();
		oModel.setData({
			rows: rowData,
			columns: columnData
		});

		oTable.setModel(oModel);

		oTable.bindColumns("/columns", function (sId, oContext) {
			var columnName = oContext.getObject().columnName;
			return new sap.ui.table.Column({
				label: columnName,
				template:columnName,
				multiLabels: [
					new sap.m.Label({
						text: "Contact",
						textAlign:"Center"
					}),
					new sap.m.Label({
						text: columnName
					})
				],
				sortProperty: columnName,
				filterProperty: columnName,
				headerSpan: 2
			});
		});

		oTable.bindRows("/rows");

	}
});