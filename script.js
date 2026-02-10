document.getElementById("schedule-form").onsubmit = () => {

    clearErrors();


    let isValid = true;

    let fname = document.getElementById("fname").value.trim();
    let lname = document.getElementById("lname").value.trim();

    //Validate first name


    if (!fname){
        document.getElementById("err-fname").style.display = "block";
        isValid = false;
    }

    //Validate last name

    if (!lname){
        document.getElementById("err-lname").style.display = "block";
        isValid = false;
    }
    
    return isValid

}

function clearErrors(){
    let errors = document.getElementsByClassName("err");
    for (let i=0; i<errors.length; i++){
        errors[i].style.display = "none";
    }
}