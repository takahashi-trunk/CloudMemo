import React from 'react';
import {
  //StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
} from 'react-native';
//各種ボタンのアイコン
import { MaterialCommunityIcons } from '@expo/vector-icons';

// リスト表示したい配列のデータ
const MEMO = [
  {
    id: '1',
    text: 'メモ内容1',
    date: '2024/01/01',
  },
  {
    id: '2',
    text: 'メモ内容2',
    date: '2024/01/01',
  },
  {
    id: '3',
    text: 'メモ内容3',
    date: '2024/01/01',
  },
  {
    id: '4',
    text: 'メモ内容4',
    date: '2024/01/01',
  },
];

// リストのレンダリング
const renderItem = ({ item }) => {
  return (
    <View style={styles.item}>
      <Text style={styles.memoText}>{item.text}</Text>
      <Text style={styles.dateText}>{item.date}</Text>
      <TouchableOpacity style={styles.trashBox}>
        <MaterialCommunityIcons
          style={styles.trashBox}
          name='trash-can-outline'
          size={20}
          color='#bbb'
        />
      </TouchableOpacity>
    </View>
  );
};

// コンポーネント本体
export default function FlatMemoList() {
  return (
    <View style={styles.container}>
      <FlatList
        data={MEMO}
        renderItem={renderItem}
        keyExtractor={(item, index) => {
          return index.toString();
        }}
      />
      <View style={styles.inputArea}>
        <Text style={styles.title}>メモ一覧 </Text>
      </View>
      <View style={styles.memoArea}></View>
      <TouchableOpacity style={[styles.button, styles.addButton]}>
        <Text style={styles.addText}>+</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.logout}>
        <MaterialCommunityIcons style={styles.logout} name='logout' size={24} color='black' />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d4e4e7',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  title: {
    color: 'black', // 文字の色
    margin: 40,
    paddingHorizontal: 10, // 要素の内側の余白（左右）
    height: 35, // 高さ
    width: 150, // 幅
    fontSize: 30, // 文字の大きさ
    bottom: 710,
  },
  item: {
    backgroundColor: '#F5F5F6',
    alignItems: 'flex-start',
    justifyContent: 'center',
    height: 55,
    width: 300,
    padding: 10,
    marginVertical: 2,
    borderRadius: 10,
    paddingHorizontal: 10, // 要素の内側の余白（左右）
    top: 110,
  },
  memoArea: {
    margin: 1, // 要素の外側の余白
    paddingHorizontal: 10, // 要素の内側の余白（左右）
  },
  memoText: {
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    color: 'black', // 文字の色
    fontSize: 15,
  },
  dateText: {
    alignItems: 'flex-end',
    justifyContent: 'flex-start',
    color: 'black', // 文字の色
    fontSize: 14,
  },
  button: {
    paddingHorizontal: 10, // 要素の内側の余白（左右）
    alignItems: 'flex-start',
    justifyContent: 'center',
    height: 50,
    width: 300,
    backgroundColor: '#F5F5F6',
    borderRadius: 10,
    margin: 1,
  },
  trashBox: {
    position: 'absolute',
    bottom: 6,
    right: 1,
    alignSelf: 'flex-end',
    fontSize: 30,
  },
  addButton: {
    position: 'absolute', // これを設定することで、他のコンポーネントに邪魔されず固定することが可能
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#5dacbd',
    bottom: 40, // 要素が起点の下からどれだけ離れているかを示す
    right: 20, // 要素が起点の右からどれだけ離れているかを示す
    height: 50,
    width: 50,
    borderRadius: 50, // 要素の境界の外側の角を丸める
  },
  addText: {
    alignItems: 'center',
    justifyContent: 'center',
    color: 'black', // 文字の色
    fontWeight: 'bold', // 文字の太さ
    fontSize: 25,
  },
  logout: {
    position: 'absolute',
    top: 30,
    right: 2,
    alignSelf: 'flex-end',
    fontSize: 35,
    margin: 1,
  },
});
