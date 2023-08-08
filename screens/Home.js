import React from "react";
import {View, Text, SafeAreaView } from 'react-native';
import SearchBar from "../components/searchBar";
import Categories from "../components/Categories";

export default function Home () {
    return (
        <SafeAreaView style = {{backgroundColor: '#eee', flex: 1}}>
            <View style={{backgroundColor:"white", padding: 15}}>
                <SearchBar />
            </View>
            <Categories />
        </SafeAreaView>
    );
}