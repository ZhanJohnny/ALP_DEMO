sap.ui.controller("IBSO.ALP_DEMO.controller.App2", {

	onInit: function () {

		var rowData = [{
			zone: "Europe",
			country: "Belgium",
			total: 100,
			week1: "12",
			week2: "10",
			week3: "30",
			week4: "40"
		}, {
			zone: "Europe",
			country: "France",
			total: 101,
			week1: "12",
			week2: "11",
			week3: "30",
			week4: "48"
		}, {
			zone: "Europe",
			country: "Germany",
			total: 102,
			week1: "12",
			week2: "20",
			week3: "34",
			week4: "20"
		}, {
			zone: "NorthAmerica",
			country: "Canada",
			total: 103,
			week1: "12",
			week2: "80",
			week3: "32",
			week4: "40"
		}, {
			zone: "NorthAmerica",
			country: "USA",
			total: 104,
			week1: "12",
			week2: "16",
			week3: "39",
			week4: "43"
		}, {
			zone: "APJ",
			country: "China",
			total: 105,
			week1: "13",
			week2: "15",
			week3: "29",
			week4: "50"
		}, {
			zone: "APJ",
			country: "Japan",
			total: 106,
			week1: "8",
			week2: "25",
			week3: "31",
			week4: "60"
		}, {
			zone: "APJ",
			country: "South Korea",
			total: 107,
			week1: "20",
			week2: "32",
			week3: "30",
			week4: "50"
		}, {
			zone: "APJ",
			country: "India",
			total: 108,
			week1: "12",
			week2: "10",
			week3: "30",
			week4: "40"
		}];

		var oModel = new sap.ui.model.json.JSONModel();
		oModel.setData(rowData);

		// instantiate the table
		/* var oTable = new sap.ui.table.Table({
			selectionMode: sap.ui.table.SelectionMode.Single,
			selectionBehavior: sap.ui.table.SelectionBehavior.Row
		});*/
		var oTable = this.getView().byId("idMyTable");

		// define the Table columns and the binding values
		oTable.addColumn(new sap.ui.table.Column({
			id: "zone",
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

		oTable.addColumn(new sap.ui.table.Column({
			label: new sap.m.Label({
				text: "week1"
			}),
			multiLabels: [
				new sap.m.Label({
					text: "Jan2020",
					textAlign: "Center",
					width: "100%"
				}),
				new sap.m.Label({
					text: "week1",
					textAlign: "Center",
					width: "100%"
				})
			],
			template: new sap.m.Input({
				value: "{week1}"
			}),
			headerSpan: 4
		}));

		oTable.addColumn(new sap.ui.table.Column({
			label: new sap.m.Label({
				text: "week2"
			}),
			multiLabels: [
				new sap.m.Label({
					text: "Jan2020"
				}),
				new sap.m.Label({
					text: "week2",
					textAlign: "Center",
					width: "100%"
				})
			],
			template: new sap.m.Input({
				value: "{week2}"
			})
		}));

		oTable.addColumn(new sap.ui.table.Column({
			label: new sap.m.Label({
				text: "week3"
			}),
			multiLabels: [
				new sap.m.Label({
					text: "Jan2020"
				}),
				new sap.m.Label({
					text: "week3",
					textAlign: "Center",
					width: "100%"
				})
			],
			template: new sap.m.Input({
				value: "{week3}"
			})
		}));

		oTable.addColumn(new sap.ui.table.Column({
			label: new sap.m.Label({
				text: "week4"
			}),
			multiLabels: [
				new sap.m.Label({
					text: "Jan2020"
				}),
				new sap.m.Label({
					text: "week4",
					textAlign: "Center",
					width: "100%"
				})
			],
			template: new sap.m.Input({
				value: "{week4}"
			})
		}));

		oTable.setModel(oModel);
		oTable.bindRows("/");
		oTable.setEnableGrouping(true);
		oTable.setGroupBy("zone");
		oTable.setFooter("Test");
		sap.ui.getCore().setModel(oModel, "globalModel");
	}
});