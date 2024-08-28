var isOpenForCommissions = false;

function getCommissionStatus() {
    if (typeof isOpenForCommissions !== "undefined") {
        return isOpenForCommissions;
    }
    return false;
}
