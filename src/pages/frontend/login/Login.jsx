import {NavLink} from 'react-router-dom'
import { useForm } from "react-hook-form"
import api from '../../../services/authUserAPI'
import Swal from 'sweetalert2'
import { getHtmlContainer } from '../../../../node_modules/sweetalert2/src/utils/dom/getters';

const Login = () => {

    document.title = 'Login'

    // การใช้งาน react hook form
    const { register, handleSubmit, errors } = useForm()

    // ฟังก์ชันสำหรับการ login
    const handleLogin = (data) => {
        // console.log(data)
        // call api login
        const authData = {
            "identifier": data.email,
            "password": data.password
        }

        api.authLogin(authData).then(res => {
            // console.log(res)
            let timerInterval

            // sweetalert2 with timer
            Swal.fire({
                title: 'กำลังเข้าสู่ระบบ',
                html: 'กรุณารอสักครู่ <b></b> วินาที',
                timer: 3000,
                timerProgressBar: true,
                didOpen: () => {
                    Swal.showLoading()
                    timerInterval = setInterval(() => {
                    const content = Swal.getHtmlContainer()
                    if (content) {
                        const b = content.querySelector('b')
                        if (b) {
                            b.textContent = parseInt(Swal.getTimerLeft() / 1000)
                        }
                    }
                    }, 10)
                },
                willClose: () => {
                    clearInterval(timerInterval)
                }
            }).then((result) => {
                if(result.dismiss === Swal.DismissReason.timer) {
                    
                    // set token to localstorage
                    localStorage.setItem('token', res.data.jwt)
                    
                    // redirect to home page
                    window.location.href = '/dashboard'  
                }
            })
        }).catch(err => {
            console.log(err)
            if(err.response.status === 400) {
                Swal.fire({
                    icon: 'error',
                    text: 'ข้อมูลเข้าระบบไม่ถูกต้อง ลองใหม่ !',
                    confirmButtonText:'ปิดหน้าต่าง',
                })
                
            }
        })
    }

    return (
        
        <div className="flex h-screen bg-indigo-700">

           <div className="w-full max-w-xs m-auto bg-indigo-100 rounded p-5">   

            {/* header */}
            <header className="mb-6">
                <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                className="w-12 h-12 text-white p-2 bg-indigo-500 rounded-full mx-auto"
                viewBox="0 0 24 24"
                >
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                </svg>
            </header>

            {/* form */}
            <form onSubmit={handleSubmit(handleLogin)}>
                <div>
                    <label className="block mb-2 text-indigo-500" htmlFor="email">Email</label>
                    <input className="w-full p-2 mb-3 text-indigo-700 border-b-2 border-indigo-500 outline-none focus:bg-gray-300" type="email" name="email"
                    ref={register({required:true})}
                    />
                    {errors.email && <p className="text-red-500 mb-3">กรุณาป้อนอีเมล์ก่อน</p>}
                </div>
                <div>
                    <label className="block mb-2 text-indigo-500" htmlFor="password">Password</label>
                    <input className="w-full p-2 mb-3 text-indigo-700 border-b-2 border-indigo-500 outline-none focus:bg-gray-300" type="password" name="password" 
                    ref={register({required:true})}
                    />
                    {errors.password && <p className="text-red-500 mb-3">กรุณาป้อนรหัสผ่านก่อน</p>}
                </div>
                <div>          
                    <input className="w-full bg-indigo-700 hover:bg-pink-700 text-white font-bold py-2 px-4 mb-6 rounded" type="submit" value="Login" />
                </div>       
            </form>

            {/* footer */}
            <footer>
                <NavLink className="text-indigo-700 hover:text-pink-700 text-sm float-left" to="/forgotpassword">Forgot Password?</NavLink>
                <NavLink className="text-indigo-700 hover:text-pink-700 text-sm float-right" to="/register">Create Account</NavLink>
            </footer> 
            </div>

        </div>

    )
}

export default Login
