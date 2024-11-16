import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";

export default function MemoEdit() {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textInput}
        multiline
        placeholder="メモ編集内容"
      />
      <TouchableOpacity style={[styles.button, styles.saveButton]}>
        <Text style={styles.saveText}>保存</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.button, styles.cancelButton]}>
        <Text style={styles.cancelText}>キャンセル</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //flexDirection: "row",
    backgroundColor: "#d4e4e7",
  },
  /*title: {
    //<Text style={styles.title}>メモ編集内容</Text> //コンポーネント部分　※テキストインプット上部に表示できない
    color: "black", // 文字の色
    //margin: 40,
    paddingHorizontal: 10, // 要素の内側の余白（左右）
    height: 35, // 高さ
    width: 150, // 幅
    fontSize: 30, // 文字の大きさ
    position: "absolute",
    top: 90,
  },*/
  textInput: {
    paddingHorizontal: 10, // 要素の内側の余白（左右）
    flex: 1,
    height: 40, // 高さ
    width: "100%", // 幅
    backgroundColor: "#eee",
    fontSize: 17, // 文字の大きさ
    alignSelf: "flex-start",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    color: "black", // 文字の色
    top: 100,
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    height: 40,
    width: 90,
    backgroundColor: "#5dacbd",
    borderRadius: 10,
  },
  saveButton: {
    position: "absolute",
    top: 50,
    right: 10,
    //alignSelf: "flex-end",
    fontSize: 35,
    margin: 1,
    //backgroundColor: "#5dacbd",
    //marginBottom: 10,
  },
  saveText: {
    color: "black", // 文字の色
    fontWeight: "bold", // 文字の太さ
    fontSize: 16,
  },
  cancelButton: {
    position: "absolute",
    top: 50,
    left: 10,
    //alignSelf: "flex-start",
    fontSize: 35,
    margin: 1,
    //backgroundColor: "#5dacbd",
    //marginBottom: 10,
  },
  cancelText: {
    color: "black", // 文字の色
    fontWeight: "bold", // 文字の太さ
    fontSize: 16,
  },
});
