import logo from './logo.svg';
import { AuthProvider } from './provider/AuthProvider';
import './App.css';
import './service/firebase';
import Header from './components/Header';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <AuthProvider>
    {/*AuthProvider.jsで'<AuthContext.Provider value={{ currentUser }}>'してるから下の<Header />でreduxみたいにデータに参照できる */}
      <Header />
      <Dashboard />
    </AuthProvider>
  );
}

export default App;
