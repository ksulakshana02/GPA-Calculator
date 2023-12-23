const addSubject = ()=>{
    const subjectContainer = document.querySelector(".details");
    const subjectDiv = document.createElement("div");
    subjectDiv.classList.add("row");

    const subjectName = document.createElement("input");
    subjectName.type = "text";
    subjectName.classList.add("subject");
    subjectName.placeholder = "Subject";

    const gradeLabel = document.createElement("label");
    gradeLabel.innerHTML = "Grade:";

    const gradeSelect = document.createElement("select");
    // gradeSelect.classList.add("grade");
    gradeSelect.className = "grade";


    let gradeElement = ["A+","A","A-","B+","B","B-","C+","C","C-","D+","D","E"];
    for(let i=0; i<= gradeElement.length -1; i++){
        let grdOpt = gradeElement[i];
        let grdEl = document.createElement("option");
        grdEl.textContent = grdOpt;
        grdEl.value = grdOpt;
        
        gradeSelect.appendChild(grdEl);
    }

    const creditLabel = document.createElement("label");
    creditLabel.innerHTML = "Credit:";

    const creditSelect = document.createElement("select");
    // creditSelect.classList.add("credit");
    creditSelect.className = "credit";


    let creditElement = [2,3,4,5,6,7,8];
    for(let i= 0; i<=creditElement.length-1; i++){
        let crdOpt = creditElement[i];
        let crdEl = document.createElement("option");
        crdEl.textContent = crdOpt;
        crdEl.value = crdOpt;

        creditSelect.appendChild(crdEl);
    }


    subjectDiv.appendChild(subjectName);
    subjectDiv.appendChild(gradeLabel);
    subjectDiv.appendChild(gradeSelect);
    subjectDiv.appendChild(creditLabel);
    subjectDiv.appendChild(creditSelect);

    subjectContainer.appendChild(subjectDiv);
}

const calGpa = ()=>{
    const subjects = document.querySelectorAll(".row");
    const grades = document.querySelectorAll('.grade');
    const credits = document.querySelectorAll('.credit');
    const courses = document.querySelectorAll(".subject")
    let totalPoint = 0;
    let totalCredit = 0;

    subjects.forEach((subject, index)=>{
        const grade = grades[index].value;
        const credit = parseFloat(credits[index].value);
        const course = courses[index].value;


        if (!isNaN(course)){
            alert("Please enter value for all subjects.");
            return;
        }else {
            const gradePoints = getGradePoint(grade);
            totalPoint += gradePoints * credit;
            totalCredit += credit;
        }

    });
    const gpa = totalCredit > 0 ? (totalPoint / totalCredit).toFixed(2) : 0.0;
    document.querySelector(".credit-amount").innerHTML = totalCredit;
    document.querySelector(".gpa-amount").innerHTML = gpa;
}

function getGradePoint(grade){
    const gradePoint = {
        'A+' : 4.00,
        "A" : 4.00,
        "A-" : 3.70,
        "B+" : 3.30,
        "B" : 3.00,
        "B-" : 2.70,
        "C+" : 2.30,
        "C" : 2.00,
        "C-" : 1.70,
        "D+" : 1.30,
        "D" : 1.00,
        "E" : 0.00,
    }
    return gradePoint[grade]

}

function saveData(){
    localStorage.setItem("data", liscontainer.innerHTML);
}

function showTask(){
    liscontainer.innerHTML = localStorage.getItem("data");
}

showTask();