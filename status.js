var isOpenForCommissions = true;

function getCommissionStatus() {
    if (typeof isOpenForCommissions !== "undefined") {
        return isOpenForCommissions;
    }
    return false;
}
