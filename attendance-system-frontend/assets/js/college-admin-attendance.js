const date = document.querySelector("#date")
const headers = {"Authorization":`Bearer ${localStorage.getItem("token")}`}

date.addEventListener("change",async function(event){
    try {
        const uri = `http://localhost:8000/get-timetable-by-date/?date=${new Date(this.value).toISOString()}`
        console.log(uri)
        let timetables = await axios({
            method: "GET",
            url: uri,
            headers
        })
        
        timetables = timetables.data
        console.log(timetables)

        for(const timetable of timetables){
            console.log(timetable)
            const html = `
            <div class="dropdown">
                
                    <a href="${timetable.image.image_url}" target="_blank">${timetable.subject.subject_name}</a>
                
            </div>
            `
            document.querySelector(".subject").insertAdjacentHTML("beforeend",html)
        }
    } catch (error) {
        console.log(error)
    }
})