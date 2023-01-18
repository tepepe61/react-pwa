import logo from './logo.svg';
import { AuthProvider } from './provider/AuthProvider';
import './App.css';
import './service/firebase';
import Header from './components/Header';

function App() {
  return (
    <AuthProvider>
    {/*AuthProvider.jsで'<AuthContext.Provider value={{ currentUser }}>'してるから下の<Header />でreduxみたいにデータに参照できる */}
      <Header />
    </AuthProvider>
  );
}

export default App;
