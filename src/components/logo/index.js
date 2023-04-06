import { View, Text, StyleSheet} from 'react-native'

export function Logo(){
    return(
        <View style={styles.logoArea}>
            <Text style={styles.logo}>Receita Facil</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    logoArea:{
        backgroundColor: "#4CBE6C",
        alignSelf:"flex-start", //Para que el color agarre solo el texto Receitas
        padding: 8, //Espaciamiento interno
        paddingLeft: 16, //
        paddingRight: 20,
        borderTopRightRadius: 8, //Arredondar a bordinha de acima a direita
        borderBottomLeftRadius: 8, //Arredondar a bordinha de acima a esquerda
        borderTopLeftRadius: 8,  //Arrodondar borda do topo da izquerda
        borderBottomRightRadius: 32, //Arrodondar borda do topo da direita
        marginBottom: 8, //Para que el texto de abajo siempre tenga un espacio entre el tirulo

    },
    logo:{
        fontSize: 18,
        fontWeight: "bold",
        color: "#FFF"
    }
})