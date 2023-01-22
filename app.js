
function calculateRM() {
    var weight = document.RMForm.EnterWeight.value;
    var reps = document.RMForm.NumberofReps.value;

    if (reps == 0) {    
        var OneRM = 0;
        document.RMForm.RM.value = OneRM.toFixed(2);
    } else if (reps == 1) {
        OneRM = weight;
        document.RMForm.RM.value = OneRM + '.00';
    } else {
        var OneRM = +weight + (weight * reps * 0.0333);
        document.RMForm.RM.value = OneRM.toFixed(2);
    }
}