sap.ui.controller("IBSO.ALP_DEMO.controller.App5", {
	onInit: function () {
		
		var firstDay = new Date(2020, 0, 1);
		
		function totalWeeks() {
			var endYear = new Date(firstDay.getFullYear(), 11, 31, 23, 59, 59, 999);
			var msPerWeek = 7* 24 * 60 * 60 * 1000;
			var weeks = Math.round((endYear.getTime() - firstDay.getTime()) / msPerWeek);
			
            function getTotalWeeks() {
            	return weeks;
            }
            
            return getTotalWeeks;
		};
		
		var result = totalWeeks();
		var finalWeeks = result();
		
		var aColumnData = [];
		var col = "cw";
		for (var x = 0; x < finalWeeks; x++) {
			col = col + x;
			// aColumnData.columnName = col.concat("Week", x);
			aColumnData[x] = {
				columnName: col
			};
			col = "cw";
		};
		
		var aRowData = [];
		var item = {};
		for (var i = 0; i < 5; i++) {
			for (var y = 0; y < finalWeeks; y++) {
				col = col + y;
				item[col] = col.concat("Row", i);
				col = "cw";
			}
			
			aRowData.push(item);
			item = {};
		};
		

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
			rows: aRowData,
			columns: aColumnData
		});

		oTable.setModel(oModel);

		oTable.bindColumns("/columns", function (sId, oContext) {
			var columnName = oContext.getObject().columnName;
			return new sap.ui.table.Column({
				label: columnName,
				template: columnName,
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
				headerSpan: 4
			});
		});

		oTable.bindRows("/rows");

	}
});
