import { View, Text, Image, ScrollView } from 'react-native'
import React from 'react'

const items = [
    {
        image: require('../assets/images/korean.jpg'),
        text: 'Korean',
    },
    {
        image: require('../assets/images/icecream.avif'),
        text: 'Dessert',
    },
    {
        image: require('../assets/images/chinese.jpg'),
        text: 'Chinese',
    },
    {
        image: require('../assets/images/indian.jpg'),
        text: 'Indian',
    },
    {
        image: require('../assets/images/sushi.jpg'),
        text: 'Sushi',
    },
    {
        image: require('../assets/images/drinks.avif'),
        text: 'Drink',
    },
    {
        image: require('../assets/images/shawarma.avif'),
        text: 'Shawarma',
    },
    {
        image: require('../assets/images/muffin.jpg'),
        text: 'Muffin',
    },
];

export default function Categories() {
    return (
      <View
        style={{
          marginTop: 5,
          backgroundColor: "#fff",
          paddingVertical: 10,
          paddingLeft: 20,
        }}
      >
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {items.map((item, index) => (
            <View key={index} style={{ alignItems: "center", marginRight: 30 }}>
              <Image
                source={item.image}
                style={{
                  width: 50,
                  height: 40,
                  resizeMode: "contain",
                }}
              />
              <Text style={{ fontSize: 13, fontWeight: "900" }}>{item.text}</Text>
            </View>
          ))}
        </ScrollView>
      </View>
    );
  }