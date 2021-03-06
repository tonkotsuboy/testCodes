/** デバッグモードかどうか。本番公開時にはfalseにする */
var DEBUG_MODE = true;
/**
 * デバッグモードが有効で、console.log()が使える時に、
 * コンソールに文字列を出力します。
 * @param {string[]} ...args 出力したい文字列です。
 */
function trace() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i - 0] = arguments[_i];
    }
    if (DEBUG_MODE && this.console && typeof console.log != "undefined") {
        var str = "";
        if (args.length > 0)
            str = args.join(", ");
        console.log(str);
    }
}
// テストコード
trace("いちいち", "console.log()とか", "書いていられれないです");
//# sourceMappingURL=trace.js.map