/* global QUnit */
// https://api.qunitjs.com/config/autostart/
QUnit.config.autostart = false;

sap.ui.require([
	"syncc22/message.manager/test/unit/AllTests"
], function (Controller) {
	"use strict";
	QUnit.start();
});