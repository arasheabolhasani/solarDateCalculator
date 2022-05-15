function calculateJalali() {
    const year = document.getElementById('gregorianYear').value;
    const month = document.getElementById('gregorianMonth').value;
    const day = document.getElementById('gregorianDay').value;

    const gregorian = new Date(year, month - 1, day)
    const jalali = gregorian.toLocaleDateString('fa-IR');
    document.getElementById('gregorianToJalali').innerText = jalali;
}
