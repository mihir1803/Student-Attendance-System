const course = document.querySelector("#course")
const semester = document.querySelector("$semester")



async function Edit_Course(event){
    event.preventDefault();
    try{
        payload = {
            course:course.value,
            semester:semester.value,
            
        }
        for (const data in payload) {
            if (payload[data] === "")
                delete payload[data]
        }
        console.log(payload)
        let Update_info = await axios({
            method:"PATCH",
            url : `http://localhost:8000/manage-student/${id}/`,
            data : payload,
        })
        console.log(Update_info)
    } catch (error)
    {
        console.log(error)
    }
}
Edit_Course.addEventListener("click",Edit_Course)
