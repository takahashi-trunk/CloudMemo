import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";

export default function Login() {
  //状態管理
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");

  // loginという関数を定義
  const login = () => {
    console.log("mail", mail);
    console.log("password", password);
    console.log("ログインボタンが押されました！");
  };
  return (
    <View style={styles.container}>
      <View style={styles.inputArea}>
        <TextInput
          style={styles.textInput}
          value={mail}
          autoCorrect={false}
          onChangeText={(text) => {
            setMail(text);
          }}
          placeholder="メールアドレス"
        />
        <TextInput style={styles.textInput} placeholder="パスワード" />
      </View>
      <TouchableOpacity
        style={[styles.button, styles.loginButton]}
        onPress={login}
      >
        <Text style={styles.loginText}>ログイン</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.createUserText}>新規登録</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#d4e4e7",
    alignItems: "center",
    justifyContent: "center",
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
    backgroundColor: "#eee",
    fontSize: 18, // 文字の大きさ
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    height: 43,
    width: 300,
    backgroundColor: "#F5F5F6",
    borderRadius: 10,
  },
  loginButton: {
    backgroundColor: "#5dacbd",
    marginBottom: 10,
  },
  loginText: {
    color: "white", // 文字の色
    fontWeight: "bold", // 文字の太さ
    fontSize: 16,
  },
  createUserText: {
    color: "#555",
  },
});
