
export const globals = {
    // https://stackoverflow.com/questions/21741841/detecting-ios-android-operating-system
    _isMobile: /Android|webOS|iPhone|iPad|iPod|Opera Mini/i.test(navigator.userAgent),
    isMobile() { return globals._isMobile; }
};
