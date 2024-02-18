import React, { useEffect, useState } from "react";
import Input_Field from "../components/Input_Field";
import { Custom_Button } from "../components/Custom_Button";
import { database } from "../config/firebase-config";
import { child, onValue, push, ref, set, update } from "firebase/database";

export const Messages = () => {
  const [user_input, setUser_input] = useState("");
  const [messages_data, setMessages_data] = useState([]);

  const change_handle = (e) => {
    setUser_input(e.target.value);
  };

  const submit_handle = () => {
    const new_message_key = push(child(ref(database), "messages")).key;
    set(ref(database, `messages/${new_message_key}`), {
      text: user_input,
      key: new_message_key,
    }).then((res) => {
      //   alert("Message sent");
    });
  };

  const update_handle = () => {
    set(ref(database, `messages/-Nqrowxx2JBpZhah-b8y`), {
      text: "updated text using set method",
    });
    // update(ref(db, 'messages'), updates);
  };

  useEffect(() => {
    const database_ref = ref(database, "messages/");
    onValue(database_ref, (snapshot) => {
      const data = snapshot.val();

      const convert_to_array = Object.values(data);

      setMessages_data(convert_to_array);

      console.log(data);
    });
  }, []);
  //   console.log(user_input);

  return (
    <div className="mx-3">
      <div className="flex items-center space-x-2">
        <Input_Field
          placeholder="Enter text here... "
          onChange={change_handle}
        />
        <Custom_Button onClick={submit_handle}>Send Message</Custom_Button>
      </div>

      <Custom_Button onClick={update_handle}>Update Data</Custom_Button>
      <div>
        <ul>
          {messages_data.map((msg) => {
            return <li>{msg.text}</li>;
          })}
        </ul>
      </div>
    </div>
  );
};
