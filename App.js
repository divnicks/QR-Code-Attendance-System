import React from 'react'
import Home from './pages/Home.jsx'
import Adminauth from './pages/Adminauth.jsx'
import Courseauth from './pages/Courseauth.jsx'
import Createcourse from './pages/Createcourse.jsx'
import Createuser from './pages/Createuser.jsx'
import Dashboard from './pages/Dashboard.jsx'
import Lecturerdashboard from './pages/Lecturerdashboard.jsx'
import Loginmobile from './pages/Loginmobile.jsx'
import Qrcode from './pages/Qrcode.jsx'
import Registeradmin from './pages/Registeradmin.jsx'
import Scanner from './pages/Scanner.jsx'
import Scanner2 from './pages/Scanner2.jsx'
import Tables from './pages/Tables.jsx'
import UpdateStudent from './pages/UpdateStudent.jsx'
import UpdateStudentPassword from './pages/UpdateStudentPassword.jsx'
import Verified from './pages/Verified.jsx'
import Verify from './pages/Verify.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './style.css'; // Import your CSS file

function App() {
    return ( <
        BrowserRouter >
        <
        Routes >
        <
        Route path = '/'
        element = { < Home / > }
        /> <
        Route path = '/Adminauth'
        element = { < Adminauth / > }
        /> <
        Route path = '/Courseauth'
        element = { < Courseauth / > }
        /> <
        Route path = '/Createcourse'
        element = { < Createcourse / > }
        /> <
        Route path = '/Createuser'
        element = { < Createuser / > }
        /> <
        Route path = '/DashBoard'
        element = { < Dashboard / > }
        /> <
        Route path = '/Lecturerdashboard'
        element = { < Lecturerdashboard / > }
        /> <
        Route path = '/Loginmobile'
        element = { < Loginmobile / > }
        /> <
        Route path = '/Qrcode'
        element = { < Qrcode / > }
        /> <
        Route path = '/Registeradmin'
        element = { < Registeradmin / > }
        /> <
        Route path = '/Scanner'
        element = { < Scanner / > }
        /> <
        Route path = '/Scanner2'
        element = { < Scanner2 / > }
        /> <
        Route path = '/Tables'
        element = { < Tables / > }
        /> <
        Route path = '/UpdateStudent'
        element = { < UpdateStudent / > }
        /> <
        Route path = '/UpdateStudentPassword'
        element = { < UpdateStudentPassword / > }
        /> <
        Route path = '/Verified'
        element = { < Verified / > }
        /> <
        Route path = '/Verify'
        element = { < Verify / > }
        /> < /
        Routes > < /BrowserRouter >
    )
}

export default App