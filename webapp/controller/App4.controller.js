sap.ui.controller("IBSO.ALP_DEMO.controller.App4", {

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

		var oTable = this.getView().byId("Dynmtable");

		// define the Table columns and the binding values
		oTable.addColumn(new sap.m.Column({
			width: "100%",
			header: new sap.m.Label({
				text: "zone"
			}),
			footer: new sap.m.Label({
				text: "total",
				textAlign: "Center"
			}),
			mergeDuplicates: true
		}));

		oTable.addColumn(new sap.m.Column({
			width: "100%",
			header: new sap.m.Label({
				text: "country",
				textAlign: "Center"
			})
		}));

		oTable.addColumn(new sap.m.Column({
			width: "100%",
			header: new sap.m.Label({
				text: "total",
				textAlign: "Center"
			}),
			footer: new sap.m.Label({
				text: "1000",
				textAlign: "Center"
			})
		}));

		oTable.addColumn(new sap.m.Column({
			width: "100%",
			header: new sap.m.Label({
				text: "week1",
				textAlign: "Center"
			}),
			footer: new sap.m.Label({
				text: "100",
				textAlign: "Center"
			})
		}));

		oTable.addColumn(new sap.m.Column({
			width: "100%",
			header: new sap.m.Label({
				text: "week2",
				textAlign: "Center"
			})
		}));

		oTable.addColumn(new sap.m.Column({
			width: "100%",
			header: new sap.m.Label({
				text: "week3",
				textAlign: "Center"
			})
		}));

		oTable.addColumn(new sap.m.Column({
			width: "100%",
			header: new sap.m.Label({
				text: "week4",
				textAlign: "Center"
			})
		}));

		oTable.bindItems("/", new sap.m.ColumnListItem({
			cells: [new sap.m.Text({
				text: "{zone}"
			}), new sap.m.Text({
				text: "{country}"
			}), new sap.m.Text({
				text: "{total}"
			}), new sap.m.Input({
				value: "{week1}"
			}), new sap.m.Input({
				value: "{week2}"
			}), new sap.m.Input({
				value: "{week3}"
			}), new sap.m.Input({
				value: "{week4}"
			})]
		}));

		oTable.setModel(oModel);
		//oTable.bindRows("/");
		//oTable.setEnableGrouping(true);
		//oTable.setGroupBy("zone");
		sap.ui.getCore().setModel(oModel, "globalModel2");
	}
});