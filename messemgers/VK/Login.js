import React from "react";
import {StyleSheet, Button, View, Intl} from "react-native";
//import * as AuthSession from 'expo-auth-session';

const token = "ТУТ_ТОКЕН";
//для получения токена зайти на https://vkhost.github.io/, выбрать настройки, ввести ID приложения 6146827,
//выбрать нужные права (сообщения, доступ в любое время), потом из адреса скопировать и вставить сюда

vk_auth = async () => {
  //нерабочая авторизация
  /*let redirectUrl = AuthSession.getRedirectUrl();
  let result = await AuthSession.startAsync({
      //authUrl: 'https://oauth.vk.com/authorize?client_id=7465536&display=mobile&redirect_uri=https://oauth.vk.com/blank.html&response_type=token&v=5.103',
      authUrl: 'https://oauth.vk.com/authorize?client_id=7465536&scope=messages&display=mobile&redirect_uri=' + encodeURIComponent(redirectUrl) + '&response_type=token&v=5.103',
  });
  if (result.type === 'success') {
    const response = await fetch('https://api.vk.com/method/users.get?v=5.103&access_token=' + result.params.access_token);
    const user = await response.json();
    console.log('https://vk.com/id' + user.response[0].id);
    console.log(user.response[0].first_name + ' ' + user.response[0].last_name);
  }*/

  //получение ссылки и имени пользователя
  const response = await fetch(
    "https://api.vk.com/method/users.get?v=5.103&access_token=" + token
  );
  const user = await response.json();
  console.log("https://vk.com/id" + user.response[0].id);
  console.log(user.response[0].first_name + " " + user.response[0].last_name);
};

//умеет из диалогов выбирать только людей, получать их имя, аватарку, получать последнее сообщение и определять
//текст там или что-то еще, его дату, время,  количество непрочитанных и кем отправлено (тобой не тобой)
vk_dialog_list = async () => {
  let dialog_list = await fetch(
    "https://api.vk.com/method/messages.getConversations?count=200&v=5.103&access_token=" +
      token
  );
  dialog_list = await dialog_list.json();
  dialog_list = dialog_list.response;
  dialog_list.items.forEach(function (item) {
    const conversation = item.conversation;
    let dialog = conversation.peer;
    dialog = dialog.type;
    if (dialog == "user") {
      const last_message = item.last_message;
      const last_message_to = last_message.peer_id;

      const get_user_info = async () => {
        let response = await fetch(
          "https://api.vk.com/method/users.get?user_ids=" +
            last_message_to +
            "&fields=photo_big&v=5.103&access_token=" +
            token
        );
        let user = await response.json();
        while (typeof user.response == "undefined") {
          response = await fetch(
            "https://api.vk.com/method/users.get?user_ids=" +
              last_message_to +
              "&fields=photo_big&v=5.103&access_token=" +
              token
          );
          user = await response.json();
        }
        console.log(
          user.response[0].first_name + " " + user.response[0].last_name
        );
        console.log(user.response[0].photo_big);
      };

      get_user_info();
      let last_message_text = last_message.text;
      if (typeof last_message.fwd_messages == "undefined") {
        const last_message_attachments = last_message.attachments;
        const last_message_attachment = last_message_attachments[0].type;
        if (last_message_attachment == "photo") {
          last_message_text = "Photo";
        }
        if (last_message_attachment == "video") {
          last_message_text = "Video";
        }
        if (last_message_attachment == "audio") {
          last_message_text = "Audio";
        }
        if (last_message_attachment == "doc") {
          last_message_text = "Document";
        }
        if (last_message_attachment == "point") {
          last_message_text = "Map";
        }
        if (last_message_attachment == "gift") {
          last_message_text = "Gift";
        }
        if (last_message_attachment == "link") {
          last_message_text = "Link";
        }
        if (last_message_attachment == "sticker") {
          last_message_text = "Sticker";
        }
        if (last_message_attachment == "wall") {
          last_message_text = "Wall post";
        }
      } else {
        last_message_text = "Forwarded messages";
      }
      console.log("Last message: " + last_message_text);
      const last_message_time = last_message.date;
      console.log(last_message_time);
      const last_message_from = last_message.from_id;
      if (last_message_from == last_message_to) {
        console.log("Who sent: not you");
      } else {
        console.log("Who sent: you");
      }
      const unread_count = conversation.unread_count;
      if (typeof unread_count == "undefined") {
        console.log("Unread count: 0");
      } else {
        console.log("Unread count: " + unread_count);
      }
      console.log("\n");
    }
  });
};

export const Login = (props) => {
  return (
    <View style={styles.button}>
      <Button
        onPress={() => {
          vk_auth();
        }}
        title="Login"
      />
      <Button
        onPress={() => {
          vk_dialog_list();
        }}
        title="Dialogs"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  button: {},
  text: {},
});
