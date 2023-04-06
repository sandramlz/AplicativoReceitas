import { useState, useEffect } from 'react'
import { View, Text, StyleSheet, SafeAreaView,TextInput, TouchableOpacity,
    FlatList,
} from 'react-native'

import { Logo } from '../../components/logo'
import {Ionicons} from '@expo/vector-icons'
import api from '../../services/api'
import {FoodList} from '../../components/foodlist'


export function Home(){

    const [inputValue, setInputValue] = useState("") 
    const [foods, setFoods] = useState([])

    useEffect(() => {
        
        async function fetchApi() {
            const response = await api.get("/foods")
            setFoods(response.data)
        }

        fetchApi();

    }, [])

    function handleSearch(){
        console.log("Voce digitou: ")
        console.log(inputValue)
    }



    return(
        <SafeAreaView style={styles.container}>
            <Logo></Logo>
            <Text style={styles.title}>Encontre a receita</Text>
            <Text style={styles.title}>que combina com voce</Text>

           
            <View style={styles.form}> 
                <TextInput 
                    placeholder="Digite o nome da comida ..."
                    style={styles.input}
                    value={inputValue}
                    onChangeText={(text) => setInputValue(text)}
                />

                
                <TouchableOpacity onPress={handleSearch}> 
                    <Ionicons name="search" size={28} color="#4CBE6C" />
                </TouchableOpacity>

            </View>

            <FlatList
                data={foods}
                keyExtractor={ (item) => String(item.id)}
                renderItem={ ({ item }) => <FoodList data={item}/> }
                showsVerticalScrollIndicator = {false}
            />

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#F3F9FF',
        paddingTop: 36,
        paddingStart: 14,
        paddingEnd: 14,
    },

    title:{
        fontSize: 26,
        fontWeight: 'bold',
        color: "#0e0e0e"

    },

    form:{
        backgroundColor: '#FFF',
        width: '100%', //va agarrar 100% de la largura que conseguir
        borderRadius: 8,
        marginTop: 16, //Para que desgrude del titulo de arrriba
        marginBottom: 16,
        borderWidth: 1,
        borderColor: '#ECECEC',
        paddingLeft: 8,
        paddingRight: 8,
        flexDirection: 'row', //Alinhar um do lado do outro
        alignItems: 'center',
        justifyContent: 'space-between',
    },

    input:{
        width: '90%',
        maxWidth:'90%',
        height: 54,
      

    }
})