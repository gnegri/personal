
export const globals = {
    totalCols: 12,
    _getWidth(): number {
        return Math.max(
            document.body.scrollWidth,
            document.documentElement.scrollWidth,
            document.body.offsetWidth,
            document.documentElement.offsetWidth,
            document.documentElement.clientWidth
        );
    },
    // https://stackoverflow.com/questions/21741841/detecting-ios-android-operating-system
    _isMobile: /Android|webOS|iPhone|iPad|iPod|Opera Mini/i.test(navigator.userAgent),
    isMobile(): boolean { return globals._isMobile || globals._getWidth() < 1030; }
};
