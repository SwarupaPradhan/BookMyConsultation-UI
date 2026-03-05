import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import DoctorList from './pages/DoctorList';
import AppointmentForm from './pages/AppointmentForm';
import ConsultationList from "./ConsultationList";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <DoctorList />
      <AppointmentForm />
      <ConsultationList />
    </div>
  );
}

export default App;