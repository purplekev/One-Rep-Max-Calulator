
function calculateRM() {
    var weight = document.RMForm.EnterWeight.value;
    var reps = document.RMForm.NumberofReps.value;
    var OneRM = +weight + (weight * reps * 0.0333);
    document.RMForm.RM.value = OneRM.toFixed(2);
}