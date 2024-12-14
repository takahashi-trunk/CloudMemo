import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { auth } from '../../firebase';
// ログインと新規登録に使用するコンポーネント
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import { Alert } from 'react-native'; // アラートを表示するコンポーネント
//パスワードの表示非表示切り替えに使用
// import VisibilityIcon from '@mui/icons-material/Visibility';
// import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
//各種ボタンのアイコン
import AntDesign from '@expo/vector-icons/AntDesign';
import Feather from '@expo/vector-icons/Feather';

export default function Login({ navigation }) {
  // 状態管理
  const [mail, setMail] = useState('');
  const [password, setPassword] = useState('');
  //const [passwordType, setPasswordType] = useState('password');

  // ユーザの新規登録を行う関数
  const createUser = async () => {
    try {
      // 登録処理の実行
      await createUserWithEmailAndPassword(auth, mail, password);
      console.log('ユーザー登録成功');
      navigation.navigate('FlatMemoList', { userId: mail });
    } catch (err) {
      // エラー時の処理
      console.error('エラー:', err.code);
      Alert.alert('エラー', '新規登録に失敗しました');
    }
  };

  // ユーザのログインを行う関数
  const signIn = async () => {
    try {
      // ログイン処理の実行
      await signInWithEmailAndPassword(auth, mail, password);
      console.log('ユーザーログイン成功');
      navigation.navigate('FlatMemoList', { userId: mail });
    } catch (err) {
      // エラー時の処理
      console.error('エラー:', err.code);
      Alert.alert('エラー', 'ログインに失敗しました');
    }
  };

  //パスワードの表示・非表示

  return (
    <View style={styles.container}>
      <View style={styles.inputArea}>
        <TextInput
          style={styles.textInput}
          placeholder='メールアドレス'
          value={mail}
          autoCorrect={false}
          onChangeText={(text) => {
            //console.log(mail);　//入力値確認用
            // メールアドレスの状態を更新
            setMail(text);
          }}
          autoCapitalize={'none'}
        />
        <TextInput
          style={styles.textInput}
          placeholder='パスワード'
          //type={true ? 'eye-off' : 'eye'}
          autoCorrect={false}
          onChangeText={(text) => {
            //console.log(password);　//入力値確認用
            // パスワードの状態を更新
            setPassword(text);
          }}
          secureTextEntry={true}
          autoCapitalize={'none'}
        />
        <TouchableOpacity onPress={() => {}}>
          {/* <Feather name="eye-off" size={24} color="black" /> */}
          {/* <AntDesign name="eye" size={24} color="black" /> */}
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={[styles.button, styles.loginButton]} onPress={signIn}>
        <Text style={styles.loginText}>ログイン</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={createUser}>
        <Text style={styles.createUserText}>新規登録</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d4e4e7',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputArea: {
    margin: 20, // 要素の外側の余白
  },
  textInput: {
    margin: 7,
    paddingHorizontal: 10, // 要素の内側の余白（左右）
    height: 43, // 高さ
    width: 320, // 幅
    borderRadius: 6, // 要素の境界の外側の角を丸める
    backgroundColor: '#eee',
    fontSize: 18, // 文字の大きさ
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 43,
    width: 300,
    backgroundColor: '#F5F5F6',
    borderRadius: 10,
  },
  loginButton: {
    backgroundColor: '#5dacbd',
    marginBottom: 10,
  },
  loginText: {
    color: 'white', // 文字の色
    fontWeight: 'bold', // 文字の太さ
    fontSize: 16,
  },
  createUserText: {
    color: '#555',
  },
});
