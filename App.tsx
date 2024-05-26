import React from 'react';
import { View, Text, TextInput, Image, Button, ScrollView } from 'react-native';

const App = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Selamat datang di Aplikasi Penjualan baju online</Text>
      <TextInput placeholder="Cari produk..." />
      <ScrollView>
        <Image
        source={{uri:'https://th.bing.com/th/id/OIP.heRUCAEBVU7JID9F8r6TCwHaLR?w=202&h=308&c=7&r=0&o=5&dpr=1.3&pid=1.7'}}style={{width:200,height:200}}/>
        <Image
        source={{uri:'https://th.bing.com/th/id/OIP.pUXb2SWHnxrzlJflZ0VYBgHaJX?w=202&h=256&c=7&r=0&o=5&dpr=1.3&pid=1.7'}}style={{width:200,height:200}}/>
        <Image
        source={{uri:'https://th.bing.com/th/id/OIP.SAbOsbhURyadgC5vAwXoSAHaHa?w=202&h=202&c=7&r=0&o=5&dpr=1.3&pid=1.7'}}style={{width:200,height:200}}/>
      </ScrollView>
      <Button title="Beli" onPress={() => ('Produk telah ditambahkan ke keranjang belanja')} />
    </View>
  );
};

export default App;