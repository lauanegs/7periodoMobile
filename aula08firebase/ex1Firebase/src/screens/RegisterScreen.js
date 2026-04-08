import { createUserWithEmailAndPassword, deleteUser } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import { auth, db } from '../config/firebaseConfig';

const [name, setName] = useState('');
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const [birthDate, setBirthDate] = useState('');
const [modalVisible, setModalVisible] = useState(false);
const [modalMessage, setModalMessage] = useState('');
const [isSuccess, setIsSuccess] = useState(false);

const handleRegister = async () => {
  if (!name || !email || !password || !birthDate) {
    setModalMessage('Por favor, preencha todos os campos.');
    setIsSuccess(false);
    setModalVisible(true);
    return;
  }

  let userCreated = null;

  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    userCreated = userCredential.user;

    await setDoc(doc(db, 'users', userCreated.uid), {
      name: name,
      email: email,
      birthDate: birthDate,
      createdAt: new Date().toISOString()
    });

    setModalMessage('Cadastro realizado com sucesso!');
    setIsSuccess(true);
    setModalVisible(true);
  } catch (error) {
    if (userCreated && error.code !== 'auth/email-already-in-use') {
      try {
        await deleteUser(userCreated);
      } catch (rollbackError) {
        console.error("Falha ao reverter criação de usuário:", rollbackError);
      }
    }

    setIsSuccess(false);

    if (error.code === 'auth/email-already-in-use') {
      setModalMessage('Este e-mail já está em uso.');
    } else if (error.code === 'auth/weak-password') {
      setModalMessage('A senha deve ter pelo menos 6 caracteres.');
    } else if (error.code === 'permission-denied') {
      setModalMessage('Erro de permissão no Banco de Dados. Verifique as regras do Firestore.');
    } else {
      setModalMessage('Falha ao cadastrar: ' + error.message);
    }
    setModalVisible(true);
  }
};