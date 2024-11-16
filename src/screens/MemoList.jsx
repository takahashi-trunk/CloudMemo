import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
//各種ボタンのアイコン
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function MemoList() {
  return (
    <View style={styles.container}>
      <View style={styles.inputArea}>
        <Text style={styles.title}>メモ一覧 </Text>
      </View>
      <View style={styles.memoArea}>
        <TouchableOpacity style={[styles.button]}>
          <View>
            <Text style={styles.memoText}>メモ内容1</Text>
            <Text style={styles.dayText}>2022/01/01</Text>
          </View>
          <TouchableOpacity style={styles.trashBox}>
            <MaterialCommunityIcons
              style={styles.trashBox}
              name="trash-can-outline"
              size={20}
              color="#bbb"
            />
          </TouchableOpacity>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button]}>
          <View>
            <Text style={styles.memoText}>メモ内容2</Text>
            <Text style={styles.dayText}>2022/01/01</Text>
          </View>
          <TouchableOpacity style={styles.trashBox}>
            <MaterialCommunityIcons
              style={styles.trashBox}
              name="trash-can-outline"
              size={20}
              color="#bbb"
            />
          </TouchableOpacity>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button]}>
          <View>
            <Text style={styles.memoText}>メモ内容3</Text>
            <Text style={styles.dayText}>2022/01/01</Text>
          </View>
          <TouchableOpacity style={styles.trashBox}>
            <MaterialCommunityIcons
              style={styles.trashBox}
              name="trash-can-outline"
              size={20}
              color="#bbb"
            />
          </TouchableOpacity>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button]}>
          <View>
            <Text style={styles.memoText}>メモ内容4</Text>
            <Text style={styles.dayText}>2022/01/01</Text>
          </View>
          <TouchableOpacity style={styles.trashBox}>
            <MaterialCommunityIcons
              style={styles.trashBox}
              name="trash-can-outline"
              size={20}
              color="#bbb"
            />
          </TouchableOpacity>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={[styles.button, styles.addButton]}>
        <Text style={styles.addText}>+</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.logout}>
        <MaterialCommunityIcons
          style={styles.logout}
          name="logout"
          size={24}
          color="black"
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#d4e4e7",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  item: {
    backgroundColor: "#ddd",
    alignSelf: "flex-start",
    width: 300,
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    color: "black", // 文字の色
    margin: 40,
    paddingHorizontal: 10, // 要素の内側の余白（左右）
    height: 35, // 高さ
    width: 150, // 幅
    fontSize: 30, // 文字の大きさ
    top: 20,
  },
  memoArea: {
    margin: 1, // 要素の外側の余白
    paddingHorizontal: 10, // 要素の内側の余白（左右）
  },
  button: {
    paddingHorizontal: 10, // 要素の内側の余白（左右）
    alignItems: "flex-start",
    justifyContent: "center",
    height: 50,
    width: 300,
    backgroundColor: "#F5F5F6",
    borderRadius: 10,
    margin: 1,
  },
  trashBox: {
    position: "absolute",
    bottom: 5,
    right: 1,
    alignSelf: "flex-end",
    fontSize: 30,
  },
  addButton: {
    position: "absolute", // これを設定することで、他のコンポーネントに邪魔されず固定することが可能
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#5dacbd",
    bottom: 40, // 要素が起点の下からどれだけ離れているかを示す
    right: 20, // 要素が起点の右からどれだけ離れているかを示す
    height: 50,
    width: 50,
    borderRadius: 50, // 要素の境界の外側の角を丸める
  },
  memoText: {
    alignItems: "flex-start",
    justifyContent: "flex-start",
    color: "black", // 文字の色
    fontSize: 15,
  },
  dayText: {
    alignItems: "flex-end",
    justifyContent: "flex-start",
    color: "black", // 文字の色
    fontSize: 14,
  },
  addText: {
    alignItems: "center",
    justifyContent: "center",
    color: "black", // 文字の色
    fontWeight: "bold", // 文字の太さ
    fontSize: 25,
  },
  logout: {
    position: "absolute",
    top: 30,
    right: 2,
    alignSelf: "flex-end",
    fontSize: 35,
    margin: 1,
  },
});
