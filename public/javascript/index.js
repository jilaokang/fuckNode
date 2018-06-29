const username = document.getElementById('username')
        const password = document.getElementById('password')
        const submit = document.getElementById('submit')


        submit.addEventListener('click', () => {
            axios.post('/', {
                    username: username.value,
                    password: password.value
                })
                .then(res => {
                    if (!res.data.exist) {
                        alert(`注册成功.`)
                    }
                    if (res.data.verify === false) {
                        alert('密码错误')
                    } else {
                        location.href = 'showpost'
                    }
                })
                .catch(err => {
                    console.log(err)
                })
        })