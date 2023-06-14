const gr_number = document.querySelector("#gr_number")
const student_name = document.querySelector("#student_name")
const contect_number = document.querySelector("#contect_number")
const email_id = document.querySelector("#email_id")
const course = document.querySelector("#course")
const college_name = document.querySelector("#college_name")
const add_line_1 = document.querySelector("#add_line_1")
const add_line_2 = document.querySelector("#add_line_2")
const landmark = document.querySelector("#landmark")
const pincode =document.querySelector("#pin_code")
const city = document.querySelector("#city")
const state = document.querySelector("#state")


async function Insert_System_Admin(event){
    event.preventDefault();
    try{
        payload = {
            gr_number:gr_number.value,
            student_name:student_name.value,
            contect_number:contect_number.value,
            email_id:email_id.value,
            course:course.value,
            college_name:college_name.value,
            add_line_1:add_line_1.value,
            add_line_2:add_line_2.value,
            landmark:landmark.value,
            pincode:pincode.value,
            city:city.value,
            state:state.value
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