let students = [
    {
        "name": "David",
        "age": 23,
        "marks": 76
    },
    {
        "name": "Sophia",
        "age": 20,
        "marks": 88
    },
    {
        "name": "Liam",
        "age": 22,
        "marks": 65
    },
    {
        "name": "Emma",
        "age": 19,
        "marks": 91
    },
    {
        "name": "Noah",
        "age": 21,
        "marks": 70
    },
    {
        "name": "Olivia",
        "age": 24,
        "marks": 95
    },
    {
        "name": "James",
        "age": 20,
        "marks": 82
    },
    {
        "name": "Ava",
        "age": 23,
        "marks": 77
    },
    {
        "name": "Lucas",
        "age": 22,
        "marks": 60
    },
    {
        "name": "Mia",
        "age": 21,
        "marks": 89
    }
]

function renderStudents(stu) {

    document.querySelector('.studentsBox').textContent = ''

    stu.forEach(element => {

        const studentDiv = document.createElement('div');
        studentDiv.className = "student flex items-center gap-8 bg-white shadow rounded p-4";

        const nameP = document.createElement('p');
        nameP.className = "font-semibold text-gray-800";
        nameP.textContent = element.name;

        const ageP = document.createElement('p');
        ageP.className = "text-gray-600";
        ageP.textContent = element.age;

        const marksP = document.createElement('p');
        marksP.className = "text-green-600 font-medium";
        marksP.textContent = `${element.marks}%`;

        studentDiv.appendChild(nameP);
        studentDiv.appendChild(ageP);
        studentDiv.appendChild(marksP);

        document.querySelector('.studentsBox').appendChild(studentDiv);
    });
}

renderStudents(students)

document.querySelector('.buttons').addEventListener('click', function (e) {


    if (e.target.classList.contains('name')) {

        e.target.classList.toggle('asc')

        let sortedName = students.toSorted((a, b) => {

            if (e.target.classList.contains('asc')) return a.name.localeCompare(b.name)
            else return b.name.localeCompare(a.name)

        });

        renderStudents(sortedName);
    }
    if (e.target.classList.contains('age')) {

        e.target.classList.toggle('asc')

        let sortedAge = students.toSorted((a, b) => {
            if (e.target.classList.contains('asc')) return a.age - b.age
            else b.age - a.age
        });
        renderStudents(sortedAge);

    }
    if (e.target.classList.contains('marks')) {

        e.target.classList.toggle('asc')

        let sortedMarks = students.toSorted((a, b) => {
            if (e.target.classList.contains('asc')) return a.marks - b.marks
            else return b.marks - a.marks
        });
        renderStudents(sortedMarks);
    }



})