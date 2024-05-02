import React, { useState } from "react";
import { View, Image } from "react-native";
import { Button, Text, TextInput } from "react-native-paper";
import { styles } from "../config/styles";

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [error, setError] = useState(""); 

  const handleLogin = () => {
  
    if (!email.trim() || !senha.trim()) {
      setError("Por favor, preencha todos os campos.");

      return;
    }


     
     
      
    else {

      navigation.navigate("HomeScreen");
      setError("Credenciais inválidas. Por favor, tente novamente.");
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.container_inner}>

  <Image 
     source={require("../../assets/MicrosoftTeams-image.png")} 
     style={{ width: 200, height: 200 }}/>
        <Text variant="titleLarge">Página de Login!</Text>
        {/* Exibir mensagem de erro, se houver */}
        {error ? <Text style={styles.errorText}>{error}</Text> : null}        <TextInput
         activeUnderlineColor="hotpink"
          label={"Email"}
          placeholder={"Digite seu e-mail"}
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
        
   activeUnderlineColor="hotpink"
          label={"Senha"}
          placeholder={"Digite sua Senha"}
          value={senha}
          onChangeText={setSenha}
          style={styles.esp}
          secureTextEntry // Para esconder a senha
        />
        <Button mode="contained" onPress={handleLogin} buttonColor="hotpink">
          Login
        </Button>
        <Button onPress={() => navigation.navigate("RegisterScreen")} textColor="hotpink">
          Fazer Cadastro
        </Button>
      </View>
    </View>
  );
}
