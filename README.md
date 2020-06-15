# ALP_DEMO
ALP Demo

You should have a count in SCP to access Web IDE
Register https://register.sapdevcenter.com/SUPSignForms/ to access the backend OData Service.
Add the above-registered system as a destination in your SCP account. You can use below destination configuration for your reference

Destination Configure in NEO SCP , Save below script to TXT file and upload it to SCP destination
#
#Fri Aug 09 05:54:52 UTC 2019
Description=SAP Gateway Demo System
Type=HTTP
TrustAll=true
Authentication=NoAuthentication
WebIDEUsage=odata_abap,bsp_execute_abap,odata_gen,odata_abap,ui5_execute_abap,dev_abap
Name=ES5
WebIDEEnabled=true
URL=https\://sapes5.sapdevcenter.com
ProxyType=Internet
sap-client=002
WebIDESystem=ES5
