const ObservableArray = require("tns-core-modules/data/observable-array").ObservableArray;
const Vue = require("./");

Vue.registerElement("RadRadialGauge", () => require("nativescript-pro-ui/gauges").RadRadialGauge);
Vue.registerElement("RadialScale", () => require("nativescript-pro-ui/gauges").RadialScale);
Vue.registerElement("ScaleStyle", () => require("nativescript-pro-ui/gauges").ScaleStyle);
Vue.registerElement("RadialBarIndicator", () => require("nativescript-pro-ui/gauges").RadialBarIndicator);
Vue.registerElement("BarIndicatorStyle", () => require("nativescript-pro-ui/gauges").BarIndicatorStyle);
Vue.registerElement("RadialNeedle", () => require("nativescript-pro-ui/gauges").RadialNeedle);
Vue.registerElement("TitleStyle", () => require("nativescript-pro-ui/gauges").TitleStyle);
Vue.registerElement("SubtitleStyle", () => require("nativescript-pro-ui/gauges").SubtitleStyle);
Vue.registerElement("NeedleStyle", () => require("nativescript-pro-ui/gauges").NeedleStyle);

Vue.directive("tkRadialGaugeScales", {
    inserted: function (el) {
        var scale = el._nativeView;
        var gauge = el.parentNode._nativeView;

        if (gauge.scales) {
            gauge.scales.push(scale);
        } else {
            gauge.scales = new ObservableArray([scale]);
        }
    }
});


Vue.directive("tkRadialScaleIndicators", {
    inserted: function (el) {
        var barIndicator = el._nativeView;
        var scale = el.parentNode._nativeView;

        if (scale.indicators) {
            scale.indicators.push(barIndicator);
        } else {
            scale.indicators = new ObservableArray([barIndicator]);
        }
    }
});

Vue.directive("tkRadialBarIndicatorStyle", {
    inserted: function (el) {
        el.parentNode._nativeView.indicatorStyle = el._nativeView;
    }
});

Vue.directive("tkRadialGaugeTitleStyle", {
    inserted: function (el) {
        el.parentNode._nativeView.titleStyle = el._nativeView;
    }
});

Vue.directive("tkRadialGaugeSubtitleStyle", {
    inserted: function (el) {
        el.parentNode._nativeView.subtitleStyle = el._nativeView;
    }
});

Vue.directive("tkRadialNeedleStyle", {
    inserted: function (el) {
        el.parentNode._nativeView.needleStyle = el._nativeView;
    }
});

Vue.directive("tkRadialScaleStyle", {
    inserted: function (el) {
        el.parentNode._nativeView.scaleStyle = el._nativeView;
    }
});