const headers = { Authorization: 'Bearer ' + localStorage.getItem("token") }
const table = document.querySelector("#student_table_body")

async function get_student(event) {
    try {
        let student = await axios({
            method: "GET",
            url: "http://localhost:8000/get-students/",
            headers
        })
        console.log(student.data)
        const student_details = students.data // change
        let i = 1
        for (let students of student_details) { 
            console.log(student)
            const html = `
            <tr class="px-10">
            <td data-label="Id">${i}</td>
            <td data-label="Enrollment Number">${student.gr_number || "-"}</td>
            <td data-label="Name"><a href="college-admin-manage-student-details.html?id=${student.user[0]._id}">${student.user[0].first_name} ${student.user[0].last_name}</a></td>
            <td data-label="Course">${student.roll_number || "-"}</td>
            <td data-label="Semester">${student.user[0].email}</td>
            </tr>
            `
            table.insertAdjacentHTML("beforeend",html)
            i++
        }
    } catch (error) {
        console.log(error)
    }
}

window.onload = get_student
