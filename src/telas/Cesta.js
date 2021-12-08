import React from "react";
import { FlatList, StyleSheet, Image, Dimensions, Text, View } from "react-native";

import Topo from "./Cesta/components/Topo";
import Detalhes from "./Cesta/components/Detalhes";
import Item from "./Cesta/components/Item";
import Texto from "../components/Texto";

export default function Cesta({ topo, detalhes, itens }) {
    return <>
        <FlatList 
            data={itens.lista}
            renderItem={Item}
            keyExtractor={({nome}) => nome}
            ListHeaderComponent={() => {
                return <>
                    <Topo {...topo} />
                    <View style={estilos.cesta}>
                        <Detalhes {...detalhes} /> 
                        <Texto style={estilos.titulo}>{itens.titulo}</Texto>         
                    </View>
                </>
            }}
        />
    <link rel="shortcut icon" href="#"></link>
    </>
}

const estilos = StyleSheet.create({
    
    titulo: {
        color: "#464646",
        fontWeight: "bold",
        marginTop: 32,
        marginBottom: 8,
        fontSize: 20,
        lineHeight: 32,
    },

    cesta: {
        paddingVertical: 8,
        paddingHorizontal: 16
    },
    lista: {
        paddingHorizontal: 16
    }
    
});