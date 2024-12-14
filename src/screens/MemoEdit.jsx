import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

import MaterialIcons from '@expo/vector-icons/MaterialIcons'; //アイコンを扱うためのライブラリ

import moment from 'moment'; // 日付を扱うためのライブラリ

import { db } from '../../firebase';
import { doc, updateDoc, addDoc, collection } from 'firebase/firestore'; // 保存に必要な関数
import { isSignInWithEmailLink } from 'firebase/auth';

export default function MemoEdit({ navigation, route }) {
  // パラメータの取得
  const { isNew, userId, docId, memo: paramMemo } = route.params;
  console.log('isNew', isNew);
  console.log('userId', userId);
  console.log('docId', docId);
  console.log('memo', memo);

  // 状態管理
  const [memo, setMemo] = useState(paramMemo);

  //保存ボタン押下
  const save = () => {
    if (isNew) {
      if (memo) {
        //新規作成
        memoCreate();
      } else {
        navigation.goBack();
      }
    } else {
      if (memo) {
        //更新
        memoUpdate();
      } else {
        //削除
        memoDelete();
      }
    }
  };

  // 新規作成
  const memoCreate = async () => {
    const date = moment().format('YYYY-MM-DD HH:mm:ss'); // 現在の日付を取得

    try {
      const memosCollectionRef = collection(db, 'users', userId, 'memos'); // 保存先のコレクションを指定
      await addDoc(memosCollectionRef, { memo, date }); // データを Firestore に保存
      console.log('新規メモ作成完了');
      navigation.goBack(); // 前の画面に戻る
    } catch (err) {
      console.error('新規メモ作成に失敗しました:', err); // エラーが発生した場合に表示
    }
  };

  // 更新（編集）
  const memoUpdate = async () => {
    const date = moment().format('YYYY-MM-DD HH:mm:ss'); // 現在の日付を取得

    try {
      // Firestore内の指定ドキュメントを参照（ドキュメント参照を取得）
      const docRef = doc(db, 'users', userId, 'memos', docId);

      // ドキュメントを更新
      await updateDoc(docRef, { memo: memo, date: date });
      console.log('メモの更新に成功しました');
      navigation.goBack(); // 前の画面に戻る
    } catch (error) {
      console.error('メモの更新に失敗しました: ', error);
    }
  };

  // ヘッダーの設定(保存ボタン)
  useEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <TouchableOpacity onPress={save}>
            <MaterialIcons name='save-alt' size={24} color='black' />
          </TouchableOpacity>
        );
      },
    });
  }, [navigation, memoCreate]);
  // ヘッダーの設定(キャンセルボタン)
  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => {
        return (
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Text style={styles.cancelText}>キャンセル</Text>
            {/* <MaterialCommunityIcons name='logout' size={24} color='#5dacbd' /> */}
          </TouchableOpacity>
        );
      },
    });
  }, [navigation]);

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textInput}
        multiline={true}
        placeholder='メモ編集内容'
        value={memo}
        autoCorrect={false}
        onChangeText={(text) => {
          console.log(memo); //入力値確認用
          // メモ編集内容の状態を更新
          setMemo(text);
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //flexDirection: "row",
    backgroundColor: '#d4e4e7',
  },

  textInput: {
    paddingHorizontal: 10, // 要素の内側の余白（左右）
    flex: 1,
    height: '100%', // 高さ
    width: '100%', // 幅
    backgroundColor: '#eee',
    fontSize: 17, // 文字の大きさ
    alignSelf: 'flex-start',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    color: 'black', // 文字の色
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 40,
    width: 90,
    backgroundColor: '#5dacbd',
    borderRadius: 10,
  },
  saveButton: {
    position: 'absolute',
    top: 50,
    right: 10,
    //alignSelf: "flex-end",
    fontSize: 35,
    margin: 1,
    //backgroundColor: "#5dacbd",
    //marginBottom: 10,
  },
  saveText: {
    color: 'black', // 文字の色
    fontWeight: 'bold', // 文字の太さ
    fontSize: 16,
  },
  cancelButton: {
    position: 'absolute',
    top: 50,
    left: 10,
    //alignSelf: "flex-start",
    fontSize: 35,
    margin: 1,
    //backgroundColor: "#5dacbd",
    //marginBottom: 10,
  },
  cancelText: {
    color: 'black', // 文字の色
    fontWeight: 'bold', // 文字の太さ
    fontSize: 16,
  },
});
