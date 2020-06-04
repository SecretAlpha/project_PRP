const button = document.getElementById('log_button');
button.addEventListener('click', async function () {
    let bodyReq = {
        'email': document.getElementById('input_email').value,
        'password': document.getElementById('input_password').value
    };
    let response = await fetch('http://nure-helper.herokuapp.com/login',{
        method: 'POST',
        headers:{
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(bodyReq)
    });
    console.log(response);
    if (response.ok){
        const answer = await response.json();
        localStorage.setItem('infoWithRole', answer);
        if(answer[role][id] === 3){
            location.href = createNewHref(location.href, '/shedule.html');
        } else{
            location.href = createNewHref(location.href, '/sheduleTeacher.html');
        }
    }else{
        let bl = document.getElementById('authorization-invalid');
        bl.style.display = 'block';
    }
})
function createNewHref(string, aim) {
    let result = string.substring(0, string.lastIndexOf('/')) + aim;
    return result;
}

