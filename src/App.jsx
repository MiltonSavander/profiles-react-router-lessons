import './App.css'
import {
    Route,
    RouterProvider,
    createBrowserRouter,
    createRoutesFromElements,
} from 'react-router-dom'

// Page
import Home from './pages/Home'
import About from './pages/About'
import Faq from './pages/help/Faq'
import Contact from './pages/help/Contact'
import NotFound from './pages/NotFound'
import Profiles, { profilesLoader } from './pages/profiles/Profiles'
import ProfileDeteails, { profileDetailsLoader } from './pages/profiles/ProfileDeteails'
import ProfilesError from './pages/profiles/ProfilesError'

// Layouts
import RootLayout from './layouts/RootLayout'
import HelpLayout from './layouts/HelpLayout'
import ProfilesLayout from './layouts/ProfilesLayout'

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<RootLayout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="help" element={<HelpLayout />}>
                <Route path="faq" element={<Faq />} />
                <Route path="contact" element={<Contact />} />
            </Route>
            <Route path="profiles" element={<ProfilesLayout />} errorElement={<ProfilesError />} >
                <Route index element={<Profiles />} loader={profilesLoader} />
                <Route
                    path=":id"
                    element={<ProfileDeteails />}
                    loader={profileDetailsLoader}
                />
            </Route>
            <Route path="*" element={<NotFound />} />
        </Route>
    )
)

function App() {
    return (
        <div className="App">
            <RouterProvider router={router} />
        </div>
    )
}

export default App
