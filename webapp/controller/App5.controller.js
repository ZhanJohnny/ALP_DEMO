sap.ui.controller("IBSO.ALP_DEMO.controller.App5", {
	onInit: function () {

		var today = new Date();
		var currentMonth = today.getMonth();
		var currentYear = today.getFullYear();
		var firstDateOfYear = new Date(currentYear, 0, 1);
		var firstDayOfYear = firstDateOfYear.getDay();
		var endDateOfYear = new Date(currentYear, 11, 31, 23, 59, 59, 999);
		var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

		function getTotalWeeks() {
			var msPerWeek = 7 * 24 * 60 * 60 * 1000;
			var weeks = Math.round((endDateOfYear.getTime() - firstDateOfYear.getTime()) / msPerWeek);

			function returnTotalWeeks() {
				return weeks;
			}

			return returnTotalWeeks;
		}

		function getTotalDays() {
			var msPerDay = 24 * 60 * 60 * 1000;
			var days = Math.round((endDateOfYear.getTime() - firstDateOfYear.getTime()) / msPerDay);

			function returnTotalDays() {
				return days;
			}

			return returnTotalDays;
		}

		Date.prototype.addDays = function (days) {
			var date = new Date(this.valueOf());
			date.setDate(date.getDate() + days);
			return date;
		};

		var result = getTotalWeeks();
		var finalWeeks = result();

		var calLastDateOfYear = firstDateOfYear.addDays(7 * finalWeeks);
		if (calLastDateOfYear < endDateOfYear) {
			finalWeeks = finalWeeks + 2;
		} else {
			finalWeeks = finalWeeks + 1;
		}

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

		var multiCol = currentYear;
		var daysOfFirstWeek = 6 - firstDayOfYear;

		for (var x = 1; x < finalWeeks; x++) {
			col = col + x;
			aColumnData[x] = {
				columnName: col
			};

			if (x === 1) {
				var satOfWeek = firstDateOfYear.addDays(daysOfFirstWeek);
			} else {
				satOfWeek = satOfWeek.addDays(7);
			}

			var monthOfWeek = satOfWeek.getMonth();

			if (x === finalWeeks - 1) {
				multiCol = months[11] + multiCol;
			} else {
				multiCol = months[monthOfWeek] + multiCol;
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
					})
					// headerSpan: 5
			}));

			col = "cw";
			multiCol = currentYear;
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