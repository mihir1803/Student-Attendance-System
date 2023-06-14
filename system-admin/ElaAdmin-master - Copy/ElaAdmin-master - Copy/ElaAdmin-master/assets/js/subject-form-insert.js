const course = document.querySelector("#course")
const subject = document.querySelector("$subject")
const semester = document.querySelector("$semester")



async function Insert_System_Admin(event){
    event.preventDefault();
    try{
        payload = {
            course:course.value,
            semester:semester.value,
            subject:subject.value,
            
        }
        for(const data in payload)
        {
            if(payload[data] == "")
            {
                error_message="Invalid Data"
                alert("Please make sure that any of field is not empty")
                return
            }
        }
        console.log(payload)
        let Insert_info = await axios({
            method:"POST",
            url : `http://localhost:8000/manage-student/${id}/`,
            data : payload,
        })
        console.log(error)
    } catch (error)
    {
        console.log(error)
    }
}