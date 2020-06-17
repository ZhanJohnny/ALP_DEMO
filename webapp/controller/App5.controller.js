sap.ui.controller("IBSO.ALP_DEMO.controller.App5", {
	onInit: function () {

		var firstDay = new Date(2020, 0, 1);

		function totalWeeks() {
			var endYear = new Date(firstDay.getFullYear(), 11, 31, 23, 59, 59, 999);
			var msPerWeek = 7 * 24 * 60 * 60 * 1000;
			var weeks = Math.round((endYear.getTime() - firstDay.getTime()) / msPerWeek);

			function getTotalWeeks() {
				return weeks;
			}

			return getTotalWeeks;
		}

		var result = totalWeeks();
		var finalWeeks = result();

		var aColumnData = [];
		var col = "cw";
		// for (var x = 1; x < finalWeeks; x++) {
		// 	col = col + x;
		// 	aColumnData[x] = {
		// 		columnName: col
		// 	};
		// 	col = "cw";
		// }

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
		}

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

		// oTable.setModel(oModel);

		oTable.addColumn(new sap.ui.table.Column({
			label: new sap.m.Label({
				text: "zone"
			}),
			template: new sap.m.Label({
				text: "{zone}"
			}),
			sortProperty: "zone"
		}));

		oTable.addColumn(new sap.ui.table.Column({
			label: new sap.m.Label({
				text: "country"
			}),
			multiLabels: [
				new sap.m.Label({
					text: "Month"
				}),
				new sap.m.Label({
					text: "Week"
				})
			],
			template: new sap.m.Label({
				text: "{country}"
			})
		}));

		oTable.addColumn(new sap.ui.table.Column({
			label: new sap.m.Label({
				text: "total",
				textAlign: "Center",
				width: "100%"
			}),
			template: new sap.m.Label({
				text: "{total}"
			})
		}));

		var multiCol = "2020";
		var z = "0";

		for (var x = 1; x < finalWeeks; x++) {
			col = col + x;
			aColumnData[x] = {
				columnName: col
			};

			if ((x - 1) % 4 === 0) {
				z++;
				switch (z) {
				case 1:
					multiCol = multiCol.concat("Jan");
					break;
				case 2:
					multiCol = multiCol.concat("Feb");
					break;
				case 3:
					multiCol = multiCol.concat("Mar");
					break;
				case 4:
					multiCol = multiCol.concat("Apr");
					break;
				case 5:
					multiCol = multiCol.concat("May");
					break;
				case 6:
					multiCol = multiCol.concat("Jun");
					break;
				case 7:
					multiCol = multiCol.concat("Jul");
					break;
				case 8:
					multiCol = multiCol.concat("Aug");
					break;
				case 9:
					multiCol = multiCol.concat("Sep");
					break;
				case 10:
					multiCol = multiCol.concat("Oct");
					break;
				case 11:
					multiCol = multiCol.concat("Nov");
					break;
				case 12:
					multiCol = multiCol.concat("Dec");
					break;
				}

			}

			oTable.addColumn(new sap.ui.table.Column({
				label: new sap.m.Label({
					text: col
				}),
				multiLabels: [
					new sap.m.Label({
						text: multiCol
					}),
					new sap.m.Label({
						text: col,
						textAlign: "Center",
						width: "100%"
					})
				],
				template: new sap.m.Input({
					value: col
				}),
				headerSpan: 4
			}));

			col = "cw";
			multiCol = "2020";
		}

		// oTable.bindColumns("/columns", function (sId, oContext) {
		// 	var columnName = oContext.getObject().columnName;
		// 	return new sap.ui.table.Column({
		// 		label: columnName,
		// 		template: columnName,
		// 		multiLabels: [
		// 			new sap.m.Label({
		// 				text: "Contact",
		// 				textAlign:"Center"
		// 			}),
		// 			new sap.m.Label({
		// 				text: columnName
		// 			})
		// 		],
		// 		sortProperty: columnName,
		// 		filterProperty: columnName,
		// 		headerSpan: 4
		// 	});
		// });

		oTable.setModel(oModel);
		oTable.bindRows("/rows");

	}
});